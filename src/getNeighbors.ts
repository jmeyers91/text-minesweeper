import Minesweeper from './models/Minesweeper';
import Cell from './models/Cell';
import getCell from './getCell';

export default function getNeighbors(game: Minesweeper, cell: Cell): Cell[] {
  const neighbors: Cell[] = [];
  const { x, y } = cell;

  const topLeft = getCell(game, x - 1, y - 1);
  const top = getCell(game, x, y - 1);
  const topRight = getCell(game, x + 1, y - 1);
  const left = getCell(game, x - 1, y);
  const right = getCell(game, x + 1, y);
  const bottomLeft = getCell(game, x - 1, y + 1);
  const bottom = getCell(game, x, y + 1);
  const bottomRight = getCell(game, x + 1, y + 1);

  if (topLeft) {
    neighbors.push(topLeft);
  }
  if (top) {
    neighbors.push(top);
  }
  if (topRight) {
    neighbors.push(topRight);
  }
  if (left) {
    neighbors.push(left);
  }
  if (right) {
    neighbors.push(right);
  }
  if (bottomLeft) {
    neighbors.push(bottomLeft);
  }
  if (bottom) {
    neighbors.push(bottom);
  }
  if (bottomRight) {
    neighbors.push(bottomRight);
  }

  return neighbors;
}
