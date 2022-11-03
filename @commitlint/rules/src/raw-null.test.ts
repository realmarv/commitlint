import parse from '@commitlint/parse';
import {rawNull} from './raw-null'
// import {bodyEmpty} from './body-empty';

const messages = {
    revert: 'Revert "foo: some commit title"\n\n' + 
            'This reverts commit 0272f587c7eece147e8d1756116b0b43e11c34ac.'
};

const parsed = {
	revert: parse(messages.revert),
};

test('with revert commit title should fail for null raw', async () => {
	const [actual] = rawNull(await parsed.revert);
	const expected = false;
	expect(actual).toEqual(expected);
});
