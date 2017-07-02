import '../../matchers';
import testGenericGame from './testGenericGame';
import testVeto from './testVeto';
import testVeto2 from './testVeto2';
import testError from './testError';

describe('ReplayBuilder', () => {
	testGenericGame();
	testVeto();
	testVeto2();
    testError();
});
