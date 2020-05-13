/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {expect} from 'chai';
import take from '../../src/filters/take';
import where from '../../src/filters/where';
import repeatSequence from '../../src/iterables/repeatSequence';

describe('where(predicate)', () => {
	const max = 10;
	const total = 100;
	it('should filter results', () => {
		const value = 'y';
		let count = 0;
		for(const e of where(v => v==value)(take(max)(repeatSequence(['x', 'y', 'z'], total))))
		{
			count++;
			expect(e).equal(value);
		}
		expect(count).equal(3);
	});
});