function cadastrar() {
    const nome = document.getElementById('nome').value;
    const data_nasc = document.getElementById('data_nasc').value;
    const genero = document.getElementById('genero').value;
    const endereco = document.getElementById('endereco').value;
    const email = document.getElementById('email').value;
    const numero_tel = document.getElementById('numero_tel').value;
    const senha = document.getElementById('senha').value;

    console.log(`INSERT INTO users (nome, nascimento, genero, endereco, email, telefone, senha) VALUES (${nome}, ${data_nasc}, ${genero}, ${endereco}, ${email}, ${numero_tel}, ${senha})`);
}

function entrar() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    
    console.log('Fazer busca no banco de dados para ver se o usuario e senhae estão corretas. E pegar dados dos usuario')
}