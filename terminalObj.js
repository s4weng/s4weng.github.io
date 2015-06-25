var home = {

	name: "Home",
	pathname: "Root/Home",
	type: "directory",
	parent: [root],
	children: []
};


var posts = {

	name: "Posts",
	pathname: "Root/Posts",
	type: "directory",
	parent: [root],
	children: []
};


var projects = {

	name: "Projects",
	pathname: "Root/Projects",
	type: "directory",
	parent: [root],
	children: [atWar]
};


var root = {

	name: "Root",
	pathname: "Root",
	type: "directory",
	parent: [],
	children: [home, posts, projects]
};

var atWar = {

	name: "AtWar",
	pathname: "Root/Projects/AtWar",
	type: "directory",
	parent: [projects],
	children: [downloadAtWar]
};

var downloadAtWar = {

	name: "DownloadAtWar",
	type: "archive",
	parent: [atWar],
	children: []
};