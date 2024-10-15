const dado = document.getElementById('dado');
const btnTirar = document.getElementById('tirar');

function tirarDado() {
  const resultado = Math.floor(Math.random() * 6) + 1;
  let rotaciones = "";

  switch (resultado) {
    case 1: rotaciones = "rotateX(0deg) rotateY(0deg)"; break;
    case 2: rotaciones = "rotateX(-90deg) rotateY(0deg)"; break;
    case 3: rotaciones = "rotateY(90deg) rotateX(0deg)"; break;
    case 4: rotaciones = "rotateY(-90deg) rotateX(0deg)"; break;
    case 5: rotaciones = "rotateX(90deg) rotateY(0deg)"; break;
    case 6: rotaciones = "rotateY(180deg) rotateX(0deg)"; break;
  }

  dado.style.transform = rotaciones;
}

btnTirar.addEventListener('click', tirarDado);