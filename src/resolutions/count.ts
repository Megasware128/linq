/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

/* eslint-disable @typescript-eslint/no-unused-vars */

import aggregate from './aggregate';

const a = aggregate((p, c) => p + 1, 0);

/**
 * Returns true if sequence is not empty.
 */
export default function count<T> (sequence: Iterable<T>): number {
	return sequence ? a(sequence) : 0;
}