/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IPChainStakeMirrorContract
  extends Truffle.Contract<IPChainStakeMirrorInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IPChainStakeMirrorInstance>;
}

export interface MaxUpdatesPerBlockSet {
  name: "MaxUpdatesPerBlockSet";
  args: {
    maxUpdatesPerBlock: BN;
    0: BN;
  };
}

export interface StakeConfirmed {
  name: "StakeConfirmed";
  args: {
    owner: string;
    nodeId: string;
    txHash: string;
    amountWei: BN;
    pChainTxId: string;
    0: string;
    1: string;
    2: string;
    3: BN;
    4: string;
  };
}

export interface StakeEnded {
  name: "StakeEnded";
  args: {
    owner: string;
    nodeId: string;
    txHash: string;
    amountWei: BN;
    0: string;
    1: string;
    2: string;
    3: BN;
  };
}

export interface StakeRevoked {
  name: "StakeRevoked";
  args: {
    owner: string;
    nodeId: string;
    txHash: string;
    amountWei: BN;
    0: string;
    1: string;
    2: string;
    3: BN;
  };
}

export interface VotePowerCacheCreated {
  name: "VotePowerCacheCreated";
  args: {
    nodeId: string;
    blockNumber: BN;
    0: string;
    1: BN;
  };
}

export interface VotePowerChanged {
  name: "VotePowerChanged";
  args: {
    owner: string;
    nodeId: string;
    priorVotePower: BN;
    newVotePower: BN;
    0: string;
    1: string;
    2: BN;
    3: BN;
  };
}

type AllEvents =
  | MaxUpdatesPerBlockSet
  | StakeConfirmed
  | StakeEnded
  | StakeRevoked
  | VotePowerCacheCreated
  | VotePowerChanged;

export interface IPChainStakeMirrorInstance extends Truffle.ContractInstance {
  balanceOf(
    _owner: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  balanceOfAt(
    _owner: string,
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  batchVotePowerOfAt(
    _nodeIds: string[],
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN[]>;

  isActiveStakeMirrored(
    _txId: string,
    _inputAddress: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  mirrorStake: {
    (
      _stakeData: {
        txId: string;
        stakingType: number | BN | string;
        inputAddress: string;
        nodeId: string;
        startTime: number | BN | string;
        endTime: number | BN | string;
        weight: number | BN | string;
      },
      _merkleProof: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _stakeData: {
        txId: string;
        stakingType: number | BN | string;
        inputAddress: string;
        nodeId: string;
        startTime: number | BN | string;
        endTime: number | BN | string;
        weight: number | BN | string;
      },
      _merkleProof: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _stakeData: {
        txId: string;
        stakingType: number | BN | string;
        inputAddress: string;
        nodeId: string;
        startTime: number | BN | string;
        endTime: number | BN | string;
        weight: number | BN | string;
      },
      _merkleProof: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _stakeData: {
        txId: string;
        stakingType: number | BN | string;
        inputAddress: string;
        nodeId: string;
        startTime: number | BN | string;
        endTime: number | BN | string;
        weight: number | BN | string;
      },
      _merkleProof: string[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  stakesOf(
    _owner: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: string[]; 1: BN[] }>;

  stakesOfAt(
    _owner: string,
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: string[]; 1: BN[] }>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  totalSupplyAt(
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  totalVotePower(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  totalVotePowerAt(
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  totalVotePowerAtCached: {
    (
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  votePowerFromTo(
    _owner: string,
    _nodeId: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  votePowerFromToAt(
    _owner: string,
    _nodeId: string,
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  votePowerOf(
    _nodeId: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  votePowerOfAt(
    _nodeId: string,
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  votePowerOfAtCached: {
    (
      _owner: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _owner: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      _owner: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _owner: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    balanceOf(
      _owner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    balanceOfAt(
      _owner: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    batchVotePowerOfAt(
      _nodeIds: string[],
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN[]>;

    isActiveStakeMirrored(
      _txId: string,
      _inputAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    mirrorStake: {
      (
        _stakeData: {
          txId: string;
          stakingType: number | BN | string;
          inputAddress: string;
          nodeId: string;
          startTime: number | BN | string;
          endTime: number | BN | string;
          weight: number | BN | string;
        },
        _merkleProof: string[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _stakeData: {
          txId: string;
          stakingType: number | BN | string;
          inputAddress: string;
          nodeId: string;
          startTime: number | BN | string;
          endTime: number | BN | string;
          weight: number | BN | string;
        },
        _merkleProof: string[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _stakeData: {
          txId: string;
          stakingType: number | BN | string;
          inputAddress: string;
          nodeId: string;
          startTime: number | BN | string;
          endTime: number | BN | string;
          weight: number | BN | string;
        },
        _merkleProof: string[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _stakeData: {
          txId: string;
          stakingType: number | BN | string;
          inputAddress: string;
          nodeId: string;
          startTime: number | BN | string;
          endTime: number | BN | string;
          weight: number | BN | string;
        },
        _merkleProof: string[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    stakesOf(
      _owner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: string[]; 1: BN[] }>;

    stakesOfAt(
      _owner: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: string[]; 1: BN[] }>;

    totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    totalSupplyAt(
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    totalVotePower(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    totalVotePowerAt(
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    totalVotePowerAtCached: {
      (
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    votePowerFromTo(
      _owner: string,
      _nodeId: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    votePowerFromToAt(
      _owner: string,
      _nodeId: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    votePowerOf(
      _nodeId: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    votePowerOfAt(
      _nodeId: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    votePowerOfAtCached: {
      (
        _owner: string,
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _owner: string,
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _owner: string,
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _owner: string,
        _blockNumber: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
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
