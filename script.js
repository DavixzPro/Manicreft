  function startintro() {                                                                          //Intro
    document.getElementById("introvd").play();
    document.getElementById("cliqueinicial").style.display = "none"
    document.getElementById("enchanted-text").style.display = "none"

    const video = document.getElementById("introvd")
    const paginicial = document.getElementById("paginainicio")
    video.addEventListener("ended", function() {
      video.style.display = "none"
      paginicial.style.display = "flex"
      document.getElementById("cliqueinicial").style.display = "none"
      document.getElementById("intro").style.display = "none"

    });
  }

    document.getElementById("d1").addEventListener('click', function() {                         //Sons de Transição
    document.getElementById("somtransicao1").play();
  });

  document.getElementById("d2").addEventListener('click', function() {
    setTimeout(function() {
        document.getElementById("somtransicao2").play();
    }, 3800);
});

document.getElementById("d3").addEventListener('click', function() {
    setTimeout(function() {
        document.getElementById("somtransicao3").play();
    }, 2000);
});

  const musica = new Audio('audio/somdefundo.mp4');                      //Musica de Fundo  
      musica.loop = true;

      const botao = document.getElementById('msc');
      const icon = document.getElementById('icon-musica');

      botao.addEventListener('click', () => {
        if (musica.paused) {
          musica.currentTime = 0;
          musica.play();
          icon.src = "img/Com som.png";
          icon.style.width = "40px"
          icon.alt = "Pause";
        } else {
          musica.pause();
          icon.src = "img/Sem som.png";
          icon.alt = "Play";
          icon.style.width = "40px"
        }
      });

  const clickSound = document.getElementById('click');                                             //Som do Botão

  const botoes = document.querySelectorAll("button");

  botoes.forEach(botao => {
      botao.addEventListener("click", () => {
          clickSound.currentTime = 0;
          clickSound.play();
      });
  });


  function paginasobremim() {
    document.getElementById("sobremim").style.display = "flex"                                     // Sobre Mim
    document.getElementById("paginainicio").style.display = "none"

    document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,0.7)"  
  }

  function voltardosm() {
    document.getElementById("paginainicio").style.display = "flex"   
    document.getElementById("sobremim").style.display = "none"

    document.getElementById("overlay").style.backgroundColor = "rgba(255, 255, 255, 0)" 
  }

  function minhasconquistas() {
    document.getElementById("paginainicio").style.display = "none"                                  //Conquistas
    document.getElementById("minhasconquistas").style.display = "flex"

    document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,0.7)"
  }

  function voltardasc() {
    document.getElementById("minhasconquistas").style.display = "none"
    document.getElementById("paginainicio").style.display = "flex"

    document.getElementById("overlay").style.backgroundColor ="rgba(255, 255, 255, 0)"

  }

  function escolherdimensao() {                                                                     //Dimensões
    document.getElementById("paginainicio").style.display = "none"
    document.getElementById("escolherdimensao").style.display = "flex"

    document.getElementById("overlay").style.backgroundColor ="rgba(0,0,0,0.7)"
  }

  function voltardoed() {
    document.getElementById("paginainicio").style.display = "flex"
    document.getElementById("escolherdimensao").style.display = "none"

    document.getElementById("overlay").style.backgroundColor ="rgba(255, 255, 255, 0)"
  }

  function pqmine() {                                                                              //Justificativa
    document.getElementById("paginainicio").style.display = "none"
    document.getElementById("opcoes").style.display = "flex"

    document.getElementById("overlay").style.backgroundColor ="rgba(0,0,0,0.7)"
  }

  function voltardopqm() {
    document.getElementById("paginainicio").style.display = "flex"
    document.getElementById("opcoes").style.display = "none"

    document.getElementById("overlay").style.backgroundColor ="rgba(255, 255, 255, 0)"
  }

  function ativarmarketplace() {                                                                   //Marketplace
    document.getElementById("paginainicio").style.display = "none"
    document.getElementById("pageskins").style.display = "flex"
    

    document.getElementById("overlay").style.backgroundColor ="rgba(0,0,0,0.7)"
  }

  function voltardomp() {
    document.getElementById("paginainicio").style.display = "flex"
    document.getElementById("pageskins").style.display = "none"
    document.getElementById("overlay").style.backgroundColor ="rgba(255,255,255,0)"

  }

 function selectskin1() {
  document.getElementById("skinmenu").src = "video/Skins/gifstevrodano.mp4"
  document.getElementById("descricaoskin").innerText = "Esta é a versão base, simples e direta, sem firulas. Me representa em meu estado natural, autêntico."
  document.getElementById("nickskin").innerText = "Steve Clássico"
 }

  function selectskin2() {
  document.getElementById("skinmenu").src = "video/Skins/gifestudantesesi.mp4"
  document.getElementById("descricaoskin").innerText = "Essa e minha versão que representa foco e dedicação ao estudar e aprender. A versão que busca evoluir todos os dias"
  document.getElementById("nickskin").innerText = "Steve do SESI"
 }

   function selectskin3() {
  document.getElementById("skinmenu").src = "video/Skins/gifadventurer.mp4"
  document.getElementById("descricaoskin").innerText = "Essa skin representa a minha corajem e curiosidade sem limites. Mostra que eu encaro qualuqer desafio."
  document.getElementById("nickskin").innerText = "titulo alterado"
 }

  function selectskin4() {
  document.getElementById("skinmenu").src = "video/Skins/gifgamer.mp4"
  document.getElementById("descricaoskin").innerText = "Com headset gamer e energia, essa skin representa a minha paixão por videogames e minha competitividade."
  document.getElementById("nickskin").innerText = "titulo alterado"
 }

  function selectskin5() {
  document.getElementById("skinmenu").src = "video/Skins/gifhacker.mp4"
  document.getElementById("descricaoskin").innerText = "Essa skin no estilo 'hacker' representa a minha versão tecnológica, o meu lado que curte mexer com códigos e programação."
  document.getElementById("nickskin").innerText = "Steve Hacker"
 }

  function selectskin6() {
  document.getElementById("skinmenu").src = "video/Skins/gifrubikcube.mp4"
  document.getElementById("descricaoskin").innerText = "Com a cabeça de cubo mágico, essa skin representa o meu lado afiado em raciocínio lógico rápido e estratégias."
  document.getElementById("nickskin").innerText = "Steve Rubik Cube"
 }

  function selectskin7() {
  document.getElementById("skinmenu").src = "video/Skins/gifengracadao.mp4"
  document.getElementById("descricaoskin").innerText = "Com o rosto todo distorcido e detalhes engraçados, essa skin demostra minha versão descontraída e divertida."
  document.getElementById("nickskin").innerText = "Steve Brincalhão"
 }

  function selectskin8() {
  document.getElementById("skinmenu").src = "video/Skins/gifstevdeluxe.mp4"
  document.getElementById("descricaoskin").innerText = "Com o terno e uma expressão fechada, essa skin representa a minha disciplina e responsabilidade, mostrando que também sei ser focado."
  document.getElementById("nickskin").innerText = "Steve Business"
 }

  function selectskin9() {
  document.getElementById("skinmenu").src = "video/Skins/gifyingyang.mp4"
  document.getElementById("descricaoskin").innerText = "Metade clara, metade escura, balanceada. Mostra que eu busco a paz, mesmo no caos. É minha versão equilibrada."
  document.getElementById("nickskin").innerText = "Steve Ying Yang"
 }

  function selectskin10() {
  document.getElementById("skinmenu").src = "video/Skins/gifpintor.mp4"
  document.getElementById("descricaoskin").innerText = "Com traços de tinta criativos na roupa, essa skin caracteriza a minha imaginação ilimitada na criação de artes."
  document.getElementById("nickskin").innerText = "Steve Artista"
 }

  function selectskin11() {
  document.getElementById("skinmenu").src = "video/Skins/giftrader.mp4"
  document.getElementById("descricaoskin").innerText = "Essa skin no estilo do villager ambulante demonstra minha habilidade de negociação. É o meu lado comerciante e comunicativo."
  document.getElementById("nickskin").innerText = "Steve Comerciante"
 }

  function selectskin12() {
  document.getElementById("skinmenu").src = "video/Skins/gifcreator.mp4"
  document.getElementById("descricaoskin").innerText = "Com capaçete e roupas de obra, essa skin caracteriza a minha criatividade prática no mundo real. Mostra que eu sei pôr a mão na massa."
  document.getElementById("nickskin").innerText = "Steve Criativo"
 }

