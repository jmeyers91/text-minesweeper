"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shuffle_1 = __importDefault(require("./shuffle"));
function sampleSize(values, count) {
    return shuffle_1.default(values).slice(0, count);
}
exports.default = sampleSize;
