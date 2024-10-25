/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IDistributionToDelegatorsContract
  extends Truffle.Contract<IDistributionToDelegatorsInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<IDistributionToDelegatorsInstance>;
}

export interface AccountClaimed {
  name: "AccountClaimed";
  args: {
    whoClaimed: string;
    sentTo: string;
    month: BN;
    amountWei: BN;
    0: string;
    1: string;
    2: BN;
    3: BN;
  };
}

export interface AccountOptOut {
  name: "AccountOptOut";
  args: {
    theAccount: string;
    confirmed: boolean;
    0: string;
    1: boolean;
  };
}

export interface EntitlementStart {
  name: "EntitlementStart";
  args: {
    entitlementStartTs: BN;
    0: BN;
  };
}

export interface UseGoodRandomSet {
  name: "UseGoodRandomSet";
  args: {
    useGoodRandom: boolean;
    maxWaitForGoodRandomSeconds: BN;
    0: boolean;
    1: BN;
  };
}

type AllEvents =
  | AccountClaimed
  | AccountOptOut
  | EntitlementStart
  | UseGoodRandomSet;

export interface IDistributionToDelegatorsInstance
  extends Truffle.ContractInstance {
  autoClaim: {
    (
      _rewardOwners: string[],
      _month: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _rewardOwners: string[],
      _month: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _rewardOwners: string[],
      _month: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _rewardOwners: string[],
      _month: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  claim: {
    (
      _rewardOwner: string,
      _recipient: string,
      _month: number | BN | string,
      _wrap: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _rewardOwner: string,
      _recipient: string,
      _month: number | BN | string,
      _wrap: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      _rewardOwner: string,
      _recipient: string,
      _month: number | BN | string,
      _wrap: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _rewardOwner: string,
      _recipient: string,
      _month: number | BN | string,
      _wrap: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getClaimableAmount(
    _month: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  getClaimableAmountOf(
    _account: string,
    _month: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  getClaimableMonths(
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: BN; 1: BN }>;

  getCurrentMonth(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  getMonthToExpireNext(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  nextClaimableMonth(
    _rewardOwner: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  optOutOfAirdrop: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  methods: {
    autoClaim: {
      (
        _rewardOwners: string[],
        _month: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _rewardOwners: string[],
        _month: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _rewardOwners: string[],
        _month: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _rewardOwners: string[],
        _month: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    claim: {
      (
        _rewardOwner: string,
        _recipient: string,
        _month: number | BN | string,
        _wrap: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _rewardOwner: string,
        _recipient: string,
        _month: number | BN | string,
        _wrap: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _rewardOwner: string,
        _recipient: string,
        _month: number | BN | string,
        _wrap: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _rewardOwner: string,
        _recipient: string,
        _month: number | BN | string,
        _wrap: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getClaimableAmount(
      _month: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    getClaimableAmountOf(
      _account: string,
      _month: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    getClaimableMonths(
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: BN; 1: BN }>;

    getCurrentMonth(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    getMonthToExpireNext(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    nextClaimableMonth(
      _rewardOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    optOutOfAirdrop: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };
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
