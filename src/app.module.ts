import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PuzzleModule } from './puzzle/puzzle.module';

@Module({
  imports: [PuzzleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
