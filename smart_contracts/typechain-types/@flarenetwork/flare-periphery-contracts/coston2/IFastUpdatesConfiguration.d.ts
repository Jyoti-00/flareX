/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IFastUpdatesConfigurationContract
  extends Truffle.Contract<IFastUpdatesConfigurationInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<IFastUpdatesConfigurationInstance>;
}

export interface FeedAdded {
  name: "FeedAdded";
  args: {
    feedId: string;
    rewardBandValue: BN;
    inflationShare: BN;
    index: BN;
    0: string;
    1: BN;
    2: BN;
    3: BN;
  };
}

export interface FeedRemoved {
  name: "FeedRemoved";
  args: {
    feedId: string;
    index: BN;
    0: string;
    1: BN;
  };
}

export interface FeedUpdated {
  name: "FeedUpdated";
  args: {
    feedId: string;
    rewardBandValue: BN;
    inflationShare: BN;
    index: BN;
    0: string;
    1: BN;
    2: BN;
    3: BN;
  };
}

type AllEvents = FeedAdded | FeedRemoved | FeedUpdated;

export interface IFastUpdatesConfigurationInstance
  extends Truffle.ContractInstance {
  getFeedConfigurations(
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ feedId: string; rewardBandValue: BN; inflationShare: BN }[]>;

  getFeedId(
    _index: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  getFeedIds(txDetails?: Truffle.TransactionDetails): Promise<string[]>;

  getFeedIndex(
    _feedId: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  getNumberOfFeeds(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  getUnusedIndices(txDetails?: Truffle.TransactionDetails): Promise<BN[]>;

  methods: {
    getFeedConfigurations(
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ feedId: string; rewardBandValue: BN; inflationShare: BN }[]>;

    getFeedId(
      _index: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    getFeedIds(txDetails?: Truffle.TransactionDetails): Promise<string[]>;

    getFeedIndex(
      _feedId: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    getNumberOfFeeds(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    getUnusedIndices(txDetails?: Truffle.TransactionDetails): Promise<BN[]>;
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