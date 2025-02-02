/**
 * @packageDocumentation
 * @module filters
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import toArray from '../resolutions/toArray';

/**
 * Returns an array (copy) of all the elements of a sequence in reverse order.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
export default function reverse<T> (sequence: Iterable<T>): Iterable<T> {
	if(!sequence) throw new ArgumentNullException('sequence');
	return {
		* [Symbol.iterator] (): Iterator<T>
		{
			if(sequence instanceof Array)
			{
				const len = sequence.length;
				for(let i = len - 1; i>=0; i--)
				{
					if(len!==sequence.length) throw Error('Array length changed during iteration.');
					yield sequence[i];
				}
				return;
			}

			for(const e of toArray(sequence).reverse())
			{
				yield e;
			}
		}
	};
}
