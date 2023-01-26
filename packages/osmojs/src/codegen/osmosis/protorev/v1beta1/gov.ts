import * as _m0 from "protobufjs/minimal";
/**
 * SetProtoRevEnabledProposal is a gov Content type to update whether the
 * protorev module is enabled
 */

export interface SetProtoRevEnabledProposal {
  title: string;
  description: string;
  enabled: boolean;
}
/**
 * SetProtoRevEnabledProposal is a gov Content type to update whether the
 * protorev module is enabled
 */

export interface SetProtoRevEnabledProposalSDKType {
  title: string;
  description: string;
  enabled: boolean;
}
/**
 * SetProtoRevAdminAccountProposal is a gov Content type to set the admin
 * account that will receive permissions to alter hot routes and set the
 * developer address that will be receiving a share of profits from the module
 */

export interface SetProtoRevAdminAccountProposal {
  title: string;
  description: string;
  account: string;
}
/**
 * SetProtoRevAdminAccountProposal is a gov Content type to set the admin
 * account that will receive permissions to alter hot routes and set the
 * developer address that will be receiving a share of profits from the module
 */

export interface SetProtoRevAdminAccountProposalSDKType {
  title: string;
  description: string;
  account: string;
}

function createBaseSetProtoRevEnabledProposal(): SetProtoRevEnabledProposal {
  return {
    title: "",
    description: "",
    enabled: false
  };
}

export const SetProtoRevEnabledProposal = {
  encode(message: SetProtoRevEnabledProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetProtoRevEnabledProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetProtoRevEnabledProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.enabled = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<SetProtoRevEnabledProposal>): SetProtoRevEnabledProposal {
    const message = createBaseSetProtoRevEnabledProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  }

};

function createBaseSetProtoRevAdminAccountProposal(): SetProtoRevAdminAccountProposal {
  return {
    title: "",
    description: "",
    account: ""
  };
}

export const SetProtoRevAdminAccountProposal = {
  encode(message: SetProtoRevAdminAccountProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.account !== "") {
      writer.uint32(26).string(message.account);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetProtoRevAdminAccountProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetProtoRevAdminAccountProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.account = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<SetProtoRevAdminAccountProposal>): SetProtoRevAdminAccountProposal {
    const message = createBaseSetProtoRevAdminAccountProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.account = object.account ?? "";
    return message;
  }

};