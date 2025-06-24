/* Conversions

1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const feet = 3.2808
const gallon = 3.78541 
const pound = 2.2046

const inputEl = document.getElementById("input")
const buttonEL = document.getElementById("btn")
const lengthEL = document.getElementById("length")
const metersEl = document.getElementById("meters")
const feetEl = document.getElementById("feet")
const litersEl = document.getElementById("liters")
const gallonsEl = document.getElementById("gallons")
const kilosEl = document.getElementById("kilos")
const lbsEl = document.getElementById("lbs")


 function length(){
  const  meterResult = inputEl.value * feet
  
    // metersEl.innerText = meterResult.toFixed(3)


    const feetResult = inputEl.value / feet
    // feetEl.innerText = feetResult.toFixed(3)
 
   
    lengthEL.innerHTML = `<p> ${inputEl.value} meters = ${meterResult.toFixed(3)} feet | ${inputEl.value} feet = ${feetResult.toFixed(3)} meters </p>` 
}

function volume(){
  const  litersResult = inputEl.value * gallon
    litersEl.innerText = litersResult.toFixed(3)

    gallonsResult = inputEl.value / gallon
    gallonsEl.innerText = gallonsResult.toFixed(3)
}

function mass(){
  const  kilosResult = inputEl.value * pound
    kilosEl.innerText = kilosResult.toFixed(3)

  const  lbsResult = inputEl.value / pound
    lbsEl.innerText = lbsResult.toFixed(3)
}


buttonEL.addEventListener("click", function(){
    length()
    volume()
    mass()

})
