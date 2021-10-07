import * as grpc from '@grpc/grpc-js';
import { sendUnaryData } from 'grpc';
import { CustomerDef, CustomerResponse } from '../proto/customer/customer_pb';
import { CustomerService, ICustomerServer } from '../proto/customer/customer_grpc_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { countCustomers, createCustomer } from "../services/CustomerService";
import { getCustomerBD } from '../utils/utils';

class CustomerHandler implements ICustomerServer {

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
            customers.push(customer.toObject());
          });

        call.on("end", async () => {
            console.log('CUSTOMERSS', customers);
            customers.forEach(customer => {
                console.log(`Añadiendo usuario ${customer.name}`);
                createCustomer(customer.name, customer.age, customer.status);
            })
            
            reply.setMessage(`Se añadieron usuarios ${customers.length}`);
            callback(null, reply);
        });
    };
}

export default {
    service: CustomerService,                // Service interface
    handler: new CustomerHandler(),          // Service interface definitions
};