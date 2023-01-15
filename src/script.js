var commands = document.getElementById("commands");
var user_input = document.getElementById("user_input");
var terminal_outputs = document.getElementById("terminal_outputs");
var terminal_content = document.getElementById("terminal_content");

function execute(input){
    let output;
    input = input.toLowerCase();
    output = `<div>→ ${input}</div>`;

    if(!COMMANDS.hasOwnProperty(input))
    {
        output += `<div><span class = "command">No such command: </span>${input} </div>`;
    }
    else
    {
        output += `<div> ${COMMANDS[input]} </div>`;
    }

    terminal_outputs.innerHTML = `${terminal_outputs.innerHTML + output}`;
    terminal_content.scrollTop = terminal_content.scrollHeight;

    if (input == "github"){
        setTimeout(() => {window.open("https://github.com/b-aplash/my_terminal_website", "_blank");}, 2000);
    }
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

const COMMANDS = 
{
    help:
        'Supported commands: <span class = "command-keyword">"about"</span>, <span class = "command-keyword">"experience"</span>, <span class = "command-keyword">"education"</span>, <span class = "command-keyword">"skills"</span>, <span class = "command-keyword">"contact"</span>, <span class = "command-keyword">"github"</span>',
    about:
        'Hi! I am Bhavya and I am a freshman at Penn State!',
    skills:
        'My strongest programming language is Java and I do digital art and design.',
    experience:
        'I have worked on many projects related to programming and computer science in high school.',
    education:
        'I attended Freehold High School and was a part of the Computer Science Academy.',
    contact:
        'Phone: 732-737-1371 | Email: aplashbhavya@gmail.com',
    github:
        'opening my GitHub page ...'
    
}