let loginsCorretos = []
let senhasCorretas = []
let tentativasFalhas = []
function button1(){
    
    let login = document.getElementById('text').value
    let senhas = document.getElementById('password').value

    if(loginsCorretos.indexOf(login) != -1 && senhasCorretas.indexOf(senhas) != -1){
        window.open ('about.html')
        alert('SUUUPPEEEEER')
    }

    else{
        alert('Login e/ou senha incrorreta')
        document.getElementById('text').value = null;
        document.getElementById('password').value = null;

    }

}




function voltar(){
window.location.href='index.html'
}

function button2(){
    let loginNovo = document.getElementById ('text').value
    let senhaNova = document.getElementById ('password').value

    if(loginNovo != loginsCorretos && senhaNova != senhasCorretas){
        loginsCorretos.push(loginNovo)
        senhasCorretas.push(senhaNova)
        document.getElementById('text').value = null;
        document.getElementById('password').value = null;
        alert('Cadastro concluído!')
    }
}