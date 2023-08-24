"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eqSet = void 0;
function eqSet(xs, ys) {
    return xs.size === ys.size && Array.from(xs).every(function (x) { return ys.has(x); });
}
exports.eqSet = eqSet;
