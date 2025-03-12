function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    let result = '';

    if (unitSelect === 'C') {
        
        const fahrenheit = (tempInput * 9/5) + 32;
        result = `${tempInput}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else if (unitSelect === 'F') {
        
        const celsius = (tempInput - 32) * 5/9;
        result = `${tempInput}°F is equal to ${celsius.toFixed(2)}°C`;
    }

    document.getElementById('result').innerText = result;
}
