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
    whoisme()

    document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,0.3)"  
  }

function whoisme() {
  document.getElementById("quemsoueu").style.backgroundColor = "green"
  document.getElementById("metas").style.backgroundColor = "gray"
  document.getElementById("cualidades").style.backgroundColor = "gray"
  document.getElementById("whoisme").style.display = "flex"
  document.getElementById("goals").style.display = "none"
  document.getElementById("qualities").style.display = "none"
}
function goals() {
  document.getElementById("quemsoueu").style.backgroundColor = "gray"
  document.getElementById("metas").style.backgroundColor = "green"
  document.getElementById("cualidades").style.backgroundColor = "gray"
  document.getElementById("whoisme").style.display = "none"
  document.getElementById("goals").style.display = "flex"
  document.getElementById("qualities").style.display = "none"
}
function qualities() {
  document.getElementById("quemsoueu").style.backgroundColor = "gray"
  document.getElementById("metas").style.backgroundColor = "gray"
  document.getElementById("cualidades").style.backgroundColor = "green"
  document.getElementById("whoisme").style.display = "none"
  document.getElementById("goals").style.display = "none"
  document.getElementById("qualities").style.display = "flex"
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

  function mostrarc1() {
    document.getElementById("imgconq").src = "img/Conquistas/entreinosesi.jpeg"
    document.getElementById("titleconq").innerText = "Aprovação no SESI Cabo, para Automação Industrial"
  }
  function sairc1() {
    document.getElementById("imgconq").src = ""
    document.getElementById("titleconq").innerText = ""
  }
  function mostrarc2() {
    document.getElementById("imgconq").src = "img/Conquistas/passeinoete.jpeg"
    document.getElementById("titleconq").innerText = "Aprovação no ETE, para Desenvolvimento de Sistemas"
  }
  function sairc2() {
    document.getElementById("imgconq").src = ""
    document.getElementById("titleconq").innerText = ""
  }
  function mostrarc3() {
    document.getElementById("imgconq").src = "img/Conquistas/certificadosween.jpeg"
    document.getElementById("titleconq").innerText = "Medalha de prata em matemática"
  }
  function sairc3() {
    document.getElementById("imgconq").src = ""
    document.getElementById("titleconq").innerText = ""
  } 
  function mostrarc4() {
    document.getElementById("imgconq").src = "img/Conquistas/PAG1.png"
    document.getElementById("titleconq").innerText = "Conclusão do curso de Algoritmos em Python"
  }
  function sairc4() {
    document.getElementById("imgconq").src = ""
    document.getElementById("titleconq").innerText = ""
  }
  function mostrarc5() {
    document.getElementById("imgconq").src = "img/Conquistas/primeirotreinonacode.jpeg"
    document.getElementById("titleconq").innerText = "Aprovado no processo seletivo da equipe"
  }
  function sairc5() {
    document.getElementById("imgconq").src = ""
    document.getElementById("titleconq").innerText = ""
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
  document.getElementById("descricaoskin").innerText = "Essa é minha versão que representa foco e dedicação ao estudar e aprender. A versão que busca evoluir todos os dias"
  document.getElementById("nickskin").innerText = "Steve do SESI"
 }

   function selectskin3() {
  document.getElementById("skinmenu").src = "video/Skins/gifadventurer.mp4"
  document.getElementById("descricaoskin").innerText = "Essa skin representa a minha corajem e curiosidade sem limites. Mostra que eu encaro qualquer desafio."
  document.getElementById("nickskin").innerText = "Steve Aventureiro"
 }

  function selectskin4() {
  document.getElementById("skinmenu").src = "video/Skins/gifgamer.mp4"
  document.getElementById("descricaoskin").innerText = "Com headset gamer e energia, essa skin representa a minha paixão por videogames e minha competitividade."
  document.getElementById("nickskin").innerText = "Steve Gamer"
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
  document.getElementById("descricaoskin").innerText = "Com o rosto todo distorcido e detalhes engraçados, essa skin demostra minha versão descontraída e divertido."
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
  document.getElementById("descricaoskin").innerText = "Com traços de tinta na roupa, essa skin caracteriza a minha imaginação ilimitada na criação de artes."
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

  

  //===========================================================================================================



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
    document.body.style.animation = "none"
    document.getElementById("overlay").style.backgroundColor ="rgb(0, 0, 0)"
    document.getElementById("voltardosa").style.display = "flex"
    });
  }

  function voltardosa() {
    document.getElementById("segundoano").style.display = "none"
    document.getElementById("escolherdimensao").style.display = "flex"
    document.getElementById("overlay").style.backgroundColor ="rgba(0, 0, 0, 0.4)"
    document.body.style.animation = "deslizarfundo 20s ease-in-out infinite"
  }


