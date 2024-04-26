export interface BroadcastTxResponse {
    height: number;
    code: number;
    transactionHash: string;
    rawLog?: any;
}