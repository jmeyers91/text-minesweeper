import Minesweeper from './models/Minesweeper';
import getCell from './getCell';
import getNeighbors from './getNeighbors';

export default function getRevealCells(
  game: Minesweeper,
  x: number,
  y: number,
  visited: Set<string> = new Set()
): string[] {
  let toReveal = [];
  const cell = getCell(game, x, y);

  if (!cell) {
    return [];
  }

  toReveal.push(cell.id);
  visited.add(cell.id);

  if (!cell.isMine) {
    const neighbors = getNeighbors(game, cell);
    if (!neighbors.some(neighbor => neighbor.isMine)) {
      for (const neighbor of neighbors) {
        if (!neighbor.isMine && !visited.has(neighbor.id)) {
          toReveal.push(
            cell.id,
            ...getRevealCells(game, neighbor.x, neighbor.y, visited)
          );
        }
      }
    }
  }

  return toReveal;
}
