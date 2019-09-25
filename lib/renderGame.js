"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getNeighborMines_1 = __importDefault(require("./getNeighborMines"));
function renderGame(game) {
    const { cells, playerX, playerY, startTime, options } = game;
    const toWrite = [];
    for (const row of cells) {
        for (const cell of row) {
            if (cell.x === playerX && cell.y === playerY) {
                if (game.dead) {
                    toWrite.push(' X ');
                }
                else {
                    toWrite.push(' O ');
                }
            }
            else if (cell.isOpen || game.dead || game.win) {
                if (cell.isMine) {
                    toWrite.push(' * ');
                }
                else {
                    const neighborMineCount = getNeighborMines_1.default(game, cell).length;
                    if (neighborMineCount > 0) {
                        toWrite.push(` ${neighborMineCount} `);
                    }
                    else {
                        toWrite.push('   ');
                    }
                }
            }
            else {
                toWrite.push('\u2587\u2587\u2587');
            }
        }
        toWrite.push('\n');
    }
    if (startTime) {
        const elapsed = (game.endTime || Date.now()) - startTime;
        const seconds = (elapsed / 1000).toFixed(2);
        toWrite.push('\n' + seconds);
    }
    if (game.win) {
        toWrite.push(' Win');
    }
    if (game.dead) {
        toWrite.push(' Dead');
    }
    process.stdout.write('\x1b[2J\x1b[0f' + toWrite.join(''));
}
exports.default = renderGame;
