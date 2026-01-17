import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { BlockchainService } from './blockchain.service';

@ApiTags('Blockchain')
@Controller('blockchain')
export class BlockchainController {
  constructor(
    private readonly blockchainService: BlockchainService,
  ) {}

  @Get('events')
  @ApiOperation({
    summary: 'Get ValueUpdated events (Task 3)',
  })
  async getValueUpdatedEvents() {
    return await this.blockchainService.getValueUpdatedEvents();
  }
}
