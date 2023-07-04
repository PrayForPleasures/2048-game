import { Grid } from "./grid";

const gameBoard = document.querySelector("#game-board");
const grid = new Grid(gameBoard);

grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));
