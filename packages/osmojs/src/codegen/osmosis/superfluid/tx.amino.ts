import { Coin } from "../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate, MsgUnPoolWhitelistedPool } from "./tx";
export interface AminoMsgSuperfluidDelegate extends AminoMsg {
  type: "osmosis/superfluid-delegate";
  value: {
    sender: string;
    lock_id: string;
    val_addr: string;
  };
}
export interface AminoMsgSuperfluidUndelegate extends AminoMsg {
  type: "osmosis/superfluid-undelegate";
  value: {
    sender: string;
    lock_id: string;
  };
}
export interface AminoMsgSuperfluidUnbondLock extends AminoMsg {
  type: "osmosis/superfluid-unbond-lock";
  value: {
    sender: string;
    lock_id: string;
  };
}
export interface AminoMsgLockAndSuperfluidDelegate extends AminoMsg {
  type: "osmosis/lock-and-superfluid-delegate";
  value: {
    sender: string;
    coins: {
      denom: string;
      amount: string;
    }[];
    val_addr: string;
  };
}
export interface AminoMsgUnPoolWhitelistedPool extends AminoMsg {
  type: "osmosis/unpool-whitelisted-pool";
  value: {
    sender: string;
    pool_id: string;
  };
}
export const AminoConverter = {
  "/osmosis.superfluid.MsgSuperfluidDelegate": {
    aminoType: "osmosis/superfluid-delegate",
    toAmino: ({
      sender,
      lock_id,
      val_addr
    }: MsgSuperfluidDelegate): AminoMsgSuperfluidDelegate["value"] => {
      return {
        sender,
        lock_id: lock_id.toString(),
        val_addr
      };
    },
    fromAmino: ({
      sender,
      lock_id,
      val_addr
    }: AminoMsgSuperfluidDelegate["value"]): MsgSuperfluidDelegate => {
      return {
        sender,
        lock_id: Long.fromString(lock_id),
        val_addr
      };
    }
  },
  "/osmosis.superfluid.MsgSuperfluidUndelegate": {
    aminoType: "osmosis/superfluid-undelegate",
    toAmino: ({
      sender,
      lock_id
    }: MsgSuperfluidUndelegate): AminoMsgSuperfluidUndelegate["value"] => {
      return {
        sender,
        lock_id: lock_id.toString()
      };
    },
    fromAmino: ({
      sender,
      lock_id
    }: AminoMsgSuperfluidUndelegate["value"]): MsgSuperfluidUndelegate => {
      return {
        sender,
        lock_id: Long.fromString(lock_id)
      };
    }
  },
  "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
    aminoType: "osmosis/superfluid-unbond-lock",
    toAmino: ({
      sender,
      lock_id
    }: MsgSuperfluidUnbondLock): AminoMsgSuperfluidUnbondLock["value"] => {
      return {
        sender,
        lock_id: lock_id.toString()
      };
    },
    fromAmino: ({
      sender,
      lock_id
    }: AminoMsgSuperfluidUnbondLock["value"]): MsgSuperfluidUnbondLock => {
      return {
        sender,
        lock_id: Long.fromString(lock_id)
      };
    }
  },
  "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
    aminoType: "osmosis/lock-and-superfluid-delegate",
    toAmino: ({
      sender,
      coins,
      val_addr
    }: MsgLockAndSuperfluidDelegate): AminoMsgLockAndSuperfluidDelegate["value"] => {
      return {
        sender,
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        val_addr
      };
    },
    fromAmino: ({
      sender,
      coins,
      val_addr
    }: AminoMsgLockAndSuperfluidDelegate["value"]): MsgLockAndSuperfluidDelegate => {
      return {
        sender,
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        val_addr
      };
    }
  },
  "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
    aminoType: "osmosis/unpool-whitelisted-pool",
    toAmino: ({
      sender,
      pool_id
    }: MsgUnPoolWhitelistedPool): AminoMsgUnPoolWhitelistedPool["value"] => {
      return {
        sender,
        pool_id: pool_id.toString()
      };
    },
    fromAmino: ({
      sender,
      pool_id
    }: AminoMsgUnPoolWhitelistedPool["value"]): MsgUnPoolWhitelistedPool => {
      return {
        sender,
        pool_id: Long.fromString(pool_id)
      };
    }
  }
};