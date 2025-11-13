  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Boardgame API wuth authentication

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```
## Authentication

You need to be authenticated to acces all the functions below.

Post : http://localhost:3000/auth/login

the only user is "marcel" with "azerty" as password. You have to put it in the body as 
{
  "username": "marcel",
  "password": "azerty"
}

then retrieve the JWT, and use it for every function. You are authenticated !!

## Function

server is on http://localhost:3000/

GET : http://localhost:3000/games to acces the all games list

GET : http://localhost:3000/games/[id] to acces a game via its id

POST : http://localhost:3000/games/
add a body that should be like the game class, here's an example : 
{
  id: number;
  name: string;
  published_at: string;
  min_players: number | string;
  max_players: number | string;
  duration: number | string;
  age_min: number;
}

PUT : http://localhost:3000/games/[id] you can modify var of a game. body should iclude at least one the var of the game class

DELETE : http://localhost:3000/games/[id] delete the game with the param id