function mathpage() {
  document.getElementById("backgroundsa").style.display = "none"
  document.getElementById("maps-interface").style.display = "flex"
  document.getElementById("maps-interface").style.backgroundImage = "url(img/backrgounds/wither.jpg)"
  document.getElementById("botoesmath").style.display = "flex"
  document.getElementById("botoesling").style.display = "none"
  document.getElementById("botoesnatu").style.display = "none"
  document.getElementById("botoeshuma").style.display = "none"
  document.getElementById("botoessenai").style.display = "none"
  document.getElementById("botoesproj").style.display = "none"
  document.getElementById("botoescode").style.display = "none"
  mathbim1()
}

function mathbim1() {
  document.getElementById("fotoatvd2").src = "img/Atividades2.0/quizdelog.jpeg"
  document.getElementById("tituloatvd2").innerText = "Quiz de Log"
  document.getElementById("descricaoatvd2").innerText = "Esse foi um quiz online sobre as propriedades dos logarítmos."

  document.getElementById("fotoatvd22").src = "img/Atividades2.0/canguru.jpeg"
  document.getElementById("tituloatvd22").innerText = "Canguru"
  document.getElementById("descricaoatvd22").innerText = "Neste dia, fizemos a olimpíada canguru de mamemática, onde pudemos testar nossos conhecimentos."
  document.getElementById("1unidM").style.backgroundColor = "green"
  document.getElementById("2unidM").style.backgroundColor = "gray "
  document.getElementById("3unidM").style.backgroundColor = "gray"
  document.getElementById("4unidM").style.backgroundColor = "gray"
}
function mathbim2() {
  document.getElementById("fotoatvd2").src = "img/Atividades2.0/empresademath.jpeg"
  document.getElementById("tituloatvd2").innerText = "Empresa"
  document.getElementById("descricaoatvd2").innerText = "Neste projeto, o desafio foi criar uma empresa onde conhecimentos de matemática financeira pudessem ser aplicados."

  document.getElementById("fotoatvd22").src = "img/Atividades2.0/impostos.jpeg"
  document.getElementById("tituloatvd22").innerText = "Impostos na vida"
  document.getElementById("descricaoatvd22").innerText = "Essa foi uma atividade onde montamos um infográfico sobre os impostos aplicados no cotidiano."
  document.getElementById("1unidM").style.backgroundColor = "gray"
  document.getElementById("2unidM").style.backgroundColor = "green"
  document.getElementById("3unidM").style.backgroundColor = "gray"
  document.getElementById("4unidM").style.backgroundColor = "gray"
}
function mathbim3() {
  document.getElementById("fotoatvd2").src = ""
  document.getElementById("tituloatvd2").innerText = ""
  document.getElementById("descricaoatvd2").innerText = ""

  document.getElementById("fotoatvd22").src = ""
  document.getElementById("tituloatvd22").innerText = ""
  document.getElementById("descricaoatvd22").innerText = ""
  document.getElementById("1unidM").style.backgroundColor = "gray"
  document.getElementById("2unidM").style.backgroundColor = "gray"
  document.getElementById("3unidM").style.backgroundColor = "green"
  document.getElementById("4unidM").style.backgroundColor = "gray"
}
function mathbim4() {
  document.getElementById("fotoatvd2").src = ""
  document.getElementById("tituloatvd2").innerText = ""
  document.getElementById("descricaoatvd2").innerText = ""

  document.getElementById("fotoatvd22").src = ""
  document.getElementById("tituloatvd22").innerText = ""
  document.getElementById("descricaoatvd22").innerText = ""
  document.getElementById("1unidM").style.backgroundColor = "gray"
  document.getElementById("2unidM").style.backgroundColor = "gray"
  document.getElementById("3unidM").style.backgroundColor = "gray"
  document.getElementById("4unidM").style.backgroundColor = "green"
}

