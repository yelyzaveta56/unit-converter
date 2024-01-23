// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound
// 1 pound = 0.456 kilogram
// 1 foot = 0.305 meter
// 1 gallon = 4.546 liter

const input = document.getElementById("input-el");
const button = document.getElementById("btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

button.addEventListener("click", function () {
  const metersToFeet = 3.281;
  const litersToGallons = 0.264;
  const kilosToPounds = 2.204;

  const metersToFeetConv = input.value * metersToFeet;
  const feetToMetersConv = input.value / metersToFeet;

  const litersToGallonsConv = input.value * litersToGallons;
  const gallonsToLitersConv = input.value / litersToGallons;

  const kilosToPoundsConv = input.value * kilosToPounds;
  const poundsToKilosConv = input.value / kilosToPounds;

  //output length
  lengthEl.textContent = `${input.value} meters = ${metersToFeetConv.toFixed(
    3
  )} feet |
  ${input.value} feet = ${feetToMetersConv.toFixed(3)} meters`;

  // output volume
  volumeEl.textContent = `${input.value} liters = ${litersToGallonsConv.toFixed(
    3
  )} gallons | ${input.value} gallons = ${gallonsToLitersConv.toFixed(
    3
  )} liters`;

  // output mass
  massEl.textContent = `${input.value} kilos = ${kilosToPoundsConv.toFixed(
    3
  )} pounds | ${input.value} pounds = ${poundsToKilosConv.toFixed(3)} kilos`;
});