function selecionarskin() {
  const skinMenu = document.getElementById("skinmenu");
  const exibida = document.getElementById("skinexibidanomenu");
  const src = skinMenu.src; // URL completa

  if (src.endsWith("gifstevrodano.mp4")) {
    exibida.src = "img/Skins/steve.png";
  } else if (src.endsWith("gifestudantesesi.mp4")) {
    exibida.src = "img/Skins/stevesesi.png";
  } else if (src.endsWith("gifadventurer.mp4")) {
    exibida.src = "img/Skins/steveaventurero.png";
  } else if (src.endsWith("gifcreator.mp4")) {
    exibida.src = "img/Skins/stevebuilder.png";
  } else if (src.endsWith("gifengracadao.mp4")) {
    exibida.src = "img/Skins/stevelokao.png";
  } else if (src.endsWith("gifgamer.mp4")) {
    exibida.src = "img/Skins/stevegamerr.png";
  } else if (src.endsWith("gifhacker.mp4")) {
    exibida.src = "img/Skins/stevehack.png";
  } else if (src.endsWith("gifpintor.mp4")) {
    exibida.src = "img/Skins/stevepintor.png";
  } else if (src.endsWith("gifrubikcube.mp4")) {
    exibida.src = "img/Skins/stevecubo.png";
  } else if (src.endsWith("gifstevdeluxe.mp4")) {
    exibida.src = "img/Skins/stevelindao.png";
  } else if (src.endsWith("giftrader.mp4")) {
    exibida.src = "img/Skins/comerciante.png";
  } else if (src.endsWith("gifyingyang.mp4")) {
    exibida.src = "img/Skins/steveblackwhite.png";
  }

  const aviso = document.getElementById("skinequipadaaviso");
  aviso.style.display = "block";

  // depois de 4 segundos, some
  setTimeout(() => {
    aviso.style.display = "none";
  }, 3000);
}

  function ativarfirst() {                                                                        //Primeiro Ano
    document.getElementById("paginainicio").style.display = "none"
    document.getElementById("escolherdimensao").style.display = "none"
    document.getElementById("primeiroano").style.display = "flex"
    document.getElementById("intro1").style.display = "flex"

    const introo = document.getElementById("introo")
    introo.play();

    introo.addEventListener("ended", function() {
    document.getElementById("intro1").style.display = "none"
    document.body.style.backgroundImage = "url(https://www.gifs.nl/media/minecraft-gifs-AZKBmM.gif)"
    document.getElementById("overlay").style.backgroundColor ="rgba(0,0,0,0.5)"
  });
}
    
  function voltardopa() {
    document.getElementById("paginainicio").style.display = "none"
    document.getElementById("escolherdimensao").style.display = "flex"
    document.getElementById("primeiroano").style.display = "none"
    document.body.style.backgroundImage = "url(https://images7.alphacoders.com/418/418742.jpg)"
    document.getElementById("introd1").style.display = "none"
  }

  function matematica() {
    document.getElementById("atividades").style.display = "none"
    document.getElementById("inventarioM").style.display = "flex"
    document.getElementById("inventarioL").style.display = "none"
    document.getElementById("inventarioN").style.display = "none"
    document.getElementById("inventarioH").style.display = "none"
    document.getElementById("inventarioP").style.display = "none"
    document.getElementById("inventarioS").style.display = "none"
    document.getElementById("blmt").style.backgroundColor = "green"
    document.getElementById("bllg").style.backgroundColor = "gray"
    document.getElementById("blnz").style.backgroundColor = "gray"
    document.getElementById("blhm").style.backgroundColor = "gray"
    document.getElementById("blpv").style.backgroundColor = "gray"
    document.getElementById("blsn").style.backgroundColor = "gray"
  }
    function linguagens() {
    document.getElementById("atividades").style.display = "none"
    document.getElementById("inventarioM").style.display = "none"
    document.getElementById("inventarioL").style.display = "flex"
    document.getElementById("inventarioN").style.display = "none"
    document.getElementById("inventarioH").style.display = "none"
    document.getElementById("inventarioP").style.display = "none"
    document.getElementById("inventarioS").style.display = "none"
    document.getElementById("blmt").style.backgroundColor = "gray"
    document.getElementById("bllg").style.backgroundColor = "green"
    document.getElementById("blnz").style.backgroundColor = "gray"
    document.getElementById("blhm").style.backgroundColor = "gray"
    document.getElementById("blpv").style.backgroundColor = "gray"
    document.getElementById("blsn").style.backgroundColor = "gray"
  }
    function natureza() {
    document.getElementById("atividades").style.display = "none"
    document.getElementById("inventarioM").style.display = "none"
    document.getElementById("inventarioL").style.display = "none"
    document.getElementById("inventarioN").style.display = "flex"
    document.getElementById("inventarioH").style.display = "none"
    document.getElementById("inventarioP").style.display = "none"
    document.getElementById("inventarioS").style.display = "none"
    document.getElementById("blmt").style.backgroundColor = "gray"
    document.getElementById("bllg").style.backgroundColor = "gray"
    document.getElementById("blnz").style.backgroundColor = "green"
    document.getElementById("blhm").style.backgroundColor = "gray"
    document.getElementById("blpv").style.backgroundColor = "gray"
    document.getElementById("blsn").style.backgroundColor = "gray"
  }
    function humanas() {
    document.getElementById("atividades").style.display = "none"
    document.getElementById("inventarioM").style.display = "none"
    document.getElementById("inventarioL").style.display = "none"
    document.getElementById("inventarioN").style.display = "none"
    document.getElementById("inventarioH").style.display = "flex"
    document.getElementById("inventarioP").style.display = "none"
    document.getElementById("inventarioS").style.display = "none"
    document.getElementById("blmt").style.backgroundColor = "gray"
    document.getElementById("bllg").style.backgroundColor = "gray"
    document.getElementById("blnz").style.backgroundColor = "gray"
    document.getElementById("blhm").style.backgroundColor = "green"
    document.getElementById("blpv").style.backgroundColor = "gray"
    document.getElementById("blsn").style.backgroundColor = "gray"
  }
    function projvida() {
    document.getElementById("atividades").style.display = "none"
    document.getElementById("inventarioM").style.display = "none"
    document.getElementById("inventarioL").style.display = "none"
    document.getElementById("inventarioN").style.display = "none"
    document.getElementById("inventarioH").style.display = "none"
    document.getElementById("inventarioP").style.display = "flex"
    document.getElementById("inventarioS").style.display = "none"
    document.getElementById("blmt").style.backgroundColor = "gray"
    document.getElementById("bllg").style.backgroundColor = "gray"
    document.getElementById("blnz").style.backgroundColor = "gray"
    document.getElementById("blhm").style.backgroundColor = "gray"
    document.getElementById("blpv").style.backgroundColor = "green"
    document.getElementById("blsn").style.backgroundColor = "gray"
    }
    function senai() {
    document.getElementById("atividades").style.display = "none"
    document.getElementById("inventarioM").style.display = "none"
    document.getElementById("inventarioL").style.display = "none"
    document.getElementById("inventarioN").style.display = "none"
    document.getElementById("inventarioH").style.display = "none"
    document.getElementById("inventarioP").style.display = "none"
    document.getElementById("inventarioS").style.display = "flex"
    document.getElementById("blmt").style.backgroundColor = "gray"
    document.getElementById("bllg").style.backgroundColor = "gray"
    document.getElementById("blnz").style.backgroundColor = "gray"
    document.getElementById("blhm").style.backgroundColor = "gray"
    document.getElementById("blpv").style.backgroundColor = "gray"
    document.getElementById("blsn").style.backgroundColor = "green"
  }

    function showatvdM1() {                                     //MATEMATICA
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Questão OBMEP"
    document.getElementById("fotoatvd").src = "img/Atividades/aulaquetsao.jpeg"
    document.getElementById("descricaoatvd").innerText = "Nessa aula, eu e Wellyson resolvemos uma questão da OBMEP no quadro."
  }

  function showatvdM2() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Aula de Função"
    document.getElementById("fotoatvd").src = "img/Atividades/aulafuncao2.jpeg"
    document.getElementById("descricaoatvd").innerText = "Nesse dia, eu dei uma aula de função quadrática em 6 minutos."
  }
  
  function showatvdM3() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Mapa Mental"
    document.getElementById("fotoatvd").src = "img/Atividades/mmtriangulos.jpeg"
    document.getElementById("descricaoatvd").innerText = "Essa foi uma atividade de aprofundamento, onde fizemos um mapa mental sobre triângulos."
  }

  function showatvdM4() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Geometria"
    document.getElementById("fotoatvd").src = "img/Atividades/piramidesarq.jpeg"
    document.getElementById("descricaoatvd").innerText = "Neste dia, apresentamos um trabalho sobre a geometria na arquitetura egípcia."
  }

  function showatvdM5() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Salário Mínimo"
    document.getElementById("fotoatvd").src = "img/Atividades/tarefadesalario.jpeg"
    document.getElementById("descricaoatvd").innerText = "Essa foi uma atividade que precisamos distribuir um salário mínimo para suprir as necessidades de uma família."
  }

  function showatvdM6() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Atividade em grupo"
    document.getElementById("fotoatvd").src = "img/Atividades/salariaominimo.jpeg"
    document.getElementById("descricaoatvd").innerText = "Neste dia, fizemos um trabalho parecido com o anterior, porém em grupo e com slide."
  }

  function showatvdM7() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Prismas"
    document.getElementById("fotoatvd").src = "img/Atividades/farmdeaura.jpeg"
    document.getElementById("descricaoatvd").innerText = "Essa foi uma apresentação em grupo sobre os prismas e tudo que o envolve."
  }

  function showatvdM8() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Questões SSA"
    document.getElementById("fotoatvd").src = "img/Atividades/questoesdossa.jpeg"
    document.getElementById("descricaoatvd").innerText = "Nesse dia, o professor Assis resolveu questões da prova de matemática do SSA1 de 2024."
  }

  function showatvdL1() {                                       //LINGUAGENS
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Carnaval SESI"
    document.getElementById("fotoatvd").src = "img/Atividades/carnavalsesi.jpeg"
    document.getElementById("descricaoatvd").innerText = "Neste dia, nós realizamos a cofecção do banner e instrumentos para o evento de carnaval do SESI."
  }

  function showatvdL2() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Júri Simulado"
    document.getElementById("fotoatvd").src = "img/Atividades/jurisimulado.jpeg"
    document.getElementById("descricaoatvd").innerText = "Na referida data, simulamos um tribunal sobre a redução da maioridade penal."
  }
  
  function showatvdL3() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Memes na Linguagem"
    document.getElementById("fotoatvd").src = "img/Atividades/memes.jpeg"
    document.getElementById("descricaoatvd").innerText = "Essa foi uma atividade que mostramos como os memes estão associados à linguagem."
  }

  function showatvdL4() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Apresentação de Livro"
    document.getElementById("fotoatvd").src = "img/Atividades/trabaidevitin.png"
    document.getElementById("descricaoatvd").innerText = "Nesse dia, apresentamos, por meio de um breve teatro, um livro de Ana Maria Gonçalves."
  }

  function showatvdL5() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Manifesto"
    document.getElementById("fotoatvd").src = "img/Atividades/manifesto.jpeg"
    document.getElementById("descricaoatvd").innerText = "Essa foi uma atividade onde gravamos um vídeo em formato de manifesto."
  }

  function showatvdL6() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Quiz Kahoot"
    document.getElementById("fotoatvd").src = "img/Atividades/kahootvitin.jpeg"
    document.getElementById("descricaoatvd").innerText = "Essa foi uma atividade interativa, onde fizemos um quiz sobre linguagem verbal e não verbal."
  }

  function showatvdL7() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Interclasse"
    document.getElementById("fotoatvd").src = "img/Atividades/interclasse2025.jpeg"
    document.getElementById("descricaoatvd").innerText = "Esse foi o Interclasse 2025, cujo eu participei de algumas modalidades."
  }

  function showatvdL8() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Quiz em Dupla"
    document.getElementById("fotoatvd").src = "img/Atividades/quizcomsansone.jpeg"
    document.getElementById("descricaoatvd").innerText = "Essa foi uma aula destinada a um quiz sobre movimentos literários."
  }

    function showatvdN1() {                                     //NATUREZA
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Método Científico"
    document.getElementById("fotoatvd").src = "img/Atividades/mtdc.jpeg"
    document.getElementById("descricaoatvd").innerText = "Nesse dia, aprendemos e aplicamos o método científico em uma pesquisa."
  }

  function showatvdN2() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Microscopia"
    document.getElementById("fotoatvd").src = "img/Atividades/microscopio.jpeg"
    document.getElementById("descricaoatvd").innerText = "Nesse dia, vimos uma pata de abelha e o caule de uma plante no microscópio."
  }
  
  function showatvdN3() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Célula Animal"
    document.getElementById("fotoatvd").src = "img/Atividades/cel.animal.jpeg"
    document.getElementById("descricaoatvd").innerText = "Essa foi uma atividade em fanzine sobre célula animal, onde aprendemos mais detalhadamente sobre ela."
  }

  function showatvdN4() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Célula Vegetal"
    document.getElementById("fotoatvd").src = "img/Atividades/cel.vegetal.jpeg"
    document.getElementById("descricaoatvd").innerText = "Nesta atividade, aprendemos, através de um fanzine, sobre as partes da célula vegetal."
  }

  function showatvdN5() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Ecologia"
    document.getElementById("fotoatvd").src = "img/Atividades/trabaidapiramideecologica.jpeg"
    document.getElementById("descricaoatvd").innerText = "Esse foi um trabalho em cartolina que apresentamos sobre pirâmides ecológicas e cadeia alimentar."
  }

  function showatvdN6() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Pirâmides"
    document.getElementById("fotoatvd").src = "img/Atividades/graminea.jpeg"
    document.getElementById("descricaoatvd").innerText = "Essa foi uma atividade onde simulamos diferentes pirâmides de energia."
  }

  function showatvdN7() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Relatividade"
    document.getElementById("fotoatvd").src = "img/Atividades/Relatividade.jpeg"
    document.getElementById("descricaoatvd").innerText = "Nesse dia, apresentamos um trabalho sobre a Teoria da Relatividade, proposta por Albert Einstein."
  }

  function showatvdN8() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Lapbook"
    document.getElementById("fotoatvd").src = "img/Atividades/relacoesecologicas.jpeg"
    document.getElementById("descricaoatvd").innerText = "Essa foi uma aula onde aprendemos sobre as relações ecológicas por meio de um lapbook."
  }

    function showatvdH1() {                                     //HUMANAS
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Vale do Indo"
    document.getElementById("fotoatvd").src = "img/Atividades/maquetehist.jpeg"
    document.getElementById("descricaoatvd").innerText = "Esse foi um de nossos primeiro trabalhos do ano, onde fizemos maquetes retratando civilizações antigas."
  }

  function showatvdH2() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Pré-socráticos"
    document.getElementById("fotoatvd").src = "img/Atividades/trabaidefilo.jpeg"
    document.getElementById("descricaoatvd").innerText = "Esse foi um trabalho criado e apresentado no mesmo dia, sobre os filósofos pre-socráticos."
  }
  
  function showatvdH3() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Cotratualistas"
    document.getElementById("fotoatvd").src = "img/Atividades/ototrabaidefilo.jpeg"
    document.getElementById("descricaoatvd").innerText = "Esse também foi um trabalho sobre os filósofos, mas dessa vez sobre os contratualistas."
  }

  function showatvdH4() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Seminário de História"
    document.getElementById("fotoatvd").src = "img/Atividades/seminariodehist.jpeg"
    document.getElementById("descricaoatvd").innerText = "Esse foi o seminário de história organizado pelo professor Victor sobre a sociedade feudal."
  }

  function showatvdH5() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Documentos Históricos"
    document.getElementById("fotoatvd").src = "img/Atividades/docspe.jpeg"
    document.getElementById("descricaoatvd").innerText = "Neste trabalho, apresentamos documentos históricos da revolução pernambucana."
  }

  function showatvdH6() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Mapa metal"
    document.getElementById("fotoatvd").src = "img/Atividades/trabalhohumano.jpeg"
    document.getElementById("descricaoatvd").innerText = "Nesse dia, aprendemos e fizemos um mapa mental sobre o trabalho humano."
  }

  function showatvdH7() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Filosofia de Satre"
    document.getElementById("fotoatvd").src = "img/Atividades/filosofiasatr.jpeg"
    document.getElementById("descricaoatvd").innerText = "Esse foi um trabalho sobre o existencialismo, onde usamos apenas imagens."
  }

  function showatvdH8() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Ditadura Militar"
    document.getElementById("fotoatvd").src = "img/Atividades/ditaduramilitar.jpeg"
    document.getElementById("descricaoatvd").innerText = "Esse foi um seminário sobre a Ditadura Militar no Brasil, onde investigamos casos reais."
  }

    function showatvdP1() {                                     //PROJETO DE VIDA
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Carta do Futuro"
    document.getElementById("fotoatvd").src = "img/Atividades/cartafuturo.jpeg"
    document.getElementById("descricaoatvd").innerText = "Essa foi a primeira atividade pra portfólio, onde fizemos uma carta do nosso 'eu do futuro' para o 'eu do presente'."
  }

  function showatvdP2() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Linha do Tempo"
    document.getElementById("fotoatvd").src = "img/Atividades/linhadotempo.jpeg"
    document.getElementById("descricaoatvd").innerText = "Nessa atividade, fizemos uma linha do tempo de acontecimentos marcantes de nossas vidas."
  }
  
  function showatvdP3() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Leitura"
    document.getElementById("fotoatvd").src = "img/Atividades/pqnpriincp.jpeg"
    document.getElementById("descricaoatvd").innerText = "Neste dia, lemos trechos do livro 'O Pequeno Príncipe' com o professor Wollace."
  }

  function showatvdP4() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Minha Órbita"
    document.getElementById("fotoatvd").src = "img/Atividades/minhaorbita.jpeg"
    document.getElementById("descricaoatvd").innerText = "Neste dia, apresentamos um trabalho onde precisávamos contar um pouco de nossa jornada."
  }

  function showatvdP5() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Ikigai"
    document.getElementById("fotoatvd").src = "img/Atividades/ikigai.jpeg"
    document.getElementById("descricaoatvd").innerText = "Essa foi onde vimos o ponto de equilíbrio entre nossa paixão, talento, missão e profissão."
  }

  function showatvdP6() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Redação"
    document.getElementById("fotoatvd").src = "img/Atividades/redacaodewalace.jpeg"
    document.getElementById("descricaoatvd").innerText = "Neste dia, o professor passou uma redação sobre a operância ou inoperância da justiça brasileira."
  }

  function showatvdP7() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Interpretação"
    document.getElementById("fotoatvd").src = "img/Atividades/textosdepjvd.jpeg"
    document.getElementById("descricaoatvd").innerText = "Estes foram textos usados para fazer uma atividade de interpretação e compreensão textual."
  }

  function showatvdP8() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Influência"
    document.getElementById("fotoatvd").src = "img/Atividades/ifluencia.jpeg"
    document.getElementById("descricaoatvd").innerText = "Esse foi um mapa mental sobre influências."
  }

  function showatvdS5() {                                       //SENAI
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Garrafa Ecology"
    document.getElementById("fotoatvd").src = "img/Atividades/garrafa.jpeg"
    document.getElementById("descricaoatvd").innerText = "Nessa atividade, tivemos que criar um item sustentável que pode ser usado no cotidiano. "
  }

  function showatvdS6() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Qualidade e Produtividade"
    document.getElementById("fotoatvd").src = "img/Atividades/sustentabilidade.jpeg"
    document.getElementById("descricaoatvd").innerText = "Nessa atividade, exploramos as ferramentas usadas pra a correção de problemas de qualidade e produtividade"
  }

  function showatvdS7() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Visita ao SENAI"
    document.getElementById("fotoatvd").src = "img/Atividades/visitasenai.jpeg"
    document.getElementById("descricaoatvd").innerText = "Nesse dia, visitamos os laboratórios do SENAI."
  }

  function showatvdS8() {
    document.getElementById("atividades").style.display = "flex"
    document.getElementById("tituloatvd").innerText = "Sobre Mim"
    document.getElementById("fotoatvd").src = "img/Atividades/sobremimdosenai.jpeg"
    document.getElementById("descricaoatvd").innerText = "Essa foi uma redação sobre mim, contando um pouco sobre minhas aspirações."
  }