function lingpage() {
  document.getElementById("backgroundsa").style.display = "none"
  document.getElementById("maps-interface").style.display = "flex"
  document.getElementById("maps-interface").style.backgroundImage = "url(img/backrgounds/esqueleto.jpg)"
  document.getElementById("botoesmath").style.display = "none"
  document.getElementById("botoesling").style.display = "flex"
  document.getElementById("botoesnatu").style.display = "none"
  document.getElementById("botoeshuma").style.display = "none"
  document.getElementById("botoessenai").style.display = "none"
  document.getElementById("botoesproj").style.display = "none"
  document.getElementById("botoescode").style.display = "none"
  lingbim1()
}

function lingbim1() {
  document.getElementById("fotoatvd2").src = "img/Atividades2.0/immediatefuture.jpeg"
  document.getElementById("tituloatvd2").innerText = "Tempos Verbais"
  document.getElementById("descricaoatvd2").innerText = "Neste trabalho, apresentamos, em grupo, sobre o tempo verbal 'Immediate Future'."

  document.getElementById("fotoatvd22").src = "img/Atividades2.0/resenhacriticamacunaima.jpeg"
  document.getElementById("tituloatvd22").innerText = "Resenha Crítica"
  document.getElementById("descricaoatvd22").innerText = "Essa foi uma produção de texto em forma de resenha crítica sobre o a obra 'Macunaíma'."
  document.getElementById("1unidL").style.backgroundColor = "green"
  document.getElementById("2unidL").style.backgroundColor = "gray"
  document.getElementById("3unidL").style.backgroundColor = "gray"
  document.getElementById("4unidL").style.backgroundColor = "gray"
}
function lingbim2() {
  document.getElementById("fotoatvd2").src = "img/Atividades2.0/equilibrismo.jpeg"
  document.getElementById("tituloatvd2").innerText = "Equilibrismo"
  document.getElementById("descricaoatvd2").innerText = "Nesta atividade, apresentamos sobre o 'Equilibrismo', onde mostramos a parte teórica e prática."

  document.getElementById("fotoatvd22").src = "img/Atividades2.0/erreiquestao.jpeg"
  document.getElementById("tituloatvd22").innerText = "Resoluções"
  document.getElementById("descricaoatvd22").innerText = "Nesse dia, o professor Eudes colocou questões no quadro e pediu para que os alunos resolvessem."
  document.getElementById("1unidL").style.backgroundColor = "gray"
  document.getElementById("2unidL").style.backgroundColor = "green"
  document.getElementById("3unidL").style.backgroundColor = "gray"
  document.getElementById("4unidL").style.backgroundColor = "gray"
}

function lingbim3() {
  document.getElementById("fotoatvd2").src = ""
  document.getElementById("tituloatvd2").innerText = ""
  document.getElementById("descricaoatvd2").innerText = ""

  document.getElementById("fotoatvd22").src = ""
  document.getElementById("tituloatvd22").innerText = ""
  document.getElementById("descricaoatvd22").innerText = ""
  document.getElementById("1unidL").style.backgroundColor = "gray"
  document.getElementById("2unidL").style.backgroundColor = "gray"
  document.getElementById("3unidL").style.backgroundColor = "green"
  document.getElementById("4unidL").style.backgroundColor = "gray"
}
function lingbim4() {
  document.getElementById("fotoatvd2").src = ""
  document.getElementById("tituloatvd2").innerText = ""
  document.getElementById("descricaoatvd2").innerText = ""

  document.getElementById("fotoatvd22").src = ""
  document.getElementById("tituloatvd22").innerText = ""
  document.getElementById("descricaoatvd22").innerText = ""
  document.getElementById("1unidL").style.backgroundColor = "gray"
  document.getElementById("2unidL").style.backgroundColor = "gray"
  document.getElementById("3unidL").style.backgroundColor = "gray"
  document.getElementById("4unidL").style.backgroundColor = "green"
}

