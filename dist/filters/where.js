"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An iterable filter that only returns elements that match the provided predicate.
 */
function where(predicate) {
    return function* (sequence) {
        let i = 0;
        for (const e of sequence) {
            if (predicate(e, i++))
                yield e;
        }
    };
}
exports.default = where;
//# sourceMappingURL=where.js.map