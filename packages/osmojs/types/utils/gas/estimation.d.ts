import { SigningStargateClient } from '@cosmjs/stargate';
export declare const estimateOsmoFee: (client: SigningStargateClient, address: string, msgs: any[], memo: string) => Promise<import("@cosmjs/stargate").StdFee>;
