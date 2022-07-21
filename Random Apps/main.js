


function lol() {
    //Make an App which chooses what chicken is da best
    let chicken = ["dricken", "draken", "broken", "samael"];
    let decision = prompt("Would you like to play the game? Yes or No: ")
    let x = prompt("This is a chicken game. Choose from 1 - 4: ");

    let number = parseInt(x);
    
    do {
        if (number === 1) {
            console.log("success");
            alert(`The chicken you chose is: ${chicken[0]}`);
        } else if (number === 2) {
            console.log("success");
            alert(`The chicken you chose is: ${chicken[1]}`);
        } else if (number === 3) {
            console.log("success");
            alert(`The Chicken you choosed is ${chicken[2]}`);
        } else if (number === 4) {
            console.log("success");
            alert(`The Chicken you choosed is ${chicken[3]}`);
        } else {
            console.log("failed");
            alert("you are an idiot I said choose from numbers 1-4");
        }
    } while (decision === "yes");

}
