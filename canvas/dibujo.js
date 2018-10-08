var texto = document.getElementById("texto_lineas")
var boton = document.getElementById("botoncito")
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}


function dibujoPorClick()
{

  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf, xi, yf, yii, xff, xii, yff;
  var colorsote = "red";
  var espacio = ancho/lineas;

  for(l=0;l<lineas;l++)
  {
    yi= espacio * l;
    xf= espacio * (l+1);
    dibujarLinea(colorsote, 0, yi, xf, ancho);

    xi= espacio * l;
    yf= ancho - ((l+1)*espacio);
    dibujarLinea(colorsote,xi , ancho, ancho, yf);

    xff= ancho - ((l+1)*espacio);
    yii= ancho - ((l+1)*espacio);
    dibujarLinea(colorsote, ancho, yii, xff, 0);

    xii= ancho - ((l+1)*espacio);
    yff= espacio * l;
    dibujarLinea(colorsote, xii, 0, 0, yff);
  }
  dibujarLinea(colorsote, 1, 1, 1, 299);
  dibujarLinea(colorsote, 1, 299, 299, 299);
  dibujarLinea(colorsote, 299, 299, 299, 1);
  dibujarLinea(colorsote, 299, 1, 1, 1);
}
