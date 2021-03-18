function myFirstGreeting(){
    return "Greeting"
}

console.log(myFirstGreeting());


function sayHiLater(anyFunction) {
    

    anyFunction();
}

const hi = () => {
    console.log("hi");
}

sayHiLater(hi);

function poke(name) {
    return "poke: " + name;
}

function interact(aFunction, name){
    console.log(aFunction(name));
}

interact(poke, "john");

interact((name) => "lick: " + name, "bob");