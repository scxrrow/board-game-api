import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BoardgameService } from './boardgame.service';
import { AppModule } from 'src/app.module';


@Controller('boardgame')
export class BoardgameController {
  constructor(private readonly boardgameService: BoardgameService) {}

  @Get()
  getAllBoardgames() {
       return this.boardgameService.findAll();
    }

    @Get(':id')
    getBoardgameById(@Param('id') id: String) {
        console.log("coucou from boardgame controller");
        console.log(id);
       return this.boardgameService.findOne(id);
    }

    @Post()
    createBoardgame(@Body() createBoardgameDto: any) {
        // Logic to create a new boardgame
    }

    @Put(' :id ')
    updateBoardgame(@Param('id') id: string, @Body() updateBoardgameDto: any) {
        // Logic to update an existing boardgame
    }

    @Delete(' :id ')
    deleteBoardgame(@Param('id') id: string) {
        // Logic to delete a boardgame
    }
}


