import { Controller, Get, Put, Post, Delete, Param, Body, NotFoundException} from '@nestjs/common';
import {GamesService} from './games.service';
import { not } from 'rxjs/internal/util/not';

@Controller('games')
export class GamesController {
    constructor(private readonly gamesService: GamesService) {}
    @Get()
  getAllGames() {
       return this.gamesService.findAll();
    }

    @Get(':id')
    getGamesById(@Param('id') id: number) {
        const result = this.gamesService.findOne(id);
       if(result){
        return result;
       }
       else{
        throw new NotFoundException('Game not found');
       }
    }

    @Post()
    create(@Body() data : any): string {
    this.gamesService.addGames(data);
    return 'added new game';
  }

    @Put(':id')
    updateGames(@Param('id') id: string, @Body() updateBoardgameDto: any) {
        this.gamesService.modifyGames(Number(id), updateBoardgameDto);
        return 'game modified';
    }

    @Delete(':id')
    deleteGames(@Param('id') id: string) {
        this.gamesService.deleteGames(Number(id));
        return 'game deleted';
    }
}


