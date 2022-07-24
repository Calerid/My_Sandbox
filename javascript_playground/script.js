const USR_INPUT = window.prompt("Please enter your name!");
const GREETING1 = "Hello and Welcome ";
const GREETING2 = " thank you for visiting";



function greetingByName (){
    let NEW_MESSAGE = GREETING1 + USR_INPUT + "," + "</br>" + GREETING2;
    document.getElementById("greetings-output").innerHTML = NEW_MESSAGE;
}

greetingByName();