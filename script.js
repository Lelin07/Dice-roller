// JS Basics Session by Lelin: ROLL THE DICE Program (Take user input to generate that amount of random dice (1 to 6) and parse the respective dice png from local dir)

function roll() {

    const userInput = document.getElementById("userInput").value;
    const result = document.getElementById("result");
    const diceimages = document.getElementById("diceimages");
    let values = [];
    let images = [];

    for (let i = 0; i <= userInput - 1; i++) {
        let value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice-images/${value}.png" alt="dice no. ${value}">`);
    }

    console.log(values)
    result.textContent = `Generated: ${values.join(", ")}`
    diceimages.innerHTML = images.join("");

}
