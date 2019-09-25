import Minesweeper from './models/Minesweeper';
import replaceWhere from './utils/replaceWhere';
import getRevealCells from './getRevealCells';

export default function openCell(
  game: Minesweeper,
  x: number,
  y: number
): Minesweeper {
  if (game.dead || game.win) {
    return game;
  }
  const toReveal = new Set(getRevealCells(game, x, y));
  const newCells = game.cells.map(row =>
    replaceWhere(
      row,
      other => toReveal.has(other.id),
      other => ({ ...other, isOpen: true })
    )
  );

  const allNewCells = newCells.flat();
  const dead = allNewCells.some(cell => cell.isMine && cell.isOpen);
  const win =
    !dead &&
    allNewCells.filter(cell => !cell.isMine).every(cell => cell.isOpen);
  const endTime = dead || win ? Date.now() : null;

  return {
    ...game,
    dead,
    win,
    endTime,
    cells: newCells
  };
}
