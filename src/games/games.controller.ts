import { Controller, Get, Put, Post, Delete, Param, Body} from '@nestjs/common';
import {GamesService} from './games.service';

@Controller('games')
export class GamesController {
    constructor(private readonly gamesService: GamesService) {}
    @Get()
  getAllGames() {
       return this.gamesService.findAll();
    }

    @Get(':id')
    getGamesById(@Param('id') id: number) {
       return this.gamesService.findOne(id);
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
        
    }
}


