import { Injectable } from '@nestjs/common';
import {bgg} from './bgg_dataset.json';
import { Game } from './games.entities';
import { find } from 'rxjs';

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

    modifyGames(id: number, data: any): Game {
        const game = this.findOne(id);
        if (data.name){
            game.name = data.name;
        }
        if (data.published_at){
            game.published_at = data.published_at;
        }
        if (data.min_players){
            game.min_players = data.min_players;
        }
        if (data.max_players){
            game.max_players = data.max_players;
        }
        if (data.duration){
            game.duration = data.duration;
        }
        if (data.age_min){
            game.age_min = data.age_min;
        }
        const index = this.games.findIndex(g => g.id === id);
        if (index !== -1) {
            this.games[index] = game;
        }
        return game;
    }
    
}