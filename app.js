function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Verifica se o campo de pesquisa existe no DOM
    let campoPesquisa = document.getElementById("campo-pesquisa");
    
    // Se o campo não for encontrado, exibe uma mensagem de erro no console
    if (!campoPesquisa) {
        console.error("Elemento de pesquisa não encontrado!");
        return;
    }

    // Obtém o valor do campo de pesquisa
    let termoPesquisa = campoPesquisa.value;

    // Se o campo de pesquisa estiver vazio
    if (!termoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>";
        return;
    }

    // Converte o termo de pesquisa para letras minúsculas
    termoPesquisa = termoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLowerCase();

        // Verifica se o título, descrição ou tags contêm o termo de pesquisa
        if (titulo.includes(termoPesquisa) || descricao.includes(termoPesquisa) || tags.includes(termoPesquisa)) {
            // Gera o HTML do resultado da pesquisa
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    // Se não houver resultados, exibe uma mensagem padrão
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}