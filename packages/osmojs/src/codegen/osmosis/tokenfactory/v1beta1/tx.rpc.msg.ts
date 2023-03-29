import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateDenom, MsgCreateDenomResponse, MsgMint, MsgMintResponse, MsgBurn, MsgBurnResponse, MsgChangeAdmin, MsgChangeAdminResponse, MsgSetDenomMetadata, MsgSetDenomMetadataResponse, MsgSetBeforeSendHook, MsgSetBeforeSendHookResponse, MsgForceTransfer, MsgForceTransferResponse } from "./tx";
/** Msg defines the tokefactory module's gRPC message service. */

export interface Msg {
  createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
  mint(request: MsgMint): Promise<MsgMintResponse>;
  burn(request: MsgBurn): Promise<MsgBurnResponse>;
  changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse>;
  setDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse>;
  setBeforeSendHook(request: MsgSetBeforeSendHook): Promise<MsgSetBeforeSendHookResponse>;
  forceTransfer(request: MsgForceTransfer): Promise<MsgForceTransferResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createDenom = this.createDenom.bind(this);
    this.mint = this.mint.bind(this);
    this.burn = this.burn.bind(this);
    this.changeAdmin = this.changeAdmin.bind(this);
    this.setDenomMetadata = this.setDenomMetadata.bind(this);
    this.setBeforeSendHook = this.setBeforeSendHook.bind(this);
    this.forceTransfer = this.forceTransfer.bind(this);
  }

  createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse> {
    const data = MsgCreateDenom.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "CreateDenom", data);
    return promise.then(data => MsgCreateDenomResponse.decode(new _m0.Reader(data)));
  }

  mint(request: MsgMint): Promise<MsgMintResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "Mint", data);
    return promise.then(data => MsgMintResponse.decode(new _m0.Reader(data)));
  }

  burn(request: MsgBurn): Promise<MsgBurnResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "Burn", data);
    return promise.then(data => MsgBurnResponse.decode(new _m0.Reader(data)));
  }

  changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse> {
    const data = MsgChangeAdmin.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "ChangeAdmin", data);
    return promise.then(data => MsgChangeAdminResponse.decode(new _m0.Reader(data)));
  }

  setDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse> {
    const data = MsgSetDenomMetadata.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "SetDenomMetadata", data);
    return promise.then(data => MsgSetDenomMetadataResponse.decode(new _m0.Reader(data)));
  }

  setBeforeSendHook(request: MsgSetBeforeSendHook): Promise<MsgSetBeforeSendHookResponse> {
    const data = MsgSetBeforeSendHook.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "SetBeforeSendHook", data);
    return promise.then(data => MsgSetBeforeSendHookResponse.decode(new _m0.Reader(data)));
  }

  forceTransfer(request: MsgForceTransfer): Promise<MsgForceTransferResponse> {
    const data = MsgForceTransfer.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "ForceTransfer", data);
    return promise.then(data => MsgForceTransferResponse.decode(new _m0.Reader(data)));
  }

}