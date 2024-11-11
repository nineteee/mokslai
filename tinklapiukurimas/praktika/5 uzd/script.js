function calculateInterest() {
    const P = parseFloat(document.getElementById('amount').value);
    const R = parseFloat(document.getElementById('rate').value);
    const T = parseFloat(document.getElementById('years').value);

    if (isNaN(P) || isNaN(R) || isNaN(T)) {
        document.getElementById('result').innerText = "Prašome įvesti teisingus skaičius.";
        return;
    }

    const simpleInterest = (P * R * T) / 100;
    document.getElementById('result').innerText = `Papildomos palūkanos: ${simpleInterest}`;
}