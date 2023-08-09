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
			console.log("up");
			break;

		case "ArrowDown":
			moveDown();
			console.log("down");
			break;

		case "ArrowRight":
			console.log("right");
			break;

		case "ArrowLeft":
			console.log("left");
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

function moveDown() {
	slideTiles(grid.cellsGroupedByReverseColumn);
}

function slideTiles(groupedCells) {
	groupedCells.forEach((group) => slideTilesInGroup(group));

	grid.cells.forEach((cell) => {
		cell.hasTileForMerge() && cell.mergeTiles();
	});
}

function slideTilesInGroup(group) {
	for (let i = 1; i < group.length; i++) {
		if (group[i].isEmpty()) {
			continue;
		}

		const cellWithTile = group[i];

		let targetCell;
		let j = i - 1;
		while (j >= 0 && group[j].canAccept(cellWithTile.linkedTile)) {
			targetCell = group[j];
			j--;
		}

		if (!targetCell) {
			continue;
		}

		if (targetCell.isEmpty()) {
			targetCell.linkTile(cellWithTile.linkedTile);
		} else {
			targetCell.linkTileForMerge(cellWithTile.linkedTile);
		}

		cellWithTile.unlinkTile();
	}
}
