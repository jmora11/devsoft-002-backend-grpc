// package: customer
// file: customer.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Comment extends jspb.Message { 
    getComment(): string;
    setComment(value: string): Comment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Comment.AsObject;
    static toObject(includeInstance: boolean, msg: Comment): Comment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Comment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Comment;
    static deserializeBinaryFromReader(message: Comment, reader: jspb.BinaryReader): Comment;
}

export namespace Comment {
    export type AsObject = {
        comment: string,
    }
}

export class CustomerDef extends jspb.Message { 
    getName(): string;
    setName(value: string): CustomerDef;
    getAge(): number;
    setAge(value: number): CustomerDef;
    getStatus(): UserStatus;
    setStatus(value: UserStatus): CustomerDef;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerDef.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerDef): CustomerDef.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerDef, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerDef;
    static deserializeBinaryFromReader(message: CustomerDef, reader: jspb.BinaryReader): CustomerDef;
}

export namespace CustomerDef {
    export type AsObject = {
        name: string,
        age: number,
        status: UserStatus,
    }
}

export class CustomerResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): CustomerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerResponse): CustomerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerResponse;
    static deserializeBinaryFromReader(message: CustomerResponse, reader: jspb.BinaryReader): CustomerResponse;
}

export namespace CustomerResponse {
    export type AsObject = {
        message: string,
    }
}

export enum UserStatus {
    UNKNOWN = 0,
    OFFLINE = 1,
    BUSY = 2,
    AVAILABLE = 3,
}
