import React from 'react'; // eslint-disable-line
import PropTypes from 'prop-types';

const Changelog = props =>
	<section className="changelog">
		<i
			className="remove icon"
			onClick={() => {
				props.onLeaveChangelog('default');
			}}
		/>
		<div className="ui header">
			<h2>Changelog</h2>
		</div>
		<div className="ui header">
			<p>Version 0.7.2 "black3" released 8-10-2017</p>
		</div>
		<ul>
			<li>
				New game setting: disable player cardbacks. For those who find them
				distracting.
			</li>
			<li>
				New game setting: application width slider. Prefer the old (or custom)
				width of the application? Move this slider as desired.
			</li>
			<li>
				Bug fix: winning players can now click leave game as before. Sorry about
				that!
			</li>
			<li>New mods: snake69sus & Ecoturtle</li>
		</ul>
		<div className="ui header">
			<p>Version 0.7.1 "black2" released 8-10-2017</p>
		</div>
		<ul>
			<li>
				Players that have a custom cardback now correctly shows the red X when
				dead.
			</li>
			<li>General chat width is now working correctly.</li>
		</ul>
		<div className="ui header">
			<p>Version 0.7.0 "black" released 8-7-2017</p>
		</div>
		<h3>New feature: player uploaded custom cardbacks!</h3>
		<p>
			In the settings view (cog icon in upper right), players now have the
			option to upload a new cardback that will be shown in-game. The details
			are:
		</p>
		<ul>
			<li>
				<strong>
					Image uploaded must be 70px by 95px, or it will not look right. Do not
					trust the previewer - it will crunch to fit the box, the game itself
					won't do that.
				</strong>
			</li>
			<li>Rainbow players only.</li>
			<li>
				For today only, you can upload an image every 30 seconds. Then it will
				be limited to once upload an image once per 18 hours. Be careful before
				hitting save.
			</li>
			<li>Only png, jpg, and jpeg are permitted. Must be below 40kb.</li>
			<li>
				<strong>
					No NSFW images, nazi anything, or images from the site itself to be
					tricky.
				</strong>{' '}
				The terms of service page has been updated.
			</li>
		</ul>
		<h3>New feature: better support for large width monitors.</h3>
		<p>
			The application is no longer fixed width, and will stretch to fit the
			entire screen. Chat boxes will take up the remaining space. I recommend
			turning "show right sidebar in game" on.
		</p>
		<h3>New feature: enhanced moderator actions</h3>
		<p>
			Mods can now delete users, set wins and losses, and delete cardbacks. Also
			they can now type in player names to affect offline players. Lets hope
			they're not fascists.
		</p>
		<p>Other stuff:</p>
		<ul>
			<li>The "chat a blank line" bug was fixed.</li>
			<li>Observer count was removed as it never worked right anyways.</li>
			<li>Moderators can chat in observer chat in private games.</li>
		</ul>
		<div className="ui header">
			<p>Version 0.6.6 "tuotuc" released 8-2-2017</p>
		</div>
		<h3>
			Small patch to fix a bug that could be used to crash the server thanks to
			player veggiemanz who now has a shiny orange name. Also these things:
		</h3>
		<ul>
			<li>
				Shuffling of the deck when its less than 3 should now happen before any
				election, as per the rules. This will prevent the "nein all" problem
				when there's few policies left.
			</li>
			<li>
				As you probably saw, there is a notice on the sign in/sign up modals to
				use Chrome or Firefox for the best experience.
			</li>
			<li>
				Fascists who investigate hitler will not have hitler's name change to
				fascist color.
			</li>
			<li>Hid the cardback section on settings as that is work in progress.</li>
			<li>
				Gamelist sort should be better and no longer bounce around as much.
			</li>
			<li>
				Confetti should no longer prevent the winners from being able to type in
				chat while its raining down.
			</li>
			<li>A fix to chancellor discards not showing up in replays.</li>
		</ul>
		<div className="ui header">
			<p>Version 0.6.0 "noise" released 6-12-2017</p>
		</div>
		<h3>New feature: Player profiles</h3>
		<p>
			Click on a player in the lobby/player list to get detailed information
			about games they've played. You can access your own stats that way, or
			through the game settings screen ("gear" icon in upper right corner).
		</p>
		<div style={{ textAlign: 'center' }}>
			<img src="images/profile.png" style={{ width: '90%' }} />
		</div>
		<p>
			A big change to the back end, and will allow for some more interesting
			features (like game replays) and analysis in the future.
		</p>
		<p>
			This is an epoch event, meaning that only games from here on out will be
			seen in your profile.
		</p>
		<h3>New feature: notification for patch notes</h3>
		<p>
			As you've probably seen, the lizard image in the middle will glow until
			you click it, showing this changelog.
		</p>
		<p>Both features courtesy of contributor jbasrai.</p>
		<h4>Please welcome new moderators Jazz and Max.</h4>
		<div className="ui header">
			<p>Version 0.5.0 "glow" released 6-10-2017</p>
		</div>
		<h3>New feature: Player moderation</h3>
		<p>
			Some players have volunteered to be moderators. They are empowered to have
			the ability to ban non-rainbow players for griefing and trolling, and to
			check for cheating. Hopefully this (and some more advanced powers from
			admins) will be a permanent solution to problems that may come up.
			Moderators will have a red (M) next to their names.
		</p>
		<h4>Other updates</h4>
		<ul>
			<li>
				A fix to the rainbow game icon on the gamelist only being there for
				games that haven't started yet.
			</li>
			<li>
				A fix (finally) to dead players being able to chat by leaving the game
				and coming back.
			</li>
			<li>
				A 3 second delay has been implemented between the inactment of a policy
				by the chancellor, and the ability for the government to make a claim
				(for non-experienced games only). This should change game play a lot I
				think..
			</li>
			<li>
				Various tooltips have been added to some items and will continue to be
				addded in the future.
			</li>
			<li>
				A fix to rainbow losses also adding to normal losses, but not the other
				way around. I'll see if there's a way to credit those.
			</li>
			<li>
				Contribution by player sethe: a fix to the (relatively rare) problem of
				the election tracker not working right with vetos and neins.
			</li>
		</ul>
		<p>
			Up next: player profiles. This is just about ready to go and will be
			released within the next 2 days.
		</p>
		<div className="ui header">
			<p>Version 0.4.0 "chestnut" released 6-5-2017</p>
		</div>
		<h3>New feature: Rainbow games.</h3>
		<p>
			While creating a game, players with more than 50 completed games ("rainbow
			players") will now be able to create games that only other rainbow players
			can be seated in. These games have a special symbol in the sidebar.
		</p>
		<div style={{ textAlign: 'center' }}>
			<img src="images/gamelist-rainbow.png" />
		</div>
		<p>
			In the lobby, a new icon appears showing what game style you are filter
			and sorting the userlist by. Click it to switch between "regular" and
			"rainbow". Effectively, rainbow players get to "start over" in an optional
			hard mode with a 0-0 score.
		</p>
		<p>
			<b>
				For rainbow games, your wins and losses are in a different tier, that
				does not affect your regular game winrate or player color.
			</b>{' '}
			"Rainbow rewards" may come in at some point.
		</p>
		<p>
			Also in this release, the karma system has been temporarily disabled due
			to griefers exploiting it. The next major feature is{' '}
			<b>player moderation</b>, where I will be enlisting some of our regular
			players to help out in getting rid of griefers and trolls. This isn't all
			that hard and will be coming soon, and hopefully guarantee a better
			playing experience for everyone. Please check the github issue if you are
			interested in helping out.
		</p>
	</section>;

Changelog.propTypes = {
	onLeaveChangelog: PropTypes.func
};

export default Changelog;
