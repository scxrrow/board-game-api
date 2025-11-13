import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppModule } from 'src/app.module';


@Controller('boardgame')
export class BoardgameController {
    @Get()
    getAllBoardgames() {

    }

    @Get(' :id ')
    getBoardgameById(@Param('id') id: string) {
       
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


