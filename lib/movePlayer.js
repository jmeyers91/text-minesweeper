"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clamp_1 = __importDefault(require("./utils/clamp"));
function movePlayer(game, x, y) {
    if (game.dead || game.win) {
        return game;
    }
    const { playerX, playerY } = game;
    const { width, height } = game.options;
    const newPlayerX = clamp_1.default(playerX + x, 0, width - 1);
    const newPlayerY = clamp_1.default(playerY + y, 0, height - 1);
    return {
        ...game,
        playerX: newPlayerX,
        playerY: newPlayerY
    };
}
exports.default = movePlayer;
