import 'dotenv/config';
import * as grpc from 'grpc';
import customerHandler from './handlers/CustomerHandler';


const port: string | number = process.env.PORT || 50051;

export const startServer = (): void => {

    const server: grpc.Server = new grpc.Server();

    server.addService(customerHandler.service, customerHandler.handler);

    server.bindAsync(
        `0.0.0.0:${ port }`,
        grpc.ServerCredentials.createInsecure(),
        (err: Error, port: number) => {
            if (err != null) {
                return console.error(err);
            }
            console.log(`gRPC listening on ${ port }`);
        },
    );

    server.start();
};

startServer();