let musicas = [
{titulo:'Rock leve', artista:'Beltrano', src:"musicas/Cattle - Telecasted.mp3", img:"imagens/img_rock.jpg"},
{titulo:'Rock para refletir', artista:'Ciclano', src:"musicas/Crops - Telecasted.mp3", img:"imagens/img_rock.jpg"},
{titulo:'Levada black', artista:'Fulano', src:"musicas/Illusions - Anno Domini Beats.mp3", img:"imagens/img_hiphop.jpg"},
{titulo:'Bom piano', artista:'Dito cujo', src:"musicas/Tinker Time - Nathan Moore.mp3", img:"imagens/img_alternativo.jpg"},
];
let musica = document.querySelector("audio");
let musicaIndex = 0;
let indexMusica = 0;


let duracaoMusica = document.querySelector(".fim");
let imagem = document.querySelector("img");
let nomeMusica = document.querySelector(".descricao h2");
let nomeArtista = document.querySelector(".descricao i");

renderizarMusica(indexMusica);


//Eventos
document.querySelector(".botao-play").addEventListener('click',tocarMusica);

document.querySelector(".fa-pause").addEventListener('click',pausarMusica);

musica.addEventListener("timeupdate", atualizarBarra);

document.querySelector(".anterior").addEventListener('click', () => {
     indexMusica--;   
     if (indexMusica < 0) {
        indexMusica = 3;
     }
    renderizarMusica(indexMusica);
});

document.querySelector(".proxima").addEventListener('click', () => {
   indexMusica++;
   if (indexMusica > 3){
    indexMusica = 0;
   }
    renderizarMusica(indexMusica);
});

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector("fa-pause").style.display = 'block';
    document.querySelector("botao-play").style.display = 'none';

}

function pausarMusica(){
    musica.pause();
    document.querySelector("fa-pause").style.display = 'none';
    document.querySelector("botao-play").style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos+':'+campoSegundos;
}

