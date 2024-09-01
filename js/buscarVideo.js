import { conectaApi } from "/conectionApi.js";
import constroiCard from "/mostrarVideos.js";

async function buscarVideo(evento){
    evento.preventDefault();

    const dadosPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosPesquisa);
    
    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(element => lista.appendChild(element.titulo, element.descricao, element.url, element.imagem))

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">esse conteúdo não exite</h2>`
    }

}


const bntPesquisa = document.querySelector("[data-botao-pesquisa]")

bntPesquisa.addEventListener("click", evento => buscarVideo(evento))
