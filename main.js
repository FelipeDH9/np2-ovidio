// (ITEM 3) habilitar botão de cadastrar quando o usuario tiver pelo menos 4 caracteres e a senha tiver pelo menos 6 e as senhas forem iguais
function validarCampos() {
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const confirmar_senha = document.getElementById('confirmar_senha').value;
    const enviar = document.getElementById('enviar');

    if (nome.length < 4){
        console.log("nome muito pequeno")
    } else if (senha.length < 6){
        console.log("senha muito pequeno")
    } else if(senha != confirmar_senha){
        console.log("senhas diferentes")
    } else {
        enviar.disabled = false;
    }
}

// (ITEM 2) habilitar botão de entrar quando o usuario tiver pelo menos 4 caracteres e a senha tiver pelo menos 6
function validar() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const enviar = document.getElementById('enviar');

    if (usuario.length > 3 && senha.length > 5){
        enviar.disabled = false;
    }
}

// (ITEM 3) mostrar mensagem de cadastro, e mostrar botão de login
function cadastrar(){
    const mensagem = document.getElementById("mensagem");
    mensagem.classList.add('ativa')
    mensagem.innerHTML = "Usuário cadastrado!<br><a class='nav-link' href='index.html'>Faça Login</a>"
}

// função para fazer login, pega as infos digitadas nos inputs usuario e senha, e redireciona o usuario para a página de cadastro de entidades
function entrar() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    
    window.location.replace("cadastro_entidade.html");
}

// (ITEM 3) função para limpar campos do cadastro de usuario
function limparCampos(){
    const nome = document.getElementById("nome");
    const senha = document.getElementById("senha");
    const confirmar_senha = document.getElementById("confirmar_senha");

    nome.value = "";
    senha.value = "";
    confirmar_senha.value = "";
    
}