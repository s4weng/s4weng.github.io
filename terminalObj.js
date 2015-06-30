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

var help = "\n\
Press ` at any time to exit to the GUI interface. \n\
\n\
Commands:\n\n\
clear      -> Clear the screen of all text\n\
help       -> Display the commands and other information.\n\
ls (arg)   -> Lists the directory contents of arg\n\
cat (arg)  -> Writes the content of arg to screen (text files only)\n";