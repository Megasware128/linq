"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
/**
 * Concatenates the sequences.
 */
function* merge(sequences) {
    if (!sequences)
        throw new ArgumentNullException_1.default('sequences');
    for (const s of sequences) {
        for (const e of s) {
            yield e;
        }
    }
}
exports.default = merge;
//# sourceMappingURL=merge.js.map