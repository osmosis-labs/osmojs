import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateDenom, MsgCreateDenomResponse, MsgCreateDenomResponseSDKType, MsgMint, MsgMintResponse, MsgMintResponseSDKType, MsgBurn, MsgBurnResponse, MsgBurnResponseSDKType, MsgChangeAdmin, MsgChangeAdminResponse, MsgChangeAdminResponseSDKType, MsgSetDenomMetadata, MsgSetDenomMetadataResponse, MsgSetDenomMetadataResponseSDKType } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponseSDKType>;
  /*null*/

  mint(request: MsgMint): Promise<MsgMintResponseSDKType>;
  /*null*/

  burn(request: MsgBurn): Promise<MsgBurnResponseSDKType>;
  /*null*/

  changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponseSDKType>;
  /*null*/

  setDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponseSDKType>;
  /*null*/

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
  }

  createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponseSDKType> {
    const data = MsgCreateDenom.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "CreateDenom", data);
    return promise.then(data => MsgCreateDenomResponse.decode(new _m0.Reader(data)));
  }

  mint(request: MsgMint): Promise<MsgMintResponseSDKType> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "Mint", data);
    return promise.then(data => MsgMintResponse.decode(new _m0.Reader(data)));
  }

  burn(request: MsgBurn): Promise<MsgBurnResponseSDKType> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "Burn", data);
    return promise.then(data => MsgBurnResponse.decode(new _m0.Reader(data)));
  }

  changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponseSDKType> {
    const data = MsgChangeAdmin.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "ChangeAdmin", data);
    return promise.then(data => MsgChangeAdminResponse.decode(new _m0.Reader(data)));
  }

  setDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponseSDKType> {
    const data = MsgSetDenomMetadata.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "SetDenomMetadata", data);
    return promise.then(data => MsgSetDenomMetadataResponse.decode(new _m0.Reader(data)));
  }

}