function download(file){

    window.location = file;
}

//separate input by '/'
function parsePaths(input){

    var directories = input.split("/");
    return directories;
}

//custom commands
function cmds(command, terminal){

    var input = command.split(" ");
    var valid = false;

    if (input[0] == "ls"){

        for (var i = 0; i < currentDirectory.children.length; ++i){

            terminal.echo(currentDirectory.children[i].name);
        }
    }

    else if (input[0] == "cat"){

        terminal.echo("Nothing here yet!");
    }

    else if (input[0] == "download"){

        for (var i = 0; i < currentDirectory.children.length; ++i){

            if (input[1] == currentDirectory.children[i].name && currentDirectory.children[i].type == "archive"){

                valid = true;
                terminal.echo("Downloading " + input[1] + "...");
                download(downloadAtWar.link);
            }
        }

        if (!valid) terminal.echo(input[1] + " is not a downloadable file.");

    }

    else if (input[0] == "cd" && input.length > 1){

        if (input[1] == "~"){

            valid = true;
            currentDirectory = root;
            prevDirectory = root;
            terminal.push(cmds, currentDirectory);
        }

        else if (input[1] == ".."){

            valid = true;

            if (currentDirectory != root){
                
                currentDirectory = prevDirectory;
                prevDirectory = root; //directories aren't more than three levels deep
                terminal.pop();
            }
        }

        else if (input[1] == ".") return;

        else {

            var directories = parsePaths(input[1]);
            var count = 0;
            var i = 0;

            while (i < currentDirectory.children.length){

                if (count >= directories.length) break;

                //found directory
                if (directories[count] == currentDirectory.children[i].name && currentDirectory.children[i].type == "directory"){

                    valid = true;
                    prevDirectory = currentDirectory;
                    currentDirectory = currentDirectory.children[i];
                    terminal.push(cmds, currentDirectory);
                    ++count;
                    i = -1; //look for next directory
                }

                else valid = false;

                ++i;
            }
        }

        if (!valid) terminal.echo(input[1] + " is not a valid directory.");
    }

    else if (input[0] == "help"){

        terminal.echo(help);
    }

    else {

        terminal.echo("Invalid command.  Type \"help\" for help.");
    }
}