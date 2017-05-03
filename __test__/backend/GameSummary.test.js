import GameSummary from '../../models/GameSummary';

describe('Game summary', () => {
	let gs;

	it('should initialize correctly', () => {
		gs = new GameSummary(
			'devgame',
			new Date(),
			[ 'liberal', 'fascist', 'liberal', 'fascist', 'liberal' ]
		);

		const s = gs.publish();

		expect(s.uid).toBeDefined();
		expect(s.date).toBeDefined();
		expect(s.players).toHaveLength(5);
		expect(s.logs).toHaveLength(0);
	});

	it('should append a new log on next turn', () => {
		gs = gs.nextTurn();
		const s = gs.publish();

		expect(s.logs).toHaveLength(1);
	});

	it('should update log', () => {
		gs = gs.updateLog({ presidentId: 0 });

		const
			s = gs.publish(),
			firstPresidentId = s.logs[0].presidentId;

		expect(firstPresidentId).toBe(0);
	});
});