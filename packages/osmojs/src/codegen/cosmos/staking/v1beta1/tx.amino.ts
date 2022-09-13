import { Description, CommissionRates } from "./staking";
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { AminoMsg, decodeBech32Pubkey, encodeBech32Pubkey } from "@cosmjs/amino";
import { fromBase64, toBase64 } from "@cosmjs/encoding";
import { Long } from "@osmonauts/helpers";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate } from "./tx";
export interface AminoMsgCreateValidator extends AminoMsg {
  type: "cosmos-sdk/MsgCreateValidator";
  value: {
    description: {
      moniker: string;
      identity: string;
      website: string;
      security_contact: string;
      details: string;
    };
    commission: {
      rate: string;
      max_rate: string;
      max_change_rate: string;
    };
    min_self_delegation: string;
    delegator_address: string;
    validator_address: string;
    pubkey: {
      type_url: string;
      value: Uint8Array;
    };
    value: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgEditValidator extends AminoMsg {
  type: "cosmos-sdk/MsgEditValidator";
  value: {
    description: {
      moniker: string;
      identity: string;
      website: string;
      security_contact: string;
      details: string;
    };
    validator_address: string;
    commission_rate: string;
    min_self_delegation: string;
  };
}
export interface AminoMsgDelegate extends AminoMsg {
  type: "cosmos-sdk/MsgDelegate";
  value: {
    delegator_address: string;
    validator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgBeginRedelegate extends AminoMsg {
  type: "cosmos-sdk/MsgBeginRedelegate";
  value: {
    delegator_address: string;
    validator_src_address: string;
    validator_dst_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgUndelegate extends AminoMsg {
  type: "cosmos-sdk/MsgUndelegate";
  value: {
    delegator_address: string;
    validator_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export const AminoConverter = {
  "/cosmos.staking.v1beta1.MsgCreateValidator": {
    aminoType: "cosmos-sdk/MsgCreateValidator",
    toAmino: ({
      description,
      commission,
      min_self_delegation,
      delegator_address,
      validator_address,
      pubkey,
      value
    }: MsgCreateValidator): AminoMsgCreateValidator["value"] => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          security_contact: description.security_contact,
          details: description.details
        },
        commission: {
          rate: commission.rate,
          max_rate: commission.max_rate,
          max_change_rate: commission.max_change_rate
        },
        min_self_delegation,
        delegator_address,
        validator_address,
        pubkey: {
          typeUrl: "/cosmos.crypto.secp256k1.PubKey",
          value: fromBase64(decodeBech32Pubkey(pubkey).value)
        },
        value: {
          denom: value.denom,
          amount: Long.fromNumber(value.amount).toString()
        }
      };
    },
    fromAmino: ({
      description,
      commission,
      min_self_delegation,
      delegator_address,
      validator_address,
      pubkey,
      value
    }: AminoMsgCreateValidator["value"]): MsgCreateValidator => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          security_contact: description.security_contact,
          details: description.details
        },
        commission: {
          rate: commission.rate,
          max_rate: commission.max_rate,
          max_change_rate: commission.max_change_rate
        },
        min_self_delegation,
        delegator_address,
        validator_address,
        pubkey: encodeBech32Pubkey({
          type: "tendermint/PubKeySecp256k1",
          value: toBase64(pubkey.value)
        }, "cosmos"),
        value: {
          denom: value.denom,
          amount: value.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgEditValidator": {
    aminoType: "cosmos-sdk/MsgEditValidator",
    toAmino: ({
      description,
      validator_address,
      commission_rate,
      min_self_delegation
    }: MsgEditValidator): AminoMsgEditValidator["value"] => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          security_contact: description.security_contact,
          details: description.details
        },
        validator_address,
        commission_rate,
        min_self_delegation
      };
    },
    fromAmino: ({
      description,
      validator_address,
      commission_rate,
      min_self_delegation
    }: AminoMsgEditValidator["value"]): MsgEditValidator => {
      return {
        description: {
          moniker: description.moniker,
          identity: description.identity,
          website: description.website,
          security_contact: description.security_contact,
          details: description.details
        },
        validator_address,
        commission_rate,
        min_self_delegation
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgDelegate": {
    aminoType: "cosmos-sdk/MsgDelegate",
    toAmino: ({
      delegator_address,
      validator_address,
      amount
    }: MsgDelegate): AminoMsgDelegate["value"] => {
      return {
        delegator_address,
        validator_address,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      amount
    }: AminoMsgDelegate["value"]): MsgDelegate => {
      return {
        delegator_address,
        validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
    aminoType: "cosmos-sdk/MsgBeginRedelegate",
    toAmino: ({
      delegator_address,
      validator_src_address,
      validator_dst_address,
      amount
    }: MsgBeginRedelegate): AminoMsgBeginRedelegate["value"] => {
      return {
        delegator_address,
        validator_src_address,
        validator_dst_address,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      delegator_address,
      validator_src_address,
      validator_dst_address,
      amount
    }: AminoMsgBeginRedelegate["value"]): MsgBeginRedelegate => {
      return {
        delegator_address,
        validator_src_address,
        validator_dst_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/cosmos.staking.v1beta1.MsgUndelegate": {
    aminoType: "cosmos-sdk/MsgUndelegate",
    toAmino: ({
      delegator_address,
      validator_address,
      amount
    }: MsgUndelegate): AminoMsgUndelegate["value"] => {
      return {
        delegator_address,
        validator_address,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      delegator_address,
      validator_address,
      amount
    }: AminoMsgUndelegate["value"]): MsgUndelegate => {
      return {
        delegator_address,
        validator_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  }
};