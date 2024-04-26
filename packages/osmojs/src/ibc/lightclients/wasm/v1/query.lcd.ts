//@ts-nocheck
import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryChecksumsRequest, QueryChecksumsResponseSDKType, QueryCodeRequest, QueryCodeResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.checksums = this.checksums.bind(this);
    this.code = this.code.bind(this);
  }
  /* Get all Wasm checksums */
  async checksums(params: QueryChecksumsRequest = {
    pagination: undefined
  }): Promise<QueryChecksumsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/lightclients/wasm/v1/checksums`;
    return await this.req.get<QueryChecksumsResponseSDKType>(endpoint, options);
  }
  /* Get Wasm code for given checksum */
  async code(params: QueryCodeRequest): Promise<QueryCodeResponseSDKType> {
    const endpoint = `ibc/lightclients/wasm/v1/checksums/${params.checksum}/code`;
    return await this.req.get<QueryCodeResponseSDKType>(endpoint);
  }
}