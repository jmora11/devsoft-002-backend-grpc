// package: customer
// file: customer.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as customer_pb from "./customer_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ICustomerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    saveCustomers: ICustomerService_ISaveCustomers;
    getRamdomCustomer: ICustomerService_IGetRamdomCustomer;
    getComments: ICustomerService_IGetComments;
    liveChat: ICustomerService_ILiveChat;
}

interface ICustomerService_ISaveCustomers extends grpc.MethodDefinition<customer_pb.CustomerDef, customer_pb.CustomerResponse> {
    path: "/customer.Customer/SaveCustomers";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<customer_pb.CustomerDef>;
    requestDeserialize: grpc.deserialize<customer_pb.CustomerDef>;
    responseSerialize: grpc.serialize<customer_pb.CustomerResponse>;
    responseDeserialize: grpc.deserialize<customer_pb.CustomerResponse>;
}
interface ICustomerService_IGetRamdomCustomer extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, customer_pb.CustomerDef> {
    path: "/customer.Customer/GetRamdomCustomer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<customer_pb.CustomerDef>;
    responseDeserialize: grpc.deserialize<customer_pb.CustomerDef>;
}
interface ICustomerService_IGetComments extends grpc.MethodDefinition<customer_pb.CustomerDef, customer_pb.Comment> {
    path: "/customer.Customer/GetComments";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<customer_pb.CustomerDef>;
    requestDeserialize: grpc.deserialize<customer_pb.CustomerDef>;
    responseSerialize: grpc.serialize<customer_pb.Comment>;
    responseDeserialize: grpc.deserialize<customer_pb.Comment>;
}
interface ICustomerService_ILiveChat extends grpc.MethodDefinition<customer_pb.Comment, customer_pb.Comment> {
    path: "/customer.Customer/LiveChat";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<customer_pb.Comment>;
    requestDeserialize: grpc.deserialize<customer_pb.Comment>;
    responseSerialize: grpc.serialize<customer_pb.Comment>;
    responseDeserialize: grpc.deserialize<customer_pb.Comment>;
}

export const CustomerService: ICustomerService;

export interface ICustomerServer {
    saveCustomers: grpc.handleClientStreamingCall<customer_pb.CustomerDef, customer_pb.CustomerResponse>;
    getRamdomCustomer: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, customer_pb.CustomerDef>;
    getComments: grpc.handleServerStreamingCall<customer_pb.CustomerDef, customer_pb.Comment>;
    liveChat: grpc.handleBidiStreamingCall<customer_pb.Comment, customer_pb.Comment>;
}

export interface ICustomerClient {
    saveCustomers(callback: (error: grpc.ServiceError | null, response: customer_pb.CustomerResponse) => void): grpc.ClientWritableStream<customer_pb.CustomerDef>;
    saveCustomers(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_pb.CustomerResponse) => void): grpc.ClientWritableStream<customer_pb.CustomerDef>;
    saveCustomers(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_pb.CustomerResponse) => void): grpc.ClientWritableStream<customer_pb.CustomerDef>;
    saveCustomers(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_pb.CustomerResponse) => void): grpc.ClientWritableStream<customer_pb.CustomerDef>;
    getRamdomCustomer(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: customer_pb.CustomerDef) => void): grpc.ClientUnaryCall;
    getRamdomCustomer(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_pb.CustomerDef) => void): grpc.ClientUnaryCall;
    getRamdomCustomer(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_pb.CustomerDef) => void): grpc.ClientUnaryCall;
    getComments(request: customer_pb.CustomerDef, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<customer_pb.Comment>;
    getComments(request: customer_pb.CustomerDef, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<customer_pb.Comment>;
    liveChat(): grpc.ClientDuplexStream<customer_pb.Comment, customer_pb.Comment>;
    liveChat(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<customer_pb.Comment, customer_pb.Comment>;
    liveChat(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<customer_pb.Comment, customer_pb.Comment>;
}

export class CustomerClient extends grpc.Client implements ICustomerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public saveCustomers(callback: (error: grpc.ServiceError | null, response: customer_pb.CustomerResponse) => void): grpc.ClientWritableStream<customer_pb.CustomerDef>;
    public saveCustomers(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_pb.CustomerResponse) => void): grpc.ClientWritableStream<customer_pb.CustomerDef>;
    public saveCustomers(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_pb.CustomerResponse) => void): grpc.ClientWritableStream<customer_pb.CustomerDef>;
    public saveCustomers(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_pb.CustomerResponse) => void): grpc.ClientWritableStream<customer_pb.CustomerDef>;
    public getRamdomCustomer(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: customer_pb.CustomerDef) => void): grpc.ClientUnaryCall;
    public getRamdomCustomer(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: customer_pb.CustomerDef) => void): grpc.ClientUnaryCall;
    public getRamdomCustomer(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: customer_pb.CustomerDef) => void): grpc.ClientUnaryCall;
    public getComments(request: customer_pb.CustomerDef, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<customer_pb.Comment>;
    public getComments(request: customer_pb.CustomerDef, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<customer_pb.Comment>;
    public liveChat(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<customer_pb.Comment, customer_pb.Comment>;
    public liveChat(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<customer_pb.Comment, customer_pb.Comment>;
}
