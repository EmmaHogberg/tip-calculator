const krInput = document.querySelector("#kostnad");
const antalInput = document.querySelector("#antal");
const procentInput = document.querySelector("#procent");
const sumButton = document.querySelector("#summera");
const sumOutput = document.querySelector("#summa");

function procentOmvandlare() {
  if (procentInput.value === "5%") {
    procentInput.value = "1,05";
  }
  if (procentInput.value === "10%") {
    procentInput.value = "1,10";
  }
  if (procentInput.value === "15%") {
    procentInput.value = "1,15";
  }
  if (procentInput.value === "20%") {
    procentInput.value = "1,20";
  }
  if (procentInput.value === "Välj...") {
    procentInput.value = "false";
  }
}

sumButton.addEventListener("click", (element) => {
  sumOutput.value = eval;
});

console.log();
