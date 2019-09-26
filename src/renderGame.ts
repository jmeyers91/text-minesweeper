import chalk from 'chalk';
import Minesweeper from './models/Minesweeper';
import getNeighborMines from './getNeighborMines';

function noColor(s: string): string {
  return s;
}

export default function renderGame(game: Minesweeper) {
  const { cells, playerX, playerY, startTime, options } = game;
  const toWrite: string[] = [];

  for (const row of cells) {
    for (const cell of row) {
      const isPlayer = cell.x === playerX && cell.y === playerY;
      if (cell.isOpen || game.dead || game.win) {
        if (cell.isMine) {
          toWrite.push(' * ');
        } else {
          const neighborMineCount = getNeighborMines(game, cell).length;
          if (neighborMineCount > 0) {
            const text = ` ${neighborMineCount} `;

            toWrite.push(isPlayer ? chalk.blue.inverse(text) : text);
          } else {
            toWrite.push(isPlayer ? chalk.blue.inverse('   ') : '   ');
          }
        }
      } else if (cell.isFlagged) {
        toWrite.push(
          isPlayer ? chalk.blue.inverse(' F ') : chalk.white.inverse(' F ')
        );
      } else {
        toWrite.push(
          isPlayer ? chalk.blue.inverse('   ') : chalk.white.inverse('   ')
        );
      }
    }
    toWrite.push('\n');
  }

  if (startTime) {
    const elapsed = (game.endTime || Date.now()) - startTime;
    const seconds = (elapsed / 1000).toFixed(2);
    const { mineCount } = game.options;
    const flaggedCount = game.cells.flat().reduce((count, cell) => {
      if (cell.isFlagged) {
        return count + 1;
      }
      return count;
    }, 0);
    toWrite.push(seconds, `      ${flaggedCount} / ${mineCount}`);
  }

  if (game.win) {
    toWrite.push(' Win');
  } else if (game.dead) {
    toWrite.push(' Dead');
  }

  process.stdout.write('\x1b[2J\x1b[0f' + toWrite.join(''));
}