function natupage() {
  document.getElementById("backgroundsa").style.display = "none"
  document.getElementById("maps-interface").style.display = "flex"
  document.getElementById("maps-interface").style.backgroundImage = "url(img/backrgounds/piglin.jpg)"
  document.getElementById("botoesmath").style.display = "none"
  document.getElementById("botoesling").style.display = "none"
  document.getElementById("botoesnatu").style.display = "flex"
  document.getElementById("botoeshuma").style.display = "none"
  document.getElementById("botoessenai").style.display = "none"
  document.getElementById("botoesproj").style.display = "none"
  document.getElementById("botoescode").style.display = "none"
  natubim1()
}

function natubim1() {
  document.getElementById("fotoatvd2").src = "img/Atividades2.0/cruzadinhabiologia.jpeg"
  document.getElementById("tituloatvd2").innerText = "Cruzadinha"
  document.getElementById("descricaoatvd2").innerText = "Nesta atividade, fizemos uma cruzadinha com conteúdos referentes à biologia básica do ensino médio."

  document.getElementById("fotoatvd22").src = "img/Atividades2.0/mapamentalcalor.jpeg"
  document.getElementById("tituloatvd22").innerText = "Termodinâmica"
  document.getElementById("descricaoatvd22").innerText = "Esse foi um mapa mental onde exploramos os principais conceitos da termodinâmica e suas aplicações."
  document.getElementById("1unidN").style.backgroundColor = "green"
  document.getElementById("2unidN").style.backgroundColor = "gray"
  document.getElementById("3unidN").style.backgroundColor = "gray"
  document.getElementById("4unidN").style.backgroundColor = "gray"
}
function natubim2() {
  document.getElementById("fotoatvd2").src = "img/Atividades2.0/foguete.jpeg"
  document.getElementById("tituloatvd2").innerText = "OBAFOG"
  document.getElementById("descricaoatvd2").innerText = "Nesse projeto, fomos desafiados a construir foguetes utilizando garrafas pet e propulsão química."

  document.getElementById("fotoatvd22").src = "img/Atividades2.0/partesdocorpo.jpeg"
  document.getElementById("tituloatvd22").innerText = "Partes do Corpo"
  document.getElementById("descricaoatvd22").innerText = "Neste trabalho, nós falamos um pouco sobre articulações, tendões e ligamentos."
  document.getElementById("1unidN").style.backgroundColor = "gray"
  document.getElementById("2unidN").style.backgroundColor = "green"
  document.getElementById("3unidN").style.backgroundColor = "gray"
  document.getElementById("4unidN").style.backgroundColor = "gray"
}
function natubim3() {
  document.getElementById("fotoatvd2").src = ""
  document.getElementById("tituloatvd2").innerText = ""
  document.getElementById("descricaoatvd2").innerText = ""

  document.getElementById("fotoatvd22").src = ""
  document.getElementById("tituloatvd22").innerText = ""
  document.getElementById("descricaoatvd22").innerText = ""
  document.getElementById("1unidN").style.backgroundColor = "gray"
  document.getElementById("2unidN").style.backgroundColor = "gray"
  document.getElementById("3unidN").style.backgroundColor = "green"
  document.getElementById("4unidN").style.backgroundColor = "gray"
}
function natubim4() {
  document.getElementById("fotoatvd2").src = ""
  document.getElementById("tituloatvd2").innerText = ""
  document.getElementById("descricaoatvd2").innerText = ""

  document.getElementById("fotoatvd22").src = ""
  document.getElementById("tituloatvd22").innerText = ""
  document.getElementById("descricaoatvd22").innerText = ""
  document.getElementById("1unidN").style.backgroundColor = "greay"
  document.getElementById("2unidN").style.backgroundColor = "gray"
  document.getElementById("3unidN").style.backgroundColor = "gray"
  document.getElementById("4unidN").style.backgroundColor = "green"
}

