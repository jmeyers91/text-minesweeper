import Minesweeper from './models/Minesweeper';

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

  let newPlayerX = playerX + x;
  let newPlayerY = playerY + y;

  if (newPlayerX >= width) {
    newPlayerX -= width;
  }
  if (newPlayerX < 0) {
    newPlayerX += width;
  }

  if (newPlayerY >= height) {
    newPlayerY -= height;
  }
  if (newPlayerY < 0) {
    newPlayerY += height;
  }

  return {
    ...game,
    playerX: newPlayerX,
    playerY: newPlayerY
  };
}
