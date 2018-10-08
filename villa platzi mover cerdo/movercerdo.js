var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var vp =document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
xi = 420;
yi = 440;
yin=yi;
xin=xi;
var fondo =
{
url:"tile.png",
cargaOK: false
}

var vaca =
{
url:"vaca.png",
cargaOK: false
};

var cerdo =
{
  url:"cerdo.png",
  cargaOK: false
};

var pollo =
{
  url:"pollo.png",
  cargaOK: false
};


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdo);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollo);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVaca()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdo()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollo()
{
  pollo.cargaOK = true;
  dibujar();
}
var cant = aleatorio(0,4);

function dibujar()
  {
    if(fondo.cargaOK)
    {
      papel.drawImage(fondo.imagen, 0,0);
    }
    if(vaca.cargaOK)
    {
      for(var i = 0; i< cant;i++){
      var x = aleatorio(0,6);
      var y = aleatorio(0,6);
      var x = x*80;
      var y = y*80;
      papel.drawImage(vaca.objeto, x, y);
    }
}

    if(pollo.cargaOK)
    {
      for(var i = 0; i< cant;i++){
      var x = aleatorio(0,6);
      var y = aleatorio(0,6);
      var x = x*80;
      var y = y*80;

      papel.drawImage(pollo.objeto, x, y);
    }
    }

    if(cerdo.cargaOK)
    {

        papel.drawImage(cerdo.objeto, xi, yi);

    }
  }


function aleatorio(min,max)
{
  var resultado;
  resultado = Math.floor(Math.random() *(max - min + 1)) + min;
  return resultado;
}

document.addEventListener("keydown", dibujarTeclado)

function dibujarCer()
{

  papel.drawImage(cerdo.objeto, xin, yin);

}

function dibujarTeclado(evento)
{
  var movimiento = 5;
  switch(evento.keyCode)
  {
    case teclas.UP:
    xin=xin;
    yin=yin-movimiento;
    dibujarCer();
     break;
    case teclas.LEFT:
     xin=xin-movimiento;
     yin=yin;
     dibujarCer();
      break;
     case teclas.DOWN:
      xin=xin;
      yin=yin+movimiento;
      dibujarCer();
       break;
     case teclas.RIGHT:
       xin=xin+movimiento;
       yin=yin;
       dibujarCer();
        break;

    default:
      alert("otra tecla");
    break;
  }
}
