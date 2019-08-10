
var obtenBase = document.getElementById("base");
var obtenSymbol = document.getElementById("symbol");
var obtenPiramide = document.getElementById("piramide");
var radios = document.getElementsByName('radio');

function creaPiramide() {
    base = obtenBase.value;
    symbol = obtenSymbol.value;
    linea = '';
    
    piramide.innerHTML = linea;

    for (var i = 0, length = radios.length; i < length; i++)
    {
        if (radios[i].checked) {
            checado = radios[i].value;

           /* if ( checado == 1) {
                color = "#c82a54"
            };*/

            switch (checado) {
                case '1':
                  color = "#c82a54";
                  break;
                case '2':
                  color = "#ef280f";
                  break;
                case '3':
                  color = "#e36b2c";
                  break;
                case '4':
                  color = "#e39a2c";
                  break;
                case '5':
                  color = "#e7d40a";
                  break;
                case '6':
                  color = "#6dc36d";
                  break;
                case '7':
                  color = "#02ac66";
                  break;
                case '8':
                  color = "#23bac4";
                  break;
                case '9':
                  color = "#109dfa";
                  break;
                case '10':
                  color = "#024a86";
                  break;
                case '11':
                  color = "#e69dfb";
                  break;
                case '12':
                  color = "#ff689d";
                  break;
                case '13':
                  color = "#bba9bb";
                  break;
                case '14':
                  color = "#8c4966";
                  break;
                
                default:
                  color = "#000000";
              }

            break;
        }
    }

    for (var i = 0; i < base; i++) {
        piramide.innerHTML += '<p class="line">' + (linea += ('<span class="symbol">' + symbol + '</span>')) + '</p>';
    }
    piramide.style.color = color;
}



