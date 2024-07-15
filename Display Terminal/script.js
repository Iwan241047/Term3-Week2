let welcomeMessage = "Come in";
const logParagraph = document.getElementById('logParagraph');
var buttonCounter = 0;
let displayString = "";
FakeLogger("I'm in");

let inputArray = ["Well", "this", "is", "certainly", "a", "sentence"];

let definitions = [
    {def: "Surely", key: "certainly"},
    {def: "is", key: "was"},
    {def: "sentence", key: "string"}

];

function RenameWelcomeHeader()
{
    var header = document.getElementById('welcomeHeader');
    header.innerHTML += welcomeMessage;    
}

function FakeLogger(LogMessage)
{
    displayString += LogMessage + "<br>";
    console.log(LogMessage);
    logParagraph.innerHTML = displayString;
}

function execute()
{
    // buttonCounter += 1;
    // if (buttonCounter == 1)
    // {
    //     FakeLogger("You've clicked this once");
    // }
    // else{
    //     FakeLogger("You've clicked this " + buttonCounter + " times!");
    // }

    inputArray.forEach(sort);
}

function sort(word){
    // if (word == "a"){
    //     FakeLogger("Found Definition");
    // }

    definitions.forEach()
}

function checkIfDefinitionExists(phrase){
    if (phrase == definitions[].def){

    }
}


let ages = [30, 32, 56, 8, 0, 100];
var canBuy = ages.filter(checkIfCanBuyHouse);
canBuy.forEach(LogOutHomeOwners)
console.log(ages.find(30));


function checkIfCanBuyHouse(age){
    if (age >= 21){
        return age;
    }
}

function LogOutHomeOwners(element){
    FakeLogger(element);
}