import { MsgRegisterPayee, MsgRegisterCounterpartyPayee, MsgPayPacketFee, MsgPayPacketFeeAsync } from "./tx";
export declare const AminoConverter: {
    "/ibc.applications.fee.v1.MsgRegisterPayee": {
        aminoType: string;
        toAmino: (message: MsgRegisterPayee) => import("./tx").MsgRegisterPayeeAmino;
        fromAmino: (object: import("./tx").MsgRegisterPayeeAmino) => MsgRegisterPayee;
    };
    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
        aminoType: string;
        toAmino: (message: MsgRegisterCounterpartyPayee) => import("./tx").MsgRegisterCounterpartyPayeeAmino;
        fromAmino: (object: import("./tx").MsgRegisterCounterpartyPayeeAmino) => MsgRegisterCounterpartyPayee;
    };
    "/ibc.applications.fee.v1.MsgPayPacketFee": {
        aminoType: string;
        toAmino: (message: MsgPayPacketFee) => import("./tx").MsgPayPacketFeeAmino;
        fromAmino: (object: import("./tx").MsgPayPacketFeeAmino) => MsgPayPacketFee;
    };
    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
        aminoType: string;
        toAmino: (message: MsgPayPacketFeeAsync) => import("./tx").MsgPayPacketFeeAsyncAmino;
        fromAmino: (object: import("./tx").MsgPayPacketFeeAsyncAmino) => MsgPayPacketFeeAsync;
    };
};
