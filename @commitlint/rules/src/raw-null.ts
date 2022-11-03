// import * as ensure from '@commitlint/ensure';
import message from '@commitlint/message';
import {SyncRule} from '@commitlint/types';

export const rawNull: SyncRule = (parsed: any, when = 'always') => {
	const negated = when === 'never';
	// const notNull = ensure.notNull(parsed.body || '');
	console.log('HERE raw ======> ' + parsed.raw)
	console.log('HERE body ======> ' + parsed.body)
	const notNull = parsed.raw !== null

	return [
		negated ? notNull : !notNull,
		message(['raw', negated ? 'may not' : 'must', 'be null']),
	];
};
