import * as _89 from "./accum/v1beta1/accum";
import * as _90 from "./concentrated-liquidity/params";
import * as _91 from "./cosmwasmpool/v1beta1/genesis";
import * as _92 from "./cosmwasmpool/v1beta1/gov";
import * as _93 from "./cosmwasmpool/v1beta1/model/instantiate_msg";
import * as _94 from "./cosmwasmpool/v1beta1/model/module_query_msg";
import * as _95 from "./cosmwasmpool/v1beta1/model/module_sudo_msg";
import * as _96 from "./cosmwasmpool/v1beta1/model/pool_query_msg";
import * as _97 from "./cosmwasmpool/v1beta1/model/pool";
import * as _98 from "./cosmwasmpool/v1beta1/model/transmuter_msgs";
import * as _99 from "./cosmwasmpool/v1beta1/model/tx";
import * as _100 from "./cosmwasmpool/v1beta1/params";
import * as _101 from "./cosmwasmpool/v1beta1/query";
import * as _103 from "./downtime-detector/v1beta1/downtime_duration";
import * as _104 from "./downtime-detector/v1beta1/genesis";
import * as _105 from "./downtime-detector/v1beta1/query";
import * as _106 from "./epochs/genesis";
import * as _107 from "./epochs/query";
import * as _108 from "./gamm/pool-models/balancer/balancerPool";
import * as _109 from "./gamm/v1beta1/genesis";
import * as _110 from "./gamm/v1beta1/gov";
import * as _111 from "./gamm/v1beta1/query";
import * as _112 from "./gamm/v1beta1/shared";
import * as _113 from "./gamm/v1beta1/tx";
import * as _114 from "./gamm/pool-models/balancer/tx/tx";
import * as _115 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _116 from "./gamm/pool-models/stableswap/tx";
import * as _117 from "./gamm/v2/query";
import * as _118 from "./ibc-rate-limit/v1beta1/genesis";
import * as _119 from "./ibc-rate-limit/v1beta1/params";
import * as _120 from "./ibc-rate-limit/v1beta1/query";
import * as _121 from "./incentives/gauge";
import * as _122 from "./incentives/genesis";
import * as _123 from "./incentives/params";
import * as _124 from "./incentives/query";
import * as _125 from "./incentives/tx";
import * as _126 from "./lockup/genesis";
import * as _127 from "./lockup/lock";
import * as _128 from "./lockup/params";
import * as _129 from "./lockup/query";
import * as _130 from "./lockup/tx";
import * as _131 from "./mint/v1beta1/genesis";
import * as _132 from "./mint/v1beta1/mint";
import * as _133 from "./mint/v1beta1/query";
import * as _134 from "./pool-incentives/v1beta1/genesis";
import * as _135 from "./pool-incentives/v1beta1/gov";
import * as _136 from "./pool-incentives/v1beta1/incentives";
import * as _137 from "./pool-incentives/v1beta1/query";
import * as _138 from "./pool-incentives/v1beta1/shared";
import * as _139 from "./poolmanager/v1beta1/genesis";
import * as _140 from "./poolmanager/v1beta1/module_route";
import * as _141 from "./poolmanager/v1beta1/query";
import * as _142 from "./poolmanager/v1beta1/swap_route";
import * as _143 from "./poolmanager/v1beta1/tx";
import * as _144 from "./protorev/v1beta1/genesis";
import * as _145 from "./protorev/v1beta1/gov";
import * as _146 from "./protorev/v1beta1/params";
import * as _147 from "./protorev/v1beta1/protorev";
import * as _148 from "./protorev/v1beta1/query";
import * as _149 from "./protorev/v1beta1/tx";
import * as _150 from "./sumtree/v1beta1/tree";
import * as _151 from "./superfluid/genesis";
import * as _152 from "./superfluid/params";
import * as _153 from "./superfluid/query";
import * as _154 from "./superfluid/superfluid";
import * as _155 from "./superfluid/tx";
import * as _156 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _157 from "./tokenfactory/v1beta1/genesis";
import * as _158 from "./tokenfactory/v1beta1/params";
import * as _159 from "./tokenfactory/v1beta1/query";
import * as _160 from "./tokenfactory/v1beta1/tx";
import * as _161 from "./twap/v1beta1/genesis";
import * as _162 from "./twap/v1beta1/query";
import * as _163 from "./twap/v1beta1/twap_record";
import * as _164 from "./txfees/v1beta1/feetoken";
import * as _165 from "./txfees/v1beta1/genesis";
import * as _166 from "./txfees/v1beta1/gov";
import * as _167 from "./txfees/v1beta1/query";
import * as _168 from "./valset-pref/v1beta1/query";
import * as _169 from "./valset-pref/v1beta1/state";
import * as _170 from "./valset-pref/v1beta1/tx";
import * as _284 from "./concentrated-liquidity/query.lcd";
import * as _285 from "./cosmwasmpool/v1beta1/query.lcd";
import * as _286 from "./downtime-detector/v1beta1/query.lcd";
import * as _287 from "./epochs/query.lcd";
import * as _288 from "./gamm/v1beta1/query.lcd";
import * as _289 from "./gamm/v2/query.lcd";
import * as _290 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _291 from "./incentives/query.lcd";
import * as _292 from "./lockup/query.lcd";
import * as _293 from "./mint/v1beta1/query.lcd";
import * as _294 from "./pool-incentives/v1beta1/query.lcd";
import * as _295 from "./poolmanager/v1beta1/query.lcd";
import * as _296 from "./protorev/v1beta1/query.lcd";
import * as _297 from "./superfluid/query.lcd";
import * as _298 from "./tokenfactory/v1beta1/query.lcd";
import * as _299 from "./twap/v1beta1/query.lcd";
import * as _300 from "./txfees/v1beta1/query.lcd";
import * as _301 from "./valset-pref/v1beta1/query.lcd";
import * as _302 from "./concentrated-liquidity/query.rpc.Query";
import * as _303 from "./cosmwasmpool/v1beta1/query.rpc.Query";
import * as _304 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _305 from "./epochs/query.rpc.Query";
import * as _306 from "./gamm/v1beta1/query.rpc.Query";
import * as _307 from "./gamm/v2/query.rpc.Query";
import * as _308 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _309 from "./incentives/query.rpc.Query";
import * as _310 from "./lockup/query.rpc.Query";
import * as _311 from "./mint/v1beta1/query.rpc.Query";
import * as _312 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _313 from "./poolmanager/v1beta1/query.rpc.Query";
import * as _314 from "./protorev/v1beta1/query.rpc.Query";
import * as _315 from "./superfluid/query.rpc.Query";
import * as _316 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _317 from "./twap/v1beta1/query.rpc.Query";
import * as _318 from "./txfees/v1beta1/query.rpc.Query";
import * as _319 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _320 from "./concentrated-liquidity/pool-model/concentrated/tx.rpc.msg";
import * as _321 from "./concentrated-liquidity/tx.rpc.msg";
import * as _322 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _323 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _324 from "./gamm/v1beta1/tx.rpc.msg";
import * as _325 from "./incentives/tx.rpc.msg";
import * as _326 from "./lockup/tx.rpc.msg";
import * as _327 from "./poolmanager/v1beta1/tx.rpc.msg";
import * as _328 from "./protorev/v1beta1/tx.rpc.msg";
import * as _329 from "./superfluid/tx.rpc.msg";
import * as _330 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _331 from "./valset-pref/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace accum {
        const v1beta1: {
            AccumulatorContent: {
                typeUrl: string;
                encode(message: _89.AccumulatorContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.AccumulatorContent;
                fromPartial(object: Partial<_89.AccumulatorContent>): _89.AccumulatorContent;
                fromAmino(object: _89.AccumulatorContentAmino): _89.AccumulatorContent;
                toAmino(message: _89.AccumulatorContent): _89.AccumulatorContentAmino;
                fromAminoMsg(object: _89.AccumulatorContentAminoMsg): _89.AccumulatorContent;
                toAminoMsg(message: _89.AccumulatorContent): _89.AccumulatorContentAminoMsg;
                fromProtoMsg(message: _89.AccumulatorContentProtoMsg): _89.AccumulatorContent;
                toProto(message: _89.AccumulatorContent): Uint8Array;
                toProtoMsg(message: _89.AccumulatorContent): _89.AccumulatorContentProtoMsg;
            };
            Options: {
                typeUrl: string;
                encode(_: _89.Options, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.Options;
                fromPartial(_: Partial<_89.Options>): _89.Options;
                fromAmino(_: _89.OptionsAmino): _89.Options;
                toAmino(_: _89.Options): _89.OptionsAmino;
                fromAminoMsg(object: _89.OptionsAminoMsg): _89.Options;
                toAminoMsg(message: _89.Options): _89.OptionsAminoMsg;
                fromProtoMsg(message: _89.OptionsProtoMsg): _89.Options;
                toProto(message: _89.Options): Uint8Array;
                toProtoMsg(message: _89.Options): _89.OptionsProtoMsg;
            };
            Record: {
                typeUrl: string;
                encode(message: _89.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.Record;
                fromPartial(object: Partial<_89.Record>): _89.Record;
                fromAmino(object: _89.RecordAmino): _89.Record;
                toAmino(message: _89.Record): _89.RecordAmino;
                fromAminoMsg(object: _89.RecordAminoMsg): _89.Record;
                toAminoMsg(message: _89.Record): _89.RecordAminoMsg;
                fromProtoMsg(message: _89.RecordProtoMsg): _89.Record;
                toProto(message: _89.Record): Uint8Array;
                toProtoMsg(message: _89.Record): _89.RecordProtoMsg;
            };
        };
    }
    const concentratedliquidity: {
        poolmodel: {
            concentrated: {
                v1beta1: {
                    MsgClientImpl: typeof _320.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createConcentratedPool(value: import("./concentrated-liquidity/pool-model/concentrated/tx").MsgCreateConcentratedPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createConcentratedPool(value: import("./concentrated-liquidity/pool-model/concentrated/tx").MsgCreateConcentratedPool): {
                                typeUrl: string;
                                value: import("./concentrated-liquidity/pool-model/concentrated/tx").MsgCreateConcentratedPool;
                            };
                        };
                        fromPartial: {
                            createConcentratedPool(value: import("./concentrated-liquidity/pool-model/concentrated/tx").MsgCreateConcentratedPool): {
                                typeUrl: string;
                                value: import("./concentrated-liquidity/pool-model/concentrated/tx").MsgCreateConcentratedPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool": {
                            aminoType: string;
                            toAmino: (message: import("./concentrated-liquidity/pool-model/concentrated/tx").MsgCreateConcentratedPool) => import("./concentrated-liquidity/pool-model/concentrated/tx").MsgCreateConcentratedPoolAmino;
                            fromAmino: (object: import("./concentrated-liquidity/pool-model/concentrated/tx").MsgCreateConcentratedPoolAmino) => import("./concentrated-liquidity/pool-model/concentrated/tx").MsgCreateConcentratedPool;
                        };
                    };
                };
            };
        };
        v1beta1: {
            MsgClientImpl: typeof _321.MsgClientImpl;
            QueryClientImpl: typeof _302.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: import("./concentrated-liquidity/query").PoolsRequest): Promise<import("./concentrated-liquidity/query").PoolsResponse>;
                params(request?: import("./concentrated-liquidity/query").ParamsRequest): Promise<import("./concentrated-liquidity/query").ParamsResponse>;
                userPositions(request: import("./concentrated-liquidity/query").UserPositionsRequest): Promise<import("./concentrated-liquidity/query").UserPositionsResponse>;
                liquidityPerTickRange(request: import("./concentrated-liquidity/query").LiquidityPerTickRangeRequest): Promise<import("./concentrated-liquidity/query").LiquidityPerTickRangeResponse>;
                liquidityNetInDirection(request: import("./concentrated-liquidity/query").LiquidityNetInDirectionRequest): Promise<import("./concentrated-liquidity/query").LiquidityNetInDirectionResponse>;
                claimableSpreadRewards(request: import("./concentrated-liquidity/query").ClaimableSpreadRewardsRequest): Promise<import("./concentrated-liquidity/query").ClaimableSpreadRewardsResponse>;
                claimableIncentives(request: import("./concentrated-liquidity/query").ClaimableIncentivesRequest): Promise<import("./concentrated-liquidity/query").ClaimableIncentivesResponse>;
                positionById(request: import("./concentrated-liquidity/query").PositionByIdRequest): Promise<import("./concentrated-liquidity/query").PositionByIdResponse>;
                poolAccumulatorRewards(request: import("./concentrated-liquidity/query").PoolAccumulatorRewardsRequest): Promise<import("./concentrated-liquidity/query").PoolAccumulatorRewardsResponse>;
                incentiveRecords(request: import("./concentrated-liquidity/query").IncentiveRecordsRequest): Promise<import("./concentrated-liquidity/query").IncentiveRecordsResponse>;
                tickAccumulatorTrackers(request: import("./concentrated-liquidity/query").TickAccumulatorTrackersRequest): Promise<import("./concentrated-liquidity/query").TickAccumulatorTrackersResponse>;
                cFMMPoolIdLinkFromConcentratedPoolId(request: import("./concentrated-liquidity/query").CFMMPoolIdLinkFromConcentratedPoolIdRequest): Promise<import("./concentrated-liquidity/query").CFMMPoolIdLinkFromConcentratedPoolIdResponse>;
                userUnbondingPositions(request: import("./concentrated-liquidity/query").UserUnbondingPositionsRequest): Promise<import("./concentrated-liquidity/query").UserUnbondingPositionsResponse>;
                getTotalLiquidity(request?: import("./concentrated-liquidity/query").GetTotalLiquidityRequest): Promise<import("./concentrated-liquidity/query").GetTotalLiquidityResponse>;
            };
            LCDQueryClient: typeof _284.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createPosition(value: import("./concentrated-liquidity/tx").MsgCreatePosition): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawPosition(value: import("./concentrated-liquidity/tx").MsgWithdrawPosition): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addToPosition(value: import("./concentrated-liquidity/tx").MsgAddToPosition): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    collectSpreadRewards(value: import("./concentrated-liquidity/tx").MsgCollectSpreadRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    collectIncentives(value: import("./concentrated-liquidity/tx").MsgCollectIncentives): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createPosition(value: import("./concentrated-liquidity/tx").MsgCreatePosition): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgCreatePosition;
                    };
                    withdrawPosition(value: import("./concentrated-liquidity/tx").MsgWithdrawPosition): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgWithdrawPosition;
                    };
                    addToPosition(value: import("./concentrated-liquidity/tx").MsgAddToPosition): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgAddToPosition;
                    };
                    collectSpreadRewards(value: import("./concentrated-liquidity/tx").MsgCollectSpreadRewards): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgCollectSpreadRewards;
                    };
                    collectIncentives(value: import("./concentrated-liquidity/tx").MsgCollectIncentives): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgCollectIncentives;
                    };
                };
                fromPartial: {
                    createPosition(value: import("./concentrated-liquidity/tx").MsgCreatePosition): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgCreatePosition;
                    };
                    withdrawPosition(value: import("./concentrated-liquidity/tx").MsgWithdrawPosition): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgWithdrawPosition;
                    };
                    addToPosition(value: import("./concentrated-liquidity/tx").MsgAddToPosition): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgAddToPosition;
                    };
                    collectSpreadRewards(value: import("./concentrated-liquidity/tx").MsgCollectSpreadRewards): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgCollectSpreadRewards;
                    };
                    collectIncentives(value: import("./concentrated-liquidity/tx").MsgCollectIncentives): {
                        typeUrl: string;
                        value: import("./concentrated-liquidity/tx").MsgCollectIncentives;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition": {
                    aminoType: string;
                    toAmino: (message: import("./concentrated-liquidity/tx").MsgCreatePosition) => import("./concentrated-liquidity/tx").MsgCreatePositionAmino;
                    fromAmino: (object: import("./concentrated-liquidity/tx").MsgCreatePositionAmino) => import("./concentrated-liquidity/tx").MsgCreatePosition;
                };
                "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition": {
                    aminoType: string;
                    toAmino: (message: import("./concentrated-liquidity/tx").MsgWithdrawPosition) => import("./concentrated-liquidity/tx").MsgWithdrawPositionAmino;
                    fromAmino: (object: import("./concentrated-liquidity/tx").MsgWithdrawPositionAmino) => import("./concentrated-liquidity/tx").MsgWithdrawPosition;
                };
                "/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition": {
                    aminoType: string;
                    toAmino: (message: import("./concentrated-liquidity/tx").MsgAddToPosition) => import("./concentrated-liquidity/tx").MsgAddToPositionAmino;
                    fromAmino: (object: import("./concentrated-liquidity/tx").MsgAddToPositionAmino) => import("./concentrated-liquidity/tx").MsgAddToPosition;
                };
                "/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards": {
                    aminoType: string;
                    toAmino: (message: import("./concentrated-liquidity/tx").MsgCollectSpreadRewards) => import("./concentrated-liquidity/tx").MsgCollectSpreadRewardsAmino;
                    fromAmino: (object: import("./concentrated-liquidity/tx").MsgCollectSpreadRewardsAmino) => import("./concentrated-liquidity/tx").MsgCollectSpreadRewards;
                };
                "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives": {
                    aminoType: string;
                    toAmino: (message: import("./concentrated-liquidity/tx").MsgCollectIncentives) => import("./concentrated-liquidity/tx").MsgCollectIncentivesAmino;
                    fromAmino: (object: import("./concentrated-liquidity/tx").MsgCollectIncentivesAmino) => import("./concentrated-liquidity/tx").MsgCollectIncentives;
                };
            };
        };
        Params: {
            typeUrl: string;
            encode(message: _90.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.Params;
            fromPartial(object: Partial<_90.Params>): _90.Params;
            fromAmino(object: _90.ParamsAmino): _90.Params;
            toAmino(message: _90.Params): _90.ParamsAmino;
            fromAminoMsg(object: _90.ParamsAminoMsg): _90.Params;
            toAminoMsg(message: _90.Params): _90.ParamsAminoMsg;
            fromProtoMsg(message: _90.ParamsProtoMsg): _90.Params;
            toProto(message: _90.Params): Uint8Array;
            toProtoMsg(message: _90.Params): _90.ParamsProtoMsg;
        };
    };
    namespace cosmwasmpool {
        const v1beta1: {
            QueryClientImpl: typeof _303.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: _101.PoolsRequest): Promise<_101.PoolsResponse>;
                params(request?: _101.ParamsRequest): Promise<_101.ParamsResponse>;
                contractInfoByPoolId(request: _101.ContractInfoByPoolIdRequest): Promise<_101.ContractInfoByPoolIdResponse>;
            };
            LCDQueryClient: typeof _285.LCDQueryClient;
            ParamsRequest: {
                typeUrl: string;
                encode(_: _101.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.ParamsRequest;
                fromPartial(_: Partial<_101.ParamsRequest>): _101.ParamsRequest;
                fromAmino(_: _101.ParamsRequestAmino): _101.ParamsRequest;
                toAmino(_: _101.ParamsRequest): _101.ParamsRequestAmino;
                fromAminoMsg(object: _101.ParamsRequestAminoMsg): _101.ParamsRequest;
                toAminoMsg(message: _101.ParamsRequest): _101.ParamsRequestAminoMsg;
                fromProtoMsg(message: _101.ParamsRequestProtoMsg): _101.ParamsRequest;
                toProto(message: _101.ParamsRequest): Uint8Array;
                toProtoMsg(message: _101.ParamsRequest): _101.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _101.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.ParamsResponse;
                fromPartial(object: Partial<_101.ParamsResponse>): _101.ParamsResponse;
                fromAmino(object: _101.ParamsResponseAmino): _101.ParamsResponse;
                toAmino(message: _101.ParamsResponse): _101.ParamsResponseAmino;
                fromAminoMsg(object: _101.ParamsResponseAminoMsg): _101.ParamsResponse;
                toAminoMsg(message: _101.ParamsResponse): _101.ParamsResponseAminoMsg;
                fromProtoMsg(message: _101.ParamsResponseProtoMsg): _101.ParamsResponse;
                toProto(message: _101.ParamsResponse): Uint8Array;
                toProtoMsg(message: _101.ParamsResponse): _101.ParamsResponseProtoMsg;
            };
            PoolsRequest: {
                typeUrl: string;
                encode(message: _101.PoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.PoolsRequest;
                fromPartial(object: Partial<_101.PoolsRequest>): _101.PoolsRequest;
                fromAmino(object: _101.PoolsRequestAmino): _101.PoolsRequest;
                toAmino(message: _101.PoolsRequest): _101.PoolsRequestAmino;
                fromAminoMsg(object: _101.PoolsRequestAminoMsg): _101.PoolsRequest;
                toAminoMsg(message: _101.PoolsRequest): _101.PoolsRequestAminoMsg;
                fromProtoMsg(message: _101.PoolsRequestProtoMsg): _101.PoolsRequest;
                toProto(message: _101.PoolsRequest): Uint8Array;
                toProtoMsg(message: _101.PoolsRequest): _101.PoolsRequestProtoMsg;
            };
            PoolsResponse: {
                typeUrl: string;
                encode(message: _101.PoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.PoolsResponse;
                fromPartial(object: Partial<_101.PoolsResponse>): _101.PoolsResponse;
                fromAmino(object: _101.PoolsResponseAmino): _101.PoolsResponse;
                toAmino(message: _101.PoolsResponse): _101.PoolsResponseAmino;
                fromAminoMsg(object: _101.PoolsResponseAminoMsg): _101.PoolsResponse;
                toAminoMsg(message: _101.PoolsResponse): _101.PoolsResponseAminoMsg;
                fromProtoMsg(message: _101.PoolsResponseProtoMsg): _101.PoolsResponse;
                toProto(message: _101.PoolsResponse): Uint8Array;
                toProtoMsg(message: _101.PoolsResponse): _101.PoolsResponseProtoMsg;
            };
            ContractInfoByPoolIdRequest: {
                typeUrl: string;
                encode(message: _101.ContractInfoByPoolIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.ContractInfoByPoolIdRequest;
                fromPartial(object: Partial<_101.ContractInfoByPoolIdRequest>): _101.ContractInfoByPoolIdRequest;
                fromAmino(object: _101.ContractInfoByPoolIdRequestAmino): _101.ContractInfoByPoolIdRequest;
                toAmino(message: _101.ContractInfoByPoolIdRequest): _101.ContractInfoByPoolIdRequestAmino;
                fromAminoMsg(object: _101.ContractInfoByPoolIdRequestAminoMsg): _101.ContractInfoByPoolIdRequest;
                toAminoMsg(message: _101.ContractInfoByPoolIdRequest): _101.ContractInfoByPoolIdRequestAminoMsg;
                fromProtoMsg(message: _101.ContractInfoByPoolIdRequestProtoMsg): _101.ContractInfoByPoolIdRequest;
                toProto(message: _101.ContractInfoByPoolIdRequest): Uint8Array;
                toProtoMsg(message: _101.ContractInfoByPoolIdRequest): _101.ContractInfoByPoolIdRequestProtoMsg;
            };
            ContractInfoByPoolIdResponse: {
                typeUrl: string;
                encode(message: _101.ContractInfoByPoolIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.ContractInfoByPoolIdResponse;
                fromPartial(object: Partial<_101.ContractInfoByPoolIdResponse>): _101.ContractInfoByPoolIdResponse;
                fromAmino(object: _101.ContractInfoByPoolIdResponseAmino): _101.ContractInfoByPoolIdResponse;
                toAmino(message: _101.ContractInfoByPoolIdResponse): _101.ContractInfoByPoolIdResponseAmino;
                fromAminoMsg(object: _101.ContractInfoByPoolIdResponseAminoMsg): _101.ContractInfoByPoolIdResponse;
                toAminoMsg(message: _101.ContractInfoByPoolIdResponse): _101.ContractInfoByPoolIdResponseAminoMsg;
                fromProtoMsg(message: _101.ContractInfoByPoolIdResponseProtoMsg): _101.ContractInfoByPoolIdResponse;
                toProto(message: _101.ContractInfoByPoolIdResponse): Uint8Array;
                toProtoMsg(message: _101.ContractInfoByPoolIdResponse): _101.ContractInfoByPoolIdResponseProtoMsg;
            };
            PoolI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | import("./concentrated-liquidity/pool").Pool | _97.CosmWasmPool | _108.Pool | _115.Pool;
            PoolI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            PoolI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Params: {
                typeUrl: string;
                encode(message: _100.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.Params;
                fromPartial(object: Partial<_100.Params>): _100.Params;
                fromAmino(object: _100.ParamsAmino): _100.Params;
                toAmino(message: _100.Params): _100.ParamsAmino;
                fromAminoMsg(object: _100.ParamsAminoMsg): _100.Params;
                toAminoMsg(message: _100.Params): _100.ParamsAminoMsg;
                fromProtoMsg(message: _100.ParamsProtoMsg): _100.Params;
                toProto(message: _100.Params): Uint8Array;
                toProtoMsg(message: _100.Params): _100.ParamsProtoMsg;
            };
            MsgCreateCosmWasmPool: {
                typeUrl: string;
                encode(message: _99.MsgCreateCosmWasmPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.MsgCreateCosmWasmPool;
                fromPartial(object: Partial<_99.MsgCreateCosmWasmPool>): _99.MsgCreateCosmWasmPool;
                fromAmino(object: _99.MsgCreateCosmWasmPoolAmino): _99.MsgCreateCosmWasmPool;
                toAmino(message: _99.MsgCreateCosmWasmPool): _99.MsgCreateCosmWasmPoolAmino;
                fromAminoMsg(object: _99.MsgCreateCosmWasmPoolAminoMsg): _99.MsgCreateCosmWasmPool;
                toAminoMsg(message: _99.MsgCreateCosmWasmPool): _99.MsgCreateCosmWasmPoolAminoMsg;
                fromProtoMsg(message: _99.MsgCreateCosmWasmPoolProtoMsg): _99.MsgCreateCosmWasmPool;
                toProto(message: _99.MsgCreateCosmWasmPool): Uint8Array;
                toProtoMsg(message: _99.MsgCreateCosmWasmPool): _99.MsgCreateCosmWasmPoolProtoMsg;
            };
            MsgCreateCosmWasmPoolResponse: {
                typeUrl: string;
                encode(message: _99.MsgCreateCosmWasmPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.MsgCreateCosmWasmPoolResponse;
                fromPartial(object: Partial<_99.MsgCreateCosmWasmPoolResponse>): _99.MsgCreateCosmWasmPoolResponse;
                fromAmino(object: _99.MsgCreateCosmWasmPoolResponseAmino): _99.MsgCreateCosmWasmPoolResponse;
                toAmino(message: _99.MsgCreateCosmWasmPoolResponse): _99.MsgCreateCosmWasmPoolResponseAmino;
                fromAminoMsg(object: _99.MsgCreateCosmWasmPoolResponseAminoMsg): _99.MsgCreateCosmWasmPoolResponse;
                toAminoMsg(message: _99.MsgCreateCosmWasmPoolResponse): _99.MsgCreateCosmWasmPoolResponseAminoMsg;
                fromProtoMsg(message: _99.MsgCreateCosmWasmPoolResponseProtoMsg): _99.MsgCreateCosmWasmPoolResponse;
                toProto(message: _99.MsgCreateCosmWasmPoolResponse): Uint8Array;
                toProtoMsg(message: _99.MsgCreateCosmWasmPoolResponse): _99.MsgCreateCosmWasmPoolResponseProtoMsg;
            };
            EmptyRequest: {
                typeUrl: string;
                encode(_: _98.EmptyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.EmptyRequest;
                fromPartial(_: Partial<_98.EmptyRequest>): _98.EmptyRequest;
                fromAmino(_: _98.EmptyRequestAmino): _98.EmptyRequest;
                toAmino(_: _98.EmptyRequest): _98.EmptyRequestAmino;
                fromAminoMsg(object: _98.EmptyRequestAminoMsg): _98.EmptyRequest;
                toAminoMsg(message: _98.EmptyRequest): _98.EmptyRequestAminoMsg;
                fromProtoMsg(message: _98.EmptyRequestProtoMsg): _98.EmptyRequest;
                toProto(message: _98.EmptyRequest): Uint8Array;
                toProtoMsg(message: _98.EmptyRequest): _98.EmptyRequestProtoMsg;
            };
            JoinPoolExecuteMsgRequest: {
                typeUrl: string;
                encode(message: _98.JoinPoolExecuteMsgRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.JoinPoolExecuteMsgRequest;
                fromPartial(object: Partial<_98.JoinPoolExecuteMsgRequest>): _98.JoinPoolExecuteMsgRequest;
                fromAmino(object: _98.JoinPoolExecuteMsgRequestAmino): _98.JoinPoolExecuteMsgRequest;
                toAmino(message: _98.JoinPoolExecuteMsgRequest): _98.JoinPoolExecuteMsgRequestAmino;
                fromAminoMsg(object: _98.JoinPoolExecuteMsgRequestAminoMsg): _98.JoinPoolExecuteMsgRequest;
                toAminoMsg(message: _98.JoinPoolExecuteMsgRequest): _98.JoinPoolExecuteMsgRequestAminoMsg;
                fromProtoMsg(message: _98.JoinPoolExecuteMsgRequestProtoMsg): _98.JoinPoolExecuteMsgRequest;
                toProto(message: _98.JoinPoolExecuteMsgRequest): Uint8Array;
                toProtoMsg(message: _98.JoinPoolExecuteMsgRequest): _98.JoinPoolExecuteMsgRequestProtoMsg;
            };
            JoinPoolExecuteMsgResponse: {
                typeUrl: string;
                encode(_: _98.JoinPoolExecuteMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.JoinPoolExecuteMsgResponse;
                fromPartial(_: Partial<_98.JoinPoolExecuteMsgResponse>): _98.JoinPoolExecuteMsgResponse;
                fromAmino(_: _98.JoinPoolExecuteMsgResponseAmino): _98.JoinPoolExecuteMsgResponse;
                toAmino(_: _98.JoinPoolExecuteMsgResponse): _98.JoinPoolExecuteMsgResponseAmino;
                fromAminoMsg(object: _98.JoinPoolExecuteMsgResponseAminoMsg): _98.JoinPoolExecuteMsgResponse;
                toAminoMsg(message: _98.JoinPoolExecuteMsgResponse): _98.JoinPoolExecuteMsgResponseAminoMsg;
                fromProtoMsg(message: _98.JoinPoolExecuteMsgResponseProtoMsg): _98.JoinPoolExecuteMsgResponse;
                toProto(message: _98.JoinPoolExecuteMsgResponse): Uint8Array;
                toProtoMsg(message: _98.JoinPoolExecuteMsgResponse): _98.JoinPoolExecuteMsgResponseProtoMsg;
            };
            ExitPoolExecuteMsgRequest: {
                typeUrl: string;
                encode(message: _98.ExitPoolExecuteMsgRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.ExitPoolExecuteMsgRequest;
                fromPartial(object: Partial<_98.ExitPoolExecuteMsgRequest>): _98.ExitPoolExecuteMsgRequest;
                fromAmino(object: _98.ExitPoolExecuteMsgRequestAmino): _98.ExitPoolExecuteMsgRequest;
                toAmino(message: _98.ExitPoolExecuteMsgRequest): _98.ExitPoolExecuteMsgRequestAmino;
                fromAminoMsg(object: _98.ExitPoolExecuteMsgRequestAminoMsg): _98.ExitPoolExecuteMsgRequest;
                toAminoMsg(message: _98.ExitPoolExecuteMsgRequest): _98.ExitPoolExecuteMsgRequestAminoMsg;
                fromProtoMsg(message: _98.ExitPoolExecuteMsgRequestProtoMsg): _98.ExitPoolExecuteMsgRequest;
                toProto(message: _98.ExitPoolExecuteMsgRequest): Uint8Array;
                toProtoMsg(message: _98.ExitPoolExecuteMsgRequest): _98.ExitPoolExecuteMsgRequestProtoMsg;
            };
            ExitPoolExecuteMsgResponse: {
                typeUrl: string;
                encode(_: _98.ExitPoolExecuteMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.ExitPoolExecuteMsgResponse;
                fromPartial(_: Partial<_98.ExitPoolExecuteMsgResponse>): _98.ExitPoolExecuteMsgResponse;
                fromAmino(_: _98.ExitPoolExecuteMsgResponseAmino): _98.ExitPoolExecuteMsgResponse;
                toAmino(_: _98.ExitPoolExecuteMsgResponse): _98.ExitPoolExecuteMsgResponseAmino;
                fromAminoMsg(object: _98.ExitPoolExecuteMsgResponseAminoMsg): _98.ExitPoolExecuteMsgResponse;
                toAminoMsg(message: _98.ExitPoolExecuteMsgResponse): _98.ExitPoolExecuteMsgResponseAminoMsg;
                fromProtoMsg(message: _98.ExitPoolExecuteMsgResponseProtoMsg): _98.ExitPoolExecuteMsgResponse;
                toProto(message: _98.ExitPoolExecuteMsgResponse): Uint8Array;
                toProtoMsg(message: _98.ExitPoolExecuteMsgResponse): _98.ExitPoolExecuteMsgResponseProtoMsg;
            };
            CosmWasmPool: {
                typeUrl: string;
                encode(message: _97.CosmWasmPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.CosmWasmPool;
                fromPartial(object: Partial<_97.CosmWasmPool>): _97.CosmWasmPool;
                fromAmino(object: _97.CosmWasmPoolAmino): _97.CosmWasmPool;
                toAmino(message: _97.CosmWasmPool): _97.CosmWasmPoolAmino;
                fromAminoMsg(object: _97.CosmWasmPoolAminoMsg): _97.CosmWasmPool;
                toAminoMsg(message: _97.CosmWasmPool): _97.CosmWasmPoolAminoMsg;
                fromProtoMsg(message: _97.CosmWasmPoolProtoMsg): _97.CosmWasmPool;
                toProto(message: _97.CosmWasmPool): Uint8Array;
                toProtoMsg(message: _97.CosmWasmPool): _97.CosmWasmPoolProtoMsg;
            };
            GetSwapFeeQueryMsg: {
                typeUrl: string;
                encode(message: _96.GetSwapFeeQueryMsg, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.GetSwapFeeQueryMsg;
                fromPartial(object: Partial<_96.GetSwapFeeQueryMsg>): _96.GetSwapFeeQueryMsg;
                fromAmino(object: _96.GetSwapFeeQueryMsgAmino): _96.GetSwapFeeQueryMsg;
                toAmino(message: _96.GetSwapFeeQueryMsg): _96.GetSwapFeeQueryMsgAmino;
                fromAminoMsg(object: _96.GetSwapFeeQueryMsgAminoMsg): _96.GetSwapFeeQueryMsg;
                toAminoMsg(message: _96.GetSwapFeeQueryMsg): _96.GetSwapFeeQueryMsgAminoMsg;
                fromProtoMsg(message: _96.GetSwapFeeQueryMsgProtoMsg): _96.GetSwapFeeQueryMsg;
                toProto(message: _96.GetSwapFeeQueryMsg): Uint8Array;
                toProtoMsg(message: _96.GetSwapFeeQueryMsg): _96.GetSwapFeeQueryMsgProtoMsg;
            };
            GetSwapFeeQueryMsgResponse: {
                typeUrl: string;
                encode(message: _96.GetSwapFeeQueryMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.GetSwapFeeQueryMsgResponse;
                fromPartial(object: Partial<_96.GetSwapFeeQueryMsgResponse>): _96.GetSwapFeeQueryMsgResponse;
                fromAmino(object: _96.GetSwapFeeQueryMsgResponseAmino): _96.GetSwapFeeQueryMsgResponse;
                toAmino(message: _96.GetSwapFeeQueryMsgResponse): _96.GetSwapFeeQueryMsgResponseAmino;
                fromAminoMsg(object: _96.GetSwapFeeQueryMsgResponseAminoMsg): _96.GetSwapFeeQueryMsgResponse;
                toAminoMsg(message: _96.GetSwapFeeQueryMsgResponse): _96.GetSwapFeeQueryMsgResponseAminoMsg;
                fromProtoMsg(message: _96.GetSwapFeeQueryMsgResponseProtoMsg): _96.GetSwapFeeQueryMsgResponse;
                toProto(message: _96.GetSwapFeeQueryMsgResponse): Uint8Array;
                toProtoMsg(message: _96.GetSwapFeeQueryMsgResponse): _96.GetSwapFeeQueryMsgResponseProtoMsg;
            };
            SpotPrice: {
                typeUrl: string;
                encode(message: _96.SpotPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.SpotPrice;
                fromPartial(object: Partial<_96.SpotPrice>): _96.SpotPrice;
                fromAmino(object: _96.SpotPriceAmino): _96.SpotPrice;
                toAmino(message: _96.SpotPrice): _96.SpotPriceAmino;
                fromAminoMsg(object: _96.SpotPriceAminoMsg): _96.SpotPrice;
                toAminoMsg(message: _96.SpotPrice): _96.SpotPriceAminoMsg;
                fromProtoMsg(message: _96.SpotPriceProtoMsg): _96.SpotPrice;
                toProto(message: _96.SpotPrice): Uint8Array;
                toProtoMsg(message: _96.SpotPrice): _96.SpotPriceProtoMsg;
            };
            SpotPriceQueryMsg: {
                typeUrl: string;
                encode(message: _96.SpotPriceQueryMsg, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.SpotPriceQueryMsg;
                fromPartial(object: Partial<_96.SpotPriceQueryMsg>): _96.SpotPriceQueryMsg;
                fromAmino(object: _96.SpotPriceQueryMsgAmino): _96.SpotPriceQueryMsg;
                toAmino(message: _96.SpotPriceQueryMsg): _96.SpotPriceQueryMsgAmino;
                fromAminoMsg(object: _96.SpotPriceQueryMsgAminoMsg): _96.SpotPriceQueryMsg;
                toAminoMsg(message: _96.SpotPriceQueryMsg): _96.SpotPriceQueryMsgAminoMsg;
                fromProtoMsg(message: _96.SpotPriceQueryMsgProtoMsg): _96.SpotPriceQueryMsg;
                toProto(message: _96.SpotPriceQueryMsg): Uint8Array;
                toProtoMsg(message: _96.SpotPriceQueryMsg): _96.SpotPriceQueryMsgProtoMsg;
            };
            SpotPriceQueryMsgResponse: {
                typeUrl: string;
                encode(message: _96.SpotPriceQueryMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.SpotPriceQueryMsgResponse;
                fromPartial(object: Partial<_96.SpotPriceQueryMsgResponse>): _96.SpotPriceQueryMsgResponse;
                fromAmino(object: _96.SpotPriceQueryMsgResponseAmino): _96.SpotPriceQueryMsgResponse;
                toAmino(message: _96.SpotPriceQueryMsgResponse): _96.SpotPriceQueryMsgResponseAmino;
                fromAminoMsg(object: _96.SpotPriceQueryMsgResponseAminoMsg): _96.SpotPriceQueryMsgResponse;
                toAminoMsg(message: _96.SpotPriceQueryMsgResponse): _96.SpotPriceQueryMsgResponseAminoMsg;
                fromProtoMsg(message: _96.SpotPriceQueryMsgResponseProtoMsg): _96.SpotPriceQueryMsgResponse;
                toProto(message: _96.SpotPriceQueryMsgResponse): Uint8Array;
                toProtoMsg(message: _96.SpotPriceQueryMsgResponse): _96.SpotPriceQueryMsgResponseProtoMsg;
            };
            EmptyStruct: {
                typeUrl: string;
                encode(_: _96.EmptyStruct, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.EmptyStruct;
                fromPartial(_: Partial<_96.EmptyStruct>): _96.EmptyStruct;
                fromAmino(_: _96.EmptyStructAmino): _96.EmptyStruct;
                toAmino(_: _96.EmptyStruct): _96.EmptyStructAmino;
                fromAminoMsg(object: _96.EmptyStructAminoMsg): _96.EmptyStruct;
                toAminoMsg(message: _96.EmptyStruct): _96.EmptyStructAminoMsg;
                fromProtoMsg(message: _96.EmptyStructProtoMsg): _96.EmptyStruct;
                toProto(message: _96.EmptyStruct): Uint8Array;
                toProtoMsg(message: _96.EmptyStruct): _96.EmptyStructProtoMsg;
            };
            GetTotalPoolLiquidityQueryMsg: {
                typeUrl: string;
                encode(message: _96.GetTotalPoolLiquidityQueryMsg, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.GetTotalPoolLiquidityQueryMsg;
                fromPartial(object: Partial<_96.GetTotalPoolLiquidityQueryMsg>): _96.GetTotalPoolLiquidityQueryMsg;
                fromAmino(object: _96.GetTotalPoolLiquidityQueryMsgAmino): _96.GetTotalPoolLiquidityQueryMsg;
                toAmino(message: _96.GetTotalPoolLiquidityQueryMsg): _96.GetTotalPoolLiquidityQueryMsgAmino;
                fromAminoMsg(object: _96.GetTotalPoolLiquidityQueryMsgAminoMsg): _96.GetTotalPoolLiquidityQueryMsg;
                toAminoMsg(message: _96.GetTotalPoolLiquidityQueryMsg): _96.GetTotalPoolLiquidityQueryMsgAminoMsg;
                fromProtoMsg(message: _96.GetTotalPoolLiquidityQueryMsgProtoMsg): _96.GetTotalPoolLiquidityQueryMsg;
                toProto(message: _96.GetTotalPoolLiquidityQueryMsg): Uint8Array;
                toProtoMsg(message: _96.GetTotalPoolLiquidityQueryMsg): _96.GetTotalPoolLiquidityQueryMsgProtoMsg;
            };
            GetTotalPoolLiquidityQueryMsgResponse: {
                typeUrl: string;
                encode(message: _96.GetTotalPoolLiquidityQueryMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.GetTotalPoolLiquidityQueryMsgResponse;
                fromPartial(object: Partial<_96.GetTotalPoolLiquidityQueryMsgResponse>): _96.GetTotalPoolLiquidityQueryMsgResponse;
                fromAmino(object: _96.GetTotalPoolLiquidityQueryMsgResponseAmino): _96.GetTotalPoolLiquidityQueryMsgResponse;
                toAmino(message: _96.GetTotalPoolLiquidityQueryMsgResponse): _96.GetTotalPoolLiquidityQueryMsgResponseAmino;
                fromAminoMsg(object: _96.GetTotalPoolLiquidityQueryMsgResponseAminoMsg): _96.GetTotalPoolLiquidityQueryMsgResponse;
                toAminoMsg(message: _96.GetTotalPoolLiquidityQueryMsgResponse): _96.GetTotalPoolLiquidityQueryMsgResponseAminoMsg;
                fromProtoMsg(message: _96.GetTotalPoolLiquidityQueryMsgResponseProtoMsg): _96.GetTotalPoolLiquidityQueryMsgResponse;
                toProto(message: _96.GetTotalPoolLiquidityQueryMsgResponse): Uint8Array;
                toProtoMsg(message: _96.GetTotalPoolLiquidityQueryMsgResponse): _96.GetTotalPoolLiquidityQueryMsgResponseProtoMsg;
            };
            GetTotalSharesQueryMsg: {
                typeUrl: string;
                encode(message: _96.GetTotalSharesQueryMsg, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.GetTotalSharesQueryMsg;
                fromPartial(object: Partial<_96.GetTotalSharesQueryMsg>): _96.GetTotalSharesQueryMsg;
                fromAmino(object: _96.GetTotalSharesQueryMsgAmino): _96.GetTotalSharesQueryMsg;
                toAmino(message: _96.GetTotalSharesQueryMsg): _96.GetTotalSharesQueryMsgAmino;
                fromAminoMsg(object: _96.GetTotalSharesQueryMsgAminoMsg): _96.GetTotalSharesQueryMsg;
                toAminoMsg(message: _96.GetTotalSharesQueryMsg): _96.GetTotalSharesQueryMsgAminoMsg;
                fromProtoMsg(message: _96.GetTotalSharesQueryMsgProtoMsg): _96.GetTotalSharesQueryMsg;
                toProto(message: _96.GetTotalSharesQueryMsg): Uint8Array;
                toProtoMsg(message: _96.GetTotalSharesQueryMsg): _96.GetTotalSharesQueryMsgProtoMsg;
            };
            GetTotalSharesQueryMsgResponse: {
                typeUrl: string;
                encode(message: _96.GetTotalSharesQueryMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.GetTotalSharesQueryMsgResponse;
                fromPartial(object: Partial<_96.GetTotalSharesQueryMsgResponse>): _96.GetTotalSharesQueryMsgResponse;
                fromAmino(object: _96.GetTotalSharesQueryMsgResponseAmino): _96.GetTotalSharesQueryMsgResponse;
                toAmino(message: _96.GetTotalSharesQueryMsgResponse): _96.GetTotalSharesQueryMsgResponseAmino;
                fromAminoMsg(object: _96.GetTotalSharesQueryMsgResponseAminoMsg): _96.GetTotalSharesQueryMsgResponse;
                toAminoMsg(message: _96.GetTotalSharesQueryMsgResponse): _96.GetTotalSharesQueryMsgResponseAminoMsg;
                fromProtoMsg(message: _96.GetTotalSharesQueryMsgResponseProtoMsg): _96.GetTotalSharesQueryMsgResponse;
                toProto(message: _96.GetTotalSharesQueryMsgResponse): Uint8Array;
                toProtoMsg(message: _96.GetTotalSharesQueryMsgResponse): _96.GetTotalSharesQueryMsgResponseProtoMsg;
            };
            SwapExactAmountIn: {
                typeUrl: string;
                encode(message: _95.SwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.SwapExactAmountIn;
                fromPartial(object: Partial<_95.SwapExactAmountIn>): _95.SwapExactAmountIn;
                fromAmino(object: _95.SwapExactAmountInAmino): _95.SwapExactAmountIn;
                toAmino(message: _95.SwapExactAmountIn): _95.SwapExactAmountInAmino;
                fromAminoMsg(object: _95.SwapExactAmountInAminoMsg): _95.SwapExactAmountIn;
                toAminoMsg(message: _95.SwapExactAmountIn): _95.SwapExactAmountInAminoMsg;
                fromProtoMsg(message: _95.SwapExactAmountInProtoMsg): _95.SwapExactAmountIn;
                toProto(message: _95.SwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _95.SwapExactAmountIn): _95.SwapExactAmountInProtoMsg;
            };
            SwapExactAmountInSudoMsg: {
                typeUrl: string;
                encode(message: _95.SwapExactAmountInSudoMsg, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.SwapExactAmountInSudoMsg;
                fromPartial(object: Partial<_95.SwapExactAmountInSudoMsg>): _95.SwapExactAmountInSudoMsg;
                fromAmino(object: _95.SwapExactAmountInSudoMsgAmino): _95.SwapExactAmountInSudoMsg;
                toAmino(message: _95.SwapExactAmountInSudoMsg): _95.SwapExactAmountInSudoMsgAmino;
                fromAminoMsg(object: _95.SwapExactAmountInSudoMsgAminoMsg): _95.SwapExactAmountInSudoMsg;
                toAminoMsg(message: _95.SwapExactAmountInSudoMsg): _95.SwapExactAmountInSudoMsgAminoMsg;
                fromProtoMsg(message: _95.SwapExactAmountInSudoMsgProtoMsg): _95.SwapExactAmountInSudoMsg;
                toProto(message: _95.SwapExactAmountInSudoMsg): Uint8Array;
                toProtoMsg(message: _95.SwapExactAmountInSudoMsg): _95.SwapExactAmountInSudoMsgProtoMsg;
            };
            SwapExactAmountInSudoMsgResponse: {
                typeUrl: string;
                encode(message: _95.SwapExactAmountInSudoMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.SwapExactAmountInSudoMsgResponse;
                fromPartial(object: Partial<_95.SwapExactAmountInSudoMsgResponse>): _95.SwapExactAmountInSudoMsgResponse;
                fromAmino(object: _95.SwapExactAmountInSudoMsgResponseAmino): _95.SwapExactAmountInSudoMsgResponse;
                toAmino(message: _95.SwapExactAmountInSudoMsgResponse): _95.SwapExactAmountInSudoMsgResponseAmino;
                fromAminoMsg(object: _95.SwapExactAmountInSudoMsgResponseAminoMsg): _95.SwapExactAmountInSudoMsgResponse;
                toAminoMsg(message: _95.SwapExactAmountInSudoMsgResponse): _95.SwapExactAmountInSudoMsgResponseAminoMsg;
                fromProtoMsg(message: _95.SwapExactAmountInSudoMsgResponseProtoMsg): _95.SwapExactAmountInSudoMsgResponse;
                toProto(message: _95.SwapExactAmountInSudoMsgResponse): Uint8Array;
                toProtoMsg(message: _95.SwapExactAmountInSudoMsgResponse): _95.SwapExactAmountInSudoMsgResponseProtoMsg;
            };
            SwapExactAmountOut: {
                typeUrl: string;
                encode(message: _95.SwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.SwapExactAmountOut;
                fromPartial(object: Partial<_95.SwapExactAmountOut>): _95.SwapExactAmountOut;
                fromAmino(object: _95.SwapExactAmountOutAmino): _95.SwapExactAmountOut;
                toAmino(message: _95.SwapExactAmountOut): _95.SwapExactAmountOutAmino;
                fromAminoMsg(object: _95.SwapExactAmountOutAminoMsg): _95.SwapExactAmountOut;
                toAminoMsg(message: _95.SwapExactAmountOut): _95.SwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _95.SwapExactAmountOutProtoMsg): _95.SwapExactAmountOut;
                toProto(message: _95.SwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _95.SwapExactAmountOut): _95.SwapExactAmountOutProtoMsg;
            };
            SwapExactAmountOutSudoMsg: {
                typeUrl: string;
                encode(message: _95.SwapExactAmountOutSudoMsg, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.SwapExactAmountOutSudoMsg;
                fromPartial(object: Partial<_95.SwapExactAmountOutSudoMsg>): _95.SwapExactAmountOutSudoMsg;
                fromAmino(object: _95.SwapExactAmountOutSudoMsgAmino): _95.SwapExactAmountOutSudoMsg;
                toAmino(message: _95.SwapExactAmountOutSudoMsg): _95.SwapExactAmountOutSudoMsgAmino;
                fromAminoMsg(object: _95.SwapExactAmountOutSudoMsgAminoMsg): _95.SwapExactAmountOutSudoMsg;
                toAminoMsg(message: _95.SwapExactAmountOutSudoMsg): _95.SwapExactAmountOutSudoMsgAminoMsg;
                fromProtoMsg(message: _95.SwapExactAmountOutSudoMsgProtoMsg): _95.SwapExactAmountOutSudoMsg;
                toProto(message: _95.SwapExactAmountOutSudoMsg): Uint8Array;
                toProtoMsg(message: _95.SwapExactAmountOutSudoMsg): _95.SwapExactAmountOutSudoMsgProtoMsg;
            };
            SwapExactAmountOutSudoMsgResponse: {
                typeUrl: string;
                encode(message: _95.SwapExactAmountOutSudoMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.SwapExactAmountOutSudoMsgResponse;
                fromPartial(object: Partial<_95.SwapExactAmountOutSudoMsgResponse>): _95.SwapExactAmountOutSudoMsgResponse;
                fromAmino(object: _95.SwapExactAmountOutSudoMsgResponseAmino): _95.SwapExactAmountOutSudoMsgResponse;
                toAmino(message: _95.SwapExactAmountOutSudoMsgResponse): _95.SwapExactAmountOutSudoMsgResponseAmino;
                fromAminoMsg(object: _95.SwapExactAmountOutSudoMsgResponseAminoMsg): _95.SwapExactAmountOutSudoMsgResponse;
                toAminoMsg(message: _95.SwapExactAmountOutSudoMsgResponse): _95.SwapExactAmountOutSudoMsgResponseAminoMsg;
                fromProtoMsg(message: _95.SwapExactAmountOutSudoMsgResponseProtoMsg): _95.SwapExactAmountOutSudoMsgResponse;
                toProto(message: _95.SwapExactAmountOutSudoMsgResponse): Uint8Array;
                toProtoMsg(message: _95.SwapExactAmountOutSudoMsgResponse): _95.SwapExactAmountOutSudoMsgResponseProtoMsg;
            };
            CalcOutAmtGivenIn: {
                typeUrl: string;
                encode(message: _94.CalcOutAmtGivenIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.CalcOutAmtGivenIn;
                fromPartial(object: Partial<_94.CalcOutAmtGivenIn>): _94.CalcOutAmtGivenIn;
                fromAmino(object: _94.CalcOutAmtGivenInAmino): _94.CalcOutAmtGivenIn;
                toAmino(message: _94.CalcOutAmtGivenIn): _94.CalcOutAmtGivenInAmino;
                fromAminoMsg(object: _94.CalcOutAmtGivenInAminoMsg): _94.CalcOutAmtGivenIn;
                toAminoMsg(message: _94.CalcOutAmtGivenIn): _94.CalcOutAmtGivenInAminoMsg;
                fromProtoMsg(message: _94.CalcOutAmtGivenInProtoMsg): _94.CalcOutAmtGivenIn;
                toProto(message: _94.CalcOutAmtGivenIn): Uint8Array;
                toProtoMsg(message: _94.CalcOutAmtGivenIn): _94.CalcOutAmtGivenInProtoMsg;
            };
            CalcOutAmtGivenInRequest: {
                typeUrl: string;
                encode(message: _94.CalcOutAmtGivenInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.CalcOutAmtGivenInRequest;
                fromPartial(object: Partial<_94.CalcOutAmtGivenInRequest>): _94.CalcOutAmtGivenInRequest;
                fromAmino(object: _94.CalcOutAmtGivenInRequestAmino): _94.CalcOutAmtGivenInRequest;
                toAmino(message: _94.CalcOutAmtGivenInRequest): _94.CalcOutAmtGivenInRequestAmino;
                fromAminoMsg(object: _94.CalcOutAmtGivenInRequestAminoMsg): _94.CalcOutAmtGivenInRequest;
                toAminoMsg(message: _94.CalcOutAmtGivenInRequest): _94.CalcOutAmtGivenInRequestAminoMsg;
                fromProtoMsg(message: _94.CalcOutAmtGivenInRequestProtoMsg): _94.CalcOutAmtGivenInRequest;
                toProto(message: _94.CalcOutAmtGivenInRequest): Uint8Array;
                toProtoMsg(message: _94.CalcOutAmtGivenInRequest): _94.CalcOutAmtGivenInRequestProtoMsg;
            };
            CalcOutAmtGivenInResponse: {
                typeUrl: string;
                encode(message: _94.CalcOutAmtGivenInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.CalcOutAmtGivenInResponse;
                fromPartial(object: Partial<_94.CalcOutAmtGivenInResponse>): _94.CalcOutAmtGivenInResponse;
                fromAmino(object: _94.CalcOutAmtGivenInResponseAmino): _94.CalcOutAmtGivenInResponse;
                toAmino(message: _94.CalcOutAmtGivenInResponse): _94.CalcOutAmtGivenInResponseAmino;
                fromAminoMsg(object: _94.CalcOutAmtGivenInResponseAminoMsg): _94.CalcOutAmtGivenInResponse;
                toAminoMsg(message: _94.CalcOutAmtGivenInResponse): _94.CalcOutAmtGivenInResponseAminoMsg;
                fromProtoMsg(message: _94.CalcOutAmtGivenInResponseProtoMsg): _94.CalcOutAmtGivenInResponse;
                toProto(message: _94.CalcOutAmtGivenInResponse): Uint8Array;
                toProtoMsg(message: _94.CalcOutAmtGivenInResponse): _94.CalcOutAmtGivenInResponseProtoMsg;
            };
            CalcInAmtGivenOut: {
                typeUrl: string;
                encode(message: _94.CalcInAmtGivenOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.CalcInAmtGivenOut;
                fromPartial(object: Partial<_94.CalcInAmtGivenOut>): _94.CalcInAmtGivenOut;
                fromAmino(object: _94.CalcInAmtGivenOutAmino): _94.CalcInAmtGivenOut;
                toAmino(message: _94.CalcInAmtGivenOut): _94.CalcInAmtGivenOutAmino;
                fromAminoMsg(object: _94.CalcInAmtGivenOutAminoMsg): _94.CalcInAmtGivenOut;
                toAminoMsg(message: _94.CalcInAmtGivenOut): _94.CalcInAmtGivenOutAminoMsg;
                fromProtoMsg(message: _94.CalcInAmtGivenOutProtoMsg): _94.CalcInAmtGivenOut;
                toProto(message: _94.CalcInAmtGivenOut): Uint8Array;
                toProtoMsg(message: _94.CalcInAmtGivenOut): _94.CalcInAmtGivenOutProtoMsg;
            };
            CalcInAmtGivenOutRequest: {
                typeUrl: string;
                encode(message: _94.CalcInAmtGivenOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.CalcInAmtGivenOutRequest;
                fromPartial(object: Partial<_94.CalcInAmtGivenOutRequest>): _94.CalcInAmtGivenOutRequest;
                fromAmino(object: _94.CalcInAmtGivenOutRequestAmino): _94.CalcInAmtGivenOutRequest;
                toAmino(message: _94.CalcInAmtGivenOutRequest): _94.CalcInAmtGivenOutRequestAmino;
                fromAminoMsg(object: _94.CalcInAmtGivenOutRequestAminoMsg): _94.CalcInAmtGivenOutRequest;
                toAminoMsg(message: _94.CalcInAmtGivenOutRequest): _94.CalcInAmtGivenOutRequestAminoMsg;
                fromProtoMsg(message: _94.CalcInAmtGivenOutRequestProtoMsg): _94.CalcInAmtGivenOutRequest;
                toProto(message: _94.CalcInAmtGivenOutRequest): Uint8Array;
                toProtoMsg(message: _94.CalcInAmtGivenOutRequest): _94.CalcInAmtGivenOutRequestProtoMsg;
            };
            CalcInAmtGivenOutResponse: {
                typeUrl: string;
                encode(message: _94.CalcInAmtGivenOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.CalcInAmtGivenOutResponse;
                fromPartial(object: Partial<_94.CalcInAmtGivenOutResponse>): _94.CalcInAmtGivenOutResponse;
                fromAmino(object: _94.CalcInAmtGivenOutResponseAmino): _94.CalcInAmtGivenOutResponse;
                toAmino(message: _94.CalcInAmtGivenOutResponse): _94.CalcInAmtGivenOutResponseAmino;
                fromAminoMsg(object: _94.CalcInAmtGivenOutResponseAminoMsg): _94.CalcInAmtGivenOutResponse;
                toAminoMsg(message: _94.CalcInAmtGivenOutResponse): _94.CalcInAmtGivenOutResponseAminoMsg;
                fromProtoMsg(message: _94.CalcInAmtGivenOutResponseProtoMsg): _94.CalcInAmtGivenOutResponse;
                toProto(message: _94.CalcInAmtGivenOutResponse): Uint8Array;
                toProtoMsg(message: _94.CalcInAmtGivenOutResponse): _94.CalcInAmtGivenOutResponseProtoMsg;
            };
            InstantiateMsg: {
                typeUrl: string;
                encode(message: _93.InstantiateMsg, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.InstantiateMsg;
                fromPartial(object: Partial<_93.InstantiateMsg>): _93.InstantiateMsg;
                fromAmino(object: _93.InstantiateMsgAmino): _93.InstantiateMsg;
                toAmino(message: _93.InstantiateMsg): _93.InstantiateMsgAmino;
                fromAminoMsg(object: _93.InstantiateMsgAminoMsg): _93.InstantiateMsg;
                toAminoMsg(message: _93.InstantiateMsg): _93.InstantiateMsgAminoMsg;
                fromProtoMsg(message: _93.InstantiateMsgProtoMsg): _93.InstantiateMsg;
                toProto(message: _93.InstantiateMsg): Uint8Array;
                toProtoMsg(message: _93.InstantiateMsg): _93.InstantiateMsgProtoMsg;
            };
            UploadCosmWasmPoolCodeAndWhiteListProposal: {
                typeUrl: string;
                encode(message: _92.UploadCosmWasmPoolCodeAndWhiteListProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.UploadCosmWasmPoolCodeAndWhiteListProposal;
                fromPartial(object: Partial<_92.UploadCosmWasmPoolCodeAndWhiteListProposal>): _92.UploadCosmWasmPoolCodeAndWhiteListProposal;
                fromAmino(object: _92.UploadCosmWasmPoolCodeAndWhiteListProposalAmino): _92.UploadCosmWasmPoolCodeAndWhiteListProposal;
                toAmino(message: _92.UploadCosmWasmPoolCodeAndWhiteListProposal): _92.UploadCosmWasmPoolCodeAndWhiteListProposalAmino;
                fromAminoMsg(object: _92.UploadCosmWasmPoolCodeAndWhiteListProposalAminoMsg): _92.UploadCosmWasmPoolCodeAndWhiteListProposal;
                toAminoMsg(message: _92.UploadCosmWasmPoolCodeAndWhiteListProposal): _92.UploadCosmWasmPoolCodeAndWhiteListProposalAminoMsg;
                fromProtoMsg(message: _92.UploadCosmWasmPoolCodeAndWhiteListProposalProtoMsg): _92.UploadCosmWasmPoolCodeAndWhiteListProposal;
                toProto(message: _92.UploadCosmWasmPoolCodeAndWhiteListProposal): Uint8Array;
                toProtoMsg(message: _92.UploadCosmWasmPoolCodeAndWhiteListProposal): _92.UploadCosmWasmPoolCodeAndWhiteListProposalProtoMsg;
            };
            MigratePoolContractsProposal: {
                typeUrl: string;
                encode(message: _92.MigratePoolContractsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MigratePoolContractsProposal;
                fromPartial(object: Partial<_92.MigratePoolContractsProposal>): _92.MigratePoolContractsProposal;
                fromAmino(object: _92.MigratePoolContractsProposalAmino): _92.MigratePoolContractsProposal;
                toAmino(message: _92.MigratePoolContractsProposal): _92.MigratePoolContractsProposalAmino;
                fromAminoMsg(object: _92.MigratePoolContractsProposalAminoMsg): _92.MigratePoolContractsProposal;
                toAminoMsg(message: _92.MigratePoolContractsProposal): _92.MigratePoolContractsProposalAminoMsg;
                fromProtoMsg(message: _92.MigratePoolContractsProposalProtoMsg): _92.MigratePoolContractsProposal;
                toProto(message: _92.MigratePoolContractsProposal): Uint8Array;
                toProtoMsg(message: _92.MigratePoolContractsProposal): _92.MigratePoolContractsProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _91.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.GenesisState;
                fromPartial(object: Partial<_91.GenesisState>): _91.GenesisState;
                fromAmino(object: _91.GenesisStateAmino): _91.GenesisState;
                toAmino(message: _91.GenesisState): _91.GenesisStateAmino;
                fromAminoMsg(object: _91.GenesisStateAminoMsg): _91.GenesisState;
                toAminoMsg(message: _91.GenesisState): _91.GenesisStateAminoMsg;
                fromProtoMsg(message: _91.GenesisStateProtoMsg): _91.GenesisState;
                toProto(message: _91.GenesisState): Uint8Array;
                toProtoMsg(message: _91.GenesisState): _91.GenesisStateProtoMsg;
            };
        };
    }
    namespace downtimedetector {
        const v1beta1: {
            QueryClientImpl: typeof _304.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                recoveredSinceDowntimeOfLength(request: _105.RecoveredSinceDowntimeOfLengthRequest): Promise<_105.RecoveredSinceDowntimeOfLengthResponse>;
            };
            LCDQueryClient: typeof _286.LCDQueryClient;
            RecoveredSinceDowntimeOfLengthRequest: {
                typeUrl: string;
                encode(message: _105.RecoveredSinceDowntimeOfLengthRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.RecoveredSinceDowntimeOfLengthRequest;
                fromPartial(object: Partial<_105.RecoveredSinceDowntimeOfLengthRequest>): _105.RecoveredSinceDowntimeOfLengthRequest;
                fromAmino(object: _105.RecoveredSinceDowntimeOfLengthRequestAmino): _105.RecoveredSinceDowntimeOfLengthRequest;
                toAmino(message: _105.RecoveredSinceDowntimeOfLengthRequest): _105.RecoveredSinceDowntimeOfLengthRequestAmino;
                fromAminoMsg(object: _105.RecoveredSinceDowntimeOfLengthRequestAminoMsg): _105.RecoveredSinceDowntimeOfLengthRequest;
                toAminoMsg(message: _105.RecoveredSinceDowntimeOfLengthRequest): _105.RecoveredSinceDowntimeOfLengthRequestAminoMsg;
                fromProtoMsg(message: _105.RecoveredSinceDowntimeOfLengthRequestProtoMsg): _105.RecoveredSinceDowntimeOfLengthRequest;
                toProto(message: _105.RecoveredSinceDowntimeOfLengthRequest): Uint8Array;
                toProtoMsg(message: _105.RecoveredSinceDowntimeOfLengthRequest): _105.RecoveredSinceDowntimeOfLengthRequestProtoMsg;
            };
            RecoveredSinceDowntimeOfLengthResponse: {
                typeUrl: string;
                encode(message: _105.RecoveredSinceDowntimeOfLengthResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.RecoveredSinceDowntimeOfLengthResponse;
                fromPartial(object: Partial<_105.RecoveredSinceDowntimeOfLengthResponse>): _105.RecoveredSinceDowntimeOfLengthResponse;
                fromAmino(object: _105.RecoveredSinceDowntimeOfLengthResponseAmino): _105.RecoveredSinceDowntimeOfLengthResponse;
                toAmino(message: _105.RecoveredSinceDowntimeOfLengthResponse): _105.RecoveredSinceDowntimeOfLengthResponseAmino;
                fromAminoMsg(object: _105.RecoveredSinceDowntimeOfLengthResponseAminoMsg): _105.RecoveredSinceDowntimeOfLengthResponse;
                toAminoMsg(message: _105.RecoveredSinceDowntimeOfLengthResponse): _105.RecoveredSinceDowntimeOfLengthResponseAminoMsg;
                fromProtoMsg(message: _105.RecoveredSinceDowntimeOfLengthResponseProtoMsg): _105.RecoveredSinceDowntimeOfLengthResponse;
                toProto(message: _105.RecoveredSinceDowntimeOfLengthResponse): Uint8Array;
                toProtoMsg(message: _105.RecoveredSinceDowntimeOfLengthResponse): _105.RecoveredSinceDowntimeOfLengthResponseProtoMsg;
            };
            GenesisDowntimeEntry: {
                typeUrl: string;
                encode(message: _104.GenesisDowntimeEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.GenesisDowntimeEntry;
                fromPartial(object: Partial<_104.GenesisDowntimeEntry>): _104.GenesisDowntimeEntry;
                fromAmino(object: _104.GenesisDowntimeEntryAmino): _104.GenesisDowntimeEntry;
                toAmino(message: _104.GenesisDowntimeEntry): _104.GenesisDowntimeEntryAmino;
                fromAminoMsg(object: _104.GenesisDowntimeEntryAminoMsg): _104.GenesisDowntimeEntry;
                toAminoMsg(message: _104.GenesisDowntimeEntry): _104.GenesisDowntimeEntryAminoMsg;
                fromProtoMsg(message: _104.GenesisDowntimeEntryProtoMsg): _104.GenesisDowntimeEntry;
                toProto(message: _104.GenesisDowntimeEntry): Uint8Array;
                toProtoMsg(message: _104.GenesisDowntimeEntry): _104.GenesisDowntimeEntryProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _104.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.GenesisState;
                fromPartial(object: Partial<_104.GenesisState>): _104.GenesisState;
                fromAmino(object: _104.GenesisStateAmino): _104.GenesisState;
                toAmino(message: _104.GenesisState): _104.GenesisStateAmino;
                fromAminoMsg(object: _104.GenesisStateAminoMsg): _104.GenesisState;
                toAminoMsg(message: _104.GenesisState): _104.GenesisStateAminoMsg;
                fromProtoMsg(message: _104.GenesisStateProtoMsg): _104.GenesisState;
                toProto(message: _104.GenesisState): Uint8Array;
                toProtoMsg(message: _104.GenesisState): _104.GenesisStateProtoMsg;
            };
            downtimeFromJSON(object: any): _103.Downtime;
            downtimeToJSON(object: _103.Downtime): string;
            Downtime: typeof _103.Downtime;
            DowntimeSDKType: typeof _103.Downtime;
            DowntimeAmino: typeof _103.Downtime;
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _305.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _107.QueryEpochsInfoRequest): Promise<_107.QueryEpochsInfoResponse>;
                currentEpoch(request: _107.QueryCurrentEpochRequest): Promise<_107.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _287.LCDQueryClient;
            QueryEpochsInfoRequest: {
                typeUrl: string;
                encode(_: _107.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryEpochsInfoRequest;
                fromPartial(_: Partial<_107.QueryEpochsInfoRequest>): _107.QueryEpochsInfoRequest;
                fromAmino(_: _107.QueryEpochsInfoRequestAmino): _107.QueryEpochsInfoRequest;
                toAmino(_: _107.QueryEpochsInfoRequest): _107.QueryEpochsInfoRequestAmino;
                fromAminoMsg(object: _107.QueryEpochsInfoRequestAminoMsg): _107.QueryEpochsInfoRequest;
                toAminoMsg(message: _107.QueryEpochsInfoRequest): _107.QueryEpochsInfoRequestAminoMsg;
                fromProtoMsg(message: _107.QueryEpochsInfoRequestProtoMsg): _107.QueryEpochsInfoRequest;
                toProto(message: _107.QueryEpochsInfoRequest): Uint8Array;
                toProtoMsg(message: _107.QueryEpochsInfoRequest): _107.QueryEpochsInfoRequestProtoMsg;
            };
            QueryEpochsInfoResponse: {
                typeUrl: string;
                encode(message: _107.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryEpochsInfoResponse;
                fromPartial(object: Partial<_107.QueryEpochsInfoResponse>): _107.QueryEpochsInfoResponse;
                fromAmino(object: _107.QueryEpochsInfoResponseAmino): _107.QueryEpochsInfoResponse;
                toAmino(message: _107.QueryEpochsInfoResponse): _107.QueryEpochsInfoResponseAmino;
                fromAminoMsg(object: _107.QueryEpochsInfoResponseAminoMsg): _107.QueryEpochsInfoResponse;
                toAminoMsg(message: _107.QueryEpochsInfoResponse): _107.QueryEpochsInfoResponseAminoMsg;
                fromProtoMsg(message: _107.QueryEpochsInfoResponseProtoMsg): _107.QueryEpochsInfoResponse;
                toProto(message: _107.QueryEpochsInfoResponse): Uint8Array;
                toProtoMsg(message: _107.QueryEpochsInfoResponse): _107.QueryEpochsInfoResponseProtoMsg;
            };
            QueryCurrentEpochRequest: {
                typeUrl: string;
                encode(message: _107.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryCurrentEpochRequest;
                fromPartial(object: Partial<_107.QueryCurrentEpochRequest>): _107.QueryCurrentEpochRequest;
                fromAmino(object: _107.QueryCurrentEpochRequestAmino): _107.QueryCurrentEpochRequest;
                toAmino(message: _107.QueryCurrentEpochRequest): _107.QueryCurrentEpochRequestAmino;
                fromAminoMsg(object: _107.QueryCurrentEpochRequestAminoMsg): _107.QueryCurrentEpochRequest;
                toAminoMsg(message: _107.QueryCurrentEpochRequest): _107.QueryCurrentEpochRequestAminoMsg;
                fromProtoMsg(message: _107.QueryCurrentEpochRequestProtoMsg): _107.QueryCurrentEpochRequest;
                toProto(message: _107.QueryCurrentEpochRequest): Uint8Array;
                toProtoMsg(message: _107.QueryCurrentEpochRequest): _107.QueryCurrentEpochRequestProtoMsg;
            };
            QueryCurrentEpochResponse: {
                typeUrl: string;
                encode(message: _107.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryCurrentEpochResponse;
                fromPartial(object: Partial<_107.QueryCurrentEpochResponse>): _107.QueryCurrentEpochResponse;
                fromAmino(object: _107.QueryCurrentEpochResponseAmino): _107.QueryCurrentEpochResponse;
                toAmino(message: _107.QueryCurrentEpochResponse): _107.QueryCurrentEpochResponseAmino;
                fromAminoMsg(object: _107.QueryCurrentEpochResponseAminoMsg): _107.QueryCurrentEpochResponse;
                toAminoMsg(message: _107.QueryCurrentEpochResponse): _107.QueryCurrentEpochResponseAminoMsg;
                fromProtoMsg(message: _107.QueryCurrentEpochResponseProtoMsg): _107.QueryCurrentEpochResponse;
                toProto(message: _107.QueryCurrentEpochResponse): Uint8Array;
                toProtoMsg(message: _107.QueryCurrentEpochResponse): _107.QueryCurrentEpochResponseProtoMsg;
            };
            EpochInfo: {
                typeUrl: string;
                encode(message: _106.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.EpochInfo;
                fromPartial(object: Partial<_106.EpochInfo>): _106.EpochInfo;
                fromAmino(object: _106.EpochInfoAmino): _106.EpochInfo;
                toAmino(message: _106.EpochInfo): _106.EpochInfoAmino;
                fromAminoMsg(object: _106.EpochInfoAminoMsg): _106.EpochInfo;
                toAminoMsg(message: _106.EpochInfo): _106.EpochInfoAminoMsg;
                fromProtoMsg(message: _106.EpochInfoProtoMsg): _106.EpochInfo;
                toProto(message: _106.EpochInfo): Uint8Array;
                toProtoMsg(message: _106.EpochInfo): _106.EpochInfoProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _106.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.GenesisState;
                fromPartial(object: Partial<_106.GenesisState>): _106.GenesisState;
                fromAmino(object: _106.GenesisStateAmino): _106.GenesisState;
                toAmino(message: _106.GenesisState): _106.GenesisStateAmino;
                fromAminoMsg(object: _106.GenesisStateAminoMsg): _106.GenesisState;
                toAminoMsg(message: _106.GenesisState): _106.GenesisStateAminoMsg;
                fromProtoMsg(message: _106.GenesisStateProtoMsg): _106.GenesisState;
                toProto(message: _106.GenesisState): Uint8Array;
                toProtoMsg(message: _106.GenesisState): _106.GenesisStateProtoMsg;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgClientImpl: typeof _324.MsgClientImpl;
            QueryClientImpl: typeof _306.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: _111.QueryPoolsRequest): Promise<_111.QueryPoolsResponse>;
                numPools(request?: _111.QueryNumPoolsRequest): Promise<_111.QueryNumPoolsResponse>;
                totalLiquidity(request?: _111.QueryTotalLiquidityRequest): Promise<_111.QueryTotalLiquidityResponse>;
                poolsWithFilter(request: _111.QueryPoolsWithFilterRequest): Promise<_111.QueryPoolsWithFilterResponse>;
                pool(request: _111.QueryPoolRequest): Promise<_111.QueryPoolResponse>;
                poolType(request: _111.QueryPoolTypeRequest): Promise<_111.QueryPoolTypeResponse>;
                calcJoinPoolNoSwapShares(request: _111.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_111.QueryCalcJoinPoolNoSwapSharesResponse>;
                calcJoinPoolShares(request: _111.QueryCalcJoinPoolSharesRequest): Promise<_111.QueryCalcJoinPoolSharesResponse>;
                calcExitPoolCoinsFromShares(request: _111.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_111.QueryCalcExitPoolCoinsFromSharesResponse>;
                poolParams(request: _111.QueryPoolParamsRequest): Promise<_111.QueryPoolParamsResponse>;
                totalPoolLiquidity(request: _111.QueryTotalPoolLiquidityRequest): Promise<_111.QueryTotalPoolLiquidityResponse>;
                totalShares(request: _111.QueryTotalSharesRequest): Promise<_111.QueryTotalSharesResponse>;
                spotPrice(request: _111.QuerySpotPriceRequest): Promise<_111.QuerySpotPriceResponse>;
                estimateSwapExactAmountIn(request: _111.QuerySwapExactAmountInRequest): Promise<_111.QuerySwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _111.QuerySwapExactAmountOutRequest): Promise<_111.QuerySwapExactAmountOutResponse>;
                concentratedPoolIdLinkFromCFMM(request: _111.QueryConcentratedPoolIdLinkFromCFMMRequest): Promise<_111.QueryConcentratedPoolIdLinkFromCFMMResponse>;
            };
            LCDQueryClient: typeof _288.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _113.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _113.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _113.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _113.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _113.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _113.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _113.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _113.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _113.MsgJoinPool): {
                        typeUrl: string;
                        value: _113.MsgJoinPool;
                    };
                    exitPool(value: _113.MsgExitPool): {
                        typeUrl: string;
                        value: _113.MsgExitPool;
                    };
                    swapExactAmountIn(value: _113.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _113.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _113.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _113.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _113.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _113.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _113.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _113.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _113.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _113.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _113.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _113.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _113.MsgJoinPool): {
                        typeUrl: string;
                        value: _113.MsgJoinPool;
                    };
                    exitPool(value: _113.MsgExitPool): {
                        typeUrl: string;
                        value: _113.MsgExitPool;
                    };
                    swapExactAmountIn(value: _113.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _113.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _113.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _113.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _113.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _113.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _113.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _113.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _113.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _113.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _113.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _113.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: (message: _113.MsgJoinPool) => _113.MsgJoinPoolAmino;
                    fromAmino: (object: _113.MsgJoinPoolAmino) => _113.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: (message: _113.MsgExitPool) => _113.MsgExitPoolAmino;
                    fromAmino: (object: _113.MsgExitPoolAmino) => _113.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _113.MsgSwapExactAmountIn) => _113.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _113.MsgSwapExactAmountInAmino) => _113.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _113.MsgSwapExactAmountOut) => _113.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _113.MsgSwapExactAmountOutAmino) => _113.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: (message: _113.MsgJoinSwapExternAmountIn) => _113.MsgJoinSwapExternAmountInAmino;
                    fromAmino: (object: _113.MsgJoinSwapExternAmountInAmino) => _113.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: (message: _113.MsgJoinSwapShareAmountOut) => _113.MsgJoinSwapShareAmountOutAmino;
                    fromAmino: (object: _113.MsgJoinSwapShareAmountOutAmino) => _113.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: (message: _113.MsgExitSwapExternAmountOut) => _113.MsgExitSwapExternAmountOutAmino;
                    fromAmino: (object: _113.MsgExitSwapExternAmountOutAmino) => _113.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: (message: _113.MsgExitSwapShareAmountIn) => _113.MsgExitSwapShareAmountInAmino;
                    fromAmino: (object: _113.MsgExitSwapShareAmountInAmino) => _113.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                typeUrl: string;
                encode(message: _113.MsgJoinPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgJoinPool;
                fromPartial(object: Partial<_113.MsgJoinPool>): _113.MsgJoinPool;
                fromAmino(object: _113.MsgJoinPoolAmino): _113.MsgJoinPool;
                toAmino(message: _113.MsgJoinPool): _113.MsgJoinPoolAmino;
                fromAminoMsg(object: _113.MsgJoinPoolAminoMsg): _113.MsgJoinPool;
                toAminoMsg(message: _113.MsgJoinPool): _113.MsgJoinPoolAminoMsg;
                fromProtoMsg(message: _113.MsgJoinPoolProtoMsg): _113.MsgJoinPool;
                toProto(message: _113.MsgJoinPool): Uint8Array;
                toProtoMsg(message: _113.MsgJoinPool): _113.MsgJoinPoolProtoMsg;
            };
            MsgJoinPoolResponse: {
                typeUrl: string;
                encode(message: _113.MsgJoinPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgJoinPoolResponse;
                fromPartial(object: Partial<_113.MsgJoinPoolResponse>): _113.MsgJoinPoolResponse;
                fromAmino(object: _113.MsgJoinPoolResponseAmino): _113.MsgJoinPoolResponse;
                toAmino(message: _113.MsgJoinPoolResponse): _113.MsgJoinPoolResponseAmino;
                fromAminoMsg(object: _113.MsgJoinPoolResponseAminoMsg): _113.MsgJoinPoolResponse;
                toAminoMsg(message: _113.MsgJoinPoolResponse): _113.MsgJoinPoolResponseAminoMsg;
                fromProtoMsg(message: _113.MsgJoinPoolResponseProtoMsg): _113.MsgJoinPoolResponse;
                toProto(message: _113.MsgJoinPoolResponse): Uint8Array;
                toProtoMsg(message: _113.MsgJoinPoolResponse): _113.MsgJoinPoolResponseProtoMsg;
            };
            MsgExitPool: {
                typeUrl: string;
                encode(message: _113.MsgExitPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgExitPool;
                fromPartial(object: Partial<_113.MsgExitPool>): _113.MsgExitPool;
                fromAmino(object: _113.MsgExitPoolAmino): _113.MsgExitPool;
                toAmino(message: _113.MsgExitPool): _113.MsgExitPoolAmino;
                fromAminoMsg(object: _113.MsgExitPoolAminoMsg): _113.MsgExitPool;
                toAminoMsg(message: _113.MsgExitPool): _113.MsgExitPoolAminoMsg;
                fromProtoMsg(message: _113.MsgExitPoolProtoMsg): _113.MsgExitPool;
                toProto(message: _113.MsgExitPool): Uint8Array;
                toProtoMsg(message: _113.MsgExitPool): _113.MsgExitPoolProtoMsg;
            };
            MsgExitPoolResponse: {
                typeUrl: string;
                encode(message: _113.MsgExitPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgExitPoolResponse;
                fromPartial(object: Partial<_113.MsgExitPoolResponse>): _113.MsgExitPoolResponse;
                fromAmino(object: _113.MsgExitPoolResponseAmino): _113.MsgExitPoolResponse;
                toAmino(message: _113.MsgExitPoolResponse): _113.MsgExitPoolResponseAmino;
                fromAminoMsg(object: _113.MsgExitPoolResponseAminoMsg): _113.MsgExitPoolResponse;
                toAminoMsg(message: _113.MsgExitPoolResponse): _113.MsgExitPoolResponseAminoMsg;
                fromProtoMsg(message: _113.MsgExitPoolResponseProtoMsg): _113.MsgExitPoolResponse;
                toProto(message: _113.MsgExitPoolResponse): Uint8Array;
                toProtoMsg(message: _113.MsgExitPoolResponse): _113.MsgExitPoolResponseProtoMsg;
            };
            MsgSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _113.MsgSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_113.MsgSwapExactAmountIn>): _113.MsgSwapExactAmountIn;
                fromAmino(object: _113.MsgSwapExactAmountInAmino): _113.MsgSwapExactAmountIn;
                toAmino(message: _113.MsgSwapExactAmountIn): _113.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _113.MsgSwapExactAmountInAminoMsg): _113.MsgSwapExactAmountIn;
                toAminoMsg(message: _113.MsgSwapExactAmountIn): _113.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _113.MsgSwapExactAmountInProtoMsg): _113.MsgSwapExactAmountIn;
                toProto(message: _113.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _113.MsgSwapExactAmountIn): _113.MsgSwapExactAmountInProtoMsg;
            };
            MsgSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _113.MsgSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_113.MsgSwapExactAmountInResponse>): _113.MsgSwapExactAmountInResponse;
                fromAmino(object: _113.MsgSwapExactAmountInResponseAmino): _113.MsgSwapExactAmountInResponse;
                toAmino(message: _113.MsgSwapExactAmountInResponse): _113.MsgSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _113.MsgSwapExactAmountInResponseAminoMsg): _113.MsgSwapExactAmountInResponse;
                toAminoMsg(message: _113.MsgSwapExactAmountInResponse): _113.MsgSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _113.MsgSwapExactAmountInResponseProtoMsg): _113.MsgSwapExactAmountInResponse;
                toProto(message: _113.MsgSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _113.MsgSwapExactAmountInResponse): _113.MsgSwapExactAmountInResponseProtoMsg;
            };
            MsgSwapExactAmountOut: {
                typeUrl: string;
                encode(message: _113.MsgSwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_113.MsgSwapExactAmountOut>): _113.MsgSwapExactAmountOut;
                fromAmino(object: _113.MsgSwapExactAmountOutAmino): _113.MsgSwapExactAmountOut;
                toAmino(message: _113.MsgSwapExactAmountOut): _113.MsgSwapExactAmountOutAmino;
                fromAminoMsg(object: _113.MsgSwapExactAmountOutAminoMsg): _113.MsgSwapExactAmountOut;
                toAminoMsg(message: _113.MsgSwapExactAmountOut): _113.MsgSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _113.MsgSwapExactAmountOutProtoMsg): _113.MsgSwapExactAmountOut;
                toProto(message: _113.MsgSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _113.MsgSwapExactAmountOut): _113.MsgSwapExactAmountOutProtoMsg;
            };
            MsgSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _113.MsgSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_113.MsgSwapExactAmountOutResponse>): _113.MsgSwapExactAmountOutResponse;
                fromAmino(object: _113.MsgSwapExactAmountOutResponseAmino): _113.MsgSwapExactAmountOutResponse;
                toAmino(message: _113.MsgSwapExactAmountOutResponse): _113.MsgSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _113.MsgSwapExactAmountOutResponseAminoMsg): _113.MsgSwapExactAmountOutResponse;
                toAminoMsg(message: _113.MsgSwapExactAmountOutResponse): _113.MsgSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _113.MsgSwapExactAmountOutResponseProtoMsg): _113.MsgSwapExactAmountOutResponse;
                toProto(message: _113.MsgSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _113.MsgSwapExactAmountOutResponse): _113.MsgSwapExactAmountOutResponseProtoMsg;
            };
            MsgJoinSwapExternAmountIn: {
                typeUrl: string;
                encode(message: _113.MsgJoinSwapExternAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgJoinSwapExternAmountIn;
                fromPartial(object: Partial<_113.MsgJoinSwapExternAmountIn>): _113.MsgJoinSwapExternAmountIn;
                fromAmino(object: _113.MsgJoinSwapExternAmountInAmino): _113.MsgJoinSwapExternAmountIn;
                toAmino(message: _113.MsgJoinSwapExternAmountIn): _113.MsgJoinSwapExternAmountInAmino;
                fromAminoMsg(object: _113.MsgJoinSwapExternAmountInAminoMsg): _113.MsgJoinSwapExternAmountIn;
                toAminoMsg(message: _113.MsgJoinSwapExternAmountIn): _113.MsgJoinSwapExternAmountInAminoMsg;
                fromProtoMsg(message: _113.MsgJoinSwapExternAmountInProtoMsg): _113.MsgJoinSwapExternAmountIn;
                toProto(message: _113.MsgJoinSwapExternAmountIn): Uint8Array;
                toProtoMsg(message: _113.MsgJoinSwapExternAmountIn): _113.MsgJoinSwapExternAmountInProtoMsg;
            };
            MsgJoinSwapExternAmountInResponse: {
                typeUrl: string;
                encode(message: _113.MsgJoinSwapExternAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgJoinSwapExternAmountInResponse;
                fromPartial(object: Partial<_113.MsgJoinSwapExternAmountInResponse>): _113.MsgJoinSwapExternAmountInResponse;
                fromAmino(object: _113.MsgJoinSwapExternAmountInResponseAmino): _113.MsgJoinSwapExternAmountInResponse;
                toAmino(message: _113.MsgJoinSwapExternAmountInResponse): _113.MsgJoinSwapExternAmountInResponseAmino;
                fromAminoMsg(object: _113.MsgJoinSwapExternAmountInResponseAminoMsg): _113.MsgJoinSwapExternAmountInResponse;
                toAminoMsg(message: _113.MsgJoinSwapExternAmountInResponse): _113.MsgJoinSwapExternAmountInResponseAminoMsg;
                fromProtoMsg(message: _113.MsgJoinSwapExternAmountInResponseProtoMsg): _113.MsgJoinSwapExternAmountInResponse;
                toProto(message: _113.MsgJoinSwapExternAmountInResponse): Uint8Array;
                toProtoMsg(message: _113.MsgJoinSwapExternAmountInResponse): _113.MsgJoinSwapExternAmountInResponseProtoMsg;
            };
            MsgJoinSwapShareAmountOut: {
                typeUrl: string;
                encode(message: _113.MsgJoinSwapShareAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgJoinSwapShareAmountOut;
                fromPartial(object: Partial<_113.MsgJoinSwapShareAmountOut>): _113.MsgJoinSwapShareAmountOut;
                fromAmino(object: _113.MsgJoinSwapShareAmountOutAmino): _113.MsgJoinSwapShareAmountOut;
                toAmino(message: _113.MsgJoinSwapShareAmountOut): _113.MsgJoinSwapShareAmountOutAmino;
                fromAminoMsg(object: _113.MsgJoinSwapShareAmountOutAminoMsg): _113.MsgJoinSwapShareAmountOut;
                toAminoMsg(message: _113.MsgJoinSwapShareAmountOut): _113.MsgJoinSwapShareAmountOutAminoMsg;
                fromProtoMsg(message: _113.MsgJoinSwapShareAmountOutProtoMsg): _113.MsgJoinSwapShareAmountOut;
                toProto(message: _113.MsgJoinSwapShareAmountOut): Uint8Array;
                toProtoMsg(message: _113.MsgJoinSwapShareAmountOut): _113.MsgJoinSwapShareAmountOutProtoMsg;
            };
            MsgJoinSwapShareAmountOutResponse: {
                typeUrl: string;
                encode(message: _113.MsgJoinSwapShareAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgJoinSwapShareAmountOutResponse;
                fromPartial(object: Partial<_113.MsgJoinSwapShareAmountOutResponse>): _113.MsgJoinSwapShareAmountOutResponse;
                fromAmino(object: _113.MsgJoinSwapShareAmountOutResponseAmino): _113.MsgJoinSwapShareAmountOutResponse;
                toAmino(message: _113.MsgJoinSwapShareAmountOutResponse): _113.MsgJoinSwapShareAmountOutResponseAmino;
                fromAminoMsg(object: _113.MsgJoinSwapShareAmountOutResponseAminoMsg): _113.MsgJoinSwapShareAmountOutResponse;
                toAminoMsg(message: _113.MsgJoinSwapShareAmountOutResponse): _113.MsgJoinSwapShareAmountOutResponseAminoMsg;
                fromProtoMsg(message: _113.MsgJoinSwapShareAmountOutResponseProtoMsg): _113.MsgJoinSwapShareAmountOutResponse;
                toProto(message: _113.MsgJoinSwapShareAmountOutResponse): Uint8Array;
                toProtoMsg(message: _113.MsgJoinSwapShareAmountOutResponse): _113.MsgJoinSwapShareAmountOutResponseProtoMsg;
            };
            MsgExitSwapShareAmountIn: {
                typeUrl: string;
                encode(message: _113.MsgExitSwapShareAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgExitSwapShareAmountIn;
                fromPartial(object: Partial<_113.MsgExitSwapShareAmountIn>): _113.MsgExitSwapShareAmountIn;
                fromAmino(object: _113.MsgExitSwapShareAmountInAmino): _113.MsgExitSwapShareAmountIn;
                toAmino(message: _113.MsgExitSwapShareAmountIn): _113.MsgExitSwapShareAmountInAmino;
                fromAminoMsg(object: _113.MsgExitSwapShareAmountInAminoMsg): _113.MsgExitSwapShareAmountIn;
                toAminoMsg(message: _113.MsgExitSwapShareAmountIn): _113.MsgExitSwapShareAmountInAminoMsg;
                fromProtoMsg(message: _113.MsgExitSwapShareAmountInProtoMsg): _113.MsgExitSwapShareAmountIn;
                toProto(message: _113.MsgExitSwapShareAmountIn): Uint8Array;
                toProtoMsg(message: _113.MsgExitSwapShareAmountIn): _113.MsgExitSwapShareAmountInProtoMsg;
            };
            MsgExitSwapShareAmountInResponse: {
                typeUrl: string;
                encode(message: _113.MsgExitSwapShareAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgExitSwapShareAmountInResponse;
                fromPartial(object: Partial<_113.MsgExitSwapShareAmountInResponse>): _113.MsgExitSwapShareAmountInResponse;
                fromAmino(object: _113.MsgExitSwapShareAmountInResponseAmino): _113.MsgExitSwapShareAmountInResponse;
                toAmino(message: _113.MsgExitSwapShareAmountInResponse): _113.MsgExitSwapShareAmountInResponseAmino;
                fromAminoMsg(object: _113.MsgExitSwapShareAmountInResponseAminoMsg): _113.MsgExitSwapShareAmountInResponse;
                toAminoMsg(message: _113.MsgExitSwapShareAmountInResponse): _113.MsgExitSwapShareAmountInResponseAminoMsg;
                fromProtoMsg(message: _113.MsgExitSwapShareAmountInResponseProtoMsg): _113.MsgExitSwapShareAmountInResponse;
                toProto(message: _113.MsgExitSwapShareAmountInResponse): Uint8Array;
                toProtoMsg(message: _113.MsgExitSwapShareAmountInResponse): _113.MsgExitSwapShareAmountInResponseProtoMsg;
            };
            MsgExitSwapExternAmountOut: {
                typeUrl: string;
                encode(message: _113.MsgExitSwapExternAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgExitSwapExternAmountOut;
                fromPartial(object: Partial<_113.MsgExitSwapExternAmountOut>): _113.MsgExitSwapExternAmountOut;
                fromAmino(object: _113.MsgExitSwapExternAmountOutAmino): _113.MsgExitSwapExternAmountOut;
                toAmino(message: _113.MsgExitSwapExternAmountOut): _113.MsgExitSwapExternAmountOutAmino;
                fromAminoMsg(object: _113.MsgExitSwapExternAmountOutAminoMsg): _113.MsgExitSwapExternAmountOut;
                toAminoMsg(message: _113.MsgExitSwapExternAmountOut): _113.MsgExitSwapExternAmountOutAminoMsg;
                fromProtoMsg(message: _113.MsgExitSwapExternAmountOutProtoMsg): _113.MsgExitSwapExternAmountOut;
                toProto(message: _113.MsgExitSwapExternAmountOut): Uint8Array;
                toProtoMsg(message: _113.MsgExitSwapExternAmountOut): _113.MsgExitSwapExternAmountOutProtoMsg;
            };
            MsgExitSwapExternAmountOutResponse: {
                typeUrl: string;
                encode(message: _113.MsgExitSwapExternAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgExitSwapExternAmountOutResponse;
                fromPartial(object: Partial<_113.MsgExitSwapExternAmountOutResponse>): _113.MsgExitSwapExternAmountOutResponse;
                fromAmino(object: _113.MsgExitSwapExternAmountOutResponseAmino): _113.MsgExitSwapExternAmountOutResponse;
                toAmino(message: _113.MsgExitSwapExternAmountOutResponse): _113.MsgExitSwapExternAmountOutResponseAmino;
                fromAminoMsg(object: _113.MsgExitSwapExternAmountOutResponseAminoMsg): _113.MsgExitSwapExternAmountOutResponse;
                toAminoMsg(message: _113.MsgExitSwapExternAmountOutResponse): _113.MsgExitSwapExternAmountOutResponseAminoMsg;
                fromProtoMsg(message: _113.MsgExitSwapExternAmountOutResponseProtoMsg): _113.MsgExitSwapExternAmountOutResponse;
                toProto(message: _113.MsgExitSwapExternAmountOutResponse): Uint8Array;
                toProtoMsg(message: _113.MsgExitSwapExternAmountOutResponse): _113.MsgExitSwapExternAmountOutResponseProtoMsg;
            };
            MigrationRecords: {
                typeUrl: string;
                encode(message: _112.MigrationRecords, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.MigrationRecords;
                fromPartial(object: Partial<_112.MigrationRecords>): _112.MigrationRecords;
                fromAmino(object: _112.MigrationRecordsAmino): _112.MigrationRecords;
                toAmino(message: _112.MigrationRecords): _112.MigrationRecordsAmino;
                fromAminoMsg(object: _112.MigrationRecordsAminoMsg): _112.MigrationRecords;
                toAminoMsg(message: _112.MigrationRecords): _112.MigrationRecordsAminoMsg;
                fromProtoMsg(message: _112.MigrationRecordsProtoMsg): _112.MigrationRecords;
                toProto(message: _112.MigrationRecords): Uint8Array;
                toProtoMsg(message: _112.MigrationRecords): _112.MigrationRecordsProtoMsg;
            };
            BalancerToConcentratedPoolLink: {
                typeUrl: string;
                encode(message: _112.BalancerToConcentratedPoolLink, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.BalancerToConcentratedPoolLink;
                fromPartial(object: Partial<_112.BalancerToConcentratedPoolLink>): _112.BalancerToConcentratedPoolLink;
                fromAmino(object: _112.BalancerToConcentratedPoolLinkAmino): _112.BalancerToConcentratedPoolLink;
                toAmino(message: _112.BalancerToConcentratedPoolLink): _112.BalancerToConcentratedPoolLinkAmino;
                fromAminoMsg(object: _112.BalancerToConcentratedPoolLinkAminoMsg): _112.BalancerToConcentratedPoolLink;
                toAminoMsg(message: _112.BalancerToConcentratedPoolLink): _112.BalancerToConcentratedPoolLinkAminoMsg;
                fromProtoMsg(message: _112.BalancerToConcentratedPoolLinkProtoMsg): _112.BalancerToConcentratedPoolLink;
                toProto(message: _112.BalancerToConcentratedPoolLink): Uint8Array;
                toProtoMsg(message: _112.BalancerToConcentratedPoolLink): _112.BalancerToConcentratedPoolLinkProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(message: _111.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryPoolRequest;
                fromPartial(object: Partial<_111.QueryPoolRequest>): _111.QueryPoolRequest;
                fromAmino(object: _111.QueryPoolRequestAmino): _111.QueryPoolRequest;
                toAmino(message: _111.QueryPoolRequest): _111.QueryPoolRequestAmino;
                fromAminoMsg(object: _111.QueryPoolRequestAminoMsg): _111.QueryPoolRequest;
                toAminoMsg(message: _111.QueryPoolRequest): _111.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _111.QueryPoolRequestProtoMsg): _111.QueryPoolRequest;
                toProto(message: _111.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _111.QueryPoolRequest): _111.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _111.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryPoolResponse;
                fromPartial(object: Partial<_111.QueryPoolResponse>): _111.QueryPoolResponse;
                fromAmino(object: _111.QueryPoolResponseAmino): _111.QueryPoolResponse;
                toAmino(message: _111.QueryPoolResponse): _111.QueryPoolResponseAmino;
                fromAminoMsg(object: _111.QueryPoolResponseAminoMsg): _111.QueryPoolResponse;
                toAminoMsg(message: _111.QueryPoolResponse): _111.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _111.QueryPoolResponseProtoMsg): _111.QueryPoolResponse;
                toProto(message: _111.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _111.QueryPoolResponse): _111.QueryPoolResponseProtoMsg;
            };
            QueryPoolsRequest: {
                typeUrl: string;
                encode(message: _111.QueryPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryPoolsRequest;
                fromPartial(object: Partial<_111.QueryPoolsRequest>): _111.QueryPoolsRequest;
                fromAmino(object: _111.QueryPoolsRequestAmino): _111.QueryPoolsRequest;
                toAmino(message: _111.QueryPoolsRequest): _111.QueryPoolsRequestAmino;
                fromAminoMsg(object: _111.QueryPoolsRequestAminoMsg): _111.QueryPoolsRequest;
                toAminoMsg(message: _111.QueryPoolsRequest): _111.QueryPoolsRequestAminoMsg;
                fromProtoMsg(message: _111.QueryPoolsRequestProtoMsg): _111.QueryPoolsRequest;
                toProto(message: _111.QueryPoolsRequest): Uint8Array;
                toProtoMsg(message: _111.QueryPoolsRequest): _111.QueryPoolsRequestProtoMsg;
            };
            QueryPoolsResponse: {
                typeUrl: string;
                encode(message: _111.QueryPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryPoolsResponse;
                fromPartial(object: Partial<_111.QueryPoolsResponse>): _111.QueryPoolsResponse;
                fromAmino(object: _111.QueryPoolsResponseAmino): _111.QueryPoolsResponse;
                toAmino(message: _111.QueryPoolsResponse): _111.QueryPoolsResponseAmino;
                fromAminoMsg(object: _111.QueryPoolsResponseAminoMsg): _111.QueryPoolsResponse;
                toAminoMsg(message: _111.QueryPoolsResponse): _111.QueryPoolsResponseAminoMsg;
                fromProtoMsg(message: _111.QueryPoolsResponseProtoMsg): _111.QueryPoolsResponse;
                toProto(message: _111.QueryPoolsResponse): Uint8Array;
                toProtoMsg(message: _111.QueryPoolsResponse): _111.QueryPoolsResponseProtoMsg;
            };
            QueryNumPoolsRequest: {
                typeUrl: string;
                encode(_: _111.QueryNumPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryNumPoolsRequest;
                fromPartial(_: Partial<_111.QueryNumPoolsRequest>): _111.QueryNumPoolsRequest;
                fromAmino(_: _111.QueryNumPoolsRequestAmino): _111.QueryNumPoolsRequest;
                toAmino(_: _111.QueryNumPoolsRequest): _111.QueryNumPoolsRequestAmino;
                fromAminoMsg(object: _111.QueryNumPoolsRequestAminoMsg): _111.QueryNumPoolsRequest;
                toAminoMsg(message: _111.QueryNumPoolsRequest): _111.QueryNumPoolsRequestAminoMsg;
                fromProtoMsg(message: _111.QueryNumPoolsRequestProtoMsg): _111.QueryNumPoolsRequest;
                toProto(message: _111.QueryNumPoolsRequest): Uint8Array;
                toProtoMsg(message: _111.QueryNumPoolsRequest): _111.QueryNumPoolsRequestProtoMsg;
            };
            QueryNumPoolsResponse: {
                typeUrl: string;
                encode(message: _111.QueryNumPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryNumPoolsResponse;
                fromPartial(object: Partial<_111.QueryNumPoolsResponse>): _111.QueryNumPoolsResponse;
                fromAmino(object: _111.QueryNumPoolsResponseAmino): _111.QueryNumPoolsResponse;
                toAmino(message: _111.QueryNumPoolsResponse): _111.QueryNumPoolsResponseAmino;
                fromAminoMsg(object: _111.QueryNumPoolsResponseAminoMsg): _111.QueryNumPoolsResponse;
                toAminoMsg(message: _111.QueryNumPoolsResponse): _111.QueryNumPoolsResponseAminoMsg;
                fromProtoMsg(message: _111.QueryNumPoolsResponseProtoMsg): _111.QueryNumPoolsResponse;
                toProto(message: _111.QueryNumPoolsResponse): Uint8Array;
                toProtoMsg(message: _111.QueryNumPoolsResponse): _111.QueryNumPoolsResponseProtoMsg;
            };
            QueryPoolTypeRequest: {
                typeUrl: string;
                encode(message: _111.QueryPoolTypeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryPoolTypeRequest;
                fromPartial(object: Partial<_111.QueryPoolTypeRequest>): _111.QueryPoolTypeRequest;
                fromAmino(object: _111.QueryPoolTypeRequestAmino): _111.QueryPoolTypeRequest;
                toAmino(message: _111.QueryPoolTypeRequest): _111.QueryPoolTypeRequestAmino;
                fromAminoMsg(object: _111.QueryPoolTypeRequestAminoMsg): _111.QueryPoolTypeRequest;
                toAminoMsg(message: _111.QueryPoolTypeRequest): _111.QueryPoolTypeRequestAminoMsg;
                fromProtoMsg(message: _111.QueryPoolTypeRequestProtoMsg): _111.QueryPoolTypeRequest;
                toProto(message: _111.QueryPoolTypeRequest): Uint8Array;
                toProtoMsg(message: _111.QueryPoolTypeRequest): _111.QueryPoolTypeRequestProtoMsg;
            };
            QueryPoolTypeResponse: {
                typeUrl: string;
                encode(message: _111.QueryPoolTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryPoolTypeResponse;
                fromPartial(object: Partial<_111.QueryPoolTypeResponse>): _111.QueryPoolTypeResponse;
                fromAmino(object: _111.QueryPoolTypeResponseAmino): _111.QueryPoolTypeResponse;
                toAmino(message: _111.QueryPoolTypeResponse): _111.QueryPoolTypeResponseAmino;
                fromAminoMsg(object: _111.QueryPoolTypeResponseAminoMsg): _111.QueryPoolTypeResponse;
                toAminoMsg(message: _111.QueryPoolTypeResponse): _111.QueryPoolTypeResponseAminoMsg;
                fromProtoMsg(message: _111.QueryPoolTypeResponseProtoMsg): _111.QueryPoolTypeResponse;
                toProto(message: _111.QueryPoolTypeResponse): Uint8Array;
                toProtoMsg(message: _111.QueryPoolTypeResponse): _111.QueryPoolTypeResponseProtoMsg;
            };
            QueryCalcJoinPoolSharesRequest: {
                typeUrl: string;
                encode(message: _111.QueryCalcJoinPoolSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryCalcJoinPoolSharesRequest;
                fromPartial(object: Partial<_111.QueryCalcJoinPoolSharesRequest>): _111.QueryCalcJoinPoolSharesRequest;
                fromAmino(object: _111.QueryCalcJoinPoolSharesRequestAmino): _111.QueryCalcJoinPoolSharesRequest;
                toAmino(message: _111.QueryCalcJoinPoolSharesRequest): _111.QueryCalcJoinPoolSharesRequestAmino;
                fromAminoMsg(object: _111.QueryCalcJoinPoolSharesRequestAminoMsg): _111.QueryCalcJoinPoolSharesRequest;
                toAminoMsg(message: _111.QueryCalcJoinPoolSharesRequest): _111.QueryCalcJoinPoolSharesRequestAminoMsg;
                fromProtoMsg(message: _111.QueryCalcJoinPoolSharesRequestProtoMsg): _111.QueryCalcJoinPoolSharesRequest;
                toProto(message: _111.QueryCalcJoinPoolSharesRequest): Uint8Array;
                toProtoMsg(message: _111.QueryCalcJoinPoolSharesRequest): _111.QueryCalcJoinPoolSharesRequestProtoMsg;
            };
            QueryCalcJoinPoolSharesResponse: {
                typeUrl: string;
                encode(message: _111.QueryCalcJoinPoolSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryCalcJoinPoolSharesResponse;
                fromPartial(object: Partial<_111.QueryCalcJoinPoolSharesResponse>): _111.QueryCalcJoinPoolSharesResponse;
                fromAmino(object: _111.QueryCalcJoinPoolSharesResponseAmino): _111.QueryCalcJoinPoolSharesResponse;
                toAmino(message: _111.QueryCalcJoinPoolSharesResponse): _111.QueryCalcJoinPoolSharesResponseAmino;
                fromAminoMsg(object: _111.QueryCalcJoinPoolSharesResponseAminoMsg): _111.QueryCalcJoinPoolSharesResponse;
                toAminoMsg(message: _111.QueryCalcJoinPoolSharesResponse): _111.QueryCalcJoinPoolSharesResponseAminoMsg;
                fromProtoMsg(message: _111.QueryCalcJoinPoolSharesResponseProtoMsg): _111.QueryCalcJoinPoolSharesResponse;
                toProto(message: _111.QueryCalcJoinPoolSharesResponse): Uint8Array;
                toProtoMsg(message: _111.QueryCalcJoinPoolSharesResponse): _111.QueryCalcJoinPoolSharesResponseProtoMsg;
            };
            QueryCalcExitPoolCoinsFromSharesRequest: {
                typeUrl: string;
                encode(message: _111.QueryCalcExitPoolCoinsFromSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryCalcExitPoolCoinsFromSharesRequest;
                fromPartial(object: Partial<_111.QueryCalcExitPoolCoinsFromSharesRequest>): _111.QueryCalcExitPoolCoinsFromSharesRequest;
                fromAmino(object: _111.QueryCalcExitPoolCoinsFromSharesRequestAmino): _111.QueryCalcExitPoolCoinsFromSharesRequest;
                toAmino(message: _111.QueryCalcExitPoolCoinsFromSharesRequest): _111.QueryCalcExitPoolCoinsFromSharesRequestAmino;
                fromAminoMsg(object: _111.QueryCalcExitPoolCoinsFromSharesRequestAminoMsg): _111.QueryCalcExitPoolCoinsFromSharesRequest;
                toAminoMsg(message: _111.QueryCalcExitPoolCoinsFromSharesRequest): _111.QueryCalcExitPoolCoinsFromSharesRequestAminoMsg;
                fromProtoMsg(message: _111.QueryCalcExitPoolCoinsFromSharesRequestProtoMsg): _111.QueryCalcExitPoolCoinsFromSharesRequest;
                toProto(message: _111.QueryCalcExitPoolCoinsFromSharesRequest): Uint8Array;
                toProtoMsg(message: _111.QueryCalcExitPoolCoinsFromSharesRequest): _111.QueryCalcExitPoolCoinsFromSharesRequestProtoMsg;
            };
            QueryCalcExitPoolCoinsFromSharesResponse: {
                typeUrl: string;
                encode(message: _111.QueryCalcExitPoolCoinsFromSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryCalcExitPoolCoinsFromSharesResponse;
                fromPartial(object: Partial<_111.QueryCalcExitPoolCoinsFromSharesResponse>): _111.QueryCalcExitPoolCoinsFromSharesResponse;
                fromAmino(object: _111.QueryCalcExitPoolCoinsFromSharesResponseAmino): _111.QueryCalcExitPoolCoinsFromSharesResponse;
                toAmino(message: _111.QueryCalcExitPoolCoinsFromSharesResponse): _111.QueryCalcExitPoolCoinsFromSharesResponseAmino;
                fromAminoMsg(object: _111.QueryCalcExitPoolCoinsFromSharesResponseAminoMsg): _111.QueryCalcExitPoolCoinsFromSharesResponse;
                toAminoMsg(message: _111.QueryCalcExitPoolCoinsFromSharesResponse): _111.QueryCalcExitPoolCoinsFromSharesResponseAminoMsg;
                fromProtoMsg(message: _111.QueryCalcExitPoolCoinsFromSharesResponseProtoMsg): _111.QueryCalcExitPoolCoinsFromSharesResponse;
                toProto(message: _111.QueryCalcExitPoolCoinsFromSharesResponse): Uint8Array;
                toProtoMsg(message: _111.QueryCalcExitPoolCoinsFromSharesResponse): _111.QueryCalcExitPoolCoinsFromSharesResponseProtoMsg;
            };
            QueryPoolParamsRequest: {
                typeUrl: string;
                encode(message: _111.QueryPoolParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryPoolParamsRequest;
                fromPartial(object: Partial<_111.QueryPoolParamsRequest>): _111.QueryPoolParamsRequest;
                fromAmino(object: _111.QueryPoolParamsRequestAmino): _111.QueryPoolParamsRequest;
                toAmino(message: _111.QueryPoolParamsRequest): _111.QueryPoolParamsRequestAmino;
                fromAminoMsg(object: _111.QueryPoolParamsRequestAminoMsg): _111.QueryPoolParamsRequest;
                toAminoMsg(message: _111.QueryPoolParamsRequest): _111.QueryPoolParamsRequestAminoMsg;
                fromProtoMsg(message: _111.QueryPoolParamsRequestProtoMsg): _111.QueryPoolParamsRequest;
                toProto(message: _111.QueryPoolParamsRequest): Uint8Array;
                toProtoMsg(message: _111.QueryPoolParamsRequest): _111.QueryPoolParamsRequestProtoMsg;
            };
            QueryPoolParamsResponse: {
                typeUrl: string;
                encode(message: _111.QueryPoolParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryPoolParamsResponse;
                fromPartial(object: Partial<_111.QueryPoolParamsResponse>): _111.QueryPoolParamsResponse;
                fromAmino(object: _111.QueryPoolParamsResponseAmino): _111.QueryPoolParamsResponse;
                toAmino(message: _111.QueryPoolParamsResponse): _111.QueryPoolParamsResponseAmino;
                fromAminoMsg(object: _111.QueryPoolParamsResponseAminoMsg): _111.QueryPoolParamsResponse;
                toAminoMsg(message: _111.QueryPoolParamsResponse): _111.QueryPoolParamsResponseAminoMsg;
                fromProtoMsg(message: _111.QueryPoolParamsResponseProtoMsg): _111.QueryPoolParamsResponse;
                toProto(message: _111.QueryPoolParamsResponse): Uint8Array;
                toProtoMsg(message: _111.QueryPoolParamsResponse): _111.QueryPoolParamsResponseProtoMsg;
            };
            QueryTotalPoolLiquidityRequest: {
                typeUrl: string;
                encode(message: _111.QueryTotalPoolLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryTotalPoolLiquidityRequest;
                fromPartial(object: Partial<_111.QueryTotalPoolLiquidityRequest>): _111.QueryTotalPoolLiquidityRequest;
                fromAmino(object: _111.QueryTotalPoolLiquidityRequestAmino): _111.QueryTotalPoolLiquidityRequest;
                toAmino(message: _111.QueryTotalPoolLiquidityRequest): _111.QueryTotalPoolLiquidityRequestAmino;
                fromAminoMsg(object: _111.QueryTotalPoolLiquidityRequestAminoMsg): _111.QueryTotalPoolLiquidityRequest;
                toAminoMsg(message: _111.QueryTotalPoolLiquidityRequest): _111.QueryTotalPoolLiquidityRequestAminoMsg;
                fromProtoMsg(message: _111.QueryTotalPoolLiquidityRequestProtoMsg): _111.QueryTotalPoolLiquidityRequest;
                toProto(message: _111.QueryTotalPoolLiquidityRequest): Uint8Array;
                toProtoMsg(message: _111.QueryTotalPoolLiquidityRequest): _111.QueryTotalPoolLiquidityRequestProtoMsg;
            };
            QueryTotalPoolLiquidityResponse: {
                typeUrl: string;
                encode(message: _111.QueryTotalPoolLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryTotalPoolLiquidityResponse;
                fromPartial(object: Partial<_111.QueryTotalPoolLiquidityResponse>): _111.QueryTotalPoolLiquidityResponse;
                fromAmino(object: _111.QueryTotalPoolLiquidityResponseAmino): _111.QueryTotalPoolLiquidityResponse;
                toAmino(message: _111.QueryTotalPoolLiquidityResponse): _111.QueryTotalPoolLiquidityResponseAmino;
                fromAminoMsg(object: _111.QueryTotalPoolLiquidityResponseAminoMsg): _111.QueryTotalPoolLiquidityResponse;
                toAminoMsg(message: _111.QueryTotalPoolLiquidityResponse): _111.QueryTotalPoolLiquidityResponseAminoMsg;
                fromProtoMsg(message: _111.QueryTotalPoolLiquidityResponseProtoMsg): _111.QueryTotalPoolLiquidityResponse;
                toProto(message: _111.QueryTotalPoolLiquidityResponse): Uint8Array;
                toProtoMsg(message: _111.QueryTotalPoolLiquidityResponse): _111.QueryTotalPoolLiquidityResponseProtoMsg;
            };
            QueryTotalSharesRequest: {
                typeUrl: string;
                encode(message: _111.QueryTotalSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryTotalSharesRequest;
                fromPartial(object: Partial<_111.QueryTotalSharesRequest>): _111.QueryTotalSharesRequest;
                fromAmino(object: _111.QueryTotalSharesRequestAmino): _111.QueryTotalSharesRequest;
                toAmino(message: _111.QueryTotalSharesRequest): _111.QueryTotalSharesRequestAmino;
                fromAminoMsg(object: _111.QueryTotalSharesRequestAminoMsg): _111.QueryTotalSharesRequest;
                toAminoMsg(message: _111.QueryTotalSharesRequest): _111.QueryTotalSharesRequestAminoMsg;
                fromProtoMsg(message: _111.QueryTotalSharesRequestProtoMsg): _111.QueryTotalSharesRequest;
                toProto(message: _111.QueryTotalSharesRequest): Uint8Array;
                toProtoMsg(message: _111.QueryTotalSharesRequest): _111.QueryTotalSharesRequestProtoMsg;
            };
            QueryTotalSharesResponse: {
                typeUrl: string;
                encode(message: _111.QueryTotalSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryTotalSharesResponse;
                fromPartial(object: Partial<_111.QueryTotalSharesResponse>): _111.QueryTotalSharesResponse;
                fromAmino(object: _111.QueryTotalSharesResponseAmino): _111.QueryTotalSharesResponse;
                toAmino(message: _111.QueryTotalSharesResponse): _111.QueryTotalSharesResponseAmino;
                fromAminoMsg(object: _111.QueryTotalSharesResponseAminoMsg): _111.QueryTotalSharesResponse;
                toAminoMsg(message: _111.QueryTotalSharesResponse): _111.QueryTotalSharesResponseAminoMsg;
                fromProtoMsg(message: _111.QueryTotalSharesResponseProtoMsg): _111.QueryTotalSharesResponse;
                toProto(message: _111.QueryTotalSharesResponse): Uint8Array;
                toProtoMsg(message: _111.QueryTotalSharesResponse): _111.QueryTotalSharesResponseProtoMsg;
            };
            QueryCalcJoinPoolNoSwapSharesRequest: {
                typeUrl: string;
                encode(message: _111.QueryCalcJoinPoolNoSwapSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryCalcJoinPoolNoSwapSharesRequest;
                fromPartial(object: Partial<_111.QueryCalcJoinPoolNoSwapSharesRequest>): _111.QueryCalcJoinPoolNoSwapSharesRequest;
                fromAmino(object: _111.QueryCalcJoinPoolNoSwapSharesRequestAmino): _111.QueryCalcJoinPoolNoSwapSharesRequest;
                toAmino(message: _111.QueryCalcJoinPoolNoSwapSharesRequest): _111.QueryCalcJoinPoolNoSwapSharesRequestAmino;
                fromAminoMsg(object: _111.QueryCalcJoinPoolNoSwapSharesRequestAminoMsg): _111.QueryCalcJoinPoolNoSwapSharesRequest;
                toAminoMsg(message: _111.QueryCalcJoinPoolNoSwapSharesRequest): _111.QueryCalcJoinPoolNoSwapSharesRequestAminoMsg;
                fromProtoMsg(message: _111.QueryCalcJoinPoolNoSwapSharesRequestProtoMsg): _111.QueryCalcJoinPoolNoSwapSharesRequest;
                toProto(message: _111.QueryCalcJoinPoolNoSwapSharesRequest): Uint8Array;
                toProtoMsg(message: _111.QueryCalcJoinPoolNoSwapSharesRequest): _111.QueryCalcJoinPoolNoSwapSharesRequestProtoMsg;
            };
            QueryCalcJoinPoolNoSwapSharesResponse: {
                typeUrl: string;
                encode(message: _111.QueryCalcJoinPoolNoSwapSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryCalcJoinPoolNoSwapSharesResponse;
                fromPartial(object: Partial<_111.QueryCalcJoinPoolNoSwapSharesResponse>): _111.QueryCalcJoinPoolNoSwapSharesResponse;
                fromAmino(object: _111.QueryCalcJoinPoolNoSwapSharesResponseAmino): _111.QueryCalcJoinPoolNoSwapSharesResponse;
                toAmino(message: _111.QueryCalcJoinPoolNoSwapSharesResponse): _111.QueryCalcJoinPoolNoSwapSharesResponseAmino;
                fromAminoMsg(object: _111.QueryCalcJoinPoolNoSwapSharesResponseAminoMsg): _111.QueryCalcJoinPoolNoSwapSharesResponse;
                toAminoMsg(message: _111.QueryCalcJoinPoolNoSwapSharesResponse): _111.QueryCalcJoinPoolNoSwapSharesResponseAminoMsg;
                fromProtoMsg(message: _111.QueryCalcJoinPoolNoSwapSharesResponseProtoMsg): _111.QueryCalcJoinPoolNoSwapSharesResponse;
                toProto(message: _111.QueryCalcJoinPoolNoSwapSharesResponse): Uint8Array;
                toProtoMsg(message: _111.QueryCalcJoinPoolNoSwapSharesResponse): _111.QueryCalcJoinPoolNoSwapSharesResponseProtoMsg;
            };
            QuerySpotPriceRequest: {
                typeUrl: string;
                encode(message: _111.QuerySpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QuerySpotPriceRequest;
                fromPartial(object: Partial<_111.QuerySpotPriceRequest>): _111.QuerySpotPriceRequest;
                fromAmino(object: _111.QuerySpotPriceRequestAmino): _111.QuerySpotPriceRequest;
                toAmino(message: _111.QuerySpotPriceRequest): _111.QuerySpotPriceRequestAmino;
                fromAminoMsg(object: _111.QuerySpotPriceRequestAminoMsg): _111.QuerySpotPriceRequest;
                toAminoMsg(message: _111.QuerySpotPriceRequest): _111.QuerySpotPriceRequestAminoMsg;
                fromProtoMsg(message: _111.QuerySpotPriceRequestProtoMsg): _111.QuerySpotPriceRequest;
                toProto(message: _111.QuerySpotPriceRequest): Uint8Array;
                toProtoMsg(message: _111.QuerySpotPriceRequest): _111.QuerySpotPriceRequestProtoMsg;
            };
            QueryPoolsWithFilterRequest: {
                typeUrl: string;
                encode(message: _111.QueryPoolsWithFilterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryPoolsWithFilterRequest;
                fromPartial(object: Partial<_111.QueryPoolsWithFilterRequest>): _111.QueryPoolsWithFilterRequest;
                fromAmino(object: _111.QueryPoolsWithFilterRequestAmino): _111.QueryPoolsWithFilterRequest;
                toAmino(message: _111.QueryPoolsWithFilterRequest): _111.QueryPoolsWithFilterRequestAmino;
                fromAminoMsg(object: _111.QueryPoolsWithFilterRequestAminoMsg): _111.QueryPoolsWithFilterRequest;
                toAminoMsg(message: _111.QueryPoolsWithFilterRequest): _111.QueryPoolsWithFilterRequestAminoMsg;
                fromProtoMsg(message: _111.QueryPoolsWithFilterRequestProtoMsg): _111.QueryPoolsWithFilterRequest;
                toProto(message: _111.QueryPoolsWithFilterRequest): Uint8Array;
                toProtoMsg(message: _111.QueryPoolsWithFilterRequest): _111.QueryPoolsWithFilterRequestProtoMsg;
            };
            QueryPoolsWithFilterResponse: {
                typeUrl: string;
                encode(message: _111.QueryPoolsWithFilterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryPoolsWithFilterResponse;
                fromPartial(object: Partial<_111.QueryPoolsWithFilterResponse>): _111.QueryPoolsWithFilterResponse;
                fromAmino(object: _111.QueryPoolsWithFilterResponseAmino): _111.QueryPoolsWithFilterResponse;
                toAmino(message: _111.QueryPoolsWithFilterResponse): _111.QueryPoolsWithFilterResponseAmino;
                fromAminoMsg(object: _111.QueryPoolsWithFilterResponseAminoMsg): _111.QueryPoolsWithFilterResponse;
                toAminoMsg(message: _111.QueryPoolsWithFilterResponse): _111.QueryPoolsWithFilterResponseAminoMsg;
                fromProtoMsg(message: _111.QueryPoolsWithFilterResponseProtoMsg): _111.QueryPoolsWithFilterResponse;
                toProto(message: _111.QueryPoolsWithFilterResponse): Uint8Array;
                toProtoMsg(message: _111.QueryPoolsWithFilterResponse): _111.QueryPoolsWithFilterResponseProtoMsg;
            };
            QuerySpotPriceResponse: {
                typeUrl: string;
                encode(message: _111.QuerySpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QuerySpotPriceResponse;
                fromPartial(object: Partial<_111.QuerySpotPriceResponse>): _111.QuerySpotPriceResponse;
                fromAmino(object: _111.QuerySpotPriceResponseAmino): _111.QuerySpotPriceResponse;
                toAmino(message: _111.QuerySpotPriceResponse): _111.QuerySpotPriceResponseAmino;
                fromAminoMsg(object: _111.QuerySpotPriceResponseAminoMsg): _111.QuerySpotPriceResponse;
                toAminoMsg(message: _111.QuerySpotPriceResponse): _111.QuerySpotPriceResponseAminoMsg;
                fromProtoMsg(message: _111.QuerySpotPriceResponseProtoMsg): _111.QuerySpotPriceResponse;
                toProto(message: _111.QuerySpotPriceResponse): Uint8Array;
                toProtoMsg(message: _111.QuerySpotPriceResponse): _111.QuerySpotPriceResponseProtoMsg;
            };
            QuerySwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _111.QuerySwapExactAmountInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QuerySwapExactAmountInRequest;
                fromPartial(object: Partial<_111.QuerySwapExactAmountInRequest>): _111.QuerySwapExactAmountInRequest;
                fromAmino(object: _111.QuerySwapExactAmountInRequestAmino): _111.QuerySwapExactAmountInRequest;
                toAmino(message: _111.QuerySwapExactAmountInRequest): _111.QuerySwapExactAmountInRequestAmino;
                fromAminoMsg(object: _111.QuerySwapExactAmountInRequestAminoMsg): _111.QuerySwapExactAmountInRequest;
                toAminoMsg(message: _111.QuerySwapExactAmountInRequest): _111.QuerySwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _111.QuerySwapExactAmountInRequestProtoMsg): _111.QuerySwapExactAmountInRequest;
                toProto(message: _111.QuerySwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _111.QuerySwapExactAmountInRequest): _111.QuerySwapExactAmountInRequestProtoMsg;
            };
            QuerySwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _111.QuerySwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QuerySwapExactAmountInResponse;
                fromPartial(object: Partial<_111.QuerySwapExactAmountInResponse>): _111.QuerySwapExactAmountInResponse;
                fromAmino(object: _111.QuerySwapExactAmountInResponseAmino): _111.QuerySwapExactAmountInResponse;
                toAmino(message: _111.QuerySwapExactAmountInResponse): _111.QuerySwapExactAmountInResponseAmino;
                fromAminoMsg(object: _111.QuerySwapExactAmountInResponseAminoMsg): _111.QuerySwapExactAmountInResponse;
                toAminoMsg(message: _111.QuerySwapExactAmountInResponse): _111.QuerySwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _111.QuerySwapExactAmountInResponseProtoMsg): _111.QuerySwapExactAmountInResponse;
                toProto(message: _111.QuerySwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _111.QuerySwapExactAmountInResponse): _111.QuerySwapExactAmountInResponseProtoMsg;
            };
            QuerySwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _111.QuerySwapExactAmountOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QuerySwapExactAmountOutRequest;
                fromPartial(object: Partial<_111.QuerySwapExactAmountOutRequest>): _111.QuerySwapExactAmountOutRequest;
                fromAmino(object: _111.QuerySwapExactAmountOutRequestAmino): _111.QuerySwapExactAmountOutRequest;
                toAmino(message: _111.QuerySwapExactAmountOutRequest): _111.QuerySwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _111.QuerySwapExactAmountOutRequestAminoMsg): _111.QuerySwapExactAmountOutRequest;
                toAminoMsg(message: _111.QuerySwapExactAmountOutRequest): _111.QuerySwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _111.QuerySwapExactAmountOutRequestProtoMsg): _111.QuerySwapExactAmountOutRequest;
                toProto(message: _111.QuerySwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _111.QuerySwapExactAmountOutRequest): _111.QuerySwapExactAmountOutRequestProtoMsg;
            };
            QuerySwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _111.QuerySwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QuerySwapExactAmountOutResponse;
                fromPartial(object: Partial<_111.QuerySwapExactAmountOutResponse>): _111.QuerySwapExactAmountOutResponse;
                fromAmino(object: _111.QuerySwapExactAmountOutResponseAmino): _111.QuerySwapExactAmountOutResponse;
                toAmino(message: _111.QuerySwapExactAmountOutResponse): _111.QuerySwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _111.QuerySwapExactAmountOutResponseAminoMsg): _111.QuerySwapExactAmountOutResponse;
                toAminoMsg(message: _111.QuerySwapExactAmountOutResponse): _111.QuerySwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _111.QuerySwapExactAmountOutResponseProtoMsg): _111.QuerySwapExactAmountOutResponse;
                toProto(message: _111.QuerySwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _111.QuerySwapExactAmountOutResponse): _111.QuerySwapExactAmountOutResponseProtoMsg;
            };
            QueryTotalLiquidityRequest: {
                typeUrl: string;
                encode(_: _111.QueryTotalLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryTotalLiquidityRequest;
                fromPartial(_: Partial<_111.QueryTotalLiquidityRequest>): _111.QueryTotalLiquidityRequest;
                fromAmino(_: _111.QueryTotalLiquidityRequestAmino): _111.QueryTotalLiquidityRequest;
                toAmino(_: _111.QueryTotalLiquidityRequest): _111.QueryTotalLiquidityRequestAmino;
                fromAminoMsg(object: _111.QueryTotalLiquidityRequestAminoMsg): _111.QueryTotalLiquidityRequest;
                toAminoMsg(message: _111.QueryTotalLiquidityRequest): _111.QueryTotalLiquidityRequestAminoMsg;
                fromProtoMsg(message: _111.QueryTotalLiquidityRequestProtoMsg): _111.QueryTotalLiquidityRequest;
                toProto(message: _111.QueryTotalLiquidityRequest): Uint8Array;
                toProtoMsg(message: _111.QueryTotalLiquidityRequest): _111.QueryTotalLiquidityRequestProtoMsg;
            };
            QueryTotalLiquidityResponse: {
                typeUrl: string;
                encode(message: _111.QueryTotalLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryTotalLiquidityResponse;
                fromPartial(object: Partial<_111.QueryTotalLiquidityResponse>): _111.QueryTotalLiquidityResponse;
                fromAmino(object: _111.QueryTotalLiquidityResponseAmino): _111.QueryTotalLiquidityResponse;
                toAmino(message: _111.QueryTotalLiquidityResponse): _111.QueryTotalLiquidityResponseAmino;
                fromAminoMsg(object: _111.QueryTotalLiquidityResponseAminoMsg): _111.QueryTotalLiquidityResponse;
                toAminoMsg(message: _111.QueryTotalLiquidityResponse): _111.QueryTotalLiquidityResponseAminoMsg;
                fromProtoMsg(message: _111.QueryTotalLiquidityResponseProtoMsg): _111.QueryTotalLiquidityResponse;
                toProto(message: _111.QueryTotalLiquidityResponse): Uint8Array;
                toProtoMsg(message: _111.QueryTotalLiquidityResponse): _111.QueryTotalLiquidityResponseProtoMsg;
            };
            QueryConcentratedPoolIdLinkFromCFMMRequest: {
                typeUrl: string;
                encode(message: _111.QueryConcentratedPoolIdLinkFromCFMMRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryConcentratedPoolIdLinkFromCFMMRequest;
                fromPartial(object: Partial<_111.QueryConcentratedPoolIdLinkFromCFMMRequest>): _111.QueryConcentratedPoolIdLinkFromCFMMRequest;
                fromAmino(object: _111.QueryConcentratedPoolIdLinkFromCFMMRequestAmino): _111.QueryConcentratedPoolIdLinkFromCFMMRequest;
                toAmino(message: _111.QueryConcentratedPoolIdLinkFromCFMMRequest): _111.QueryConcentratedPoolIdLinkFromCFMMRequestAmino;
                fromAminoMsg(object: _111.QueryConcentratedPoolIdLinkFromCFMMRequestAminoMsg): _111.QueryConcentratedPoolIdLinkFromCFMMRequest;
                toAminoMsg(message: _111.QueryConcentratedPoolIdLinkFromCFMMRequest): _111.QueryConcentratedPoolIdLinkFromCFMMRequestAminoMsg;
                fromProtoMsg(message: _111.QueryConcentratedPoolIdLinkFromCFMMRequestProtoMsg): _111.QueryConcentratedPoolIdLinkFromCFMMRequest;
                toProto(message: _111.QueryConcentratedPoolIdLinkFromCFMMRequest): Uint8Array;
                toProtoMsg(message: _111.QueryConcentratedPoolIdLinkFromCFMMRequest): _111.QueryConcentratedPoolIdLinkFromCFMMRequestProtoMsg;
            };
            QueryConcentratedPoolIdLinkFromCFMMResponse: {
                typeUrl: string;
                encode(message: _111.QueryConcentratedPoolIdLinkFromCFMMResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryConcentratedPoolIdLinkFromCFMMResponse;
                fromPartial(object: Partial<_111.QueryConcentratedPoolIdLinkFromCFMMResponse>): _111.QueryConcentratedPoolIdLinkFromCFMMResponse;
                fromAmino(object: _111.QueryConcentratedPoolIdLinkFromCFMMResponseAmino): _111.QueryConcentratedPoolIdLinkFromCFMMResponse;
                toAmino(message: _111.QueryConcentratedPoolIdLinkFromCFMMResponse): _111.QueryConcentratedPoolIdLinkFromCFMMResponseAmino;
                fromAminoMsg(object: _111.QueryConcentratedPoolIdLinkFromCFMMResponseAminoMsg): _111.QueryConcentratedPoolIdLinkFromCFMMResponse;
                toAminoMsg(message: _111.QueryConcentratedPoolIdLinkFromCFMMResponse): _111.QueryConcentratedPoolIdLinkFromCFMMResponseAminoMsg;
                fromProtoMsg(message: _111.QueryConcentratedPoolIdLinkFromCFMMResponseProtoMsg): _111.QueryConcentratedPoolIdLinkFromCFMMResponse;
                toProto(message: _111.QueryConcentratedPoolIdLinkFromCFMMResponse): Uint8Array;
                toProtoMsg(message: _111.QueryConcentratedPoolIdLinkFromCFMMResponse): _111.QueryConcentratedPoolIdLinkFromCFMMResponseProtoMsg;
            };
            PoolI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | import("./concentrated-liquidity/pool").Pool | _97.CosmWasmPool | _108.Pool | _115.Pool;
            PoolI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            PoolI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ReplaceMigrationRecordsProposal: {
                typeUrl: string;
                encode(message: _110.ReplaceMigrationRecordsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.ReplaceMigrationRecordsProposal;
                fromPartial(object: Partial<_110.ReplaceMigrationRecordsProposal>): _110.ReplaceMigrationRecordsProposal;
                fromAmino(object: _110.ReplaceMigrationRecordsProposalAmino): _110.ReplaceMigrationRecordsProposal;
                toAmino(message: _110.ReplaceMigrationRecordsProposal): _110.ReplaceMigrationRecordsProposalAmino;
                fromAminoMsg(object: _110.ReplaceMigrationRecordsProposalAminoMsg): _110.ReplaceMigrationRecordsProposal;
                toAminoMsg(message: _110.ReplaceMigrationRecordsProposal): _110.ReplaceMigrationRecordsProposalAminoMsg;
                fromProtoMsg(message: _110.ReplaceMigrationRecordsProposalProtoMsg): _110.ReplaceMigrationRecordsProposal;
                toProto(message: _110.ReplaceMigrationRecordsProposal): Uint8Array;
                toProtoMsg(message: _110.ReplaceMigrationRecordsProposal): _110.ReplaceMigrationRecordsProposalProtoMsg;
            };
            UpdateMigrationRecordsProposal: {
                typeUrl: string;
                encode(message: _110.UpdateMigrationRecordsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.UpdateMigrationRecordsProposal;
                fromPartial(object: Partial<_110.UpdateMigrationRecordsProposal>): _110.UpdateMigrationRecordsProposal;
                fromAmino(object: _110.UpdateMigrationRecordsProposalAmino): _110.UpdateMigrationRecordsProposal;
                toAmino(message: _110.UpdateMigrationRecordsProposal): _110.UpdateMigrationRecordsProposalAmino;
                fromAminoMsg(object: _110.UpdateMigrationRecordsProposalAminoMsg): _110.UpdateMigrationRecordsProposal;
                toAminoMsg(message: _110.UpdateMigrationRecordsProposal): _110.UpdateMigrationRecordsProposalAminoMsg;
                fromProtoMsg(message: _110.UpdateMigrationRecordsProposalProtoMsg): _110.UpdateMigrationRecordsProposal;
                toProto(message: _110.UpdateMigrationRecordsProposal): Uint8Array;
                toProtoMsg(message: _110.UpdateMigrationRecordsProposal): _110.UpdateMigrationRecordsProposalProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _109.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Params;
                fromPartial(object: Partial<_109.Params>): _109.Params;
                fromAmino(object: _109.ParamsAmino): _109.Params;
                toAmino(message: _109.Params): _109.ParamsAmino;
                fromAminoMsg(object: _109.ParamsAminoMsg): _109.Params;
                toAminoMsg(message: _109.Params): _109.ParamsAminoMsg;
                fromProtoMsg(message: _109.ParamsProtoMsg): _109.Params;
                toProto(message: _109.Params): Uint8Array;
                toProtoMsg(message: _109.Params): _109.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _109.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.GenesisState;
                fromPartial(object: Partial<_109.GenesisState>): _109.GenesisState;
                fromAmino(object: _109.GenesisStateAmino): _109.GenesisState;
                toAmino(message: _109.GenesisState): _109.GenesisStateAmino;
                fromAminoMsg(object: _109.GenesisStateAminoMsg): _109.GenesisState;
                toAminoMsg(message: _109.GenesisState): _109.GenesisStateAminoMsg;
                fromProtoMsg(message: _109.GenesisStateProtoMsg): _109.GenesisState;
                toProto(message: _109.GenesisState): Uint8Array;
                toProtoMsg(message: _109.GenesisState): _109.GenesisStateProtoMsg;
            };
            SmoothWeightChangeParams: {
                typeUrl: string;
                encode(message: _108.SmoothWeightChangeParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.SmoothWeightChangeParams;
                fromPartial(object: Partial<_108.SmoothWeightChangeParams>): _108.SmoothWeightChangeParams;
                fromAmino(object: _108.SmoothWeightChangeParamsAmino): _108.SmoothWeightChangeParams;
                toAmino(message: _108.SmoothWeightChangeParams): _108.SmoothWeightChangeParamsAmino;
                fromAminoMsg(object: _108.SmoothWeightChangeParamsAminoMsg): _108.SmoothWeightChangeParams;
                toAminoMsg(message: _108.SmoothWeightChangeParams): _108.SmoothWeightChangeParamsAminoMsg;
                fromProtoMsg(message: _108.SmoothWeightChangeParamsProtoMsg): _108.SmoothWeightChangeParams;
                toProto(message: _108.SmoothWeightChangeParams): Uint8Array;
                toProtoMsg(message: _108.SmoothWeightChangeParams): _108.SmoothWeightChangeParamsProtoMsg;
            };
            PoolParams: {
                typeUrl: string;
                encode(message: _108.PoolParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.PoolParams;
                fromPartial(object: Partial<_108.PoolParams>): _108.PoolParams;
                fromAmino(object: _108.PoolParamsAmino): _108.PoolParams;
                toAmino(message: _108.PoolParams): _108.PoolParamsAmino;
                fromAminoMsg(object: _108.PoolParamsAminoMsg): _108.PoolParams;
                toAminoMsg(message: _108.PoolParams): _108.PoolParamsAminoMsg;
                fromProtoMsg(message: _108.PoolParamsProtoMsg): _108.PoolParams;
                toProto(message: _108.PoolParams): Uint8Array;
                toProtoMsg(message: _108.PoolParams): _108.PoolParamsProtoMsg;
            };
            PoolAsset: {
                typeUrl: string;
                encode(message: _108.PoolAsset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.PoolAsset;
                fromPartial(object: Partial<_108.PoolAsset>): _108.PoolAsset;
                fromAmino(object: _108.PoolAssetAmino): _108.PoolAsset;
                toAmino(message: _108.PoolAsset): _108.PoolAssetAmino;
                fromAminoMsg(object: _108.PoolAssetAminoMsg): _108.PoolAsset;
                toAminoMsg(message: _108.PoolAsset): _108.PoolAssetAminoMsg;
                fromProtoMsg(message: _108.PoolAssetProtoMsg): _108.PoolAsset;
                toProto(message: _108.PoolAsset): Uint8Array;
                toProtoMsg(message: _108.PoolAsset): _108.PoolAssetProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _108.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.Pool;
                fromPartial(object: Partial<_108.Pool>): _108.Pool;
                fromAmino(object: _108.PoolAmino): _108.Pool;
                toAmino(message: _108.Pool): _108.PoolAmino;
                fromAminoMsg(object: _108.PoolAminoMsg): _108.Pool;
                toAminoMsg(message: _108.Pool): _108.PoolAminoMsg;
                fromProtoMsg(message: _108.PoolProtoMsg): _108.Pool;
                toProto(message: _108.Pool): Uint8Array;
                toProtoMsg(message: _108.Pool): _108.PoolProtoMsg;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    MsgClientImpl: typeof _322.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _114.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _114.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _114.MsgCreateBalancerPool;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _114.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _114.MsgCreateBalancerPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: (message: _114.MsgCreateBalancerPool) => _114.MsgCreateBalancerPoolAmino;
                            fromAmino: (object: _114.MsgCreateBalancerPoolAmino) => _114.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        typeUrl: string;
                        encode(message: _114.MsgCreateBalancerPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.MsgCreateBalancerPool;
                        fromPartial(object: Partial<_114.MsgCreateBalancerPool>): _114.MsgCreateBalancerPool;
                        fromAmino(object: _114.MsgCreateBalancerPoolAmino): _114.MsgCreateBalancerPool;
                        toAmino(message: _114.MsgCreateBalancerPool): _114.MsgCreateBalancerPoolAmino;
                        fromAminoMsg(object: _114.MsgCreateBalancerPoolAminoMsg): _114.MsgCreateBalancerPool;
                        toAminoMsg(message: _114.MsgCreateBalancerPool): _114.MsgCreateBalancerPoolAminoMsg;
                        fromProtoMsg(message: _114.MsgCreateBalancerPoolProtoMsg): _114.MsgCreateBalancerPool;
                        toProto(message: _114.MsgCreateBalancerPool): Uint8Array;
                        toProtoMsg(message: _114.MsgCreateBalancerPool): _114.MsgCreateBalancerPoolProtoMsg;
                    };
                    MsgCreateBalancerPoolResponse: {
                        typeUrl: string;
                        encode(message: _114.MsgCreateBalancerPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.MsgCreateBalancerPoolResponse;
                        fromPartial(object: Partial<_114.MsgCreateBalancerPoolResponse>): _114.MsgCreateBalancerPoolResponse;
                        fromAmino(object: _114.MsgCreateBalancerPoolResponseAmino): _114.MsgCreateBalancerPoolResponse;
                        toAmino(message: _114.MsgCreateBalancerPoolResponse): _114.MsgCreateBalancerPoolResponseAmino;
                        fromAminoMsg(object: _114.MsgCreateBalancerPoolResponseAminoMsg): _114.MsgCreateBalancerPoolResponse;
                        toAminoMsg(message: _114.MsgCreateBalancerPoolResponse): _114.MsgCreateBalancerPoolResponseAminoMsg;
                        fromProtoMsg(message: _114.MsgCreateBalancerPoolResponseProtoMsg): _114.MsgCreateBalancerPoolResponse;
                        toProto(message: _114.MsgCreateBalancerPoolResponse): Uint8Array;
                        toProtoMsg(message: _114.MsgCreateBalancerPoolResponse): _114.MsgCreateBalancerPoolResponseProtoMsg;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    MsgClientImpl: typeof _323.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _116.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _116.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _116.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _116.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _116.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _116.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _116.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _116.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _116.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _116.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: (message: _116.MsgCreateStableswapPool) => _116.MsgCreateStableswapPoolAmino;
                            fromAmino: (object: _116.MsgCreateStableswapPoolAmino) => _116.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: (message: _116.MsgStableSwapAdjustScalingFactors) => _116.MsgStableSwapAdjustScalingFactorsAmino;
                            fromAmino: (object: _116.MsgStableSwapAdjustScalingFactorsAmino) => _116.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        typeUrl: string;
                        encode(message: _116.MsgCreateStableswapPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgCreateStableswapPool;
                        fromPartial(object: Partial<_116.MsgCreateStableswapPool>): _116.MsgCreateStableswapPool;
                        fromAmino(object: _116.MsgCreateStableswapPoolAmino): _116.MsgCreateStableswapPool;
                        toAmino(message: _116.MsgCreateStableswapPool): _116.MsgCreateStableswapPoolAmino;
                        fromAminoMsg(object: _116.MsgCreateStableswapPoolAminoMsg): _116.MsgCreateStableswapPool;
                        toAminoMsg(message: _116.MsgCreateStableswapPool): _116.MsgCreateStableswapPoolAminoMsg;
                        fromProtoMsg(message: _116.MsgCreateStableswapPoolProtoMsg): _116.MsgCreateStableswapPool;
                        toProto(message: _116.MsgCreateStableswapPool): Uint8Array;
                        toProtoMsg(message: _116.MsgCreateStableswapPool): _116.MsgCreateStableswapPoolProtoMsg;
                    };
                    MsgCreateStableswapPoolResponse: {
                        typeUrl: string;
                        encode(message: _116.MsgCreateStableswapPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgCreateStableswapPoolResponse;
                        fromPartial(object: Partial<_116.MsgCreateStableswapPoolResponse>): _116.MsgCreateStableswapPoolResponse;
                        fromAmino(object: _116.MsgCreateStableswapPoolResponseAmino): _116.MsgCreateStableswapPoolResponse;
                        toAmino(message: _116.MsgCreateStableswapPoolResponse): _116.MsgCreateStableswapPoolResponseAmino;
                        fromAminoMsg(object: _116.MsgCreateStableswapPoolResponseAminoMsg): _116.MsgCreateStableswapPoolResponse;
                        toAminoMsg(message: _116.MsgCreateStableswapPoolResponse): _116.MsgCreateStableswapPoolResponseAminoMsg;
                        fromProtoMsg(message: _116.MsgCreateStableswapPoolResponseProtoMsg): _116.MsgCreateStableswapPoolResponse;
                        toProto(message: _116.MsgCreateStableswapPoolResponse): Uint8Array;
                        toProtoMsg(message: _116.MsgCreateStableswapPoolResponse): _116.MsgCreateStableswapPoolResponseProtoMsg;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        typeUrl: string;
                        encode(message: _116.MsgStableSwapAdjustScalingFactors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgStableSwapAdjustScalingFactors;
                        fromPartial(object: Partial<_116.MsgStableSwapAdjustScalingFactors>): _116.MsgStableSwapAdjustScalingFactors;
                        fromAmino(object: _116.MsgStableSwapAdjustScalingFactorsAmino): _116.MsgStableSwapAdjustScalingFactors;
                        toAmino(message: _116.MsgStableSwapAdjustScalingFactors): _116.MsgStableSwapAdjustScalingFactorsAmino;
                        fromAminoMsg(object: _116.MsgStableSwapAdjustScalingFactorsAminoMsg): _116.MsgStableSwapAdjustScalingFactors;
                        toAminoMsg(message: _116.MsgStableSwapAdjustScalingFactors): _116.MsgStableSwapAdjustScalingFactorsAminoMsg;
                        fromProtoMsg(message: _116.MsgStableSwapAdjustScalingFactorsProtoMsg): _116.MsgStableSwapAdjustScalingFactors;
                        toProto(message: _116.MsgStableSwapAdjustScalingFactors): Uint8Array;
                        toProtoMsg(message: _116.MsgStableSwapAdjustScalingFactors): _116.MsgStableSwapAdjustScalingFactorsProtoMsg;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        typeUrl: string;
                        encode(_: _116.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgStableSwapAdjustScalingFactorsResponse;
                        fromPartial(_: Partial<_116.MsgStableSwapAdjustScalingFactorsResponse>): _116.MsgStableSwapAdjustScalingFactorsResponse;
                        fromAmino(_: _116.MsgStableSwapAdjustScalingFactorsResponseAmino): _116.MsgStableSwapAdjustScalingFactorsResponse;
                        toAmino(_: _116.MsgStableSwapAdjustScalingFactorsResponse): _116.MsgStableSwapAdjustScalingFactorsResponseAmino;
                        fromAminoMsg(object: _116.MsgStableSwapAdjustScalingFactorsResponseAminoMsg): _116.MsgStableSwapAdjustScalingFactorsResponse;
                        toAminoMsg(message: _116.MsgStableSwapAdjustScalingFactorsResponse): _116.MsgStableSwapAdjustScalingFactorsResponseAminoMsg;
                        fromProtoMsg(message: _116.MsgStableSwapAdjustScalingFactorsResponseProtoMsg): _116.MsgStableSwapAdjustScalingFactorsResponse;
                        toProto(message: _116.MsgStableSwapAdjustScalingFactorsResponse): Uint8Array;
                        toProtoMsg(message: _116.MsgStableSwapAdjustScalingFactorsResponse): _116.MsgStableSwapAdjustScalingFactorsResponseProtoMsg;
                    };
                    PoolParams: {
                        typeUrl: string;
                        encode(message: _115.PoolParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.PoolParams;
                        fromPartial(object: Partial<_115.PoolParams>): _115.PoolParams;
                        fromAmino(object: _115.PoolParamsAmino): _115.PoolParams;
                        toAmino(message: _115.PoolParams): _115.PoolParamsAmino;
                        fromAminoMsg(object: _115.PoolParamsAminoMsg): _115.PoolParams;
                        toAminoMsg(message: _115.PoolParams): _115.PoolParamsAminoMsg;
                        fromProtoMsg(message: _115.PoolParamsProtoMsg): _115.PoolParams;
                        toProto(message: _115.PoolParams): Uint8Array;
                        toProtoMsg(message: _115.PoolParams): _115.PoolParamsProtoMsg;
                    };
                    Pool: {
                        typeUrl: string;
                        encode(message: _115.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.Pool;
                        fromPartial(object: Partial<_115.Pool>): _115.Pool;
                        fromAmino(object: _115.PoolAmino): _115.Pool;
                        toAmino(message: _115.Pool): _115.PoolAmino;
                        fromAminoMsg(object: _115.PoolAminoMsg): _115.Pool;
                        toAminoMsg(message: _115.Pool): _115.PoolAminoMsg;
                        fromProtoMsg(message: _115.PoolProtoMsg): _115.Pool;
                        toProto(message: _115.Pool): Uint8Array;
                        toProtoMsg(message: _115.Pool): _115.PoolProtoMsg;
                    };
                };
            }
        }
        const v2: {
            QueryClientImpl: typeof _307.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                spotPrice(request: _117.QuerySpotPriceRequest): Promise<_117.QuerySpotPriceResponse>;
            };
            LCDQueryClient: typeof _289.LCDQueryClient;
            QuerySpotPriceRequest: {
                typeUrl: string;
                encode(message: _117.QuerySpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.QuerySpotPriceRequest;
                fromPartial(object: Partial<_117.QuerySpotPriceRequest>): _117.QuerySpotPriceRequest;
                fromAmino(object: _117.QuerySpotPriceRequestAmino): _117.QuerySpotPriceRequest;
                toAmino(message: _117.QuerySpotPriceRequest): _117.QuerySpotPriceRequestAmino;
                fromAminoMsg(object: _117.QuerySpotPriceRequestAminoMsg): _117.QuerySpotPriceRequest;
                toAminoMsg(message: _117.QuerySpotPriceRequest): _117.QuerySpotPriceRequestAminoMsg;
                fromProtoMsg(message: _117.QuerySpotPriceRequestProtoMsg): _117.QuerySpotPriceRequest;
                toProto(message: _117.QuerySpotPriceRequest): Uint8Array;
                toProtoMsg(message: _117.QuerySpotPriceRequest): _117.QuerySpotPriceRequestProtoMsg;
            };
            QuerySpotPriceResponse: {
                typeUrl: string;
                encode(message: _117.QuerySpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.QuerySpotPriceResponse;
                fromPartial(object: Partial<_117.QuerySpotPriceResponse>): _117.QuerySpotPriceResponse;
                fromAmino(object: _117.QuerySpotPriceResponseAmino): _117.QuerySpotPriceResponse;
                toAmino(message: _117.QuerySpotPriceResponse): _117.QuerySpotPriceResponseAmino;
                fromAminoMsg(object: _117.QuerySpotPriceResponseAminoMsg): _117.QuerySpotPriceResponse;
                toAminoMsg(message: _117.QuerySpotPriceResponse): _117.QuerySpotPriceResponseAminoMsg;
                fromProtoMsg(message: _117.QuerySpotPriceResponseProtoMsg): _117.QuerySpotPriceResponse;
                toProto(message: _117.QuerySpotPriceResponse): Uint8Array;
                toProtoMsg(message: _117.QuerySpotPriceResponse): _117.QuerySpotPriceResponseProtoMsg;
            };
        };
    }
    namespace ibcratelimit {
        const v1beta1: {
            QueryClientImpl: typeof _308.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _120.ParamsRequest): Promise<_120.ParamsResponse>;
            };
            LCDQueryClient: typeof _290.LCDQueryClient;
            ParamsRequest: {
                typeUrl: string;
                encode(_: _120.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.ParamsRequest;
                fromPartial(_: Partial<_120.ParamsRequest>): _120.ParamsRequest;
                fromAmino(_: _120.ParamsRequestAmino): _120.ParamsRequest;
                toAmino(_: _120.ParamsRequest): _120.ParamsRequestAmino;
                fromAminoMsg(object: _120.ParamsRequestAminoMsg): _120.ParamsRequest;
                toAminoMsg(message: _120.ParamsRequest): _120.ParamsRequestAminoMsg;
                fromProtoMsg(message: _120.ParamsRequestProtoMsg): _120.ParamsRequest;
                toProto(message: _120.ParamsRequest): Uint8Array;
                toProtoMsg(message: _120.ParamsRequest): _120.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _120.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.ParamsResponse;
                fromPartial(object: Partial<_120.ParamsResponse>): _120.ParamsResponse;
                fromAmino(object: _120.ParamsResponseAmino): _120.ParamsResponse;
                toAmino(message: _120.ParamsResponse): _120.ParamsResponseAmino;
                fromAminoMsg(object: _120.ParamsResponseAminoMsg): _120.ParamsResponse;
                toAminoMsg(message: _120.ParamsResponse): _120.ParamsResponseAminoMsg;
                fromProtoMsg(message: _120.ParamsResponseProtoMsg): _120.ParamsResponse;
                toProto(message: _120.ParamsResponse): Uint8Array;
                toProtoMsg(message: _120.ParamsResponse): _120.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _119.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.Params;
                fromPartial(object: Partial<_119.Params>): _119.Params;
                fromAmino(object: _119.ParamsAmino): _119.Params;
                toAmino(message: _119.Params): _119.ParamsAmino;
                fromAminoMsg(object: _119.ParamsAminoMsg): _119.Params;
                toAminoMsg(message: _119.Params): _119.ParamsAminoMsg;
                fromProtoMsg(message: _119.ParamsProtoMsg): _119.Params;
                toProto(message: _119.Params): Uint8Array;
                toProtoMsg(message: _119.Params): _119.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _118.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.GenesisState;
                fromPartial(object: Partial<_118.GenesisState>): _118.GenesisState;
                fromAmino(object: _118.GenesisStateAmino): _118.GenesisState;
                toAmino(message: _118.GenesisState): _118.GenesisStateAmino;
                fromAminoMsg(object: _118.GenesisStateAminoMsg): _118.GenesisState;
                toAminoMsg(message: _118.GenesisState): _118.GenesisStateAminoMsg;
                fromProtoMsg(message: _118.GenesisStateProtoMsg): _118.GenesisState;
                toProto(message: _118.GenesisState): Uint8Array;
                toProtoMsg(message: _118.GenesisState): _118.GenesisStateProtoMsg;
            };
        };
    }
    const incentives: {
        MsgClientImpl: typeof _325.MsgClientImpl;
        QueryClientImpl: typeof _309.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleToDistributeCoins(request?: _124.ModuleToDistributeCoinsRequest): Promise<_124.ModuleToDistributeCoinsResponse>;
            gaugeByID(request: _124.GaugeByIDRequest): Promise<_124.GaugeByIDResponse>;
            gauges(request?: _124.GaugesRequest): Promise<_124.GaugesResponse>;
            activeGauges(request?: _124.ActiveGaugesRequest): Promise<_124.ActiveGaugesResponse>;
            activeGaugesPerDenom(request: _124.ActiveGaugesPerDenomRequest): Promise<_124.ActiveGaugesPerDenomResponse>;
            upcomingGauges(request?: _124.UpcomingGaugesRequest): Promise<_124.UpcomingGaugesResponse>;
            upcomingGaugesPerDenom(request: _124.UpcomingGaugesPerDenomRequest): Promise<_124.UpcomingGaugesPerDenomResponse>;
            rewardsEst(request: _124.RewardsEstRequest): Promise<_124.RewardsEstResponse>;
            lockableDurations(request?: _124.QueryLockableDurationsRequest): Promise<_124.QueryLockableDurationsResponse>;
        };
        LCDQueryClient: typeof _291.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _125.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _125.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _125.MsgCreateGauge): {
                    typeUrl: string;
                    value: _125.MsgCreateGauge;
                };
                addToGauge(value: _125.MsgAddToGauge): {
                    typeUrl: string;
                    value: _125.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _125.MsgCreateGauge): {
                    typeUrl: string;
                    value: _125.MsgCreateGauge;
                };
                addToGauge(value: _125.MsgAddToGauge): {
                    typeUrl: string;
                    value: _125.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: (message: _125.MsgCreateGauge) => _125.MsgCreateGaugeAmino;
                fromAmino: (object: _125.MsgCreateGaugeAmino) => _125.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: (message: _125.MsgAddToGauge) => _125.MsgAddToGaugeAmino;
                fromAmino: (object: _125.MsgAddToGaugeAmino) => _125.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            typeUrl: string;
            encode(message: _125.MsgCreateGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.MsgCreateGauge;
            fromPartial(object: Partial<_125.MsgCreateGauge>): _125.MsgCreateGauge;
            fromAmino(object: _125.MsgCreateGaugeAmino): _125.MsgCreateGauge;
            toAmino(message: _125.MsgCreateGauge): _125.MsgCreateGaugeAmino;
            fromAminoMsg(object: _125.MsgCreateGaugeAminoMsg): _125.MsgCreateGauge;
            toAminoMsg(message: _125.MsgCreateGauge): _125.MsgCreateGaugeAminoMsg;
            fromProtoMsg(message: _125.MsgCreateGaugeProtoMsg): _125.MsgCreateGauge;
            toProto(message: _125.MsgCreateGauge): Uint8Array;
            toProtoMsg(message: _125.MsgCreateGauge): _125.MsgCreateGaugeProtoMsg;
        };
        MsgCreateGaugeResponse: {
            typeUrl: string;
            encode(_: _125.MsgCreateGaugeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.MsgCreateGaugeResponse;
            fromPartial(_: Partial<_125.MsgCreateGaugeResponse>): _125.MsgCreateGaugeResponse;
            fromAmino(_: _125.MsgCreateGaugeResponseAmino): _125.MsgCreateGaugeResponse;
            toAmino(_: _125.MsgCreateGaugeResponse): _125.MsgCreateGaugeResponseAmino;
            fromAminoMsg(object: _125.MsgCreateGaugeResponseAminoMsg): _125.MsgCreateGaugeResponse;
            toAminoMsg(message: _125.MsgCreateGaugeResponse): _125.MsgCreateGaugeResponseAminoMsg;
            fromProtoMsg(message: _125.MsgCreateGaugeResponseProtoMsg): _125.MsgCreateGaugeResponse;
            toProto(message: _125.MsgCreateGaugeResponse): Uint8Array;
            toProtoMsg(message: _125.MsgCreateGaugeResponse): _125.MsgCreateGaugeResponseProtoMsg;
        };
        MsgAddToGauge: {
            typeUrl: string;
            encode(message: _125.MsgAddToGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.MsgAddToGauge;
            fromPartial(object: Partial<_125.MsgAddToGauge>): _125.MsgAddToGauge;
            fromAmino(object: _125.MsgAddToGaugeAmino): _125.MsgAddToGauge;
            toAmino(message: _125.MsgAddToGauge): _125.MsgAddToGaugeAmino;
            fromAminoMsg(object: _125.MsgAddToGaugeAminoMsg): _125.MsgAddToGauge;
            toAminoMsg(message: _125.MsgAddToGauge): _125.MsgAddToGaugeAminoMsg;
            fromProtoMsg(message: _125.MsgAddToGaugeProtoMsg): _125.MsgAddToGauge;
            toProto(message: _125.MsgAddToGauge): Uint8Array;
            toProtoMsg(message: _125.MsgAddToGauge): _125.MsgAddToGaugeProtoMsg;
        };
        MsgAddToGaugeResponse: {
            typeUrl: string;
            encode(_: _125.MsgAddToGaugeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.MsgAddToGaugeResponse;
            fromPartial(_: Partial<_125.MsgAddToGaugeResponse>): _125.MsgAddToGaugeResponse;
            fromAmino(_: _125.MsgAddToGaugeResponseAmino): _125.MsgAddToGaugeResponse;
            toAmino(_: _125.MsgAddToGaugeResponse): _125.MsgAddToGaugeResponseAmino;
            fromAminoMsg(object: _125.MsgAddToGaugeResponseAminoMsg): _125.MsgAddToGaugeResponse;
            toAminoMsg(message: _125.MsgAddToGaugeResponse): _125.MsgAddToGaugeResponseAminoMsg;
            fromProtoMsg(message: _125.MsgAddToGaugeResponseProtoMsg): _125.MsgAddToGaugeResponse;
            toProto(message: _125.MsgAddToGaugeResponse): Uint8Array;
            toProtoMsg(message: _125.MsgAddToGaugeResponse): _125.MsgAddToGaugeResponseProtoMsg;
        };
        ModuleToDistributeCoinsRequest: {
            typeUrl: string;
            encode(_: _124.ModuleToDistributeCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.ModuleToDistributeCoinsRequest;
            fromPartial(_: Partial<_124.ModuleToDistributeCoinsRequest>): _124.ModuleToDistributeCoinsRequest;
            fromAmino(_: _124.ModuleToDistributeCoinsRequestAmino): _124.ModuleToDistributeCoinsRequest;
            toAmino(_: _124.ModuleToDistributeCoinsRequest): _124.ModuleToDistributeCoinsRequestAmino;
            fromAminoMsg(object: _124.ModuleToDistributeCoinsRequestAminoMsg): _124.ModuleToDistributeCoinsRequest;
            toAminoMsg(message: _124.ModuleToDistributeCoinsRequest): _124.ModuleToDistributeCoinsRequestAminoMsg;
            fromProtoMsg(message: _124.ModuleToDistributeCoinsRequestProtoMsg): _124.ModuleToDistributeCoinsRequest;
            toProto(message: _124.ModuleToDistributeCoinsRequest): Uint8Array;
            toProtoMsg(message: _124.ModuleToDistributeCoinsRequest): _124.ModuleToDistributeCoinsRequestProtoMsg;
        };
        ModuleToDistributeCoinsResponse: {
            typeUrl: string;
            encode(message: _124.ModuleToDistributeCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.ModuleToDistributeCoinsResponse;
            fromPartial(object: Partial<_124.ModuleToDistributeCoinsResponse>): _124.ModuleToDistributeCoinsResponse;
            fromAmino(object: _124.ModuleToDistributeCoinsResponseAmino): _124.ModuleToDistributeCoinsResponse;
            toAmino(message: _124.ModuleToDistributeCoinsResponse): _124.ModuleToDistributeCoinsResponseAmino;
            fromAminoMsg(object: _124.ModuleToDistributeCoinsResponseAminoMsg): _124.ModuleToDistributeCoinsResponse;
            toAminoMsg(message: _124.ModuleToDistributeCoinsResponse): _124.ModuleToDistributeCoinsResponseAminoMsg;
            fromProtoMsg(message: _124.ModuleToDistributeCoinsResponseProtoMsg): _124.ModuleToDistributeCoinsResponse;
            toProto(message: _124.ModuleToDistributeCoinsResponse): Uint8Array;
            toProtoMsg(message: _124.ModuleToDistributeCoinsResponse): _124.ModuleToDistributeCoinsResponseProtoMsg;
        };
        GaugeByIDRequest: {
            typeUrl: string;
            encode(message: _124.GaugeByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.GaugeByIDRequest;
            fromPartial(object: Partial<_124.GaugeByIDRequest>): _124.GaugeByIDRequest;
            fromAmino(object: _124.GaugeByIDRequestAmino): _124.GaugeByIDRequest;
            toAmino(message: _124.GaugeByIDRequest): _124.GaugeByIDRequestAmino;
            fromAminoMsg(object: _124.GaugeByIDRequestAminoMsg): _124.GaugeByIDRequest;
            toAminoMsg(message: _124.GaugeByIDRequest): _124.GaugeByIDRequestAminoMsg;
            fromProtoMsg(message: _124.GaugeByIDRequestProtoMsg): _124.GaugeByIDRequest;
            toProto(message: _124.GaugeByIDRequest): Uint8Array;
            toProtoMsg(message: _124.GaugeByIDRequest): _124.GaugeByIDRequestProtoMsg;
        };
        GaugeByIDResponse: {
            typeUrl: string;
            encode(message: _124.GaugeByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.GaugeByIDResponse;
            fromPartial(object: Partial<_124.GaugeByIDResponse>): _124.GaugeByIDResponse;
            fromAmino(object: _124.GaugeByIDResponseAmino): _124.GaugeByIDResponse;
            toAmino(message: _124.GaugeByIDResponse): _124.GaugeByIDResponseAmino;
            fromAminoMsg(object: _124.GaugeByIDResponseAminoMsg): _124.GaugeByIDResponse;
            toAminoMsg(message: _124.GaugeByIDResponse): _124.GaugeByIDResponseAminoMsg;
            fromProtoMsg(message: _124.GaugeByIDResponseProtoMsg): _124.GaugeByIDResponse;
            toProto(message: _124.GaugeByIDResponse): Uint8Array;
            toProtoMsg(message: _124.GaugeByIDResponse): _124.GaugeByIDResponseProtoMsg;
        };
        GaugesRequest: {
            typeUrl: string;
            encode(message: _124.GaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.GaugesRequest;
            fromPartial(object: Partial<_124.GaugesRequest>): _124.GaugesRequest;
            fromAmino(object: _124.GaugesRequestAmino): _124.GaugesRequest;
            toAmino(message: _124.GaugesRequest): _124.GaugesRequestAmino;
            fromAminoMsg(object: _124.GaugesRequestAminoMsg): _124.GaugesRequest;
            toAminoMsg(message: _124.GaugesRequest): _124.GaugesRequestAminoMsg;
            fromProtoMsg(message: _124.GaugesRequestProtoMsg): _124.GaugesRequest;
            toProto(message: _124.GaugesRequest): Uint8Array;
            toProtoMsg(message: _124.GaugesRequest): _124.GaugesRequestProtoMsg;
        };
        GaugesResponse: {
            typeUrl: string;
            encode(message: _124.GaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.GaugesResponse;
            fromPartial(object: Partial<_124.GaugesResponse>): _124.GaugesResponse;
            fromAmino(object: _124.GaugesResponseAmino): _124.GaugesResponse;
            toAmino(message: _124.GaugesResponse): _124.GaugesResponseAmino;
            fromAminoMsg(object: _124.GaugesResponseAminoMsg): _124.GaugesResponse;
            toAminoMsg(message: _124.GaugesResponse): _124.GaugesResponseAminoMsg;
            fromProtoMsg(message: _124.GaugesResponseProtoMsg): _124.GaugesResponse;
            toProto(message: _124.GaugesResponse): Uint8Array;
            toProtoMsg(message: _124.GaugesResponse): _124.GaugesResponseProtoMsg;
        };
        ActiveGaugesRequest: {
            typeUrl: string;
            encode(message: _124.ActiveGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.ActiveGaugesRequest;
            fromPartial(object: Partial<_124.ActiveGaugesRequest>): _124.ActiveGaugesRequest;
            fromAmino(object: _124.ActiveGaugesRequestAmino): _124.ActiveGaugesRequest;
            toAmino(message: _124.ActiveGaugesRequest): _124.ActiveGaugesRequestAmino;
            fromAminoMsg(object: _124.ActiveGaugesRequestAminoMsg): _124.ActiveGaugesRequest;
            toAminoMsg(message: _124.ActiveGaugesRequest): _124.ActiveGaugesRequestAminoMsg;
            fromProtoMsg(message: _124.ActiveGaugesRequestProtoMsg): _124.ActiveGaugesRequest;
            toProto(message: _124.ActiveGaugesRequest): Uint8Array;
            toProtoMsg(message: _124.ActiveGaugesRequest): _124.ActiveGaugesRequestProtoMsg;
        };
        ActiveGaugesResponse: {
            typeUrl: string;
            encode(message: _124.ActiveGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.ActiveGaugesResponse;
            fromPartial(object: Partial<_124.ActiveGaugesResponse>): _124.ActiveGaugesResponse;
            fromAmino(object: _124.ActiveGaugesResponseAmino): _124.ActiveGaugesResponse;
            toAmino(message: _124.ActiveGaugesResponse): _124.ActiveGaugesResponseAmino;
            fromAminoMsg(object: _124.ActiveGaugesResponseAminoMsg): _124.ActiveGaugesResponse;
            toAminoMsg(message: _124.ActiveGaugesResponse): _124.ActiveGaugesResponseAminoMsg;
            fromProtoMsg(message: _124.ActiveGaugesResponseProtoMsg): _124.ActiveGaugesResponse;
            toProto(message: _124.ActiveGaugesResponse): Uint8Array;
            toProtoMsg(message: _124.ActiveGaugesResponse): _124.ActiveGaugesResponseProtoMsg;
        };
        ActiveGaugesPerDenomRequest: {
            typeUrl: string;
            encode(message: _124.ActiveGaugesPerDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.ActiveGaugesPerDenomRequest;
            fromPartial(object: Partial<_124.ActiveGaugesPerDenomRequest>): _124.ActiveGaugesPerDenomRequest;
            fromAmino(object: _124.ActiveGaugesPerDenomRequestAmino): _124.ActiveGaugesPerDenomRequest;
            toAmino(message: _124.ActiveGaugesPerDenomRequest): _124.ActiveGaugesPerDenomRequestAmino;
            fromAminoMsg(object: _124.ActiveGaugesPerDenomRequestAminoMsg): _124.ActiveGaugesPerDenomRequest;
            toAminoMsg(message: _124.ActiveGaugesPerDenomRequest): _124.ActiveGaugesPerDenomRequestAminoMsg;
            fromProtoMsg(message: _124.ActiveGaugesPerDenomRequestProtoMsg): _124.ActiveGaugesPerDenomRequest;
            toProto(message: _124.ActiveGaugesPerDenomRequest): Uint8Array;
            toProtoMsg(message: _124.ActiveGaugesPerDenomRequest): _124.ActiveGaugesPerDenomRequestProtoMsg;
        };
        ActiveGaugesPerDenomResponse: {
            typeUrl: string;
            encode(message: _124.ActiveGaugesPerDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.ActiveGaugesPerDenomResponse;
            fromPartial(object: Partial<_124.ActiveGaugesPerDenomResponse>): _124.ActiveGaugesPerDenomResponse;
            fromAmino(object: _124.ActiveGaugesPerDenomResponseAmino): _124.ActiveGaugesPerDenomResponse;
            toAmino(message: _124.ActiveGaugesPerDenomResponse): _124.ActiveGaugesPerDenomResponseAmino;
            fromAminoMsg(object: _124.ActiveGaugesPerDenomResponseAminoMsg): _124.ActiveGaugesPerDenomResponse;
            toAminoMsg(message: _124.ActiveGaugesPerDenomResponse): _124.ActiveGaugesPerDenomResponseAminoMsg;
            fromProtoMsg(message: _124.ActiveGaugesPerDenomResponseProtoMsg): _124.ActiveGaugesPerDenomResponse;
            toProto(message: _124.ActiveGaugesPerDenomResponse): Uint8Array;
            toProtoMsg(message: _124.ActiveGaugesPerDenomResponse): _124.ActiveGaugesPerDenomResponseProtoMsg;
        };
        UpcomingGaugesRequest: {
            typeUrl: string;
            encode(message: _124.UpcomingGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.UpcomingGaugesRequest;
            fromPartial(object: Partial<_124.UpcomingGaugesRequest>): _124.UpcomingGaugesRequest;
            fromAmino(object: _124.UpcomingGaugesRequestAmino): _124.UpcomingGaugesRequest;
            toAmino(message: _124.UpcomingGaugesRequest): _124.UpcomingGaugesRequestAmino;
            fromAminoMsg(object: _124.UpcomingGaugesRequestAminoMsg): _124.UpcomingGaugesRequest;
            toAminoMsg(message: _124.UpcomingGaugesRequest): _124.UpcomingGaugesRequestAminoMsg;
            fromProtoMsg(message: _124.UpcomingGaugesRequestProtoMsg): _124.UpcomingGaugesRequest;
            toProto(message: _124.UpcomingGaugesRequest): Uint8Array;
            toProtoMsg(message: _124.UpcomingGaugesRequest): _124.UpcomingGaugesRequestProtoMsg;
        };
        UpcomingGaugesResponse: {
            typeUrl: string;
            encode(message: _124.UpcomingGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.UpcomingGaugesResponse;
            fromPartial(object: Partial<_124.UpcomingGaugesResponse>): _124.UpcomingGaugesResponse;
            fromAmino(object: _124.UpcomingGaugesResponseAmino): _124.UpcomingGaugesResponse;
            toAmino(message: _124.UpcomingGaugesResponse): _124.UpcomingGaugesResponseAmino;
            fromAminoMsg(object: _124.UpcomingGaugesResponseAminoMsg): _124.UpcomingGaugesResponse;
            toAminoMsg(message: _124.UpcomingGaugesResponse): _124.UpcomingGaugesResponseAminoMsg;
            fromProtoMsg(message: _124.UpcomingGaugesResponseProtoMsg): _124.UpcomingGaugesResponse;
            toProto(message: _124.UpcomingGaugesResponse): Uint8Array;
            toProtoMsg(message: _124.UpcomingGaugesResponse): _124.UpcomingGaugesResponseProtoMsg;
        };
        UpcomingGaugesPerDenomRequest: {
            typeUrl: string;
            encode(message: _124.UpcomingGaugesPerDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.UpcomingGaugesPerDenomRequest;
            fromPartial(object: Partial<_124.UpcomingGaugesPerDenomRequest>): _124.UpcomingGaugesPerDenomRequest;
            fromAmino(object: _124.UpcomingGaugesPerDenomRequestAmino): _124.UpcomingGaugesPerDenomRequest;
            toAmino(message: _124.UpcomingGaugesPerDenomRequest): _124.UpcomingGaugesPerDenomRequestAmino;
            fromAminoMsg(object: _124.UpcomingGaugesPerDenomRequestAminoMsg): _124.UpcomingGaugesPerDenomRequest;
            toAminoMsg(message: _124.UpcomingGaugesPerDenomRequest): _124.UpcomingGaugesPerDenomRequestAminoMsg;
            fromProtoMsg(message: _124.UpcomingGaugesPerDenomRequestProtoMsg): _124.UpcomingGaugesPerDenomRequest;
            toProto(message: _124.UpcomingGaugesPerDenomRequest): Uint8Array;
            toProtoMsg(message: _124.UpcomingGaugesPerDenomRequest): _124.UpcomingGaugesPerDenomRequestProtoMsg;
        };
        UpcomingGaugesPerDenomResponse: {
            typeUrl: string;
            encode(message: _124.UpcomingGaugesPerDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.UpcomingGaugesPerDenomResponse;
            fromPartial(object: Partial<_124.UpcomingGaugesPerDenomResponse>): _124.UpcomingGaugesPerDenomResponse;
            fromAmino(object: _124.UpcomingGaugesPerDenomResponseAmino): _124.UpcomingGaugesPerDenomResponse;
            toAmino(message: _124.UpcomingGaugesPerDenomResponse): _124.UpcomingGaugesPerDenomResponseAmino;
            fromAminoMsg(object: _124.UpcomingGaugesPerDenomResponseAminoMsg): _124.UpcomingGaugesPerDenomResponse;
            toAminoMsg(message: _124.UpcomingGaugesPerDenomResponse): _124.UpcomingGaugesPerDenomResponseAminoMsg;
            fromProtoMsg(message: _124.UpcomingGaugesPerDenomResponseProtoMsg): _124.UpcomingGaugesPerDenomResponse;
            toProto(message: _124.UpcomingGaugesPerDenomResponse): Uint8Array;
            toProtoMsg(message: _124.UpcomingGaugesPerDenomResponse): _124.UpcomingGaugesPerDenomResponseProtoMsg;
        };
        RewardsEstRequest: {
            typeUrl: string;
            encode(message: _124.RewardsEstRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.RewardsEstRequest;
            fromPartial(object: Partial<_124.RewardsEstRequest>): _124.RewardsEstRequest;
            fromAmino(object: _124.RewardsEstRequestAmino): _124.RewardsEstRequest;
            toAmino(message: _124.RewardsEstRequest): _124.RewardsEstRequestAmino;
            fromAminoMsg(object: _124.RewardsEstRequestAminoMsg): _124.RewardsEstRequest;
            toAminoMsg(message: _124.RewardsEstRequest): _124.RewardsEstRequestAminoMsg;
            fromProtoMsg(message: _124.RewardsEstRequestProtoMsg): _124.RewardsEstRequest;
            toProto(message: _124.RewardsEstRequest): Uint8Array;
            toProtoMsg(message: _124.RewardsEstRequest): _124.RewardsEstRequestProtoMsg;
        };
        RewardsEstResponse: {
            typeUrl: string;
            encode(message: _124.RewardsEstResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.RewardsEstResponse;
            fromPartial(object: Partial<_124.RewardsEstResponse>): _124.RewardsEstResponse;
            fromAmino(object: _124.RewardsEstResponseAmino): _124.RewardsEstResponse;
            toAmino(message: _124.RewardsEstResponse): _124.RewardsEstResponseAmino;
            fromAminoMsg(object: _124.RewardsEstResponseAminoMsg): _124.RewardsEstResponse;
            toAminoMsg(message: _124.RewardsEstResponse): _124.RewardsEstResponseAminoMsg;
            fromProtoMsg(message: _124.RewardsEstResponseProtoMsg): _124.RewardsEstResponse;
            toProto(message: _124.RewardsEstResponse): Uint8Array;
            toProtoMsg(message: _124.RewardsEstResponse): _124.RewardsEstResponseProtoMsg;
        };
        QueryLockableDurationsRequest: {
            typeUrl: string;
            encode(_: _124.QueryLockableDurationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.QueryLockableDurationsRequest;
            fromPartial(_: Partial<_124.QueryLockableDurationsRequest>): _124.QueryLockableDurationsRequest;
            fromAmino(_: _124.QueryLockableDurationsRequestAmino): _124.QueryLockableDurationsRequest;
            toAmino(_: _124.QueryLockableDurationsRequest): _124.QueryLockableDurationsRequestAmino;
            fromAminoMsg(object: _124.QueryLockableDurationsRequestAminoMsg): _124.QueryLockableDurationsRequest;
            toAminoMsg(message: _124.QueryLockableDurationsRequest): _124.QueryLockableDurationsRequestAminoMsg;
            fromProtoMsg(message: _124.QueryLockableDurationsRequestProtoMsg): _124.QueryLockableDurationsRequest;
            toProto(message: _124.QueryLockableDurationsRequest): Uint8Array;
            toProtoMsg(message: _124.QueryLockableDurationsRequest): _124.QueryLockableDurationsRequestProtoMsg;
        };
        QueryLockableDurationsResponse: {
            typeUrl: string;
            encode(message: _124.QueryLockableDurationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.QueryLockableDurationsResponse;
            fromPartial(object: Partial<_124.QueryLockableDurationsResponse>): _124.QueryLockableDurationsResponse;
            fromAmino(object: _124.QueryLockableDurationsResponseAmino): _124.QueryLockableDurationsResponse;
            toAmino(message: _124.QueryLockableDurationsResponse): _124.QueryLockableDurationsResponseAmino;
            fromAminoMsg(object: _124.QueryLockableDurationsResponseAminoMsg): _124.QueryLockableDurationsResponse;
            toAminoMsg(message: _124.QueryLockableDurationsResponse): _124.QueryLockableDurationsResponseAminoMsg;
            fromProtoMsg(message: _124.QueryLockableDurationsResponseProtoMsg): _124.QueryLockableDurationsResponse;
            toProto(message: _124.QueryLockableDurationsResponse): Uint8Array;
            toProtoMsg(message: _124.QueryLockableDurationsResponse): _124.QueryLockableDurationsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _123.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.Params;
            fromPartial(object: Partial<_123.Params>): _123.Params;
            fromAmino(object: _123.ParamsAmino): _123.Params;
            toAmino(message: _123.Params): _123.ParamsAmino;
            fromAminoMsg(object: _123.ParamsAminoMsg): _123.Params;
            toAminoMsg(message: _123.Params): _123.ParamsAminoMsg;
            fromProtoMsg(message: _123.ParamsProtoMsg): _123.Params;
            toProto(message: _123.Params): Uint8Array;
            toProtoMsg(message: _123.Params): _123.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _122.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.GenesisState;
            fromPartial(object: Partial<_122.GenesisState>): _122.GenesisState;
            fromAmino(object: _122.GenesisStateAmino): _122.GenesisState;
            toAmino(message: _122.GenesisState): _122.GenesisStateAmino;
            fromAminoMsg(object: _122.GenesisStateAminoMsg): _122.GenesisState;
            toAminoMsg(message: _122.GenesisState): _122.GenesisStateAminoMsg;
            fromProtoMsg(message: _122.GenesisStateProtoMsg): _122.GenesisState;
            toProto(message: _122.GenesisState): Uint8Array;
            toProtoMsg(message: _122.GenesisState): _122.GenesisStateProtoMsg;
        };
        Gauge: {
            typeUrl: string;
            encode(message: _121.Gauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.Gauge;
            fromPartial(object: Partial<_121.Gauge>): _121.Gauge;
            fromAmino(object: _121.GaugeAmino): _121.Gauge;
            toAmino(message: _121.Gauge): _121.GaugeAmino;
            fromAminoMsg(object: _121.GaugeAminoMsg): _121.Gauge;
            toAminoMsg(message: _121.Gauge): _121.GaugeAminoMsg;
            fromProtoMsg(message: _121.GaugeProtoMsg): _121.Gauge;
            toProto(message: _121.Gauge): Uint8Array;
            toProtoMsg(message: _121.Gauge): _121.GaugeProtoMsg;
        };
        LockableDurationsInfo: {
            typeUrl: string;
            encode(message: _121.LockableDurationsInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.LockableDurationsInfo;
            fromPartial(object: Partial<_121.LockableDurationsInfo>): _121.LockableDurationsInfo;
            fromAmino(object: _121.LockableDurationsInfoAmino): _121.LockableDurationsInfo;
            toAmino(message: _121.LockableDurationsInfo): _121.LockableDurationsInfoAmino;
            fromAminoMsg(object: _121.LockableDurationsInfoAminoMsg): _121.LockableDurationsInfo;
            toAminoMsg(message: _121.LockableDurationsInfo): _121.LockableDurationsInfoAminoMsg;
            fromProtoMsg(message: _121.LockableDurationsInfoProtoMsg): _121.LockableDurationsInfo;
            toProto(message: _121.LockableDurationsInfo): Uint8Array;
            toProtoMsg(message: _121.LockableDurationsInfo): _121.LockableDurationsInfoProtoMsg;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _326.MsgClientImpl;
        QueryClientImpl: typeof _310.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleBalance(request?: _129.ModuleBalanceRequest): Promise<_129.ModuleBalanceResponse>;
            moduleLockedAmount(request?: _129.ModuleLockedAmountRequest): Promise<_129.ModuleLockedAmountResponse>;
            accountUnlockableCoins(request: _129.AccountUnlockableCoinsRequest): Promise<_129.AccountUnlockableCoinsResponse>;
            accountUnlockingCoins(request: _129.AccountUnlockingCoinsRequest): Promise<_129.AccountUnlockingCoinsResponse>;
            accountLockedCoins(request: _129.AccountLockedCoinsRequest): Promise<_129.AccountLockedCoinsResponse>;
            accountLockedPastTime(request: _129.AccountLockedPastTimeRequest): Promise<_129.AccountLockedPastTimeResponse>;
            accountLockedPastTimeNotUnlockingOnly(request: _129.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_129.AccountLockedPastTimeNotUnlockingOnlyResponse>;
            accountUnlockedBeforeTime(request: _129.AccountUnlockedBeforeTimeRequest): Promise<_129.AccountUnlockedBeforeTimeResponse>;
            accountLockedPastTimeDenom(request: _129.AccountLockedPastTimeDenomRequest): Promise<_129.AccountLockedPastTimeDenomResponse>;
            lockedDenom(request: _129.LockedDenomRequest): Promise<_129.LockedDenomResponse>;
            lockedByID(request: _129.LockedRequest): Promise<_129.LockedResponse>;
            lockRewardReceiver(request: _129.LockRewardReceiverRequest): Promise<_129.LockRewardReceiverResponse>;
            nextLockID(request?: _129.NextLockIDRequest): Promise<_129.NextLockIDResponse>;
            syntheticLockupsByLockupID(request: _129.SyntheticLockupsByLockupIDRequest): Promise<_129.SyntheticLockupsByLockupIDResponse>;
            syntheticLockupByLockupID(request: _129.SyntheticLockupByLockupIDRequest): Promise<_129.SyntheticLockupByLockupIDResponse>;
            accountLockedLongerDuration(request: _129.AccountLockedLongerDurationRequest): Promise<_129.AccountLockedLongerDurationResponse>;
            accountLockedDuration(request: _129.AccountLockedDurationRequest): Promise<_129.AccountLockedDurationResponse>;
            accountLockedLongerDurationNotUnlockingOnly(request: _129.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_129.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
            accountLockedLongerDurationDenom(request: _129.AccountLockedLongerDurationDenomRequest): Promise<_129.AccountLockedLongerDurationDenomResponse>;
            params(request?: _129.QueryParamsRequest): Promise<_129.QueryParamsResponse>;
        };
        LCDQueryClient: typeof _292.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _130.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _130.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _130.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _130.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                forceUnlock(value: _130.MsgForceUnlock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setRewardReceiverAddress(value: _130.MsgSetRewardReceiverAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _130.MsgLockTokens): {
                    typeUrl: string;
                    value: _130.MsgLockTokens;
                };
                beginUnlockingAll(value: _130.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _130.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _130.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _130.MsgBeginUnlocking;
                };
                extendLockup(value: _130.MsgExtendLockup): {
                    typeUrl: string;
                    value: _130.MsgExtendLockup;
                };
                forceUnlock(value: _130.MsgForceUnlock): {
                    typeUrl: string;
                    value: _130.MsgForceUnlock;
                };
                setRewardReceiverAddress(value: _130.MsgSetRewardReceiverAddress): {
                    typeUrl: string;
                    value: _130.MsgSetRewardReceiverAddress;
                };
            };
            fromPartial: {
                lockTokens(value: _130.MsgLockTokens): {
                    typeUrl: string;
                    value: _130.MsgLockTokens;
                };
                beginUnlockingAll(value: _130.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _130.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _130.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _130.MsgBeginUnlocking;
                };
                extendLockup(value: _130.MsgExtendLockup): {
                    typeUrl: string;
                    value: _130.MsgExtendLockup;
                };
                forceUnlock(value: _130.MsgForceUnlock): {
                    typeUrl: string;
                    value: _130.MsgForceUnlock;
                };
                setRewardReceiverAddress(value: _130.MsgSetRewardReceiverAddress): {
                    typeUrl: string;
                    value: _130.MsgSetRewardReceiverAddress;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: (message: _130.MsgLockTokens) => _130.MsgLockTokensAmino;
                fromAmino: (object: _130.MsgLockTokensAmino) => _130.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: (message: _130.MsgBeginUnlockingAll) => _130.MsgBeginUnlockingAllAmino;
                fromAmino: (object: _130.MsgBeginUnlockingAllAmino) => _130.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: (message: _130.MsgBeginUnlocking) => _130.MsgBeginUnlockingAmino;
                fromAmino: (object: _130.MsgBeginUnlockingAmino) => _130.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: (message: _130.MsgExtendLockup) => _130.MsgExtendLockupAmino;
                fromAmino: (object: _130.MsgExtendLockupAmino) => _130.MsgExtendLockup;
            };
            "/osmosis.lockup.MsgForceUnlock": {
                aminoType: string;
                toAmino: (message: _130.MsgForceUnlock) => _130.MsgForceUnlockAmino;
                fromAmino: (object: _130.MsgForceUnlockAmino) => _130.MsgForceUnlock;
            };
            "/osmosis.lockup.MsgSetRewardReceiverAddress": {
                aminoType: string;
                toAmino: (message: _130.MsgSetRewardReceiverAddress) => _130.MsgSetRewardReceiverAddressAmino;
                fromAmino: (object: _130.MsgSetRewardReceiverAddressAmino) => _130.MsgSetRewardReceiverAddress;
            };
        };
        MsgLockTokens: {
            typeUrl: string;
            encode(message: _130.MsgLockTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.MsgLockTokens;
            fromPartial(object: Partial<_130.MsgLockTokens>): _130.MsgLockTokens;
            fromAmino(object: _130.MsgLockTokensAmino): _130.MsgLockTokens;
            toAmino(message: _130.MsgLockTokens): _130.MsgLockTokensAmino;
            fromAminoMsg(object: _130.MsgLockTokensAminoMsg): _130.MsgLockTokens;
            toAminoMsg(message: _130.MsgLockTokens): _130.MsgLockTokensAminoMsg;
            fromProtoMsg(message: _130.MsgLockTokensProtoMsg): _130.MsgLockTokens;
            toProto(message: _130.MsgLockTokens): Uint8Array;
            toProtoMsg(message: _130.MsgLockTokens): _130.MsgLockTokensProtoMsg;
        };
        MsgLockTokensResponse: {
            typeUrl: string;
            encode(message: _130.MsgLockTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.MsgLockTokensResponse;
            fromPartial(object: Partial<_130.MsgLockTokensResponse>): _130.MsgLockTokensResponse;
            fromAmino(object: _130.MsgLockTokensResponseAmino): _130.MsgLockTokensResponse;
            toAmino(message: _130.MsgLockTokensResponse): _130.MsgLockTokensResponseAmino;
            fromAminoMsg(object: _130.MsgLockTokensResponseAminoMsg): _130.MsgLockTokensResponse;
            toAminoMsg(message: _130.MsgLockTokensResponse): _130.MsgLockTokensResponseAminoMsg;
            fromProtoMsg(message: _130.MsgLockTokensResponseProtoMsg): _130.MsgLockTokensResponse;
            toProto(message: _130.MsgLockTokensResponse): Uint8Array;
            toProtoMsg(message: _130.MsgLockTokensResponse): _130.MsgLockTokensResponseProtoMsg;
        };
        MsgBeginUnlockingAll: {
            typeUrl: string;
            encode(message: _130.MsgBeginUnlockingAll, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.MsgBeginUnlockingAll;
            fromPartial(object: Partial<_130.MsgBeginUnlockingAll>): _130.MsgBeginUnlockingAll;
            fromAmino(object: _130.MsgBeginUnlockingAllAmino): _130.MsgBeginUnlockingAll;
            toAmino(message: _130.MsgBeginUnlockingAll): _130.MsgBeginUnlockingAllAmino;
            fromAminoMsg(object: _130.MsgBeginUnlockingAllAminoMsg): _130.MsgBeginUnlockingAll;
            toAminoMsg(message: _130.MsgBeginUnlockingAll): _130.MsgBeginUnlockingAllAminoMsg;
            fromProtoMsg(message: _130.MsgBeginUnlockingAllProtoMsg): _130.MsgBeginUnlockingAll;
            toProto(message: _130.MsgBeginUnlockingAll): Uint8Array;
            toProtoMsg(message: _130.MsgBeginUnlockingAll): _130.MsgBeginUnlockingAllProtoMsg;
        };
        MsgBeginUnlockingAllResponse: {
            typeUrl: string;
            encode(message: _130.MsgBeginUnlockingAllResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.MsgBeginUnlockingAllResponse;
            fromPartial(object: Partial<_130.MsgBeginUnlockingAllResponse>): _130.MsgBeginUnlockingAllResponse;
            fromAmino(object: _130.MsgBeginUnlockingAllResponseAmino): _130.MsgBeginUnlockingAllResponse;
            toAmino(message: _130.MsgBeginUnlockingAllResponse): _130.MsgBeginUnlockingAllResponseAmino;
            fromAminoMsg(object: _130.MsgBeginUnlockingAllResponseAminoMsg): _130.MsgBeginUnlockingAllResponse;
            toAminoMsg(message: _130.MsgBeginUnlockingAllResponse): _130.MsgBeginUnlockingAllResponseAminoMsg;
            fromProtoMsg(message: _130.MsgBeginUnlockingAllResponseProtoMsg): _130.MsgBeginUnlockingAllResponse;
            toProto(message: _130.MsgBeginUnlockingAllResponse): Uint8Array;
            toProtoMsg(message: _130.MsgBeginUnlockingAllResponse): _130.MsgBeginUnlockingAllResponseProtoMsg;
        };
        MsgBeginUnlocking: {
            typeUrl: string;
            encode(message: _130.MsgBeginUnlocking, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.MsgBeginUnlocking;
            fromPartial(object: Partial<_130.MsgBeginUnlocking>): _130.MsgBeginUnlocking;
            fromAmino(object: _130.MsgBeginUnlockingAmino): _130.MsgBeginUnlocking;
            toAmino(message: _130.MsgBeginUnlocking): _130.MsgBeginUnlockingAmino;
            fromAminoMsg(object: _130.MsgBeginUnlockingAminoMsg): _130.MsgBeginUnlocking;
            toAminoMsg(message: _130.MsgBeginUnlocking): _130.MsgBeginUnlockingAminoMsg;
            fromProtoMsg(message: _130.MsgBeginUnlockingProtoMsg): _130.MsgBeginUnlocking;
            toProto(message: _130.MsgBeginUnlocking): Uint8Array;
            toProtoMsg(message: _130.MsgBeginUnlocking): _130.MsgBeginUnlockingProtoMsg;
        };
        MsgBeginUnlockingResponse: {
            typeUrl: string;
            encode(message: _130.MsgBeginUnlockingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.MsgBeginUnlockingResponse;
            fromPartial(object: Partial<_130.MsgBeginUnlockingResponse>): _130.MsgBeginUnlockingResponse;
            fromAmino(object: _130.MsgBeginUnlockingResponseAmino): _130.MsgBeginUnlockingResponse;
            toAmino(message: _130.MsgBeginUnlockingResponse): _130.MsgBeginUnlockingResponseAmino;
            fromAminoMsg(object: _130.MsgBeginUnlockingResponseAminoMsg): _130.MsgBeginUnlockingResponse;
            toAminoMsg(message: _130.MsgBeginUnlockingResponse): _130.MsgBeginUnlockingResponseAminoMsg;
            fromProtoMsg(message: _130.MsgBeginUnlockingResponseProtoMsg): _130.MsgBeginUnlockingResponse;
            toProto(message: _130.MsgBeginUnlockingResponse): Uint8Array;
            toProtoMsg(message: _130.MsgBeginUnlockingResponse): _130.MsgBeginUnlockingResponseProtoMsg;
        };
        MsgExtendLockup: {
            typeUrl: string;
            encode(message: _130.MsgExtendLockup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.MsgExtendLockup;
            fromPartial(object: Partial<_130.MsgExtendLockup>): _130.MsgExtendLockup;
            fromAmino(object: _130.MsgExtendLockupAmino): _130.MsgExtendLockup;
            toAmino(message: _130.MsgExtendLockup): _130.MsgExtendLockupAmino;
            fromAminoMsg(object: _130.MsgExtendLockupAminoMsg): _130.MsgExtendLockup;
            toAminoMsg(message: _130.MsgExtendLockup): _130.MsgExtendLockupAminoMsg;
            fromProtoMsg(message: _130.MsgExtendLockupProtoMsg): _130.MsgExtendLockup;
            toProto(message: _130.MsgExtendLockup): Uint8Array;
            toProtoMsg(message: _130.MsgExtendLockup): _130.MsgExtendLockupProtoMsg;
        };
        MsgExtendLockupResponse: {
            typeUrl: string;
            encode(message: _130.MsgExtendLockupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.MsgExtendLockupResponse;
            fromPartial(object: Partial<_130.MsgExtendLockupResponse>): _130.MsgExtendLockupResponse;
            fromAmino(object: _130.MsgExtendLockupResponseAmino): _130.MsgExtendLockupResponse;
            toAmino(message: _130.MsgExtendLockupResponse): _130.MsgExtendLockupResponseAmino;
            fromAminoMsg(object: _130.MsgExtendLockupResponseAminoMsg): _130.MsgExtendLockupResponse;
            toAminoMsg(message: _130.MsgExtendLockupResponse): _130.MsgExtendLockupResponseAminoMsg;
            fromProtoMsg(message: _130.MsgExtendLockupResponseProtoMsg): _130.MsgExtendLockupResponse;
            toProto(message: _130.MsgExtendLockupResponse): Uint8Array;
            toProtoMsg(message: _130.MsgExtendLockupResponse): _130.MsgExtendLockupResponseProtoMsg;
        };
        MsgForceUnlock: {
            typeUrl: string;
            encode(message: _130.MsgForceUnlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.MsgForceUnlock;
            fromPartial(object: Partial<_130.MsgForceUnlock>): _130.MsgForceUnlock;
            fromAmino(object: _130.MsgForceUnlockAmino): _130.MsgForceUnlock;
            toAmino(message: _130.MsgForceUnlock): _130.MsgForceUnlockAmino;
            fromAminoMsg(object: _130.MsgForceUnlockAminoMsg): _130.MsgForceUnlock;
            toAminoMsg(message: _130.MsgForceUnlock): _130.MsgForceUnlockAminoMsg;
            fromProtoMsg(message: _130.MsgForceUnlockProtoMsg): _130.MsgForceUnlock;
            toProto(message: _130.MsgForceUnlock): Uint8Array;
            toProtoMsg(message: _130.MsgForceUnlock): _130.MsgForceUnlockProtoMsg;
        };
        MsgForceUnlockResponse: {
            typeUrl: string;
            encode(message: _130.MsgForceUnlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.MsgForceUnlockResponse;
            fromPartial(object: Partial<_130.MsgForceUnlockResponse>): _130.MsgForceUnlockResponse;
            fromAmino(object: _130.MsgForceUnlockResponseAmino): _130.MsgForceUnlockResponse;
            toAmino(message: _130.MsgForceUnlockResponse): _130.MsgForceUnlockResponseAmino;
            fromAminoMsg(object: _130.MsgForceUnlockResponseAminoMsg): _130.MsgForceUnlockResponse;
            toAminoMsg(message: _130.MsgForceUnlockResponse): _130.MsgForceUnlockResponseAminoMsg;
            fromProtoMsg(message: _130.MsgForceUnlockResponseProtoMsg): _130.MsgForceUnlockResponse;
            toProto(message: _130.MsgForceUnlockResponse): Uint8Array;
            toProtoMsg(message: _130.MsgForceUnlockResponse): _130.MsgForceUnlockResponseProtoMsg;
        };
        MsgSetRewardReceiverAddress: {
            typeUrl: string;
            encode(message: _130.MsgSetRewardReceiverAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.MsgSetRewardReceiverAddress;
            fromPartial(object: Partial<_130.MsgSetRewardReceiverAddress>): _130.MsgSetRewardReceiverAddress;
            fromAmino(object: _130.MsgSetRewardReceiverAddressAmino): _130.MsgSetRewardReceiverAddress;
            toAmino(message: _130.MsgSetRewardReceiverAddress): _130.MsgSetRewardReceiverAddressAmino;
            fromAminoMsg(object: _130.MsgSetRewardReceiverAddressAminoMsg): _130.MsgSetRewardReceiverAddress;
            toAminoMsg(message: _130.MsgSetRewardReceiverAddress): _130.MsgSetRewardReceiverAddressAminoMsg;
            fromProtoMsg(message: _130.MsgSetRewardReceiverAddressProtoMsg): _130.MsgSetRewardReceiverAddress;
            toProto(message: _130.MsgSetRewardReceiverAddress): Uint8Array;
            toProtoMsg(message: _130.MsgSetRewardReceiverAddress): _130.MsgSetRewardReceiverAddressProtoMsg;
        };
        MsgSetRewardReceiverAddressResponse: {
            typeUrl: string;
            encode(message: _130.MsgSetRewardReceiverAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.MsgSetRewardReceiverAddressResponse;
            fromPartial(object: Partial<_130.MsgSetRewardReceiverAddressResponse>): _130.MsgSetRewardReceiverAddressResponse;
            fromAmino(object: _130.MsgSetRewardReceiverAddressResponseAmino): _130.MsgSetRewardReceiverAddressResponse;
            toAmino(message: _130.MsgSetRewardReceiverAddressResponse): _130.MsgSetRewardReceiverAddressResponseAmino;
            fromAminoMsg(object: _130.MsgSetRewardReceiverAddressResponseAminoMsg): _130.MsgSetRewardReceiverAddressResponse;
            toAminoMsg(message: _130.MsgSetRewardReceiverAddressResponse): _130.MsgSetRewardReceiverAddressResponseAminoMsg;
            fromProtoMsg(message: _130.MsgSetRewardReceiverAddressResponseProtoMsg): _130.MsgSetRewardReceiverAddressResponse;
            toProto(message: _130.MsgSetRewardReceiverAddressResponse): Uint8Array;
            toProtoMsg(message: _130.MsgSetRewardReceiverAddressResponse): _130.MsgSetRewardReceiverAddressResponseProtoMsg;
        };
        ModuleBalanceRequest: {
            typeUrl: string;
            encode(_: _129.ModuleBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.ModuleBalanceRequest;
            fromPartial(_: Partial<_129.ModuleBalanceRequest>): _129.ModuleBalanceRequest;
            fromAmino(_: _129.ModuleBalanceRequestAmino): _129.ModuleBalanceRequest;
            toAmino(_: _129.ModuleBalanceRequest): _129.ModuleBalanceRequestAmino;
            fromAminoMsg(object: _129.ModuleBalanceRequestAminoMsg): _129.ModuleBalanceRequest;
            toAminoMsg(message: _129.ModuleBalanceRequest): _129.ModuleBalanceRequestAminoMsg;
            fromProtoMsg(message: _129.ModuleBalanceRequestProtoMsg): _129.ModuleBalanceRequest;
            toProto(message: _129.ModuleBalanceRequest): Uint8Array;
            toProtoMsg(message: _129.ModuleBalanceRequest): _129.ModuleBalanceRequestProtoMsg;
        };
        ModuleBalanceResponse: {
            typeUrl: string;
            encode(message: _129.ModuleBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.ModuleBalanceResponse;
            fromPartial(object: Partial<_129.ModuleBalanceResponse>): _129.ModuleBalanceResponse;
            fromAmino(object: _129.ModuleBalanceResponseAmino): _129.ModuleBalanceResponse;
            toAmino(message: _129.ModuleBalanceResponse): _129.ModuleBalanceResponseAmino;
            fromAminoMsg(object: _129.ModuleBalanceResponseAminoMsg): _129.ModuleBalanceResponse;
            toAminoMsg(message: _129.ModuleBalanceResponse): _129.ModuleBalanceResponseAminoMsg;
            fromProtoMsg(message: _129.ModuleBalanceResponseProtoMsg): _129.ModuleBalanceResponse;
            toProto(message: _129.ModuleBalanceResponse): Uint8Array;
            toProtoMsg(message: _129.ModuleBalanceResponse): _129.ModuleBalanceResponseProtoMsg;
        };
        ModuleLockedAmountRequest: {
            typeUrl: string;
            encode(_: _129.ModuleLockedAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.ModuleLockedAmountRequest;
            fromPartial(_: Partial<_129.ModuleLockedAmountRequest>): _129.ModuleLockedAmountRequest;
            fromAmino(_: _129.ModuleLockedAmountRequestAmino): _129.ModuleLockedAmountRequest;
            toAmino(_: _129.ModuleLockedAmountRequest): _129.ModuleLockedAmountRequestAmino;
            fromAminoMsg(object: _129.ModuleLockedAmountRequestAminoMsg): _129.ModuleLockedAmountRequest;
            toAminoMsg(message: _129.ModuleLockedAmountRequest): _129.ModuleLockedAmountRequestAminoMsg;
            fromProtoMsg(message: _129.ModuleLockedAmountRequestProtoMsg): _129.ModuleLockedAmountRequest;
            toProto(message: _129.ModuleLockedAmountRequest): Uint8Array;
            toProtoMsg(message: _129.ModuleLockedAmountRequest): _129.ModuleLockedAmountRequestProtoMsg;
        };
        ModuleLockedAmountResponse: {
            typeUrl: string;
            encode(message: _129.ModuleLockedAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.ModuleLockedAmountResponse;
            fromPartial(object: Partial<_129.ModuleLockedAmountResponse>): _129.ModuleLockedAmountResponse;
            fromAmino(object: _129.ModuleLockedAmountResponseAmino): _129.ModuleLockedAmountResponse;
            toAmino(message: _129.ModuleLockedAmountResponse): _129.ModuleLockedAmountResponseAmino;
            fromAminoMsg(object: _129.ModuleLockedAmountResponseAminoMsg): _129.ModuleLockedAmountResponse;
            toAminoMsg(message: _129.ModuleLockedAmountResponse): _129.ModuleLockedAmountResponseAminoMsg;
            fromProtoMsg(message: _129.ModuleLockedAmountResponseProtoMsg): _129.ModuleLockedAmountResponse;
            toProto(message: _129.ModuleLockedAmountResponse): Uint8Array;
            toProtoMsg(message: _129.ModuleLockedAmountResponse): _129.ModuleLockedAmountResponseProtoMsg;
        };
        AccountUnlockableCoinsRequest: {
            typeUrl: string;
            encode(message: _129.AccountUnlockableCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AccountUnlockableCoinsRequest;
            fromPartial(object: Partial<_129.AccountUnlockableCoinsRequest>): _129.AccountUnlockableCoinsRequest;
            fromAmino(object: _129.AccountUnlockableCoinsRequestAmino): _129.AccountUnlockableCoinsRequest;
            toAmino(message: _129.AccountUnlockableCoinsRequest): _129.AccountUnlockableCoinsRequestAmino;
            fromAminoMsg(object: _129.AccountUnlockableCoinsRequestAminoMsg): _129.AccountUnlockableCoinsRequest;
            toAminoMsg(message: _129.AccountUnlockableCoinsRequest): _129.AccountUnlockableCoinsRequestAminoMsg;
            fromProtoMsg(message: _129.AccountUnlockableCoinsRequestProtoMsg): _129.AccountUnlockableCoinsRequest;
            toProto(message: _129.AccountUnlockableCoinsRequest): Uint8Array;
            toProtoMsg(message: _129.AccountUnlockableCoinsRequest): _129.AccountUnlockableCoinsRequestProtoMsg;
        };
        AccountUnlockableCoinsResponse: {
            typeUrl: string;
            encode(message: _129.AccountUnlockableCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AccountUnlockableCoinsResponse;
            fromPartial(object: Partial<_129.AccountUnlockableCoinsResponse>): _129.AccountUnlockableCoinsResponse;
            fromAmino(object: _129.AccountUnlockableCoinsResponseAmino): _129.AccountUnlockableCoinsResponse;
            toAmino(message: _129.AccountUnlockableCoinsResponse): _129.AccountUnlockableCoinsResponseAmino;
            fromAminoMsg(object: _129.AccountUnlockableCoinsResponseAminoMsg): _129.AccountUnlockableCoinsResponse;
            toAminoMsg(message: _129.AccountUnlockableCoinsResponse): _129.AccountUnlockableCoinsResponseAminoMsg;
            fromProtoMsg(message: _129.AccountUnlockableCoinsResponseProtoMsg): _129.AccountUnlockableCoinsResponse;
            toProto(message: _129.AccountUnlockableCoinsResponse): Uint8Array;
            toProtoMsg(message: _129.AccountUnlockableCoinsResponse): _129.AccountUnlockableCoinsResponseProtoMsg;
        };
        AccountUnlockingCoinsRequest: {
            typeUrl: string;
            encode(message: _129.AccountUnlockingCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AccountUnlockingCoinsRequest;
            fromPartial(object: Partial<_129.AccountUnlockingCoinsRequest>): _129.AccountUnlockingCoinsRequest;
            fromAmino(object: _129.AccountUnlockingCoinsRequestAmino): _129.AccountUnlockingCoinsRequest;
            toAmino(message: _129.AccountUnlockingCoinsRequest): _129.AccountUnlockingCoinsRequestAmino;
            fromAminoMsg(object: _129.AccountUnlockingCoinsRequestAminoMsg): _129.AccountUnlockingCoinsRequest;
            toAminoMsg(message: _129.AccountUnlockingCoinsRequest): _129.AccountUnlockingCoinsRequestAminoMsg;
            fromProtoMsg(message: _129.AccountUnlockingCoinsRequestProtoMsg): _129.AccountUnlockingCoinsRequest;
            toProto(message: _129.AccountUnlockingCoinsRequest): Uint8Array;
            toProtoMsg(message: _129.AccountUnlockingCoinsRequest): _129.AccountUnlockingCoinsRequestProtoMsg;
        };
        AccountUnlockingCoinsResponse: {
            typeUrl: string;
            encode(message: _129.AccountUnlockingCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AccountUnlockingCoinsResponse;
            fromPartial(object: Partial<_129.AccountUnlockingCoinsResponse>): _129.AccountUnlockingCoinsResponse;
            fromAmino(object: _129.AccountUnlockingCoinsResponseAmino): _129.AccountUnlockingCoinsResponse;
            toAmino(message: _129.AccountUnlockingCoinsResponse): _129.AccountUnlockingCoinsResponseAmino;
            fromAminoMsg(object: _129.AccountUnlockingCoinsResponseAminoMsg): _129.AccountUnlockingCoinsResponse;
            toAminoMsg(message: _129.AccountUnlockingCoinsResponse): _129.AccountUnlockingCoinsResponseAminoMsg;
            fromProtoMsg(message: _129.AccountUnlockingCoinsResponseProtoMsg): _129.AccountUnlockingCoinsResponse;
            toProto(message: _129.AccountUnlockingCoinsResponse): Uint8Array;
            toProtoMsg(message: _129.AccountUnlockingCoinsResponse): _129.AccountUnlockingCoinsResponseProtoMsg;
        };
        AccountLockedCoinsRequest: {
            typeUrl: string;
            encode(message: _129.AccountLockedCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AccountLockedCoinsRequest;
            fromPartial(object: Partial<_129.AccountLockedCoinsRequest>): _129.AccountLockedCoinsRequest;
            fromAmino(object: _129.AccountLockedCoinsRequestAmino): _129.AccountLockedCoinsRequest;
            toAmino(message: _129.AccountLockedCoinsRequest): _129.AccountLockedCoinsRequestAmino;
            fromAminoMsg(object: _129.AccountLockedCoinsRequestAminoMsg): _129.AccountLockedCoinsRequest;
            toAminoMsg(message: _129.AccountLockedCoinsRequest): _129.AccountLockedCoinsRequestAminoMsg;
            fromProtoMsg(message: _129.AccountLockedCoinsRequestProtoMsg): _129.AccountLockedCoinsRequest;
            toProto(message: _129.AccountLockedCoinsRequest): Uint8Array;
            toProtoMsg(message: _129.AccountLockedCoinsRequest): _129.AccountLockedCoinsRequestProtoMsg;
        };
        AccountLockedCoinsResponse: {
            typeUrl: string;
            encode(message: _129.AccountLockedCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AccountLockedCoinsResponse;
            fromPartial(object: Partial<_129.AccountLockedCoinsResponse>): _129.AccountLockedCoinsResponse;
            fromAmino(object: _129.AccountLockedCoinsResponseAmino): _129.AccountLockedCoinsResponse;
            toAmino(message: _129.AccountLockedCoinsResponse): _129.AccountLockedCoinsResponseAmino;
            fromAminoMsg(object: _129.AccountLockedCoinsResponseAminoMsg): _129.AccountLockedCoinsResponse;
            toAminoMsg(message: _129.AccountLockedCoinsResponse): _129.AccountLockedCoinsResponseAminoMsg;
            fromProtoMsg(message: _129.AccountLockedCoinsResponseProtoMsg): _129.AccountLockedCoinsResponse;
            toProto(message: _129.AccountLockedCoinsResponse): Uint8Array;
            toProtoMsg(message: _129.AccountLockedCoinsResponse): _129.AccountLockedCoinsResponseProtoMsg;
        };
        AccountLockedPastTimeRequest: {
            typeUrl: string;
            encode(message: _129.AccountLockedPastTimeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AccountLockedPastTimeRequest;
            fromPartial(object: Partial<_129.AccountLockedPastTimeRequest>): _129.AccountLockedPastTimeRequest;
            fromAmino(object: _129.AccountLockedPastTimeRequestAmino): _129.AccountLockedPastTimeRequest;
            toAmino(message: _129.AccountLockedPastTimeRequest): _129.AccountLockedPastTimeRequestAmino;
            fromAminoMsg(object: _129.AccountLockedPastTimeRequestAminoMsg): _129.AccountLockedPastTimeRequest;
            toAminoMsg(message: _129.AccountLockedPastTimeRequest): _129.AccountLockedPastTimeRequestAminoMsg;
            fromProtoMsg(message: _129.AccountLockedPastTimeRequestProtoMsg): _129.AccountLockedPastTimeRequest;
            toProto(message: _129.AccountLockedPastTimeRequest): Uint8Array;
            toProtoMsg(message: _129.AccountLockedPastTimeRequest): _129.AccountLockedPastTimeRequestProtoMsg;
        };
        AccountLockedPastTimeResponse: {
            typeUrl: string;
            encode(message: _129.AccountLockedPastTimeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AccountLockedPastTimeResponse;
            fromPartial(object: Partial<_129.AccountLockedPastTimeResponse>): _129.AccountLockedPastTimeResponse;
            fromAmino(object: _129.AccountLockedPastTimeResponseAmino): _129.AccountLockedPastTimeResponse;
            toAmino(message: _129.AccountLockedPastTimeResponse): _129.AccountLockedPastTimeResponseAmino;
            fromAminoMsg(object: _129.AccountLockedPastTimeResponseAminoMsg): _129.AccountLockedPastTimeResponse;
            toAminoMsg(message: _129.AccountLockedPastTimeResponse): _129.AccountLockedPastTimeResponseAminoMsg;
            fromProtoMsg(message: _129.AccountLockedPastTimeResponseProtoMsg): _129.AccountLockedPastTimeResponse;
            toProto(message: _129.AccountLockedPastTimeResponse): Uint8Array;
            toProtoMsg(message: _129.AccountLockedPastTimeResponse): _129.AccountLockedPastTimeResponseProtoMsg;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            typeUrl: string;
            encode(message: _129.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_129.AccountLockedPastTimeNotUnlockingOnlyRequest>): _129.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromAmino(object: _129.AccountLockedPastTimeNotUnlockingOnlyRequestAmino): _129.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAmino(message: _129.AccountLockedPastTimeNotUnlockingOnlyRequest): _129.AccountLockedPastTimeNotUnlockingOnlyRequestAmino;
            fromAminoMsg(object: _129.AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg): _129.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAminoMsg(message: _129.AccountLockedPastTimeNotUnlockingOnlyRequest): _129.AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg;
            fromProtoMsg(message: _129.AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg): _129.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toProto(message: _129.AccountLockedPastTimeNotUnlockingOnlyRequest): Uint8Array;
            toProtoMsg(message: _129.AccountLockedPastTimeNotUnlockingOnlyRequest): _129.AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            typeUrl: string;
            encode(message: _129.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_129.AccountLockedPastTimeNotUnlockingOnlyResponse>): _129.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromAmino(object: _129.AccountLockedPastTimeNotUnlockingOnlyResponseAmino): _129.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAmino(message: _129.AccountLockedPastTimeNotUnlockingOnlyResponse): _129.AccountLockedPastTimeNotUnlockingOnlyResponseAmino;
            fromAminoMsg(object: _129.AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg): _129.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAminoMsg(message: _129.AccountLockedPastTimeNotUnlockingOnlyResponse): _129.AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg;
            fromProtoMsg(message: _129.AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg): _129.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toProto(message: _129.AccountLockedPastTimeNotUnlockingOnlyResponse): Uint8Array;
            toProtoMsg(message: _129.AccountLockedPastTimeNotUnlockingOnlyResponse): _129.AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg;
        };
        AccountUnlockedBeforeTimeRequest: {
            typeUrl: string;
            encode(message: _129.AccountUnlockedBeforeTimeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AccountUnlockedBeforeTimeRequest;
            fromPartial(object: Partial<_129.AccountUnlockedBeforeTimeRequest>): _129.AccountUnlockedBeforeTimeRequest;
            fromAmino(object: _129.AccountUnlockedBeforeTimeRequestAmino): _129.AccountUnlockedBeforeTimeRequest;
            toAmino(message: _129.AccountUnlockedBeforeTimeRequest): _129.AccountUnlockedBeforeTimeRequestAmino;
            fromAminoMsg(object: _129.AccountUnlockedBeforeTimeRequestAminoMsg): _129.AccountUnlockedBeforeTimeRequest;
            toAminoMsg(message: _129.AccountUnlockedBeforeTimeRequest): _129.AccountUnlockedBeforeTimeRequestAminoMsg;
            fromProtoMsg(message: _129.AccountUnlockedBeforeTimeRequestProtoMsg): _129.AccountUnlockedBeforeTimeRequest;
            toProto(message: _129.AccountUnlockedBeforeTimeRequest): Uint8Array;
            toProtoMsg(message: _129.AccountUnlockedBeforeTimeRequest): _129.AccountUnlockedBeforeTimeRequestProtoMsg;
        };
        AccountUnlockedBeforeTimeResponse: {
            typeUrl: string;
            encode(message: _129.AccountUnlockedBeforeTimeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AccountUnlockedBeforeTimeResponse;
            fromPartial(object: Partial<_129.AccountUnlockedBeforeTimeResponse>): _129.AccountUnlockedBeforeTimeResponse;
            fromAmino(object: _129.AccountUnlockedBeforeTimeResponseAmino): _129.AccountUnlockedBeforeTimeResponse;
            toAmino(message: _129.AccountUnlockedBeforeTimeResponse): _129.AccountUnlockedBeforeTimeResponseAmino;
            fromAminoMsg(object: _129.AccountUnlockedBeforeTimeResponseAminoMsg): _129.AccountUnlockedBeforeTimeResponse;
            toAminoMsg(message: _129.AccountUnlockedBeforeTimeResponse): _129.AccountUnlockedBeforeTimeResponseAminoMsg;
            fromProtoMsg(message: _129.AccountUnlockedBeforeTimeResponseProtoMsg): _129.AccountUnlockedBeforeTimeResponse;
            toProto(message: _129.AccountUnlockedBeforeTimeResponse): Uint8Array;
            toProtoMsg(message: _129.AccountUnlockedBeforeTimeResponse): _129.AccountUnlockedBeforeTimeResponseProtoMsg;
        };
        AccountLockedPastTimeDenomRequest: {
            typeUrl: string;
            encode(message: _129.AccountLockedPastTimeDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AccountLockedPastTimeDenomRequest;
            fromPartial(object: Partial<_129.AccountLockedPastTimeDenomRequest>): _129.AccountLockedPastTimeDenomRequest;
            fromAmino(object: _129.AccountLockedPastTimeDenomRequestAmino): _129.AccountLockedPastTimeDenomRequest;
            toAmino(message: _129.AccountLockedPastTimeDenomRequest): _129.AccountLockedPastTimeDenomRequestAmino;
            fromAminoMsg(object: _129.AccountLockedPastTimeDenomRequestAminoMsg): _129.AccountLockedPastTimeDenomRequest;
            toAminoMsg(message: _129.AccountLockedPastTimeDenomRequest): _129.AccountLockedPastTimeDenomRequestAminoMsg;
            fromProtoMsg(message: _129.AccountLockedPastTimeDenomRequestProtoMsg): _129.AccountLockedPastTimeDenomRequest;
            toProto(message: _129.AccountLockedPastTimeDenomRequest): Uint8Array;
            toProtoMsg(message: _129.AccountLockedPastTimeDenomRequest): _129.AccountLockedPastTimeDenomRequestProtoMsg;
        };
        AccountLockedPastTimeDenomResponse: {
            typeUrl: string;
            encode(message: _129.AccountLockedPastTimeDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AccountLockedPastTimeDenomResponse;
            fromPartial(object: Partial<_129.AccountLockedPastTimeDenomResponse>): _129.AccountLockedPastTimeDenomResponse;
            fromAmino(object: _129.AccountLockedPastTimeDenomResponseAmino): _129.AccountLockedPastTimeDenomResponse;
            toAmino(message: _129.AccountLockedPastTimeDenomResponse): _129.AccountLockedPastTimeDenomResponseAmino;
            fromAminoMsg(object: _129.AccountLockedPastTimeDenomResponseAminoMsg): _129.AccountLockedPastTimeDenomResponse;
            toAminoMsg(message: _129.AccountLockedPastTimeDenomResponse): _129.AccountLockedPastTimeDenomResponseAminoMsg;
            fromProtoMsg(message: _129.AccountLockedPastTimeDenomResponseProtoMsg): _129.AccountLockedPastTimeDenomResponse;
            toProto(message: _129.AccountLockedPastTimeDenomResponse): Uint8Array;
            toProtoMsg(message: _129.AccountLockedPastTimeDenomResponse): _129.AccountLockedPastTimeDenomResponseProtoMsg;
        };
        LockedDenomRequest: {
            typeUrl: string;
            encode(message: _129.LockedDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.LockedDenomRequest;
            fromPartial(object: Partial<_129.LockedDenomRequest>): _129.LockedDenomRequest;
            fromAmino(object: _129.LockedDenomRequestAmino): _129.LockedDenomRequest;
            toAmino(message: _129.LockedDenomRequest): _129.LockedDenomRequestAmino;
            fromAminoMsg(object: _129.LockedDenomRequestAminoMsg): _129.LockedDenomRequest;
            toAminoMsg(message: _129.LockedDenomRequest): _129.LockedDenomRequestAminoMsg;
            fromProtoMsg(message: _129.LockedDenomRequestProtoMsg): _129.LockedDenomRequest;
            toProto(message: _129.LockedDenomRequest): Uint8Array;
            toProtoMsg(message: _129.LockedDenomRequest): _129.LockedDenomRequestProtoMsg;
        };
        LockedDenomResponse: {
            typeUrl: string;
            encode(message: _129.LockedDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.LockedDenomResponse;
            fromPartial(object: Partial<_129.LockedDenomResponse>): _129.LockedDenomResponse;
            fromAmino(object: _129.LockedDenomResponseAmino): _129.LockedDenomResponse;
            toAmino(message: _129.LockedDenomResponse): _129.LockedDenomResponseAmino;
            fromAminoMsg(object: _129.LockedDenomResponseAminoMsg): _129.LockedDenomResponse;
            toAminoMsg(message: _129.LockedDenomResponse): _129.LockedDenomResponseAminoMsg;
            fromProtoMsg(message: _129.LockedDenomResponseProtoMsg): _129.LockedDenomResponse;
            toProto(message: _129.LockedDenomResponse): Uint8Array;
            toProtoMsg(message: _129.LockedDenomResponse): _129.LockedDenomResponseProtoMsg;
        };
        LockedRequest: {
            typeUrl: string;
            encode(message: _129.LockedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.LockedRequest;
            fromPartial(object: Partial<_129.LockedRequest>): _129.LockedRequest;
            fromAmino(object: _129.LockedRequestAmino): _129.LockedRequest;
            toAmino(message: _129.LockedRequest): _129.LockedRequestAmino;
            fromAminoMsg(object: _129.LockedRequestAminoMsg): _129.LockedRequest;
            toAminoMsg(message: _129.LockedRequest): _129.LockedRequestAminoMsg;
            fromProtoMsg(message: _129.LockedRequestProtoMsg): _129.LockedRequest;
            toProto(message: _129.LockedRequest): Uint8Array;
            toProtoMsg(message: _129.LockedRequest): _129.LockedRequestProtoMsg;
        };
        LockedResponse: {
            typeUrl: string;
            encode(message: _129.LockedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.LockedResponse;
            fromPartial(object: Partial<_129.LockedResponse>): _129.LockedResponse;
            fromAmino(object: _129.LockedResponseAmino): _129.LockedResponse;
            toAmino(message: _129.LockedResponse): _129.LockedResponseAmino;
            fromAminoMsg(object: _129.LockedResponseAminoMsg): _129.LockedResponse;
            toAminoMsg(message: _129.LockedResponse): _129.LockedResponseAminoMsg;
            fromProtoMsg(message: _129.LockedResponseProtoMsg): _129.LockedResponse;
            toProto(message: _129.LockedResponse): Uint8Array;
            toProtoMsg(message: _129.LockedResponse): _129.LockedResponseProtoMsg;
        };
        LockRewardReceiverRequest: {
            typeUrl: string;
            encode(message: _129.LockRewardReceiverRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.LockRewardReceiverRequest;
            fromPartial(object: Partial<_129.LockRewardReceiverRequest>): _129.LockRewardReceiverRequest;
            fromAmino(object: _129.LockRewardReceiverRequestAmino): _129.LockRewardReceiverRequest;
            toAmino(message: _129.LockRewardReceiverRequest): _129.LockRewardReceiverRequestAmino;
            fromAminoMsg(object: _129.LockRewardReceiverRequestAminoMsg): _129.LockRewardReceiverRequest;
            toAminoMsg(message: _129.LockRewardReceiverRequest): _129.LockRewardReceiverRequestAminoMsg;
            fromProtoMsg(message: _129.LockRewardReceiverRequestProtoMsg): _129.LockRewardReceiverRequest;
            toProto(message: _129.LockRewardReceiverRequest): Uint8Array;
            toProtoMsg(message: _129.LockRewardReceiverRequest): _129.LockRewardReceiverRequestProtoMsg;
        };
        LockRewardReceiverResponse: {
            typeUrl: string;
            encode(message: _129.LockRewardReceiverResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.LockRewardReceiverResponse;
            fromPartial(object: Partial<_129.LockRewardReceiverResponse>): _129.LockRewardReceiverResponse;
            fromAmino(object: _129.LockRewardReceiverResponseAmino): _129.LockRewardReceiverResponse;
            toAmino(message: _129.LockRewardReceiverResponse): _129.LockRewardReceiverResponseAmino;
            fromAminoMsg(object: _129.LockRewardReceiverResponseAminoMsg): _129.LockRewardReceiverResponse;
            toAminoMsg(message: _129.LockRewardReceiverResponse): _129.LockRewardReceiverResponseAminoMsg;
            fromProtoMsg(message: _129.LockRewardReceiverResponseProtoMsg): _129.LockRewardReceiverResponse;
            toProto(message: _129.LockRewardReceiverResponse): Uint8Array;
            toProtoMsg(message: _129.LockRewardReceiverResponse): _129.LockRewardReceiverResponseProtoMsg;
        };
        NextLockIDRequest: {
            typeUrl: string;
            encode(_: _129.NextLockIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.NextLockIDRequest;
            fromPartial(_: Partial<_129.NextLockIDRequest>): _129.NextLockIDRequest;
            fromAmino(_: _129.NextLockIDRequestAmino): _129.NextLockIDRequest;
            toAmino(_: _129.NextLockIDRequest): _129.NextLockIDRequestAmino;
            fromAminoMsg(object: _129.NextLockIDRequestAminoMsg): _129.NextLockIDRequest;
            toAminoMsg(message: _129.NextLockIDRequest): _129.NextLockIDRequestAminoMsg;
            fromProtoMsg(message: _129.NextLockIDRequestProtoMsg): _129.NextLockIDRequest;
            toProto(message: _129.NextLockIDRequest): Uint8Array;
            toProtoMsg(message: _129.NextLockIDRequest): _129.NextLockIDRequestProtoMsg;
        };
        NextLockIDResponse: {
            typeUrl: string;
            encode(message: _129.NextLockIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.NextLockIDResponse;
            fromPartial(object: Partial<_129.NextLockIDResponse>): _129.NextLockIDResponse;
            fromAmino(object: _129.NextLockIDResponseAmino): _129.NextLockIDResponse;
            toAmino(message: _129.NextLockIDResponse): _129.NextLockIDResponseAmino;
            fromAminoMsg(object: _129.NextLockIDResponseAminoMsg): _129.NextLockIDResponse;
            toAminoMsg(message: _129.NextLockIDResponse): _129.NextLockIDResponseAminoMsg;
            fromProtoMsg(message: _129.NextLockIDResponseProtoMsg): _129.NextLockIDResponse;
            toProto(message: _129.NextLockIDResponse): Uint8Array;
            toProtoMsg(message: _129.NextLockIDResponse): _129.NextLockIDResponseProtoMsg;
        };
        SyntheticLockupsByLockupIDRequest: {
            typeUrl: string;
            encode(message: _129.SyntheticLockupsByLockupIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.SyntheticLockupsByLockupIDRequest;
            fromPartial(object: Partial<_129.SyntheticLockupsByLockupIDRequest>): _129.SyntheticLockupsByLockupIDRequest;
            fromAmino(object: _129.SyntheticLockupsByLockupIDRequestAmino): _129.SyntheticLockupsByLockupIDRequest;
            toAmino(message: _129.SyntheticLockupsByLockupIDRequest): _129.SyntheticLockupsByLockupIDRequestAmino;
            fromAminoMsg(object: _129.SyntheticLockupsByLockupIDRequestAminoMsg): _129.SyntheticLockupsByLockupIDRequest;
            toAminoMsg(message: _129.SyntheticLockupsByLockupIDRequest): _129.SyntheticLockupsByLockupIDRequestAminoMsg;
            fromProtoMsg(message: _129.SyntheticLockupsByLockupIDRequestProtoMsg): _129.SyntheticLockupsByLockupIDRequest;
            toProto(message: _129.SyntheticLockupsByLockupIDRequest): Uint8Array;
            toProtoMsg(message: _129.SyntheticLockupsByLockupIDRequest): _129.SyntheticLockupsByLockupIDRequestProtoMsg;
        };
        SyntheticLockupsByLockupIDResponse: {
            typeUrl: string;
            encode(message: _129.SyntheticLockupsByLockupIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.SyntheticLockupsByLockupIDResponse;
            fromPartial(object: Partial<_129.SyntheticLockupsByLockupIDResponse>): _129.SyntheticLockupsByLockupIDResponse;
            fromAmino(object: _129.SyntheticLockupsByLockupIDResponseAmino): _129.SyntheticLockupsByLockupIDResponse;
            toAmino(message: _129.SyntheticLockupsByLockupIDResponse): _129.SyntheticLockupsByLockupIDResponseAmino;
            fromAminoMsg(object: _129.SyntheticLockupsByLockupIDResponseAminoMsg): _129.SyntheticLockupsByLockupIDResponse;
            toAminoMsg(message: _129.SyntheticLockupsByLockupIDResponse): _129.SyntheticLockupsByLockupIDResponseAminoMsg;
            fromProtoMsg(message: _129.SyntheticLockupsByLockupIDResponseProtoMsg): _129.SyntheticLockupsByLockupIDResponse;
            toProto(message: _129.SyntheticLockupsByLockupIDResponse): Uint8Array;
            toProtoMsg(message: _129.SyntheticLockupsByLockupIDResponse): _129.SyntheticLockupsByLockupIDResponseProtoMsg;
        };
        SyntheticLockupByLockupIDRequest: {
            typeUrl: string;
            encode(message: _129.SyntheticLockupByLockupIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.SyntheticLockupByLockupIDRequest;
            fromPartial(object: Partial<_129.SyntheticLockupByLockupIDRequest>): _129.SyntheticLockupByLockupIDRequest;
            fromAmino(object: _129.SyntheticLockupByLockupIDRequestAmino): _129.SyntheticLockupByLockupIDRequest;
            toAmino(message: _129.SyntheticLockupByLockupIDRequest): _129.SyntheticLockupByLockupIDRequestAmino;
            fromAminoMsg(object: _129.SyntheticLockupByLockupIDRequestAminoMsg): _129.SyntheticLockupByLockupIDRequest;
            toAminoMsg(message: _129.SyntheticLockupByLockupIDRequest): _129.SyntheticLockupByLockupIDRequestAminoMsg;
            fromProtoMsg(message: _129.SyntheticLockupByLockupIDRequestProtoMsg): _129.SyntheticLockupByLockupIDRequest;
            toProto(message: _129.SyntheticLockupByLockupIDRequest): Uint8Array;
            toProtoMsg(message: _129.SyntheticLockupByLockupIDRequest): _129.SyntheticLockupByLockupIDRequestProtoMsg;
        };
        SyntheticLockupByLockupIDResponse: {
            typeUrl: string;
            encode(message: _129.SyntheticLockupByLockupIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.SyntheticLockupByLockupIDResponse;
            fromPartial(object: Partial<_129.SyntheticLockupByLockupIDResponse>): _129.SyntheticLockupByLockupIDResponse;
            fromAmino(object: _129.SyntheticLockupByLockupIDResponseAmino): _129.SyntheticLockupByLockupIDResponse;
            toAmino(message: _129.SyntheticLockupByLockupIDResponse): _129.SyntheticLockupByLockupIDResponseAmino;
            fromAminoMsg(object: _129.SyntheticLockupByLockupIDResponseAminoMsg): _129.SyntheticLockupByLockupIDResponse;
            toAminoMsg(message: _129.SyntheticLockupByLockupIDResponse): _129.SyntheticLockupByLockupIDResponseAminoMsg;
            fromProtoMsg(message: _129.SyntheticLockupByLockupIDResponseProtoMsg): _129.SyntheticLockupByLockupIDResponse;
            toProto(message: _129.SyntheticLockupByLockupIDResponse): Uint8Array;
            toProtoMsg(message: _129.SyntheticLockupByLockupIDResponse): _129.SyntheticLockupByLockupIDResponseProtoMsg;
        };
        AccountLockedLongerDurationRequest: {
            typeUrl: string;
            encode(message: _129.AccountLockedLongerDurationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AccountLockedLongerDurationRequest;
            fromPartial(object: Partial<_129.AccountLockedLongerDurationRequest>): _129.AccountLockedLongerDurationRequest;
            fromAmino(object: _129.AccountLockedLongerDurationRequestAmino): _129.AccountLockedLongerDurationRequest;
            toAmino(message: _129.AccountLockedLongerDurationRequest): _129.AccountLockedLongerDurationRequestAmino;
            fromAminoMsg(object: _129.AccountLockedLongerDurationRequestAminoMsg): _129.AccountLockedLongerDurationRequest;
            toAminoMsg(message: _129.AccountLockedLongerDurationRequest): _129.AccountLockedLongerDurationRequestAminoMsg;
            fromProtoMsg(message: _129.AccountLockedLongerDurationRequestProtoMsg): _129.AccountLockedLongerDurationRequest;
            toProto(message: _129.AccountLockedLongerDurationRequest): Uint8Array;
            toProtoMsg(message: _129.AccountLockedLongerDurationRequest): _129.AccountLockedLongerDurationRequestProtoMsg;
        };
        AccountLockedLongerDurationResponse: {
            typeUrl: string;
            encode(message: _129.AccountLockedLongerDurationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AccountLockedLongerDurationResponse;
            fromPartial(object: Partial<_129.AccountLockedLongerDurationResponse>): _129.AccountLockedLongerDurationResponse;
            fromAmino(object: _129.AccountLockedLongerDurationResponseAmino): _129.AccountLockedLongerDurationResponse;
            toAmino(message: _129.AccountLockedLongerDurationResponse): _129.AccountLockedLongerDurationResponseAmino;
            fromAminoMsg(object: _129.AccountLockedLongerDurationResponseAminoMsg): _129.AccountLockedLongerDurationResponse;
            toAminoMsg(message: _129.AccountLockedLongerDurationResponse): _129.AccountLockedLongerDurationResponseAminoMsg;
            fromProtoMsg(message: _129.AccountLockedLongerDurationResponseProtoMsg): _129.AccountLockedLongerDurationResponse;
            toProto(message: _129.AccountLockedLongerDurationResponse): Uint8Array;
            toProtoMsg(message: _129.AccountLockedLongerDurationResponse): _129.AccountLockedLongerDurationResponseProtoMsg;
        };
        AccountLockedDurationRequest: {
            typeUrl: string;
            encode(message: _129.AccountLockedDurationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AccountLockedDurationRequest;
            fromPartial(object: Partial<_129.AccountLockedDurationRequest>): _129.AccountLockedDurationRequest;
            fromAmino(object: _129.AccountLockedDurationRequestAmino): _129.AccountLockedDurationRequest;
            toAmino(message: _129.AccountLockedDurationRequest): _129.AccountLockedDurationRequestAmino;
            fromAminoMsg(object: _129.AccountLockedDurationRequestAminoMsg): _129.AccountLockedDurationRequest;
            toAminoMsg(message: _129.AccountLockedDurationRequest): _129.AccountLockedDurationRequestAminoMsg;
            fromProtoMsg(message: _129.AccountLockedDurationRequestProtoMsg): _129.AccountLockedDurationRequest;
            toProto(message: _129.AccountLockedDurationRequest): Uint8Array;
            toProtoMsg(message: _129.AccountLockedDurationRequest): _129.AccountLockedDurationRequestProtoMsg;
        };
        AccountLockedDurationResponse: {
            typeUrl: string;
            encode(message: _129.AccountLockedDurationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AccountLockedDurationResponse;
            fromPartial(object: Partial<_129.AccountLockedDurationResponse>): _129.AccountLockedDurationResponse;
            fromAmino(object: _129.AccountLockedDurationResponseAmino): _129.AccountLockedDurationResponse;
            toAmino(message: _129.AccountLockedDurationResponse): _129.AccountLockedDurationResponseAmino;
            fromAminoMsg(object: _129.AccountLockedDurationResponseAminoMsg): _129.AccountLockedDurationResponse;
            toAminoMsg(message: _129.AccountLockedDurationResponse): _129.AccountLockedDurationResponseAminoMsg;
            fromProtoMsg(message: _129.AccountLockedDurationResponseProtoMsg): _129.AccountLockedDurationResponse;
            toProto(message: _129.AccountLockedDurationResponse): Uint8Array;
            toProtoMsg(message: _129.AccountLockedDurationResponse): _129.AccountLockedDurationResponseProtoMsg;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            typeUrl: string;
            encode(message: _129.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_129.AccountLockedLongerDurationNotUnlockingOnlyRequest>): _129.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromAmino(object: _129.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino): _129.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAmino(message: _129.AccountLockedLongerDurationNotUnlockingOnlyRequest): _129.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino;
            fromAminoMsg(object: _129.AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg): _129.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAminoMsg(message: _129.AccountLockedLongerDurationNotUnlockingOnlyRequest): _129.AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg;
            fromProtoMsg(message: _129.AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg): _129.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toProto(message: _129.AccountLockedLongerDurationNotUnlockingOnlyRequest): Uint8Array;
            toProtoMsg(message: _129.AccountLockedLongerDurationNotUnlockingOnlyRequest): _129.AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            typeUrl: string;
            encode(message: _129.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_129.AccountLockedLongerDurationNotUnlockingOnlyResponse>): _129.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromAmino(object: _129.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino): _129.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAmino(message: _129.AccountLockedLongerDurationNotUnlockingOnlyResponse): _129.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino;
            fromAminoMsg(object: _129.AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg): _129.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAminoMsg(message: _129.AccountLockedLongerDurationNotUnlockingOnlyResponse): _129.AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg;
            fromProtoMsg(message: _129.AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg): _129.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toProto(message: _129.AccountLockedLongerDurationNotUnlockingOnlyResponse): Uint8Array;
            toProtoMsg(message: _129.AccountLockedLongerDurationNotUnlockingOnlyResponse): _129.AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg;
        };
        AccountLockedLongerDurationDenomRequest: {
            typeUrl: string;
            encode(message: _129.AccountLockedLongerDurationDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AccountLockedLongerDurationDenomRequest;
            fromPartial(object: Partial<_129.AccountLockedLongerDurationDenomRequest>): _129.AccountLockedLongerDurationDenomRequest;
            fromAmino(object: _129.AccountLockedLongerDurationDenomRequestAmino): _129.AccountLockedLongerDurationDenomRequest;
            toAmino(message: _129.AccountLockedLongerDurationDenomRequest): _129.AccountLockedLongerDurationDenomRequestAmino;
            fromAminoMsg(object: _129.AccountLockedLongerDurationDenomRequestAminoMsg): _129.AccountLockedLongerDurationDenomRequest;
            toAminoMsg(message: _129.AccountLockedLongerDurationDenomRequest): _129.AccountLockedLongerDurationDenomRequestAminoMsg;
            fromProtoMsg(message: _129.AccountLockedLongerDurationDenomRequestProtoMsg): _129.AccountLockedLongerDurationDenomRequest;
            toProto(message: _129.AccountLockedLongerDurationDenomRequest): Uint8Array;
            toProtoMsg(message: _129.AccountLockedLongerDurationDenomRequest): _129.AccountLockedLongerDurationDenomRequestProtoMsg;
        };
        AccountLockedLongerDurationDenomResponse: {
            typeUrl: string;
            encode(message: _129.AccountLockedLongerDurationDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.AccountLockedLongerDurationDenomResponse;
            fromPartial(object: Partial<_129.AccountLockedLongerDurationDenomResponse>): _129.AccountLockedLongerDurationDenomResponse;
            fromAmino(object: _129.AccountLockedLongerDurationDenomResponseAmino): _129.AccountLockedLongerDurationDenomResponse;
            toAmino(message: _129.AccountLockedLongerDurationDenomResponse): _129.AccountLockedLongerDurationDenomResponseAmino;
            fromAminoMsg(object: _129.AccountLockedLongerDurationDenomResponseAminoMsg): _129.AccountLockedLongerDurationDenomResponse;
            toAminoMsg(message: _129.AccountLockedLongerDurationDenomResponse): _129.AccountLockedLongerDurationDenomResponseAminoMsg;
            fromProtoMsg(message: _129.AccountLockedLongerDurationDenomResponseProtoMsg): _129.AccountLockedLongerDurationDenomResponse;
            toProto(message: _129.AccountLockedLongerDurationDenomResponse): Uint8Array;
            toProtoMsg(message: _129.AccountLockedLongerDurationDenomResponse): _129.AccountLockedLongerDurationDenomResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _129.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.QueryParamsRequest;
            fromPartial(_: Partial<_129.QueryParamsRequest>): _129.QueryParamsRequest;
            fromAmino(_: _129.QueryParamsRequestAmino): _129.QueryParamsRequest;
            toAmino(_: _129.QueryParamsRequest): _129.QueryParamsRequestAmino;
            fromAminoMsg(object: _129.QueryParamsRequestAminoMsg): _129.QueryParamsRequest;
            toAminoMsg(message: _129.QueryParamsRequest): _129.QueryParamsRequestAminoMsg;
            fromProtoMsg(message: _129.QueryParamsRequestProtoMsg): _129.QueryParamsRequest;
            toProto(message: _129.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _129.QueryParamsRequest): _129.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _129.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.QueryParamsResponse;
            fromPartial(object: Partial<_129.QueryParamsResponse>): _129.QueryParamsResponse;
            fromAmino(object: _129.QueryParamsResponseAmino): _129.QueryParamsResponse;
            toAmino(message: _129.QueryParamsResponse): _129.QueryParamsResponseAmino;
            fromAminoMsg(object: _129.QueryParamsResponseAminoMsg): _129.QueryParamsResponse;
            toAminoMsg(message: _129.QueryParamsResponse): _129.QueryParamsResponseAminoMsg;
            fromProtoMsg(message: _129.QueryParamsResponseProtoMsg): _129.QueryParamsResponse;
            toProto(message: _129.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _129.QueryParamsResponse): _129.QueryParamsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _128.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.Params;
            fromPartial(object: Partial<_128.Params>): _128.Params;
            fromAmino(object: _128.ParamsAmino): _128.Params;
            toAmino(message: _128.Params): _128.ParamsAmino;
            fromAminoMsg(object: _128.ParamsAminoMsg): _128.Params;
            toAminoMsg(message: _128.Params): _128.ParamsAminoMsg;
            fromProtoMsg(message: _128.ParamsProtoMsg): _128.Params;
            toProto(message: _128.Params): Uint8Array;
            toProtoMsg(message: _128.Params): _128.ParamsProtoMsg;
        };
        lockQueryTypeFromJSON(object: any): _127.LockQueryType;
        lockQueryTypeToJSON(object: _127.LockQueryType): string;
        LockQueryType: typeof _127.LockQueryType;
        LockQueryTypeSDKType: typeof _127.LockQueryType;
        LockQueryTypeAmino: typeof _127.LockQueryType;
        PeriodLock: {
            typeUrl: string;
            encode(message: _127.PeriodLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.PeriodLock;
            fromPartial(object: Partial<_127.PeriodLock>): _127.PeriodLock;
            fromAmino(object: _127.PeriodLockAmino): _127.PeriodLock;
            toAmino(message: _127.PeriodLock): _127.PeriodLockAmino;
            fromAminoMsg(object: _127.PeriodLockAminoMsg): _127.PeriodLock;
            toAminoMsg(message: _127.PeriodLock): _127.PeriodLockAminoMsg;
            fromProtoMsg(message: _127.PeriodLockProtoMsg): _127.PeriodLock;
            toProto(message: _127.PeriodLock): Uint8Array;
            toProtoMsg(message: _127.PeriodLock): _127.PeriodLockProtoMsg;
        };
        QueryCondition: {
            typeUrl: string;
            encode(message: _127.QueryCondition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.QueryCondition;
            fromPartial(object: Partial<_127.QueryCondition>): _127.QueryCondition;
            fromAmino(object: _127.QueryConditionAmino): _127.QueryCondition;
            toAmino(message: _127.QueryCondition): _127.QueryConditionAmino;
            fromAminoMsg(object: _127.QueryConditionAminoMsg): _127.QueryCondition;
            toAminoMsg(message: _127.QueryCondition): _127.QueryConditionAminoMsg;
            fromProtoMsg(message: _127.QueryConditionProtoMsg): _127.QueryCondition;
            toProto(message: _127.QueryCondition): Uint8Array;
            toProtoMsg(message: _127.QueryCondition): _127.QueryConditionProtoMsg;
        };
        SyntheticLock: {
            typeUrl: string;
            encode(message: _127.SyntheticLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.SyntheticLock;
            fromPartial(object: Partial<_127.SyntheticLock>): _127.SyntheticLock;
            fromAmino(object: _127.SyntheticLockAmino): _127.SyntheticLock;
            toAmino(message: _127.SyntheticLock): _127.SyntheticLockAmino;
            fromAminoMsg(object: _127.SyntheticLockAminoMsg): _127.SyntheticLock;
            toAminoMsg(message: _127.SyntheticLock): _127.SyntheticLockAminoMsg;
            fromProtoMsg(message: _127.SyntheticLockProtoMsg): _127.SyntheticLock;
            toProto(message: _127.SyntheticLock): Uint8Array;
            toProtoMsg(message: _127.SyntheticLock): _127.SyntheticLockProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _126.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.GenesisState;
            fromPartial(object: Partial<_126.GenesisState>): _126.GenesisState;
            fromAmino(object: _126.GenesisStateAmino): _126.GenesisState;
            toAmino(message: _126.GenesisState): _126.GenesisStateAmino;
            fromAminoMsg(object: _126.GenesisStateAminoMsg): _126.GenesisState;
            toAminoMsg(message: _126.GenesisState): _126.GenesisStateAminoMsg;
            fromProtoMsg(message: _126.GenesisStateProtoMsg): _126.GenesisState;
            toProto(message: _126.GenesisState): Uint8Array;
            toProtoMsg(message: _126.GenesisState): _126.GenesisStateProtoMsg;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _311.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _133.QueryParamsRequest): Promise<_133.QueryParamsResponse>;
                epochProvisions(request?: _133.QueryEpochProvisionsRequest): Promise<_133.QueryEpochProvisionsResponse>;
            };
            LCDQueryClient: typeof _293.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _133.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryParamsRequest;
                fromPartial(_: Partial<_133.QueryParamsRequest>): _133.QueryParamsRequest;
                fromAmino(_: _133.QueryParamsRequestAmino): _133.QueryParamsRequest;
                toAmino(_: _133.QueryParamsRequest): _133.QueryParamsRequestAmino;
                fromAminoMsg(object: _133.QueryParamsRequestAminoMsg): _133.QueryParamsRequest;
                toAminoMsg(message: _133.QueryParamsRequest): _133.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _133.QueryParamsRequestProtoMsg): _133.QueryParamsRequest;
                toProto(message: _133.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _133.QueryParamsRequest): _133.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _133.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryParamsResponse;
                fromPartial(object: Partial<_133.QueryParamsResponse>): _133.QueryParamsResponse;
                fromAmino(object: _133.QueryParamsResponseAmino): _133.QueryParamsResponse;
                toAmino(message: _133.QueryParamsResponse): _133.QueryParamsResponseAmino;
                fromAminoMsg(object: _133.QueryParamsResponseAminoMsg): _133.QueryParamsResponse;
                toAminoMsg(message: _133.QueryParamsResponse): _133.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _133.QueryParamsResponseProtoMsg): _133.QueryParamsResponse;
                toProto(message: _133.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _133.QueryParamsResponse): _133.QueryParamsResponseProtoMsg;
            };
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _133.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_133.QueryEpochProvisionsRequest>): _133.QueryEpochProvisionsRequest;
                fromAmino(_: _133.QueryEpochProvisionsRequestAmino): _133.QueryEpochProvisionsRequest;
                toAmino(_: _133.QueryEpochProvisionsRequest): _133.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _133.QueryEpochProvisionsRequestAminoMsg): _133.QueryEpochProvisionsRequest;
                toAminoMsg(message: _133.QueryEpochProvisionsRequest): _133.QueryEpochProvisionsRequestAminoMsg;
                fromProtoMsg(message: _133.QueryEpochProvisionsRequestProtoMsg): _133.QueryEpochProvisionsRequest;
                toProto(message: _133.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _133.QueryEpochProvisionsRequest): _133.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _133.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_133.QueryEpochProvisionsResponse>): _133.QueryEpochProvisionsResponse;
                fromAmino(object: _133.QueryEpochProvisionsResponseAmino): _133.QueryEpochProvisionsResponse;
                toAmino(message: _133.QueryEpochProvisionsResponse): _133.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _133.QueryEpochProvisionsResponseAminoMsg): _133.QueryEpochProvisionsResponse;
                toAminoMsg(message: _133.QueryEpochProvisionsResponse): _133.QueryEpochProvisionsResponseAminoMsg;
                fromProtoMsg(message: _133.QueryEpochProvisionsResponseProtoMsg): _133.QueryEpochProvisionsResponse;
                toProto(message: _133.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _133.QueryEpochProvisionsResponse): _133.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _132.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.Minter;
                fromPartial(object: Partial<_132.Minter>): _132.Minter;
                fromAmino(object: _132.MinterAmino): _132.Minter;
                toAmino(message: _132.Minter): _132.MinterAmino;
                fromAminoMsg(object: _132.MinterAminoMsg): _132.Minter;
                toAminoMsg(message: _132.Minter): _132.MinterAminoMsg;
                fromProtoMsg(message: _132.MinterProtoMsg): _132.Minter;
                toProto(message: _132.Minter): Uint8Array;
                toProtoMsg(message: _132.Minter): _132.MinterProtoMsg;
            };
            WeightedAddress: {
                typeUrl: string;
                encode(message: _132.WeightedAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.WeightedAddress;
                fromPartial(object: Partial<_132.WeightedAddress>): _132.WeightedAddress;
                fromAmino(object: _132.WeightedAddressAmino): _132.WeightedAddress;
                toAmino(message: _132.WeightedAddress): _132.WeightedAddressAmino;
                fromAminoMsg(object: _132.WeightedAddressAminoMsg): _132.WeightedAddress;
                toAminoMsg(message: _132.WeightedAddress): _132.WeightedAddressAminoMsg;
                fromProtoMsg(message: _132.WeightedAddressProtoMsg): _132.WeightedAddress;
                toProto(message: _132.WeightedAddress): Uint8Array;
                toProtoMsg(message: _132.WeightedAddress): _132.WeightedAddressProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _132.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.DistributionProportions;
                fromPartial(object: Partial<_132.DistributionProportions>): _132.DistributionProportions;
                fromAmino(object: _132.DistributionProportionsAmino): _132.DistributionProportions;
                toAmino(message: _132.DistributionProportions): _132.DistributionProportionsAmino;
                fromAminoMsg(object: _132.DistributionProportionsAminoMsg): _132.DistributionProportions;
                toAminoMsg(message: _132.DistributionProportions): _132.DistributionProportionsAminoMsg;
                fromProtoMsg(message: _132.DistributionProportionsProtoMsg): _132.DistributionProportions;
                toProto(message: _132.DistributionProportions): Uint8Array;
                toProtoMsg(message: _132.DistributionProportions): _132.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _132.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.Params;
                fromPartial(object: Partial<_132.Params>): _132.Params;
                fromAmino(object: _132.ParamsAmino): _132.Params;
                toAmino(message: _132.Params): _132.ParamsAmino;
                fromAminoMsg(object: _132.ParamsAminoMsg): _132.Params;
                toAminoMsg(message: _132.Params): _132.ParamsAminoMsg;
                fromProtoMsg(message: _132.ParamsProtoMsg): _132.Params;
                toProto(message: _132.Params): Uint8Array;
                toProtoMsg(message: _132.Params): _132.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _131.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.GenesisState;
                fromPartial(object: Partial<_131.GenesisState>): _131.GenesisState;
                fromAmino(object: _131.GenesisStateAmino): _131.GenesisState;
                toAmino(message: _131.GenesisState): _131.GenesisStateAmino;
                fromAminoMsg(object: _131.GenesisStateAminoMsg): _131.GenesisState;
                toAminoMsg(message: _131.GenesisState): _131.GenesisStateAminoMsg;
                fromProtoMsg(message: _131.GenesisStateProtoMsg): _131.GenesisState;
                toProto(message: _131.GenesisState): Uint8Array;
                toProtoMsg(message: _131.GenesisState): _131.GenesisStateProtoMsg;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _312.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                gaugeIds(request: _137.QueryGaugeIdsRequest): Promise<_137.QueryGaugeIdsResponse>;
                distrInfo(request?: _137.QueryDistrInfoRequest): Promise<_137.QueryDistrInfoResponse>;
                params(request?: _137.QueryParamsRequest): Promise<_137.QueryParamsResponse>;
                lockableDurations(request?: _137.QueryLockableDurationsRequest): Promise<_137.QueryLockableDurationsResponse>;
                incentivizedPools(request?: _137.QueryIncentivizedPoolsRequest): Promise<_137.QueryIncentivizedPoolsResponse>;
                externalIncentiveGauges(request?: _137.QueryExternalIncentiveGaugesRequest): Promise<_137.QueryExternalIncentiveGaugesResponse>;
            };
            LCDQueryClient: typeof _294.LCDQueryClient;
            MigrationRecords: {
                typeUrl: string;
                encode(message: _138.MigrationRecords, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MigrationRecords;
                fromPartial(object: Partial<_138.MigrationRecords>): _138.MigrationRecords;
                fromAmino(object: _138.MigrationRecordsAmino): _138.MigrationRecords;
                toAmino(message: _138.MigrationRecords): _138.MigrationRecordsAmino;
                fromAminoMsg(object: _138.MigrationRecordsAminoMsg): _138.MigrationRecords;
                toAminoMsg(message: _138.MigrationRecords): _138.MigrationRecordsAminoMsg;
                fromProtoMsg(message: _138.MigrationRecordsProtoMsg): _138.MigrationRecords;
                toProto(message: _138.MigrationRecords): Uint8Array;
                toProtoMsg(message: _138.MigrationRecords): _138.MigrationRecordsProtoMsg;
            };
            BalancerToConcentratedPoolLink: {
                typeUrl: string;
                encode(message: _138.BalancerToConcentratedPoolLink, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.BalancerToConcentratedPoolLink;
                fromPartial(object: Partial<_138.BalancerToConcentratedPoolLink>): _138.BalancerToConcentratedPoolLink;
                fromAmino(object: _138.BalancerToConcentratedPoolLinkAmino): _138.BalancerToConcentratedPoolLink;
                toAmino(message: _138.BalancerToConcentratedPoolLink): _138.BalancerToConcentratedPoolLinkAmino;
                fromAminoMsg(object: _138.BalancerToConcentratedPoolLinkAminoMsg): _138.BalancerToConcentratedPoolLink;
                toAminoMsg(message: _138.BalancerToConcentratedPoolLink): _138.BalancerToConcentratedPoolLinkAminoMsg;
                fromProtoMsg(message: _138.BalancerToConcentratedPoolLinkProtoMsg): _138.BalancerToConcentratedPoolLink;
                toProto(message: _138.BalancerToConcentratedPoolLink): Uint8Array;
                toProtoMsg(message: _138.BalancerToConcentratedPoolLink): _138.BalancerToConcentratedPoolLinkProtoMsg;
            };
            QueryGaugeIdsRequest: {
                typeUrl: string;
                encode(message: _137.QueryGaugeIdsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryGaugeIdsRequest;
                fromPartial(object: Partial<_137.QueryGaugeIdsRequest>): _137.QueryGaugeIdsRequest;
                fromAmino(object: _137.QueryGaugeIdsRequestAmino): _137.QueryGaugeIdsRequest;
                toAmino(message: _137.QueryGaugeIdsRequest): _137.QueryGaugeIdsRequestAmino;
                fromAminoMsg(object: _137.QueryGaugeIdsRequestAminoMsg): _137.QueryGaugeIdsRequest;
                toAminoMsg(message: _137.QueryGaugeIdsRequest): _137.QueryGaugeIdsRequestAminoMsg;
                fromProtoMsg(message: _137.QueryGaugeIdsRequestProtoMsg): _137.QueryGaugeIdsRequest;
                toProto(message: _137.QueryGaugeIdsRequest): Uint8Array;
                toProtoMsg(message: _137.QueryGaugeIdsRequest): _137.QueryGaugeIdsRequestProtoMsg;
            };
            QueryGaugeIdsResponse: {
                typeUrl: string;
                encode(message: _137.QueryGaugeIdsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryGaugeIdsResponse;
                fromPartial(object: Partial<_137.QueryGaugeIdsResponse>): _137.QueryGaugeIdsResponse;
                fromAmino(object: _137.QueryGaugeIdsResponseAmino): _137.QueryGaugeIdsResponse;
                toAmino(message: _137.QueryGaugeIdsResponse): _137.QueryGaugeIdsResponseAmino;
                fromAminoMsg(object: _137.QueryGaugeIdsResponseAminoMsg): _137.QueryGaugeIdsResponse;
                toAminoMsg(message: _137.QueryGaugeIdsResponse): _137.QueryGaugeIdsResponseAminoMsg;
                fromProtoMsg(message: _137.QueryGaugeIdsResponseProtoMsg): _137.QueryGaugeIdsResponse;
                toProto(message: _137.QueryGaugeIdsResponse): Uint8Array;
                toProtoMsg(message: _137.QueryGaugeIdsResponse): _137.QueryGaugeIdsResponseProtoMsg;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                typeUrl: string;
                encode(message: _137.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromPartial(object: Partial<_137.QueryGaugeIdsResponse_GaugeIdWithDuration>): _137.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromAmino(object: _137.QueryGaugeIdsResponse_GaugeIdWithDurationAmino): _137.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAmino(message: _137.QueryGaugeIdsResponse_GaugeIdWithDuration): _137.QueryGaugeIdsResponse_GaugeIdWithDurationAmino;
                fromAminoMsg(object: _137.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg): _137.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAminoMsg(message: _137.QueryGaugeIdsResponse_GaugeIdWithDuration): _137.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg;
                fromProtoMsg(message: _137.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg): _137.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toProto(message: _137.QueryGaugeIdsResponse_GaugeIdWithDuration): Uint8Array;
                toProtoMsg(message: _137.QueryGaugeIdsResponse_GaugeIdWithDuration): _137.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg;
            };
            QueryDistrInfoRequest: {
                typeUrl: string;
                encode(_: _137.QueryDistrInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryDistrInfoRequest;
                fromPartial(_: Partial<_137.QueryDistrInfoRequest>): _137.QueryDistrInfoRequest;
                fromAmino(_: _137.QueryDistrInfoRequestAmino): _137.QueryDistrInfoRequest;
                toAmino(_: _137.QueryDistrInfoRequest): _137.QueryDistrInfoRequestAmino;
                fromAminoMsg(object: _137.QueryDistrInfoRequestAminoMsg): _137.QueryDistrInfoRequest;
                toAminoMsg(message: _137.QueryDistrInfoRequest): _137.QueryDistrInfoRequestAminoMsg;
                fromProtoMsg(message: _137.QueryDistrInfoRequestProtoMsg): _137.QueryDistrInfoRequest;
                toProto(message: _137.QueryDistrInfoRequest): Uint8Array;
                toProtoMsg(message: _137.QueryDistrInfoRequest): _137.QueryDistrInfoRequestProtoMsg;
            };
            QueryDistrInfoResponse: {
                typeUrl: string;
                encode(message: _137.QueryDistrInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryDistrInfoResponse;
                fromPartial(object: Partial<_137.QueryDistrInfoResponse>): _137.QueryDistrInfoResponse;
                fromAmino(object: _137.QueryDistrInfoResponseAmino): _137.QueryDistrInfoResponse;
                toAmino(message: _137.QueryDistrInfoResponse): _137.QueryDistrInfoResponseAmino;
                fromAminoMsg(object: _137.QueryDistrInfoResponseAminoMsg): _137.QueryDistrInfoResponse;
                toAminoMsg(message: _137.QueryDistrInfoResponse): _137.QueryDistrInfoResponseAminoMsg;
                fromProtoMsg(message: _137.QueryDistrInfoResponseProtoMsg): _137.QueryDistrInfoResponse;
                toProto(message: _137.QueryDistrInfoResponse): Uint8Array;
                toProtoMsg(message: _137.QueryDistrInfoResponse): _137.QueryDistrInfoResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _137.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryParamsRequest;
                fromPartial(_: Partial<_137.QueryParamsRequest>): _137.QueryParamsRequest;
                fromAmino(_: _137.QueryParamsRequestAmino): _137.QueryParamsRequest;
                toAmino(_: _137.QueryParamsRequest): _137.QueryParamsRequestAmino;
                fromAminoMsg(object: _137.QueryParamsRequestAminoMsg): _137.QueryParamsRequest;
                toAminoMsg(message: _137.QueryParamsRequest): _137.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _137.QueryParamsRequestProtoMsg): _137.QueryParamsRequest;
                toProto(message: _137.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _137.QueryParamsRequest): _137.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _137.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryParamsResponse;
                fromPartial(object: Partial<_137.QueryParamsResponse>): _137.QueryParamsResponse;
                fromAmino(object: _137.QueryParamsResponseAmino): _137.QueryParamsResponse;
                toAmino(message: _137.QueryParamsResponse): _137.QueryParamsResponseAmino;
                fromAminoMsg(object: _137.QueryParamsResponseAminoMsg): _137.QueryParamsResponse;
                toAminoMsg(message: _137.QueryParamsResponse): _137.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _137.QueryParamsResponseProtoMsg): _137.QueryParamsResponse;
                toProto(message: _137.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _137.QueryParamsResponse): _137.QueryParamsResponseProtoMsg;
            };
            QueryLockableDurationsRequest: {
                typeUrl: string;
                encode(_: _137.QueryLockableDurationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryLockableDurationsRequest;
                fromPartial(_: Partial<_137.QueryLockableDurationsRequest>): _137.QueryLockableDurationsRequest;
                fromAmino(_: _137.QueryLockableDurationsRequestAmino): _137.QueryLockableDurationsRequest;
                toAmino(_: _137.QueryLockableDurationsRequest): _137.QueryLockableDurationsRequestAmino;
                fromAminoMsg(object: _137.QueryLockableDurationsRequestAminoMsg): _137.QueryLockableDurationsRequest;
                toAminoMsg(message: _137.QueryLockableDurationsRequest): _137.QueryLockableDurationsRequestAminoMsg;
                fromProtoMsg(message: _137.QueryLockableDurationsRequestProtoMsg): _137.QueryLockableDurationsRequest;
                toProto(message: _137.QueryLockableDurationsRequest): Uint8Array;
                toProtoMsg(message: _137.QueryLockableDurationsRequest): _137.QueryLockableDurationsRequestProtoMsg;
            };
            QueryLockableDurationsResponse: {
                typeUrl: string;
                encode(message: _137.QueryLockableDurationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryLockableDurationsResponse;
                fromPartial(object: Partial<_137.QueryLockableDurationsResponse>): _137.QueryLockableDurationsResponse;
                fromAmino(object: _137.QueryLockableDurationsResponseAmino): _137.QueryLockableDurationsResponse;
                toAmino(message: _137.QueryLockableDurationsResponse): _137.QueryLockableDurationsResponseAmino;
                fromAminoMsg(object: _137.QueryLockableDurationsResponseAminoMsg): _137.QueryLockableDurationsResponse;
                toAminoMsg(message: _137.QueryLockableDurationsResponse): _137.QueryLockableDurationsResponseAminoMsg;
                fromProtoMsg(message: _137.QueryLockableDurationsResponseProtoMsg): _137.QueryLockableDurationsResponse;
                toProto(message: _137.QueryLockableDurationsResponse): Uint8Array;
                toProtoMsg(message: _137.QueryLockableDurationsResponse): _137.QueryLockableDurationsResponseProtoMsg;
            };
            QueryIncentivizedPoolsRequest: {
                typeUrl: string;
                encode(_: _137.QueryIncentivizedPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryIncentivizedPoolsRequest;
                fromPartial(_: Partial<_137.QueryIncentivizedPoolsRequest>): _137.QueryIncentivizedPoolsRequest;
                fromAmino(_: _137.QueryIncentivizedPoolsRequestAmino): _137.QueryIncentivizedPoolsRequest;
                toAmino(_: _137.QueryIncentivizedPoolsRequest): _137.QueryIncentivizedPoolsRequestAmino;
                fromAminoMsg(object: _137.QueryIncentivizedPoolsRequestAminoMsg): _137.QueryIncentivizedPoolsRequest;
                toAminoMsg(message: _137.QueryIncentivizedPoolsRequest): _137.QueryIncentivizedPoolsRequestAminoMsg;
                fromProtoMsg(message: _137.QueryIncentivizedPoolsRequestProtoMsg): _137.QueryIncentivizedPoolsRequest;
                toProto(message: _137.QueryIncentivizedPoolsRequest): Uint8Array;
                toProtoMsg(message: _137.QueryIncentivizedPoolsRequest): _137.QueryIncentivizedPoolsRequestProtoMsg;
            };
            IncentivizedPool: {
                typeUrl: string;
                encode(message: _137.IncentivizedPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.IncentivizedPool;
                fromPartial(object: Partial<_137.IncentivizedPool>): _137.IncentivizedPool;
                fromAmino(object: _137.IncentivizedPoolAmino): _137.IncentivizedPool;
                toAmino(message: _137.IncentivizedPool): _137.IncentivizedPoolAmino;
                fromAminoMsg(object: _137.IncentivizedPoolAminoMsg): _137.IncentivizedPool;
                toAminoMsg(message: _137.IncentivizedPool): _137.IncentivizedPoolAminoMsg;
                fromProtoMsg(message: _137.IncentivizedPoolProtoMsg): _137.IncentivizedPool;
                toProto(message: _137.IncentivizedPool): Uint8Array;
                toProtoMsg(message: _137.IncentivizedPool): _137.IncentivizedPoolProtoMsg;
            };
            QueryIncentivizedPoolsResponse: {
                typeUrl: string;
                encode(message: _137.QueryIncentivizedPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryIncentivizedPoolsResponse;
                fromPartial(object: Partial<_137.QueryIncentivizedPoolsResponse>): _137.QueryIncentivizedPoolsResponse;
                fromAmino(object: _137.QueryIncentivizedPoolsResponseAmino): _137.QueryIncentivizedPoolsResponse;
                toAmino(message: _137.QueryIncentivizedPoolsResponse): _137.QueryIncentivizedPoolsResponseAmino;
                fromAminoMsg(object: _137.QueryIncentivizedPoolsResponseAminoMsg): _137.QueryIncentivizedPoolsResponse;
                toAminoMsg(message: _137.QueryIncentivizedPoolsResponse): _137.QueryIncentivizedPoolsResponseAminoMsg;
                fromProtoMsg(message: _137.QueryIncentivizedPoolsResponseProtoMsg): _137.QueryIncentivizedPoolsResponse;
                toProto(message: _137.QueryIncentivizedPoolsResponse): Uint8Array;
                toProtoMsg(message: _137.QueryIncentivizedPoolsResponse): _137.QueryIncentivizedPoolsResponseProtoMsg;
            };
            QueryExternalIncentiveGaugesRequest: {
                typeUrl: string;
                encode(_: _137.QueryExternalIncentiveGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryExternalIncentiveGaugesRequest;
                fromPartial(_: Partial<_137.QueryExternalIncentiveGaugesRequest>): _137.QueryExternalIncentiveGaugesRequest;
                fromAmino(_: _137.QueryExternalIncentiveGaugesRequestAmino): _137.QueryExternalIncentiveGaugesRequest;
                toAmino(_: _137.QueryExternalIncentiveGaugesRequest): _137.QueryExternalIncentiveGaugesRequestAmino;
                fromAminoMsg(object: _137.QueryExternalIncentiveGaugesRequestAminoMsg): _137.QueryExternalIncentiveGaugesRequest;
                toAminoMsg(message: _137.QueryExternalIncentiveGaugesRequest): _137.QueryExternalIncentiveGaugesRequestAminoMsg;
                fromProtoMsg(message: _137.QueryExternalIncentiveGaugesRequestProtoMsg): _137.QueryExternalIncentiveGaugesRequest;
                toProto(message: _137.QueryExternalIncentiveGaugesRequest): Uint8Array;
                toProtoMsg(message: _137.QueryExternalIncentiveGaugesRequest): _137.QueryExternalIncentiveGaugesRequestProtoMsg;
            };
            QueryExternalIncentiveGaugesResponse: {
                typeUrl: string;
                encode(message: _137.QueryExternalIncentiveGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryExternalIncentiveGaugesResponse;
                fromPartial(object: Partial<_137.QueryExternalIncentiveGaugesResponse>): _137.QueryExternalIncentiveGaugesResponse;
                fromAmino(object: _137.QueryExternalIncentiveGaugesResponseAmino): _137.QueryExternalIncentiveGaugesResponse;
                toAmino(message: _137.QueryExternalIncentiveGaugesResponse): _137.QueryExternalIncentiveGaugesResponseAmino;
                fromAminoMsg(object: _137.QueryExternalIncentiveGaugesResponseAminoMsg): _137.QueryExternalIncentiveGaugesResponse;
                toAminoMsg(message: _137.QueryExternalIncentiveGaugesResponse): _137.QueryExternalIncentiveGaugesResponseAminoMsg;
                fromProtoMsg(message: _137.QueryExternalIncentiveGaugesResponseProtoMsg): _137.QueryExternalIncentiveGaugesResponse;
                toProto(message: _137.QueryExternalIncentiveGaugesResponse): Uint8Array;
                toProtoMsg(message: _137.QueryExternalIncentiveGaugesResponse): _137.QueryExternalIncentiveGaugesResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _136.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.Params;
                fromPartial(object: Partial<_136.Params>): _136.Params;
                fromAmino(object: _136.ParamsAmino): _136.Params;
                toAmino(message: _136.Params): _136.ParamsAmino;
                fromAminoMsg(object: _136.ParamsAminoMsg): _136.Params;
                toAminoMsg(message: _136.Params): _136.ParamsAminoMsg;
                fromProtoMsg(message: _136.ParamsProtoMsg): _136.Params;
                toProto(message: _136.Params): Uint8Array;
                toProtoMsg(message: _136.Params): _136.ParamsProtoMsg;
            };
            LockableDurationsInfo: {
                typeUrl: string;
                encode(message: _136.LockableDurationsInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.LockableDurationsInfo;
                fromPartial(object: Partial<_136.LockableDurationsInfo>): _136.LockableDurationsInfo;
                fromAmino(object: _136.LockableDurationsInfoAmino): _136.LockableDurationsInfo;
                toAmino(message: _136.LockableDurationsInfo): _136.LockableDurationsInfoAmino;
                fromAminoMsg(object: _136.LockableDurationsInfoAminoMsg): _136.LockableDurationsInfo;
                toAminoMsg(message: _136.LockableDurationsInfo): _136.LockableDurationsInfoAminoMsg;
                fromProtoMsg(message: _136.LockableDurationsInfoProtoMsg): _136.LockableDurationsInfo;
                toProto(message: _136.LockableDurationsInfo): Uint8Array;
                toProtoMsg(message: _136.LockableDurationsInfo): _136.LockableDurationsInfoProtoMsg;
            };
            DistrInfo: {
                typeUrl: string;
                encode(message: _136.DistrInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.DistrInfo;
                fromPartial(object: Partial<_136.DistrInfo>): _136.DistrInfo;
                fromAmino(object: _136.DistrInfoAmino): _136.DistrInfo;
                toAmino(message: _136.DistrInfo): _136.DistrInfoAmino;
                fromAminoMsg(object: _136.DistrInfoAminoMsg): _136.DistrInfo;
                toAminoMsg(message: _136.DistrInfo): _136.DistrInfoAminoMsg;
                fromProtoMsg(message: _136.DistrInfoProtoMsg): _136.DistrInfo;
                toProto(message: _136.DistrInfo): Uint8Array;
                toProtoMsg(message: _136.DistrInfo): _136.DistrInfoProtoMsg;
            };
            DistrRecord: {
                typeUrl: string;
                encode(message: _136.DistrRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.DistrRecord;
                fromPartial(object: Partial<_136.DistrRecord>): _136.DistrRecord;
                fromAmino(object: _136.DistrRecordAmino): _136.DistrRecord;
                toAmino(message: _136.DistrRecord): _136.DistrRecordAmino;
                fromAminoMsg(object: _136.DistrRecordAminoMsg): _136.DistrRecord;
                toAminoMsg(message: _136.DistrRecord): _136.DistrRecordAminoMsg;
                fromProtoMsg(message: _136.DistrRecordProtoMsg): _136.DistrRecord;
                toProto(message: _136.DistrRecord): Uint8Array;
                toProtoMsg(message: _136.DistrRecord): _136.DistrRecordProtoMsg;
            };
            PoolToGauge: {
                typeUrl: string;
                encode(message: _136.PoolToGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.PoolToGauge;
                fromPartial(object: Partial<_136.PoolToGauge>): _136.PoolToGauge;
                fromAmino(object: _136.PoolToGaugeAmino): _136.PoolToGauge;
                toAmino(message: _136.PoolToGauge): _136.PoolToGaugeAmino;
                fromAminoMsg(object: _136.PoolToGaugeAminoMsg): _136.PoolToGauge;
                toAminoMsg(message: _136.PoolToGauge): _136.PoolToGaugeAminoMsg;
                fromProtoMsg(message: _136.PoolToGaugeProtoMsg): _136.PoolToGauge;
                toProto(message: _136.PoolToGauge): Uint8Array;
                toProtoMsg(message: _136.PoolToGauge): _136.PoolToGaugeProtoMsg;
            };
            PoolToGauges: {
                typeUrl: string;
                encode(message: _136.PoolToGauges, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.PoolToGauges;
                fromPartial(object: Partial<_136.PoolToGauges>): _136.PoolToGauges;
                fromAmino(object: _136.PoolToGaugesAmino): _136.PoolToGauges;
                toAmino(message: _136.PoolToGauges): _136.PoolToGaugesAmino;
                fromAminoMsg(object: _136.PoolToGaugesAminoMsg): _136.PoolToGauges;
                toAminoMsg(message: _136.PoolToGauges): _136.PoolToGaugesAminoMsg;
                fromProtoMsg(message: _136.PoolToGaugesProtoMsg): _136.PoolToGauges;
                toProto(message: _136.PoolToGauges): Uint8Array;
                toProtoMsg(message: _136.PoolToGauges): _136.PoolToGaugesProtoMsg;
            };
            ReplacePoolIncentivesProposal: {
                typeUrl: string;
                encode(message: _135.ReplacePoolIncentivesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.ReplacePoolIncentivesProposal;
                fromPartial(object: Partial<_135.ReplacePoolIncentivesProposal>): _135.ReplacePoolIncentivesProposal;
                fromAmino(object: _135.ReplacePoolIncentivesProposalAmino): _135.ReplacePoolIncentivesProposal;
                toAmino(message: _135.ReplacePoolIncentivesProposal): _135.ReplacePoolIncentivesProposalAmino;
                fromAminoMsg(object: _135.ReplacePoolIncentivesProposalAminoMsg): _135.ReplacePoolIncentivesProposal;
                toAminoMsg(message: _135.ReplacePoolIncentivesProposal): _135.ReplacePoolIncentivesProposalAminoMsg;
                fromProtoMsg(message: _135.ReplacePoolIncentivesProposalProtoMsg): _135.ReplacePoolIncentivesProposal;
                toProto(message: _135.ReplacePoolIncentivesProposal): Uint8Array;
                toProtoMsg(message: _135.ReplacePoolIncentivesProposal): _135.ReplacePoolIncentivesProposalProtoMsg;
            };
            UpdatePoolIncentivesProposal: {
                typeUrl: string;
                encode(message: _135.UpdatePoolIncentivesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.UpdatePoolIncentivesProposal;
                fromPartial(object: Partial<_135.UpdatePoolIncentivesProposal>): _135.UpdatePoolIncentivesProposal;
                fromAmino(object: _135.UpdatePoolIncentivesProposalAmino): _135.UpdatePoolIncentivesProposal;
                toAmino(message: _135.UpdatePoolIncentivesProposal): _135.UpdatePoolIncentivesProposalAmino;
                fromAminoMsg(object: _135.UpdatePoolIncentivesProposalAminoMsg): _135.UpdatePoolIncentivesProposal;
                toAminoMsg(message: _135.UpdatePoolIncentivesProposal): _135.UpdatePoolIncentivesProposalAminoMsg;
                fromProtoMsg(message: _135.UpdatePoolIncentivesProposalProtoMsg): _135.UpdatePoolIncentivesProposal;
                toProto(message: _135.UpdatePoolIncentivesProposal): Uint8Array;
                toProtoMsg(message: _135.UpdatePoolIncentivesProposal): _135.UpdatePoolIncentivesProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _134.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.GenesisState;
                fromPartial(object: Partial<_134.GenesisState>): _134.GenesisState;
                fromAmino(object: _134.GenesisStateAmino): _134.GenesisState;
                toAmino(message: _134.GenesisState): _134.GenesisStateAmino;
                fromAminoMsg(object: _134.GenesisStateAminoMsg): _134.GenesisState;
                toAminoMsg(message: _134.GenesisState): _134.GenesisStateAminoMsg;
                fromProtoMsg(message: _134.GenesisStateProtoMsg): _134.GenesisState;
                toProto(message: _134.GenesisState): Uint8Array;
                toProtoMsg(message: _134.GenesisState): _134.GenesisStateProtoMsg;
            };
        };
    }
    namespace poolmanager {
        const v1beta1: {
            MsgClientImpl: typeof _327.MsgClientImpl;
            QueryClientImpl: typeof _313.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _141.ParamsRequest): Promise<_141.ParamsResponse>;
                estimateSwapExactAmountIn(request: _141.EstimateSwapExactAmountInRequest): Promise<_141.EstimateSwapExactAmountInResponse>;
                estimateSinglePoolSwapExactAmountIn(request: _141.EstimateSinglePoolSwapExactAmountInRequest): Promise<_141.EstimateSwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _141.EstimateSwapExactAmountOutRequest): Promise<_141.EstimateSwapExactAmountOutResponse>;
                estimateSinglePoolSwapExactAmountOut(request: _141.EstimateSinglePoolSwapExactAmountOutRequest): Promise<_141.EstimateSwapExactAmountOutResponse>;
                numPools(request?: _141.NumPoolsRequest): Promise<_141.NumPoolsResponse>;
                pool(request: _141.PoolRequest): Promise<_141.PoolResponse>;
                allPools(request?: _141.AllPoolsRequest): Promise<_141.AllPoolsResponse>;
                spotPrice(request: _141.SpotPriceRequest): Promise<_141.SpotPriceResponse>;
                totalPoolLiquidity(request: _141.TotalPoolLiquidityRequest): Promise<_141.TotalPoolLiquidityResponse>;
                totalLiquidity(request?: _141.TotalLiquidityRequest): Promise<_141.TotalLiquidityResponse>;
            };
            LCDQueryClient: typeof _295.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    swapExactAmountIn(value: _143.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _143.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    splitRouteSwapExactAmountIn(value: _143.MsgSplitRouteSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    splitRouteSwapExactAmountOut(value: _143.MsgSplitRouteSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    swapExactAmountIn(value: _143.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _143.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _143.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _143.MsgSwapExactAmountOut;
                    };
                    splitRouteSwapExactAmountIn(value: _143.MsgSplitRouteSwapExactAmountIn): {
                        typeUrl: string;
                        value: _143.MsgSplitRouteSwapExactAmountIn;
                    };
                    splitRouteSwapExactAmountOut(value: _143.MsgSplitRouteSwapExactAmountOut): {
                        typeUrl: string;
                        value: _143.MsgSplitRouteSwapExactAmountOut;
                    };
                };
                fromPartial: {
                    swapExactAmountIn(value: _143.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _143.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _143.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _143.MsgSwapExactAmountOut;
                    };
                    splitRouteSwapExactAmountIn(value: _143.MsgSplitRouteSwapExactAmountIn): {
                        typeUrl: string;
                        value: _143.MsgSplitRouteSwapExactAmountIn;
                    };
                    splitRouteSwapExactAmountOut(value: _143.MsgSplitRouteSwapExactAmountOut): {
                        typeUrl: string;
                        value: _143.MsgSplitRouteSwapExactAmountOut;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _143.MsgSwapExactAmountIn) => _143.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _143.MsgSwapExactAmountInAmino) => _143.MsgSwapExactAmountIn;
                };
                "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _143.MsgSwapExactAmountOut) => _143.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _143.MsgSwapExactAmountOutAmino) => _143.MsgSwapExactAmountOut;
                };
                "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _143.MsgSplitRouteSwapExactAmountIn) => _143.MsgSplitRouteSwapExactAmountInAmino;
                    fromAmino: (object: _143.MsgSplitRouteSwapExactAmountInAmino) => _143.MsgSplitRouteSwapExactAmountIn;
                };
                "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _143.MsgSplitRouteSwapExactAmountOut) => _143.MsgSplitRouteSwapExactAmountOutAmino;
                    fromAmino: (object: _143.MsgSplitRouteSwapExactAmountOutAmino) => _143.MsgSplitRouteSwapExactAmountOut;
                };
            };
            MsgSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _143.MsgSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_143.MsgSwapExactAmountIn>): _143.MsgSwapExactAmountIn;
                fromAmino(object: _143.MsgSwapExactAmountInAmino): _143.MsgSwapExactAmountIn;
                toAmino(message: _143.MsgSwapExactAmountIn): _143.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _143.MsgSwapExactAmountInAminoMsg): _143.MsgSwapExactAmountIn;
                toAminoMsg(message: _143.MsgSwapExactAmountIn): _143.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _143.MsgSwapExactAmountInProtoMsg): _143.MsgSwapExactAmountIn;
                toProto(message: _143.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _143.MsgSwapExactAmountIn): _143.MsgSwapExactAmountInProtoMsg;
            };
            MsgSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _143.MsgSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_143.MsgSwapExactAmountInResponse>): _143.MsgSwapExactAmountInResponse;
                fromAmino(object: _143.MsgSwapExactAmountInResponseAmino): _143.MsgSwapExactAmountInResponse;
                toAmino(message: _143.MsgSwapExactAmountInResponse): _143.MsgSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _143.MsgSwapExactAmountInResponseAminoMsg): _143.MsgSwapExactAmountInResponse;
                toAminoMsg(message: _143.MsgSwapExactAmountInResponse): _143.MsgSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _143.MsgSwapExactAmountInResponseProtoMsg): _143.MsgSwapExactAmountInResponse;
                toProto(message: _143.MsgSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _143.MsgSwapExactAmountInResponse): _143.MsgSwapExactAmountInResponseProtoMsg;
            };
            MsgSplitRouteSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _143.MsgSplitRouteSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.MsgSplitRouteSwapExactAmountIn;
                fromPartial(object: Partial<_143.MsgSplitRouteSwapExactAmountIn>): _143.MsgSplitRouteSwapExactAmountIn;
                fromAmino(object: _143.MsgSplitRouteSwapExactAmountInAmino): _143.MsgSplitRouteSwapExactAmountIn;
                toAmino(message: _143.MsgSplitRouteSwapExactAmountIn): _143.MsgSplitRouteSwapExactAmountInAmino;
                fromAminoMsg(object: _143.MsgSplitRouteSwapExactAmountInAminoMsg): _143.MsgSplitRouteSwapExactAmountIn;
                toAminoMsg(message: _143.MsgSplitRouteSwapExactAmountIn): _143.MsgSplitRouteSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _143.MsgSplitRouteSwapExactAmountInProtoMsg): _143.MsgSplitRouteSwapExactAmountIn;
                toProto(message: _143.MsgSplitRouteSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _143.MsgSplitRouteSwapExactAmountIn): _143.MsgSplitRouteSwapExactAmountInProtoMsg;
            };
            MsgSplitRouteSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _143.MsgSplitRouteSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.MsgSplitRouteSwapExactAmountInResponse;
                fromPartial(object: Partial<_143.MsgSplitRouteSwapExactAmountInResponse>): _143.MsgSplitRouteSwapExactAmountInResponse;
                fromAmino(object: _143.MsgSplitRouteSwapExactAmountInResponseAmino): _143.MsgSplitRouteSwapExactAmountInResponse;
                toAmino(message: _143.MsgSplitRouteSwapExactAmountInResponse): _143.MsgSplitRouteSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _143.MsgSplitRouteSwapExactAmountInResponseAminoMsg): _143.MsgSplitRouteSwapExactAmountInResponse;
                toAminoMsg(message: _143.MsgSplitRouteSwapExactAmountInResponse): _143.MsgSplitRouteSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _143.MsgSplitRouteSwapExactAmountInResponseProtoMsg): _143.MsgSplitRouteSwapExactAmountInResponse;
                toProto(message: _143.MsgSplitRouteSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _143.MsgSplitRouteSwapExactAmountInResponse): _143.MsgSplitRouteSwapExactAmountInResponseProtoMsg;
            };
            MsgSwapExactAmountOut: {
                typeUrl: string;
                encode(message: _143.MsgSwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_143.MsgSwapExactAmountOut>): _143.MsgSwapExactAmountOut;
                fromAmino(object: _143.MsgSwapExactAmountOutAmino): _143.MsgSwapExactAmountOut;
                toAmino(message: _143.MsgSwapExactAmountOut): _143.MsgSwapExactAmountOutAmino;
                fromAminoMsg(object: _143.MsgSwapExactAmountOutAminoMsg): _143.MsgSwapExactAmountOut;
                toAminoMsg(message: _143.MsgSwapExactAmountOut): _143.MsgSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _143.MsgSwapExactAmountOutProtoMsg): _143.MsgSwapExactAmountOut;
                toProto(message: _143.MsgSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _143.MsgSwapExactAmountOut): _143.MsgSwapExactAmountOutProtoMsg;
            };
            MsgSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _143.MsgSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_143.MsgSwapExactAmountOutResponse>): _143.MsgSwapExactAmountOutResponse;
                fromAmino(object: _143.MsgSwapExactAmountOutResponseAmino): _143.MsgSwapExactAmountOutResponse;
                toAmino(message: _143.MsgSwapExactAmountOutResponse): _143.MsgSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _143.MsgSwapExactAmountOutResponseAminoMsg): _143.MsgSwapExactAmountOutResponse;
                toAminoMsg(message: _143.MsgSwapExactAmountOutResponse): _143.MsgSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _143.MsgSwapExactAmountOutResponseProtoMsg): _143.MsgSwapExactAmountOutResponse;
                toProto(message: _143.MsgSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _143.MsgSwapExactAmountOutResponse): _143.MsgSwapExactAmountOutResponseProtoMsg;
            };
            MsgSplitRouteSwapExactAmountOut: {
                typeUrl: string;
                encode(message: _143.MsgSplitRouteSwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.MsgSplitRouteSwapExactAmountOut;
                fromPartial(object: Partial<_143.MsgSplitRouteSwapExactAmountOut>): _143.MsgSplitRouteSwapExactAmountOut;
                fromAmino(object: _143.MsgSplitRouteSwapExactAmountOutAmino): _143.MsgSplitRouteSwapExactAmountOut;
                toAmino(message: _143.MsgSplitRouteSwapExactAmountOut): _143.MsgSplitRouteSwapExactAmountOutAmino;
                fromAminoMsg(object: _143.MsgSplitRouteSwapExactAmountOutAminoMsg): _143.MsgSplitRouteSwapExactAmountOut;
                toAminoMsg(message: _143.MsgSplitRouteSwapExactAmountOut): _143.MsgSplitRouteSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _143.MsgSplitRouteSwapExactAmountOutProtoMsg): _143.MsgSplitRouteSwapExactAmountOut;
                toProto(message: _143.MsgSplitRouteSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _143.MsgSplitRouteSwapExactAmountOut): _143.MsgSplitRouteSwapExactAmountOutProtoMsg;
            };
            MsgSplitRouteSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _143.MsgSplitRouteSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.MsgSplitRouteSwapExactAmountOutResponse;
                fromPartial(object: Partial<_143.MsgSplitRouteSwapExactAmountOutResponse>): _143.MsgSplitRouteSwapExactAmountOutResponse;
                fromAmino(object: _143.MsgSplitRouteSwapExactAmountOutResponseAmino): _143.MsgSplitRouteSwapExactAmountOutResponse;
                toAmino(message: _143.MsgSplitRouteSwapExactAmountOutResponse): _143.MsgSplitRouteSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _143.MsgSplitRouteSwapExactAmountOutResponseAminoMsg): _143.MsgSplitRouteSwapExactAmountOutResponse;
                toAminoMsg(message: _143.MsgSplitRouteSwapExactAmountOutResponse): _143.MsgSplitRouteSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _143.MsgSplitRouteSwapExactAmountOutResponseProtoMsg): _143.MsgSplitRouteSwapExactAmountOutResponse;
                toProto(message: _143.MsgSplitRouteSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _143.MsgSplitRouteSwapExactAmountOutResponse): _143.MsgSplitRouteSwapExactAmountOutResponseProtoMsg;
            };
            SwapAmountInRoute: {
                typeUrl: string;
                encode(message: _142.SwapAmountInRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.SwapAmountInRoute;
                fromPartial(object: Partial<_142.SwapAmountInRoute>): _142.SwapAmountInRoute;
                fromAmino(object: _142.SwapAmountInRouteAmino): _142.SwapAmountInRoute;
                toAmino(message: _142.SwapAmountInRoute): _142.SwapAmountInRouteAmino;
                fromAminoMsg(object: _142.SwapAmountInRouteAminoMsg): _142.SwapAmountInRoute;
                toAminoMsg(message: _142.SwapAmountInRoute): _142.SwapAmountInRouteAminoMsg;
                fromProtoMsg(message: _142.SwapAmountInRouteProtoMsg): _142.SwapAmountInRoute;
                toProto(message: _142.SwapAmountInRoute): Uint8Array;
                toProtoMsg(message: _142.SwapAmountInRoute): _142.SwapAmountInRouteProtoMsg;
            };
            SwapAmountOutRoute: {
                typeUrl: string;
                encode(message: _142.SwapAmountOutRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.SwapAmountOutRoute;
                fromPartial(object: Partial<_142.SwapAmountOutRoute>): _142.SwapAmountOutRoute;
                fromAmino(object: _142.SwapAmountOutRouteAmino): _142.SwapAmountOutRoute;
                toAmino(message: _142.SwapAmountOutRoute): _142.SwapAmountOutRouteAmino;
                fromAminoMsg(object: _142.SwapAmountOutRouteAminoMsg): _142.SwapAmountOutRoute;
                toAminoMsg(message: _142.SwapAmountOutRoute): _142.SwapAmountOutRouteAminoMsg;
                fromProtoMsg(message: _142.SwapAmountOutRouteProtoMsg): _142.SwapAmountOutRoute;
                toProto(message: _142.SwapAmountOutRoute): Uint8Array;
                toProtoMsg(message: _142.SwapAmountOutRoute): _142.SwapAmountOutRouteProtoMsg;
            };
            SwapAmountInSplitRoute: {
                typeUrl: string;
                encode(message: _142.SwapAmountInSplitRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.SwapAmountInSplitRoute;
                fromPartial(object: Partial<_142.SwapAmountInSplitRoute>): _142.SwapAmountInSplitRoute;
                fromAmino(object: _142.SwapAmountInSplitRouteAmino): _142.SwapAmountInSplitRoute;
                toAmino(message: _142.SwapAmountInSplitRoute): _142.SwapAmountInSplitRouteAmino;
                fromAminoMsg(object: _142.SwapAmountInSplitRouteAminoMsg): _142.SwapAmountInSplitRoute;
                toAminoMsg(message: _142.SwapAmountInSplitRoute): _142.SwapAmountInSplitRouteAminoMsg;
                fromProtoMsg(message: _142.SwapAmountInSplitRouteProtoMsg): _142.SwapAmountInSplitRoute;
                toProto(message: _142.SwapAmountInSplitRoute): Uint8Array;
                toProtoMsg(message: _142.SwapAmountInSplitRoute): _142.SwapAmountInSplitRouteProtoMsg;
            };
            SwapAmountOutSplitRoute: {
                typeUrl: string;
                encode(message: _142.SwapAmountOutSplitRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.SwapAmountOutSplitRoute;
                fromPartial(object: Partial<_142.SwapAmountOutSplitRoute>): _142.SwapAmountOutSplitRoute;
                fromAmino(object: _142.SwapAmountOutSplitRouteAmino): _142.SwapAmountOutSplitRoute;
                toAmino(message: _142.SwapAmountOutSplitRoute): _142.SwapAmountOutSplitRouteAmino;
                fromAminoMsg(object: _142.SwapAmountOutSplitRouteAminoMsg): _142.SwapAmountOutSplitRoute;
                toAminoMsg(message: _142.SwapAmountOutSplitRoute): _142.SwapAmountOutSplitRouteAminoMsg;
                fromProtoMsg(message: _142.SwapAmountOutSplitRouteProtoMsg): _142.SwapAmountOutSplitRoute;
                toProto(message: _142.SwapAmountOutSplitRoute): Uint8Array;
                toProtoMsg(message: _142.SwapAmountOutSplitRoute): _142.SwapAmountOutSplitRouteProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _141.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.ParamsRequest;
                fromPartial(_: Partial<_141.ParamsRequest>): _141.ParamsRequest;
                fromAmino(_: _141.ParamsRequestAmino): _141.ParamsRequest;
                toAmino(_: _141.ParamsRequest): _141.ParamsRequestAmino;
                fromAminoMsg(object: _141.ParamsRequestAminoMsg): _141.ParamsRequest;
                toAminoMsg(message: _141.ParamsRequest): _141.ParamsRequestAminoMsg;
                fromProtoMsg(message: _141.ParamsRequestProtoMsg): _141.ParamsRequest;
                toProto(message: _141.ParamsRequest): Uint8Array;
                toProtoMsg(message: _141.ParamsRequest): _141.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _141.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.ParamsResponse;
                fromPartial(object: Partial<_141.ParamsResponse>): _141.ParamsResponse;
                fromAmino(object: _141.ParamsResponseAmino): _141.ParamsResponse;
                toAmino(message: _141.ParamsResponse): _141.ParamsResponseAmino;
                fromAminoMsg(object: _141.ParamsResponseAminoMsg): _141.ParamsResponse;
                toAminoMsg(message: _141.ParamsResponse): _141.ParamsResponseAminoMsg;
                fromProtoMsg(message: _141.ParamsResponseProtoMsg): _141.ParamsResponse;
                toProto(message: _141.ParamsResponse): Uint8Array;
                toProtoMsg(message: _141.ParamsResponse): _141.ParamsResponseProtoMsg;
            };
            EstimateSwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _141.EstimateSwapExactAmountInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.EstimateSwapExactAmountInRequest;
                fromPartial(object: Partial<_141.EstimateSwapExactAmountInRequest>): _141.EstimateSwapExactAmountInRequest;
                fromAmino(object: _141.EstimateSwapExactAmountInRequestAmino): _141.EstimateSwapExactAmountInRequest;
                toAmino(message: _141.EstimateSwapExactAmountInRequest): _141.EstimateSwapExactAmountInRequestAmino;
                fromAminoMsg(object: _141.EstimateSwapExactAmountInRequestAminoMsg): _141.EstimateSwapExactAmountInRequest;
                toAminoMsg(message: _141.EstimateSwapExactAmountInRequest): _141.EstimateSwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _141.EstimateSwapExactAmountInRequestProtoMsg): _141.EstimateSwapExactAmountInRequest;
                toProto(message: _141.EstimateSwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _141.EstimateSwapExactAmountInRequest): _141.EstimateSwapExactAmountInRequestProtoMsg;
            };
            EstimateSinglePoolSwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _141.EstimateSinglePoolSwapExactAmountInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.EstimateSinglePoolSwapExactAmountInRequest;
                fromPartial(object: Partial<_141.EstimateSinglePoolSwapExactAmountInRequest>): _141.EstimateSinglePoolSwapExactAmountInRequest;
                fromAmino(object: _141.EstimateSinglePoolSwapExactAmountInRequestAmino): _141.EstimateSinglePoolSwapExactAmountInRequest;
                toAmino(message: _141.EstimateSinglePoolSwapExactAmountInRequest): _141.EstimateSinglePoolSwapExactAmountInRequestAmino;
                fromAminoMsg(object: _141.EstimateSinglePoolSwapExactAmountInRequestAminoMsg): _141.EstimateSinglePoolSwapExactAmountInRequest;
                toAminoMsg(message: _141.EstimateSinglePoolSwapExactAmountInRequest): _141.EstimateSinglePoolSwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _141.EstimateSinglePoolSwapExactAmountInRequestProtoMsg): _141.EstimateSinglePoolSwapExactAmountInRequest;
                toProto(message: _141.EstimateSinglePoolSwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _141.EstimateSinglePoolSwapExactAmountInRequest): _141.EstimateSinglePoolSwapExactAmountInRequestProtoMsg;
            };
            EstimateSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _141.EstimateSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.EstimateSwapExactAmountInResponse;
                fromPartial(object: Partial<_141.EstimateSwapExactAmountInResponse>): _141.EstimateSwapExactAmountInResponse;
                fromAmino(object: _141.EstimateSwapExactAmountInResponseAmino): _141.EstimateSwapExactAmountInResponse;
                toAmino(message: _141.EstimateSwapExactAmountInResponse): _141.EstimateSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _141.EstimateSwapExactAmountInResponseAminoMsg): _141.EstimateSwapExactAmountInResponse;
                toAminoMsg(message: _141.EstimateSwapExactAmountInResponse): _141.EstimateSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _141.EstimateSwapExactAmountInResponseProtoMsg): _141.EstimateSwapExactAmountInResponse;
                toProto(message: _141.EstimateSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _141.EstimateSwapExactAmountInResponse): _141.EstimateSwapExactAmountInResponseProtoMsg;
            };
            EstimateSwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _141.EstimateSwapExactAmountOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.EstimateSwapExactAmountOutRequest;
                fromPartial(object: Partial<_141.EstimateSwapExactAmountOutRequest>): _141.EstimateSwapExactAmountOutRequest;
                fromAmino(object: _141.EstimateSwapExactAmountOutRequestAmino): _141.EstimateSwapExactAmountOutRequest;
                toAmino(message: _141.EstimateSwapExactAmountOutRequest): _141.EstimateSwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _141.EstimateSwapExactAmountOutRequestAminoMsg): _141.EstimateSwapExactAmountOutRequest;
                toAminoMsg(message: _141.EstimateSwapExactAmountOutRequest): _141.EstimateSwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _141.EstimateSwapExactAmountOutRequestProtoMsg): _141.EstimateSwapExactAmountOutRequest;
                toProto(message: _141.EstimateSwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _141.EstimateSwapExactAmountOutRequest): _141.EstimateSwapExactAmountOutRequestProtoMsg;
            };
            EstimateSinglePoolSwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _141.EstimateSinglePoolSwapExactAmountOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.EstimateSinglePoolSwapExactAmountOutRequest;
                fromPartial(object: Partial<_141.EstimateSinglePoolSwapExactAmountOutRequest>): _141.EstimateSinglePoolSwapExactAmountOutRequest;
                fromAmino(object: _141.EstimateSinglePoolSwapExactAmountOutRequestAmino): _141.EstimateSinglePoolSwapExactAmountOutRequest;
                toAmino(message: _141.EstimateSinglePoolSwapExactAmountOutRequest): _141.EstimateSinglePoolSwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _141.EstimateSinglePoolSwapExactAmountOutRequestAminoMsg): _141.EstimateSinglePoolSwapExactAmountOutRequest;
                toAminoMsg(message: _141.EstimateSinglePoolSwapExactAmountOutRequest): _141.EstimateSinglePoolSwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _141.EstimateSinglePoolSwapExactAmountOutRequestProtoMsg): _141.EstimateSinglePoolSwapExactAmountOutRequest;
                toProto(message: _141.EstimateSinglePoolSwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _141.EstimateSinglePoolSwapExactAmountOutRequest): _141.EstimateSinglePoolSwapExactAmountOutRequestProtoMsg;
            };
            EstimateSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _141.EstimateSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.EstimateSwapExactAmountOutResponse;
                fromPartial(object: Partial<_141.EstimateSwapExactAmountOutResponse>): _141.EstimateSwapExactAmountOutResponse;
                fromAmino(object: _141.EstimateSwapExactAmountOutResponseAmino): _141.EstimateSwapExactAmountOutResponse;
                toAmino(message: _141.EstimateSwapExactAmountOutResponse): _141.EstimateSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _141.EstimateSwapExactAmountOutResponseAminoMsg): _141.EstimateSwapExactAmountOutResponse;
                toAminoMsg(message: _141.EstimateSwapExactAmountOutResponse): _141.EstimateSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _141.EstimateSwapExactAmountOutResponseProtoMsg): _141.EstimateSwapExactAmountOutResponse;
                toProto(message: _141.EstimateSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _141.EstimateSwapExactAmountOutResponse): _141.EstimateSwapExactAmountOutResponseProtoMsg;
            };
            NumPoolsRequest: {
                typeUrl: string;
                encode(_: _141.NumPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.NumPoolsRequest;
                fromPartial(_: Partial<_141.NumPoolsRequest>): _141.NumPoolsRequest;
                fromAmino(_: _141.NumPoolsRequestAmino): _141.NumPoolsRequest;
                toAmino(_: _141.NumPoolsRequest): _141.NumPoolsRequestAmino;
                fromAminoMsg(object: _141.NumPoolsRequestAminoMsg): _141.NumPoolsRequest;
                toAminoMsg(message: _141.NumPoolsRequest): _141.NumPoolsRequestAminoMsg;
                fromProtoMsg(message: _141.NumPoolsRequestProtoMsg): _141.NumPoolsRequest;
                toProto(message: _141.NumPoolsRequest): Uint8Array;
                toProtoMsg(message: _141.NumPoolsRequest): _141.NumPoolsRequestProtoMsg;
            };
            NumPoolsResponse: {
                typeUrl: string;
                encode(message: _141.NumPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.NumPoolsResponse;
                fromPartial(object: Partial<_141.NumPoolsResponse>): _141.NumPoolsResponse;
                fromAmino(object: _141.NumPoolsResponseAmino): _141.NumPoolsResponse;
                toAmino(message: _141.NumPoolsResponse): _141.NumPoolsResponseAmino;
                fromAminoMsg(object: _141.NumPoolsResponseAminoMsg): _141.NumPoolsResponse;
                toAminoMsg(message: _141.NumPoolsResponse): _141.NumPoolsResponseAminoMsg;
                fromProtoMsg(message: _141.NumPoolsResponseProtoMsg): _141.NumPoolsResponse;
                toProto(message: _141.NumPoolsResponse): Uint8Array;
                toProtoMsg(message: _141.NumPoolsResponse): _141.NumPoolsResponseProtoMsg;
            };
            PoolRequest: {
                typeUrl: string;
                encode(message: _141.PoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.PoolRequest;
                fromPartial(object: Partial<_141.PoolRequest>): _141.PoolRequest;
                fromAmino(object: _141.PoolRequestAmino): _141.PoolRequest;
                toAmino(message: _141.PoolRequest): _141.PoolRequestAmino;
                fromAminoMsg(object: _141.PoolRequestAminoMsg): _141.PoolRequest;
                toAminoMsg(message: _141.PoolRequest): _141.PoolRequestAminoMsg;
                fromProtoMsg(message: _141.PoolRequestProtoMsg): _141.PoolRequest;
                toProto(message: _141.PoolRequest): Uint8Array;
                toProtoMsg(message: _141.PoolRequest): _141.PoolRequestProtoMsg;
            };
            PoolResponse: {
                typeUrl: string;
                encode(message: _141.PoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.PoolResponse;
                fromPartial(object: Partial<_141.PoolResponse>): _141.PoolResponse;
                fromAmino(object: _141.PoolResponseAmino): _141.PoolResponse;
                toAmino(message: _141.PoolResponse): _141.PoolResponseAmino;
                fromAminoMsg(object: _141.PoolResponseAminoMsg): _141.PoolResponse;
                toAminoMsg(message: _141.PoolResponse): _141.PoolResponseAminoMsg;
                fromProtoMsg(message: _141.PoolResponseProtoMsg): _141.PoolResponse;
                toProto(message: _141.PoolResponse): Uint8Array;
                toProtoMsg(message: _141.PoolResponse): _141.PoolResponseProtoMsg;
            };
            AllPoolsRequest: {
                typeUrl: string;
                encode(_: _141.AllPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.AllPoolsRequest;
                fromPartial(_: Partial<_141.AllPoolsRequest>): _141.AllPoolsRequest;
                fromAmino(_: _141.AllPoolsRequestAmino): _141.AllPoolsRequest;
                toAmino(_: _141.AllPoolsRequest): _141.AllPoolsRequestAmino;
                fromAminoMsg(object: _141.AllPoolsRequestAminoMsg): _141.AllPoolsRequest;
                toAminoMsg(message: _141.AllPoolsRequest): _141.AllPoolsRequestAminoMsg;
                fromProtoMsg(message: _141.AllPoolsRequestProtoMsg): _141.AllPoolsRequest;
                toProto(message: _141.AllPoolsRequest): Uint8Array;
                toProtoMsg(message: _141.AllPoolsRequest): _141.AllPoolsRequestProtoMsg;
            };
            AllPoolsResponse: {
                typeUrl: string;
                encode(message: _141.AllPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.AllPoolsResponse;
                fromPartial(object: Partial<_141.AllPoolsResponse>): _141.AllPoolsResponse;
                fromAmino(object: _141.AllPoolsResponseAmino): _141.AllPoolsResponse;
                toAmino(message: _141.AllPoolsResponse): _141.AllPoolsResponseAmino;
                fromAminoMsg(object: _141.AllPoolsResponseAminoMsg): _141.AllPoolsResponse;
                toAminoMsg(message: _141.AllPoolsResponse): _141.AllPoolsResponseAminoMsg;
                fromProtoMsg(message: _141.AllPoolsResponseProtoMsg): _141.AllPoolsResponse;
                toProto(message: _141.AllPoolsResponse): Uint8Array;
                toProtoMsg(message: _141.AllPoolsResponse): _141.AllPoolsResponseProtoMsg;
            };
            SpotPriceRequest: {
                typeUrl: string;
                encode(message: _141.SpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.SpotPriceRequest;
                fromPartial(object: Partial<_141.SpotPriceRequest>): _141.SpotPriceRequest;
                fromAmino(object: _141.SpotPriceRequestAmino): _141.SpotPriceRequest;
                toAmino(message: _141.SpotPriceRequest): _141.SpotPriceRequestAmino;
                fromAminoMsg(object: _141.SpotPriceRequestAminoMsg): _141.SpotPriceRequest;
                toAminoMsg(message: _141.SpotPriceRequest): _141.SpotPriceRequestAminoMsg;
                fromProtoMsg(message: _141.SpotPriceRequestProtoMsg): _141.SpotPriceRequest;
                toProto(message: _141.SpotPriceRequest): Uint8Array;
                toProtoMsg(message: _141.SpotPriceRequest): _141.SpotPriceRequestProtoMsg;
            };
            SpotPriceResponse: {
                typeUrl: string;
                encode(message: _141.SpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.SpotPriceResponse;
                fromPartial(object: Partial<_141.SpotPriceResponse>): _141.SpotPriceResponse;
                fromAmino(object: _141.SpotPriceResponseAmino): _141.SpotPriceResponse;
                toAmino(message: _141.SpotPriceResponse): _141.SpotPriceResponseAmino;
                fromAminoMsg(object: _141.SpotPriceResponseAminoMsg): _141.SpotPriceResponse;
                toAminoMsg(message: _141.SpotPriceResponse): _141.SpotPriceResponseAminoMsg;
                fromProtoMsg(message: _141.SpotPriceResponseProtoMsg): _141.SpotPriceResponse;
                toProto(message: _141.SpotPriceResponse): Uint8Array;
                toProtoMsg(message: _141.SpotPriceResponse): _141.SpotPriceResponseProtoMsg;
            };
            TotalPoolLiquidityRequest: {
                typeUrl: string;
                encode(message: _141.TotalPoolLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.TotalPoolLiquidityRequest;
                fromPartial(object: Partial<_141.TotalPoolLiquidityRequest>): _141.TotalPoolLiquidityRequest;
                fromAmino(object: _141.TotalPoolLiquidityRequestAmino): _141.TotalPoolLiquidityRequest;
                toAmino(message: _141.TotalPoolLiquidityRequest): _141.TotalPoolLiquidityRequestAmino;
                fromAminoMsg(object: _141.TotalPoolLiquidityRequestAminoMsg): _141.TotalPoolLiquidityRequest;
                toAminoMsg(message: _141.TotalPoolLiquidityRequest): _141.TotalPoolLiquidityRequestAminoMsg;
                fromProtoMsg(message: _141.TotalPoolLiquidityRequestProtoMsg): _141.TotalPoolLiquidityRequest;
                toProto(message: _141.TotalPoolLiquidityRequest): Uint8Array;
                toProtoMsg(message: _141.TotalPoolLiquidityRequest): _141.TotalPoolLiquidityRequestProtoMsg;
            };
            TotalPoolLiquidityResponse: {
                typeUrl: string;
                encode(message: _141.TotalPoolLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.TotalPoolLiquidityResponse;
                fromPartial(object: Partial<_141.TotalPoolLiquidityResponse>): _141.TotalPoolLiquidityResponse;
                fromAmino(object: _141.TotalPoolLiquidityResponseAmino): _141.TotalPoolLiquidityResponse;
                toAmino(message: _141.TotalPoolLiquidityResponse): _141.TotalPoolLiquidityResponseAmino;
                fromAminoMsg(object: _141.TotalPoolLiquidityResponseAminoMsg): _141.TotalPoolLiquidityResponse;
                toAminoMsg(message: _141.TotalPoolLiquidityResponse): _141.TotalPoolLiquidityResponseAminoMsg;
                fromProtoMsg(message: _141.TotalPoolLiquidityResponseProtoMsg): _141.TotalPoolLiquidityResponse;
                toProto(message: _141.TotalPoolLiquidityResponse): Uint8Array;
                toProtoMsg(message: _141.TotalPoolLiquidityResponse): _141.TotalPoolLiquidityResponseProtoMsg;
            };
            TotalLiquidityRequest: {
                typeUrl: string;
                encode(_: _141.TotalLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.TotalLiquidityRequest;
                fromPartial(_: Partial<_141.TotalLiquidityRequest>): _141.TotalLiquidityRequest;
                fromAmino(_: _141.TotalLiquidityRequestAmino): _141.TotalLiquidityRequest;
                toAmino(_: _141.TotalLiquidityRequest): _141.TotalLiquidityRequestAmino;
                fromAminoMsg(object: _141.TotalLiquidityRequestAminoMsg): _141.TotalLiquidityRequest;
                toAminoMsg(message: _141.TotalLiquidityRequest): _141.TotalLiquidityRequestAminoMsg;
                fromProtoMsg(message: _141.TotalLiquidityRequestProtoMsg): _141.TotalLiquidityRequest;
                toProto(message: _141.TotalLiquidityRequest): Uint8Array;
                toProtoMsg(message: _141.TotalLiquidityRequest): _141.TotalLiquidityRequestProtoMsg;
            };
            TotalLiquidityResponse: {
                typeUrl: string;
                encode(message: _141.TotalLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.TotalLiquidityResponse;
                fromPartial(object: Partial<_141.TotalLiquidityResponse>): _141.TotalLiquidityResponse;
                fromAmino(object: _141.TotalLiquidityResponseAmino): _141.TotalLiquidityResponse;
                toAmino(message: _141.TotalLiquidityResponse): _141.TotalLiquidityResponseAmino;
                fromAminoMsg(object: _141.TotalLiquidityResponseAminoMsg): _141.TotalLiquidityResponse;
                toAminoMsg(message: _141.TotalLiquidityResponse): _141.TotalLiquidityResponseAminoMsg;
                fromProtoMsg(message: _141.TotalLiquidityResponseProtoMsg): _141.TotalLiquidityResponse;
                toProto(message: _141.TotalLiquidityResponse): Uint8Array;
                toProtoMsg(message: _141.TotalLiquidityResponse): _141.TotalLiquidityResponseProtoMsg;
            };
            PoolI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | import("./concentrated-liquidity/pool").Pool | _97.CosmWasmPool | _108.Pool | _115.Pool;
            PoolI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            PoolI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            poolTypeFromJSON(object: any): _140.PoolType;
            poolTypeToJSON(object: _140.PoolType): string;
            PoolType: typeof _140.PoolType;
            PoolTypeSDKType: typeof _140.PoolType;
            PoolTypeAmino: typeof _140.PoolType;
            ModuleRoute: {
                typeUrl: string;
                encode(message: _140.ModuleRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.ModuleRoute;
                fromPartial(object: Partial<_140.ModuleRoute>): _140.ModuleRoute;
                fromAmino(object: _140.ModuleRouteAmino): _140.ModuleRoute;
                toAmino(message: _140.ModuleRoute): _140.ModuleRouteAmino;
                fromAminoMsg(object: _140.ModuleRouteAminoMsg): _140.ModuleRoute;
                toAminoMsg(message: _140.ModuleRoute): _140.ModuleRouteAminoMsg;
                fromProtoMsg(message: _140.ModuleRouteProtoMsg): _140.ModuleRoute;
                toProto(message: _140.ModuleRoute): Uint8Array;
                toProtoMsg(message: _140.ModuleRoute): _140.ModuleRouteProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _139.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.Params;
                fromPartial(object: Partial<_139.Params>): _139.Params;
                fromAmino(object: _139.ParamsAmino): _139.Params;
                toAmino(message: _139.Params): _139.ParamsAmino;
                fromAminoMsg(object: _139.ParamsAminoMsg): _139.Params;
                toAminoMsg(message: _139.Params): _139.ParamsAminoMsg;
                fromProtoMsg(message: _139.ParamsProtoMsg): _139.Params;
                toProto(message: _139.Params): Uint8Array;
                toProtoMsg(message: _139.Params): _139.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _139.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.GenesisState;
                fromPartial(object: Partial<_139.GenesisState>): _139.GenesisState;
                fromAmino(object: _139.GenesisStateAmino): _139.GenesisState;
                toAmino(message: _139.GenesisState): _139.GenesisStateAmino;
                fromAminoMsg(object: _139.GenesisStateAminoMsg): _139.GenesisState;
                toAminoMsg(message: _139.GenesisState): _139.GenesisStateAminoMsg;
                fromProtoMsg(message: _139.GenesisStateProtoMsg): _139.GenesisState;
                toProto(message: _139.GenesisState): Uint8Array;
                toProtoMsg(message: _139.GenesisState): _139.GenesisStateProtoMsg;
            };
        };
    }
    namespace protorev {
        const v1beta1: {
            MsgClientImpl: typeof _328.MsgClientImpl;
            QueryClientImpl: typeof _314.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _148.QueryParamsRequest): Promise<_148.QueryParamsResponse>;
                getProtoRevNumberOfTrades(request?: _148.QueryGetProtoRevNumberOfTradesRequest): Promise<_148.QueryGetProtoRevNumberOfTradesResponse>;
                getProtoRevProfitsByDenom(request: _148.QueryGetProtoRevProfitsByDenomRequest): Promise<_148.QueryGetProtoRevProfitsByDenomResponse>;
                getProtoRevAllProfits(request?: _148.QueryGetProtoRevAllProfitsRequest): Promise<_148.QueryGetProtoRevAllProfitsResponse>;
                getProtoRevStatisticsByRoute(request: _148.QueryGetProtoRevStatisticsByRouteRequest): Promise<_148.QueryGetProtoRevStatisticsByRouteResponse>;
                getProtoRevAllRouteStatistics(request?: _148.QueryGetProtoRevAllRouteStatisticsRequest): Promise<_148.QueryGetProtoRevAllRouteStatisticsResponse>;
                getProtoRevTokenPairArbRoutes(request?: _148.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_148.QueryGetProtoRevTokenPairArbRoutesResponse>;
                getProtoRevAdminAccount(request?: _148.QueryGetProtoRevAdminAccountRequest): Promise<_148.QueryGetProtoRevAdminAccountResponse>;
                getProtoRevDeveloperAccount(request?: _148.QueryGetProtoRevDeveloperAccountRequest): Promise<_148.QueryGetProtoRevDeveloperAccountResponse>;
                getProtoRevPoolWeights(request?: _148.QueryGetProtoRevPoolWeightsRequest): Promise<_148.QueryGetProtoRevPoolWeightsResponse>;
                getProtoRevMaxPoolPointsPerTx(request?: _148.QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<_148.QueryGetProtoRevMaxPoolPointsPerTxResponse>;
                getProtoRevMaxPoolPointsPerBlock(request?: _148.QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<_148.QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
                getProtoRevBaseDenoms(request?: _148.QueryGetProtoRevBaseDenomsRequest): Promise<_148.QueryGetProtoRevBaseDenomsResponse>;
                getProtoRevEnabled(request?: _148.QueryGetProtoRevEnabledRequest): Promise<_148.QueryGetProtoRevEnabledResponse>;
                getProtoRevPool(request: _148.QueryGetProtoRevPoolRequest): Promise<_148.QueryGetProtoRevPoolResponse>;
            };
            LCDQueryClient: typeof _296.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setHotRoutes(value: _149.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDeveloperAccount(value: _149.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setMaxPoolPointsPerTx(value: _149.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setMaxPoolPointsPerBlock(value: _149.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setPoolWeights(value: _149.MsgSetPoolWeights): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setBaseDenoms(value: _149.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setHotRoutes(value: _149.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _149.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _149.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _149.MsgSetDeveloperAccount;
                    };
                    setMaxPoolPointsPerTx(value: _149.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: _149.MsgSetMaxPoolPointsPerTx;
                    };
                    setMaxPoolPointsPerBlock(value: _149.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: _149.MsgSetMaxPoolPointsPerBlock;
                    };
                    setPoolWeights(value: _149.MsgSetPoolWeights): {
                        typeUrl: string;
                        value: _149.MsgSetPoolWeights;
                    };
                    setBaseDenoms(value: _149.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: _149.MsgSetBaseDenoms;
                    };
                };
                fromPartial: {
                    setHotRoutes(value: _149.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _149.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _149.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _149.MsgSetDeveloperAccount;
                    };
                    setMaxPoolPointsPerTx(value: _149.MsgSetMaxPoolPointsPerTx): {
                        typeUrl: string;
                        value: _149.MsgSetMaxPoolPointsPerTx;
                    };
                    setMaxPoolPointsPerBlock(value: _149.MsgSetMaxPoolPointsPerBlock): {
                        typeUrl: string;
                        value: _149.MsgSetMaxPoolPointsPerBlock;
                    };
                    setPoolWeights(value: _149.MsgSetPoolWeights): {
                        typeUrl: string;
                        value: _149.MsgSetPoolWeights;
                    };
                    setBaseDenoms(value: _149.MsgSetBaseDenoms): {
                        typeUrl: string;
                        value: _149.MsgSetBaseDenoms;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
                    aminoType: string;
                    toAmino: (message: _149.MsgSetHotRoutes) => _149.MsgSetHotRoutesAmino;
                    fromAmino: (object: _149.MsgSetHotRoutesAmino) => _149.MsgSetHotRoutes;
                };
                "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
                    aminoType: string;
                    toAmino: (message: _149.MsgSetDeveloperAccount) => _149.MsgSetDeveloperAccountAmino;
                    fromAmino: (object: _149.MsgSetDeveloperAccountAmino) => _149.MsgSetDeveloperAccount;
                };
                "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx": {
                    aminoType: string;
                    toAmino: (message: _149.MsgSetMaxPoolPointsPerTx) => _149.MsgSetMaxPoolPointsPerTxAmino;
                    fromAmino: (object: _149.MsgSetMaxPoolPointsPerTxAmino) => _149.MsgSetMaxPoolPointsPerTx;
                };
                "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock": {
                    aminoType: string;
                    toAmino: (message: _149.MsgSetMaxPoolPointsPerBlock) => _149.MsgSetMaxPoolPointsPerBlockAmino;
                    fromAmino: (object: _149.MsgSetMaxPoolPointsPerBlockAmino) => _149.MsgSetMaxPoolPointsPerBlock;
                };
                "/osmosis.protorev.v1beta1.MsgSetPoolWeights": {
                    aminoType: string;
                    toAmino: (message: _149.MsgSetPoolWeights) => _149.MsgSetPoolWeightsAmino;
                    fromAmino: (object: _149.MsgSetPoolWeightsAmino) => _149.MsgSetPoolWeights;
                };
                "/osmosis.protorev.v1beta1.MsgSetBaseDenoms": {
                    aminoType: string;
                    toAmino: (message: _149.MsgSetBaseDenoms) => _149.MsgSetBaseDenomsAmino;
                    fromAmino: (object: _149.MsgSetBaseDenomsAmino) => _149.MsgSetBaseDenoms;
                };
            };
            MsgSetHotRoutes: {
                typeUrl: string;
                encode(message: _149.MsgSetHotRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgSetHotRoutes;
                fromPartial(object: Partial<_149.MsgSetHotRoutes>): _149.MsgSetHotRoutes;
                fromAmino(object: _149.MsgSetHotRoutesAmino): _149.MsgSetHotRoutes;
                toAmino(message: _149.MsgSetHotRoutes): _149.MsgSetHotRoutesAmino;
                fromAminoMsg(object: _149.MsgSetHotRoutesAminoMsg): _149.MsgSetHotRoutes;
                toAminoMsg(message: _149.MsgSetHotRoutes): _149.MsgSetHotRoutesAminoMsg;
                fromProtoMsg(message: _149.MsgSetHotRoutesProtoMsg): _149.MsgSetHotRoutes;
                toProto(message: _149.MsgSetHotRoutes): Uint8Array;
                toProtoMsg(message: _149.MsgSetHotRoutes): _149.MsgSetHotRoutesProtoMsg;
            };
            MsgSetHotRoutesResponse: {
                typeUrl: string;
                encode(_: _149.MsgSetHotRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgSetHotRoutesResponse;
                fromPartial(_: Partial<_149.MsgSetHotRoutesResponse>): _149.MsgSetHotRoutesResponse;
                fromAmino(_: _149.MsgSetHotRoutesResponseAmino): _149.MsgSetHotRoutesResponse;
                toAmino(_: _149.MsgSetHotRoutesResponse): _149.MsgSetHotRoutesResponseAmino;
                fromAminoMsg(object: _149.MsgSetHotRoutesResponseAminoMsg): _149.MsgSetHotRoutesResponse;
                toAminoMsg(message: _149.MsgSetHotRoutesResponse): _149.MsgSetHotRoutesResponseAminoMsg;
                fromProtoMsg(message: _149.MsgSetHotRoutesResponseProtoMsg): _149.MsgSetHotRoutesResponse;
                toProto(message: _149.MsgSetHotRoutesResponse): Uint8Array;
                toProtoMsg(message: _149.MsgSetHotRoutesResponse): _149.MsgSetHotRoutesResponseProtoMsg;
            };
            MsgSetDeveloperAccount: {
                typeUrl: string;
                encode(message: _149.MsgSetDeveloperAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgSetDeveloperAccount;
                fromPartial(object: Partial<_149.MsgSetDeveloperAccount>): _149.MsgSetDeveloperAccount;
                fromAmino(object: _149.MsgSetDeveloperAccountAmino): _149.MsgSetDeveloperAccount;
                toAmino(message: _149.MsgSetDeveloperAccount): _149.MsgSetDeveloperAccountAmino;
                fromAminoMsg(object: _149.MsgSetDeveloperAccountAminoMsg): _149.MsgSetDeveloperAccount;
                toAminoMsg(message: _149.MsgSetDeveloperAccount): _149.MsgSetDeveloperAccountAminoMsg;
                fromProtoMsg(message: _149.MsgSetDeveloperAccountProtoMsg): _149.MsgSetDeveloperAccount;
                toProto(message: _149.MsgSetDeveloperAccount): Uint8Array;
                toProtoMsg(message: _149.MsgSetDeveloperAccount): _149.MsgSetDeveloperAccountProtoMsg;
            };
            MsgSetDeveloperAccountResponse: {
                typeUrl: string;
                encode(_: _149.MsgSetDeveloperAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgSetDeveloperAccountResponse;
                fromPartial(_: Partial<_149.MsgSetDeveloperAccountResponse>): _149.MsgSetDeveloperAccountResponse;
                fromAmino(_: _149.MsgSetDeveloperAccountResponseAmino): _149.MsgSetDeveloperAccountResponse;
                toAmino(_: _149.MsgSetDeveloperAccountResponse): _149.MsgSetDeveloperAccountResponseAmino;
                fromAminoMsg(object: _149.MsgSetDeveloperAccountResponseAminoMsg): _149.MsgSetDeveloperAccountResponse;
                toAminoMsg(message: _149.MsgSetDeveloperAccountResponse): _149.MsgSetDeveloperAccountResponseAminoMsg;
                fromProtoMsg(message: _149.MsgSetDeveloperAccountResponseProtoMsg): _149.MsgSetDeveloperAccountResponse;
                toProto(message: _149.MsgSetDeveloperAccountResponse): Uint8Array;
                toProtoMsg(message: _149.MsgSetDeveloperAccountResponse): _149.MsgSetDeveloperAccountResponseProtoMsg;
            };
            MsgSetPoolWeights: {
                typeUrl: string;
                encode(message: _149.MsgSetPoolWeights, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgSetPoolWeights;
                fromPartial(object: Partial<_149.MsgSetPoolWeights>): _149.MsgSetPoolWeights;
                fromAmino(object: _149.MsgSetPoolWeightsAmino): _149.MsgSetPoolWeights;
                toAmino(message: _149.MsgSetPoolWeights): _149.MsgSetPoolWeightsAmino;
                fromAminoMsg(object: _149.MsgSetPoolWeightsAminoMsg): _149.MsgSetPoolWeights;
                toAminoMsg(message: _149.MsgSetPoolWeights): _149.MsgSetPoolWeightsAminoMsg;
                fromProtoMsg(message: _149.MsgSetPoolWeightsProtoMsg): _149.MsgSetPoolWeights;
                toProto(message: _149.MsgSetPoolWeights): Uint8Array;
                toProtoMsg(message: _149.MsgSetPoolWeights): _149.MsgSetPoolWeightsProtoMsg;
            };
            MsgSetPoolWeightsResponse: {
                typeUrl: string;
                encode(_: _149.MsgSetPoolWeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgSetPoolWeightsResponse;
                fromPartial(_: Partial<_149.MsgSetPoolWeightsResponse>): _149.MsgSetPoolWeightsResponse;
                fromAmino(_: _149.MsgSetPoolWeightsResponseAmino): _149.MsgSetPoolWeightsResponse;
                toAmino(_: _149.MsgSetPoolWeightsResponse): _149.MsgSetPoolWeightsResponseAmino;
                fromAminoMsg(object: _149.MsgSetPoolWeightsResponseAminoMsg): _149.MsgSetPoolWeightsResponse;
                toAminoMsg(message: _149.MsgSetPoolWeightsResponse): _149.MsgSetPoolWeightsResponseAminoMsg;
                fromProtoMsg(message: _149.MsgSetPoolWeightsResponseProtoMsg): _149.MsgSetPoolWeightsResponse;
                toProto(message: _149.MsgSetPoolWeightsResponse): Uint8Array;
                toProtoMsg(message: _149.MsgSetPoolWeightsResponse): _149.MsgSetPoolWeightsResponseProtoMsg;
            };
            MsgSetMaxPoolPointsPerTx: {
                typeUrl: string;
                encode(message: _149.MsgSetMaxPoolPointsPerTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgSetMaxPoolPointsPerTx;
                fromPartial(object: Partial<_149.MsgSetMaxPoolPointsPerTx>): _149.MsgSetMaxPoolPointsPerTx;
                fromAmino(object: _149.MsgSetMaxPoolPointsPerTxAmino): _149.MsgSetMaxPoolPointsPerTx;
                toAmino(message: _149.MsgSetMaxPoolPointsPerTx): _149.MsgSetMaxPoolPointsPerTxAmino;
                fromAminoMsg(object: _149.MsgSetMaxPoolPointsPerTxAminoMsg): _149.MsgSetMaxPoolPointsPerTx;
                toAminoMsg(message: _149.MsgSetMaxPoolPointsPerTx): _149.MsgSetMaxPoolPointsPerTxAminoMsg;
                fromProtoMsg(message: _149.MsgSetMaxPoolPointsPerTxProtoMsg): _149.MsgSetMaxPoolPointsPerTx;
                toProto(message: _149.MsgSetMaxPoolPointsPerTx): Uint8Array;
                toProtoMsg(message: _149.MsgSetMaxPoolPointsPerTx): _149.MsgSetMaxPoolPointsPerTxProtoMsg;
            };
            MsgSetMaxPoolPointsPerTxResponse: {
                typeUrl: string;
                encode(_: _149.MsgSetMaxPoolPointsPerTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgSetMaxPoolPointsPerTxResponse;
                fromPartial(_: Partial<_149.MsgSetMaxPoolPointsPerTxResponse>): _149.MsgSetMaxPoolPointsPerTxResponse;
                fromAmino(_: _149.MsgSetMaxPoolPointsPerTxResponseAmino): _149.MsgSetMaxPoolPointsPerTxResponse;
                toAmino(_: _149.MsgSetMaxPoolPointsPerTxResponse): _149.MsgSetMaxPoolPointsPerTxResponseAmino;
                fromAminoMsg(object: _149.MsgSetMaxPoolPointsPerTxResponseAminoMsg): _149.MsgSetMaxPoolPointsPerTxResponse;
                toAminoMsg(message: _149.MsgSetMaxPoolPointsPerTxResponse): _149.MsgSetMaxPoolPointsPerTxResponseAminoMsg;
                fromProtoMsg(message: _149.MsgSetMaxPoolPointsPerTxResponseProtoMsg): _149.MsgSetMaxPoolPointsPerTxResponse;
                toProto(message: _149.MsgSetMaxPoolPointsPerTxResponse): Uint8Array;
                toProtoMsg(message: _149.MsgSetMaxPoolPointsPerTxResponse): _149.MsgSetMaxPoolPointsPerTxResponseProtoMsg;
            };
            MsgSetMaxPoolPointsPerBlock: {
                typeUrl: string;
                encode(message: _149.MsgSetMaxPoolPointsPerBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgSetMaxPoolPointsPerBlock;
                fromPartial(object: Partial<_149.MsgSetMaxPoolPointsPerBlock>): _149.MsgSetMaxPoolPointsPerBlock;
                fromAmino(object: _149.MsgSetMaxPoolPointsPerBlockAmino): _149.MsgSetMaxPoolPointsPerBlock;
                toAmino(message: _149.MsgSetMaxPoolPointsPerBlock): _149.MsgSetMaxPoolPointsPerBlockAmino;
                fromAminoMsg(object: _149.MsgSetMaxPoolPointsPerBlockAminoMsg): _149.MsgSetMaxPoolPointsPerBlock;
                toAminoMsg(message: _149.MsgSetMaxPoolPointsPerBlock): _149.MsgSetMaxPoolPointsPerBlockAminoMsg;
                fromProtoMsg(message: _149.MsgSetMaxPoolPointsPerBlockProtoMsg): _149.MsgSetMaxPoolPointsPerBlock;
                toProto(message: _149.MsgSetMaxPoolPointsPerBlock): Uint8Array;
                toProtoMsg(message: _149.MsgSetMaxPoolPointsPerBlock): _149.MsgSetMaxPoolPointsPerBlockProtoMsg;
            };
            MsgSetMaxPoolPointsPerBlockResponse: {
                typeUrl: string;
                encode(_: _149.MsgSetMaxPoolPointsPerBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgSetMaxPoolPointsPerBlockResponse;
                fromPartial(_: Partial<_149.MsgSetMaxPoolPointsPerBlockResponse>): _149.MsgSetMaxPoolPointsPerBlockResponse;
                fromAmino(_: _149.MsgSetMaxPoolPointsPerBlockResponseAmino): _149.MsgSetMaxPoolPointsPerBlockResponse;
                toAmino(_: _149.MsgSetMaxPoolPointsPerBlockResponse): _149.MsgSetMaxPoolPointsPerBlockResponseAmino;
                fromAminoMsg(object: _149.MsgSetMaxPoolPointsPerBlockResponseAminoMsg): _149.MsgSetMaxPoolPointsPerBlockResponse;
                toAminoMsg(message: _149.MsgSetMaxPoolPointsPerBlockResponse): _149.MsgSetMaxPoolPointsPerBlockResponseAminoMsg;
                fromProtoMsg(message: _149.MsgSetMaxPoolPointsPerBlockResponseProtoMsg): _149.MsgSetMaxPoolPointsPerBlockResponse;
                toProto(message: _149.MsgSetMaxPoolPointsPerBlockResponse): Uint8Array;
                toProtoMsg(message: _149.MsgSetMaxPoolPointsPerBlockResponse): _149.MsgSetMaxPoolPointsPerBlockResponseProtoMsg;
            };
            MsgSetBaseDenoms: {
                typeUrl: string;
                encode(message: _149.MsgSetBaseDenoms, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgSetBaseDenoms;
                fromPartial(object: Partial<_149.MsgSetBaseDenoms>): _149.MsgSetBaseDenoms;
                fromAmino(object: _149.MsgSetBaseDenomsAmino): _149.MsgSetBaseDenoms;
                toAmino(message: _149.MsgSetBaseDenoms): _149.MsgSetBaseDenomsAmino;
                fromAminoMsg(object: _149.MsgSetBaseDenomsAminoMsg): _149.MsgSetBaseDenoms;
                toAminoMsg(message: _149.MsgSetBaseDenoms): _149.MsgSetBaseDenomsAminoMsg;
                fromProtoMsg(message: _149.MsgSetBaseDenomsProtoMsg): _149.MsgSetBaseDenoms;
                toProto(message: _149.MsgSetBaseDenoms): Uint8Array;
                toProtoMsg(message: _149.MsgSetBaseDenoms): _149.MsgSetBaseDenomsProtoMsg;
            };
            MsgSetBaseDenomsResponse: {
                typeUrl: string;
                encode(_: _149.MsgSetBaseDenomsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgSetBaseDenomsResponse;
                fromPartial(_: Partial<_149.MsgSetBaseDenomsResponse>): _149.MsgSetBaseDenomsResponse;
                fromAmino(_: _149.MsgSetBaseDenomsResponseAmino): _149.MsgSetBaseDenomsResponse;
                toAmino(_: _149.MsgSetBaseDenomsResponse): _149.MsgSetBaseDenomsResponseAmino;
                fromAminoMsg(object: _149.MsgSetBaseDenomsResponseAminoMsg): _149.MsgSetBaseDenomsResponse;
                toAminoMsg(message: _149.MsgSetBaseDenomsResponse): _149.MsgSetBaseDenomsResponseAminoMsg;
                fromProtoMsg(message: _149.MsgSetBaseDenomsResponseProtoMsg): _149.MsgSetBaseDenomsResponse;
                toProto(message: _149.MsgSetBaseDenomsResponse): Uint8Array;
                toProtoMsg(message: _149.MsgSetBaseDenomsResponse): _149.MsgSetBaseDenomsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _148.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryParamsRequest;
                fromPartial(_: Partial<_148.QueryParamsRequest>): _148.QueryParamsRequest;
                fromAmino(_: _148.QueryParamsRequestAmino): _148.QueryParamsRequest;
                toAmino(_: _148.QueryParamsRequest): _148.QueryParamsRequestAmino;
                fromAminoMsg(object: _148.QueryParamsRequestAminoMsg): _148.QueryParamsRequest;
                toAminoMsg(message: _148.QueryParamsRequest): _148.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _148.QueryParamsRequestProtoMsg): _148.QueryParamsRequest;
                toProto(message: _148.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _148.QueryParamsRequest): _148.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _148.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryParamsResponse;
                fromPartial(object: Partial<_148.QueryParamsResponse>): _148.QueryParamsResponse;
                fromAmino(object: _148.QueryParamsResponseAmino): _148.QueryParamsResponse;
                toAmino(message: _148.QueryParamsResponse): _148.QueryParamsResponseAmino;
                fromAminoMsg(object: _148.QueryParamsResponseAminoMsg): _148.QueryParamsResponse;
                toAminoMsg(message: _148.QueryParamsResponse): _148.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _148.QueryParamsResponseProtoMsg): _148.QueryParamsResponse;
                toProto(message: _148.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _148.QueryParamsResponse): _148.QueryParamsResponseProtoMsg;
            };
            QueryGetProtoRevNumberOfTradesRequest: {
                typeUrl: string;
                encode(_: _148.QueryGetProtoRevNumberOfTradesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevNumberOfTradesRequest;
                fromPartial(_: Partial<_148.QueryGetProtoRevNumberOfTradesRequest>): _148.QueryGetProtoRevNumberOfTradesRequest;
                fromAmino(_: _148.QueryGetProtoRevNumberOfTradesRequestAmino): _148.QueryGetProtoRevNumberOfTradesRequest;
                toAmino(_: _148.QueryGetProtoRevNumberOfTradesRequest): _148.QueryGetProtoRevNumberOfTradesRequestAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevNumberOfTradesRequestAminoMsg): _148.QueryGetProtoRevNumberOfTradesRequest;
                toAminoMsg(message: _148.QueryGetProtoRevNumberOfTradesRequest): _148.QueryGetProtoRevNumberOfTradesRequestAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevNumberOfTradesRequestProtoMsg): _148.QueryGetProtoRevNumberOfTradesRequest;
                toProto(message: _148.QueryGetProtoRevNumberOfTradesRequest): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevNumberOfTradesRequest): _148.QueryGetProtoRevNumberOfTradesRequestProtoMsg;
            };
            QueryGetProtoRevNumberOfTradesResponse: {
                typeUrl: string;
                encode(message: _148.QueryGetProtoRevNumberOfTradesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevNumberOfTradesResponse;
                fromPartial(object: Partial<_148.QueryGetProtoRevNumberOfTradesResponse>): _148.QueryGetProtoRevNumberOfTradesResponse;
                fromAmino(object: _148.QueryGetProtoRevNumberOfTradesResponseAmino): _148.QueryGetProtoRevNumberOfTradesResponse;
                toAmino(message: _148.QueryGetProtoRevNumberOfTradesResponse): _148.QueryGetProtoRevNumberOfTradesResponseAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevNumberOfTradesResponseAminoMsg): _148.QueryGetProtoRevNumberOfTradesResponse;
                toAminoMsg(message: _148.QueryGetProtoRevNumberOfTradesResponse): _148.QueryGetProtoRevNumberOfTradesResponseAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevNumberOfTradesResponseProtoMsg): _148.QueryGetProtoRevNumberOfTradesResponse;
                toProto(message: _148.QueryGetProtoRevNumberOfTradesResponse): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevNumberOfTradesResponse): _148.QueryGetProtoRevNumberOfTradesResponseProtoMsg;
            };
            QueryGetProtoRevProfitsByDenomRequest: {
                typeUrl: string;
                encode(message: _148.QueryGetProtoRevProfitsByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevProfitsByDenomRequest;
                fromPartial(object: Partial<_148.QueryGetProtoRevProfitsByDenomRequest>): _148.QueryGetProtoRevProfitsByDenomRequest;
                fromAmino(object: _148.QueryGetProtoRevProfitsByDenomRequestAmino): _148.QueryGetProtoRevProfitsByDenomRequest;
                toAmino(message: _148.QueryGetProtoRevProfitsByDenomRequest): _148.QueryGetProtoRevProfitsByDenomRequestAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevProfitsByDenomRequestAminoMsg): _148.QueryGetProtoRevProfitsByDenomRequest;
                toAminoMsg(message: _148.QueryGetProtoRevProfitsByDenomRequest): _148.QueryGetProtoRevProfitsByDenomRequestAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevProfitsByDenomRequestProtoMsg): _148.QueryGetProtoRevProfitsByDenomRequest;
                toProto(message: _148.QueryGetProtoRevProfitsByDenomRequest): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevProfitsByDenomRequest): _148.QueryGetProtoRevProfitsByDenomRequestProtoMsg;
            };
            QueryGetProtoRevProfitsByDenomResponse: {
                typeUrl: string;
                encode(message: _148.QueryGetProtoRevProfitsByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevProfitsByDenomResponse;
                fromPartial(object: Partial<_148.QueryGetProtoRevProfitsByDenomResponse>): _148.QueryGetProtoRevProfitsByDenomResponse;
                fromAmino(object: _148.QueryGetProtoRevProfitsByDenomResponseAmino): _148.QueryGetProtoRevProfitsByDenomResponse;
                toAmino(message: _148.QueryGetProtoRevProfitsByDenomResponse): _148.QueryGetProtoRevProfitsByDenomResponseAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevProfitsByDenomResponseAminoMsg): _148.QueryGetProtoRevProfitsByDenomResponse;
                toAminoMsg(message: _148.QueryGetProtoRevProfitsByDenomResponse): _148.QueryGetProtoRevProfitsByDenomResponseAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevProfitsByDenomResponseProtoMsg): _148.QueryGetProtoRevProfitsByDenomResponse;
                toProto(message: _148.QueryGetProtoRevProfitsByDenomResponse): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevProfitsByDenomResponse): _148.QueryGetProtoRevProfitsByDenomResponseProtoMsg;
            };
            QueryGetProtoRevAllProfitsRequest: {
                typeUrl: string;
                encode(_: _148.QueryGetProtoRevAllProfitsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevAllProfitsRequest;
                fromPartial(_: Partial<_148.QueryGetProtoRevAllProfitsRequest>): _148.QueryGetProtoRevAllProfitsRequest;
                fromAmino(_: _148.QueryGetProtoRevAllProfitsRequestAmino): _148.QueryGetProtoRevAllProfitsRequest;
                toAmino(_: _148.QueryGetProtoRevAllProfitsRequest): _148.QueryGetProtoRevAllProfitsRequestAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevAllProfitsRequestAminoMsg): _148.QueryGetProtoRevAllProfitsRequest;
                toAminoMsg(message: _148.QueryGetProtoRevAllProfitsRequest): _148.QueryGetProtoRevAllProfitsRequestAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevAllProfitsRequestProtoMsg): _148.QueryGetProtoRevAllProfitsRequest;
                toProto(message: _148.QueryGetProtoRevAllProfitsRequest): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevAllProfitsRequest): _148.QueryGetProtoRevAllProfitsRequestProtoMsg;
            };
            QueryGetProtoRevAllProfitsResponse: {
                typeUrl: string;
                encode(message: _148.QueryGetProtoRevAllProfitsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevAllProfitsResponse;
                fromPartial(object: Partial<_148.QueryGetProtoRevAllProfitsResponse>): _148.QueryGetProtoRevAllProfitsResponse;
                fromAmino(object: _148.QueryGetProtoRevAllProfitsResponseAmino): _148.QueryGetProtoRevAllProfitsResponse;
                toAmino(message: _148.QueryGetProtoRevAllProfitsResponse): _148.QueryGetProtoRevAllProfitsResponseAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevAllProfitsResponseAminoMsg): _148.QueryGetProtoRevAllProfitsResponse;
                toAminoMsg(message: _148.QueryGetProtoRevAllProfitsResponse): _148.QueryGetProtoRevAllProfitsResponseAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevAllProfitsResponseProtoMsg): _148.QueryGetProtoRevAllProfitsResponse;
                toProto(message: _148.QueryGetProtoRevAllProfitsResponse): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevAllProfitsResponse): _148.QueryGetProtoRevAllProfitsResponseProtoMsg;
            };
            QueryGetProtoRevStatisticsByRouteRequest: {
                typeUrl: string;
                encode(message: _148.QueryGetProtoRevStatisticsByRouteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevStatisticsByRouteRequest;
                fromPartial(object: Partial<_148.QueryGetProtoRevStatisticsByRouteRequest>): _148.QueryGetProtoRevStatisticsByRouteRequest;
                fromAmino(object: _148.QueryGetProtoRevStatisticsByRouteRequestAmino): _148.QueryGetProtoRevStatisticsByRouteRequest;
                toAmino(message: _148.QueryGetProtoRevStatisticsByRouteRequest): _148.QueryGetProtoRevStatisticsByRouteRequestAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevStatisticsByRouteRequestAminoMsg): _148.QueryGetProtoRevStatisticsByRouteRequest;
                toAminoMsg(message: _148.QueryGetProtoRevStatisticsByRouteRequest): _148.QueryGetProtoRevStatisticsByRouteRequestAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevStatisticsByRouteRequestProtoMsg): _148.QueryGetProtoRevStatisticsByRouteRequest;
                toProto(message: _148.QueryGetProtoRevStatisticsByRouteRequest): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevStatisticsByRouteRequest): _148.QueryGetProtoRevStatisticsByRouteRequestProtoMsg;
            };
            QueryGetProtoRevStatisticsByRouteResponse: {
                typeUrl: string;
                encode(message: _148.QueryGetProtoRevStatisticsByRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevStatisticsByRouteResponse;
                fromPartial(object: Partial<_148.QueryGetProtoRevStatisticsByRouteResponse>): _148.QueryGetProtoRevStatisticsByRouteResponse;
                fromAmino(object: _148.QueryGetProtoRevStatisticsByRouteResponseAmino): _148.QueryGetProtoRevStatisticsByRouteResponse;
                toAmino(message: _148.QueryGetProtoRevStatisticsByRouteResponse): _148.QueryGetProtoRevStatisticsByRouteResponseAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevStatisticsByRouteResponseAminoMsg): _148.QueryGetProtoRevStatisticsByRouteResponse;
                toAminoMsg(message: _148.QueryGetProtoRevStatisticsByRouteResponse): _148.QueryGetProtoRevStatisticsByRouteResponseAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevStatisticsByRouteResponseProtoMsg): _148.QueryGetProtoRevStatisticsByRouteResponse;
                toProto(message: _148.QueryGetProtoRevStatisticsByRouteResponse): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevStatisticsByRouteResponse): _148.QueryGetProtoRevStatisticsByRouteResponseProtoMsg;
            };
            QueryGetProtoRevAllRouteStatisticsRequest: {
                typeUrl: string;
                encode(_: _148.QueryGetProtoRevAllRouteStatisticsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevAllRouteStatisticsRequest;
                fromPartial(_: Partial<_148.QueryGetProtoRevAllRouteStatisticsRequest>): _148.QueryGetProtoRevAllRouteStatisticsRequest;
                fromAmino(_: _148.QueryGetProtoRevAllRouteStatisticsRequestAmino): _148.QueryGetProtoRevAllRouteStatisticsRequest;
                toAmino(_: _148.QueryGetProtoRevAllRouteStatisticsRequest): _148.QueryGetProtoRevAllRouteStatisticsRequestAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevAllRouteStatisticsRequestAminoMsg): _148.QueryGetProtoRevAllRouteStatisticsRequest;
                toAminoMsg(message: _148.QueryGetProtoRevAllRouteStatisticsRequest): _148.QueryGetProtoRevAllRouteStatisticsRequestAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevAllRouteStatisticsRequestProtoMsg): _148.QueryGetProtoRevAllRouteStatisticsRequest;
                toProto(message: _148.QueryGetProtoRevAllRouteStatisticsRequest): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevAllRouteStatisticsRequest): _148.QueryGetProtoRevAllRouteStatisticsRequestProtoMsg;
            };
            QueryGetProtoRevAllRouteStatisticsResponse: {
                typeUrl: string;
                encode(message: _148.QueryGetProtoRevAllRouteStatisticsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevAllRouteStatisticsResponse;
                fromPartial(object: Partial<_148.QueryGetProtoRevAllRouteStatisticsResponse>): _148.QueryGetProtoRevAllRouteStatisticsResponse;
                fromAmino(object: _148.QueryGetProtoRevAllRouteStatisticsResponseAmino): _148.QueryGetProtoRevAllRouteStatisticsResponse;
                toAmino(message: _148.QueryGetProtoRevAllRouteStatisticsResponse): _148.QueryGetProtoRevAllRouteStatisticsResponseAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevAllRouteStatisticsResponseAminoMsg): _148.QueryGetProtoRevAllRouteStatisticsResponse;
                toAminoMsg(message: _148.QueryGetProtoRevAllRouteStatisticsResponse): _148.QueryGetProtoRevAllRouteStatisticsResponseAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevAllRouteStatisticsResponseProtoMsg): _148.QueryGetProtoRevAllRouteStatisticsResponse;
                toProto(message: _148.QueryGetProtoRevAllRouteStatisticsResponse): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevAllRouteStatisticsResponse): _148.QueryGetProtoRevAllRouteStatisticsResponseProtoMsg;
            };
            QueryGetProtoRevTokenPairArbRoutesRequest: {
                typeUrl: string;
                encode(_: _148.QueryGetProtoRevTokenPairArbRoutesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromPartial(_: Partial<_148.QueryGetProtoRevTokenPairArbRoutesRequest>): _148.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromAmino(_: _148.QueryGetProtoRevTokenPairArbRoutesRequestAmino): _148.QueryGetProtoRevTokenPairArbRoutesRequest;
                toAmino(_: _148.QueryGetProtoRevTokenPairArbRoutesRequest): _148.QueryGetProtoRevTokenPairArbRoutesRequestAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg): _148.QueryGetProtoRevTokenPairArbRoutesRequest;
                toAminoMsg(message: _148.QueryGetProtoRevTokenPairArbRoutesRequest): _148.QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg): _148.QueryGetProtoRevTokenPairArbRoutesRequest;
                toProto(message: _148.QueryGetProtoRevTokenPairArbRoutesRequest): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevTokenPairArbRoutesRequest): _148.QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg;
            };
            QueryGetProtoRevTokenPairArbRoutesResponse: {
                typeUrl: string;
                encode(message: _148.QueryGetProtoRevTokenPairArbRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromPartial(object: Partial<_148.QueryGetProtoRevTokenPairArbRoutesResponse>): _148.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromAmino(object: _148.QueryGetProtoRevTokenPairArbRoutesResponseAmino): _148.QueryGetProtoRevTokenPairArbRoutesResponse;
                toAmino(message: _148.QueryGetProtoRevTokenPairArbRoutesResponse): _148.QueryGetProtoRevTokenPairArbRoutesResponseAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg): _148.QueryGetProtoRevTokenPairArbRoutesResponse;
                toAminoMsg(message: _148.QueryGetProtoRevTokenPairArbRoutesResponse): _148.QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg): _148.QueryGetProtoRevTokenPairArbRoutesResponse;
                toProto(message: _148.QueryGetProtoRevTokenPairArbRoutesResponse): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevTokenPairArbRoutesResponse): _148.QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg;
            };
            QueryGetProtoRevAdminAccountRequest: {
                typeUrl: string;
                encode(_: _148.QueryGetProtoRevAdminAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevAdminAccountRequest;
                fromPartial(_: Partial<_148.QueryGetProtoRevAdminAccountRequest>): _148.QueryGetProtoRevAdminAccountRequest;
                fromAmino(_: _148.QueryGetProtoRevAdminAccountRequestAmino): _148.QueryGetProtoRevAdminAccountRequest;
                toAmino(_: _148.QueryGetProtoRevAdminAccountRequest): _148.QueryGetProtoRevAdminAccountRequestAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevAdminAccountRequestAminoMsg): _148.QueryGetProtoRevAdminAccountRequest;
                toAminoMsg(message: _148.QueryGetProtoRevAdminAccountRequest): _148.QueryGetProtoRevAdminAccountRequestAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevAdminAccountRequestProtoMsg): _148.QueryGetProtoRevAdminAccountRequest;
                toProto(message: _148.QueryGetProtoRevAdminAccountRequest): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevAdminAccountRequest): _148.QueryGetProtoRevAdminAccountRequestProtoMsg;
            };
            QueryGetProtoRevAdminAccountResponse: {
                typeUrl: string;
                encode(message: _148.QueryGetProtoRevAdminAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevAdminAccountResponse;
                fromPartial(object: Partial<_148.QueryGetProtoRevAdminAccountResponse>): _148.QueryGetProtoRevAdminAccountResponse;
                fromAmino(object: _148.QueryGetProtoRevAdminAccountResponseAmino): _148.QueryGetProtoRevAdminAccountResponse;
                toAmino(message: _148.QueryGetProtoRevAdminAccountResponse): _148.QueryGetProtoRevAdminAccountResponseAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevAdminAccountResponseAminoMsg): _148.QueryGetProtoRevAdminAccountResponse;
                toAminoMsg(message: _148.QueryGetProtoRevAdminAccountResponse): _148.QueryGetProtoRevAdminAccountResponseAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevAdminAccountResponseProtoMsg): _148.QueryGetProtoRevAdminAccountResponse;
                toProto(message: _148.QueryGetProtoRevAdminAccountResponse): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevAdminAccountResponse): _148.QueryGetProtoRevAdminAccountResponseProtoMsg;
            };
            QueryGetProtoRevDeveloperAccountRequest: {
                typeUrl: string;
                encode(_: _148.QueryGetProtoRevDeveloperAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevDeveloperAccountRequest;
                fromPartial(_: Partial<_148.QueryGetProtoRevDeveloperAccountRequest>): _148.QueryGetProtoRevDeveloperAccountRequest;
                fromAmino(_: _148.QueryGetProtoRevDeveloperAccountRequestAmino): _148.QueryGetProtoRevDeveloperAccountRequest;
                toAmino(_: _148.QueryGetProtoRevDeveloperAccountRequest): _148.QueryGetProtoRevDeveloperAccountRequestAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevDeveloperAccountRequestAminoMsg): _148.QueryGetProtoRevDeveloperAccountRequest;
                toAminoMsg(message: _148.QueryGetProtoRevDeveloperAccountRequest): _148.QueryGetProtoRevDeveloperAccountRequestAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevDeveloperAccountRequestProtoMsg): _148.QueryGetProtoRevDeveloperAccountRequest;
                toProto(message: _148.QueryGetProtoRevDeveloperAccountRequest): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevDeveloperAccountRequest): _148.QueryGetProtoRevDeveloperAccountRequestProtoMsg;
            };
            QueryGetProtoRevDeveloperAccountResponse: {
                typeUrl: string;
                encode(message: _148.QueryGetProtoRevDeveloperAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevDeveloperAccountResponse;
                fromPartial(object: Partial<_148.QueryGetProtoRevDeveloperAccountResponse>): _148.QueryGetProtoRevDeveloperAccountResponse;
                fromAmino(object: _148.QueryGetProtoRevDeveloperAccountResponseAmino): _148.QueryGetProtoRevDeveloperAccountResponse;
                toAmino(message: _148.QueryGetProtoRevDeveloperAccountResponse): _148.QueryGetProtoRevDeveloperAccountResponseAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevDeveloperAccountResponseAminoMsg): _148.QueryGetProtoRevDeveloperAccountResponse;
                toAminoMsg(message: _148.QueryGetProtoRevDeveloperAccountResponse): _148.QueryGetProtoRevDeveloperAccountResponseAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevDeveloperAccountResponseProtoMsg): _148.QueryGetProtoRevDeveloperAccountResponse;
                toProto(message: _148.QueryGetProtoRevDeveloperAccountResponse): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevDeveloperAccountResponse): _148.QueryGetProtoRevDeveloperAccountResponseProtoMsg;
            };
            QueryGetProtoRevPoolWeightsRequest: {
                typeUrl: string;
                encode(_: _148.QueryGetProtoRevPoolWeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevPoolWeightsRequest;
                fromPartial(_: Partial<_148.QueryGetProtoRevPoolWeightsRequest>): _148.QueryGetProtoRevPoolWeightsRequest;
                fromAmino(_: _148.QueryGetProtoRevPoolWeightsRequestAmino): _148.QueryGetProtoRevPoolWeightsRequest;
                toAmino(_: _148.QueryGetProtoRevPoolWeightsRequest): _148.QueryGetProtoRevPoolWeightsRequestAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevPoolWeightsRequestAminoMsg): _148.QueryGetProtoRevPoolWeightsRequest;
                toAminoMsg(message: _148.QueryGetProtoRevPoolWeightsRequest): _148.QueryGetProtoRevPoolWeightsRequestAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevPoolWeightsRequestProtoMsg): _148.QueryGetProtoRevPoolWeightsRequest;
                toProto(message: _148.QueryGetProtoRevPoolWeightsRequest): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevPoolWeightsRequest): _148.QueryGetProtoRevPoolWeightsRequestProtoMsg;
            };
            QueryGetProtoRevPoolWeightsResponse: {
                typeUrl: string;
                encode(message: _148.QueryGetProtoRevPoolWeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevPoolWeightsResponse;
                fromPartial(object: Partial<_148.QueryGetProtoRevPoolWeightsResponse>): _148.QueryGetProtoRevPoolWeightsResponse;
                fromAmino(object: _148.QueryGetProtoRevPoolWeightsResponseAmino): _148.QueryGetProtoRevPoolWeightsResponse;
                toAmino(message: _148.QueryGetProtoRevPoolWeightsResponse): _148.QueryGetProtoRevPoolWeightsResponseAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevPoolWeightsResponseAminoMsg): _148.QueryGetProtoRevPoolWeightsResponse;
                toAminoMsg(message: _148.QueryGetProtoRevPoolWeightsResponse): _148.QueryGetProtoRevPoolWeightsResponseAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevPoolWeightsResponseProtoMsg): _148.QueryGetProtoRevPoolWeightsResponse;
                toProto(message: _148.QueryGetProtoRevPoolWeightsResponse): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevPoolWeightsResponse): _148.QueryGetProtoRevPoolWeightsResponseProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerBlockRequest: {
                typeUrl: string;
                encode(_: _148.QueryGetProtoRevMaxPoolPointsPerBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                fromPartial(_: Partial<_148.QueryGetProtoRevMaxPoolPointsPerBlockRequest>): _148.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                fromAmino(_: _148.QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino): _148.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                toAmino(_: _148.QueryGetProtoRevMaxPoolPointsPerBlockRequest): _148.QueryGetProtoRevMaxPoolPointsPerBlockRequestAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevMaxPoolPointsPerBlockRequestAminoMsg): _148.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                toAminoMsg(message: _148.QueryGetProtoRevMaxPoolPointsPerBlockRequest): _148.QueryGetProtoRevMaxPoolPointsPerBlockRequestAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevMaxPoolPointsPerBlockRequestProtoMsg): _148.QueryGetProtoRevMaxPoolPointsPerBlockRequest;
                toProto(message: _148.QueryGetProtoRevMaxPoolPointsPerBlockRequest): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevMaxPoolPointsPerBlockRequest): _148.QueryGetProtoRevMaxPoolPointsPerBlockRequestProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerBlockResponse: {
                typeUrl: string;
                encode(message: _148.QueryGetProtoRevMaxPoolPointsPerBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                fromPartial(object: Partial<_148.QueryGetProtoRevMaxPoolPointsPerBlockResponse>): _148.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                fromAmino(object: _148.QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino): _148.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                toAmino(message: _148.QueryGetProtoRevMaxPoolPointsPerBlockResponse): _148.QueryGetProtoRevMaxPoolPointsPerBlockResponseAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevMaxPoolPointsPerBlockResponseAminoMsg): _148.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                toAminoMsg(message: _148.QueryGetProtoRevMaxPoolPointsPerBlockResponse): _148.QueryGetProtoRevMaxPoolPointsPerBlockResponseAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevMaxPoolPointsPerBlockResponseProtoMsg): _148.QueryGetProtoRevMaxPoolPointsPerBlockResponse;
                toProto(message: _148.QueryGetProtoRevMaxPoolPointsPerBlockResponse): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevMaxPoolPointsPerBlockResponse): _148.QueryGetProtoRevMaxPoolPointsPerBlockResponseProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerTxRequest: {
                typeUrl: string;
                encode(_: _148.QueryGetProtoRevMaxPoolPointsPerTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                fromPartial(_: Partial<_148.QueryGetProtoRevMaxPoolPointsPerTxRequest>): _148.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                fromAmino(_: _148.QueryGetProtoRevMaxPoolPointsPerTxRequestAmino): _148.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                toAmino(_: _148.QueryGetProtoRevMaxPoolPointsPerTxRequest): _148.QueryGetProtoRevMaxPoolPointsPerTxRequestAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevMaxPoolPointsPerTxRequestAminoMsg): _148.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                toAminoMsg(message: _148.QueryGetProtoRevMaxPoolPointsPerTxRequest): _148.QueryGetProtoRevMaxPoolPointsPerTxRequestAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevMaxPoolPointsPerTxRequestProtoMsg): _148.QueryGetProtoRevMaxPoolPointsPerTxRequest;
                toProto(message: _148.QueryGetProtoRevMaxPoolPointsPerTxRequest): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevMaxPoolPointsPerTxRequest): _148.QueryGetProtoRevMaxPoolPointsPerTxRequestProtoMsg;
            };
            QueryGetProtoRevMaxPoolPointsPerTxResponse: {
                typeUrl: string;
                encode(message: _148.QueryGetProtoRevMaxPoolPointsPerTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                fromPartial(object: Partial<_148.QueryGetProtoRevMaxPoolPointsPerTxResponse>): _148.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                fromAmino(object: _148.QueryGetProtoRevMaxPoolPointsPerTxResponseAmino): _148.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                toAmino(message: _148.QueryGetProtoRevMaxPoolPointsPerTxResponse): _148.QueryGetProtoRevMaxPoolPointsPerTxResponseAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevMaxPoolPointsPerTxResponseAminoMsg): _148.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                toAminoMsg(message: _148.QueryGetProtoRevMaxPoolPointsPerTxResponse): _148.QueryGetProtoRevMaxPoolPointsPerTxResponseAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevMaxPoolPointsPerTxResponseProtoMsg): _148.QueryGetProtoRevMaxPoolPointsPerTxResponse;
                toProto(message: _148.QueryGetProtoRevMaxPoolPointsPerTxResponse): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevMaxPoolPointsPerTxResponse): _148.QueryGetProtoRevMaxPoolPointsPerTxResponseProtoMsg;
            };
            QueryGetProtoRevBaseDenomsRequest: {
                typeUrl: string;
                encode(_: _148.QueryGetProtoRevBaseDenomsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevBaseDenomsRequest;
                fromPartial(_: Partial<_148.QueryGetProtoRevBaseDenomsRequest>): _148.QueryGetProtoRevBaseDenomsRequest;
                fromAmino(_: _148.QueryGetProtoRevBaseDenomsRequestAmino): _148.QueryGetProtoRevBaseDenomsRequest;
                toAmino(_: _148.QueryGetProtoRevBaseDenomsRequest): _148.QueryGetProtoRevBaseDenomsRequestAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevBaseDenomsRequestAminoMsg): _148.QueryGetProtoRevBaseDenomsRequest;
                toAminoMsg(message: _148.QueryGetProtoRevBaseDenomsRequest): _148.QueryGetProtoRevBaseDenomsRequestAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevBaseDenomsRequestProtoMsg): _148.QueryGetProtoRevBaseDenomsRequest;
                toProto(message: _148.QueryGetProtoRevBaseDenomsRequest): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevBaseDenomsRequest): _148.QueryGetProtoRevBaseDenomsRequestProtoMsg;
            };
            QueryGetProtoRevBaseDenomsResponse: {
                typeUrl: string;
                encode(message: _148.QueryGetProtoRevBaseDenomsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevBaseDenomsResponse;
                fromPartial(object: Partial<_148.QueryGetProtoRevBaseDenomsResponse>): _148.QueryGetProtoRevBaseDenomsResponse;
                fromAmino(object: _148.QueryGetProtoRevBaseDenomsResponseAmino): _148.QueryGetProtoRevBaseDenomsResponse;
                toAmino(message: _148.QueryGetProtoRevBaseDenomsResponse): _148.QueryGetProtoRevBaseDenomsResponseAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevBaseDenomsResponseAminoMsg): _148.QueryGetProtoRevBaseDenomsResponse;
                toAminoMsg(message: _148.QueryGetProtoRevBaseDenomsResponse): _148.QueryGetProtoRevBaseDenomsResponseAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevBaseDenomsResponseProtoMsg): _148.QueryGetProtoRevBaseDenomsResponse;
                toProto(message: _148.QueryGetProtoRevBaseDenomsResponse): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevBaseDenomsResponse): _148.QueryGetProtoRevBaseDenomsResponseProtoMsg;
            };
            QueryGetProtoRevEnabledRequest: {
                typeUrl: string;
                encode(_: _148.QueryGetProtoRevEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevEnabledRequest;
                fromPartial(_: Partial<_148.QueryGetProtoRevEnabledRequest>): _148.QueryGetProtoRevEnabledRequest;
                fromAmino(_: _148.QueryGetProtoRevEnabledRequestAmino): _148.QueryGetProtoRevEnabledRequest;
                toAmino(_: _148.QueryGetProtoRevEnabledRequest): _148.QueryGetProtoRevEnabledRequestAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevEnabledRequestAminoMsg): _148.QueryGetProtoRevEnabledRequest;
                toAminoMsg(message: _148.QueryGetProtoRevEnabledRequest): _148.QueryGetProtoRevEnabledRequestAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevEnabledRequestProtoMsg): _148.QueryGetProtoRevEnabledRequest;
                toProto(message: _148.QueryGetProtoRevEnabledRequest): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevEnabledRequest): _148.QueryGetProtoRevEnabledRequestProtoMsg;
            };
            QueryGetProtoRevEnabledResponse: {
                typeUrl: string;
                encode(message: _148.QueryGetProtoRevEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevEnabledResponse;
                fromPartial(object: Partial<_148.QueryGetProtoRevEnabledResponse>): _148.QueryGetProtoRevEnabledResponse;
                fromAmino(object: _148.QueryGetProtoRevEnabledResponseAmino): _148.QueryGetProtoRevEnabledResponse;
                toAmino(message: _148.QueryGetProtoRevEnabledResponse): _148.QueryGetProtoRevEnabledResponseAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevEnabledResponseAminoMsg): _148.QueryGetProtoRevEnabledResponse;
                toAminoMsg(message: _148.QueryGetProtoRevEnabledResponse): _148.QueryGetProtoRevEnabledResponseAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevEnabledResponseProtoMsg): _148.QueryGetProtoRevEnabledResponse;
                toProto(message: _148.QueryGetProtoRevEnabledResponse): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevEnabledResponse): _148.QueryGetProtoRevEnabledResponseProtoMsg;
            };
            QueryGetProtoRevPoolRequest: {
                typeUrl: string;
                encode(message: _148.QueryGetProtoRevPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevPoolRequest;
                fromPartial(object: Partial<_148.QueryGetProtoRevPoolRequest>): _148.QueryGetProtoRevPoolRequest;
                fromAmino(object: _148.QueryGetProtoRevPoolRequestAmino): _148.QueryGetProtoRevPoolRequest;
                toAmino(message: _148.QueryGetProtoRevPoolRequest): _148.QueryGetProtoRevPoolRequestAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevPoolRequestAminoMsg): _148.QueryGetProtoRevPoolRequest;
                toAminoMsg(message: _148.QueryGetProtoRevPoolRequest): _148.QueryGetProtoRevPoolRequestAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevPoolRequestProtoMsg): _148.QueryGetProtoRevPoolRequest;
                toProto(message: _148.QueryGetProtoRevPoolRequest): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevPoolRequest): _148.QueryGetProtoRevPoolRequestProtoMsg;
            };
            QueryGetProtoRevPoolResponse: {
                typeUrl: string;
                encode(message: _148.QueryGetProtoRevPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryGetProtoRevPoolResponse;
                fromPartial(object: Partial<_148.QueryGetProtoRevPoolResponse>): _148.QueryGetProtoRevPoolResponse;
                fromAmino(object: _148.QueryGetProtoRevPoolResponseAmino): _148.QueryGetProtoRevPoolResponse;
                toAmino(message: _148.QueryGetProtoRevPoolResponse): _148.QueryGetProtoRevPoolResponseAmino;
                fromAminoMsg(object: _148.QueryGetProtoRevPoolResponseAminoMsg): _148.QueryGetProtoRevPoolResponse;
                toAminoMsg(message: _148.QueryGetProtoRevPoolResponse): _148.QueryGetProtoRevPoolResponseAminoMsg;
                fromProtoMsg(message: _148.QueryGetProtoRevPoolResponseProtoMsg): _148.QueryGetProtoRevPoolResponse;
                toProto(message: _148.QueryGetProtoRevPoolResponse): Uint8Array;
                toProtoMsg(message: _148.QueryGetProtoRevPoolResponse): _148.QueryGetProtoRevPoolResponseProtoMsg;
            };
            TokenPairArbRoutes: {
                typeUrl: string;
                encode(message: _147.TokenPairArbRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.TokenPairArbRoutes;
                fromPartial(object: Partial<_147.TokenPairArbRoutes>): _147.TokenPairArbRoutes;
                fromAmino(object: _147.TokenPairArbRoutesAmino): _147.TokenPairArbRoutes;
                toAmino(message: _147.TokenPairArbRoutes): _147.TokenPairArbRoutesAmino;
                fromAminoMsg(object: _147.TokenPairArbRoutesAminoMsg): _147.TokenPairArbRoutes;
                toAminoMsg(message: _147.TokenPairArbRoutes): _147.TokenPairArbRoutesAminoMsg;
                fromProtoMsg(message: _147.TokenPairArbRoutesProtoMsg): _147.TokenPairArbRoutes;
                toProto(message: _147.TokenPairArbRoutes): Uint8Array;
                toProtoMsg(message: _147.TokenPairArbRoutes): _147.TokenPairArbRoutesProtoMsg;
            };
            Route: {
                typeUrl: string;
                encode(message: _147.Route, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.Route;
                fromPartial(object: Partial<_147.Route>): _147.Route;
                fromAmino(object: _147.RouteAmino): _147.Route;
                toAmino(message: _147.Route): _147.RouteAmino;
                fromAminoMsg(object: _147.RouteAminoMsg): _147.Route;
                toAminoMsg(message: _147.Route): _147.RouteAminoMsg;
                fromProtoMsg(message: _147.RouteProtoMsg): _147.Route;
                toProto(message: _147.Route): Uint8Array;
                toProtoMsg(message: _147.Route): _147.RouteProtoMsg;
            };
            Trade: {
                typeUrl: string;
                encode(message: _147.Trade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.Trade;
                fromPartial(object: Partial<_147.Trade>): _147.Trade;
                fromAmino(object: _147.TradeAmino): _147.Trade;
                toAmino(message: _147.Trade): _147.TradeAmino;
                fromAminoMsg(object: _147.TradeAminoMsg): _147.Trade;
                toAminoMsg(message: _147.Trade): _147.TradeAminoMsg;
                fromProtoMsg(message: _147.TradeProtoMsg): _147.Trade;
                toProto(message: _147.Trade): Uint8Array;
                toProtoMsg(message: _147.Trade): _147.TradeProtoMsg;
            };
            RouteStatistics: {
                typeUrl: string;
                encode(message: _147.RouteStatistics, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.RouteStatistics;
                fromPartial(object: Partial<_147.RouteStatistics>): _147.RouteStatistics;
                fromAmino(object: _147.RouteStatisticsAmino): _147.RouteStatistics;
                toAmino(message: _147.RouteStatistics): _147.RouteStatisticsAmino;
                fromAminoMsg(object: _147.RouteStatisticsAminoMsg): _147.RouteStatistics;
                toAminoMsg(message: _147.RouteStatistics): _147.RouteStatisticsAminoMsg;
                fromProtoMsg(message: _147.RouteStatisticsProtoMsg): _147.RouteStatistics;
                toProto(message: _147.RouteStatistics): Uint8Array;
                toProtoMsg(message: _147.RouteStatistics): _147.RouteStatisticsProtoMsg;
            };
            PoolWeights: {
                typeUrl: string;
                encode(message: _147.PoolWeights, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.PoolWeights;
                fromPartial(object: Partial<_147.PoolWeights>): _147.PoolWeights;
                fromAmino(object: _147.PoolWeightsAmino): _147.PoolWeights;
                toAmino(message: _147.PoolWeights): _147.PoolWeightsAmino;
                fromAminoMsg(object: _147.PoolWeightsAminoMsg): _147.PoolWeights;
                toAminoMsg(message: _147.PoolWeights): _147.PoolWeightsAminoMsg;
                fromProtoMsg(message: _147.PoolWeightsProtoMsg): _147.PoolWeights;
                toProto(message: _147.PoolWeights): Uint8Array;
                toProtoMsg(message: _147.PoolWeights): _147.PoolWeightsProtoMsg;
            };
            BaseDenom: {
                typeUrl: string;
                encode(message: _147.BaseDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.BaseDenom;
                fromPartial(object: Partial<_147.BaseDenom>): _147.BaseDenom;
                fromAmino(object: _147.BaseDenomAmino): _147.BaseDenom;
                toAmino(message: _147.BaseDenom): _147.BaseDenomAmino;
                fromAminoMsg(object: _147.BaseDenomAminoMsg): _147.BaseDenom;
                toAminoMsg(message: _147.BaseDenom): _147.BaseDenomAminoMsg;
                fromProtoMsg(message: _147.BaseDenomProtoMsg): _147.BaseDenom;
                toProto(message: _147.BaseDenom): Uint8Array;
                toProtoMsg(message: _147.BaseDenom): _147.BaseDenomProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _146.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.Params;
                fromPartial(object: Partial<_146.Params>): _146.Params;
                fromAmino(object: _146.ParamsAmino): _146.Params;
                toAmino(message: _146.Params): _146.ParamsAmino;
                fromAminoMsg(object: _146.ParamsAminoMsg): _146.Params;
                toAminoMsg(message: _146.Params): _146.ParamsAminoMsg;
                fromProtoMsg(message: _146.ParamsProtoMsg): _146.Params;
                toProto(message: _146.Params): Uint8Array;
                toProtoMsg(message: _146.Params): _146.ParamsProtoMsg;
            };
            SetProtoRevEnabledProposal: {
                typeUrl: string;
                encode(message: _145.SetProtoRevEnabledProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.SetProtoRevEnabledProposal;
                fromPartial(object: Partial<_145.SetProtoRevEnabledProposal>): _145.SetProtoRevEnabledProposal;
                fromAmino(object: _145.SetProtoRevEnabledProposalAmino): _145.SetProtoRevEnabledProposal;
                toAmino(message: _145.SetProtoRevEnabledProposal): _145.SetProtoRevEnabledProposalAmino;
                fromAminoMsg(object: _145.SetProtoRevEnabledProposalAminoMsg): _145.SetProtoRevEnabledProposal;
                toAminoMsg(message: _145.SetProtoRevEnabledProposal): _145.SetProtoRevEnabledProposalAminoMsg;
                fromProtoMsg(message: _145.SetProtoRevEnabledProposalProtoMsg): _145.SetProtoRevEnabledProposal;
                toProto(message: _145.SetProtoRevEnabledProposal): Uint8Array;
                toProtoMsg(message: _145.SetProtoRevEnabledProposal): _145.SetProtoRevEnabledProposalProtoMsg;
            };
            SetProtoRevAdminAccountProposal: {
                typeUrl: string;
                encode(message: _145.SetProtoRevAdminAccountProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.SetProtoRevAdminAccountProposal;
                fromPartial(object: Partial<_145.SetProtoRevAdminAccountProposal>): _145.SetProtoRevAdminAccountProposal;
                fromAmino(object: _145.SetProtoRevAdminAccountProposalAmino): _145.SetProtoRevAdminAccountProposal;
                toAmino(message: _145.SetProtoRevAdminAccountProposal): _145.SetProtoRevAdminAccountProposalAmino;
                fromAminoMsg(object: _145.SetProtoRevAdminAccountProposalAminoMsg): _145.SetProtoRevAdminAccountProposal;
                toAminoMsg(message: _145.SetProtoRevAdminAccountProposal): _145.SetProtoRevAdminAccountProposalAminoMsg;
                fromProtoMsg(message: _145.SetProtoRevAdminAccountProposalProtoMsg): _145.SetProtoRevAdminAccountProposal;
                toProto(message: _145.SetProtoRevAdminAccountProposal): Uint8Array;
                toProtoMsg(message: _145.SetProtoRevAdminAccountProposal): _145.SetProtoRevAdminAccountProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _144.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.GenesisState;
                fromPartial(object: Partial<_144.GenesisState>): _144.GenesisState;
                fromAmino(object: _144.GenesisStateAmino): _144.GenesisState;
                toAmino(message: _144.GenesisState): _144.GenesisStateAmino;
                fromAminoMsg(object: _144.GenesisStateAminoMsg): _144.GenesisState;
                toAminoMsg(message: _144.GenesisState): _144.GenesisStateAminoMsg;
                fromProtoMsg(message: _144.GenesisStateProtoMsg): _144.GenesisState;
                toProto(message: _144.GenesisState): Uint8Array;
                toProtoMsg(message: _144.GenesisState): _144.GenesisStateProtoMsg;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                typeUrl: string;
                encode(message: _150.Node, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.Node;
                fromPartial(object: Partial<_150.Node>): _150.Node;
                fromAmino(object: _150.NodeAmino): _150.Node;
                toAmino(message: _150.Node): _150.NodeAmino;
                fromAminoMsg(object: _150.NodeAminoMsg): _150.Node;
                toAminoMsg(message: _150.Node): _150.NodeAminoMsg;
                fromProtoMsg(message: _150.NodeProtoMsg): _150.Node;
                toProto(message: _150.Node): Uint8Array;
                toProtoMsg(message: _150.Node): _150.NodeProtoMsg;
            };
            Child: {
                typeUrl: string;
                encode(message: _150.Child, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.Child;
                fromPartial(object: Partial<_150.Child>): _150.Child;
                fromAmino(object: _150.ChildAmino): _150.Child;
                toAmino(message: _150.Child): _150.ChildAmino;
                fromAminoMsg(object: _150.ChildAminoMsg): _150.Child;
                toAminoMsg(message: _150.Child): _150.ChildAminoMsg;
                fromProtoMsg(message: _150.ChildProtoMsg): _150.Child;
                toProto(message: _150.Child): Uint8Array;
                toProtoMsg(message: _150.Child): _150.ChildProtoMsg;
            };
            Leaf: {
                typeUrl: string;
                encode(message: _150.Leaf, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.Leaf;
                fromPartial(object: Partial<_150.Leaf>): _150.Leaf;
                fromAmino(object: _150.LeafAmino): _150.Leaf;
                toAmino(message: _150.Leaf): _150.LeafAmino;
                fromAminoMsg(object: _150.LeafAminoMsg): _150.Leaf;
                toAminoMsg(message: _150.Leaf): _150.LeafAminoMsg;
                fromProtoMsg(message: _150.LeafProtoMsg): _150.Leaf;
                toProto(message: _150.Leaf): Uint8Array;
                toProtoMsg(message: _150.Leaf): _150.LeafProtoMsg;
            };
        };
    }
    const superfluid: {
        MsgClientImpl: typeof _329.MsgClientImpl;
        QueryClientImpl: typeof _315.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _153.QueryParamsRequest): Promise<_153.QueryParamsResponse>;
            assetType(request: _153.AssetTypeRequest): Promise<_153.AssetTypeResponse>;
            allAssets(request?: _153.AllAssetsRequest): Promise<_153.AllAssetsResponse>;
            assetMultiplier(request: _153.AssetMultiplierRequest): Promise<_153.AssetMultiplierResponse>;
            allIntermediaryAccounts(request?: _153.AllIntermediaryAccountsRequest): Promise<_153.AllIntermediaryAccountsResponse>;
            connectedIntermediaryAccount(request: _153.ConnectedIntermediaryAccountRequest): Promise<_153.ConnectedIntermediaryAccountResponse>;
            totalDelegationByValidatorForDenom(request: _153.QueryTotalDelegationByValidatorForDenomRequest): Promise<_153.QueryTotalDelegationByValidatorForDenomResponse>;
            totalSuperfluidDelegations(request?: _153.TotalSuperfluidDelegationsRequest): Promise<_153.TotalSuperfluidDelegationsResponse>;
            superfluidDelegationAmount(request: _153.SuperfluidDelegationAmountRequest): Promise<_153.SuperfluidDelegationAmountResponse>;
            superfluidDelegationsByDelegator(request: _153.SuperfluidDelegationsByDelegatorRequest): Promise<_153.SuperfluidDelegationsByDelegatorResponse>;
            superfluidUndelegationsByDelegator(request: _153.SuperfluidUndelegationsByDelegatorRequest): Promise<_153.SuperfluidUndelegationsByDelegatorResponse>;
            superfluidDelegationsByValidatorDenom(request: _153.SuperfluidDelegationsByValidatorDenomRequest): Promise<_153.SuperfluidDelegationsByValidatorDenomResponse>;
            estimateSuperfluidDelegatedAmountByValidatorDenom(request: _153.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_153.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
            totalDelegationByDelegator(request: _153.QueryTotalDelegationByDelegatorRequest): Promise<_153.QueryTotalDelegationByDelegatorResponse>;
            unpoolWhitelist(request?: _153.QueryUnpoolWhitelistRequest): Promise<_153.QueryUnpoolWhitelistResponse>;
            userConcentratedSuperfluidPositionsDelegated(request: _153.UserConcentratedSuperfluidPositionsDelegatedRequest): Promise<_153.UserConcentratedSuperfluidPositionsDelegatedResponse>;
            userConcentratedSuperfluidPositionsUndelegating(request: _153.UserConcentratedSuperfluidPositionsUndelegatingRequest): Promise<_153.UserConcentratedSuperfluidPositionsUndelegatingResponse>;
        };
        LCDQueryClient: typeof _297.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _155.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _155.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _155.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegateAndUnbondLock(value: _155.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _155.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createFullRangePositionAndSuperfluidDelegate(value: _155.MsgCreateFullRangePositionAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _155.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToConcentratedLiquiditySuperfluidPosition(value: _155.MsgAddToConcentratedLiquiditySuperfluidPosition): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _155.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _155.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _155.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _155.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _155.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _155.MsgSuperfluidUnbondLock;
                };
                superfluidUndelegateAndUnbondLock(value: _155.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: _155.MsgSuperfluidUndelegateAndUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _155.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _155.MsgLockAndSuperfluidDelegate;
                };
                createFullRangePositionAndSuperfluidDelegate(value: _155.MsgCreateFullRangePositionAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _155.MsgCreateFullRangePositionAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _155.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _155.MsgUnPoolWhitelistedPool;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
                };
                addToConcentratedLiquiditySuperfluidPosition(value: _155.MsgAddToConcentratedLiquiditySuperfluidPosition): {
                    typeUrl: string;
                    value: _155.MsgAddToConcentratedLiquiditySuperfluidPosition;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _155.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _155.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _155.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _155.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _155.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _155.MsgSuperfluidUnbondLock;
                };
                superfluidUndelegateAndUnbondLock(value: _155.MsgSuperfluidUndelegateAndUnbondLock): {
                    typeUrl: string;
                    value: _155.MsgSuperfluidUndelegateAndUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _155.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _155.MsgLockAndSuperfluidDelegate;
                };
                createFullRangePositionAndSuperfluidDelegate(value: _155.MsgCreateFullRangePositionAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _155.MsgCreateFullRangePositionAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _155.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _155.MsgUnPoolWhitelistedPool;
                };
                unlockAndMigrateSharesToFullRangeConcentratedPosition(value: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): {
                    typeUrl: string;
                    value: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
                };
                addToConcentratedLiquiditySuperfluidPosition(value: _155.MsgAddToConcentratedLiquiditySuperfluidPosition): {
                    typeUrl: string;
                    value: _155.MsgAddToConcentratedLiquiditySuperfluidPosition;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _155.MsgSuperfluidDelegate) => _155.MsgSuperfluidDelegateAmino;
                fromAmino: (object: _155.MsgSuperfluidDelegateAmino) => _155.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: (message: _155.MsgSuperfluidUndelegate) => _155.MsgSuperfluidUndelegateAmino;
                fromAmino: (object: _155.MsgSuperfluidUndelegateAmino) => _155.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: (message: _155.MsgSuperfluidUnbondLock) => _155.MsgSuperfluidUnbondLockAmino;
                fromAmino: (object: _155.MsgSuperfluidUnbondLockAmino) => _155.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock": {
                aminoType: string;
                toAmino: (message: _155.MsgSuperfluidUndelegateAndUnbondLock) => _155.MsgSuperfluidUndelegateAndUnbondLockAmino;
                fromAmino: (object: _155.MsgSuperfluidUndelegateAndUnbondLockAmino) => _155.MsgSuperfluidUndelegateAndUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _155.MsgLockAndSuperfluidDelegate) => _155.MsgLockAndSuperfluidDelegateAmino;
                fromAmino: (object: _155.MsgLockAndSuperfluidDelegateAmino) => _155.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _155.MsgCreateFullRangePositionAndSuperfluidDelegate) => _155.MsgCreateFullRangePositionAndSuperfluidDelegateAmino;
                fromAmino: (object: _155.MsgCreateFullRangePositionAndSuperfluidDelegateAmino) => _155.MsgCreateFullRangePositionAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: (message: _155.MsgUnPoolWhitelistedPool) => _155.MsgUnPoolWhitelistedPoolAmino;
                fromAmino: (object: _155.MsgUnPoolWhitelistedPoolAmino) => _155.MsgUnPoolWhitelistedPool;
            };
            "/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition": {
                aminoType: string;
                toAmino: (message: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition) => _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino;
                fromAmino: (object: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino) => _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            };
            "/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition": {
                aminoType: string;
                toAmino: (message: _155.MsgAddToConcentratedLiquiditySuperfluidPosition) => _155.MsgAddToConcentratedLiquiditySuperfluidPositionAmino;
                fromAmino: (object: _155.MsgAddToConcentratedLiquiditySuperfluidPositionAmino) => _155.MsgAddToConcentratedLiquiditySuperfluidPosition;
            };
        };
        MsgSuperfluidDelegate: {
            typeUrl: string;
            encode(message: _155.MsgSuperfluidDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgSuperfluidDelegate;
            fromPartial(object: Partial<_155.MsgSuperfluidDelegate>): _155.MsgSuperfluidDelegate;
            fromAmino(object: _155.MsgSuperfluidDelegateAmino): _155.MsgSuperfluidDelegate;
            toAmino(message: _155.MsgSuperfluidDelegate): _155.MsgSuperfluidDelegateAmino;
            fromAminoMsg(object: _155.MsgSuperfluidDelegateAminoMsg): _155.MsgSuperfluidDelegate;
            toAminoMsg(message: _155.MsgSuperfluidDelegate): _155.MsgSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _155.MsgSuperfluidDelegateProtoMsg): _155.MsgSuperfluidDelegate;
            toProto(message: _155.MsgSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _155.MsgSuperfluidDelegate): _155.MsgSuperfluidDelegateProtoMsg;
        };
        MsgSuperfluidDelegateResponse: {
            typeUrl: string;
            encode(_: _155.MsgSuperfluidDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgSuperfluidDelegateResponse;
            fromPartial(_: Partial<_155.MsgSuperfluidDelegateResponse>): _155.MsgSuperfluidDelegateResponse;
            fromAmino(_: _155.MsgSuperfluidDelegateResponseAmino): _155.MsgSuperfluidDelegateResponse;
            toAmino(_: _155.MsgSuperfluidDelegateResponse): _155.MsgSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _155.MsgSuperfluidDelegateResponseAminoMsg): _155.MsgSuperfluidDelegateResponse;
            toAminoMsg(message: _155.MsgSuperfluidDelegateResponse): _155.MsgSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _155.MsgSuperfluidDelegateResponseProtoMsg): _155.MsgSuperfluidDelegateResponse;
            toProto(message: _155.MsgSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _155.MsgSuperfluidDelegateResponse): _155.MsgSuperfluidDelegateResponseProtoMsg;
        };
        MsgSuperfluidUndelegate: {
            typeUrl: string;
            encode(message: _155.MsgSuperfluidUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgSuperfluidUndelegate;
            fromPartial(object: Partial<_155.MsgSuperfluidUndelegate>): _155.MsgSuperfluidUndelegate;
            fromAmino(object: _155.MsgSuperfluidUndelegateAmino): _155.MsgSuperfluidUndelegate;
            toAmino(message: _155.MsgSuperfluidUndelegate): _155.MsgSuperfluidUndelegateAmino;
            fromAminoMsg(object: _155.MsgSuperfluidUndelegateAminoMsg): _155.MsgSuperfluidUndelegate;
            toAminoMsg(message: _155.MsgSuperfluidUndelegate): _155.MsgSuperfluidUndelegateAminoMsg;
            fromProtoMsg(message: _155.MsgSuperfluidUndelegateProtoMsg): _155.MsgSuperfluidUndelegate;
            toProto(message: _155.MsgSuperfluidUndelegate): Uint8Array;
            toProtoMsg(message: _155.MsgSuperfluidUndelegate): _155.MsgSuperfluidUndelegateProtoMsg;
        };
        MsgSuperfluidUndelegateResponse: {
            typeUrl: string;
            encode(_: _155.MsgSuperfluidUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgSuperfluidUndelegateResponse;
            fromPartial(_: Partial<_155.MsgSuperfluidUndelegateResponse>): _155.MsgSuperfluidUndelegateResponse;
            fromAmino(_: _155.MsgSuperfluidUndelegateResponseAmino): _155.MsgSuperfluidUndelegateResponse;
            toAmino(_: _155.MsgSuperfluidUndelegateResponse): _155.MsgSuperfluidUndelegateResponseAmino;
            fromAminoMsg(object: _155.MsgSuperfluidUndelegateResponseAminoMsg): _155.MsgSuperfluidUndelegateResponse;
            toAminoMsg(message: _155.MsgSuperfluidUndelegateResponse): _155.MsgSuperfluidUndelegateResponseAminoMsg;
            fromProtoMsg(message: _155.MsgSuperfluidUndelegateResponseProtoMsg): _155.MsgSuperfluidUndelegateResponse;
            toProto(message: _155.MsgSuperfluidUndelegateResponse): Uint8Array;
            toProtoMsg(message: _155.MsgSuperfluidUndelegateResponse): _155.MsgSuperfluidUndelegateResponseProtoMsg;
        };
        MsgSuperfluidUnbondLock: {
            typeUrl: string;
            encode(message: _155.MsgSuperfluidUnbondLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgSuperfluidUnbondLock;
            fromPartial(object: Partial<_155.MsgSuperfluidUnbondLock>): _155.MsgSuperfluidUnbondLock;
            fromAmino(object: _155.MsgSuperfluidUnbondLockAmino): _155.MsgSuperfluidUnbondLock;
            toAmino(message: _155.MsgSuperfluidUnbondLock): _155.MsgSuperfluidUnbondLockAmino;
            fromAminoMsg(object: _155.MsgSuperfluidUnbondLockAminoMsg): _155.MsgSuperfluidUnbondLock;
            toAminoMsg(message: _155.MsgSuperfluidUnbondLock): _155.MsgSuperfluidUnbondLockAminoMsg;
            fromProtoMsg(message: _155.MsgSuperfluidUnbondLockProtoMsg): _155.MsgSuperfluidUnbondLock;
            toProto(message: _155.MsgSuperfluidUnbondLock): Uint8Array;
            toProtoMsg(message: _155.MsgSuperfluidUnbondLock): _155.MsgSuperfluidUnbondLockProtoMsg;
        };
        MsgSuperfluidUnbondLockResponse: {
            typeUrl: string;
            encode(_: _155.MsgSuperfluidUnbondLockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgSuperfluidUnbondLockResponse;
            fromPartial(_: Partial<_155.MsgSuperfluidUnbondLockResponse>): _155.MsgSuperfluidUnbondLockResponse;
            fromAmino(_: _155.MsgSuperfluidUnbondLockResponseAmino): _155.MsgSuperfluidUnbondLockResponse;
            toAmino(_: _155.MsgSuperfluidUnbondLockResponse): _155.MsgSuperfluidUnbondLockResponseAmino;
            fromAminoMsg(object: _155.MsgSuperfluidUnbondLockResponseAminoMsg): _155.MsgSuperfluidUnbondLockResponse;
            toAminoMsg(message: _155.MsgSuperfluidUnbondLockResponse): _155.MsgSuperfluidUnbondLockResponseAminoMsg;
            fromProtoMsg(message: _155.MsgSuperfluidUnbondLockResponseProtoMsg): _155.MsgSuperfluidUnbondLockResponse;
            toProto(message: _155.MsgSuperfluidUnbondLockResponse): Uint8Array;
            toProtoMsg(message: _155.MsgSuperfluidUnbondLockResponse): _155.MsgSuperfluidUnbondLockResponseProtoMsg;
        };
        MsgSuperfluidUndelegateAndUnbondLock: {
            typeUrl: string;
            encode(message: _155.MsgSuperfluidUndelegateAndUnbondLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgSuperfluidUndelegateAndUnbondLock;
            fromPartial(object: Partial<_155.MsgSuperfluidUndelegateAndUnbondLock>): _155.MsgSuperfluidUndelegateAndUnbondLock;
            fromAmino(object: _155.MsgSuperfluidUndelegateAndUnbondLockAmino): _155.MsgSuperfluidUndelegateAndUnbondLock;
            toAmino(message: _155.MsgSuperfluidUndelegateAndUnbondLock): _155.MsgSuperfluidUndelegateAndUnbondLockAmino;
            fromAminoMsg(object: _155.MsgSuperfluidUndelegateAndUnbondLockAminoMsg): _155.MsgSuperfluidUndelegateAndUnbondLock;
            toAminoMsg(message: _155.MsgSuperfluidUndelegateAndUnbondLock): _155.MsgSuperfluidUndelegateAndUnbondLockAminoMsg;
            fromProtoMsg(message: _155.MsgSuperfluidUndelegateAndUnbondLockProtoMsg): _155.MsgSuperfluidUndelegateAndUnbondLock;
            toProto(message: _155.MsgSuperfluidUndelegateAndUnbondLock): Uint8Array;
            toProtoMsg(message: _155.MsgSuperfluidUndelegateAndUnbondLock): _155.MsgSuperfluidUndelegateAndUnbondLockProtoMsg;
        };
        MsgSuperfluidUndelegateAndUnbondLockResponse: {
            typeUrl: string;
            encode(message: _155.MsgSuperfluidUndelegateAndUnbondLockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgSuperfluidUndelegateAndUnbondLockResponse;
            fromPartial(object: Partial<_155.MsgSuperfluidUndelegateAndUnbondLockResponse>): _155.MsgSuperfluidUndelegateAndUnbondLockResponse;
            fromAmino(object: _155.MsgSuperfluidUndelegateAndUnbondLockResponseAmino): _155.MsgSuperfluidUndelegateAndUnbondLockResponse;
            toAmino(message: _155.MsgSuperfluidUndelegateAndUnbondLockResponse): _155.MsgSuperfluidUndelegateAndUnbondLockResponseAmino;
            fromAminoMsg(object: _155.MsgSuperfluidUndelegateAndUnbondLockResponseAminoMsg): _155.MsgSuperfluidUndelegateAndUnbondLockResponse;
            toAminoMsg(message: _155.MsgSuperfluidUndelegateAndUnbondLockResponse): _155.MsgSuperfluidUndelegateAndUnbondLockResponseAminoMsg;
            fromProtoMsg(message: _155.MsgSuperfluidUndelegateAndUnbondLockResponseProtoMsg): _155.MsgSuperfluidUndelegateAndUnbondLockResponse;
            toProto(message: _155.MsgSuperfluidUndelegateAndUnbondLockResponse): Uint8Array;
            toProtoMsg(message: _155.MsgSuperfluidUndelegateAndUnbondLockResponse): _155.MsgSuperfluidUndelegateAndUnbondLockResponseProtoMsg;
        };
        MsgLockAndSuperfluidDelegate: {
            typeUrl: string;
            encode(message: _155.MsgLockAndSuperfluidDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgLockAndSuperfluidDelegate;
            fromPartial(object: Partial<_155.MsgLockAndSuperfluidDelegate>): _155.MsgLockAndSuperfluidDelegate;
            fromAmino(object: _155.MsgLockAndSuperfluidDelegateAmino): _155.MsgLockAndSuperfluidDelegate;
            toAmino(message: _155.MsgLockAndSuperfluidDelegate): _155.MsgLockAndSuperfluidDelegateAmino;
            fromAminoMsg(object: _155.MsgLockAndSuperfluidDelegateAminoMsg): _155.MsgLockAndSuperfluidDelegate;
            toAminoMsg(message: _155.MsgLockAndSuperfluidDelegate): _155.MsgLockAndSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _155.MsgLockAndSuperfluidDelegateProtoMsg): _155.MsgLockAndSuperfluidDelegate;
            toProto(message: _155.MsgLockAndSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _155.MsgLockAndSuperfluidDelegate): _155.MsgLockAndSuperfluidDelegateProtoMsg;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            typeUrl: string;
            encode(message: _155.MsgLockAndSuperfluidDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgLockAndSuperfluidDelegateResponse;
            fromPartial(object: Partial<_155.MsgLockAndSuperfluidDelegateResponse>): _155.MsgLockAndSuperfluidDelegateResponse;
            fromAmino(object: _155.MsgLockAndSuperfluidDelegateResponseAmino): _155.MsgLockAndSuperfluidDelegateResponse;
            toAmino(message: _155.MsgLockAndSuperfluidDelegateResponse): _155.MsgLockAndSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _155.MsgLockAndSuperfluidDelegateResponseAminoMsg): _155.MsgLockAndSuperfluidDelegateResponse;
            toAminoMsg(message: _155.MsgLockAndSuperfluidDelegateResponse): _155.MsgLockAndSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _155.MsgLockAndSuperfluidDelegateResponseProtoMsg): _155.MsgLockAndSuperfluidDelegateResponse;
            toProto(message: _155.MsgLockAndSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _155.MsgLockAndSuperfluidDelegateResponse): _155.MsgLockAndSuperfluidDelegateResponseProtoMsg;
        };
        MsgCreateFullRangePositionAndSuperfluidDelegate: {
            typeUrl: string;
            encode(message: _155.MsgCreateFullRangePositionAndSuperfluidDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgCreateFullRangePositionAndSuperfluidDelegate;
            fromPartial(object: Partial<_155.MsgCreateFullRangePositionAndSuperfluidDelegate>): _155.MsgCreateFullRangePositionAndSuperfluidDelegate;
            fromAmino(object: _155.MsgCreateFullRangePositionAndSuperfluidDelegateAmino): _155.MsgCreateFullRangePositionAndSuperfluidDelegate;
            toAmino(message: _155.MsgCreateFullRangePositionAndSuperfluidDelegate): _155.MsgCreateFullRangePositionAndSuperfluidDelegateAmino;
            fromAminoMsg(object: _155.MsgCreateFullRangePositionAndSuperfluidDelegateAminoMsg): _155.MsgCreateFullRangePositionAndSuperfluidDelegate;
            toAminoMsg(message: _155.MsgCreateFullRangePositionAndSuperfluidDelegate): _155.MsgCreateFullRangePositionAndSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _155.MsgCreateFullRangePositionAndSuperfluidDelegateProtoMsg): _155.MsgCreateFullRangePositionAndSuperfluidDelegate;
            toProto(message: _155.MsgCreateFullRangePositionAndSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _155.MsgCreateFullRangePositionAndSuperfluidDelegate): _155.MsgCreateFullRangePositionAndSuperfluidDelegateProtoMsg;
        };
        MsgCreateFullRangePositionAndSuperfluidDelegateResponse: {
            typeUrl: string;
            encode(message: _155.MsgCreateFullRangePositionAndSuperfluidDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
            fromPartial(object: Partial<_155.MsgCreateFullRangePositionAndSuperfluidDelegateResponse>): _155.MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
            fromAmino(object: _155.MsgCreateFullRangePositionAndSuperfluidDelegateResponseAmino): _155.MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
            toAmino(message: _155.MsgCreateFullRangePositionAndSuperfluidDelegateResponse): _155.MsgCreateFullRangePositionAndSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _155.MsgCreateFullRangePositionAndSuperfluidDelegateResponseAminoMsg): _155.MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
            toAminoMsg(message: _155.MsgCreateFullRangePositionAndSuperfluidDelegateResponse): _155.MsgCreateFullRangePositionAndSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _155.MsgCreateFullRangePositionAndSuperfluidDelegateResponseProtoMsg): _155.MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
            toProto(message: _155.MsgCreateFullRangePositionAndSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _155.MsgCreateFullRangePositionAndSuperfluidDelegateResponse): _155.MsgCreateFullRangePositionAndSuperfluidDelegateResponseProtoMsg;
        };
        MsgUnPoolWhitelistedPool: {
            typeUrl: string;
            encode(message: _155.MsgUnPoolWhitelistedPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgUnPoolWhitelistedPool;
            fromPartial(object: Partial<_155.MsgUnPoolWhitelistedPool>): _155.MsgUnPoolWhitelistedPool;
            fromAmino(object: _155.MsgUnPoolWhitelistedPoolAmino): _155.MsgUnPoolWhitelistedPool;
            toAmino(message: _155.MsgUnPoolWhitelistedPool): _155.MsgUnPoolWhitelistedPoolAmino;
            fromAminoMsg(object: _155.MsgUnPoolWhitelistedPoolAminoMsg): _155.MsgUnPoolWhitelistedPool;
            toAminoMsg(message: _155.MsgUnPoolWhitelistedPool): _155.MsgUnPoolWhitelistedPoolAminoMsg;
            fromProtoMsg(message: _155.MsgUnPoolWhitelistedPoolProtoMsg): _155.MsgUnPoolWhitelistedPool;
            toProto(message: _155.MsgUnPoolWhitelistedPool): Uint8Array;
            toProtoMsg(message: _155.MsgUnPoolWhitelistedPool): _155.MsgUnPoolWhitelistedPoolProtoMsg;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            typeUrl: string;
            encode(message: _155.MsgUnPoolWhitelistedPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgUnPoolWhitelistedPoolResponse;
            fromPartial(object: Partial<_155.MsgUnPoolWhitelistedPoolResponse>): _155.MsgUnPoolWhitelistedPoolResponse;
            fromAmino(object: _155.MsgUnPoolWhitelistedPoolResponseAmino): _155.MsgUnPoolWhitelistedPoolResponse;
            toAmino(message: _155.MsgUnPoolWhitelistedPoolResponse): _155.MsgUnPoolWhitelistedPoolResponseAmino;
            fromAminoMsg(object: _155.MsgUnPoolWhitelistedPoolResponseAminoMsg): _155.MsgUnPoolWhitelistedPoolResponse;
            toAminoMsg(message: _155.MsgUnPoolWhitelistedPoolResponse): _155.MsgUnPoolWhitelistedPoolResponseAminoMsg;
            fromProtoMsg(message: _155.MsgUnPoolWhitelistedPoolResponseProtoMsg): _155.MsgUnPoolWhitelistedPoolResponse;
            toProto(message: _155.MsgUnPoolWhitelistedPoolResponse): Uint8Array;
            toProtoMsg(message: _155.MsgUnPoolWhitelistedPoolResponse): _155.MsgUnPoolWhitelistedPoolResponseProtoMsg;
        };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition: {
            typeUrl: string;
            encode(message: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            fromPartial(object: Partial<_155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition>): _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            fromAmino(object: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino): _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            toAmino(message: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino;
            fromAminoMsg(object: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAminoMsg): _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            toAminoMsg(message: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAminoMsg;
            fromProtoMsg(message: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionProtoMsg): _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
            toProto(message: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): Uint8Array;
            toProtoMsg(message: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionProtoMsg;
        };
        MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse: {
            typeUrl: string;
            encode(message: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            fromPartial(object: Partial<_155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse>): _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            fromAmino(object: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAmino): _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            toAmino(message: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAmino;
            fromAminoMsg(object: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg): _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            toAminoMsg(message: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseAminoMsg;
            fromProtoMsg(message: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg): _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
            toProto(message: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): Uint8Array;
            toProtoMsg(message: _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse): _155.MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponseProtoMsg;
        };
        MsgAddToConcentratedLiquiditySuperfluidPosition: {
            typeUrl: string;
            encode(message: _155.MsgAddToConcentratedLiquiditySuperfluidPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgAddToConcentratedLiquiditySuperfluidPosition;
            fromPartial(object: Partial<_155.MsgAddToConcentratedLiquiditySuperfluidPosition>): _155.MsgAddToConcentratedLiquiditySuperfluidPosition;
            fromAmino(object: _155.MsgAddToConcentratedLiquiditySuperfluidPositionAmino): _155.MsgAddToConcentratedLiquiditySuperfluidPosition;
            toAmino(message: _155.MsgAddToConcentratedLiquiditySuperfluidPosition): _155.MsgAddToConcentratedLiquiditySuperfluidPositionAmino;
            fromAminoMsg(object: _155.MsgAddToConcentratedLiquiditySuperfluidPositionAminoMsg): _155.MsgAddToConcentratedLiquiditySuperfluidPosition;
            toAminoMsg(message: _155.MsgAddToConcentratedLiquiditySuperfluidPosition): _155.MsgAddToConcentratedLiquiditySuperfluidPositionAminoMsg;
            fromProtoMsg(message: _155.MsgAddToConcentratedLiquiditySuperfluidPositionProtoMsg): _155.MsgAddToConcentratedLiquiditySuperfluidPosition;
            toProto(message: _155.MsgAddToConcentratedLiquiditySuperfluidPosition): Uint8Array;
            toProtoMsg(message: _155.MsgAddToConcentratedLiquiditySuperfluidPosition): _155.MsgAddToConcentratedLiquiditySuperfluidPositionProtoMsg;
        };
        MsgAddToConcentratedLiquiditySuperfluidPositionResponse: {
            typeUrl: string;
            encode(message: _155.MsgAddToConcentratedLiquiditySuperfluidPositionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
            fromPartial(object: Partial<_155.MsgAddToConcentratedLiquiditySuperfluidPositionResponse>): _155.MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
            fromAmino(object: _155.MsgAddToConcentratedLiquiditySuperfluidPositionResponseAmino): _155.MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
            toAmino(message: _155.MsgAddToConcentratedLiquiditySuperfluidPositionResponse): _155.MsgAddToConcentratedLiquiditySuperfluidPositionResponseAmino;
            fromAminoMsg(object: _155.MsgAddToConcentratedLiquiditySuperfluidPositionResponseAminoMsg): _155.MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
            toAminoMsg(message: _155.MsgAddToConcentratedLiquiditySuperfluidPositionResponse): _155.MsgAddToConcentratedLiquiditySuperfluidPositionResponseAminoMsg;
            fromProtoMsg(message: _155.MsgAddToConcentratedLiquiditySuperfluidPositionResponseProtoMsg): _155.MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
            toProto(message: _155.MsgAddToConcentratedLiquiditySuperfluidPositionResponse): Uint8Array;
            toProtoMsg(message: _155.MsgAddToConcentratedLiquiditySuperfluidPositionResponse): _155.MsgAddToConcentratedLiquiditySuperfluidPositionResponseProtoMsg;
        };
        superfluidAssetTypeFromJSON(object: any): _154.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _154.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _154.SuperfluidAssetType;
        SuperfluidAssetTypeSDKType: typeof _154.SuperfluidAssetType;
        SuperfluidAssetTypeAmino: typeof _154.SuperfluidAssetType;
        SuperfluidAsset: {
            typeUrl: string;
            encode(message: _154.SuperfluidAsset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.SuperfluidAsset;
            fromPartial(object: Partial<_154.SuperfluidAsset>): _154.SuperfluidAsset;
            fromAmino(object: _154.SuperfluidAssetAmino): _154.SuperfluidAsset;
            toAmino(message: _154.SuperfluidAsset): _154.SuperfluidAssetAmino;
            fromAminoMsg(object: _154.SuperfluidAssetAminoMsg): _154.SuperfluidAsset;
            toAminoMsg(message: _154.SuperfluidAsset): _154.SuperfluidAssetAminoMsg;
            fromProtoMsg(message: _154.SuperfluidAssetProtoMsg): _154.SuperfluidAsset;
            toProto(message: _154.SuperfluidAsset): Uint8Array;
            toProtoMsg(message: _154.SuperfluidAsset): _154.SuperfluidAssetProtoMsg;
        };
        SuperfluidIntermediaryAccount: {
            typeUrl: string;
            encode(message: _154.SuperfluidIntermediaryAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.SuperfluidIntermediaryAccount;
            fromPartial(object: Partial<_154.SuperfluidIntermediaryAccount>): _154.SuperfluidIntermediaryAccount;
            fromAmino(object: _154.SuperfluidIntermediaryAccountAmino): _154.SuperfluidIntermediaryAccount;
            toAmino(message: _154.SuperfluidIntermediaryAccount): _154.SuperfluidIntermediaryAccountAmino;
            fromAminoMsg(object: _154.SuperfluidIntermediaryAccountAminoMsg): _154.SuperfluidIntermediaryAccount;
            toAminoMsg(message: _154.SuperfluidIntermediaryAccount): _154.SuperfluidIntermediaryAccountAminoMsg;
            fromProtoMsg(message: _154.SuperfluidIntermediaryAccountProtoMsg): _154.SuperfluidIntermediaryAccount;
            toProto(message: _154.SuperfluidIntermediaryAccount): Uint8Array;
            toProtoMsg(message: _154.SuperfluidIntermediaryAccount): _154.SuperfluidIntermediaryAccountProtoMsg;
        };
        OsmoEquivalentMultiplierRecord: {
            typeUrl: string;
            encode(message: _154.OsmoEquivalentMultiplierRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.OsmoEquivalentMultiplierRecord;
            fromPartial(object: Partial<_154.OsmoEquivalentMultiplierRecord>): _154.OsmoEquivalentMultiplierRecord;
            fromAmino(object: _154.OsmoEquivalentMultiplierRecordAmino): _154.OsmoEquivalentMultiplierRecord;
            toAmino(message: _154.OsmoEquivalentMultiplierRecord): _154.OsmoEquivalentMultiplierRecordAmino;
            fromAminoMsg(object: _154.OsmoEquivalentMultiplierRecordAminoMsg): _154.OsmoEquivalentMultiplierRecord;
            toAminoMsg(message: _154.OsmoEquivalentMultiplierRecord): _154.OsmoEquivalentMultiplierRecordAminoMsg;
            fromProtoMsg(message: _154.OsmoEquivalentMultiplierRecordProtoMsg): _154.OsmoEquivalentMultiplierRecord;
            toProto(message: _154.OsmoEquivalentMultiplierRecord): Uint8Array;
            toProtoMsg(message: _154.OsmoEquivalentMultiplierRecord): _154.OsmoEquivalentMultiplierRecordProtoMsg;
        };
        SuperfluidDelegationRecord: {
            typeUrl: string;
            encode(message: _154.SuperfluidDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.SuperfluidDelegationRecord;
            fromPartial(object: Partial<_154.SuperfluidDelegationRecord>): _154.SuperfluidDelegationRecord;
            fromAmino(object: _154.SuperfluidDelegationRecordAmino): _154.SuperfluidDelegationRecord;
            toAmino(message: _154.SuperfluidDelegationRecord): _154.SuperfluidDelegationRecordAmino;
            fromAminoMsg(object: _154.SuperfluidDelegationRecordAminoMsg): _154.SuperfluidDelegationRecord;
            toAminoMsg(message: _154.SuperfluidDelegationRecord): _154.SuperfluidDelegationRecordAminoMsg;
            fromProtoMsg(message: _154.SuperfluidDelegationRecordProtoMsg): _154.SuperfluidDelegationRecord;
            toProto(message: _154.SuperfluidDelegationRecord): Uint8Array;
            toProtoMsg(message: _154.SuperfluidDelegationRecord): _154.SuperfluidDelegationRecordProtoMsg;
        };
        LockIdIntermediaryAccountConnection: {
            typeUrl: string;
            encode(message: _154.LockIdIntermediaryAccountConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.LockIdIntermediaryAccountConnection;
            fromPartial(object: Partial<_154.LockIdIntermediaryAccountConnection>): _154.LockIdIntermediaryAccountConnection;
            fromAmino(object: _154.LockIdIntermediaryAccountConnectionAmino): _154.LockIdIntermediaryAccountConnection;
            toAmino(message: _154.LockIdIntermediaryAccountConnection): _154.LockIdIntermediaryAccountConnectionAmino;
            fromAminoMsg(object: _154.LockIdIntermediaryAccountConnectionAminoMsg): _154.LockIdIntermediaryAccountConnection;
            toAminoMsg(message: _154.LockIdIntermediaryAccountConnection): _154.LockIdIntermediaryAccountConnectionAminoMsg;
            fromProtoMsg(message: _154.LockIdIntermediaryAccountConnectionProtoMsg): _154.LockIdIntermediaryAccountConnection;
            toProto(message: _154.LockIdIntermediaryAccountConnection): Uint8Array;
            toProtoMsg(message: _154.LockIdIntermediaryAccountConnection): _154.LockIdIntermediaryAccountConnectionProtoMsg;
        };
        UnpoolWhitelistedPools: {
            typeUrl: string;
            encode(message: _154.UnpoolWhitelistedPools, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.UnpoolWhitelistedPools;
            fromPartial(object: Partial<_154.UnpoolWhitelistedPools>): _154.UnpoolWhitelistedPools;
            fromAmino(object: _154.UnpoolWhitelistedPoolsAmino): _154.UnpoolWhitelistedPools;
            toAmino(message: _154.UnpoolWhitelistedPools): _154.UnpoolWhitelistedPoolsAmino;
            fromAminoMsg(object: _154.UnpoolWhitelistedPoolsAminoMsg): _154.UnpoolWhitelistedPools;
            toAminoMsg(message: _154.UnpoolWhitelistedPools): _154.UnpoolWhitelistedPoolsAminoMsg;
            fromProtoMsg(message: _154.UnpoolWhitelistedPoolsProtoMsg): _154.UnpoolWhitelistedPools;
            toProto(message: _154.UnpoolWhitelistedPools): Uint8Array;
            toProtoMsg(message: _154.UnpoolWhitelistedPools): _154.UnpoolWhitelistedPoolsProtoMsg;
        };
        ConcentratedPoolUserPositionRecord: {
            typeUrl: string;
            encode(message: _154.ConcentratedPoolUserPositionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ConcentratedPoolUserPositionRecord;
            fromPartial(object: Partial<_154.ConcentratedPoolUserPositionRecord>): _154.ConcentratedPoolUserPositionRecord;
            fromAmino(object: _154.ConcentratedPoolUserPositionRecordAmino): _154.ConcentratedPoolUserPositionRecord;
            toAmino(message: _154.ConcentratedPoolUserPositionRecord): _154.ConcentratedPoolUserPositionRecordAmino;
            fromAminoMsg(object: _154.ConcentratedPoolUserPositionRecordAminoMsg): _154.ConcentratedPoolUserPositionRecord;
            toAminoMsg(message: _154.ConcentratedPoolUserPositionRecord): _154.ConcentratedPoolUserPositionRecordAminoMsg;
            fromProtoMsg(message: _154.ConcentratedPoolUserPositionRecordProtoMsg): _154.ConcentratedPoolUserPositionRecord;
            toProto(message: _154.ConcentratedPoolUserPositionRecord): Uint8Array;
            toProtoMsg(message: _154.ConcentratedPoolUserPositionRecord): _154.ConcentratedPoolUserPositionRecordProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _153.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryParamsRequest;
            fromPartial(_: Partial<_153.QueryParamsRequest>): _153.QueryParamsRequest;
            fromAmino(_: _153.QueryParamsRequestAmino): _153.QueryParamsRequest;
            toAmino(_: _153.QueryParamsRequest): _153.QueryParamsRequestAmino;
            fromAminoMsg(object: _153.QueryParamsRequestAminoMsg): _153.QueryParamsRequest;
            toAminoMsg(message: _153.QueryParamsRequest): _153.QueryParamsRequestAminoMsg;
            fromProtoMsg(message: _153.QueryParamsRequestProtoMsg): _153.QueryParamsRequest;
            toProto(message: _153.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _153.QueryParamsRequest): _153.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _153.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryParamsResponse;
            fromPartial(object: Partial<_153.QueryParamsResponse>): _153.QueryParamsResponse;
            fromAmino(object: _153.QueryParamsResponseAmino): _153.QueryParamsResponse;
            toAmino(message: _153.QueryParamsResponse): _153.QueryParamsResponseAmino;
            fromAminoMsg(object: _153.QueryParamsResponseAminoMsg): _153.QueryParamsResponse;
            toAminoMsg(message: _153.QueryParamsResponse): _153.QueryParamsResponseAminoMsg;
            fromProtoMsg(message: _153.QueryParamsResponseProtoMsg): _153.QueryParamsResponse;
            toProto(message: _153.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _153.QueryParamsResponse): _153.QueryParamsResponseProtoMsg;
        };
        AssetTypeRequest: {
            typeUrl: string;
            encode(message: _153.AssetTypeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.AssetTypeRequest;
            fromPartial(object: Partial<_153.AssetTypeRequest>): _153.AssetTypeRequest;
            fromAmino(object: _153.AssetTypeRequestAmino): _153.AssetTypeRequest;
            toAmino(message: _153.AssetTypeRequest): _153.AssetTypeRequestAmino;
            fromAminoMsg(object: _153.AssetTypeRequestAminoMsg): _153.AssetTypeRequest;
            toAminoMsg(message: _153.AssetTypeRequest): _153.AssetTypeRequestAminoMsg;
            fromProtoMsg(message: _153.AssetTypeRequestProtoMsg): _153.AssetTypeRequest;
            toProto(message: _153.AssetTypeRequest): Uint8Array;
            toProtoMsg(message: _153.AssetTypeRequest): _153.AssetTypeRequestProtoMsg;
        };
        AssetTypeResponse: {
            typeUrl: string;
            encode(message: _153.AssetTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.AssetTypeResponse;
            fromPartial(object: Partial<_153.AssetTypeResponse>): _153.AssetTypeResponse;
            fromAmino(object: _153.AssetTypeResponseAmino): _153.AssetTypeResponse;
            toAmino(message: _153.AssetTypeResponse): _153.AssetTypeResponseAmino;
            fromAminoMsg(object: _153.AssetTypeResponseAminoMsg): _153.AssetTypeResponse;
            toAminoMsg(message: _153.AssetTypeResponse): _153.AssetTypeResponseAminoMsg;
            fromProtoMsg(message: _153.AssetTypeResponseProtoMsg): _153.AssetTypeResponse;
            toProto(message: _153.AssetTypeResponse): Uint8Array;
            toProtoMsg(message: _153.AssetTypeResponse): _153.AssetTypeResponseProtoMsg;
        };
        AllAssetsRequest: {
            typeUrl: string;
            encode(_: _153.AllAssetsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.AllAssetsRequest;
            fromPartial(_: Partial<_153.AllAssetsRequest>): _153.AllAssetsRequest;
            fromAmino(_: _153.AllAssetsRequestAmino): _153.AllAssetsRequest;
            toAmino(_: _153.AllAssetsRequest): _153.AllAssetsRequestAmino;
            fromAminoMsg(object: _153.AllAssetsRequestAminoMsg): _153.AllAssetsRequest;
            toAminoMsg(message: _153.AllAssetsRequest): _153.AllAssetsRequestAminoMsg;
            fromProtoMsg(message: _153.AllAssetsRequestProtoMsg): _153.AllAssetsRequest;
            toProto(message: _153.AllAssetsRequest): Uint8Array;
            toProtoMsg(message: _153.AllAssetsRequest): _153.AllAssetsRequestProtoMsg;
        };
        AllAssetsResponse: {
            typeUrl: string;
            encode(message: _153.AllAssetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.AllAssetsResponse;
            fromPartial(object: Partial<_153.AllAssetsResponse>): _153.AllAssetsResponse;
            fromAmino(object: _153.AllAssetsResponseAmino): _153.AllAssetsResponse;
            toAmino(message: _153.AllAssetsResponse): _153.AllAssetsResponseAmino;
            fromAminoMsg(object: _153.AllAssetsResponseAminoMsg): _153.AllAssetsResponse;
            toAminoMsg(message: _153.AllAssetsResponse): _153.AllAssetsResponseAminoMsg;
            fromProtoMsg(message: _153.AllAssetsResponseProtoMsg): _153.AllAssetsResponse;
            toProto(message: _153.AllAssetsResponse): Uint8Array;
            toProtoMsg(message: _153.AllAssetsResponse): _153.AllAssetsResponseProtoMsg;
        };
        AssetMultiplierRequest: {
            typeUrl: string;
            encode(message: _153.AssetMultiplierRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.AssetMultiplierRequest;
            fromPartial(object: Partial<_153.AssetMultiplierRequest>): _153.AssetMultiplierRequest;
            fromAmino(object: _153.AssetMultiplierRequestAmino): _153.AssetMultiplierRequest;
            toAmino(message: _153.AssetMultiplierRequest): _153.AssetMultiplierRequestAmino;
            fromAminoMsg(object: _153.AssetMultiplierRequestAminoMsg): _153.AssetMultiplierRequest;
            toAminoMsg(message: _153.AssetMultiplierRequest): _153.AssetMultiplierRequestAminoMsg;
            fromProtoMsg(message: _153.AssetMultiplierRequestProtoMsg): _153.AssetMultiplierRequest;
            toProto(message: _153.AssetMultiplierRequest): Uint8Array;
            toProtoMsg(message: _153.AssetMultiplierRequest): _153.AssetMultiplierRequestProtoMsg;
        };
        AssetMultiplierResponse: {
            typeUrl: string;
            encode(message: _153.AssetMultiplierResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.AssetMultiplierResponse;
            fromPartial(object: Partial<_153.AssetMultiplierResponse>): _153.AssetMultiplierResponse;
            fromAmino(object: _153.AssetMultiplierResponseAmino): _153.AssetMultiplierResponse;
            toAmino(message: _153.AssetMultiplierResponse): _153.AssetMultiplierResponseAmino;
            fromAminoMsg(object: _153.AssetMultiplierResponseAminoMsg): _153.AssetMultiplierResponse;
            toAminoMsg(message: _153.AssetMultiplierResponse): _153.AssetMultiplierResponseAminoMsg;
            fromProtoMsg(message: _153.AssetMultiplierResponseProtoMsg): _153.AssetMultiplierResponse;
            toProto(message: _153.AssetMultiplierResponse): Uint8Array;
            toProtoMsg(message: _153.AssetMultiplierResponse): _153.AssetMultiplierResponseProtoMsg;
        };
        SuperfluidIntermediaryAccountInfo: {
            typeUrl: string;
            encode(message: _153.SuperfluidIntermediaryAccountInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.SuperfluidIntermediaryAccountInfo;
            fromPartial(object: Partial<_153.SuperfluidIntermediaryAccountInfo>): _153.SuperfluidIntermediaryAccountInfo;
            fromAmino(object: _153.SuperfluidIntermediaryAccountInfoAmino): _153.SuperfluidIntermediaryAccountInfo;
            toAmino(message: _153.SuperfluidIntermediaryAccountInfo): _153.SuperfluidIntermediaryAccountInfoAmino;
            fromAminoMsg(object: _153.SuperfluidIntermediaryAccountInfoAminoMsg): _153.SuperfluidIntermediaryAccountInfo;
            toAminoMsg(message: _153.SuperfluidIntermediaryAccountInfo): _153.SuperfluidIntermediaryAccountInfoAminoMsg;
            fromProtoMsg(message: _153.SuperfluidIntermediaryAccountInfoProtoMsg): _153.SuperfluidIntermediaryAccountInfo;
            toProto(message: _153.SuperfluidIntermediaryAccountInfo): Uint8Array;
            toProtoMsg(message: _153.SuperfluidIntermediaryAccountInfo): _153.SuperfluidIntermediaryAccountInfoProtoMsg;
        };
        AllIntermediaryAccountsRequest: {
            typeUrl: string;
            encode(message: _153.AllIntermediaryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.AllIntermediaryAccountsRequest;
            fromPartial(object: Partial<_153.AllIntermediaryAccountsRequest>): _153.AllIntermediaryAccountsRequest;
            fromAmino(object: _153.AllIntermediaryAccountsRequestAmino): _153.AllIntermediaryAccountsRequest;
            toAmino(message: _153.AllIntermediaryAccountsRequest): _153.AllIntermediaryAccountsRequestAmino;
            fromAminoMsg(object: _153.AllIntermediaryAccountsRequestAminoMsg): _153.AllIntermediaryAccountsRequest;
            toAminoMsg(message: _153.AllIntermediaryAccountsRequest): _153.AllIntermediaryAccountsRequestAminoMsg;
            fromProtoMsg(message: _153.AllIntermediaryAccountsRequestProtoMsg): _153.AllIntermediaryAccountsRequest;
            toProto(message: _153.AllIntermediaryAccountsRequest): Uint8Array;
            toProtoMsg(message: _153.AllIntermediaryAccountsRequest): _153.AllIntermediaryAccountsRequestProtoMsg;
        };
        AllIntermediaryAccountsResponse: {
            typeUrl: string;
            encode(message: _153.AllIntermediaryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.AllIntermediaryAccountsResponse;
            fromPartial(object: Partial<_153.AllIntermediaryAccountsResponse>): _153.AllIntermediaryAccountsResponse;
            fromAmino(object: _153.AllIntermediaryAccountsResponseAmino): _153.AllIntermediaryAccountsResponse;
            toAmino(message: _153.AllIntermediaryAccountsResponse): _153.AllIntermediaryAccountsResponseAmino;
            fromAminoMsg(object: _153.AllIntermediaryAccountsResponseAminoMsg): _153.AllIntermediaryAccountsResponse;
            toAminoMsg(message: _153.AllIntermediaryAccountsResponse): _153.AllIntermediaryAccountsResponseAminoMsg;
            fromProtoMsg(message: _153.AllIntermediaryAccountsResponseProtoMsg): _153.AllIntermediaryAccountsResponse;
            toProto(message: _153.AllIntermediaryAccountsResponse): Uint8Array;
            toProtoMsg(message: _153.AllIntermediaryAccountsResponse): _153.AllIntermediaryAccountsResponseProtoMsg;
        };
        ConnectedIntermediaryAccountRequest: {
            typeUrl: string;
            encode(message: _153.ConnectedIntermediaryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.ConnectedIntermediaryAccountRequest;
            fromPartial(object: Partial<_153.ConnectedIntermediaryAccountRequest>): _153.ConnectedIntermediaryAccountRequest;
            fromAmino(object: _153.ConnectedIntermediaryAccountRequestAmino): _153.ConnectedIntermediaryAccountRequest;
            toAmino(message: _153.ConnectedIntermediaryAccountRequest): _153.ConnectedIntermediaryAccountRequestAmino;
            fromAminoMsg(object: _153.ConnectedIntermediaryAccountRequestAminoMsg): _153.ConnectedIntermediaryAccountRequest;
            toAminoMsg(message: _153.ConnectedIntermediaryAccountRequest): _153.ConnectedIntermediaryAccountRequestAminoMsg;
            fromProtoMsg(message: _153.ConnectedIntermediaryAccountRequestProtoMsg): _153.ConnectedIntermediaryAccountRequest;
            toProto(message: _153.ConnectedIntermediaryAccountRequest): Uint8Array;
            toProtoMsg(message: _153.ConnectedIntermediaryAccountRequest): _153.ConnectedIntermediaryAccountRequestProtoMsg;
        };
        ConnectedIntermediaryAccountResponse: {
            typeUrl: string;
            encode(message: _153.ConnectedIntermediaryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.ConnectedIntermediaryAccountResponse;
            fromPartial(object: Partial<_153.ConnectedIntermediaryAccountResponse>): _153.ConnectedIntermediaryAccountResponse;
            fromAmino(object: _153.ConnectedIntermediaryAccountResponseAmino): _153.ConnectedIntermediaryAccountResponse;
            toAmino(message: _153.ConnectedIntermediaryAccountResponse): _153.ConnectedIntermediaryAccountResponseAmino;
            fromAminoMsg(object: _153.ConnectedIntermediaryAccountResponseAminoMsg): _153.ConnectedIntermediaryAccountResponse;
            toAminoMsg(message: _153.ConnectedIntermediaryAccountResponse): _153.ConnectedIntermediaryAccountResponseAminoMsg;
            fromProtoMsg(message: _153.ConnectedIntermediaryAccountResponseProtoMsg): _153.ConnectedIntermediaryAccountResponse;
            toProto(message: _153.ConnectedIntermediaryAccountResponse): Uint8Array;
            toProtoMsg(message: _153.ConnectedIntermediaryAccountResponse): _153.ConnectedIntermediaryAccountResponseProtoMsg;
        };
        QueryTotalDelegationByValidatorForDenomRequest: {
            typeUrl: string;
            encode(message: _153.QueryTotalDelegationByValidatorForDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryTotalDelegationByValidatorForDenomRequest;
            fromPartial(object: Partial<_153.QueryTotalDelegationByValidatorForDenomRequest>): _153.QueryTotalDelegationByValidatorForDenomRequest;
            fromAmino(object: _153.QueryTotalDelegationByValidatorForDenomRequestAmino): _153.QueryTotalDelegationByValidatorForDenomRequest;
            toAmino(message: _153.QueryTotalDelegationByValidatorForDenomRequest): _153.QueryTotalDelegationByValidatorForDenomRequestAmino;
            fromAminoMsg(object: _153.QueryTotalDelegationByValidatorForDenomRequestAminoMsg): _153.QueryTotalDelegationByValidatorForDenomRequest;
            toAminoMsg(message: _153.QueryTotalDelegationByValidatorForDenomRequest): _153.QueryTotalDelegationByValidatorForDenomRequestAminoMsg;
            fromProtoMsg(message: _153.QueryTotalDelegationByValidatorForDenomRequestProtoMsg): _153.QueryTotalDelegationByValidatorForDenomRequest;
            toProto(message: _153.QueryTotalDelegationByValidatorForDenomRequest): Uint8Array;
            toProtoMsg(message: _153.QueryTotalDelegationByValidatorForDenomRequest): _153.QueryTotalDelegationByValidatorForDenomRequestProtoMsg;
        };
        QueryTotalDelegationByValidatorForDenomResponse: {
            typeUrl: string;
            encode(message: _153.QueryTotalDelegationByValidatorForDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryTotalDelegationByValidatorForDenomResponse;
            fromPartial(object: Partial<_153.QueryTotalDelegationByValidatorForDenomResponse>): _153.QueryTotalDelegationByValidatorForDenomResponse;
            fromAmino(object: _153.QueryTotalDelegationByValidatorForDenomResponseAmino): _153.QueryTotalDelegationByValidatorForDenomResponse;
            toAmino(message: _153.QueryTotalDelegationByValidatorForDenomResponse): _153.QueryTotalDelegationByValidatorForDenomResponseAmino;
            fromAminoMsg(object: _153.QueryTotalDelegationByValidatorForDenomResponseAminoMsg): _153.QueryTotalDelegationByValidatorForDenomResponse;
            toAminoMsg(message: _153.QueryTotalDelegationByValidatorForDenomResponse): _153.QueryTotalDelegationByValidatorForDenomResponseAminoMsg;
            fromProtoMsg(message: _153.QueryTotalDelegationByValidatorForDenomResponseProtoMsg): _153.QueryTotalDelegationByValidatorForDenomResponse;
            toProto(message: _153.QueryTotalDelegationByValidatorForDenomResponse): Uint8Array;
            toProtoMsg(message: _153.QueryTotalDelegationByValidatorForDenomResponse): _153.QueryTotalDelegationByValidatorForDenomResponseProtoMsg;
        };
        Delegations: {
            typeUrl: string;
            encode(message: _153.Delegations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.Delegations;
            fromPartial(object: Partial<_153.Delegations>): _153.Delegations;
            fromAmino(object: _153.DelegationsAmino): _153.Delegations;
            toAmino(message: _153.Delegations): _153.DelegationsAmino;
            fromAminoMsg(object: _153.DelegationsAminoMsg): _153.Delegations;
            toAminoMsg(message: _153.Delegations): _153.DelegationsAminoMsg;
            fromProtoMsg(message: _153.DelegationsProtoMsg): _153.Delegations;
            toProto(message: _153.Delegations): Uint8Array;
            toProtoMsg(message: _153.Delegations): _153.DelegationsProtoMsg;
        };
        TotalSuperfluidDelegationsRequest: {
            typeUrl: string;
            encode(_: _153.TotalSuperfluidDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.TotalSuperfluidDelegationsRequest;
            fromPartial(_: Partial<_153.TotalSuperfluidDelegationsRequest>): _153.TotalSuperfluidDelegationsRequest;
            fromAmino(_: _153.TotalSuperfluidDelegationsRequestAmino): _153.TotalSuperfluidDelegationsRequest;
            toAmino(_: _153.TotalSuperfluidDelegationsRequest): _153.TotalSuperfluidDelegationsRequestAmino;
            fromAminoMsg(object: _153.TotalSuperfluidDelegationsRequestAminoMsg): _153.TotalSuperfluidDelegationsRequest;
            toAminoMsg(message: _153.TotalSuperfluidDelegationsRequest): _153.TotalSuperfluidDelegationsRequestAminoMsg;
            fromProtoMsg(message: _153.TotalSuperfluidDelegationsRequestProtoMsg): _153.TotalSuperfluidDelegationsRequest;
            toProto(message: _153.TotalSuperfluidDelegationsRequest): Uint8Array;
            toProtoMsg(message: _153.TotalSuperfluidDelegationsRequest): _153.TotalSuperfluidDelegationsRequestProtoMsg;
        };
        TotalSuperfluidDelegationsResponse: {
            typeUrl: string;
            encode(message: _153.TotalSuperfluidDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.TotalSuperfluidDelegationsResponse;
            fromPartial(object: Partial<_153.TotalSuperfluidDelegationsResponse>): _153.TotalSuperfluidDelegationsResponse;
            fromAmino(object: _153.TotalSuperfluidDelegationsResponseAmino): _153.TotalSuperfluidDelegationsResponse;
            toAmino(message: _153.TotalSuperfluidDelegationsResponse): _153.TotalSuperfluidDelegationsResponseAmino;
            fromAminoMsg(object: _153.TotalSuperfluidDelegationsResponseAminoMsg): _153.TotalSuperfluidDelegationsResponse;
            toAminoMsg(message: _153.TotalSuperfluidDelegationsResponse): _153.TotalSuperfluidDelegationsResponseAminoMsg;
            fromProtoMsg(message: _153.TotalSuperfluidDelegationsResponseProtoMsg): _153.TotalSuperfluidDelegationsResponse;
            toProto(message: _153.TotalSuperfluidDelegationsResponse): Uint8Array;
            toProtoMsg(message: _153.TotalSuperfluidDelegationsResponse): _153.TotalSuperfluidDelegationsResponseProtoMsg;
        };
        SuperfluidDelegationAmountRequest: {
            typeUrl: string;
            encode(message: _153.SuperfluidDelegationAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.SuperfluidDelegationAmountRequest;
            fromPartial(object: Partial<_153.SuperfluidDelegationAmountRequest>): _153.SuperfluidDelegationAmountRequest;
            fromAmino(object: _153.SuperfluidDelegationAmountRequestAmino): _153.SuperfluidDelegationAmountRequest;
            toAmino(message: _153.SuperfluidDelegationAmountRequest): _153.SuperfluidDelegationAmountRequestAmino;
            fromAminoMsg(object: _153.SuperfluidDelegationAmountRequestAminoMsg): _153.SuperfluidDelegationAmountRequest;
            toAminoMsg(message: _153.SuperfluidDelegationAmountRequest): _153.SuperfluidDelegationAmountRequestAminoMsg;
            fromProtoMsg(message: _153.SuperfluidDelegationAmountRequestProtoMsg): _153.SuperfluidDelegationAmountRequest;
            toProto(message: _153.SuperfluidDelegationAmountRequest): Uint8Array;
            toProtoMsg(message: _153.SuperfluidDelegationAmountRequest): _153.SuperfluidDelegationAmountRequestProtoMsg;
        };
        SuperfluidDelegationAmountResponse: {
            typeUrl: string;
            encode(message: _153.SuperfluidDelegationAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.SuperfluidDelegationAmountResponse;
            fromPartial(object: Partial<_153.SuperfluidDelegationAmountResponse>): _153.SuperfluidDelegationAmountResponse;
            fromAmino(object: _153.SuperfluidDelegationAmountResponseAmino): _153.SuperfluidDelegationAmountResponse;
            toAmino(message: _153.SuperfluidDelegationAmountResponse): _153.SuperfluidDelegationAmountResponseAmino;
            fromAminoMsg(object: _153.SuperfluidDelegationAmountResponseAminoMsg): _153.SuperfluidDelegationAmountResponse;
            toAminoMsg(message: _153.SuperfluidDelegationAmountResponse): _153.SuperfluidDelegationAmountResponseAminoMsg;
            fromProtoMsg(message: _153.SuperfluidDelegationAmountResponseProtoMsg): _153.SuperfluidDelegationAmountResponse;
            toProto(message: _153.SuperfluidDelegationAmountResponse): Uint8Array;
            toProtoMsg(message: _153.SuperfluidDelegationAmountResponse): _153.SuperfluidDelegationAmountResponseProtoMsg;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            typeUrl: string;
            encode(message: _153.SuperfluidDelegationsByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.SuperfluidDelegationsByDelegatorRequest;
            fromPartial(object: Partial<_153.SuperfluidDelegationsByDelegatorRequest>): _153.SuperfluidDelegationsByDelegatorRequest;
            fromAmino(object: _153.SuperfluidDelegationsByDelegatorRequestAmino): _153.SuperfluidDelegationsByDelegatorRequest;
            toAmino(message: _153.SuperfluidDelegationsByDelegatorRequest): _153.SuperfluidDelegationsByDelegatorRequestAmino;
            fromAminoMsg(object: _153.SuperfluidDelegationsByDelegatorRequestAminoMsg): _153.SuperfluidDelegationsByDelegatorRequest;
            toAminoMsg(message: _153.SuperfluidDelegationsByDelegatorRequest): _153.SuperfluidDelegationsByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _153.SuperfluidDelegationsByDelegatorRequestProtoMsg): _153.SuperfluidDelegationsByDelegatorRequest;
            toProto(message: _153.SuperfluidDelegationsByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _153.SuperfluidDelegationsByDelegatorRequest): _153.SuperfluidDelegationsByDelegatorRequestProtoMsg;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            typeUrl: string;
            encode(message: _153.SuperfluidDelegationsByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.SuperfluidDelegationsByDelegatorResponse;
            fromPartial(object: Partial<_153.SuperfluidDelegationsByDelegatorResponse>): _153.SuperfluidDelegationsByDelegatorResponse;
            fromAmino(object: _153.SuperfluidDelegationsByDelegatorResponseAmino): _153.SuperfluidDelegationsByDelegatorResponse;
            toAmino(message: _153.SuperfluidDelegationsByDelegatorResponse): _153.SuperfluidDelegationsByDelegatorResponseAmino;
            fromAminoMsg(object: _153.SuperfluidDelegationsByDelegatorResponseAminoMsg): _153.SuperfluidDelegationsByDelegatorResponse;
            toAminoMsg(message: _153.SuperfluidDelegationsByDelegatorResponse): _153.SuperfluidDelegationsByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _153.SuperfluidDelegationsByDelegatorResponseProtoMsg): _153.SuperfluidDelegationsByDelegatorResponse;
            toProto(message: _153.SuperfluidDelegationsByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _153.SuperfluidDelegationsByDelegatorResponse): _153.SuperfluidDelegationsByDelegatorResponseProtoMsg;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            typeUrl: string;
            encode(message: _153.SuperfluidUndelegationsByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.SuperfluidUndelegationsByDelegatorRequest;
            fromPartial(object: Partial<_153.SuperfluidUndelegationsByDelegatorRequest>): _153.SuperfluidUndelegationsByDelegatorRequest;
            fromAmino(object: _153.SuperfluidUndelegationsByDelegatorRequestAmino): _153.SuperfluidUndelegationsByDelegatorRequest;
            toAmino(message: _153.SuperfluidUndelegationsByDelegatorRequest): _153.SuperfluidUndelegationsByDelegatorRequestAmino;
            fromAminoMsg(object: _153.SuperfluidUndelegationsByDelegatorRequestAminoMsg): _153.SuperfluidUndelegationsByDelegatorRequest;
            toAminoMsg(message: _153.SuperfluidUndelegationsByDelegatorRequest): _153.SuperfluidUndelegationsByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _153.SuperfluidUndelegationsByDelegatorRequestProtoMsg): _153.SuperfluidUndelegationsByDelegatorRequest;
            toProto(message: _153.SuperfluidUndelegationsByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _153.SuperfluidUndelegationsByDelegatorRequest): _153.SuperfluidUndelegationsByDelegatorRequestProtoMsg;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            typeUrl: string;
            encode(message: _153.SuperfluidUndelegationsByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.SuperfluidUndelegationsByDelegatorResponse;
            fromPartial(object: Partial<_153.SuperfluidUndelegationsByDelegatorResponse>): _153.SuperfluidUndelegationsByDelegatorResponse;
            fromAmino(object: _153.SuperfluidUndelegationsByDelegatorResponseAmino): _153.SuperfluidUndelegationsByDelegatorResponse;
            toAmino(message: _153.SuperfluidUndelegationsByDelegatorResponse): _153.SuperfluidUndelegationsByDelegatorResponseAmino;
            fromAminoMsg(object: _153.SuperfluidUndelegationsByDelegatorResponseAminoMsg): _153.SuperfluidUndelegationsByDelegatorResponse;
            toAminoMsg(message: _153.SuperfluidUndelegationsByDelegatorResponse): _153.SuperfluidUndelegationsByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _153.SuperfluidUndelegationsByDelegatorResponseProtoMsg): _153.SuperfluidUndelegationsByDelegatorResponse;
            toProto(message: _153.SuperfluidUndelegationsByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _153.SuperfluidUndelegationsByDelegatorResponse): _153.SuperfluidUndelegationsByDelegatorResponseProtoMsg;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            typeUrl: string;
            encode(message: _153.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.SuperfluidDelegationsByValidatorDenomRequest;
            fromPartial(object: Partial<_153.SuperfluidDelegationsByValidatorDenomRequest>): _153.SuperfluidDelegationsByValidatorDenomRequest;
            fromAmino(object: _153.SuperfluidDelegationsByValidatorDenomRequestAmino): _153.SuperfluidDelegationsByValidatorDenomRequest;
            toAmino(message: _153.SuperfluidDelegationsByValidatorDenomRequest): _153.SuperfluidDelegationsByValidatorDenomRequestAmino;
            fromAminoMsg(object: _153.SuperfluidDelegationsByValidatorDenomRequestAminoMsg): _153.SuperfluidDelegationsByValidatorDenomRequest;
            toAminoMsg(message: _153.SuperfluidDelegationsByValidatorDenomRequest): _153.SuperfluidDelegationsByValidatorDenomRequestAminoMsg;
            fromProtoMsg(message: _153.SuperfluidDelegationsByValidatorDenomRequestProtoMsg): _153.SuperfluidDelegationsByValidatorDenomRequest;
            toProto(message: _153.SuperfluidDelegationsByValidatorDenomRequest): Uint8Array;
            toProtoMsg(message: _153.SuperfluidDelegationsByValidatorDenomRequest): _153.SuperfluidDelegationsByValidatorDenomRequestProtoMsg;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            typeUrl: string;
            encode(message: _153.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.SuperfluidDelegationsByValidatorDenomResponse;
            fromPartial(object: Partial<_153.SuperfluidDelegationsByValidatorDenomResponse>): _153.SuperfluidDelegationsByValidatorDenomResponse;
            fromAmino(object: _153.SuperfluidDelegationsByValidatorDenomResponseAmino): _153.SuperfluidDelegationsByValidatorDenomResponse;
            toAmino(message: _153.SuperfluidDelegationsByValidatorDenomResponse): _153.SuperfluidDelegationsByValidatorDenomResponseAmino;
            fromAminoMsg(object: _153.SuperfluidDelegationsByValidatorDenomResponseAminoMsg): _153.SuperfluidDelegationsByValidatorDenomResponse;
            toAminoMsg(message: _153.SuperfluidDelegationsByValidatorDenomResponse): _153.SuperfluidDelegationsByValidatorDenomResponseAminoMsg;
            fromProtoMsg(message: _153.SuperfluidDelegationsByValidatorDenomResponseProtoMsg): _153.SuperfluidDelegationsByValidatorDenomResponse;
            toProto(message: _153.SuperfluidDelegationsByValidatorDenomResponse): Uint8Array;
            toProtoMsg(message: _153.SuperfluidDelegationsByValidatorDenomResponse): _153.SuperfluidDelegationsByValidatorDenomResponseProtoMsg;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            typeUrl: string;
            encode(message: _153.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromPartial(object: Partial<_153.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): _153.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromAmino(object: _153.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino): _153.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAmino(message: _153.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _153.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
            fromAminoMsg(object: _153.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg): _153.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAminoMsg(message: _153.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _153.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg;
            fromProtoMsg(message: _153.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg): _153.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toProto(message: _153.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Uint8Array;
            toProtoMsg(message: _153.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _153.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            typeUrl: string;
            encode(message: _153.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromPartial(object: Partial<_153.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): _153.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromAmino(object: _153.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino): _153.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAmino(message: _153.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _153.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
            fromAminoMsg(object: _153.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg): _153.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAminoMsg(message: _153.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _153.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg;
            fromProtoMsg(message: _153.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg): _153.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toProto(message: _153.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): Uint8Array;
            toProtoMsg(message: _153.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _153.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg;
        };
        QueryTotalDelegationByDelegatorRequest: {
            typeUrl: string;
            encode(message: _153.QueryTotalDelegationByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryTotalDelegationByDelegatorRequest;
            fromPartial(object: Partial<_153.QueryTotalDelegationByDelegatorRequest>): _153.QueryTotalDelegationByDelegatorRequest;
            fromAmino(object: _153.QueryTotalDelegationByDelegatorRequestAmino): _153.QueryTotalDelegationByDelegatorRequest;
            toAmino(message: _153.QueryTotalDelegationByDelegatorRequest): _153.QueryTotalDelegationByDelegatorRequestAmino;
            fromAminoMsg(object: _153.QueryTotalDelegationByDelegatorRequestAminoMsg): _153.QueryTotalDelegationByDelegatorRequest;
            toAminoMsg(message: _153.QueryTotalDelegationByDelegatorRequest): _153.QueryTotalDelegationByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _153.QueryTotalDelegationByDelegatorRequestProtoMsg): _153.QueryTotalDelegationByDelegatorRequest;
            toProto(message: _153.QueryTotalDelegationByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _153.QueryTotalDelegationByDelegatorRequest): _153.QueryTotalDelegationByDelegatorRequestProtoMsg;
        };
        QueryTotalDelegationByDelegatorResponse: {
            typeUrl: string;
            encode(message: _153.QueryTotalDelegationByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryTotalDelegationByDelegatorResponse;
            fromPartial(object: Partial<_153.QueryTotalDelegationByDelegatorResponse>): _153.QueryTotalDelegationByDelegatorResponse;
            fromAmino(object: _153.QueryTotalDelegationByDelegatorResponseAmino): _153.QueryTotalDelegationByDelegatorResponse;
            toAmino(message: _153.QueryTotalDelegationByDelegatorResponse): _153.QueryTotalDelegationByDelegatorResponseAmino;
            fromAminoMsg(object: _153.QueryTotalDelegationByDelegatorResponseAminoMsg): _153.QueryTotalDelegationByDelegatorResponse;
            toAminoMsg(message: _153.QueryTotalDelegationByDelegatorResponse): _153.QueryTotalDelegationByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _153.QueryTotalDelegationByDelegatorResponseProtoMsg): _153.QueryTotalDelegationByDelegatorResponse;
            toProto(message: _153.QueryTotalDelegationByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _153.QueryTotalDelegationByDelegatorResponse): _153.QueryTotalDelegationByDelegatorResponseProtoMsg;
        };
        QueryUnpoolWhitelistRequest: {
            typeUrl: string;
            encode(_: _153.QueryUnpoolWhitelistRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryUnpoolWhitelistRequest;
            fromPartial(_: Partial<_153.QueryUnpoolWhitelistRequest>): _153.QueryUnpoolWhitelistRequest;
            fromAmino(_: _153.QueryUnpoolWhitelistRequestAmino): _153.QueryUnpoolWhitelistRequest;
            toAmino(_: _153.QueryUnpoolWhitelistRequest): _153.QueryUnpoolWhitelistRequestAmino;
            fromAminoMsg(object: _153.QueryUnpoolWhitelistRequestAminoMsg): _153.QueryUnpoolWhitelistRequest;
            toAminoMsg(message: _153.QueryUnpoolWhitelistRequest): _153.QueryUnpoolWhitelistRequestAminoMsg;
            fromProtoMsg(message: _153.QueryUnpoolWhitelistRequestProtoMsg): _153.QueryUnpoolWhitelistRequest;
            toProto(message: _153.QueryUnpoolWhitelistRequest): Uint8Array;
            toProtoMsg(message: _153.QueryUnpoolWhitelistRequest): _153.QueryUnpoolWhitelistRequestProtoMsg;
        };
        QueryUnpoolWhitelistResponse: {
            typeUrl: string;
            encode(message: _153.QueryUnpoolWhitelistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryUnpoolWhitelistResponse;
            fromPartial(object: Partial<_153.QueryUnpoolWhitelistResponse>): _153.QueryUnpoolWhitelistResponse;
            fromAmino(object: _153.QueryUnpoolWhitelistResponseAmino): _153.QueryUnpoolWhitelistResponse;
            toAmino(message: _153.QueryUnpoolWhitelistResponse): _153.QueryUnpoolWhitelistResponseAmino;
            fromAminoMsg(object: _153.QueryUnpoolWhitelistResponseAminoMsg): _153.QueryUnpoolWhitelistResponse;
            toAminoMsg(message: _153.QueryUnpoolWhitelistResponse): _153.QueryUnpoolWhitelistResponseAminoMsg;
            fromProtoMsg(message: _153.QueryUnpoolWhitelistResponseProtoMsg): _153.QueryUnpoolWhitelistResponse;
            toProto(message: _153.QueryUnpoolWhitelistResponse): Uint8Array;
            toProtoMsg(message: _153.QueryUnpoolWhitelistResponse): _153.QueryUnpoolWhitelistResponseProtoMsg;
        };
        UserConcentratedSuperfluidPositionsDelegatedRequest: {
            typeUrl: string;
            encode(message: _153.UserConcentratedSuperfluidPositionsDelegatedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.UserConcentratedSuperfluidPositionsDelegatedRequest;
            fromPartial(object: Partial<_153.UserConcentratedSuperfluidPositionsDelegatedRequest>): _153.UserConcentratedSuperfluidPositionsDelegatedRequest;
            fromAmino(object: _153.UserConcentratedSuperfluidPositionsDelegatedRequestAmino): _153.UserConcentratedSuperfluidPositionsDelegatedRequest;
            toAmino(message: _153.UserConcentratedSuperfluidPositionsDelegatedRequest): _153.UserConcentratedSuperfluidPositionsDelegatedRequestAmino;
            fromAminoMsg(object: _153.UserConcentratedSuperfluidPositionsDelegatedRequestAminoMsg): _153.UserConcentratedSuperfluidPositionsDelegatedRequest;
            toAminoMsg(message: _153.UserConcentratedSuperfluidPositionsDelegatedRequest): _153.UserConcentratedSuperfluidPositionsDelegatedRequestAminoMsg;
            fromProtoMsg(message: _153.UserConcentratedSuperfluidPositionsDelegatedRequestProtoMsg): _153.UserConcentratedSuperfluidPositionsDelegatedRequest;
            toProto(message: _153.UserConcentratedSuperfluidPositionsDelegatedRequest): Uint8Array;
            toProtoMsg(message: _153.UserConcentratedSuperfluidPositionsDelegatedRequest): _153.UserConcentratedSuperfluidPositionsDelegatedRequestProtoMsg;
        };
        UserConcentratedSuperfluidPositionsDelegatedResponse: {
            typeUrl: string;
            encode(message: _153.UserConcentratedSuperfluidPositionsDelegatedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.UserConcentratedSuperfluidPositionsDelegatedResponse;
            fromPartial(object: Partial<_153.UserConcentratedSuperfluidPositionsDelegatedResponse>): _153.UserConcentratedSuperfluidPositionsDelegatedResponse;
            fromAmino(object: _153.UserConcentratedSuperfluidPositionsDelegatedResponseAmino): _153.UserConcentratedSuperfluidPositionsDelegatedResponse;
            toAmino(message: _153.UserConcentratedSuperfluidPositionsDelegatedResponse): _153.UserConcentratedSuperfluidPositionsDelegatedResponseAmino;
            fromAminoMsg(object: _153.UserConcentratedSuperfluidPositionsDelegatedResponseAminoMsg): _153.UserConcentratedSuperfluidPositionsDelegatedResponse;
            toAminoMsg(message: _153.UserConcentratedSuperfluidPositionsDelegatedResponse): _153.UserConcentratedSuperfluidPositionsDelegatedResponseAminoMsg;
            fromProtoMsg(message: _153.UserConcentratedSuperfluidPositionsDelegatedResponseProtoMsg): _153.UserConcentratedSuperfluidPositionsDelegatedResponse;
            toProto(message: _153.UserConcentratedSuperfluidPositionsDelegatedResponse): Uint8Array;
            toProtoMsg(message: _153.UserConcentratedSuperfluidPositionsDelegatedResponse): _153.UserConcentratedSuperfluidPositionsDelegatedResponseProtoMsg;
        };
        UserConcentratedSuperfluidPositionsUndelegatingRequest: {
            typeUrl: string;
            encode(message: _153.UserConcentratedSuperfluidPositionsUndelegatingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.UserConcentratedSuperfluidPositionsUndelegatingRequest;
            fromPartial(object: Partial<_153.UserConcentratedSuperfluidPositionsUndelegatingRequest>): _153.UserConcentratedSuperfluidPositionsUndelegatingRequest;
            fromAmino(object: _153.UserConcentratedSuperfluidPositionsUndelegatingRequestAmino): _153.UserConcentratedSuperfluidPositionsUndelegatingRequest;
            toAmino(message: _153.UserConcentratedSuperfluidPositionsUndelegatingRequest): _153.UserConcentratedSuperfluidPositionsUndelegatingRequestAmino;
            fromAminoMsg(object: _153.UserConcentratedSuperfluidPositionsUndelegatingRequestAminoMsg): _153.UserConcentratedSuperfluidPositionsUndelegatingRequest;
            toAminoMsg(message: _153.UserConcentratedSuperfluidPositionsUndelegatingRequest): _153.UserConcentratedSuperfluidPositionsUndelegatingRequestAminoMsg;
            fromProtoMsg(message: _153.UserConcentratedSuperfluidPositionsUndelegatingRequestProtoMsg): _153.UserConcentratedSuperfluidPositionsUndelegatingRequest;
            toProto(message: _153.UserConcentratedSuperfluidPositionsUndelegatingRequest): Uint8Array;
            toProtoMsg(message: _153.UserConcentratedSuperfluidPositionsUndelegatingRequest): _153.UserConcentratedSuperfluidPositionsUndelegatingRequestProtoMsg;
        };
        UserConcentratedSuperfluidPositionsUndelegatingResponse: {
            typeUrl: string;
            encode(message: _153.UserConcentratedSuperfluidPositionsUndelegatingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.UserConcentratedSuperfluidPositionsUndelegatingResponse;
            fromPartial(object: Partial<_153.UserConcentratedSuperfluidPositionsUndelegatingResponse>): _153.UserConcentratedSuperfluidPositionsUndelegatingResponse;
            fromAmino(object: _153.UserConcentratedSuperfluidPositionsUndelegatingResponseAmino): _153.UserConcentratedSuperfluidPositionsUndelegatingResponse;
            toAmino(message: _153.UserConcentratedSuperfluidPositionsUndelegatingResponse): _153.UserConcentratedSuperfluidPositionsUndelegatingResponseAmino;
            fromAminoMsg(object: _153.UserConcentratedSuperfluidPositionsUndelegatingResponseAminoMsg): _153.UserConcentratedSuperfluidPositionsUndelegatingResponse;
            toAminoMsg(message: _153.UserConcentratedSuperfluidPositionsUndelegatingResponse): _153.UserConcentratedSuperfluidPositionsUndelegatingResponseAminoMsg;
            fromProtoMsg(message: _153.UserConcentratedSuperfluidPositionsUndelegatingResponseProtoMsg): _153.UserConcentratedSuperfluidPositionsUndelegatingResponse;
            toProto(message: _153.UserConcentratedSuperfluidPositionsUndelegatingResponse): Uint8Array;
            toProtoMsg(message: _153.UserConcentratedSuperfluidPositionsUndelegatingResponse): _153.UserConcentratedSuperfluidPositionsUndelegatingResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _152.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.Params;
            fromPartial(object: Partial<_152.Params>): _152.Params;
            fromAmino(object: _152.ParamsAmino): _152.Params;
            toAmino(message: _152.Params): _152.ParamsAmino;
            fromAminoMsg(object: _152.ParamsAminoMsg): _152.Params;
            toAminoMsg(message: _152.Params): _152.ParamsAminoMsg;
            fromProtoMsg(message: _152.ParamsProtoMsg): _152.Params;
            toProto(message: _152.Params): Uint8Array;
            toProtoMsg(message: _152.Params): _152.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _151.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.GenesisState;
            fromPartial(object: Partial<_151.GenesisState>): _151.GenesisState;
            fromAmino(object: _151.GenesisStateAmino): _151.GenesisState;
            toAmino(message: _151.GenesisState): _151.GenesisStateAmino;
            fromAminoMsg(object: _151.GenesisStateAminoMsg): _151.GenesisState;
            toAminoMsg(message: _151.GenesisState): _151.GenesisStateAminoMsg;
            fromProtoMsg(message: _151.GenesisStateProtoMsg): _151.GenesisState;
            toProto(message: _151.GenesisState): Uint8Array;
            toProtoMsg(message: _151.GenesisState): _151.GenesisStateProtoMsg;
        };
    };
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _330.MsgClientImpl;
            QueryClientImpl: typeof _316.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _159.QueryParamsRequest): Promise<_159.QueryParamsResponse>;
                denomAuthorityMetadata(request: _159.QueryDenomAuthorityMetadataRequest): Promise<_159.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _159.QueryDenomsFromCreatorRequest): Promise<_159.QueryDenomsFromCreatorResponse>;
            };
            LCDQueryClient: typeof _298.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _160.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _160.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _160.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _160.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _160.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forceTransfer(value: _160.MsgForceTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _160.MsgCreateDenom): {
                        typeUrl: string;
                        value: _160.MsgCreateDenom;
                    };
                    mint(value: _160.MsgMint): {
                        typeUrl: string;
                        value: _160.MsgMint;
                    };
                    burn(value: _160.MsgBurn): {
                        typeUrl: string;
                        value: _160.MsgBurn;
                    };
                    changeAdmin(value: _160.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _160.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _160.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _160.MsgSetDenomMetadata;
                    };
                    forceTransfer(value: _160.MsgForceTransfer): {
                        typeUrl: string;
                        value: _160.MsgForceTransfer;
                    };
                };
                fromPartial: {
                    createDenom(value: _160.MsgCreateDenom): {
                        typeUrl: string;
                        value: _160.MsgCreateDenom;
                    };
                    mint(value: _160.MsgMint): {
                        typeUrl: string;
                        value: _160.MsgMint;
                    };
                    burn(value: _160.MsgBurn): {
                        typeUrl: string;
                        value: _160.MsgBurn;
                    };
                    changeAdmin(value: _160.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _160.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _160.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _160.MsgSetDenomMetadata;
                    };
                    forceTransfer(value: _160.MsgForceTransfer): {
                        typeUrl: string;
                        value: _160.MsgForceTransfer;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _160.MsgCreateDenom) => _160.MsgCreateDenomAmino;
                    fromAmino: (object: _160.MsgCreateDenomAmino) => _160.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _160.MsgMint) => _160.MsgMintAmino;
                    fromAmino: (object: _160.MsgMintAmino) => _160.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _160.MsgBurn) => _160.MsgBurnAmino;
                    fromAmino: (object: _160.MsgBurnAmino) => _160.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _160.MsgChangeAdmin) => _160.MsgChangeAdminAmino;
                    fromAmino: (object: _160.MsgChangeAdminAmino) => _160.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _160.MsgSetDenomMetadata) => _160.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _160.MsgSetDenomMetadataAmino) => _160.MsgSetDenomMetadata;
                };
                "/osmosis.tokenfactory.v1beta1.MsgForceTransfer": {
                    aminoType: string;
                    toAmino: (message: _160.MsgForceTransfer) => _160.MsgForceTransferAmino;
                    fromAmino: (object: _160.MsgForceTransferAmino) => _160.MsgForceTransfer;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _160.MsgCreateDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgCreateDenom;
                fromPartial(object: Partial<_160.MsgCreateDenom>): _160.MsgCreateDenom;
                fromAmino(object: _160.MsgCreateDenomAmino): _160.MsgCreateDenom;
                toAmino(message: _160.MsgCreateDenom): _160.MsgCreateDenomAmino;
                fromAminoMsg(object: _160.MsgCreateDenomAminoMsg): _160.MsgCreateDenom;
                toAminoMsg(message: _160.MsgCreateDenom): _160.MsgCreateDenomAminoMsg;
                fromProtoMsg(message: _160.MsgCreateDenomProtoMsg): _160.MsgCreateDenom;
                toProto(message: _160.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _160.MsgCreateDenom): _160.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(message: _160.MsgCreateDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgCreateDenomResponse;
                fromPartial(object: Partial<_160.MsgCreateDenomResponse>): _160.MsgCreateDenomResponse;
                fromAmino(object: _160.MsgCreateDenomResponseAmino): _160.MsgCreateDenomResponse;
                toAmino(message: _160.MsgCreateDenomResponse): _160.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _160.MsgCreateDenomResponseAminoMsg): _160.MsgCreateDenomResponse;
                toAminoMsg(message: _160.MsgCreateDenomResponse): _160.MsgCreateDenomResponseAminoMsg;
                fromProtoMsg(message: _160.MsgCreateDenomResponseProtoMsg): _160.MsgCreateDenomResponse;
                toProto(message: _160.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _160.MsgCreateDenomResponse): _160.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                encode(message: _160.MsgMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgMint;
                fromPartial(object: Partial<_160.MsgMint>): _160.MsgMint;
                fromAmino(object: _160.MsgMintAmino): _160.MsgMint;
                toAmino(message: _160.MsgMint): _160.MsgMintAmino;
                fromAminoMsg(object: _160.MsgMintAminoMsg): _160.MsgMint;
                toAminoMsg(message: _160.MsgMint): _160.MsgMintAminoMsg;
                fromProtoMsg(message: _160.MsgMintProtoMsg): _160.MsgMint;
                toProto(message: _160.MsgMint): Uint8Array;
                toProtoMsg(message: _160.MsgMint): _160.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                encode(_: _160.MsgMintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgMintResponse;
                fromPartial(_: Partial<_160.MsgMintResponse>): _160.MsgMintResponse;
                fromAmino(_: _160.MsgMintResponseAmino): _160.MsgMintResponse;
                toAmino(_: _160.MsgMintResponse): _160.MsgMintResponseAmino;
                fromAminoMsg(object: _160.MsgMintResponseAminoMsg): _160.MsgMintResponse;
                toAminoMsg(message: _160.MsgMintResponse): _160.MsgMintResponseAminoMsg;
                fromProtoMsg(message: _160.MsgMintResponseProtoMsg): _160.MsgMintResponse;
                toProto(message: _160.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _160.MsgMintResponse): _160.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _160.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgBurn;
                fromPartial(object: Partial<_160.MsgBurn>): _160.MsgBurn;
                fromAmino(object: _160.MsgBurnAmino): _160.MsgBurn;
                toAmino(message: _160.MsgBurn): _160.MsgBurnAmino;
                fromAminoMsg(object: _160.MsgBurnAminoMsg): _160.MsgBurn;
                toAminoMsg(message: _160.MsgBurn): _160.MsgBurnAminoMsg;
                fromProtoMsg(message: _160.MsgBurnProtoMsg): _160.MsgBurn;
                toProto(message: _160.MsgBurn): Uint8Array;
                toProtoMsg(message: _160.MsgBurn): _160.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _160.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgBurnResponse;
                fromPartial(_: Partial<_160.MsgBurnResponse>): _160.MsgBurnResponse;
                fromAmino(_: _160.MsgBurnResponseAmino): _160.MsgBurnResponse;
                toAmino(_: _160.MsgBurnResponse): _160.MsgBurnResponseAmino;
                fromAminoMsg(object: _160.MsgBurnResponseAminoMsg): _160.MsgBurnResponse;
                toAminoMsg(message: _160.MsgBurnResponse): _160.MsgBurnResponseAminoMsg;
                fromProtoMsg(message: _160.MsgBurnResponseProtoMsg): _160.MsgBurnResponse;
                toProto(message: _160.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _160.MsgBurnResponse): _160.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                encode(message: _160.MsgChangeAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgChangeAdmin;
                fromPartial(object: Partial<_160.MsgChangeAdmin>): _160.MsgChangeAdmin;
                fromAmino(object: _160.MsgChangeAdminAmino): _160.MsgChangeAdmin;
                toAmino(message: _160.MsgChangeAdmin): _160.MsgChangeAdminAmino;
                fromAminoMsg(object: _160.MsgChangeAdminAminoMsg): _160.MsgChangeAdmin;
                toAminoMsg(message: _160.MsgChangeAdmin): _160.MsgChangeAdminAminoMsg;
                fromProtoMsg(message: _160.MsgChangeAdminProtoMsg): _160.MsgChangeAdmin;
                toProto(message: _160.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _160.MsgChangeAdmin): _160.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                encode(_: _160.MsgChangeAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgChangeAdminResponse;
                fromPartial(_: Partial<_160.MsgChangeAdminResponse>): _160.MsgChangeAdminResponse;
                fromAmino(_: _160.MsgChangeAdminResponseAmino): _160.MsgChangeAdminResponse;
                toAmino(_: _160.MsgChangeAdminResponse): _160.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _160.MsgChangeAdminResponseAminoMsg): _160.MsgChangeAdminResponse;
                toAminoMsg(message: _160.MsgChangeAdminResponse): _160.MsgChangeAdminResponseAminoMsg;
                fromProtoMsg(message: _160.MsgChangeAdminResponseProtoMsg): _160.MsgChangeAdminResponse;
                toProto(message: _160.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _160.MsgChangeAdminResponse): _160.MsgChangeAdminResponseProtoMsg;
            };
            MsgSetDenomMetadata: {
                typeUrl: string;
                encode(message: _160.MsgSetDenomMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgSetDenomMetadata;
                fromPartial(object: Partial<_160.MsgSetDenomMetadata>): _160.MsgSetDenomMetadata;
                fromAmino(object: _160.MsgSetDenomMetadataAmino): _160.MsgSetDenomMetadata;
                toAmino(message: _160.MsgSetDenomMetadata): _160.MsgSetDenomMetadataAmino;
                fromAminoMsg(object: _160.MsgSetDenomMetadataAminoMsg): _160.MsgSetDenomMetadata;
                toAminoMsg(message: _160.MsgSetDenomMetadata): _160.MsgSetDenomMetadataAminoMsg;
                fromProtoMsg(message: _160.MsgSetDenomMetadataProtoMsg): _160.MsgSetDenomMetadata;
                toProto(message: _160.MsgSetDenomMetadata): Uint8Array;
                toProtoMsg(message: _160.MsgSetDenomMetadata): _160.MsgSetDenomMetadataProtoMsg;
            };
            MsgSetDenomMetadataResponse: {
                typeUrl: string;
                encode(_: _160.MsgSetDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgSetDenomMetadataResponse;
                fromPartial(_: Partial<_160.MsgSetDenomMetadataResponse>): _160.MsgSetDenomMetadataResponse;
                fromAmino(_: _160.MsgSetDenomMetadataResponseAmino): _160.MsgSetDenomMetadataResponse;
                toAmino(_: _160.MsgSetDenomMetadataResponse): _160.MsgSetDenomMetadataResponseAmino;
                fromAminoMsg(object: _160.MsgSetDenomMetadataResponseAminoMsg): _160.MsgSetDenomMetadataResponse;
                toAminoMsg(message: _160.MsgSetDenomMetadataResponse): _160.MsgSetDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _160.MsgSetDenomMetadataResponseProtoMsg): _160.MsgSetDenomMetadataResponse;
                toProto(message: _160.MsgSetDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _160.MsgSetDenomMetadataResponse): _160.MsgSetDenomMetadataResponseProtoMsg;
            };
            MsgForceTransfer: {
                typeUrl: string;
                encode(message: _160.MsgForceTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgForceTransfer;
                fromPartial(object: Partial<_160.MsgForceTransfer>): _160.MsgForceTransfer;
                fromAmino(object: _160.MsgForceTransferAmino): _160.MsgForceTransfer;
                toAmino(message: _160.MsgForceTransfer): _160.MsgForceTransferAmino;
                fromAminoMsg(object: _160.MsgForceTransferAminoMsg): _160.MsgForceTransfer;
                toAminoMsg(message: _160.MsgForceTransfer): _160.MsgForceTransferAminoMsg;
                fromProtoMsg(message: _160.MsgForceTransferProtoMsg): _160.MsgForceTransfer;
                toProto(message: _160.MsgForceTransfer): Uint8Array;
                toProtoMsg(message: _160.MsgForceTransfer): _160.MsgForceTransferProtoMsg;
            };
            MsgForceTransferResponse: {
                typeUrl: string;
                encode(_: _160.MsgForceTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgForceTransferResponse;
                fromPartial(_: Partial<_160.MsgForceTransferResponse>): _160.MsgForceTransferResponse;
                fromAmino(_: _160.MsgForceTransferResponseAmino): _160.MsgForceTransferResponse;
                toAmino(_: _160.MsgForceTransferResponse): _160.MsgForceTransferResponseAmino;
                fromAminoMsg(object: _160.MsgForceTransferResponseAminoMsg): _160.MsgForceTransferResponse;
                toAminoMsg(message: _160.MsgForceTransferResponse): _160.MsgForceTransferResponseAminoMsg;
                fromProtoMsg(message: _160.MsgForceTransferResponseProtoMsg): _160.MsgForceTransferResponse;
                toProto(message: _160.MsgForceTransferResponse): Uint8Array;
                toProtoMsg(message: _160.MsgForceTransferResponse): _160.MsgForceTransferResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _159.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryParamsRequest;
                fromPartial(_: Partial<_159.QueryParamsRequest>): _159.QueryParamsRequest;
                fromAmino(_: _159.QueryParamsRequestAmino): _159.QueryParamsRequest;
                toAmino(_: _159.QueryParamsRequest): _159.QueryParamsRequestAmino;
                fromAminoMsg(object: _159.QueryParamsRequestAminoMsg): _159.QueryParamsRequest;
                toAminoMsg(message: _159.QueryParamsRequest): _159.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _159.QueryParamsRequestProtoMsg): _159.QueryParamsRequest;
                toProto(message: _159.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _159.QueryParamsRequest): _159.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _159.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryParamsResponse;
                fromPartial(object: Partial<_159.QueryParamsResponse>): _159.QueryParamsResponse;
                fromAmino(object: _159.QueryParamsResponseAmino): _159.QueryParamsResponse;
                toAmino(message: _159.QueryParamsResponse): _159.QueryParamsResponseAmino;
                fromAminoMsg(object: _159.QueryParamsResponseAminoMsg): _159.QueryParamsResponse;
                toAminoMsg(message: _159.QueryParamsResponse): _159.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _159.QueryParamsResponseProtoMsg): _159.QueryParamsResponse;
                toProto(message: _159.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _159.QueryParamsResponse): _159.QueryParamsResponseProtoMsg;
            };
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                encode(message: _159.QueryDenomAuthorityMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_159.QueryDenomAuthorityMetadataRequest>): _159.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _159.QueryDenomAuthorityMetadataRequestAmino): _159.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _159.QueryDenomAuthorityMetadataRequest): _159.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _159.QueryDenomAuthorityMetadataRequestAminoMsg): _159.QueryDenomAuthorityMetadataRequest;
                toAminoMsg(message: _159.QueryDenomAuthorityMetadataRequest): _159.QueryDenomAuthorityMetadataRequestAminoMsg;
                fromProtoMsg(message: _159.QueryDenomAuthorityMetadataRequestProtoMsg): _159.QueryDenomAuthorityMetadataRequest;
                toProto(message: _159.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _159.QueryDenomAuthorityMetadataRequest): _159.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                encode(message: _159.QueryDenomAuthorityMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_159.QueryDenomAuthorityMetadataResponse>): _159.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _159.QueryDenomAuthorityMetadataResponseAmino): _159.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _159.QueryDenomAuthorityMetadataResponse): _159.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _159.QueryDenomAuthorityMetadataResponseAminoMsg): _159.QueryDenomAuthorityMetadataResponse;
                toAminoMsg(message: _159.QueryDenomAuthorityMetadataResponse): _159.QueryDenomAuthorityMetadataResponseAminoMsg;
                fromProtoMsg(message: _159.QueryDenomAuthorityMetadataResponseProtoMsg): _159.QueryDenomAuthorityMetadataResponse;
                toProto(message: _159.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _159.QueryDenomAuthorityMetadataResponse): _159.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                encode(message: _159.QueryDenomsFromCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_159.QueryDenomsFromCreatorRequest>): _159.QueryDenomsFromCreatorRequest;
                fromAmino(object: _159.QueryDenomsFromCreatorRequestAmino): _159.QueryDenomsFromCreatorRequest;
                toAmino(message: _159.QueryDenomsFromCreatorRequest): _159.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _159.QueryDenomsFromCreatorRequestAminoMsg): _159.QueryDenomsFromCreatorRequest;
                toAminoMsg(message: _159.QueryDenomsFromCreatorRequest): _159.QueryDenomsFromCreatorRequestAminoMsg;
                fromProtoMsg(message: _159.QueryDenomsFromCreatorRequestProtoMsg): _159.QueryDenomsFromCreatorRequest;
                toProto(message: _159.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _159.QueryDenomsFromCreatorRequest): _159.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                encode(message: _159.QueryDenomsFromCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_159.QueryDenomsFromCreatorResponse>): _159.QueryDenomsFromCreatorResponse;
                fromAmino(object: _159.QueryDenomsFromCreatorResponseAmino): _159.QueryDenomsFromCreatorResponse;
                toAmino(message: _159.QueryDenomsFromCreatorResponse): _159.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _159.QueryDenomsFromCreatorResponseAminoMsg): _159.QueryDenomsFromCreatorResponse;
                toAminoMsg(message: _159.QueryDenomsFromCreatorResponse): _159.QueryDenomsFromCreatorResponseAminoMsg;
                fromProtoMsg(message: _159.QueryDenomsFromCreatorResponseProtoMsg): _159.QueryDenomsFromCreatorResponse;
                toProto(message: _159.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _159.QueryDenomsFromCreatorResponse): _159.QueryDenomsFromCreatorResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _158.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.Params;
                fromPartial(object: Partial<_158.Params>): _158.Params;
                fromAmino(object: _158.ParamsAmino): _158.Params;
                toAmino(message: _158.Params): _158.ParamsAmino;
                fromAminoMsg(object: _158.ParamsAminoMsg): _158.Params;
                toAminoMsg(message: _158.Params): _158.ParamsAminoMsg;
                fromProtoMsg(message: _158.ParamsProtoMsg): _158.Params;
                toProto(message: _158.Params): Uint8Array;
                toProtoMsg(message: _158.Params): _158.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _157.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.GenesisState;
                fromPartial(object: Partial<_157.GenesisState>): _157.GenesisState;
                fromAmino(object: _157.GenesisStateAmino): _157.GenesisState;
                toAmino(message: _157.GenesisState): _157.GenesisStateAmino;
                fromAminoMsg(object: _157.GenesisStateAminoMsg): _157.GenesisState;
                toAminoMsg(message: _157.GenesisState): _157.GenesisStateAminoMsg;
                fromProtoMsg(message: _157.GenesisStateProtoMsg): _157.GenesisState;
                toProto(message: _157.GenesisState): Uint8Array;
                toProtoMsg(message: _157.GenesisState): _157.GenesisStateProtoMsg;
            };
            GenesisDenom: {
                typeUrl: string;
                encode(message: _157.GenesisDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.GenesisDenom;
                fromPartial(object: Partial<_157.GenesisDenom>): _157.GenesisDenom;
                fromAmino(object: _157.GenesisDenomAmino): _157.GenesisDenom;
                toAmino(message: _157.GenesisDenom): _157.GenesisDenomAmino;
                fromAminoMsg(object: _157.GenesisDenomAminoMsg): _157.GenesisDenom;
                toAminoMsg(message: _157.GenesisDenom): _157.GenesisDenomAminoMsg;
                fromProtoMsg(message: _157.GenesisDenomProtoMsg): _157.GenesisDenom;
                toProto(message: _157.GenesisDenom): Uint8Array;
                toProtoMsg(message: _157.GenesisDenom): _157.GenesisDenomProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                encode(message: _156.DenomAuthorityMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.DenomAuthorityMetadata;
                fromPartial(object: Partial<_156.DenomAuthorityMetadata>): _156.DenomAuthorityMetadata;
                fromAmino(object: _156.DenomAuthorityMetadataAmino): _156.DenomAuthorityMetadata;
                toAmino(message: _156.DenomAuthorityMetadata): _156.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _156.DenomAuthorityMetadataAminoMsg): _156.DenomAuthorityMetadata;
                toAminoMsg(message: _156.DenomAuthorityMetadata): _156.DenomAuthorityMetadataAminoMsg;
                fromProtoMsg(message: _156.DenomAuthorityMetadataProtoMsg): _156.DenomAuthorityMetadata;
                toProto(message: _156.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _156.DenomAuthorityMetadata): _156.DenomAuthorityMetadataProtoMsg;
            };
        };
    }
    namespace twap {
        const v1beta1: {
            QueryClientImpl: typeof _317.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _162.ParamsRequest): Promise<_162.ParamsResponse>;
                arithmeticTwap(request: _162.ArithmeticTwapRequest): Promise<_162.ArithmeticTwapResponse>;
                arithmeticTwapToNow(request: _162.ArithmeticTwapToNowRequest): Promise<_162.ArithmeticTwapToNowResponse>;
                geometricTwap(request: _162.GeometricTwapRequest): Promise<_162.GeometricTwapResponse>;
                geometricTwapToNow(request: _162.GeometricTwapToNowRequest): Promise<_162.GeometricTwapToNowResponse>;
            };
            LCDQueryClient: typeof _299.LCDQueryClient;
            TwapRecord: {
                typeUrl: string;
                encode(message: _163.TwapRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.TwapRecord;
                fromPartial(object: Partial<_163.TwapRecord>): _163.TwapRecord;
                fromAmino(object: _163.TwapRecordAmino): _163.TwapRecord;
                toAmino(message: _163.TwapRecord): _163.TwapRecordAmino;
                fromAminoMsg(object: _163.TwapRecordAminoMsg): _163.TwapRecord;
                toAminoMsg(message: _163.TwapRecord): _163.TwapRecordAminoMsg;
                fromProtoMsg(message: _163.TwapRecordProtoMsg): _163.TwapRecord;
                toProto(message: _163.TwapRecord): Uint8Array;
                toProtoMsg(message: _163.TwapRecord): _163.TwapRecordProtoMsg;
            };
            ArithmeticTwapRequest: {
                typeUrl: string;
                encode(message: _162.ArithmeticTwapRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.ArithmeticTwapRequest;
                fromPartial(object: Partial<_162.ArithmeticTwapRequest>): _162.ArithmeticTwapRequest;
                fromAmino(object: _162.ArithmeticTwapRequestAmino): _162.ArithmeticTwapRequest;
                toAmino(message: _162.ArithmeticTwapRequest): _162.ArithmeticTwapRequestAmino;
                fromAminoMsg(object: _162.ArithmeticTwapRequestAminoMsg): _162.ArithmeticTwapRequest;
                toAminoMsg(message: _162.ArithmeticTwapRequest): _162.ArithmeticTwapRequestAminoMsg;
                fromProtoMsg(message: _162.ArithmeticTwapRequestProtoMsg): _162.ArithmeticTwapRequest;
                toProto(message: _162.ArithmeticTwapRequest): Uint8Array;
                toProtoMsg(message: _162.ArithmeticTwapRequest): _162.ArithmeticTwapRequestProtoMsg;
            };
            ArithmeticTwapResponse: {
                typeUrl: string;
                encode(message: _162.ArithmeticTwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.ArithmeticTwapResponse;
                fromPartial(object: Partial<_162.ArithmeticTwapResponse>): _162.ArithmeticTwapResponse;
                fromAmino(object: _162.ArithmeticTwapResponseAmino): _162.ArithmeticTwapResponse;
                toAmino(message: _162.ArithmeticTwapResponse): _162.ArithmeticTwapResponseAmino;
                fromAminoMsg(object: _162.ArithmeticTwapResponseAminoMsg): _162.ArithmeticTwapResponse;
                toAminoMsg(message: _162.ArithmeticTwapResponse): _162.ArithmeticTwapResponseAminoMsg;
                fromProtoMsg(message: _162.ArithmeticTwapResponseProtoMsg): _162.ArithmeticTwapResponse;
                toProto(message: _162.ArithmeticTwapResponse): Uint8Array;
                toProtoMsg(message: _162.ArithmeticTwapResponse): _162.ArithmeticTwapResponseProtoMsg;
            };
            ArithmeticTwapToNowRequest: {
                typeUrl: string;
                encode(message: _162.ArithmeticTwapToNowRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.ArithmeticTwapToNowRequest;
                fromPartial(object: Partial<_162.ArithmeticTwapToNowRequest>): _162.ArithmeticTwapToNowRequest;
                fromAmino(object: _162.ArithmeticTwapToNowRequestAmino): _162.ArithmeticTwapToNowRequest;
                toAmino(message: _162.ArithmeticTwapToNowRequest): _162.ArithmeticTwapToNowRequestAmino;
                fromAminoMsg(object: _162.ArithmeticTwapToNowRequestAminoMsg): _162.ArithmeticTwapToNowRequest;
                toAminoMsg(message: _162.ArithmeticTwapToNowRequest): _162.ArithmeticTwapToNowRequestAminoMsg;
                fromProtoMsg(message: _162.ArithmeticTwapToNowRequestProtoMsg): _162.ArithmeticTwapToNowRequest;
                toProto(message: _162.ArithmeticTwapToNowRequest): Uint8Array;
                toProtoMsg(message: _162.ArithmeticTwapToNowRequest): _162.ArithmeticTwapToNowRequestProtoMsg;
            };
            ArithmeticTwapToNowResponse: {
                typeUrl: string;
                encode(message: _162.ArithmeticTwapToNowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.ArithmeticTwapToNowResponse;
                fromPartial(object: Partial<_162.ArithmeticTwapToNowResponse>): _162.ArithmeticTwapToNowResponse;
                fromAmino(object: _162.ArithmeticTwapToNowResponseAmino): _162.ArithmeticTwapToNowResponse;
                toAmino(message: _162.ArithmeticTwapToNowResponse): _162.ArithmeticTwapToNowResponseAmino;
                fromAminoMsg(object: _162.ArithmeticTwapToNowResponseAminoMsg): _162.ArithmeticTwapToNowResponse;
                toAminoMsg(message: _162.ArithmeticTwapToNowResponse): _162.ArithmeticTwapToNowResponseAminoMsg;
                fromProtoMsg(message: _162.ArithmeticTwapToNowResponseProtoMsg): _162.ArithmeticTwapToNowResponse;
                toProto(message: _162.ArithmeticTwapToNowResponse): Uint8Array;
                toProtoMsg(message: _162.ArithmeticTwapToNowResponse): _162.ArithmeticTwapToNowResponseProtoMsg;
            };
            GeometricTwapRequest: {
                typeUrl: string;
                encode(message: _162.GeometricTwapRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.GeometricTwapRequest;
                fromPartial(object: Partial<_162.GeometricTwapRequest>): _162.GeometricTwapRequest;
                fromAmino(object: _162.GeometricTwapRequestAmino): _162.GeometricTwapRequest;
                toAmino(message: _162.GeometricTwapRequest): _162.GeometricTwapRequestAmino;
                fromAminoMsg(object: _162.GeometricTwapRequestAminoMsg): _162.GeometricTwapRequest;
                toAminoMsg(message: _162.GeometricTwapRequest): _162.GeometricTwapRequestAminoMsg;
                fromProtoMsg(message: _162.GeometricTwapRequestProtoMsg): _162.GeometricTwapRequest;
                toProto(message: _162.GeometricTwapRequest): Uint8Array;
                toProtoMsg(message: _162.GeometricTwapRequest): _162.GeometricTwapRequestProtoMsg;
            };
            GeometricTwapResponse: {
                typeUrl: string;
                encode(message: _162.GeometricTwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.GeometricTwapResponse;
                fromPartial(object: Partial<_162.GeometricTwapResponse>): _162.GeometricTwapResponse;
                fromAmino(object: _162.GeometricTwapResponseAmino): _162.GeometricTwapResponse;
                toAmino(message: _162.GeometricTwapResponse): _162.GeometricTwapResponseAmino;
                fromAminoMsg(object: _162.GeometricTwapResponseAminoMsg): _162.GeometricTwapResponse;
                toAminoMsg(message: _162.GeometricTwapResponse): _162.GeometricTwapResponseAminoMsg;
                fromProtoMsg(message: _162.GeometricTwapResponseProtoMsg): _162.GeometricTwapResponse;
                toProto(message: _162.GeometricTwapResponse): Uint8Array;
                toProtoMsg(message: _162.GeometricTwapResponse): _162.GeometricTwapResponseProtoMsg;
            };
            GeometricTwapToNowRequest: {
                typeUrl: string;
                encode(message: _162.GeometricTwapToNowRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.GeometricTwapToNowRequest;
                fromPartial(object: Partial<_162.GeometricTwapToNowRequest>): _162.GeometricTwapToNowRequest;
                fromAmino(object: _162.GeometricTwapToNowRequestAmino): _162.GeometricTwapToNowRequest;
                toAmino(message: _162.GeometricTwapToNowRequest): _162.GeometricTwapToNowRequestAmino;
                fromAminoMsg(object: _162.GeometricTwapToNowRequestAminoMsg): _162.GeometricTwapToNowRequest;
                toAminoMsg(message: _162.GeometricTwapToNowRequest): _162.GeometricTwapToNowRequestAminoMsg;
                fromProtoMsg(message: _162.GeometricTwapToNowRequestProtoMsg): _162.GeometricTwapToNowRequest;
                toProto(message: _162.GeometricTwapToNowRequest): Uint8Array;
                toProtoMsg(message: _162.GeometricTwapToNowRequest): _162.GeometricTwapToNowRequestProtoMsg;
            };
            GeometricTwapToNowResponse: {
                typeUrl: string;
                encode(message: _162.GeometricTwapToNowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.GeometricTwapToNowResponse;
                fromPartial(object: Partial<_162.GeometricTwapToNowResponse>): _162.GeometricTwapToNowResponse;
                fromAmino(object: _162.GeometricTwapToNowResponseAmino): _162.GeometricTwapToNowResponse;
                toAmino(message: _162.GeometricTwapToNowResponse): _162.GeometricTwapToNowResponseAmino;
                fromAminoMsg(object: _162.GeometricTwapToNowResponseAminoMsg): _162.GeometricTwapToNowResponse;
                toAminoMsg(message: _162.GeometricTwapToNowResponse): _162.GeometricTwapToNowResponseAminoMsg;
                fromProtoMsg(message: _162.GeometricTwapToNowResponseProtoMsg): _162.GeometricTwapToNowResponse;
                toProto(message: _162.GeometricTwapToNowResponse): Uint8Array;
                toProtoMsg(message: _162.GeometricTwapToNowResponse): _162.GeometricTwapToNowResponseProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _162.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.ParamsRequest;
                fromPartial(_: Partial<_162.ParamsRequest>): _162.ParamsRequest;
                fromAmino(_: _162.ParamsRequestAmino): _162.ParamsRequest;
                toAmino(_: _162.ParamsRequest): _162.ParamsRequestAmino;
                fromAminoMsg(object: _162.ParamsRequestAminoMsg): _162.ParamsRequest;
                toAminoMsg(message: _162.ParamsRequest): _162.ParamsRequestAminoMsg;
                fromProtoMsg(message: _162.ParamsRequestProtoMsg): _162.ParamsRequest;
                toProto(message: _162.ParamsRequest): Uint8Array;
                toProtoMsg(message: _162.ParamsRequest): _162.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _162.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.ParamsResponse;
                fromPartial(object: Partial<_162.ParamsResponse>): _162.ParamsResponse;
                fromAmino(object: _162.ParamsResponseAmino): _162.ParamsResponse;
                toAmino(message: _162.ParamsResponse): _162.ParamsResponseAmino;
                fromAminoMsg(object: _162.ParamsResponseAminoMsg): _162.ParamsResponse;
                toAminoMsg(message: _162.ParamsResponse): _162.ParamsResponseAminoMsg;
                fromProtoMsg(message: _162.ParamsResponseProtoMsg): _162.ParamsResponse;
                toProto(message: _162.ParamsResponse): Uint8Array;
                toProtoMsg(message: _162.ParamsResponse): _162.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _161.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.Params;
                fromPartial(object: Partial<_161.Params>): _161.Params;
                fromAmino(object: _161.ParamsAmino): _161.Params;
                toAmino(message: _161.Params): _161.ParamsAmino;
                fromAminoMsg(object: _161.ParamsAminoMsg): _161.Params;
                toAminoMsg(message: _161.Params): _161.ParamsAminoMsg;
                fromProtoMsg(message: _161.ParamsProtoMsg): _161.Params;
                toProto(message: _161.Params): Uint8Array;
                toProtoMsg(message: _161.Params): _161.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _161.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.GenesisState;
                fromPartial(object: Partial<_161.GenesisState>): _161.GenesisState;
                fromAmino(object: _161.GenesisStateAmino): _161.GenesisState;
                toAmino(message: _161.GenesisState): _161.GenesisStateAmino;
                fromAminoMsg(object: _161.GenesisStateAminoMsg): _161.GenesisState;
                toAminoMsg(message: _161.GenesisState): _161.GenesisStateAminoMsg;
                fromProtoMsg(message: _161.GenesisStateProtoMsg): _161.GenesisState;
                toProto(message: _161.GenesisState): Uint8Array;
                toProtoMsg(message: _161.GenesisState): _161.GenesisStateProtoMsg;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryClientImpl: typeof _318.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeTokens(request?: _167.QueryFeeTokensRequest): Promise<_167.QueryFeeTokensResponse>;
                denomSpotPrice(request: _167.QueryDenomSpotPriceRequest): Promise<_167.QueryDenomSpotPriceResponse>;
                denomPoolId(request: _167.QueryDenomPoolIdRequest): Promise<_167.QueryDenomPoolIdResponse>;
                baseDenom(request?: _167.QueryBaseDenomRequest): Promise<_167.QueryBaseDenomResponse>;
            };
            LCDQueryClient: typeof _300.LCDQueryClient;
            QueryFeeTokensRequest: {
                typeUrl: string;
                encode(_: _167.QueryFeeTokensRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryFeeTokensRequest;
                fromPartial(_: Partial<_167.QueryFeeTokensRequest>): _167.QueryFeeTokensRequest;
                fromAmino(_: _167.QueryFeeTokensRequestAmino): _167.QueryFeeTokensRequest;
                toAmino(_: _167.QueryFeeTokensRequest): _167.QueryFeeTokensRequestAmino;
                fromAminoMsg(object: _167.QueryFeeTokensRequestAminoMsg): _167.QueryFeeTokensRequest;
                toAminoMsg(message: _167.QueryFeeTokensRequest): _167.QueryFeeTokensRequestAminoMsg;
                fromProtoMsg(message: _167.QueryFeeTokensRequestProtoMsg): _167.QueryFeeTokensRequest;
                toProto(message: _167.QueryFeeTokensRequest): Uint8Array;
                toProtoMsg(message: _167.QueryFeeTokensRequest): _167.QueryFeeTokensRequestProtoMsg;
            };
            QueryFeeTokensResponse: {
                typeUrl: string;
                encode(message: _167.QueryFeeTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryFeeTokensResponse;
                fromPartial(object: Partial<_167.QueryFeeTokensResponse>): _167.QueryFeeTokensResponse;
                fromAmino(object: _167.QueryFeeTokensResponseAmino): _167.QueryFeeTokensResponse;
                toAmino(message: _167.QueryFeeTokensResponse): _167.QueryFeeTokensResponseAmino;
                fromAminoMsg(object: _167.QueryFeeTokensResponseAminoMsg): _167.QueryFeeTokensResponse;
                toAminoMsg(message: _167.QueryFeeTokensResponse): _167.QueryFeeTokensResponseAminoMsg;
                fromProtoMsg(message: _167.QueryFeeTokensResponseProtoMsg): _167.QueryFeeTokensResponse;
                toProto(message: _167.QueryFeeTokensResponse): Uint8Array;
                toProtoMsg(message: _167.QueryFeeTokensResponse): _167.QueryFeeTokensResponseProtoMsg;
            };
            QueryDenomSpotPriceRequest: {
                typeUrl: string;
                encode(message: _167.QueryDenomSpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryDenomSpotPriceRequest;
                fromPartial(object: Partial<_167.QueryDenomSpotPriceRequest>): _167.QueryDenomSpotPriceRequest;
                fromAmino(object: _167.QueryDenomSpotPriceRequestAmino): _167.QueryDenomSpotPriceRequest;
                toAmino(message: _167.QueryDenomSpotPriceRequest): _167.QueryDenomSpotPriceRequestAmino;
                fromAminoMsg(object: _167.QueryDenomSpotPriceRequestAminoMsg): _167.QueryDenomSpotPriceRequest;
                toAminoMsg(message: _167.QueryDenomSpotPriceRequest): _167.QueryDenomSpotPriceRequestAminoMsg;
                fromProtoMsg(message: _167.QueryDenomSpotPriceRequestProtoMsg): _167.QueryDenomSpotPriceRequest;
                toProto(message: _167.QueryDenomSpotPriceRequest): Uint8Array;
                toProtoMsg(message: _167.QueryDenomSpotPriceRequest): _167.QueryDenomSpotPriceRequestProtoMsg;
            };
            QueryDenomSpotPriceResponse: {
                typeUrl: string;
                encode(message: _167.QueryDenomSpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryDenomSpotPriceResponse;
                fromPartial(object: Partial<_167.QueryDenomSpotPriceResponse>): _167.QueryDenomSpotPriceResponse;
                fromAmino(object: _167.QueryDenomSpotPriceResponseAmino): _167.QueryDenomSpotPriceResponse;
                toAmino(message: _167.QueryDenomSpotPriceResponse): _167.QueryDenomSpotPriceResponseAmino;
                fromAminoMsg(object: _167.QueryDenomSpotPriceResponseAminoMsg): _167.QueryDenomSpotPriceResponse;
                toAminoMsg(message: _167.QueryDenomSpotPriceResponse): _167.QueryDenomSpotPriceResponseAminoMsg;
                fromProtoMsg(message: _167.QueryDenomSpotPriceResponseProtoMsg): _167.QueryDenomSpotPriceResponse;
                toProto(message: _167.QueryDenomSpotPriceResponse): Uint8Array;
                toProtoMsg(message: _167.QueryDenomSpotPriceResponse): _167.QueryDenomSpotPriceResponseProtoMsg;
            };
            QueryDenomPoolIdRequest: {
                typeUrl: string;
                encode(message: _167.QueryDenomPoolIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryDenomPoolIdRequest;
                fromPartial(object: Partial<_167.QueryDenomPoolIdRequest>): _167.QueryDenomPoolIdRequest;
                fromAmino(object: _167.QueryDenomPoolIdRequestAmino): _167.QueryDenomPoolIdRequest;
                toAmino(message: _167.QueryDenomPoolIdRequest): _167.QueryDenomPoolIdRequestAmino;
                fromAminoMsg(object: _167.QueryDenomPoolIdRequestAminoMsg): _167.QueryDenomPoolIdRequest;
                toAminoMsg(message: _167.QueryDenomPoolIdRequest): _167.QueryDenomPoolIdRequestAminoMsg;
                fromProtoMsg(message: _167.QueryDenomPoolIdRequestProtoMsg): _167.QueryDenomPoolIdRequest;
                toProto(message: _167.QueryDenomPoolIdRequest): Uint8Array;
                toProtoMsg(message: _167.QueryDenomPoolIdRequest): _167.QueryDenomPoolIdRequestProtoMsg;
            };
            QueryDenomPoolIdResponse: {
                typeUrl: string;
                encode(message: _167.QueryDenomPoolIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryDenomPoolIdResponse;
                fromPartial(object: Partial<_167.QueryDenomPoolIdResponse>): _167.QueryDenomPoolIdResponse;
                fromAmino(object: _167.QueryDenomPoolIdResponseAmino): _167.QueryDenomPoolIdResponse;
                toAmino(message: _167.QueryDenomPoolIdResponse): _167.QueryDenomPoolIdResponseAmino;
                fromAminoMsg(object: _167.QueryDenomPoolIdResponseAminoMsg): _167.QueryDenomPoolIdResponse;
                toAminoMsg(message: _167.QueryDenomPoolIdResponse): _167.QueryDenomPoolIdResponseAminoMsg;
                fromProtoMsg(message: _167.QueryDenomPoolIdResponseProtoMsg): _167.QueryDenomPoolIdResponse;
                toProto(message: _167.QueryDenomPoolIdResponse): Uint8Array;
                toProtoMsg(message: _167.QueryDenomPoolIdResponse): _167.QueryDenomPoolIdResponseProtoMsg;
            };
            QueryBaseDenomRequest: {
                typeUrl: string;
                encode(_: _167.QueryBaseDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryBaseDenomRequest;
                fromPartial(_: Partial<_167.QueryBaseDenomRequest>): _167.QueryBaseDenomRequest;
                fromAmino(_: _167.QueryBaseDenomRequestAmino): _167.QueryBaseDenomRequest;
                toAmino(_: _167.QueryBaseDenomRequest): _167.QueryBaseDenomRequestAmino;
                fromAminoMsg(object: _167.QueryBaseDenomRequestAminoMsg): _167.QueryBaseDenomRequest;
                toAminoMsg(message: _167.QueryBaseDenomRequest): _167.QueryBaseDenomRequestAminoMsg;
                fromProtoMsg(message: _167.QueryBaseDenomRequestProtoMsg): _167.QueryBaseDenomRequest;
                toProto(message: _167.QueryBaseDenomRequest): Uint8Array;
                toProtoMsg(message: _167.QueryBaseDenomRequest): _167.QueryBaseDenomRequestProtoMsg;
            };
            QueryBaseDenomResponse: {
                typeUrl: string;
                encode(message: _167.QueryBaseDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryBaseDenomResponse;
                fromPartial(object: Partial<_167.QueryBaseDenomResponse>): _167.QueryBaseDenomResponse;
                fromAmino(object: _167.QueryBaseDenomResponseAmino): _167.QueryBaseDenomResponse;
                toAmino(message: _167.QueryBaseDenomResponse): _167.QueryBaseDenomResponseAmino;
                fromAminoMsg(object: _167.QueryBaseDenomResponseAminoMsg): _167.QueryBaseDenomResponse;
                toAminoMsg(message: _167.QueryBaseDenomResponse): _167.QueryBaseDenomResponseAminoMsg;
                fromProtoMsg(message: _167.QueryBaseDenomResponseProtoMsg): _167.QueryBaseDenomResponse;
                toProto(message: _167.QueryBaseDenomResponse): Uint8Array;
                toProtoMsg(message: _167.QueryBaseDenomResponse): _167.QueryBaseDenomResponseProtoMsg;
            };
            UpdateFeeTokenProposal: {
                typeUrl: string;
                encode(message: _166.UpdateFeeTokenProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.UpdateFeeTokenProposal;
                fromPartial(object: Partial<_166.UpdateFeeTokenProposal>): _166.UpdateFeeTokenProposal;
                fromAmino(object: _166.UpdateFeeTokenProposalAmino): _166.UpdateFeeTokenProposal;
                toAmino(message: _166.UpdateFeeTokenProposal): _166.UpdateFeeTokenProposalAmino;
                fromAminoMsg(object: _166.UpdateFeeTokenProposalAminoMsg): _166.UpdateFeeTokenProposal;
                toAminoMsg(message: _166.UpdateFeeTokenProposal): _166.UpdateFeeTokenProposalAminoMsg;
                fromProtoMsg(message: _166.UpdateFeeTokenProposalProtoMsg): _166.UpdateFeeTokenProposal;
                toProto(message: _166.UpdateFeeTokenProposal): Uint8Array;
                toProtoMsg(message: _166.UpdateFeeTokenProposal): _166.UpdateFeeTokenProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _165.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.GenesisState;
                fromPartial(object: Partial<_165.GenesisState>): _165.GenesisState;
                fromAmino(object: _165.GenesisStateAmino): _165.GenesisState;
                toAmino(message: _165.GenesisState): _165.GenesisStateAmino;
                fromAminoMsg(object: _165.GenesisStateAminoMsg): _165.GenesisState;
                toAminoMsg(message: _165.GenesisState): _165.GenesisStateAminoMsg;
                fromProtoMsg(message: _165.GenesisStateProtoMsg): _165.GenesisState;
                toProto(message: _165.GenesisState): Uint8Array;
                toProtoMsg(message: _165.GenesisState): _165.GenesisStateProtoMsg;
            };
            FeeToken: {
                typeUrl: string;
                encode(message: _164.FeeToken, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.FeeToken;
                fromPartial(object: Partial<_164.FeeToken>): _164.FeeToken;
                fromAmino(object: _164.FeeTokenAmino): _164.FeeToken;
                toAmino(message: _164.FeeToken): _164.FeeTokenAmino;
                fromAminoMsg(object: _164.FeeTokenAminoMsg): _164.FeeToken;
                toAminoMsg(message: _164.FeeToken): _164.FeeTokenAminoMsg;
                fromProtoMsg(message: _164.FeeTokenProtoMsg): _164.FeeToken;
                toProto(message: _164.FeeToken): Uint8Array;
                toProtoMsg(message: _164.FeeToken): _164.FeeTokenProtoMsg;
            };
        };
    }
    namespace valsetpref {
        const v1beta1: {
            MsgClientImpl: typeof _331.MsgClientImpl;
            QueryClientImpl: typeof _319.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                userValidatorPreferences(request: _168.UserValidatorPreferencesRequest): Promise<_168.UserValidatorPreferencesResponse>;
            };
            LCDQueryClient: typeof _301.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setValidatorSetPreference(value: _170.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateToValidatorSet(value: _170.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegateFromValidatorSet(value: _170.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redelegateValidatorSet(value: _170.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegationRewards(value: _170.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateBondedTokens(value: _170.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setValidatorSetPreference(value: _170.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _170.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _170.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _170.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _170.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _170.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _170.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _170.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _170.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _170.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: _170.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: _170.MsgDelegateBondedTokens;
                    };
                };
                fromPartial: {
                    setValidatorSetPreference(value: _170.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _170.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _170.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _170.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _170.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _170.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _170.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _170.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _170.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _170.MsgWithdrawDelegationRewards;
                    };
                    delegateBondedTokens(value: _170.MsgDelegateBondedTokens): {
                        typeUrl: string;
                        value: _170.MsgDelegateBondedTokens;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
                    aminoType: string;
                    toAmino: (message: _170.MsgSetValidatorSetPreference) => _170.MsgSetValidatorSetPreferenceAmino;
                    fromAmino: (object: _170.MsgSetValidatorSetPreferenceAmino) => _170.MsgSetValidatorSetPreference;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _170.MsgDelegateToValidatorSet) => _170.MsgDelegateToValidatorSetAmino;
                    fromAmino: (object: _170.MsgDelegateToValidatorSetAmino) => _170.MsgDelegateToValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _170.MsgUndelegateFromValidatorSet) => _170.MsgUndelegateFromValidatorSetAmino;
                    fromAmino: (object: _170.MsgUndelegateFromValidatorSetAmino) => _170.MsgUndelegateFromValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _170.MsgRedelegateValidatorSet) => _170.MsgRedelegateValidatorSetAmino;
                    fromAmino: (object: _170.MsgRedelegateValidatorSetAmino) => _170.MsgRedelegateValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
                    aminoType: string;
                    toAmino: (message: _170.MsgWithdrawDelegationRewards) => _170.MsgWithdrawDelegationRewardsAmino;
                    fromAmino: (object: _170.MsgWithdrawDelegationRewardsAmino) => _170.MsgWithdrawDelegationRewards;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens": {
                    aminoType: string;
                    toAmino: (message: _170.MsgDelegateBondedTokens) => _170.MsgDelegateBondedTokensAmino;
                    fromAmino: (object: _170.MsgDelegateBondedTokensAmino) => _170.MsgDelegateBondedTokens;
                };
            };
            MsgSetValidatorSetPreference: {
                typeUrl: string;
                encode(message: _170.MsgSetValidatorSetPreference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgSetValidatorSetPreference;
                fromPartial(object: Partial<_170.MsgSetValidatorSetPreference>): _170.MsgSetValidatorSetPreference;
                fromAmino(object: _170.MsgSetValidatorSetPreferenceAmino): _170.MsgSetValidatorSetPreference;
                toAmino(message: _170.MsgSetValidatorSetPreference): _170.MsgSetValidatorSetPreferenceAmino;
                fromAminoMsg(object: _170.MsgSetValidatorSetPreferenceAminoMsg): _170.MsgSetValidatorSetPreference;
                toAminoMsg(message: _170.MsgSetValidatorSetPreference): _170.MsgSetValidatorSetPreferenceAminoMsg;
                fromProtoMsg(message: _170.MsgSetValidatorSetPreferenceProtoMsg): _170.MsgSetValidatorSetPreference;
                toProto(message: _170.MsgSetValidatorSetPreference): Uint8Array;
                toProtoMsg(message: _170.MsgSetValidatorSetPreference): _170.MsgSetValidatorSetPreferenceProtoMsg;
            };
            MsgSetValidatorSetPreferenceResponse: {
                typeUrl: string;
                encode(_: _170.MsgSetValidatorSetPreferenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgSetValidatorSetPreferenceResponse;
                fromPartial(_: Partial<_170.MsgSetValidatorSetPreferenceResponse>): _170.MsgSetValidatorSetPreferenceResponse;
                fromAmino(_: _170.MsgSetValidatorSetPreferenceResponseAmino): _170.MsgSetValidatorSetPreferenceResponse;
                toAmino(_: _170.MsgSetValidatorSetPreferenceResponse): _170.MsgSetValidatorSetPreferenceResponseAmino;
                fromAminoMsg(object: _170.MsgSetValidatorSetPreferenceResponseAminoMsg): _170.MsgSetValidatorSetPreferenceResponse;
                toAminoMsg(message: _170.MsgSetValidatorSetPreferenceResponse): _170.MsgSetValidatorSetPreferenceResponseAminoMsg;
                fromProtoMsg(message: _170.MsgSetValidatorSetPreferenceResponseProtoMsg): _170.MsgSetValidatorSetPreferenceResponse;
                toProto(message: _170.MsgSetValidatorSetPreferenceResponse): Uint8Array;
                toProtoMsg(message: _170.MsgSetValidatorSetPreferenceResponse): _170.MsgSetValidatorSetPreferenceResponseProtoMsg;
            };
            MsgDelegateToValidatorSet: {
                typeUrl: string;
                encode(message: _170.MsgDelegateToValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgDelegateToValidatorSet;
                fromPartial(object: Partial<_170.MsgDelegateToValidatorSet>): _170.MsgDelegateToValidatorSet;
                fromAmino(object: _170.MsgDelegateToValidatorSetAmino): _170.MsgDelegateToValidatorSet;
                toAmino(message: _170.MsgDelegateToValidatorSet): _170.MsgDelegateToValidatorSetAmino;
                fromAminoMsg(object: _170.MsgDelegateToValidatorSetAminoMsg): _170.MsgDelegateToValidatorSet;
                toAminoMsg(message: _170.MsgDelegateToValidatorSet): _170.MsgDelegateToValidatorSetAminoMsg;
                fromProtoMsg(message: _170.MsgDelegateToValidatorSetProtoMsg): _170.MsgDelegateToValidatorSet;
                toProto(message: _170.MsgDelegateToValidatorSet): Uint8Array;
                toProtoMsg(message: _170.MsgDelegateToValidatorSet): _170.MsgDelegateToValidatorSetProtoMsg;
            };
            MsgDelegateToValidatorSetResponse: {
                typeUrl: string;
                encode(_: _170.MsgDelegateToValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgDelegateToValidatorSetResponse;
                fromPartial(_: Partial<_170.MsgDelegateToValidatorSetResponse>): _170.MsgDelegateToValidatorSetResponse;
                fromAmino(_: _170.MsgDelegateToValidatorSetResponseAmino): _170.MsgDelegateToValidatorSetResponse;
                toAmino(_: _170.MsgDelegateToValidatorSetResponse): _170.MsgDelegateToValidatorSetResponseAmino;
                fromAminoMsg(object: _170.MsgDelegateToValidatorSetResponseAminoMsg): _170.MsgDelegateToValidatorSetResponse;
                toAminoMsg(message: _170.MsgDelegateToValidatorSetResponse): _170.MsgDelegateToValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _170.MsgDelegateToValidatorSetResponseProtoMsg): _170.MsgDelegateToValidatorSetResponse;
                toProto(message: _170.MsgDelegateToValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _170.MsgDelegateToValidatorSetResponse): _170.MsgDelegateToValidatorSetResponseProtoMsg;
            };
            MsgUndelegateFromValidatorSet: {
                typeUrl: string;
                encode(message: _170.MsgUndelegateFromValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgUndelegateFromValidatorSet;
                fromPartial(object: Partial<_170.MsgUndelegateFromValidatorSet>): _170.MsgUndelegateFromValidatorSet;
                fromAmino(object: _170.MsgUndelegateFromValidatorSetAmino): _170.MsgUndelegateFromValidatorSet;
                toAmino(message: _170.MsgUndelegateFromValidatorSet): _170.MsgUndelegateFromValidatorSetAmino;
                fromAminoMsg(object: _170.MsgUndelegateFromValidatorSetAminoMsg): _170.MsgUndelegateFromValidatorSet;
                toAminoMsg(message: _170.MsgUndelegateFromValidatorSet): _170.MsgUndelegateFromValidatorSetAminoMsg;
                fromProtoMsg(message: _170.MsgUndelegateFromValidatorSetProtoMsg): _170.MsgUndelegateFromValidatorSet;
                toProto(message: _170.MsgUndelegateFromValidatorSet): Uint8Array;
                toProtoMsg(message: _170.MsgUndelegateFromValidatorSet): _170.MsgUndelegateFromValidatorSetProtoMsg;
            };
            MsgUndelegateFromValidatorSetResponse: {
                typeUrl: string;
                encode(_: _170.MsgUndelegateFromValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgUndelegateFromValidatorSetResponse;
                fromPartial(_: Partial<_170.MsgUndelegateFromValidatorSetResponse>): _170.MsgUndelegateFromValidatorSetResponse;
                fromAmino(_: _170.MsgUndelegateFromValidatorSetResponseAmino): _170.MsgUndelegateFromValidatorSetResponse;
                toAmino(_: _170.MsgUndelegateFromValidatorSetResponse): _170.MsgUndelegateFromValidatorSetResponseAmino;
                fromAminoMsg(object: _170.MsgUndelegateFromValidatorSetResponseAminoMsg): _170.MsgUndelegateFromValidatorSetResponse;
                toAminoMsg(message: _170.MsgUndelegateFromValidatorSetResponse): _170.MsgUndelegateFromValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _170.MsgUndelegateFromValidatorSetResponseProtoMsg): _170.MsgUndelegateFromValidatorSetResponse;
                toProto(message: _170.MsgUndelegateFromValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _170.MsgUndelegateFromValidatorSetResponse): _170.MsgUndelegateFromValidatorSetResponseProtoMsg;
            };
            MsgRedelegateValidatorSet: {
                typeUrl: string;
                encode(message: _170.MsgRedelegateValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgRedelegateValidatorSet;
                fromPartial(object: Partial<_170.MsgRedelegateValidatorSet>): _170.MsgRedelegateValidatorSet;
                fromAmino(object: _170.MsgRedelegateValidatorSetAmino): _170.MsgRedelegateValidatorSet;
                toAmino(message: _170.MsgRedelegateValidatorSet): _170.MsgRedelegateValidatorSetAmino;
                fromAminoMsg(object: _170.MsgRedelegateValidatorSetAminoMsg): _170.MsgRedelegateValidatorSet;
                toAminoMsg(message: _170.MsgRedelegateValidatorSet): _170.MsgRedelegateValidatorSetAminoMsg;
                fromProtoMsg(message: _170.MsgRedelegateValidatorSetProtoMsg): _170.MsgRedelegateValidatorSet;
                toProto(message: _170.MsgRedelegateValidatorSet): Uint8Array;
                toProtoMsg(message: _170.MsgRedelegateValidatorSet): _170.MsgRedelegateValidatorSetProtoMsg;
            };
            MsgRedelegateValidatorSetResponse: {
                typeUrl: string;
                encode(_: _170.MsgRedelegateValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgRedelegateValidatorSetResponse;
                fromPartial(_: Partial<_170.MsgRedelegateValidatorSetResponse>): _170.MsgRedelegateValidatorSetResponse;
                fromAmino(_: _170.MsgRedelegateValidatorSetResponseAmino): _170.MsgRedelegateValidatorSetResponse;
                toAmino(_: _170.MsgRedelegateValidatorSetResponse): _170.MsgRedelegateValidatorSetResponseAmino;
                fromAminoMsg(object: _170.MsgRedelegateValidatorSetResponseAminoMsg): _170.MsgRedelegateValidatorSetResponse;
                toAminoMsg(message: _170.MsgRedelegateValidatorSetResponse): _170.MsgRedelegateValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _170.MsgRedelegateValidatorSetResponseProtoMsg): _170.MsgRedelegateValidatorSetResponse;
                toProto(message: _170.MsgRedelegateValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _170.MsgRedelegateValidatorSetResponse): _170.MsgRedelegateValidatorSetResponseProtoMsg;
            };
            MsgWithdrawDelegationRewards: {
                typeUrl: string;
                encode(message: _170.MsgWithdrawDelegationRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgWithdrawDelegationRewards;
                fromPartial(object: Partial<_170.MsgWithdrawDelegationRewards>): _170.MsgWithdrawDelegationRewards;
                fromAmino(object: _170.MsgWithdrawDelegationRewardsAmino): _170.MsgWithdrawDelegationRewards;
                toAmino(message: _170.MsgWithdrawDelegationRewards): _170.MsgWithdrawDelegationRewardsAmino;
                fromAminoMsg(object: _170.MsgWithdrawDelegationRewardsAminoMsg): _170.MsgWithdrawDelegationRewards;
                toAminoMsg(message: _170.MsgWithdrawDelegationRewards): _170.MsgWithdrawDelegationRewardsAminoMsg;
                fromProtoMsg(message: _170.MsgWithdrawDelegationRewardsProtoMsg): _170.MsgWithdrawDelegationRewards;
                toProto(message: _170.MsgWithdrawDelegationRewards): Uint8Array;
                toProtoMsg(message: _170.MsgWithdrawDelegationRewards): _170.MsgWithdrawDelegationRewardsProtoMsg;
            };
            MsgWithdrawDelegationRewardsResponse: {
                typeUrl: string;
                encode(_: _170.MsgWithdrawDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgWithdrawDelegationRewardsResponse;
                fromPartial(_: Partial<_170.MsgWithdrawDelegationRewardsResponse>): _170.MsgWithdrawDelegationRewardsResponse;
                fromAmino(_: _170.MsgWithdrawDelegationRewardsResponseAmino): _170.MsgWithdrawDelegationRewardsResponse;
                toAmino(_: _170.MsgWithdrawDelegationRewardsResponse): _170.MsgWithdrawDelegationRewardsResponseAmino;
                fromAminoMsg(object: _170.MsgWithdrawDelegationRewardsResponseAminoMsg): _170.MsgWithdrawDelegationRewardsResponse;
                toAminoMsg(message: _170.MsgWithdrawDelegationRewardsResponse): _170.MsgWithdrawDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _170.MsgWithdrawDelegationRewardsResponseProtoMsg): _170.MsgWithdrawDelegationRewardsResponse;
                toProto(message: _170.MsgWithdrawDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _170.MsgWithdrawDelegationRewardsResponse): _170.MsgWithdrawDelegationRewardsResponseProtoMsg;
            };
            MsgDelegateBondedTokens: {
                typeUrl: string;
                encode(message: _170.MsgDelegateBondedTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgDelegateBondedTokens;
                fromPartial(object: Partial<_170.MsgDelegateBondedTokens>): _170.MsgDelegateBondedTokens;
                fromAmino(object: _170.MsgDelegateBondedTokensAmino): _170.MsgDelegateBondedTokens;
                toAmino(message: _170.MsgDelegateBondedTokens): _170.MsgDelegateBondedTokensAmino;
                fromAminoMsg(object: _170.MsgDelegateBondedTokensAminoMsg): _170.MsgDelegateBondedTokens;
                toAminoMsg(message: _170.MsgDelegateBondedTokens): _170.MsgDelegateBondedTokensAminoMsg;
                fromProtoMsg(message: _170.MsgDelegateBondedTokensProtoMsg): _170.MsgDelegateBondedTokens;
                toProto(message: _170.MsgDelegateBondedTokens): Uint8Array;
                toProtoMsg(message: _170.MsgDelegateBondedTokens): _170.MsgDelegateBondedTokensProtoMsg;
            };
            MsgDelegateBondedTokensResponse: {
                typeUrl: string;
                encode(_: _170.MsgDelegateBondedTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgDelegateBondedTokensResponse;
                fromPartial(_: Partial<_170.MsgDelegateBondedTokensResponse>): _170.MsgDelegateBondedTokensResponse;
                fromAmino(_: _170.MsgDelegateBondedTokensResponseAmino): _170.MsgDelegateBondedTokensResponse;
                toAmino(_: _170.MsgDelegateBondedTokensResponse): _170.MsgDelegateBondedTokensResponseAmino;
                fromAminoMsg(object: _170.MsgDelegateBondedTokensResponseAminoMsg): _170.MsgDelegateBondedTokensResponse;
                toAminoMsg(message: _170.MsgDelegateBondedTokensResponse): _170.MsgDelegateBondedTokensResponseAminoMsg;
                fromProtoMsg(message: _170.MsgDelegateBondedTokensResponseProtoMsg): _170.MsgDelegateBondedTokensResponse;
                toProto(message: _170.MsgDelegateBondedTokensResponse): Uint8Array;
                toProtoMsg(message: _170.MsgDelegateBondedTokensResponse): _170.MsgDelegateBondedTokensResponseProtoMsg;
            };
            ValidatorPreference: {
                typeUrl: string;
                encode(message: _169.ValidatorPreference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.ValidatorPreference;
                fromPartial(object: Partial<_169.ValidatorPreference>): _169.ValidatorPreference;
                fromAmino(object: _169.ValidatorPreferenceAmino): _169.ValidatorPreference;
                toAmino(message: _169.ValidatorPreference): _169.ValidatorPreferenceAmino;
                fromAminoMsg(object: _169.ValidatorPreferenceAminoMsg): _169.ValidatorPreference;
                toAminoMsg(message: _169.ValidatorPreference): _169.ValidatorPreferenceAminoMsg;
                fromProtoMsg(message: _169.ValidatorPreferenceProtoMsg): _169.ValidatorPreference;
                toProto(message: _169.ValidatorPreference): Uint8Array;
                toProtoMsg(message: _169.ValidatorPreference): _169.ValidatorPreferenceProtoMsg;
            };
            ValidatorSetPreferences: {
                typeUrl: string;
                encode(message: _169.ValidatorSetPreferences, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.ValidatorSetPreferences;
                fromPartial(object: Partial<_169.ValidatorSetPreferences>): _169.ValidatorSetPreferences;
                fromAmino(object: _169.ValidatorSetPreferencesAmino): _169.ValidatorSetPreferences;
                toAmino(message: _169.ValidatorSetPreferences): _169.ValidatorSetPreferencesAmino;
                fromAminoMsg(object: _169.ValidatorSetPreferencesAminoMsg): _169.ValidatorSetPreferences;
                toAminoMsg(message: _169.ValidatorSetPreferences): _169.ValidatorSetPreferencesAminoMsg;
                fromProtoMsg(message: _169.ValidatorSetPreferencesProtoMsg): _169.ValidatorSetPreferences;
                toProto(message: _169.ValidatorSetPreferences): Uint8Array;
                toProtoMsg(message: _169.ValidatorSetPreferences): _169.ValidatorSetPreferencesProtoMsg;
            };
            UserValidatorPreferencesRequest: {
                typeUrl: string;
                encode(message: _168.UserValidatorPreferencesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.UserValidatorPreferencesRequest;
                fromPartial(object: Partial<_168.UserValidatorPreferencesRequest>): _168.UserValidatorPreferencesRequest;
                fromAmino(object: _168.UserValidatorPreferencesRequestAmino): _168.UserValidatorPreferencesRequest;
                toAmino(message: _168.UserValidatorPreferencesRequest): _168.UserValidatorPreferencesRequestAmino;
                fromAminoMsg(object: _168.UserValidatorPreferencesRequestAminoMsg): _168.UserValidatorPreferencesRequest;
                toAminoMsg(message: _168.UserValidatorPreferencesRequest): _168.UserValidatorPreferencesRequestAminoMsg;
                fromProtoMsg(message: _168.UserValidatorPreferencesRequestProtoMsg): _168.UserValidatorPreferencesRequest;
                toProto(message: _168.UserValidatorPreferencesRequest): Uint8Array;
                toProtoMsg(message: _168.UserValidatorPreferencesRequest): _168.UserValidatorPreferencesRequestProtoMsg;
            };
            UserValidatorPreferencesResponse: {
                typeUrl: string;
                encode(message: _168.UserValidatorPreferencesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.UserValidatorPreferencesResponse;
                fromPartial(object: Partial<_168.UserValidatorPreferencesResponse>): _168.UserValidatorPreferencesResponse;
                fromAmino(object: _168.UserValidatorPreferencesResponseAmino): _168.UserValidatorPreferencesResponse;
                toAmino(message: _168.UserValidatorPreferencesResponse): _168.UserValidatorPreferencesResponseAmino;
                fromAminoMsg(object: _168.UserValidatorPreferencesResponseAminoMsg): _168.UserValidatorPreferencesResponse;
                toAminoMsg(message: _168.UserValidatorPreferencesResponse): _168.UserValidatorPreferencesResponseAminoMsg;
                fromProtoMsg(message: _168.UserValidatorPreferencesResponseProtoMsg): _168.UserValidatorPreferencesResponse;
                toProto(message: _168.UserValidatorPreferencesResponse): Uint8Array;
                toProtoMsg(message: _168.UserValidatorPreferencesResponse): _168.UserValidatorPreferencesResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            osmosis: {
                concentratedliquidity: {
                    poolmodel: {
                        concentrated: {
                            v1beta1: _320.MsgClientImpl;
                        };
                    };
                    v1beta1: _321.MsgClientImpl;
                };
                gamm: {
                    poolmodels: {
                        balancer: {
                            v1beta1: _322.MsgClientImpl;
                        };
                        stableswap: {
                            v1beta1: _323.MsgClientImpl;
                        };
                    };
                    v1beta1: _324.MsgClientImpl;
                };
                incentives: _325.MsgClientImpl;
                lockup: _326.MsgClientImpl;
                poolmanager: {
                    v1beta1: _327.MsgClientImpl;
                };
                protorev: {
                    v1beta1: _328.MsgClientImpl;
                };
                superfluid: _329.MsgClientImpl;
                tokenfactory: {
                    v1beta1: _330.MsgClientImpl;
                };
                valsetpref: {
                    v1beta1: _331.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        totalSupplyWithoutOffset(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyWithoutOffsetRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyWithoutOffsetResponse>;
                        supplyOfWithoutOffset(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfWithoutOffsetRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfWithoutOffsetResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        baseDenom(request: import("../cosmos/bank/v1beta1/query").QueryBaseDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBaseDenomResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                    };
                };
            };
            osmosis: {
                concentratedliquidity: {
                    v1beta1: {
                        pools(request?: import("./concentrated-liquidity/query").PoolsRequest): Promise<import("./concentrated-liquidity/query").PoolsResponse>;
                        params(request?: import("./concentrated-liquidity/query").ParamsRequest): Promise<import("./concentrated-liquidity/query").ParamsResponse>;
                        userPositions(request: import("./concentrated-liquidity/query").UserPositionsRequest): Promise<import("./concentrated-liquidity/query").UserPositionsResponse>;
                        liquidityPerTickRange(request: import("./concentrated-liquidity/query").LiquidityPerTickRangeRequest): Promise<import("./concentrated-liquidity/query").LiquidityPerTickRangeResponse>;
                        liquidityNetInDirection(request: import("./concentrated-liquidity/query").LiquidityNetInDirectionRequest): Promise<import("./concentrated-liquidity/query").LiquidityNetInDirectionResponse>;
                        claimableSpreadRewards(request: import("./concentrated-liquidity/query").ClaimableSpreadRewardsRequest): Promise<import("./concentrated-liquidity/query").ClaimableSpreadRewardsResponse>;
                        claimableIncentives(request: import("./concentrated-liquidity/query").ClaimableIncentivesRequest): Promise<import("./concentrated-liquidity/query").ClaimableIncentivesResponse>;
                        positionById(request: import("./concentrated-liquidity/query").PositionByIdRequest): Promise<import("./concentrated-liquidity/query").PositionByIdResponse>;
                        poolAccumulatorRewards(request: import("./concentrated-liquidity/query").PoolAccumulatorRewardsRequest): Promise<import("./concentrated-liquidity/query").PoolAccumulatorRewardsResponse>;
                        incentiveRecords(request: import("./concentrated-liquidity/query").IncentiveRecordsRequest): Promise<import("./concentrated-liquidity/query").IncentiveRecordsResponse>;
                        tickAccumulatorTrackers(request: import("./concentrated-liquidity/query").TickAccumulatorTrackersRequest): Promise<import("./concentrated-liquidity/query").TickAccumulatorTrackersResponse>;
                        cFMMPoolIdLinkFromConcentratedPoolId(request: import("./concentrated-liquidity/query").CFMMPoolIdLinkFromConcentratedPoolIdRequest): Promise<import("./concentrated-liquidity/query").CFMMPoolIdLinkFromConcentratedPoolIdResponse>;
                        userUnbondingPositions(request: import("./concentrated-liquidity/query").UserUnbondingPositionsRequest): Promise<import("./concentrated-liquidity/query").UserUnbondingPositionsResponse>;
                        getTotalLiquidity(request?: import("./concentrated-liquidity/query").GetTotalLiquidityRequest): Promise<import("./concentrated-liquidity/query").GetTotalLiquidityResponse>;
                    };
                };
                cosmwasmpool: {
                    v1beta1: {
                        pools(request?: _101.PoolsRequest): Promise<_101.PoolsResponse>;
                        params(request?: _101.ParamsRequest): Promise<_101.ParamsResponse>;
                        contractInfoByPoolId(request: _101.ContractInfoByPoolIdRequest): Promise<_101.ContractInfoByPoolIdResponse>;
                    };
                };
                downtimedetector: {
                    v1beta1: {
                        recoveredSinceDowntimeOfLength(request: _105.RecoveredSinceDowntimeOfLengthRequest): Promise<_105.RecoveredSinceDowntimeOfLengthResponse>;
                    };
                };
                epochs: {
                    v1beta1: {
                        epochInfos(request?: _107.QueryEpochsInfoRequest): Promise<_107.QueryEpochsInfoResponse>;
                        currentEpoch(request: _107.QueryCurrentEpochRequest): Promise<_107.QueryCurrentEpochResponse>;
                    };
                };
                gamm: {
                    v1beta1: {
                        pools(request?: _111.QueryPoolsRequest): Promise<_111.QueryPoolsResponse>;
                        numPools(request?: _111.QueryNumPoolsRequest): Promise<_111.QueryNumPoolsResponse>;
                        totalLiquidity(request?: _111.QueryTotalLiquidityRequest): Promise<_111.QueryTotalLiquidityResponse>;
                        poolsWithFilter(request: _111.QueryPoolsWithFilterRequest): Promise<_111.QueryPoolsWithFilterResponse>;
                        pool(request: _111.QueryPoolRequest): Promise<_111.QueryPoolResponse>;
                        poolType(request: _111.QueryPoolTypeRequest): Promise<_111.QueryPoolTypeResponse>;
                        calcJoinPoolNoSwapShares(request: _111.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_111.QueryCalcJoinPoolNoSwapSharesResponse>;
                        calcJoinPoolShares(request: _111.QueryCalcJoinPoolSharesRequest): Promise<_111.QueryCalcJoinPoolSharesResponse>;
                        calcExitPoolCoinsFromShares(request: _111.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_111.QueryCalcExitPoolCoinsFromSharesResponse>;
                        poolParams(request: _111.QueryPoolParamsRequest): Promise<_111.QueryPoolParamsResponse>;
                        totalPoolLiquidity(request: _111.QueryTotalPoolLiquidityRequest): Promise<_111.QueryTotalPoolLiquidityResponse>;
                        totalShares(request: _111.QueryTotalSharesRequest): Promise<_111.QueryTotalSharesResponse>;
                        spotPrice(request: _111.QuerySpotPriceRequest): Promise<_111.QuerySpotPriceResponse>;
                        estimateSwapExactAmountIn(request: _111.QuerySwapExactAmountInRequest): Promise<_111.QuerySwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _111.QuerySwapExactAmountOutRequest): Promise<_111.QuerySwapExactAmountOutResponse>;
                        concentratedPoolIdLinkFromCFMM(request: _111.QueryConcentratedPoolIdLinkFromCFMMRequest): Promise<_111.QueryConcentratedPoolIdLinkFromCFMMResponse>;
                    };
                    v2: {
                        spotPrice(request: _117.QuerySpotPriceRequest): Promise<_117.QuerySpotPriceResponse>;
                    };
                };
                ibcratelimit: {
                    v1beta1: {
                        params(request?: _120.ParamsRequest): Promise<_120.ParamsResponse>;
                    };
                };
                incentives: {
                    moduleToDistributeCoins(request?: _124.ModuleToDistributeCoinsRequest): Promise<_124.ModuleToDistributeCoinsResponse>;
                    gaugeByID(request: _124.GaugeByIDRequest): Promise<_124.GaugeByIDResponse>;
                    gauges(request?: _124.GaugesRequest): Promise<_124.GaugesResponse>;
                    activeGauges(request?: _124.ActiveGaugesRequest): Promise<_124.ActiveGaugesResponse>;
                    activeGaugesPerDenom(request: _124.ActiveGaugesPerDenomRequest): Promise<_124.ActiveGaugesPerDenomResponse>;
                    upcomingGauges(request?: _124.UpcomingGaugesRequest): Promise<_124.UpcomingGaugesResponse>;
                    upcomingGaugesPerDenom(request: _124.UpcomingGaugesPerDenomRequest): Promise<_124.UpcomingGaugesPerDenomResponse>;
                    rewardsEst(request: _124.RewardsEstRequest): Promise<_124.RewardsEstResponse>;
                    lockableDurations(request?: _124.QueryLockableDurationsRequest): Promise<_124.QueryLockableDurationsResponse>;
                };
                lockup: {
                    moduleBalance(request?: _129.ModuleBalanceRequest): Promise<_129.ModuleBalanceResponse>;
                    moduleLockedAmount(request?: _129.ModuleLockedAmountRequest): Promise<_129.ModuleLockedAmountResponse>;
                    accountUnlockableCoins(request: _129.AccountUnlockableCoinsRequest): Promise<_129.AccountUnlockableCoinsResponse>;
                    accountUnlockingCoins(request: _129.AccountUnlockingCoinsRequest): Promise<_129.AccountUnlockingCoinsResponse>;
                    accountLockedCoins(request: _129.AccountLockedCoinsRequest): Promise<_129.AccountLockedCoinsResponse>;
                    accountLockedPastTime(request: _129.AccountLockedPastTimeRequest): Promise<_129.AccountLockedPastTimeResponse>;
                    accountLockedPastTimeNotUnlockingOnly(request: _129.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_129.AccountLockedPastTimeNotUnlockingOnlyResponse>;
                    accountUnlockedBeforeTime(request: _129.AccountUnlockedBeforeTimeRequest): Promise<_129.AccountUnlockedBeforeTimeResponse>;
                    accountLockedPastTimeDenom(request: _129.AccountLockedPastTimeDenomRequest): Promise<_129.AccountLockedPastTimeDenomResponse>;
                    lockedDenom(request: _129.LockedDenomRequest): Promise<_129.LockedDenomResponse>;
                    lockedByID(request: _129.LockedRequest): Promise<_129.LockedResponse>;
                    lockRewardReceiver(request: _129.LockRewardReceiverRequest): Promise<_129.LockRewardReceiverResponse>;
                    nextLockID(request?: _129.NextLockIDRequest): Promise<_129.NextLockIDResponse>;
                    syntheticLockupsByLockupID(request: _129.SyntheticLockupsByLockupIDRequest): Promise<_129.SyntheticLockupsByLockupIDResponse>;
                    syntheticLockupByLockupID(request: _129.SyntheticLockupByLockupIDRequest): Promise<_129.SyntheticLockupByLockupIDResponse>;
                    accountLockedLongerDuration(request: _129.AccountLockedLongerDurationRequest): Promise<_129.AccountLockedLongerDurationResponse>;
                    accountLockedDuration(request: _129.AccountLockedDurationRequest): Promise<_129.AccountLockedDurationResponse>;
                    accountLockedLongerDurationNotUnlockingOnly(request: _129.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_129.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
                    accountLockedLongerDurationDenom(request: _129.AccountLockedLongerDurationDenomRequest): Promise<_129.AccountLockedLongerDurationDenomResponse>;
                    params(request?: _129.QueryParamsRequest): Promise<_129.QueryParamsResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _133.QueryParamsRequest): Promise<_133.QueryParamsResponse>;
                        epochProvisions(request?: _133.QueryEpochProvisionsRequest): Promise<_133.QueryEpochProvisionsResponse>;
                    };
                };
                poolincentives: {
                    v1beta1: {
                        gaugeIds(request: _137.QueryGaugeIdsRequest): Promise<_137.QueryGaugeIdsResponse>;
                        distrInfo(request?: _137.QueryDistrInfoRequest): Promise<_137.QueryDistrInfoResponse>;
                        params(request?: _137.QueryParamsRequest): Promise<_137.QueryParamsResponse>;
                        lockableDurations(request?: _137.QueryLockableDurationsRequest): Promise<_137.QueryLockableDurationsResponse>;
                        incentivizedPools(request?: _137.QueryIncentivizedPoolsRequest): Promise<_137.QueryIncentivizedPoolsResponse>;
                        externalIncentiveGauges(request?: _137.QueryExternalIncentiveGaugesRequest): Promise<_137.QueryExternalIncentiveGaugesResponse>;
                    };
                };
                poolmanager: {
                    v1beta1: {
                        params(request?: _141.ParamsRequest): Promise<_141.ParamsResponse>;
                        estimateSwapExactAmountIn(request: _141.EstimateSwapExactAmountInRequest): Promise<_141.EstimateSwapExactAmountInResponse>;
                        estimateSinglePoolSwapExactAmountIn(request: _141.EstimateSinglePoolSwapExactAmountInRequest): Promise<_141.EstimateSwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _141.EstimateSwapExactAmountOutRequest): Promise<_141.EstimateSwapExactAmountOutResponse>;
                        estimateSinglePoolSwapExactAmountOut(request: _141.EstimateSinglePoolSwapExactAmountOutRequest): Promise<_141.EstimateSwapExactAmountOutResponse>;
                        numPools(request?: _141.NumPoolsRequest): Promise<_141.NumPoolsResponse>;
                        pool(request: _141.PoolRequest): Promise<_141.PoolResponse>;
                        allPools(request?: _141.AllPoolsRequest): Promise<_141.AllPoolsResponse>;
                        spotPrice(request: _141.SpotPriceRequest): Promise<_141.SpotPriceResponse>;
                        totalPoolLiquidity(request: _141.TotalPoolLiquidityRequest): Promise<_141.TotalPoolLiquidityResponse>;
                        totalLiquidity(request?: _141.TotalLiquidityRequest): Promise<_141.TotalLiquidityResponse>;
                    };
                };
                protorev: {
                    v1beta1: {
                        params(request?: _148.QueryParamsRequest): Promise<_148.QueryParamsResponse>;
                        getProtoRevNumberOfTrades(request?: _148.QueryGetProtoRevNumberOfTradesRequest): Promise<_148.QueryGetProtoRevNumberOfTradesResponse>;
                        getProtoRevProfitsByDenom(request: _148.QueryGetProtoRevProfitsByDenomRequest): Promise<_148.QueryGetProtoRevProfitsByDenomResponse>;
                        getProtoRevAllProfits(request?: _148.QueryGetProtoRevAllProfitsRequest): Promise<_148.QueryGetProtoRevAllProfitsResponse>;
                        getProtoRevStatisticsByRoute(request: _148.QueryGetProtoRevStatisticsByRouteRequest): Promise<_148.QueryGetProtoRevStatisticsByRouteResponse>;
                        getProtoRevAllRouteStatistics(request?: _148.QueryGetProtoRevAllRouteStatisticsRequest): Promise<_148.QueryGetProtoRevAllRouteStatisticsResponse>;
                        getProtoRevTokenPairArbRoutes(request?: _148.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_148.QueryGetProtoRevTokenPairArbRoutesResponse>;
                        getProtoRevAdminAccount(request?: _148.QueryGetProtoRevAdminAccountRequest): Promise<_148.QueryGetProtoRevAdminAccountResponse>;
                        getProtoRevDeveloperAccount(request?: _148.QueryGetProtoRevDeveloperAccountRequest): Promise<_148.QueryGetProtoRevDeveloperAccountResponse>;
                        getProtoRevPoolWeights(request?: _148.QueryGetProtoRevPoolWeightsRequest): Promise<_148.QueryGetProtoRevPoolWeightsResponse>;
                        getProtoRevMaxPoolPointsPerTx(request?: _148.QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<_148.QueryGetProtoRevMaxPoolPointsPerTxResponse>;
                        getProtoRevMaxPoolPointsPerBlock(request?: _148.QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<_148.QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
                        getProtoRevBaseDenoms(request?: _148.QueryGetProtoRevBaseDenomsRequest): Promise<_148.QueryGetProtoRevBaseDenomsResponse>;
                        getProtoRevEnabled(request?: _148.QueryGetProtoRevEnabledRequest): Promise<_148.QueryGetProtoRevEnabledResponse>;
                        getProtoRevPool(request: _148.QueryGetProtoRevPoolRequest): Promise<_148.QueryGetProtoRevPoolResponse>;
                    };
                };
                superfluid: {
                    params(request?: _153.QueryParamsRequest): Promise<_153.QueryParamsResponse>;
                    assetType(request: _153.AssetTypeRequest): Promise<_153.AssetTypeResponse>;
                    allAssets(request?: _153.AllAssetsRequest): Promise<_153.AllAssetsResponse>;
                    assetMultiplier(request: _153.AssetMultiplierRequest): Promise<_153.AssetMultiplierResponse>;
                    allIntermediaryAccounts(request?: _153.AllIntermediaryAccountsRequest): Promise<_153.AllIntermediaryAccountsResponse>;
                    connectedIntermediaryAccount(request: _153.ConnectedIntermediaryAccountRequest): Promise<_153.ConnectedIntermediaryAccountResponse>;
                    totalDelegationByValidatorForDenom(request: _153.QueryTotalDelegationByValidatorForDenomRequest): Promise<_153.QueryTotalDelegationByValidatorForDenomResponse>;
                    totalSuperfluidDelegations(request?: _153.TotalSuperfluidDelegationsRequest): Promise<_153.TotalSuperfluidDelegationsResponse>;
                    superfluidDelegationAmount(request: _153.SuperfluidDelegationAmountRequest): Promise<_153.SuperfluidDelegationAmountResponse>;
                    superfluidDelegationsByDelegator(request: _153.SuperfluidDelegationsByDelegatorRequest): Promise<_153.SuperfluidDelegationsByDelegatorResponse>;
                    superfluidUndelegationsByDelegator(request: _153.SuperfluidUndelegationsByDelegatorRequest): Promise<_153.SuperfluidUndelegationsByDelegatorResponse>;
                    superfluidDelegationsByValidatorDenom(request: _153.SuperfluidDelegationsByValidatorDenomRequest): Promise<_153.SuperfluidDelegationsByValidatorDenomResponse>;
                    estimateSuperfluidDelegatedAmountByValidatorDenom(request: _153.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_153.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
                    totalDelegationByDelegator(request: _153.QueryTotalDelegationByDelegatorRequest): Promise<_153.QueryTotalDelegationByDelegatorResponse>;
                    unpoolWhitelist(request?: _153.QueryUnpoolWhitelistRequest): Promise<_153.QueryUnpoolWhitelistResponse>;
                    userConcentratedSuperfluidPositionsDelegated(request: _153.UserConcentratedSuperfluidPositionsDelegatedRequest): Promise<_153.UserConcentratedSuperfluidPositionsDelegatedResponse>;
                    userConcentratedSuperfluidPositionsUndelegating(request: _153.UserConcentratedSuperfluidPositionsUndelegatingRequest): Promise<_153.UserConcentratedSuperfluidPositionsUndelegatingResponse>;
                };
                tokenfactory: {
                    v1beta1: {
                        params(request?: _159.QueryParamsRequest): Promise<_159.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _159.QueryDenomAuthorityMetadataRequest): Promise<_159.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _159.QueryDenomsFromCreatorRequest): Promise<_159.QueryDenomsFromCreatorResponse>;
                    };
                };
                twap: {
                    v1beta1: {
                        params(request?: _162.ParamsRequest): Promise<_162.ParamsResponse>;
                        arithmeticTwap(request: _162.ArithmeticTwapRequest): Promise<_162.ArithmeticTwapResponse>;
                        arithmeticTwapToNow(request: _162.ArithmeticTwapToNowRequest): Promise<_162.ArithmeticTwapToNowResponse>;
                        geometricTwap(request: _162.GeometricTwapRequest): Promise<_162.GeometricTwapResponse>;
                        geometricTwapToNow(request: _162.GeometricTwapToNowRequest): Promise<_162.GeometricTwapToNowResponse>;
                    };
                };
                txfees: {
                    v1beta1: {
                        feeTokens(request?: _167.QueryFeeTokensRequest): Promise<_167.QueryFeeTokensResponse>;
                        denomSpotPrice(request: _167.QueryDenomSpotPriceRequest): Promise<_167.QueryDenomSpotPriceResponse>;
                        denomPoolId(request: _167.QueryDenomPoolIdRequest): Promise<_167.QueryDenomPoolIdResponse>;
                        baseDenom(request?: _167.QueryBaseDenomRequest): Promise<_167.QueryBaseDenomResponse>;
                    };
                };
                valsetpref: {
                    v1beta1: {
                        userValidatorPreferences(request: _168.UserValidatorPreferencesRequest): Promise<_168.UserValidatorPreferencesResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            osmosis: {
                concentratedliquidity: {
                    v1beta1: _284.LCDQueryClient;
                };
                cosmwasmpool: {
                    v1beta1: _285.LCDQueryClient;
                };
                downtimedetector: {
                    v1beta1: _286.LCDQueryClient;
                };
                epochs: {
                    v1beta1: _287.LCDQueryClient;
                };
                gamm: {
                    v1beta1: _288.LCDQueryClient;
                    v2: _289.LCDQueryClient;
                };
                ibcratelimit: {
                    v1beta1: _290.LCDQueryClient;
                };
                incentives: _291.LCDQueryClient;
                lockup: _292.LCDQueryClient;
                mint: {
                    v1beta1: _293.LCDQueryClient;
                };
                poolincentives: {
                    v1beta1: _294.LCDQueryClient;
                };
                poolmanager: {
                    v1beta1: _295.LCDQueryClient;
                };
                protorev: {
                    v1beta1: _296.LCDQueryClient;
                };
                superfluid: _297.LCDQueryClient;
                tokenfactory: {
                    v1beta1: _298.LCDQueryClient;
                };
                twap: {
                    v1beta1: _299.LCDQueryClient;
                };
                txfees: {
                    v1beta1: _300.LCDQueryClient;
                };
                valsetpref: {
                    v1beta1: _301.LCDQueryClient;
                };
            };
        }>;
    };
}
