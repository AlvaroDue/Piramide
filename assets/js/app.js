
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
                  console.log('color 1');
                  break;
                case '2':
                  console.log('color 2');
                  break;
                case '3':
                  console.log('color 3');
                  break;
                case '4':
                  console.log('color 4');
                  break;
                
                default:
                  console.log('negro');
              }

            break;
        }
    }

    for (var i = 0; i < base; i++) {
        piramide.innerHTML += '<p class="line">' + (linea += ('<span class="symbol">' + symbol + '</span>')) + '</p>';
    }
    //piramide.style.color = color;
}



