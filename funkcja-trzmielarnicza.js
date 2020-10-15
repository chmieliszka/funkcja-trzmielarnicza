$(function() {
    $("#calculate").on("click", function(event) {
        let checkType = /^[0-9]*$/;
        let functionResult = "";
        
        if ($("#trzmielarnicza_input")[0].value != "") {
            if ($("#trzmielarnicza_input")[0].value.match(checkType) ) { // Sprawdzamy czy nasze wejscie jest cyfra
                functionResult = `Wynik: ${doStep( $("#trzmielarnicza_input")[0].value )}`;
            } else {
                functionResult = "Niepoprawne dane";
            }
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
