const operando1 = document.getElementById("operando1");
const operando2 = document.getElementById("operando2");
const resultado = document.getElementById("resultado");

document.getElementById("suma").addEventListener("click", () => {
  resultado.value = parseFloat(operando1.value) + parseFloat(operando2.value);
  animarResultado();
});

document.getElementById("resta").addEventListener("click", () => {
  resultado.value = parseFloat(operando1.value) - parseFloat(operando2.value);
  animarResultado();
});

document.getElementById("multiplicacion").addEventListener("click", () => {
  resultado.value = parseFloat(operando1.value) * parseFloat(operando2.value);
  animarResultado();
});

document.getElementById("division").addEventListener("click", () => {
  resultado.value = parseFloat(operando1.value) / parseFloat(operando2.value);
  animarResultado();
});

function animarResultado() {
  resultado.classList.add("mostrar-resultado");
  setTimeout(() => {
    resultado.classList.remove("mostrar-resultado");
  }, 200); 
}