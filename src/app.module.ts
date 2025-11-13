import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardgameController } from './boardgame/boardgame.controller';
import { BoardgameService } from './boardgame/boardgame.service';

@Module({
  imports: [],
  controllers: [AppController, BoardgameController],
  providers: [AppService, BoardgameService],
})
export class AppModule {}
