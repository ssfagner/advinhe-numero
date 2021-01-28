// Seu JavaScript vai aqui

let numeroAleatorio= Math.floor(Math.random() * 100) + 1;

let palpites = document.querySelector('.palpites');
let ultimoResultado = document.querySelector('.ultimoResultado');
let baixoOuAlto = document.querySelector('.baixoOuAlto');

let envioPalpite = document.querySelector('.envioPalpite');
let campoPalpite = document.querySelector('.campoPalpite');

let contagemPalpites = 1;
let botaoReinicio;
  

  function conferirPalpite() {
    let palpiteUsuario = Number(campoPalpite.value)
    console.log(palpiteUsuario)
    if (contagemPalpites === 1) {
      palpites.textContent = 'Palpites anteriores: ';
    }
    palpites.textContent +=palpiteUsuario + ' '; 

    if (palpiteUsuario === numeroAleatorio) {
      ultimoResultado.textContent = 'Parabéns! Você acertou!';
      ultimoResultado.style.color = 'green';
      ultimoResultado.style.fontSize = '24px'
      baixoOuAlto.textContent = '';
      configFimDeJogo(); 
    } else if (contagemPalpites === 10) {
      ultimoResultado.textContent = ' FIM DE JOGO ';
      baixoOuAlto.textContent = '';
      configFimDeJogo();
    } else {
      ultimoResultado.textContent = 'Errado!';
      ultimoResultado.style.color = 'red';
      ultimoResultado.style.fontSize = '24px'
      if (palpiteUsuario < numeroAleatorio) {
        baixoOuAlto.textContent = 'Seu palpite está muito baixo!';    
      } else if (palpiteUsuario > numeroAleatorio) {
        baixoOuAlto.textContent = 'Seu palpite está muito alto!';
      }

    }

    contagemPalpites++;
    campoPalpite.value = '';
    campoPalpite.focus();

}


envioPalpite.addEventListener('click', conferirPalpite);


function configFimDeJogo() {
  campoPalpite.disabled = true;
  envioPalpite.disabled = true;
  botaoReinicio = document.createElement('button');
  botaoReinicio.textContent = 'Iniciar novo jogo';
  botaoReinicio.classList.add('envioPalpite')
  document.body.appendChild(botaoReinicio);
  botaoReinicio.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo() {
  contagemPalpites = 1;

  let reiniciarParas = document.querySelectorAll('.resultadoParas p');
  for (let i = 0 ; i < reiniciarParas.length ; i++) {
    reiniciarParas[i].textContent = '';
  }

  botaoReinicio.parentNode.removeChild(botaoReinicio);

  campoPalpite.disabled = false;
  envioPalpite.disabled = false;
  campoPalpite.value = '';
  campoPalpite.focus();

  ultimoResultado.style.backgroundColor = 'white';

  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}
