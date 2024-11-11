function sumPositiveInputs() {
    let sum = 0;
    let input;

    while (true) {
        input = prompt("Įveskite skaičių (neigiamas skaičius nutrauks):");
        if (input < 0) break;
        sum += Number(input);
    }
    console.log("Teigiamų skaičių suma:", sum);
}

sumPositiveInputs();
