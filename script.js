window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const currentPage = location.pathname.split("/").pop();

    links.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.style.textDecoration = 'underline';
      }

    });
  });


  let indice = 0;
  const slides = document.getElementById('slides')
  const total = slides.children.length;
  const botaoAvancar = document.getElementById('avancar')
  const botaoVoltar = document.getElementById('voltar')

  function atualizarCarrossel() {
    slides.style.transform = `translateX(-${indice * 100}%)`;
  }

  function avancar() {
    indice = (indice + 1) % total;
    console.log(indice)
    atualizarCarrossel();
    atualizarBotoes();
  }

  function voltar() {
    indice = (indice - 1 + total) % total;
    console.log(indice)
    atualizarCarrossel();
    atualizarBotoes();
  }

  function atualizarBotoes() {
    if(indice == 0){
      botaoVoltar.style.visibility= 'hidden';
    } else if(indice == 4) {
      botaoAvancar.style.visibility= 'hidden';
    }else {
      botaoAvancar.style.visibility= 'visible';
      botaoVoltar.style.visibility= 'visible';
    }
  }

  atualizarBotoes()
