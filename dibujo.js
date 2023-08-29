var texto=document.getElementById("texto_lineas");
var boton=document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorClick);
var d=document.getElementById("dibujito");
var ancho=d.width;
var lienzo=d.getContext("2d");

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal){
lienzo.beginPath();
lienzo.strokeStyle=color;
lienzo.moveTo(xinicial,yinicial);
lienzo.lineTo(xfinal,yfinal);
lienzo.stroke();lienzo.closePath();
}
function dibujoPorClick(){

    var lineas = parseInt(texto.value);

    for( l = 0; l < lineas; l++)
    {
        yf = 300 - (10 * (l + 1));
        xi = 300 + (10 * l)
        dibujarLinea("violet", xi, 300, 600, yf);
    } 
    for(l = 0; l < lineas; l++)
    {
        
        yf = 300 - (l * 10);
        xf = 300 + (l * 10);
        dibujarLinea("#00BFFF",300, yf, xf, 1);
    } 
    for(l = 0; l < lineas; l++)
    {
    xi = 1 * (l * 10);
    yf = 600 - (l * 10);
    dibujarLinea("#4169E1", xi, 600, 300, yf);
    }   
    for(l = 0; l < lineas; l++)
    {
        xf = 10 * (l + 1);
        yi = 600 - (l * 10);
        dibujarLinea("#48D1CC", 1, yi, xf, 300);
    }
    
    for(l = 0; l < lineas; l++)
    {
    xi = 300 + (l * 10);
    yf = 300 + (l * 10);
    dibujarLinea("red", xi, 300, 600, yf);
    }

    for(l = 0; l < lineas; l++)
    {
        yi = 300 + (l * 10);
        xf = 300 + (l * 10);
        dibujarLinea("#008080", 300, yi, xf, 600);
    }
    
    for(l = 0; l < lineas; l++)
    {
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea("pink", 0, yi, xf, 300);
    console.log("linea + 1");
    }
    
    for(l = 0; l <lineas; l++){
        yi = 10 * (l + 1);
    xf = 10 * l;

        dibujarLinea("#45FFCA", 300, yi, xf, 0);
    }
    
}

var paress = document.getElementById("pares");
paress.addEventListener("click", imprimir);

