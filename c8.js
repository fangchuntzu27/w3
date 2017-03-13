var songList = {
	count: 3,
	group: "Sleep",
	timeToPlay: 390,
	isOnload: true,
	songs: [{
		name: "Home",
    isLike: true
	}, {
		name: "Calendar Girl",
    isLike: true
	}, {
    name: "Young As The Morning, Old As The Sea",
    isLike: true
  }]
};

var songListJson = JSON.stringify(songList);
console.log(songList);
console.log(songListJson);
