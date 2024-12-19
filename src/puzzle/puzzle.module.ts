import { Module } from '@nestjs/common';
import { PuzzleService } from './puzzle.service';
import { PuzzleController } from './puzzle.controller';

@Module({
  controllers: [PuzzleController],
  providers: [PuzzleService],
})
export class PuzzleModule {}
