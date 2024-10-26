/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface FtsoV2InterfaceContract
  extends Truffle.Contract<FtsoV2InterfaceInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<FtsoV2InterfaceInstance>;
}

type AllEvents = never;

export interface FtsoV2InterfaceInstance extends Truffle.ContractInstance {
  getCurrentPrice(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  methods: {
    getCurrentPrice(txDetails?: Truffle.TransactionDetails): Promise<BN>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}