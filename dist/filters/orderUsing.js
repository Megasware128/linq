"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
const toArray_1 = tslib_1.__importDefault(require("../resolutions/toArray"));
/**
 * Orders elements by use of a comparison function.
 * @param {Comparison} comparison The function to decide if elements are greater, lesser or equal.
 * @param {Order} order Default is ascending.
 * @return {IterableFilter}
 */
function orderUsing(comparison, order = 1 /* Ascending */) {
    if (!comparison)
        throw new ArgumentNullException_1.default('comparison');
    return function* (sequence) {
        for (const e of toArray_1.default(sequence).sort(order == -1 /* Descending */
            ? ((a, b) => comparison(a, b) * -1)
            : comparison)) {
            yield e;
        }
    };
}
exports.default = orderUsing;
//# sourceMappingURL=orderUsing.js.map