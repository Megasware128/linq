"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A iterable filter that returns the elements of the specified sequence or the specified value in a collection if the sequence is empty.
 */
function defaultIfEmpty(defaultValue) {
    return function* (sequence) {
        let hasElements = false;
        for (const e of sequence) {
            hasElements = true;
            yield e;
        }
        if (!hasElements)
            yield defaultValue;
    };
}
exports.default = defaultIfEmpty;
//# sourceMappingURL=defaultIfEmpty.js.map