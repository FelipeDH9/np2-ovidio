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


// (ITEM 4) consultar cep e inserir nos campos de input
async function consultaCep(){
    const cep = document.getElementById("cep").value;
    
    const logradouro = document.getElementById("logradouro");
    const bairro = document.getElementById("bairro");
    const cidades_select = document.getElementById("cidades");
    const cidade = document.getElementById("cidade");
    const uf = document.getElementById("uf");
    
    if(cep.length == 8) {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json()
        logradouro.value = data['logradouro']
        console.log(data['cep'])
        bairro.value = data['bairro']
        cidade.value = data['localidade']
        cidade.innerHTML = `${data['localidade']}`
        uf.value = data['uf']

        const resposta = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${data['uf']}/distritos`)
        const cidades = await resposta.json()
        console.log(cidades)

        for (let i = 0; i < cidades.length; i++) {
            let optn = elmts[i];
            let el = document.createElement("option");
            el.textContent = optn;
            el.value = optn;
            select.appendChild(el);
        }
        res.innerHTML = "Elements Added";

    }

}


// (ITEM 4) limpar dados do item 4, todos os campos de cadastrar 
function limparDados(){
    const nome_empresa = document.getElementById("nome_empresa")
    const cnpj = document.getElementById("cnpj")
    const ano_fundacao = document.getElementById("ano_fundacao")
    const teste1 = document.getElementById("teste1")
    const teste2 = document.getElementById("teste2")

    const cep = document.getElementById("cep")
    const logradouro = document.getElementById("logradouro")
    const bairro = document.getElementById("bairro")
    const cidade = document.getElementById("cidade")
    const uf = document.getElementById("uf")

    nome_empresa.value = ""
    cnpj.value = ""
    ano_fundacao.value = ""
    cep.value = ""
    logradouro.value = ""
    bairro.value = ""
    cidade.value = ""
    uf.value = ""

}
