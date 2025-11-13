import { Injectable } from '@nestjs/common';
import {bgg} from './bgg_dataset.json';

@Injectable()
export class BoardgameService {
    boardgame;
    constructor() {
        this.boardgame = bgg;
        console.log("coucou from boardgame service");
        console.log(this.boardgame.length);
    }
}
