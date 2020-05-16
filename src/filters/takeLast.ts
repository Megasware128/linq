/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import Queue from '@tsdotnet/queue';
import empty from '../iterables/empty';
import {IterableFilter} from '../IterableTransform';
import same from './same';

/**
 * An iterable filter that returns a specified number of contiguous elements from the start of a sequence.
 * @param {number} count
 * @return {IterableFilter<T>}
 */
export default function takeLast<T> (count: number): IterableFilter<T> {
	if(count<=0) return empty;
	if(!isFinite(count)) return same;
	return function(sequence: Iterable<T>): Iterable<T> {
		return {
			* [Symbol.iterator] (): Iterator<T>
			{
				if(sequence instanceof Array)
				{
					const len = sequence.length;
					for(let i = Math.max(0, len - count); i<len; i++)
					{
						if(len!==sequence.length) throw Error('Array length changed during iteration.');
						yield sequence[i];
					}
					return;
				}

				const q = new Queue<T>();
				for(const e of sequence)
				{
					q.enqueue(e);
					if(q.count>count) q.dequeue(true);
				}
				for(const e of q.consumer()) yield e;
			}
		};
	};
}
