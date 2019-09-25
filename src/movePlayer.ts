import Minesweeper from './models/Minesweeper';
import clamp from './utils/clamp';

export default function movePlayer(
  game: Minesweeper,
  x: number,
  y: number
): Minesweeper {
  if (game.dead || game.win) {
    return game;
  }
  const { playerX, playerY } = game;
  const { width, height } = game.options;

  const newPlayerX = clamp(playerX + x, 0, width - 1);
  const newPlayerY = clamp(playerY + y, 0, height - 1);

  return {
    ...game,
    playerX: newPlayerX,
    playerY: newPlayerY
  };
}
