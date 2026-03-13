let nomeCliente = document.getElementById("nomeCliente")
let btnSuccess = document.getElementById("btnSuccess")
let mensagem = document.getElementById("mensagem")
let nomeArmazenado;


btnSuccess.addEventListener("click", () => {
nomeArmazenado = nomeCliente.value
   
if (nomeArmazenado==="") {
    mensagem.innerText = 'insira um nome' 
}else{
    mensagem.innerText = `hello, ${nomeArmazenado}`
}   


})