import Options from './models/Options';
import Minesweeper from './models/Minesweeper';
import Cell from './models/Cell';
import getId from './getId';

export default function createGame(options: Options): Minesweeper {
  const { width, height } = options;
  const cells: Cell[][] = [];

  for (let y = 0; y < height; y++) {
    const row: Cell[] = [];
    for (let x = 0; x < width; x++) {
      const id = getId();
      const cell: Cell = {
        id,
        x,
        y,
        isMine: false,
        isOpen: false,
        isFlagged: false
      };
      row.push(cell);
    }
    cells.push(row);
  }

  return {
    id: getId(),
    options,
    cells,
    dead: false,
    win: false,
    playerX: Math.floor(width / 2),
    playerY: Math.floor(height / 2),
    minesPlaced: false,
    startTime: null,
    endTime: null
  };
}
