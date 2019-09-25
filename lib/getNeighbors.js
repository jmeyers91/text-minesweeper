"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getCell_1 = __importDefault(require("./getCell"));
function getNeighbors(game, cell) {
    const neighbors = [];
    const { x, y } = cell;
    const topLeft = getCell_1.default(game, x - 1, y - 1);
    const top = getCell_1.default(game, x, y - 1);
    const topRight = getCell_1.default(game, x + 1, y - 1);
    const left = getCell_1.default(game, x - 1, y);
    const right = getCell_1.default(game, x + 1, y);
    const bottomLeft = getCell_1.default(game, x - 1, y + 1);
    const bottom = getCell_1.default(game, x, y + 1);
    const bottomRight = getCell_1.default(game, x + 1, y + 1);
    if (topLeft) {
        neighbors.push(topLeft);
    }
    if (top) {
        neighbors.push(top);
    }
    if (topRight) {
        neighbors.push(topRight);
    }
    if (left) {
        neighbors.push(left);
    }
    if (right) {
        neighbors.push(right);
    }
    if (bottomLeft) {
        neighbors.push(bottomLeft);
    }
    if (bottom) {
        neighbors.push(bottom);
    }
    if (bottomRight) {
        neighbors.push(bottomRight);
    }
    return neighbors;
}
exports.default = getNeighbors;
