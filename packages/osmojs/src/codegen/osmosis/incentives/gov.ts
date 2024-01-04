import { CreateGroup, CreateGroupAmino, CreateGroupSDKType } from "./group";
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * CreateGroupsProposal is a type for creating one or more groups via
 * governance. This is useful for creating groups without having to pay
 * creation fees.
 */
export interface CreateGroupsProposal {
  title: string;
  description: string;
  createGroups: CreateGroup[];
}
export interface CreateGroupsProposalProtoMsg {
  typeUrl: "/osmosis.incentives.CreateGroupsProposal";
  value: Uint8Array;
}
/**
 * CreateGroupsProposal is a type for creating one or more groups via
 * governance. This is useful for creating groups without having to pay
 * creation fees.
 */
export interface CreateGroupsProposalAmino {
  title?: string;
  description?: string;
  create_groups?: CreateGroupAmino[];
}
export interface CreateGroupsProposalAminoMsg {
  type: "osmosis/incentives/create-groups-proposal";
  value: CreateGroupsProposalAmino;
}
/**
 * CreateGroupsProposal is a type for creating one or more groups via
 * governance. This is useful for creating groups without having to pay
 * creation fees.
 */
export interface CreateGroupsProposalSDKType {
  title: string;
  description: string;
  create_groups: CreateGroupSDKType[];
}
function createBaseCreateGroupsProposal(): CreateGroupsProposal {
  return {
    title: "",
    description: "",
    createGroups: []
  };
}
export const CreateGroupsProposal = {
  typeUrl: "/osmosis.incentives.CreateGroupsProposal",
  encode(message: CreateGroupsProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.createGroups) {
      CreateGroup.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateGroupsProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGroupsProposal();
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
          message.createGroups.push(CreateGroup.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CreateGroupsProposal>): CreateGroupsProposal {
    const message = createBaseCreateGroupsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.createGroups = object.createGroups?.map(e => CreateGroup.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CreateGroupsProposalAmino): CreateGroupsProposal {
    const message = createBaseCreateGroupsProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.createGroups = object.create_groups?.map(e => CreateGroup.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CreateGroupsProposal): CreateGroupsProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.createGroups) {
      obj.create_groups = message.createGroups.map(e => e ? CreateGroup.toAmino(e) : undefined);
    } else {
      obj.create_groups = [];
    }
    return obj;
  },
  fromAminoMsg(object: CreateGroupsProposalAminoMsg): CreateGroupsProposal {
    return CreateGroupsProposal.fromAmino(object.value);
  },
  toAminoMsg(message: CreateGroupsProposal): CreateGroupsProposalAminoMsg {
    return {
      type: "osmosis/incentives/create-groups-proposal",
      value: CreateGroupsProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: CreateGroupsProposalProtoMsg): CreateGroupsProposal {
    return CreateGroupsProposal.decode(message.value);
  },
  toProto(message: CreateGroupsProposal): Uint8Array {
    return CreateGroupsProposal.encode(message).finish();
  },
  toProtoMsg(message: CreateGroupsProposal): CreateGroupsProposalProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.CreateGroupsProposal",
      value: CreateGroupsProposal.encode(message).finish()
    };
  }
};