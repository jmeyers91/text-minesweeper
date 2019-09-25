#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controls_1 = __importDefault(require("./Controls"));
const createGame_1 = __importDefault(require("./createGame"));
const renderGame_1 = __importDefault(require("./renderGame"));
const movePlayer_1 = __importDefault(require("./movePlayer"));
const placeMines_1 = __importDefault(require("./placeMines"));
const openCell_1 = __importDefault(require("./openCell"));
const width = (process.argv[2] && parseInt(process.argv[2], 10)) || 30;
const height = (process.argv[3] && parseInt(process.argv[3], 10)) || 30;
const mineCount = (process.argv[4] && parseInt(process.argv[4], 10)) || width * 2;
if (Number.isNaN(width)) {
    console.log(`Invalid width: ${process.argv[2]}`);
    process.exit(1);
}
if (Number.isNaN(height)) {
    console.log(`Invalid height: ${process.argv[3]}`);
    process.exit(1);
}
if (Number.isNaN(mineCount)) {
    console.log(`Invalid mine count: ${process.argv[4]}`);
    process.exit(1);
}
function startGame() {
    let game = createGame_1.default({
        width,
        height,
        mineCount
    });
    const controls = new Controls_1.default();
    controls.on('up', () => {
        game = movePlayer_1.default(game, 0, -1);
        renderGame_1.default(game);
    });
    controls.on('down', () => {
        game = movePlayer_1.default(game, 0, 1);
        renderGame_1.default(game);
    });
    controls.on('left', () => {
        game = movePlayer_1.default(game, -1, 0);
        renderGame_1.default(game);
    });
    controls.on('right', () => {
        game = movePlayer_1.default(game, 1, 0);
        renderGame_1.default(game);
    });
    controls.on('open', () => {
        const { playerX, playerY } = game;
        if (!game.minesPlaced) {
            game = placeMines_1.default(game, playerX, playerY);
        }
        game = openCell_1.default(game, playerX, playerY);
        renderGame_1.default(game);
    });
    controls.on('restart', () => {
        game = createGame_1.default({ width, height, mineCount });
        renderGame_1.default(game);
    });
    controls.on('quit', () => process.exit());
    renderGame_1.default(game);
}
startGame();
