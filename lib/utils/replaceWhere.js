"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function replaceWhere(array, predicate, replace) {
    return array.map(value => (predicate(value) ? replace(value) : value));
}
exports.default = replaceWhere;
