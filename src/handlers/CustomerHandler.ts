import * as grpc from '@grpc/grpc-js';
import { sendUnaryData, ServerDuplexStream } from 'grpc';
import { CustomerDef, CustomerResponse, Comment } from '../proto/customer/customer_pb';
import { CustomerService, ICustomerServer } from '../proto/customer/customer_grpc_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { addComments, countCustomers, createCustomer, getCustomerComments, getCustomerId } from "../services/CustomerService";
import { getCommentsBD, getCustomerBD } from '../utils/utils';

class CustomerHandler implements ICustomerServer {

    public getComments = async(
        call: grpc.ServerWritableStream<CustomerDef, Comment>
    ): Promise<void> => {
        const customer = call.request as CustomerDef;
        const id = await getCustomerId(customer.getName());
        const com = await getCommentsBD(id[0].id_customer)

        for (const comment of com) {
            call.write(comment );
        }
        call.end();
    }

    public getRamdomCustomer = async(
            call: grpc.ServerUnaryCall<Empty, CustomerDef>,
            callback: sendUnaryData<CustomerDef>
        ): Promise<void> => {
        try {
            const numCustomers = await countCustomers();
            const cusBD = await getCustomerBD(numCustomers[0]['count(*)']);
            callback(null, cusBD);
        } catch (error) {
            console.log('Error', error);
            callback(error, null);
        }

    }

    public saveCustomers = async(
            call: grpc.ServerReadableStream<CustomerDef, Empty>,
            callback: sendUnaryData<CustomerResponse>
        ): Promise<void> => {

        const reply: CustomerResponse = new CustomerResponse();
        const customers: any[] = [];

        call.on("data", (customer: CustomerDef) => {
            console.log('Customer: ', customer.toObject());
            customers.push(customer.toObject());
          });

        call.on("end", async () => {
            customers.forEach(customer => {
                console.log(`Añadiendo usuario`, customer.name);
                createCustomer(customer.name, customer.age, customer.status);
            })
            
            reply.setMessage(`Se añadieron usuarios ${customers.length}`);
            callback(null, reply);
        });
    }

    public liveChat = async(call: ServerDuplexStream<Comment, Comment>
    ): Promise<void> => {
        const com = await getCommentsBD(34);

        for (const comment of com) {
            call.write(comment);
        }
        call.on('data', async(comment: Comment) => {
            const comentt = comment.toObject();
            await addComments(comentt.comment);
        });
        call.on('end', () => call.end());
    }
}

export default {
    service: CustomerService,                // Service interface
    handler: new CustomerHandler(),          // Service interface definitions
};