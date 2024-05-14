// (ITEM 3) habilitar botão de cadastrar quando o usuario tiver pelo menos 4 caracteres e a senha tiver pelo menos 6 e as senhas forem iguais
function validarCampos() {
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const confirmar_senha = document.getElementById('confirmar_senha').value;
    const enviar = document.getElementById('enviar');

    if (nome.length < 4 || senha.length < 6 || senha != confirmar_senha){
        enviar.disabled = true;
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
    } else {
        enviar.disabled = true;
    }
}

// (ITEM 3) mostrar mensagem de cadastro, e mostrar botão de login
function cadastrar(){
    const mensagem = document.getElementById("mensagem");
    mensagem.style.display = 'block';
    mensagem.innerHTML = "Usuário cadastrado!<br><a class='nav-link' href='index.html'>Faça Login</a>"
}

// função para fazer login, pega as infos digitadas nos inputs usuario e senha, e redireciona o usuario para a página de cadastro de entidades
function entrar() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    // redirecionar para a página cadastro_entidade
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


// (ITEM 4) consultar cep e inserir nos campos de input, e criar a lista de cidades do estado em questãox
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
        bairro.value = data['bairro']
        cidade.value = data['localidade']
        cidade.innerHTML = `${data['localidade']}`
        uf.value = data['uf']

        // função para criar campos das cidades na lista suspensa (select)
        const resposta = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${data['uf']}/distritos`)
        const cidades = await resposta.json()

        // criar uma option para cada cidade do estado
        for (let i = 0; i < cidades.length; i++) {
            var option = document.createElement("option")
            option.text = cidades[i]['municipio']['nome']
            cidades_select.add(option)
        }

    } else if (uf.value.length == 2){
        // função para criar campos das cidades na lista suspensa (select)
        const resposta = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf.value}/distritos`)
        const cidades = await resposta.json()

        // criar uma option para cada cidade do estado
        for (let i = 0; i < cidades.length; i++) {
        var option = document.createElement("option")
        option.text = cidades[i]['municipio']['nome']
        cidades_select.add(option)
    }

    }

}

// (ITEM 4) limpar dados do item 4, todos os campos de cadastrar 
function limparDados(){
    const nome_empresa = document.getElementById("nome_empresa")
    const cnpj = document.getElementById("cnpj")
    const ano_fundacao = document.getElementById("ano_fundacao")
    const telefone = document.getElementById("telefone")
    const email = document.getElementById("email")

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
    telefone.value = ""
    email.value = ""
}

// (ITEM 4) criar o json que onde as entidades cadastradas serão salvas
let jsonEmpresas = {"empresas":[]}

// (ITEM 4) função para inserir os dados dos inputs na tabela
function inserir(){
    const nome_empresa = document.getElementById("nome_empresa")
    const cnpj = document.getElementById("cnpj")
    const ano_fundacao = document.getElementById("ano_fundacao")
    const telefone = document.getElementById("telefone")
    const email = document.getElementById("email")

    const cep = document.getElementById("cep")
    const logradouro = document.getElementById("logradouro")
    const bairro = document.getElementById("bairro")
    const cidade = document.getElementById("cidade")
    const uf = document.getElementById("uf")

    const tabela = document.getElementById("empresas")

    // adicionar linha e celulas na tabela 
    var linha = tabela.insertRow(1)
    var campo0 = linha.insertCell(0)
    var campo1 = linha.insertCell(1)
    var campo2 = linha.insertCell(2)
    var campo3 = linha.insertCell(3)
    var campo4 = linha.insertCell(4)
    var campo5 = linha.insertCell(5)

    campo0.innerHTML = nome_empresa.value
    campo1.innerHTML = cnpj.value
    campo2.innerHTML = email.value
    campo3.innerHTML = telefone.value
    campo4.innerHTML = ano_fundacao.value

    var endereco_completo = `${logradouro.value}, ${bairro.value}, ${cidade.value}, ${uf.value}, ${cep.value}`

    campo5.innerHTML = endereco_completo
    
    // Novo objeto a ser adicionado ao jsonEmpresas
    var novoObjeto = {
        "nome_empresa":  nome_empresa.value, 
        "cnpj": cnpj.value, 
        "ano_fundacao": ano_fundacao.value, 
        "telefone": telefone.value, 
        "email": email.value, 
        "cep": cep.value, 
        "logradouro": logradouro.value, 
        "bairro": bairro.value, 
        "cidade": cidade.value, 
        "uf": uf.value
    };

    // inserir no json o novo objeto criado
    jsonEmpresas.empresas.push(novoObjeto);

    console.log(jsonEmpresas)
}
