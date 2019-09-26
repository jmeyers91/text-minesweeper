import Minesweeper from './models/Minesweeper';
import getCell from './getCell';
import replaceWhere from './utils/replaceWhere';

export default function flagCell(
  game: Minesweeper,
  x: number,
  y: number
): Minesweeper {
  const cell = getCell(game, x, y);
  if (!cell) {
    return game;
  }

  if (cell.isOpen) {
    return game;
  }

  const newCells = game.cells.map(row =>
    replaceWhere(
      row,
      other => other.id === cell.id,
      other => ({ ...other, isFlagged: !other.isFlagged })
    )
  );

  return {
    ...game,
    cells: newCells
  };
}
