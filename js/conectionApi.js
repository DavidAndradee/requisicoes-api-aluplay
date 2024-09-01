async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvert = await conexao.json();
    
    return conexaoConvert;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    if (!conexao.ok) {
        throw new Error("Não foi possivel enviar o video")
    }
    const convertidaConexao = await conexao.json();
    return convertidaConexao;
}

async function buscaVideo(termBusca){
    const conection = await fetch(`http://localhost:3000/videos?q=${termBusca}`)
    const conexaoConvertida = conection.json();
    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}