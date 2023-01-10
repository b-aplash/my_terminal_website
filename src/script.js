var commands = document.getElementById("commands");
var user_input = document.getElementById("user_input");

function execute(input){
    var newCommand = document.createElement("li");
    newCommand.innerHTML = input;
    commands.appendChild(newCommand);
}

function key(e){
    const input = user_input.value;

    if(e.key == "Enter"){
        execute(input);
        user_input.value = "";
        return;
    }

    user_input.innerHTML = input + e.key;
}

document.addEventListener("keypress", key);