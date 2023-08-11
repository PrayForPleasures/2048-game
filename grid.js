import { Cell } from "./cell.js";

const GRID_SIZE = 4;
const CELLS_COUNT = GRID_SIZE * GRID_SIZE;

export class Grid {
	constructor(gridElement) {
		this.cells = [];
		for (let i = 0; i < CELLS_COUNT; i++) {
			this.cells.push(
				new Cell(gridElement, i % GRID_SIZE, Math.floor(i / GRID_SIZE))
			);
		}

		this.cellsGroupedByColumn = this.groupeCellsByColumn();
		this.cellsGroupedByReverseColumn = this.groupeCellsByColumn().map(
			(column) => [...column].reverse()
		);
		this.cellsGroupedByRow = this.groupeCellsByRow();
		this.cellsGroupedByReverseRow = this.groupeCellsByRow().map((row) =>
			[...row].reverse()
		);
	}

	getRandomEmptyCell() {
		const emptyCells = this.cells.filter((cell) => cell.isEmpty());
		const randomIndex = Math.floor(Math.random() * emptyCells.length);
		return emptyCells[randomIndex];
	}

	groupeCellsByColumn() {
		return this.cells.reduce((groupedCells, cell) => {
			groupedCells[cell.x] = groupedCells[cell.x] || [];
			groupedCells[cell.x][cell.y] = cell;
			return groupedCells;
		}, []);
	}

	groupeCellsByRow() {
		return this.cells.reduce((groupedCells, cell) => {
			groupedCells[cell.y] = groupedCells[cell.y] || [];
			groupedCells[cell.y][cell.x] = cell;
			return groupedCells;
		}, []);
	}
}
