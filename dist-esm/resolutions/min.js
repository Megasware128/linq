/**
 * @packageDocumentation
 * @module resolutions
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import InvalidOperationException from '@tsdotnet/exceptions/dist/InvalidOperationException';
/**
 * Returns the entry in the sequence that has the lowest/least value.
 * @param {Iterable<T>} sequence
 * @return {T}
 */
export default function min(sequence) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    const i = sequence[Symbol.iterator]();
    let n = i.next();
    if (n.done)
        throw new InvalidOperationException('Sequence is empty.  Use defaultIfEmpty to ensure a default value.');
    let min = n.value;
    while (!(n = i.next()).done) {
        if (n.value < min)
            min = n.value;
    }
    return min;
}
//# sourceMappingURL=min.js.map