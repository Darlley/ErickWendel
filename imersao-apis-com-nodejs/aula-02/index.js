/*
 * 0. Obter um usuário
 * 1. Obter o número de telefone de um usuário a partir de seu ID
 * 2. Obter o endereço do usuário pelo ID 
 */

function obterUsuario(callcback){
    setTimeout(function(){
        return callcback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario){
    setTimeout(() => {
        return {
            telefone: '93328678',
            ddd: '67'
        }
    }, 2000)
}

function obterEndereco(idUsuario){
}

function resolverUsuario(erro, usuario){
    console.log('Usuário: ', usuario)
}
obterUsuario(function resolverUsuario(error, usuario){
    error && console.log('Deu ruim', error);
    
})

const telefone = obterTelefone(usuario.id)

//console.log('Telefone: ', telefone)