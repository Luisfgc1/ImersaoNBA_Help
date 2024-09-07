




function pesquisar() {
    let resultados = "";
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim(); // .trim remove os espaços no inicio e no fim
    

    if (!campoPesquisa) {
        section.innerHTML = "Digite algo na barra de pesquisa!";
        return;
    }
campoPesquisa = campoPesquisa.toLowerCase()
    let encontrouResultado = false; // Para verificar se pelo menos um resultado foi encontrado
    let titulo = "";
    let descricao = "";
    let tags = "";
    for (let dado of dados) {
         tags = dado.tags.toLowerCase()
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || dado.tags.includes(campoPesquisa)) {
            encontrouResultado = true; // Marcamos que encontramos um resultado
            resultados += `
                <div class="item-resultado">
                    <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Saiba mais!</a>
                </div>`;
        }
    }

    if (!encontrouResultado) {
        section.innerHTML = "Nenhum resultado encontrado!";
    } else {
        section.innerHTML = resultados;
    }
}
