document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mouseup", soltarMouse);
document.addEventListener("mousemove", dibujarMouse);
 var cuadrito= document.getElementById("area_de_dibujo");
 var papel= cuadrito.getContext("2d");
 var x;
 var y;
 var mouse = 0;
 var colorcito = "black";
 var movimiento = 2;
dibujarLinea(colorcito,1, 1,1,299, papel)
dibujarLinea(colorcito,1, 1,299,1, papel)
dibujarLinea(colorcito,1, 299,299,299, papel)
dibujarLinea(colorcito,299, 1,299,299, papel)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();

}

function dibujarMouse(evento)
{
  if(mouse == 1)
  {

    var xFinal = evento.clientX ;
    var yFinal = evento.clientY - 8;
    dibujarLinea(colorcito, x, y, xFinal, yFinal, papel);
  }
      x = evento.clientX ;
      y = evento.clientY - 8;
}

function presionarMouse(evento)
{mouse = 1; }

function soltarMouse(evento)
{mouse = 0;}
