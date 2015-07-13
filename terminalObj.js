var downloadAtWar = {

	name: "AtWar.zip",
	type: "archive",
	children: [root],
	link: "https://github.com/s4weng/At-War/archive/master.zip"
};

var descriptionAtWar = {

	name: "Description.txt",
	type: "text",
	children: [root],
	text: "\n\
	At War is a pseudo-3D fantasy beat 'em up game I developed in C++.\n"
};

var atWar = {

	name: "AtWar",
	type: "directory",
	children: [downloadAtWar, descriptionAtWar],
	prompt: "guest@SteveWeng:~/Projects/AtWar$"
};

var home = {

	name: "Home",
	type: "directory",
	children: [downloadAtWar],
	prompt: "guest@SteveWeng:~/Home$"
};


var posts = {

	name: "Posts",
	type: "directory",
	children: [downloadAtWar],
	prompt: "guest@SteveWeng:~/Posts$"
};


var projects = {

	name: "Projects",
	type: "directory",
	children: [atWar],
	prompt: "guest@SteveWeng:~/Projects$"
};

var root = {

	name: "Root",
	pathname: "Root",
	type: "directory",
	children: [home, posts, projects],
	prompt: "guest@SteveWeng:~$"
};

var help = "\n\
Press ` at any time to exit to the GUI interface. \n\
\n\
Commands:\n\n\
clear      -> Clear the screen of all text.\n\
help       -> Display the commands and other information.\n\
ls (arg)   -> List the directory contents of arg.\n\
cat (arg)  -> Write the content of arg to screen (text files only).\n\
download (arg) -> Download arg (archive files only).\n";