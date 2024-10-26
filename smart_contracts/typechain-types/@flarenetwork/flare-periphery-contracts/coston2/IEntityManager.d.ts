/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IEntityManagerContract
  extends Truffle.Contract<IEntityManagerInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IEntityManagerInstance>;
}

export interface DelegationAddressProposed {
  name: "DelegationAddressProposed";
  args: {
    voter: string;
    delegationAddress: string;
    0: string;
    1: string;
  };
}

export interface DelegationAddressRegistrationConfirmed {
  name: "DelegationAddressRegistrationConfirmed";
  args: {
    voter: string;
    delegationAddress: string;
    0: string;
    1: string;
  };
}

export interface MaxNodeIdsPerEntitySet {
  name: "MaxNodeIdsPerEntitySet";
  args: {
    maxNodeIdsPerEntity: BN;
    0: BN;
  };
}

export interface NodeIdRegistered {
  name: "NodeIdRegistered";
  args: {
    voter: string;
    nodeId: string;
    0: string;
    1: string;
  };
}

export interface NodeIdUnregistered {
  name: "NodeIdUnregistered";
  args: {
    voter: string;
    nodeId: string;
    0: string;
    1: string;
  };
}

export interface PublicKeyRegistered {
  name: "PublicKeyRegistered";
  args: {
    voter: string;
    part1: string;
    part2: string;
    0: string;
    1: string;
    2: string;
  };
}

export interface PublicKeyUnregistered {
  name: "PublicKeyUnregistered";
  args: {
    voter: string;
    part1: string;
    part2: string;
    0: string;
    1: string;
    2: string;
  };
}

export interface SigningPolicyAddressProposed {
  name: "SigningPolicyAddressProposed";
  args: {
    voter: string;
    signingPolicyAddress: string;
    0: string;
    1: string;
  };
}

export interface SigningPolicyAddressRegistrationConfirmed {
  name: "SigningPolicyAddressRegistrationConfirmed";
  args: {
    voter: string;
    signingPolicyAddress: string;
    0: string;
    1: string;
  };
}

export interface SubmitAddressProposed {
  name: "SubmitAddressProposed";
  args: {
    voter: string;
    submitAddress: string;
    0: string;
    1: string;
  };
}

export interface SubmitAddressRegistrationConfirmed {
  name: "SubmitAddressRegistrationConfirmed";
  args: {
    voter: string;
    submitAddress: string;
    0: string;
    1: string;
  };
}

export interface SubmitSignaturesAddressProposed {
  name: "SubmitSignaturesAddressProposed";
  args: {
    voter: string;
    submitSignaturesAddress: string;
    0: string;
    1: string;
  };
}

export interface SubmitSignaturesAddressRegistrationConfirmed {
  name: "SubmitSignaturesAddressRegistrationConfirmed";
  args: {
    voter: string;
    submitSignaturesAddress: string;
    0: string;
    1: string;
  };
}

type AllEvents =
  | DelegationAddressProposed
  | DelegationAddressRegistrationConfirmed
  | MaxNodeIdsPerEntitySet
  | NodeIdRegistered
  | NodeIdUnregistered
  | PublicKeyRegistered
  | PublicKeyUnregistered
  | SigningPolicyAddressProposed
  | SigningPolicyAddressRegistrationConfirmed
  | SubmitAddressProposed
  | SubmitAddressRegistrationConfirmed
  | SubmitSignaturesAddressProposed
  | SubmitSignaturesAddressRegistrationConfirmed;

