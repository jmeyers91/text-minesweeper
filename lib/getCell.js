"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCell(game, x, y) {
    const row = game.cells[y];
    if (!row) {
        return null;
    }
    return row[x] || null;
}
exports.default = getCell;
