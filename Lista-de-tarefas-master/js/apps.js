const btnAddTarefa = document.querySelector("#add_tarefa")
const lstAFazer = document.querySelector("#a-fazer")
const lstFeito = document.querySelector("#feito")

const adicionarTarefa = function(ev) {

    //retira o evento de enviar formulário
    ev.preventDefault()
    
    //captura o valor do input de texto
    const tarefa = document.querySelector("#tarefa").value

    //não deixa ser adicionada uma tarefa fazia
    if (tarefa.length < 1) {
        return;
    }

    //cria uma li na lista de tarefas e insere o valor do input no li
    const novaTarefa = document.createElement("li")

    const editar = document.createElement("img")
    
    editar.onclick = function(e){
        e.preventDefault()
        e.stopPropagation()

        document.querySelector("#tarefa").value = editar.parentElement.innerText
        document.querySelector("#tarefa").focus()

        lstAFazer.removeChild(e.target.parentElement)
    }

    editar.className = "delete-icon"
    editar.src = "img/editar.png"

    novaTarefa.innerText = tarefa
    novaTarefa.appendChild(editar)
    lstAFazer.appendChild(novaTarefa)

    //deixando o input vazio depois de adicionar a tarefa
    document.querySelector("#tarefa").value = ""


    //removendo o (Adicione tarefa á lista)
    const itemVazio = lstAFazer.querySelector(".lista-vazia")
    lstAFazer.removeChild(itemVazio)


}

const moverParaFeito = function(ev) {

    //captura o valor do li clickado
    const tarefa = ev.target.innerText

    //não deixa ser enviada tarefa vazia ou o li que tem "Adicione tarefas à lista"
    if (tarefa.length < 1 || tarefa == "Adicione tarefas à lista") {
        return;
    }

    //cria um li na lista de tarefas feita
    const novaTarefa = document.createElement("li")
    novaTarefa.innerText = tarefa
    //faz um risco na palavra e deixa com cor cinza
    novaTarefa.style.textDecoration = "line-through"
    novaTarefa.style.color = "grey"
    //Cria um imagem da lixeira ao lado do texto do li
    const lixeira = document.createElement("img")
    lixeira.className = "delete-icon"
    lixeira.src = "img/lixeira.png"

    novaTarefa.appendChild(lixeira)

    lstFeito.appendChild(novaTarefa)
    lstAFazer.removeChild(ev.target)

    //removendo o (Nenhuma tarefa concluida)
    const itemVazio = lstFeito.querySelector(".lista-vazia")
    lstFeito.removeChild(itemVazio)


}

const removerTarefa = function(ev) {
    //captura o li da lista de tarefas feitas ao clickar na imagem fa lixeira
    const tarefa = ev.target.parentElement

    //remove o li da lista de tarefa feita
    lstFeito.removeChild(tarefa)
   
}

btnAddTarefa.addEventListener("click", adicionarTarefa)

lstAFazer.addEventListener("click", moverParaFeito)

lstFeito.addEventListener("click", removerTarefa)