export interface IEntityManagerInstance extends Truffle.ContractInstance {
  confirmDelegationAddressRegistration: {
    (_voter: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(_voter: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      _voter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _voter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  confirmSigningPolicyAddressRegistration: {
    (_voter: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(_voter: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      _voter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _voter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  confirmSubmitAddressRegistration: {
    (_voter: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(_voter: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      _voter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _voter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  confirmSubmitSignaturesAddressRegistration: {
    (_voter: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(_voter: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      _voter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _voter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getDelegationAddressOf(
    _voter: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  getDelegationAddressOfAt(
    _voter: string,
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  getNodeIdsOf(
    _voter: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string[]>;

  getNodeIdsOfAt(
    _voter: string,
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string[]>;

  getPublicKeyOf(
    _voter: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: string; 1: string }>;

  getPublicKeyOfAt(
    _voter: string,
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: string; 1: string }>;

  getVoterAddresses(
    _voter: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{
    submitAddress: string;
    submitSignaturesAddress: string;
    signingPolicyAddress: string;
  }>;

  getVoterAddressesAt(
    _voter: string,
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{
    submitAddress: string;
    submitSignaturesAddress: string;
    signingPolicyAddress: string;
  }>;

  getVoterForDelegationAddress(
    _delegationAddress: string,
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  getVoterForNodeId(
    _nodeId: string,
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  getVoterForPublicKey(
    _part1: string,
    _part2: string,
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  getVoterForSigningPolicyAddress(
    _signingPolicyAddress: string,
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  getVoterForSubmitAddress(
    _submitAddress: string,
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  getVoterForSubmitSignaturesAddress(
    _submitSignaturesAddress: string,
    _blockNumber: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  proposeDelegationAddress: {
    (
      _delegationAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _delegationAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _delegationAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _delegationAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  proposeSigningPolicyAddress: {
    (
      _signingPolicyAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _signingPolicyAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _signingPolicyAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _signingPolicyAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  proposeSubmitAddress: {
    (_submitAddress: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _submitAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _submitAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _submitAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  proposeSubmitSignaturesAddress: {
    (
      _submitSignaturesAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _submitSignaturesAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _submitSignaturesAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _submitSignaturesAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  registerNodeId: {
    (
      _nodeId: string,
      _certificateRaw: string,
      _signature: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _nodeId: string,
      _certificateRaw: string,
      _signature: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _nodeId: string,
      _certificateRaw: string,
      _signature: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _nodeId: string,
      _certificateRaw: string,
      _signature: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  registerPublicKey: {
    (
      _part1: string,
      _part2: string,
      _verificationData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _part1: string,
      _part2: string,
      _verificationData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _part1: string,
      _part2: string,
      _verificationData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _part1: string,
      _part2: string,
      _verificationData: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  unregisterNodeId: {
    (_nodeId: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _nodeId: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _nodeId: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _nodeId: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  unregisterPublicKey: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  methods: {
    confirmDelegationAddressRegistration: {
      (_voter: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _voter: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _voter: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _voter: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    confirmSigningPolicyAddressRegistration: {
      (_voter: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _voter: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _voter: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _voter: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    confirmSubmitAddressRegistration: {
      (_voter: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _voter: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _voter: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _voter: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    confirmSubmitSignaturesAddressRegistration: {
      (_voter: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _voter: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _voter: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _voter: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getDelegationAddressOf(
      _voter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    getDelegationAddressOfAt(
      _voter: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    getNodeIdsOf(
      _voter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string[]>;

    getNodeIdsOfAt(
      _voter: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string[]>;

    getPublicKeyOf(
      _voter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: string; 1: string }>;

    getPublicKeyOfAt(
      _voter: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: string; 1: string }>;

    getVoterAddresses(
      _voter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{
      submitAddress: string;
      submitSignaturesAddress: string;
      signingPolicyAddress: string;
    }>;

    getVoterAddressesAt(
      _voter: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{
      submitAddress: string;
      submitSignaturesAddress: string;
      signingPolicyAddress: string;
    }>;

    getVoterForDelegationAddress(
      _delegationAddress: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    getVoterForNodeId(
      _nodeId: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    getVoterForPublicKey(
      _part1: string,
      _part2: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    getVoterForSigningPolicyAddress(
      _signingPolicyAddress: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    getVoterForSubmitAddress(
      _submitAddress: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    getVoterForSubmitSignaturesAddress(
      _submitSignaturesAddress: string,
      _blockNumber: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    proposeDelegationAddress: {
      (
        _delegationAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _delegationAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _delegationAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _delegationAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    proposeSigningPolicyAddress: {
      (
        _signingPolicyAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _signingPolicyAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _signingPolicyAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _signingPolicyAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    proposeSubmitAddress: {
      (_submitAddress: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _submitAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _submitAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _submitAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    proposeSubmitSignaturesAddress: {
      (
        _submitSignaturesAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _submitSignaturesAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _submitSignaturesAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _submitSignaturesAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    registerNodeId: {
      (
        _nodeId: string,
        _certificateRaw: string,
        _signature: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _nodeId: string,
        _certificateRaw: string,
        _signature: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _nodeId: string,
        _certificateRaw: string,
        _signature: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _nodeId: string,
        _certificateRaw: string,
        _signature: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    registerPublicKey: {
      (
        _part1: string,
        _part2: string,
        _verificationData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _part1: string,
        _part2: string,
        _verificationData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _part1: string,
        _part2: string,
        _verificationData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _part1: string,
        _part2: string,
        _verificationData: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    unregisterNodeId: {
      (_nodeId: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _nodeId: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _nodeId: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _nodeId: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    unregisterPublicKey: {
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