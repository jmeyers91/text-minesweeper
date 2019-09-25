import Cell from './Cell';
import Options from './Options';

export default interface Minesweeper {
  id: string;
  options: Options;
  cells: Cell[][];
  dead: boolean;
  win: boolean;
  playerX: number;
  playerY: number;
  minesPlaced: boolean;
  startTime: number | null;
  endTime: number | null;
}
