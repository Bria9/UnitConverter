/* Conversions

1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const feet = 3.2808;
const gallon = 3.78541;
const pound = 2.2046;

const inputEl = document.getElementById("input");
const buttonEL = document.getElementById("btn");

const lengthEL = document.getElementById("length");
const metersEl = document.getElementById("meters");
const feetEl = document.getElementById("feet");

const volumeEL = document.getElementById("volume");
const litersEl = document.getElementById("liters");
const gallonsEl = document.getElementById("gallons");

const massEl = document.getElementById("mass");
const kilosEl = document.getElementById("kilos");
const lbsEl = document.getElementById("lbs");

function length() {
  const meterResult = inputEl.value * feet;
  const feetResult = inputEl.value / feet;

  lengthEL.innerHTML = `<p> ${inputEl.value} meters = ${meterResult.toFixed(3)}
 feet | ${inputEl.value} feet = ${feetResult.toFixed(3)} meters </p>`;
}

function volume() {
  const litersResult = inputEl.value * gallon;
  const gallonsResult = inputEl.value / gallon;
  volumeEL.innerHTML = `<p> ${inputEl.value} liters = ${gallonsResult.toFixed(
    3
  )} | ${inputEl.value} gallons = ${litersResult.toFixed(3)} liters <p>`;
}

function mass() {
  const kilosResult = inputEl.value * pound;
  const lbsResult = inputEl.value / pound;
  massEl.innerHTML = `<p> ${inputEl.value} kilos = ${lbsResult.toFixed(
    3
  )} pounds | ${inputEl.value} pounds = ${kilosResult.toFixed(3)} kilos </p>`;
}

buttonEL.addEventListener("click", function () {
  length();
  volume();
  mass();
});
