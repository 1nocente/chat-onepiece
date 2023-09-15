'use strict'

const pessoas = [

    {
        nome: 'Monkey D. Luffy',
        imagem: 'luffy.jpg',
        mensagem: 'Eu serei o Rei dos Piratas!',
        contato: 'Chapéu de Palha',
        tempo: 'Há 1 hora',
        quantidade: '1'
    },

    {
        nome: 'Roronoa Zoro',
        imagem: 'zoro.jpg',
        mensagem: 'Nada me impedirá de me tornar o melhor espadachim!',
        contato: 'Caçador de Recompensas',
        tempo: 'Há 2 horas',
        quantidade: '5'
    },

    {
        nome: 'Nami',
        imagem: 'nami.jpg',
        mensagem: 'Precisamos do One Piece para salvar nossa vila!',
        contato: 'Navegadora',
        tempo: 'Há 3 horas',
        quantidade: '3'
    },

    {
        nome: 'Usopp',
        imagem: 'usopp.jpg',
        mensagem: 'Eu sou um bravo guerreiro dos Mugiwaras!',
        contato: 'Atirador de Elite',
        tempo: 'Há 4 horas',
        quantidade: '2'
    },

    {
        nome: 'Sanji',
        imagem: 'sanji.jpg',
        mensagem: 'Amor e comida são minhas paixões!',
        contato: 'Cozinheiro',
        tempo: 'Há 6 horas',
        quantidade: '4'
    },

    {
        nome: 'Tony Tony Chopper',
        imagem: 'chopper.jpg',
        mensagem: 'Eu sou um médico rena!',
        contato: 'Médico',
        tempo: 'Há 1 dia',
        quantidade: '1'
    },

    {
        nome: 'Nico Robin',
        imagem: 'robin.jpg',
        mensagem: 'A verdadeira história está nos Poneglyphs!',
        contato: 'Arqueóloga',
        tempo: 'Há 1 dia',
        quantidade: '1'
    },

    {
        nome: 'Franky',
        imagem: 'franky.jpg',
        mensagem: 'SUPER! Cola cola cola cola cola cola!',
        contato: 'Carpinteiro Ciborgue',
        tempo: 'Há 1 dia',
        quantidade: '3'
    }

]


const criarCard = (pessoa) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${pessoa.imagem}`
    img.alt = pessoa.nome

    const info = document.createElement('div')
    info.classList.add('info')

    const nomeContainer = document.createElement('div')
    nomeContainer.classList.add('nome-container')

    const nome = document.createElement('h3')
    nome.classList.add('nome')
    nome.textContent = pessoa.nome

    const qntMsg = document.createElement('span')
    qntMsg.classList.add('qnt-msg')
    qntMsg.textContent = pessoa.quantidade

    const mensagem = document.createElement('p')
    mensagem.classList.add('mensagem')
    mensagem.textContent = pessoa.mensagem

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = pessoa.tempo

    const contatoCard = document.createElement('div')
    contatoCard.classList.add('contato')

    const contato = document.createElement('p')
    contato.textContent = pessoa.contato

    card.appendChild(img)
    card.appendChild(info)
    card.appendChild(tempo)
    card.appendChild(contatoCard)
    info.appendChild(nomeContainer)
    info.appendChild(mensagem)
    nomeContainer.appendChild(nome)
    nomeContainer.appendChild(qntMsg)
    contatoCard.appendChild(contato)

    return card

}

const mostrarCards = (pessoa) => {

    const containerChat = document.getElementById('container-chat')
    const card = criarCard(pessoa)
    containerChat.appendChild(card)

} 

pessoas.forEach(mostrarCards)