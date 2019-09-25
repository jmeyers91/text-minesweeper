import Minesweeper from './models/Minesweeper';
import Cell from './models/Cell';
import getNeighbors from './getNeighbors';

export default function getNeighborMines(
  game: Minesweeper,
  cell: Cell
): Cell[] {
  return getNeighbors(game, cell).filter(cell => cell.isMine);
}