function humapage() {
  document.getElementById("backgroundsa").style.display = "none"
  document.getElementById("maps-interface").style.display = "flex"
  document.getElementById("maps-interface").style.backgroundImage = "url(img/backrgounds/blaze.jpg)"
  document.getElementById("botoesmath").style.display = "none"
  document.getElementById("botoesling").style.display = "none"
  document.getElementById("botoesnatu").style.display = "none"
  document.getElementById("botoeshuma").style.display = "flex"
  document.getElementById("botoessenai").style.display = "none"
  document.getElementById("botoesproj").style.display = "none"
  document.getElementById("botoescode").style.display = "none"
  humabim1()
}

function humabim1() {
  document.getElementById("fotoatvd2").src = "img/Atividades2.0/povosoriginarios.jpeg"
  document.getElementById("tituloatvd2").innerText = "Povos Originários"
  document.getElementById("descricaoatvd2").innerText = "Esse foi um trabalho de cências humanas, onde fizemos uma dramatização sobre os povos indígenas."
  document.getElementById("1unidN").style.backgroundColor = "green"
  document.getElementById("2unidN").style.backgroundColor = "gray"
  document.getElementById("3unidN").style.backgroundColor = "gray"
  document.getElementById("4unidN").style.backgroundColor = "gray"

  document.getElementById("fotoatvd22").src = "img/Atividades2.0/independenciapquem.jpeg"
  document.getElementById("tituloatvd22").innerText = "Constituição-1824"
  document.getElementById("descricaoatvd22").innerText = "Neste projeto, meu grupo fez uma apresentação teatral com tema 'Independência pra quem?'."
  document.getElementById("1unidH").style.backgroundColor = "green"
  document.getElementById("2unidH").style.backgroundColor = "gray"
  document.getElementById("3unidH").style.backgroundColor = "gray"
  document.getElementById("4unidH").style.backgroundColor = "gray"
}
function humabim2() {
  document.getElementById("fotoatvd2").src = "img/Atividades2.0/massangana.jpeg"
  document.getElementById("tituloatvd2").innerText = "Aula-Campo"
  document.getElementById("descricaoatvd2").innerText = "Neste dia, fomos visitar o Engenho Massangana, onde pudemos aprender mais sobre a origem da nossa cidade."

  document.getElementById("fotoatvd22").src = "img/Atividades2.0/entrevistasocioeconomica.jpeg"
  document.getElementById("tituloatvd22").innerText = "Entrevistas"
  document.getElementById("descricaoatvd22").innerText = "Neste trabalho, nosso objetivo era realizar uma entrevista com algumas pessoas sobre sua situação socieconômica."
  document.getElementById("1unidH").style.backgroundColor = "gray"
  document.getElementById("2unidH").style.backgroundColor = "green"
  document.getElementById("3unidH").style.backgroundColor = "gray"
  document.getElementById("4unidH").style.backgroundColor = "gray"
}
function humabim3() {
  document.getElementById("fotoatvd2").src = ""
  document.getElementById("tituloatvd2").innerText = ""
  document.getElementById("descricaoatvd2").innerText = ""

  document.getElementById("fotoatvd22").src = ""
  document.getElementById("tituloatvd22").innerText = ""
  document.getElementById("descricaoatvd22").innerText = ""
  document.getElementById("1unidH").style.backgroundColor = "gray"
  document.getElementById("2unidH").style.backgroundColor = "gray"
  document.getElementById("3unidH").style.backgroundColor = "green"
  document.getElementById("4unidH").style.backgroundColor = "gray"
}
function humabim4() {
  document.getElementById("fotoatvd2").src = ""
  document.getElementById("tituloatvd2").innerText = ""
  document.getElementById("descricaoatvd2").innerText = ""

  document.getElementById("fotoatvd22").src = ""
  document.getElementById("tituloatvd22").innerText = ""
  document.getElementById("descricaoatvd22").innerText = ""
  document.getElementById("1unidH").style.backgroundColor = "gray"
  document.getElementById("2unidH").style.backgroundColor = "gray"
  document.getElementById("3unidH").style.backgroundColor = "gray"
  document.getElementById("4unidH").style.backgroundColor = "green"
}

