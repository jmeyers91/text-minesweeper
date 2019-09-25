"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let idCounter = 0;
function getId() {
    idCounter += 1;
    return idCounter + '_' + Date.now();
}
exports.default = getId;
