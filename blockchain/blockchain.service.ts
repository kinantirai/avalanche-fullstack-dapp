import { Injectable } from '@nestjs/common';
import { createPublicClient, http } from 'viem';
import { avalancheFuji } from 'viem/chains';
import { SIMPLE_STORAGE_ABI } from './simple-storage.abi';

@Injectable()
export class BlockchainService {
  private client = createPublicClient({
    chain: avalancheFuji,
    transport: http('https://api.avax-test.network/ext/bc/C/rpc'),
  });

  private contractAddress: `0x${string}` =
    '0xPASTE_ADDRESS_KAMU';

  async getValueUpdatedEvents() {
    const logs = await this.client.getLogs({
      address: this.contractAddress,
      event: SIMPLE_STORAGE_ABI[0],
      fromBlock: 'earliest',
      toBlock: 'latest',
    });

    return logs.map(log => {
  const { value } = log.args as { value: bigint };

  return {
    blockNumber: Number(log.blockNumber),
    value: value.toString(),
  };
});
}
}
