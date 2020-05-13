/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import ArgumentOutOfRangeException from '@tsdotnet/exceptions/dist/ArgumentOutOfRangeException';
import integer from '@tsdotnet/integer';
/**
 * Produces a function that returns the element at a specified index in a sequence.
 * @param {number} index
 * @returns A function that when passed a sequence of elements selects the specific element.
 */
export default function elementAt(index) {
    integer.assertZeroOrGreater(index);
    return function (sequence) {
        if (!sequence)
            throw new ArgumentNullException('sequence');
        let count = 0;
        for (const e of sequence) {
            if (index === count++)
                return e;
        }
        throw new ArgumentOutOfRangeException('index', index, 'Exceeds the total number of elements: ' + count);
    };
}
//# sourceMappingURL=elementAt.js.map