import { Injectable } from '@nestjs/common';
import {bgg} from './bgg_dataset.json';
import { Game } from './games.entities';

@Injectable()
export class GamesService {
    games : Game[] = [] ;
    constructor() {
        this.games = bgg;
        console.log("coucou from boardgame service");
        console.log(this.games[0]);

    }
    findAll() {
        return this.games;
    }

    findOne(id: number): Game {
        return this.games.find(games => games.id === Number(id));
    }


    addGames(data : any): Game {
        const game = new Game({
            id: this.games.length + 1,
            name : data.name,
            published_at : data.published_at,
            min_players : data.min_players,
        });
       
        this.games.push(game);
        return game;
    }
}