
var obtenBase = document.getElementById("base");
var obtenSymbol = document.getElementById("symbol");
var obtenColor = document.getElementById("color");
var obtenPiramide = document.getElementById("piramide");

function creaPiramide() {
    base = obtenBase.value;
    symbol = obtenSymbol.value;
    linea = '';
    
    piramide.innerHTML = linea;
    color = document.getElementById("color").value;

    for (var i = 0; i < base; i++) {
        piramide.innerHTML += '<p class="line">' + (linea += ('<span class="symbol">' + symbol + '</span>')) + '</p>';
    }
    piramide.style.color = color;
}

