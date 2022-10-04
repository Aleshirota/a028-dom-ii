// # Exercício 1
// Utilize o DOM para adicionar uma função ao clique do botão.
// Ao clicar no botão, um novo item deve ser adicionado ao 
// container.Por enquanto, o item não precisa de estilização.
// Ele pode ter apenas um texto, para facilitar sua visualização.

 function adicionaItem(event){
let novoItem = document.createElement("h2")
let novoConteudo = document.createTextNode("Novo item")
novoItem.appendChild(novoConteudo)
let referencia = document.getElementById("container")
referencia.insertAdjacentElement('beforeend', novoItem)
novoItem.classList.add("item")
novoItem.onclick = removeItem
 }

// # Exercício 2
// Altere a função criada no exercício 1 para que agora o clique no 
// botão faça a **estilização** do novo item

// function adicionaItem(event){
// const corItem = document.querySelector("")
// corItem.classList.remove("")
// corItem.classList.add("")
// }




// # Exercício 3

// Crie a função `removeItem`, que é chamada pelo `onclick` dos itens do container. 
// Esta função deve **remover** o elemento clicado.

// **Dica**: utilize a propriedade `event.target` para pegar o elemento clicado.

function removeItem(event){
    event.target.remove()

}