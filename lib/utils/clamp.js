"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function clamp(n, min, max) {
    if (n > max) {
        return max;
    }
    if (n < min) {
        return min;
    }
    return n;
}
exports.default = clamp;
