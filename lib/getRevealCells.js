"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getCell_1 = __importDefault(require("./getCell"));
const getNeighbors_1 = __importDefault(require("./getNeighbors"));
function getRevealCells(game, x, y, visited = new Set()) {
    let toReveal = [];
    const cell = getCell_1.default(game, x, y);
    if (!cell) {
        return [];
    }
    toReveal.push(cell.id);
    visited.add(cell.id);
    if (!cell.isMine) {
        const neighbors = getNeighbors_1.default(game, cell);
        if (!neighbors.some(neighbor => neighbor.isMine)) {
            for (const neighbor of neighbors) {
                if (!neighbor.isMine && !visited.has(neighbor.id)) {
                    toReveal.push(cell.id, ...getRevealCells(game, neighbor.x, neighbor.y, visited));
                }
            }
        }
    }
    return toReveal;
}
exports.default = getRevealCells;
