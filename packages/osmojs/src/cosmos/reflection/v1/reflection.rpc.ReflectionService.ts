//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { FileDescriptorsRequest, FileDescriptorsResponse } from "./reflection";
/** Package cosmos.reflection.v1 provides support for inspecting protobuf
 file descriptors. */
export interface ReflectionService {
  /**
   * FileDescriptors queries all the file descriptors in the app in order
   * to enable easier generation of dynamic clients.
   */
  fileDescriptors(request?: FileDescriptorsRequest): Promise<FileDescriptorsResponse>;
}
export class ReflectionServiceClientImpl implements ReflectionService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.fileDescriptors = this.fileDescriptors.bind(this);
  }
  fileDescriptors(request: FileDescriptorsRequest = {}): Promise<FileDescriptorsResponse> {
    const data = FileDescriptorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.reflection.v1.ReflectionService", "FileDescriptors", data);
    return promise.then(data => FileDescriptorsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ReflectionServiceClientImpl(rpc);
  return {
    fileDescriptors(request?: FileDescriptorsRequest): Promise<FileDescriptorsResponse> {
      return queryService.fileDescriptors(request);
    }
  };
};