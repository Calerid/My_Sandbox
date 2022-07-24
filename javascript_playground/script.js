const USR_INPUT = window.prompt("Please enter your name!");
const NEW_MESSAGE = "Hello and Welcome " + USR_INPUT + "," + "</br>" + "thank you for visiting!";


function greetingByName (NEW_MESSAGE){
    document.getElementById("greetings-output").innerHTML = NEW_MESSAGE;
    
}

function blackAndWhite(){
    document.querySelector('body').classList.add("dark-mode");

}

greetingByName(NEW_MESSAGE);
blackAndWhite();

