const formCadastro = document.getElementById("form-cadastro");
const tabela = document.getElementById("tabela-estoque");


// O DOM (Document Object Model) é como uma árvore de elementos que representa uma página da web.
//  Cada elemento da página é como um galho dessa árvore, e você pode acessar e 
//  modificar esses elementos com JavaScript para fazer coisas como adicionar ou remover conteúdo,
//   mudar o estilo da página e responder a eventos do usuário.
//    É como se você tivesse uma ferramenta para mexer na estrutura de uma página da web, 
//    o que permite que você faça coisas legais e interativas na internet.
// getElementById do objeto document para obter referências a elementos específicos 
// const porque seus valores não serão alterados após a atribuição inicial. 


// Cria um array vazio para armazenar os itens do estoque
let estoque = [];

// Adiciona um event listener para o formulário de cadastro quando for enviado
formCadastro.addEventListener("submit", function (event) {
    // Previne o comportamento padrão do formulário de recarregar a página
    event.preventDefault();

    // O método addEventListener() é usado para registrar uma função que será executada sempre que esse evento ocorrer.
    // event.preventDefault();, é usada para impedir o comportamento padrão do formulário de HTML,
    //  que é recarregar a página quando o formulário é submetido. Isso é feito porque, na maioria dos casos,
    //   quando um formulário é submetido, o objetivo é enviar os dados para o servidor e realizar alguma ação sem precisar
    //    recarregar a página. A função preventDefault() é usada para impedir que a página seja recarregada, permitindo que o 
    //    JavaScript continue executando outras ações com os dados do formulário.

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    console.log(nome)

    // Nesse trecho de código, estão sendo obtidos os valores dos elementos de formulário HTML 
    // com os IDs "nome", "preco", "quantidade" e "data-entrada".
    // Cada uma dessas linhas usa o método document.getElementById() 
    // para acessar o elemento HTML correspondente e, em seguida,
    //  o atributo value é usado para obter o valor atualmente inserido nesse campo de formulário.



    // Cria um objeto com as informações do item
    const item = nome;

    // Adiciona o item ao array de estoque
    estoque.push(item);
    alert("Item Adicionado!")

    // Limpa o formulário de cadastro
    formCadastro.reset();
});