function ativarsecond() {                                                                        //Segundo  Ano
    document.getElementById("paginainicio").style.display = "none"
    document.getElementById("escolherdimensao").style.display = "none"
    document.getElementById("segundoano").style.display = "flex"
    document.getElementById("intro2").style.display = "flex"
    document.getElementById("voltardosa").style.display = "none"

    const intron = document.getElementById("intron")
    intron.play();

    intron.addEventListener("ended", function() {
    document.getElementById("intro2").style.display = "none"
    document.body.style.backgroundImage = "url(https://tse4.mm.bing.net/th/id/OIP.GPMixuK3UsK0avPq0-l89AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3)"
    document.getElementById("overlay").style.backgroundColor ="rgba(0,0,0,0.4)"
    document.getElementById("voltardosa").style.display = "flex"
    });
  }

  function voltardosa() {
    document.getElementById("segundoano").style.display = "none"
    document.getElementById("escolherdimensao").style.display = "flex"
    document.body.style.backgroundImage = "url(https://images7.alphacoders.com/418/418742.jpg)";
  }

  function ativarthird() {                                                                        //Terceiro  Ano
    document.getElementById("paginainicio").style.display = "none"
    document.getElementById("escolherdimensao").style.display = "none"
    document.getElementById("terceiroano").style.display = "flex"
    document.getElementById("intro3").style.display = "flex"
    document.getElementById("voltardota").style.display = "none"

    const introe = document.getElementById("introe")
    introe.play();

    introe.addEventListener("ended", function() {
    document.getElementById("intro3").style.display = "none"
    document.body.style.backgroundImage = "url(img/backgroundtheend.jpeg)"
    document.getElementById("overlay").style.backgroundColor ="rgba(0,0,0,0.4)"
    document.getElementById("voltardota").style.display = "flex"
  }
  )};

  function voltardota() {
    document.getElementById("terceiroano").style.display = "none"
    document.getElementById("escolherdimensao").style.display = "flex"
    document.body.style.backgroundImage = "url(https://images7.alphacoders.com/418/418742.jpg)";
  }