function senaipage() {
  document.getElementById("backgroundsa").style.display = "none"
  document.getElementById("maps-interface").style.display = "flex"
  document.getElementById("maps-interface").style.backgroundImage = "url(img/backrgounds/enderman.jpg)"
  document.getElementById("botoesmath").style.display = "none"
  document.getElementById("botoesling").style.display = "none"
  document.getElementById("botoesnatu").style.display = "none"
  document.getElementById("botoeshuma").style.display = "none"
  document.getElementById("botoessenai").style.display = "flex"
  document.getElementById("botoesproj").style.display = "none"
  document.getElementById("botoescode").style.display = "none"
  senaibim1()
}

function senaibim1() {
  document.getElementById("fotoatvd2").src = "img/Atividades2.0/paulfoulstad.jpeg"
  document.getElementById("tituloatvd2").innerText = "Circuito Simulado"
  document.getElementById("descricaoatvd2").innerText = "Nesse dia, fomos ao laboratório de informática para realizar simulações virtuais de circuitos."

  document.getElementById("fotoatvd22").src = "img/Atividades2.0/eletroeletronica.jpeg"
  document.getElementById("tituloatvd22").innerText = "Eletroeletrônica"
  document.getElementById("descricaoatvd22").innerText = "Nesse dia, visitamos o laboratório de eletroeletrônica, onde conhecemos ferramentas usadas na indústria."
  document.getElementById("1unidS").style.backgroundColor = "green"
  document.getElementById("2unidS").style.backgroundColor = "gray"
  document.getElementById("3unidS").style.backgroundColor = "gray"
  document.getElementById("4unidS").style.backgroundColor = "gray"
}
function senaibim2() {
  document.getElementById("fotoatvd2").src = "img/Atividades2.0/seujorgecomproblemas.jpeg"
  document.getElementById("tituloatvd2").innerText = "Seu Jorge"
  document.getElementById("descricaoatvd2").innerText = "Nessa aula, o professor nos passou situações problemáticas na empresa, onde precisamos resolvê-los da melhor maneira."

  document.getElementById("fotoatvd22").src = "img/Atividades2.0/formas3d.jpeg"
  document.getElementById("tituloatvd22").innerText = "Formas 3D"
  document.getElementById("descricaoatvd22").innerText = "Neste dia, aplicamos nossos conhecimentos de desenho técnico em modelagem 3D."
  document.getElementById("1unidS").style.backgroundColor = "gray"
  document.getElementById("2unidS").style.backgroundColor = "green"
  document.getElementById("3unidS").style.backgroundColor = "gray"
  document.getElementById("4unidS").style.backgroundColor = "gray"
}
function senaibim3() {
  document.getElementById("fotoatvd2").src = ""
  document.getElementById("tituloatvd2").innerText = ""
  document.getElementById("descricaoatvd2").innerText = ""

  document.getElementById("fotoatvd22").src = ""
  document.getElementById("tituloatvd22").innerText = ""
  document.getElementById("descricaoatvd22").innerText = ""
  document.getElementById("1unidS").style.backgroundColor = "gray"
  document.getElementById("2unidS").style.backgroundColor = "gray"
  document.getElementById("3unidS").style.backgroundColor = "green"
  document.getElementById("4unidS").style.backgroundColor = "gray"
}
function senaibim4() {
  document.getElementById("fotoatvd2").src = ""
  document.getElementById("tituloatvd2").innerText = ""
  document.getElementById("descricaoatvd2").innerText = ""

  document.getElementById("fotoatvd22").src = ""
  document.getElementById("tituloatvd22").innerText = ""
  document.getElementById("descricaoatvd22").innerText = ""
  document.getElementById("1unidS").style.backgroundColor = "gray"
  document.getElementById("2unidS").style.backgroundColor = "gray"
  document.getElementById("3unidS").style.backgroundColor = "gray"
  document.getElementById("4unidS").style.backgroundColor = "green"
}

