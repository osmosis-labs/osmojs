import { Member, VoteOption, voteOptionFromJSON } from "./types";
import { Any } from "../../../google/protobuf/any";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { execFromJSON, MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
export interface AminoMsgCreateGroup extends AminoMsg {
  type: "cosmos-sdk/MsgCreateGroup";
  value: {
    admin: string;
    members: {
      address: string;
      weight: string;
      metadata: string;
      added_at: {
        seconds: string;
        nanos: number;
      };
    }[];
    metadata: string;
  };
}
export interface AminoMsgUpdateGroupMembers extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupMembers";
  value: {
    admin: string;
    group_id: string;
    member_updates: {
      address: string;
      weight: string;
      metadata: string;
      added_at: {
        seconds: string;
        nanos: number;
      };
    }[];
  };
}
export interface AminoMsgUpdateGroupAdmin extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupAdmin";
  value: {
    admin: string;
    group_id: string;
    new_admin: string;
  };
}
export interface AminoMsgUpdateGroupMetadata extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupMetadata";
  value: {
    admin: string;
    group_id: string;
    metadata: string;
  };
}
export interface AminoMsgCreateGroupPolicy extends AminoMsg {
  type: "cosmos-sdk/MsgCreateGroupPolicy";
  value: {
    admin: string;
    group_id: string;
    metadata: string;
    decision_policy: {
      type_url: string;
      value: Uint8Array;
    };
  };
}
export interface AminoMsgCreateGroupWithPolicy extends AminoMsg {
  type: "cosmos-sdk/MsgCreateGroupWithPolicy";
  value: {
    admin: string;
    members: {
      address: string;
      weight: string;
      metadata: string;
      added_at: {
        seconds: string;
        nanos: number;
      };
    }[];
    group_metadata: string;
    group_policy_metadata: string;
    group_policy_as_admin: boolean;
    decision_policy: {
      type_url: string;
      value: Uint8Array;
    };
  };
}
export interface AminoMsgUpdateGroupPolicyAdmin extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyAdmin";
  value: {
    admin: string;
    address: string;
    new_admin: string;
  };
}
export interface AminoMsgUpdateGroupPolicyDecisionPolicy extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicy";
  value: {
    admin: string;
    address: string;
    decision_policy: {
      type_url: string;
      value: Uint8Array;
    };
  };
}
export interface AminoMsgUpdateGroupPolicyMetadata extends AminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyMetadata";
  value: {
    admin: string;
    address: string;
    metadata: string;
  };
}
export interface AminoMsgSubmitProposal extends AminoMsg {
  type: "cosmos-sdk/MsgSubmitProposal";
  value: {
    address: string;
    proposers: string[];
    metadata: string;
    messages: {
      type_url: string;
      value: Uint8Array;
    }[];
    exec: number;
  };
}
export interface AminoMsgWithdrawProposal extends AminoMsg {
  type: "cosmos-sdk/MsgWithdrawProposal";
  value: {
    proposal_id: string;
    address: string;
  };
}
export interface AminoMsgVote extends AminoMsg {
  type: "cosmos-sdk/MsgVote";
  value: {
    proposal_id: string;
    voter: string;
    option: number;
    metadata: string;
    exec: number;
  };
}
export interface AminoMsgExec extends AminoMsg {
  type: "cosmos-sdk/MsgExec";
  value: {
    proposal_id: string;
    signer: string;
  };
}
export interface AminoMsgLeaveGroup extends AminoMsg {
  type: "cosmos-sdk/MsgLeaveGroup";
  value: {
    address: string;
    group_id: string;
  };
}
export const AminoConverter = {
  "/cosmos.group.v1.MsgCreateGroup": {
    aminoType: "cosmos-sdk/MsgCreateGroup",
    toAmino: ({
      admin,
      members,
      metadata
    }: MsgCreateGroup): AminoMsgCreateGroup["value"] => {
      return {
        admin,
        members: members.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata,
          added_at: el0.added_at
        })),
        metadata
      };
    },
    fromAmino: ({
      admin,
      members,
      metadata
    }: AminoMsgCreateGroup["value"]): MsgCreateGroup => {
      return {
        admin,
        members: members.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata,
          added_at: el0.added_at
        })),
        metadata
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupMembers": {
    aminoType: "cosmos-sdk/MsgUpdateGroupMembers",
    toAmino: ({
      admin,
      group_id,
      member_updates
    }: MsgUpdateGroupMembers): AminoMsgUpdateGroupMembers["value"] => {
      return {
        admin,
        group_id: group_id.toString(),
        member_updates: member_updates.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata,
          added_at: el0.added_at
        }))
      };
    },
    fromAmino: ({
      admin,
      group_id,
      member_updates
    }: AminoMsgUpdateGroupMembers["value"]): MsgUpdateGroupMembers => {
      return {
        admin,
        group_id: Long.fromString(group_id),
        member_updates: member_updates.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata,
          added_at: el0.added_at
        }))
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupAdmin": {
    aminoType: "cosmos-sdk/MsgUpdateGroupAdmin",
    toAmino: ({
      admin,
      group_id,
      new_admin
    }: MsgUpdateGroupAdmin): AminoMsgUpdateGroupAdmin["value"] => {
      return {
        admin,
        group_id: group_id.toString(),
        new_admin
      };
    },
    fromAmino: ({
      admin,
      group_id,
      new_admin
    }: AminoMsgUpdateGroupAdmin["value"]): MsgUpdateGroupAdmin => {
      return {
        admin,
        group_id: Long.fromString(group_id),
        new_admin
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupMetadata": {
    aminoType: "cosmos-sdk/MsgUpdateGroupMetadata",
    toAmino: ({
      admin,
      group_id,
      metadata
    }: MsgUpdateGroupMetadata): AminoMsgUpdateGroupMetadata["value"] => {
      return {
        admin,
        group_id: group_id.toString(),
        metadata
      };
    },
    fromAmino: ({
      admin,
      group_id,
      metadata
    }: AminoMsgUpdateGroupMetadata["value"]): MsgUpdateGroupMetadata => {
      return {
        admin,
        group_id: Long.fromString(group_id),
        metadata
      };
    }
  },
  "/cosmos.group.v1.MsgCreateGroupPolicy": {
    aminoType: "cosmos-sdk/MsgCreateGroupPolicy",
    toAmino: ({
      admin,
      group_id,
      metadata,
      decision_policy
    }: MsgCreateGroupPolicy): AminoMsgCreateGroupPolicy["value"] => {
      return {
        admin,
        group_id: group_id.toString(),
        metadata,
        decision_policy: {
          type_url: decision_policy.type_url,
          value: decision_policy.value
        }
      };
    },
    fromAmino: ({
      admin,
      group_id,
      metadata,
      decision_policy
    }: AminoMsgCreateGroupPolicy["value"]): MsgCreateGroupPolicy => {
      return {
        admin,
        group_id: Long.fromString(group_id),
        metadata,
        decision_policy: {
          type_url: decision_policy.type_url,
          value: decision_policy.value
        }
      };
    }
  },
  "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
    aminoType: "cosmos-sdk/MsgCreateGroupWithPolicy",
    toAmino: ({
      admin,
      members,
      group_metadata,
      group_policy_metadata,
      group_policy_as_admin,
      decision_policy
    }: MsgCreateGroupWithPolicy): AminoMsgCreateGroupWithPolicy["value"] => {
      return {
        admin,
        members: members.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata,
          added_at: el0.added_at
        })),
        group_metadata,
        group_policy_metadata,
        group_policy_as_admin,
        decision_policy: {
          type_url: decision_policy.type_url,
          value: decision_policy.value
        }
      };
    },
    fromAmino: ({
      admin,
      members,
      group_metadata,
      group_policy_metadata,
      group_policy_as_admin,
      decision_policy
    }: AminoMsgCreateGroupWithPolicy["value"]): MsgCreateGroupWithPolicy => {
      return {
        admin,
        members: members.map(el0 => ({
          address: el0.address,
          weight: el0.weight,
          metadata: el0.metadata,
          added_at: el0.added_at
        })),
        group_metadata,
        group_policy_metadata,
        group_policy_as_admin,
        decision_policy: {
          type_url: decision_policy.type_url,
          value: decision_policy.value
        }
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyAdmin",
    toAmino: ({
      admin,
      address,
      new_admin
    }: MsgUpdateGroupPolicyAdmin): AminoMsgUpdateGroupPolicyAdmin["value"] => {
      return {
        admin,
        address,
        new_admin
      };
    },
    fromAmino: ({
      admin,
      address,
      new_admin
    }: AminoMsgUpdateGroupPolicyAdmin["value"]): MsgUpdateGroupPolicyAdmin => {
      return {
        admin,
        address,
        new_admin
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicy",
    toAmino: ({
      admin,
      address,
      decision_policy
    }: MsgUpdateGroupPolicyDecisionPolicy): AminoMsgUpdateGroupPolicyDecisionPolicy["value"] => {
      return {
        admin,
        address,
        decision_policy: {
          type_url: decision_policy.type_url,
          value: decision_policy.value
        }
      };
    },
    fromAmino: ({
      admin,
      address,
      decision_policy
    }: AminoMsgUpdateGroupPolicyDecisionPolicy["value"]): MsgUpdateGroupPolicyDecisionPolicy => {
      return {
        admin,
        address,
        decision_policy: {
          type_url: decision_policy.type_url,
          value: decision_policy.value
        }
      };
    }
  },
  "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyMetadata",
    toAmino: ({
      admin,
      address,
      metadata
    }: MsgUpdateGroupPolicyMetadata): AminoMsgUpdateGroupPolicyMetadata["value"] => {
      return {
        admin,
        address,
        metadata
      };
    },
    fromAmino: ({
      admin,
      address,
      metadata
    }: AminoMsgUpdateGroupPolicyMetadata["value"]): MsgUpdateGroupPolicyMetadata => {
      return {
        admin,
        address,
        metadata
      };
    }
  },
  "/cosmos.group.v1.MsgSubmitProposal": {
    aminoType: "cosmos-sdk/MsgSubmitProposal",
    toAmino: ({
      address,
      proposers,
      metadata,
      messages,
      exec
    }: MsgSubmitProposal): AminoMsgSubmitProposal["value"] => {
      return {
        address,
        proposers,
        metadata,
        messages: messages.map(el0 => ({
          type_url: el0.type_url,
          value: el0.value
        })),
        exec
      };
    },
    fromAmino: ({
      address,
      proposers,
      metadata,
      messages,
      exec
    }: AminoMsgSubmitProposal["value"]): MsgSubmitProposal => {
      return {
        address,
        proposers,
        metadata,
        messages: messages.map(el0 => ({
          type_url: el0.type_url,
          value: el0.value
        })),
        exec: execFromJSON(exec)
      };
    }
  },
  "/cosmos.group.v1.MsgWithdrawProposal": {
    aminoType: "cosmos-sdk/MsgWithdrawProposal",
    toAmino: ({
      proposal_id,
      address
    }: MsgWithdrawProposal): AminoMsgWithdrawProposal["value"] => {
      return {
        proposal_id: proposal_id.toString(),
        address
      };
    },
    fromAmino: ({
      proposal_id,
      address
    }: AminoMsgWithdrawProposal["value"]): MsgWithdrawProposal => {
      return {
        proposal_id: Long.fromString(proposal_id),
        address
      };
    }
  },
  "/cosmos.group.v1.MsgVote": {
    aminoType: "cosmos-sdk/MsgVote",
    toAmino: ({
      proposal_id,
      voter,
      option,
      metadata,
      exec
    }: MsgVote): AminoMsgVote["value"] => {
      return {
        proposal_id: proposal_id.toString(),
        voter,
        option,
        metadata,
        exec
      };
    },
    fromAmino: ({
      proposal_id,
      voter,
      option,
      metadata,
      exec
    }: AminoMsgVote["value"]): MsgVote => {
      return {
        proposal_id: Long.fromString(proposal_id),
        voter,
        option: voteOptionFromJSON(option),
        metadata,
        exec: execFromJSON(exec)
      };
    }
  },
  "/cosmos.group.v1.MsgExec": {
    aminoType: "cosmos-sdk/MsgExec",
    toAmino: ({
      proposal_id,
      signer
    }: MsgExec): AminoMsgExec["value"] => {
      return {
        proposal_id: proposal_id.toString(),
        signer
      };
    },
    fromAmino: ({
      proposal_id,
      signer
    }: AminoMsgExec["value"]): MsgExec => {
      return {
        proposal_id: Long.fromString(proposal_id),
        signer
      };
    }
  },
  "/cosmos.group.v1.MsgLeaveGroup": {
    aminoType: "cosmos-sdk/MsgLeaveGroup",
    toAmino: ({
      address,
      group_id
    }: MsgLeaveGroup): AminoMsgLeaveGroup["value"] => {
      return {
        address,
        group_id: group_id.toString()
      };
    },
    fromAmino: ({
      address,
      group_id
    }: AminoMsgLeaveGroup["value"]): MsgLeaveGroup => {
      return {
        address,
        group_id: Long.fromString(group_id)
      };
    }
  }
};