// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var customer_pb = require('./customer_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_customer_Comment(arg) {
  if (!(arg instanceof customer_pb.Comment)) {
    throw new Error('Expected argument of type customer.Comment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customer_Comment(buffer_arg) {
  return customer_pb.Comment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customer_CustomerDef(arg) {
  if (!(arg instanceof customer_pb.CustomerDef)) {
    throw new Error('Expected argument of type customer.CustomerDef');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customer_CustomerDef(buffer_arg) {
  return customer_pb.CustomerDef.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customer_CustomerResponse(arg) {
  if (!(arg instanceof customer_pb.CustomerResponse)) {
    throw new Error('Expected argument of type customer.CustomerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customer_CustomerResponse(buffer_arg) {
  return customer_pb.CustomerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var CustomerService = exports.CustomerService = {
  saveCustomers: {
    path: '/customer.Customer/SaveCustomers',
    requestStream: true,
    responseStream: false,
    requestType: customer_pb.CustomerDef,
    responseType: customer_pb.CustomerResponse,
    requestSerialize: serialize_customer_CustomerDef,
    requestDeserialize: deserialize_customer_CustomerDef,
    responseSerialize: serialize_customer_CustomerResponse,
    responseDeserialize: deserialize_customer_CustomerResponse,
  },
  getRamdomCustomer: {
    path: '/customer.Customer/GetRamdomCustomer',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: customer_pb.CustomerDef,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_customer_CustomerDef,
    responseDeserialize: deserialize_customer_CustomerDef,
  },
  getComments: {
    path: '/customer.Customer/GetComments',
    requestStream: false,
    responseStream: true,
    requestType: customer_pb.CustomerDef,
    responseType: customer_pb.Comment,
    requestSerialize: serialize_customer_CustomerDef,
    requestDeserialize: deserialize_customer_CustomerDef,
    responseSerialize: serialize_customer_Comment,
    responseDeserialize: deserialize_customer_Comment,
  },
  liveChat: {
    path: '/customer.Customer/LiveChat',
    requestStream: true,
    responseStream: true,
    requestType: customer_pb.Comment,
    responseType: customer_pb.Comment,
    requestSerialize: serialize_customer_Comment,
    requestDeserialize: deserialize_customer_Comment,
    responseSerialize: serialize_customer_Comment,
    responseDeserialize: deserialize_customer_Comment,
  },
};

exports.CustomerClient = grpc.makeGenericClientConstructor(CustomerService);
