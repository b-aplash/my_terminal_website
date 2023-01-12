var commands = document.getElementById("commands");
var user_input = document.getElementById("user_input");
var terminal_outputs = document.getElementById("terminal_outputs");


function execute(input){
    let output;
    input = input.toLowerCase();
    output = `<div>→ ${input}</div>`;

    if(!COMMANDS.hasOwnProperty(input))
    {
        output += `<div> No such command: ${input} </div>`
    }
    else
    {
        output += `<div> ${COMMANDS[input]} </div>`
    }

    terminal_outputs.innerHTML = `${terminal_outputs.innerHTML + output}`;
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
        'Supported commands: ["about", "experience", "education", "skills", "contact"]',
    about:
        'Hi! I am Bhavya and I am a freshman at Penn State!',
    skills:
        'My strongest programming language is Java and I do digital art and design.',
    experience:
        'I have worked on many projects related to programming and computer science in high school.',
    education:
        'I attended Freehold High School and was a part of the Computer Science Academy.',
    contact:
        'Phone: 732-737-1371 | Email: aplashbhavya@gmail.com'
}