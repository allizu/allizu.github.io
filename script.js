function convert() {
  let inputValue = document.getElementById('inputValue').value;
  let conversionType = document.getElementById('conversionType').value;
  let result = document.getElementById('result');
  let convertedValue;

  if (inputValue === '' || isNaN(inputValue)) {
    result.textContent = 'Please enter a valid number!';
    return;
  }

  switch (conversionType) {
    case 'celsiusToFahrenheit':
      convertedValue = (inputValue * 9/5) + 32;
      result.textContent = `${inputValue}°C is equal to ${convertedValue.toFixed(2)}°F`;
      break;
    case 'fahrenheitToCelsius':
      convertedValue = (inputValue - 32) * 5/9;
      result.textContent = `${inputValue}°F is equal to ${convertedValue.toFixed(2)}°C`;
      break;
    case 'metersToFeet':
      convertedValue = inputValue * 3.28084;
      result.textContent = `${inputValue} meters is equal to ${convertedValue.toFixed(2)} feet`;
      break;
    case 'feetToMeters':
      convertedValue = inputValue / 3.28084;
      result.textContent = `${inputValue} feet is equal to ${convertedValue.toFixed(2)} meters`;
      break;
    default:
      result.textContent = 'Please select a valid conversion type.';
  }
}
