import { LCDClient } from "@osmonauts/lcd";
import { QueryInterchainAccountRequest, QueryInterchainAccountResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    interchainAccount(params: QueryInterchainAccountRequest): Promise<QueryInterchainAccountResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
