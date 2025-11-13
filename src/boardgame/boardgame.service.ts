import { Injectable } from '@nestjs/common';
import {bgg} from './bgg_dataset.json';

@Injectable()
export class BoardgameService {
    boardgame;
    constructor() {
        this.boardgame = bgg;
        console.log("coucou from boardgame service");
        console.log(this.boardgame[0]);

    }
    findAll() {
        return this.boardgame;
    }

    findOne(id: String): String {
        return this.boardgame.find(boardgame => boardgame.name === id);
    }


    addBoardgame(boardgame) {
        this.boardgame.push(boardgame);
        return boardgame;
    }
}
