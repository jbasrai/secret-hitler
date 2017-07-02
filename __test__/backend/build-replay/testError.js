import { List, Range } from 'immutable';
import { fromNullable, some, none } from 'option';
import buildReplay from '../../../src/frontend-scripts/replay/buildReplay';
import buildEnhancedGameSummary from '../../../models/game-summary/buildEnhancedGameSummary';
import { error } from '../../mocks';

export default () => {
    it('builds a replay without failing', () => {
        const game = buildEnhancedGameSummary(error);
        const replay = buildReplay(game);
        expect(true).toBe(true);
    });
};
