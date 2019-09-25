"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getId_1 = __importDefault(require("./getId"));
function createGame(options) {
    const { width, height } = options;
    const cells = [];
    for (let y = 0; y < height; y++) {
        const row = [];
        for (let x = 0; x < width; x++) {
            const id = getId_1.default();
            const cell = {
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
        id: getId_1.default(),
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
exports.default = createGame;
