const debug = require('debug')('game');

class GameSummary {

	constructor(uid, date, players, logs = []) {
		this.uid = uid;
		this.date = date;
		this.players = players;
		this.logs = logs;

		debug('%O', { uid, date, players, logs });
	}

	publish() {
		const { uid, date, players, logs } = this;
		return { uid, date, players, logs };
	}

	updateLog(update) {
		const
			init = this.logs.slice(0, -1),
			last = this.logs.slice(-1)[0],
			log = Object.assign({}, last, update),
			nextLogs = init.concat(log);

		return new GameSummary(this.uid, this.date, this.players, nextLogs);
	}

	nextTurn() {
		return new GameSummary(this.uid, this.date, this.players, this.logs.concat({}));
	}

}

module.exports = GameSummary;