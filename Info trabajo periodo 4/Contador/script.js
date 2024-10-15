function iniciarContador() {
  var segundosInput = document.getElementById("segundos").value;
  var tiempo = parseInt(segundosInput); // Convertir a número entero
  var contador = document.getElementById("contador");
  contador.classList.add("cuenta-regresiva");
  contador.textContent = tiempo; // Mostrar el tiempo inicial en el contador

  var intervalo = setInterval(function() {
    tiempo--;
    contador.textContent = tiempo;
    if (tiempo <= 3) {
      contador.classList.add("rojo");
    }
    if (tiempo === 0) {
      clearInterval(intervalo);
      contador.classList.remove("rojo");
      setTimeout(function() {
        alert("¡Tiempo terminado!");
        // Aquí puedes agregar código para reproducir un audio
        // var audio = new Audio('alarma.mp3');
        // audio.play();
      }, 100);
    }
  }, 1000);
}