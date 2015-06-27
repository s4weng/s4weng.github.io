var downloadAtWar = {

	name: "AtWar.zip",
	type: "archive",
	parent: [atWar],
	children: [root]
};

var atWar = {

	name: "AtWar",
	type: "directory",
	parent: [projects],
	children: [downloadAtWar],
	prompt: "guest@SteveWeng:~/Projects/AtWar$"
};

var home = {

	name: "Home",
	type: "directory",
	parent: [root],
	children: [downloadAtWar],
	prompt: "guest@SteveWeng:~/Home$"
};


var posts = {

	name: "Posts",
	type: "directory",
	parent: [root],
	children: [downloadAtWar],
	prompt: "guest@SteveWeng:~/Posts$"
};


var projects = {

	name: "Projects",
	type: "directory",
	parent: [root],
	children: [atWar],
	prompt: "guest@SteveWeng:~/Projects$"
};

var root = {

	name: "Root",
	pathname: "Root",
	type: "directory",
	parent: [],
	children: [home, posts, projects],
	prompt: "guest@SteveWeng:~$"
};