function projpage() {
  document.getElementById("backgroundsa").style.display = "none"
  document.getElementById("maps-interface").style.display = "flex"
  document.getElementById("maps-interface").style.backgroundImage = "url(img/backrgounds/ghast.jpg)"
  document.getElementById("botoesmath").style.display = "none"
  document.getElementById("botoesling").style.display = "none"
  document.getElementById("botoesnatu").style.display = "none"
  document.getElementById("botoeshuma").style.display = "none"
  document.getElementById("botoessenai").style.display = "none"
  document.getElementById("botoesproj").style.display = "flex"
  document.getElementById("botoescode").style.display = "none"
  projbim1()
}

function projbim1() {
  document.getElementById("fotoatvd2").src = "img/Atividades2.0/estacoes.jpeg"
  document.getElementById("tituloatvd2").innerText = "Estações"
  document.getElementById("descricaoatvd2").innerText = "Nesta atividade, relacionamos as estações do ano às etapas da juventude por meio do Trello."

  document.getElementById("fotoatvd22").src = "img/Atividades2.0/planejamento.jpeg"
  document.getElementById("tituloatvd22").innerText = "Planejamento"
  document.getElementById("descricaoatvd22").innerText = "Esse foi um site desenvolvido pelo grupo, onde citamos nossas metas, prazos e companhias."
  document.getElementById("1unidP").style.backgroundColor = "green"
  document.getElementById("2unidP").style.backgroundColor = "gray"
  document.getElementById("3unidP").style.backgroundColor = "gray"
  document.getElementById("4unidP").style.backgroundColor = "gray"
}
function projbim2() {
  document.getElementById("fotoatvd2").src = "img/Atividades2.0/antissocial.jpeg"
  document.getElementById("tituloatvd2").innerText = "Conexões"
  document.getElementById("descricaoatvd2").innerText = "Neste dia, realizamos um debate sobre estabelecer conexões e como elas influenciam."

  document.getElementById("fotoatvd22").src = "img/Atividades2.0/musicos.jpeg"
  document.getElementById("tituloatvd22").innerText = "Músicos"
  document.getElementById("descricaoatvd22").innerText = "Nessa aula, o professor pediu para que dois alunos cantassem algumas músicas e falassem sobre a mensagem que elas passam."
  document.getElementById("1unidP").style.backgroundColor = "gray"
  document.getElementById("2unidP").style.backgroundColor = "green"
  document.getElementById("3unidP").style.backgroundColor = "gray"
  document.getElementById("4unidP").style.backgroundColor = "gray"
}
function projbim3() {
  document.getElementById("fotoatvd2").src = ""
  document.getElementById("tituloatvd2").innerText = ""
  document.getElementById("descricaoatvd2").innerText = ""

  document.getElementById("fotoatvd22").src = ""
  document.getElementById("tituloatvd22").innerText = ""
  document.getElementById("descricaoatvd22").innerText = ""
  document.getElementById("1unidP").style.backgroundColor = "gray"
  document.getElementById("2unidP").style.backgroundColor = "gray"
  document.getElementById("3unidP").style.backgroundColor = "green"
  document.getElementById("4unidP").style.backgroundColor = "gray"
}
function projbim4() {
  document.getElementById("fotoatvd2").src = ""
  document.getElementById("tituloatvd2").innerText = ""
  document.getElementById("descricaoatvd2").innerText = ""

  document.getElementById("fotoatvd22").src = ""
  document.getElementById("tituloatvd22").innerText = ""
  document.getElementById("descricaoatvd22").innerText = ""
  document.getElementById("1unidP").style.backgroundColor = "gray"
  document.getElementById("2unidP").style.backgroundColor = "gray"
  document.getElementById("3unidP").style.backgroundColor = "gray"
  document.getElementById("4unidP").style.backgroundColor = "green"
}

