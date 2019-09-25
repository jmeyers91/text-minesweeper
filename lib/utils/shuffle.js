"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function shuffle(values) {
    let m = values.length;
    let t;
    let i;
    while (m) {
        i = Math.floor(Math.random() * m);
        m -= 1;
        t = values[m];
        values[m] = values[i];
        values[i] = t;
    }
    return values;
}
exports.default = shuffle;
