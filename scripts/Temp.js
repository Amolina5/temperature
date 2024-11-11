 // Celsius to Fahrenheit conversion function
 function convert() {
  const celsiusInput = document.getElementById("celsius-input").value;
  const celsius = Number(celsiusInput);
  const fahrenheit = (celsius * 9 / 5) + 32;
  
  if (isNaN(celsius)) {
      document.getElementById("result").textContent = "Please enter a valid number!";
      return;
  }
  
  document.getElementById("result").textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F.`;


}

//Celsius to Fahrenheit table
function generateCelsiusToFahrenheitTable() {
  const tableBody = document.getElementById("celsius-to-fahrenheit-table");
  for (let i = 0; i <= 6; i++) {
      const celsius = i * 6;
      const fahrenheit = Math.round((celsius * 1.8) + 32);
      const row = `<tr><td>${celsius}°C</td><td>${fahrenheit}°F</td></tr>`;
      tableBody.innerHTML += row;
  }
}


function generateFahrenheitToCelsiusTable() {
  const tableBody = document.getElementById("fahrenheit-to-celsius-table");
  for (let i = 0; i <= 6; i++) {
      const fahrenheit = i * 6;
      const celsius = Math.round(((fahrenheit - 32) / 1.8) * 10) / 10;
      const row = `<tr><td>${fahrenheit}°F</td><td>${celsius}°C</td></tr>`;
      tableBody.innerHTML += row;
  }
}


window.onload = function() {
  generateCelsiusToFahrenheitTable();
  generateFahrenheitToCelsiusTable();
};


console.log("scripts");
const celsius = 30;
const fahrenheit = celsius * 9 / 5 + 32;
console.log(`${celsius}°C is ${fahrenheit}°F.`);

// Celsius to Fahrenheit Conversion Table
console.log("Celsius to Fahrenheit Conversion Table:");
for (let i = 0; i <= 6; i++) {
  const celsius = i * 6;
  const fahrenheit = Math.round((celsius * 1.8) + 32);
  console.log(`${celsius}°C = ${fahrenheit}°F`);
}

// Fahrenheit to Celsius Conversion Table
console.log("\nFahrenheit to Celsius Conversion Table:");
for (let i = 0; i <= 6; i++) {
  const fahrenheit = i * 6;
  const celsius = Math.round(((fahrenheit - 32) / 1.8) * 10) / 10;
  console.log(`${fahrenheit}°F = ${celsius}°C`);
}
