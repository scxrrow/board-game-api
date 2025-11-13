import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardgameController } from './boardgame/boardgame.controller';

@Module({
  imports: [],
  controllers: [AppController, BoardgameController],
  providers: [AppService],
})
export class AppModule {}
