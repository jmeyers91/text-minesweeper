import Minesweeper from './models/Minesweeper';
import sampleSize from './utils/sampleSize';
import replaceWhere from './utils/replaceWhere';

export default function placeMines(
  game: Minesweeper,
  avoidX: number,
  avoidY: number
): Minesweeper {
  const { mineCount } = game.options;
  const availableCells = game.cells
    .flat()
    .filter(cell => cell.x !== avoidX || cell.y !== avoidY);

  const mineCellIds = new Set(
    sampleSize(availableCells, mineCount).map(cell => cell.id)
  );

  const newCells = game.cells.map(row =>
    replaceWhere(
      row,
      cell => mineCellIds.has(cell.id),
      cell => ({ ...cell, isMine: true })
    )
  );

  return {
    ...game,
    minesPlaced: true,
    cells: newCells,
    startTime: Date.now()
  };
}
