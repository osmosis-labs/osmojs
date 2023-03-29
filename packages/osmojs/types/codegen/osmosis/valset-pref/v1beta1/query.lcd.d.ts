import { LCDClient } from "@osmonauts/lcd";
import { UserValidatorPreferencesRequest, UserValidatorPreferencesResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    userValidatorPreferences(params: UserValidatorPreferencesRequest): Promise<UserValidatorPreferencesResponseSDKType>;
}
