import { LCDClient } from "@osmonauts/lcd";
import { PoolsRequest, PoolsResponseSDKType, ParamsRequest, ParamsResponseSDKType, ContractInfoByPoolIdRequest, ContractInfoByPoolIdResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    pools(params?: PoolsRequest): Promise<PoolsResponseSDKType>;
    params(_params?: ParamsRequest): Promise<ParamsResponseSDKType>;
    contractInfoByPoolId(params: ContractInfoByPoolIdRequest): Promise<ContractInfoByPoolIdResponseSDKType>;
}
