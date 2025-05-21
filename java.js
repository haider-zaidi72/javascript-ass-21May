
//==================== One single click ===========================
function changeText() {
      let heading = document.getElementById("heading");
      heading.innerText = "Welcome";  // text change hoga aur welcome agaey ga.
      heading.style.color = "red"; // text ka color red karne ke lye.
      heading.style.backgroundColor="blue";
    }
//=================== Toggle Dark Mode============================
    function changeBodyClr(){
        let colorChange = document.getElementById("clr");
        colorChange.style.backgroundColor="white";
        colorChange.style.color="black";
    }

    function bodyClrChange(){
        let changeClr = document.getElementById("clr");
        changeClr.style.backgroundColor="black";
        changeClr.style.color="white"
    }
//=========================== Celsius  =======================
    function convertAndColor() {
  const celsiusInput = document.getElementById("celsiusInput");
  const fahrenheitOutput = document.getElementById("fahrenheitOutput");
  const celsius = parseFloat(celsiusInput.value);

  if (isNaN(celsius)) {
    fahrenheitOutput.textContent = "Fahrenheit: ";
    celsiusInput.style.backgroundColor = ""; // Reset color
    return;
  }

  // Convert Celsius to Fahrenheit: (C × 9/5) + 32
  const fahrenheit = (celsius * 9/5) + 32;
  fahrenheitOutput.textContent = `Fahrenheit: ${fahrenheit.toFixed(1)}°F`;

  // Change background color based on temperature
  if (celsius > 35) {
    celsiusInput.style.backgroundColor = "#ff6b6b"; // Red (Hot)
  } else if (celsius < 10) {
    celsiusInput.style.backgroundColor = "#74b9ff"; // Blue (Cold)
  } else {
    celsiusInput.style.backgroundColor = "#55efc4"; // Green (Normal)
  }
}