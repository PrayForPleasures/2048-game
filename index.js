import { Grid } from "./grid.js";
import { Tile } from "./tile.js";

const gameBoard = document.querySelector("#game-board");
const grid = new Grid(gameBoard);

grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));
grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));

setupInputOnce();

function setupInputOnce() {
	window.addEventListener("keydown", handleInput, { once: true });
}

function handleInput(e) {
	switch (e.key) {
		case "ArrowUp":
			moveUp();
			break;

		case "ArrowDown":
			break;

		case "ArrowRight":
			break;

		case "ArrowLeft":
			break;

		default:
			setupInputOnce();
			return;
	}
	setupInputOnce();
}

function moveUp() {
	slideTiles(grid.cellsGroupedByColumn);
}
