"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sampleSize_1 = __importDefault(require("./utils/sampleSize"));
const replaceWhere_1 = __importDefault(require("./utils/replaceWhere"));
function placeMines(game, avoidX, avoidY) {
    const { mineCount } = game.options;
    const availableCells = game.cells
        .flat()
        .filter(cell => cell.x !== avoidX || cell.y !== avoidY);
    const mineCellIds = new Set(sampleSize_1.default(availableCells, mineCount).map(cell => cell.id));
    const newCells = game.cells.map(row => replaceWhere_1.default(row, cell => mineCellIds.has(cell.id), cell => ({ ...cell, isMine: true })));
    return {
        ...game,
        minesPlaced: true,
        cells: newCells,
        startTime: Date.now()
    };
}
exports.default = placeMines;
