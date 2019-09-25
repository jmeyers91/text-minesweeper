import Minesweeper from './models/Minesweeper';
import Cell from './models/Cell';

export default function getCell(
  game: Minesweeper,
  x: number,
  y: number
): Cell | null {
  const row = game.cells[y];
  if (!row) {
    return null;
  }
  return row[x] || null;
}
