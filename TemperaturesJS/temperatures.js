"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var convertButton = document.getElementById("convert-button");

    convertButton.addEventListener("click", function () {
        var celsiusTemperature = document.getElementById("celsius-temperature");
        var result = document.getElementById("result");
        var convertTo = document.getElementsByName("convert-to");
        var convertToValue = getCheckedRadioValue(convertTo);
        var errorMessage = document.getElementById("error-message");

        var celsiusTemperatureValue = celsiusTemperature.value;
        if (celsiusTemperatureValue === "" || Number(celsiusTemperatureValue) < -273.15) {
            errorMessage.style.display = "block";
            return;
        }

        errorMessage.style.display = "none";

        var resultValue = result.children[0];
        var fahrenheitSymbol = result.children[1];
        var kelvinSymbol = result.children[2];
        if (convertToValue === "1") {
            resultValue.innerText = convertToFahrenheit(Number(celsiusTemperatureValue));
            fahrenheitSymbol.style.display = "inline";
            kelvinSymbol.style.display = "none";
        } else {
            resultValue.innerText = convertToKelvin(Number(celsiusTemperatureValue));
            kelvinSymbol.style.display = "inline";
            fahrenheitSymbol.style.display = "none";
        }
    });

    var getCheckedRadioValue = function (radio) {
        var length = radio.length;
        for (var i = 0; i < length; i++) {
            if (radio[i].checked) {
                return radio[i].value;
            }
        }
        return "";
    };

    var convertToFahrenheit = function (celsiusTemperature) {
        return ((9 / 5) * celsiusTemperature + 32).toFixed(2);
    };

    var convertToKelvin = function (celsiusTemperature) {
        return (celsiusTemperature + 273.15).toFixed(2);
    };
});