function codepage() {
  document.getElementById("backgroundsa").style.display = "none"
  document.getElementById("maps-interface").style.display = "flex"
  document.getElementById("maps-interface").style.backgroundImage = "url(img/backrgounds/magma.png)"
  document.getElementById("botoesmath").style.display = "none"
  document.getElementById("botoesling").style.display = "none"
  document.getElementById("botoesnatu").style.display = "none"
  document.getElementById("botoeshuma").style.display = "none"
  document.getElementById("botoessenai").style.display = "none"
  document.getElementById("botoesproj").style.display = "none"
  document.getElementById("botoescode").style.display = "flex"
  codebim1()
}

function codebim1() {
  document.getElementById("fotoatvd2").src = "img/Atividades2.0/ftcsim.jpeg"
  document.getElementById("tituloatvd2").innerText = "Seletiva"
  document.getElementById("descricaoatvd2").innerText = "Essa foi a etapa da simulação digital do robô que ia usado em competições de FTC."

  document.getElementById("fotoatvd22").src = "img/Atividades2.0/montagemdorobo.jpeg"
  document.getElementById("tituloatvd22").innerText = "StormBreaker"
  document.getElementById("descricaoatvd22").innerText = "Nos primeiros dias de treino, iniciamos a montagem do protótipo do robô que irá ser usado nas competições."
  document.getElementById("1unidC").style.backgroundColor = "green"
  document.getElementById("2unidC").style.backgroundColor = "gray"
  document.getElementById("3unidC").style.backgroundColor = "gray"
  document.getElementById("4unidC").style.backgroundColor = "gray"
}
function codebim2() {
  document.getElementById("fotoatvd2").src = "img/Atividades2.0/visitafablab.jpeg"
  document.getElementById("tituloatvd2").innerText = "FAB LAB"
  document.getElementById("descricaoatvd2").innerText = "Neste dia, a equipe visitou a FAB LAB RECIFE no intuito de utilizar algumas ferramentas para a criação do robô."

  document.getElementById("fotoatvd22").src = "img/Atividades2.0/programandorobo.jpeg"
  document.getElementById("tituloatvd22").innerText = "Programando Robô"
  document.getElementById("descricaoatvd22").innerText = "Esse foi um dia onde eu e os programadores da equipe os juntamos para desenvolver o código do robô."
  document.getElementById("1unidC").style.backgroundColor = "gray"
  document.getElementById("2unidC").style.backgroundColor = "green"
  document.getElementById("3unidC").style.backgroundColor = "gray"
  document.getElementById("4unidC").style.backgroundColor = "gray"
}
function codebim3() {
  document.getElementById("fotoatvd2").src = ""
  document.getElementById("tituloatvd2").innerText = ""
  document.getElementById("descricaoatvd2").innerText = ""

  document.getElementById("fotoatvd22").src = ""
  document.getElementById("tituloatvd22").innerText = ""
  document.getElementById("descricaoatvd22").innerText = ""
  document.getElementById("1unidC").style.backgroundColor = "gray"
  document.getElementById("2unidC").style.backgroundColor = "gray"
  document.getElementById("3unidC").style.backgroundColor = "green"
  document.getElementById("4unidC").style.backgroundColor = "gray"
}
function codebim4() {
  document.getElementById("fotoatvd2").src = ""
  document.getElementById("tituloatvd2").innerText = ""
  document.getElementById("descricaoatvd2").innerText = ""

  document.getElementById("fotoatvd22").src = ""
  document.getElementById("tituloatvd22").innerText = ""
  document.getElementById("descricaoatvd22").innerText = ""
  document.getElementById("1unidC").style.backgroundColor = "gray"
  document.getElementById("2unidC").style.backgroundColor = "gray"
  document.getElementById("3unidC").style.backgroundColor = "gray"
  document.getElementById("4unidC").style.backgroundColor = "green"
}

function voltardasatv() {
  document.getElementById("backgroundsa").style.display = "flex"
  document.getElementById("maps-interface").style.display = "none"
  document.getElementById("maps-interface").style.backgroundImage = "url(img/fundonether.jpeg)"
}



//============================================================================================================



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