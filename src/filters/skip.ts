/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {IterableFilter} from '../IterableTransform';
import empty from './empty';
import same from './same';

/**
 * An iterable filter that bypasses a specified number of elements in a sequence and then returns the remaining elements.
 */
export default function skip<T> (count: number): IterableFilter<T> {
	if(count<=0) return same;
	if(!isFinite(count)) return empty;
	return function* (sequence: Iterable<T>): Iterable<T> {
		let remain = count;
		for(const e of sequence)
		{
			if(0<remain--) continue;
			yield e;
		}
	};
}
