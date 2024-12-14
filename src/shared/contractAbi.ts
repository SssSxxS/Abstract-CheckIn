const contractAbi = [
  {
    type: "function",
    name: "getGlobalCheckInCounter",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    type: "function",
    name: "getCheckInCounterForAddress",
    stateMutability: "view",
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    type: "function",
    name: "getCheckInStreakCounterForAddress",
    stateMutability: "view",
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    type: "function",
    name: "CheckIn",
    stateMutability: "nonpayable",
    inputs: [],
    outputs: [],
  },
] as const

export default contractAbi
