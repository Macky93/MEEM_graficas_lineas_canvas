//Lienzo del canvas
const canvas = document.getElementById("lineChart");
const ctx = canvas.getContext("2d");
//datos que se graficaran
const labels = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
const sansalvador = [30, 32, 34, 35, 36, 37, 36, 35, 34, 32, 31, 30];
const santatecla = [25, 26, 28, 29, 31, 32, 32, 31, 30, 28, 27, 26];
//margenes de bordes izquierdo y derecho
const marginLeft = 50;
const marginRight = 50;

// FUNCIÓN PARA DIBUJAR LA LÍNEA CON ETIQUETAS
function drawLineWithLabels(data, color) {
    ctx.beginPath(); // SE COLOCA EL PUNTERO EN EL LIENZO
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;

    for (let i = 0; i < data.length; i++) {
        // INICIAR Y FINALIZAR EN LOS BORDES ESTABLECIDOS DEL LIENZO (es decir, que no se salga de los bordes)
        const x = (i / (data.length - 1)) * (canvas.width - marginLeft - marginRight) + marginLeft;
        const y = canvas.height - (data[i] - 15) * 10; // ESCALADO VERTICAL (arreglo - 15 pixeles * 10 pixeles)


        //Dibujar la linea
        if (i === 0) {
            ctx.moveTo(x, y); // UBICAR POSICIÓN DEL PUNTERO
        } else {
            ctx.lineTo(x, y); // TRAZAR LÍNEA A POSICIÓN CALCULADA EN "X" e "Y"
        }
        
        // ASIGNAR EL COLOR A LA LÍNEA
        ctx.fillStyle = color;
        ctx.font = "12px Arial";
        ctx.fillText(data[i]+"°C", x+5, y-5);
    }
    ctx.stroke();
}

    //FUNCIÓN PARA DIBUJAR LAS ETIQUETAS Y LOS EJES
    function drawAxes() {
        ctx.beginPath();
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1;
    //Eje x
        ctx.moveTo(50, canvas.height - 50);//Ubicar la posicion del puntero en eje x y
        ctx.lineTo(canvas.width-50,canvas.height-50);//trazar la linea a posicion especifica
        
    //ejeY

    ctx.moveTo(50, canvas.height - 50);//Ubicar la posicion del puntero en eje x y
    ctx.lineTo(50,50);//trazar la linea a posicion especifica

    //dibujar
    ctx.stroke();

    // ETIQUETAS EN EJE X
    for (let i = 0; i < labels.length; i++) { // SE RECORRE EL ARREGLO DE LABELS
        const x = (i / (labels.length - 1)) * (canvas.width - 100) + 50;
        ctx.fillText(labels[i], x, canvas.height - 30); // MOSTRAR LAS ETIQUETAS DE LOS MESES
    }

    for(let i = 20; i <= 40; i += 5) {
        const y = canvas.height - 50 - (i-20) * 10;
        ctx.fillText(i + "°C", 20, y + 5);
    }

}

drawAxes();
drawLineWithLabels(sansalvador, 'red');
drawLineWithLabels(santatecla, 'blue');

ctx.fillStyle = 'red';
ctx.fillRect(70, 20, 10, 10); // Dibuja un cuadrado rojo (pos X:70, Y:20, ancho:10, alto:10)
ctx.fillStyle = 'black';
ctx.fillText("San Salvador",85,30); // Falta especificar texto y coordenadas

ctx.fillStyle = 'blue';
ctx.fillRect(170,20,10,10);
ctx.fillText("Santa Tecla",185,30);