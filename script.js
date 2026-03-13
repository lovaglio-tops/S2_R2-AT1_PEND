let inputTarefa = document.getElementById("inputTarefa")
let btnAdicionar = document.getElementById("btnAdicionar")
let mensagem = document.getElementById("mensagem")

btnAdicionar.addEventListener("click", () => {

    let nomeArmazenado = inputTarefa.value

    if (nomeArmazenado === "") {
        mensagem.innerText = 'Digite algo!'
        mensagem.className = 'text-danger fw-bold'
    } else {

        mensagem.innerText = 'Tarefa inserida'
        mensagem.className = 'text-success fw-bold'

        let li = document.createElement("li")
        
   
        

        li.innerText = nomeArmazenado

        
        

        let lista = document.getElementById("listaTarefas")
        lista.appendChild(li)
        
        

        
    }
})
