import { Cell } from "./cell";

const GRID_SIZE = 4;
const CELLS_COUNT = GRID_SIZE * GRID_SIZE;

export class Grid {
	constructor(gridElement) {
		this.cells = [];
		for (let i = 0; i < CELLS_COUNT; i++) {
			this.cells.push(
				new this.cells(gridElement, i % GRID_SIZE, Math.floor(i / GRID_SIZE))
			);
		}
	}

	getRandomEmptyCell() {
		const emptyCell = this.cells.filter((cell) => cell.isEmpty());
		const randomIndex = Math.floor(Math.random() * emptyCells.length);
		return emptyCells[randomIndex];
	}
}
