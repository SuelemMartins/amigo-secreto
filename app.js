// Array onde os nomes dos amigos serão armazenados
let amigos = [];

// Função para adicionar um nome à lista de amigos
function adicionarAmigo() {
    let input = document.getElementById('amigo'); // Corrigido o ID
    let nome = input.value.trim(); // Remove espaços em branco

    if (nome === '') {
        alert('Por favor, digite um nome!');
        return;
    }

    amigos.push(nome); // Adiciona nome ao array
    input.value = ''; // Limpa o campo
    atualizarListaAmigos(); // Atualiza a lista na tela
}
   
   
// Atualiza a lista de nomes na tela
function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa antes de atualizar

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li); // Adiciona item na lista
    }
}

// Realiza o sorteio de um amigo aleatório
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo!');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 O amigo sorteado foi: <strong>${nomeSorteado}</strong></li>`;
    document.getElementById('listaAmigos').innerHTML = '';
}

