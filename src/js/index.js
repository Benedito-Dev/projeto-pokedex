/*
quando clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos
1 - listagem
2 - cartão do pokémon

precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

- remover a classe aberto só do cartão que está aberto
- ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
-remover a classe ativo que marca o pokémon selecionado
-adicionar a classe ativo no item da lista selecionado 
*/


// Passo 1° precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    // Passo 2° vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

    pokemon.addEventListener('click', () => {
        console.log(pokemon)
        // remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        

        //ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value


        const cartaoParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoParaAbrir.classList.add('aberto')
        

        //remover a classe ativo que marca o pokémon selecionado
        const PokemonAtivoNaLista = document.querySelector('.ativo')
        PokemonAtivoNaLista.classList.remove('ativo')
//
        //adicionar a classe ativo no item da lista selecionado
        const PokemonSelecionadoNaLista = document.getElementById(idPokemonSelecionado)
        PokemonSelecionadoNaLista.classList.add('ativo')
    })
})