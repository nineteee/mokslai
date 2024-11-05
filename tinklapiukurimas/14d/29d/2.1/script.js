// const height = document.getElementById("height").value;
// document.getElementById(
//   "result"
// ).innerText = `Kritimo laikas: ${time} sekundziu`;

const g = 9.8;
const sokimoAukstis = parseInt(
  prompt("Is kokio aukscio soka parasiutininkas?")
);
const sekundes = parseInt(
  prompt("Per kiek sekundziu issiskleidzia jo parasiutas?")
);
const time = Math.sqrt((2 * sokimoAukstis) / g).toFixed(2);
if (time > sekundes) {
  console.log("Parašiutas išsiskleis");
} else {
  console.log("arašiutas neišsiskleis");
}
