$(function() {
    $("#calculate").on("click", function(event) {
        let functionResult;

        if (isNaN($("#trzmielarnicza_input")[0].value) ) { // Sprawdzamy czy nasze wejscie nie jest liczba
            functionResult = "Niepoprawne dane";
        } else { // Jezeli jest liczba to wyswietl wynik, wraz z funkcja ktora wykonuje sie i zwroci wartosc
            functionResult = `Wynik: ${doStep( $("#trzmielarnicza_input")[0].value )}`;
        }

        document.querySelector("#trzmielarnicza_result").innerText = functionResult.toString();
    });

    function doStep(n) {
        if (n <= 9) { return n; } // Jezeli nie ma potrzeby dalszego liczenia to zwroc wynik
        else {
            let result = 0;

            for (var i = 0; i < n.toString().length; i++) { result += parseInt(n.toString()[i]); }
            return doStep(result);
        }
    }
});
