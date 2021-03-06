var downloadTotalGains = {

	name: "TotalGains.zip",
	type: "archive",
	children: [root],
	link: "https://github.com/s4weng/totalGains/archive/master.zip"
};

var downloadDriver = {

	name: "AutoDriver.zip",
	type: "archive",
	children: [root],
	link: "https://github.com/s4weng/Autonomous-Racecar-Driver/archive/master.zip"
};

var downloadAtWar = {

	name: "AtWar.zip",
	type: "archive",
	children: [root],
	link: "https://github.com/s4weng/At-War/archive/master.zip"
};

var descriptionTotalGains = {

	name: "Description.txt",
	type: "text",
	children: [root],
	text: "\n\
	TotalGains uses a weightlifter's max numbers to find weaknesses, and uses\n\
	that weakness with Prilepin's chart to create an optimal rep/set scheme.\n"
};

var descriptionDriver = {

	name: "Description.txt",
	type: "text",
	children: [root],
	text: "\n\
	GTR 2 Autonomous Driver's name gives it all away; using an artificial neural network\n\
	I trained, the computer will drive a racecar around the track in GTR 2.\n"
};

var descriptionAtWar = {

	name: "Description.txt",
	type: "text",
	children: [root],
	text: "\n\
	At War is a pseudo-3D fantasy beat 'em up game I developed in C++.\n"
};

var totalGains = {

	name: "TotalGains",
	type: "directory",
	children: [downloadTotalGains, descriptionTotalGains],
	prompt: "guest@SteveWeng:~/Projects/TotalGains",
};

var autoDriver = {

	name: "AutonomousDriver",
	type: "directory",
	children: [downloadDriver, descriptionDriver],
	prompt: "guest@SteveWeng:~/Projects/AutonomousDriver"
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
	children: [root],
	prompt: "guest@SteveWeng:~/Home$"
};

var posts = {

	name: "Posts",
	type: "directory",
	children: [root],
	prompt: "guest@SteveWeng:~/Posts$"
};

var projects = {

	name: "Projects",
	type: "directory",
	children: [atWar, autoDriver, totalGains],
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

downloadTotalGains.parent = totalGains;
downloadDriver.parent = autoDriver;
downloadAtWar.parent = atWar;
descriptionTotalGains.parent = totalGains;
descriptionDriver.parent = autoDriver;
descriptionAtWar.parent = atWar;
atWar.parent = projects;
home.parent = root;
posts.parent = root;
projects.parent = root;
root.parent = root;