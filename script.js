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
        let buttonLi = document.createElement("button")
        let checkbox = document.createElement("input")
        checkbox.type = 'checkbox'

        buttonLi.textContent = "Remover"

        li.innerText = nomeArmazenado

        
        li.appendChild(checkbox)
        li.appendChild(buttonLi)

        let lista = document.getElementById("listaTarefas")
        lista.appendChild(li)
        
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                li.style.color = "green"
            } else {
                li.style.color = "black"
            }
        })

        
        buttonLi.addEventListener("click", () => {
            li.remove()
            mensagem.innerText=""
        })

        inputTarefa.value = ""
    }
})