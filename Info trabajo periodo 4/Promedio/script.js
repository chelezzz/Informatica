function calcularPromedio() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var resultadoElement = document.getElementById("resultado");
  
    if (nota1 > 10 || nota2 > 10 || nota3 > 10 || nota1 < 0 || nota2 < 0 || nota3 < 0) {
      resultadoElement.textContent = "Error: Las notas deben estar entre 0 y 10.";
      return;
    } else {
      if (nota1 < 1) {
        nota1 = 1;
      }
      if (nota2 < 1) {
        nota2 = 1;
      }
      if (nota3 < 1) {
        nota3 = 1;
      }
  
      var promedio = (nota1 + nota2 + nota3) / 3;
  
      if (promedio > 10) {
        promedio = 10;
      }
  
      resultadoElement.textContent = "El promedio es: " + promedio.toFixed(2);
    }
  }