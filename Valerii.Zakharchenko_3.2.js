function SongCreator (name, played) {
	this.name 	= name;
	this.played	= played;
}

var songs = [];

// Filling songs list with names and random numbers times track was played.
for (var i = 0; i < 10; i++) {
	songs.push( new SongCreator( '"Sting - track_'+i+'"', Math.floor (Math.random()*101) ) );
}

function favoriteSong (songsColl) {
	var bestTimes = songsColl[0]['played'],
		bestIndex = 0;
	for (var i = 0, len = songsColl.length; i < len; i++) {
		//console.log ( songsColl[i]['name'], 'played', songsColl[i]['played'], 'times.' );
		if ( bestTimes < songsColl[i]['played'] ) {
			bestTimes = songsColl[i]['played'];
			bestIndex = i;
		}
	}
	console.log( 'Super hit', songsColl[bestIndex]['name'], 'with index', bestIndex, 'played', bestTimes,'times.' );
}

favoriteSong (songs);

