import { Controller, Get, Put, Post, Delete, Param, Body, NotFoundException, UseGuards} from '@nestjs/common';
import {GamesService} from './games.service';
import { not } from 'rxjs/internal/util/not';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('games')
export class GamesController {
    constructor(private readonly gamesService: GamesService) {}
    @UseGuards(AuthGuard)
    @Get()
  getAllGames() {
       return this.gamesService.findAll();
    }
    @UseGuards(AuthGuard)
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

    @UseGuards(AuthGuard)
    @Post()
    create(@Body() data : any): string {
    this.gamesService.addGames(data);
    return 'added new game';
  }
    @UseGuards(AuthGuard)
    @Put(':id')
    updateGames(@Param('id') id: string, @Body() updateBoardgameDto: any) {
        this.gamesService.modifyGames(Number(id), updateBoardgameDto);
        return 'game modified';
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    deleteGames(@Param('id') id: string) {
        this.gamesService.deleteGames(Number(id));
        return 'game deleted';
    }
}


