import {
    SigningStargateClient,
    calculateFee,
    GasPrice
} from '@cosmjs/stargate';

export const estimateOsmoFee = async (client: SigningStargateClient, address: string, msgs: any[], memo: string) => {
    const gasPrice = GasPrice.fromString('0.025uosmo');
    const gasEstimation = await client.simulate(address, msgs, memo);
    const fee = calculateFee(Math.round(gasEstimation * 1.3), gasPrice);
    return fee;
};
