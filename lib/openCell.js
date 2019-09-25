"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const replaceWhere_1 = __importDefault(require("./utils/replaceWhere"));
const getRevealCells_1 = __importDefault(require("./getRevealCells"));
function openCell(game, x, y) {
    if (game.dead || game.win) {
        return game;
    }
    const toReveal = new Set(getRevealCells_1.default(game, x, y));
    const newCells = game.cells.map(row => replaceWhere_1.default(row, other => toReveal.has(other.id), other => ({ ...other, isOpen: true })));
    const allNewCells = newCells.flat();
    const dead = allNewCells.some(cell => cell.isMine && cell.isOpen);
    const win = !dead &&
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
exports.default = openCell;
