export const SIMPLE_STORAGE_ABI = [
  {
    name: 'ValueUpdated',
    type: 'event',
    inputs: [
      {
        name: 'value',
        type: 'uint256',
        indexed: false,
      },
    ],
  },
] as const;
