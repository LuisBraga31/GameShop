const cardteste = document.querySelectorAll('.card-destaque');

const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const headerModal = document.querySelector(".modal-title");
const corpoModal = document.querySelector(".modal-body");

const imagens = [
    {
        nome: 'detroit',
        titulo: 'Detroit: Become Human',
        texto: 'Detroit: Become Human é um jogo eletrônico produzido pela Quantic Dream e publicado pela Sony Interactive Entertainment para o PlayStation 4 e Microsoft Windows PC.'
    },
    {
        nome: 'fifa',
        titulo: 'Fifa 21',
        texto: 'FIFA 21 é um videogame de simulação de esportes desenvolvido e publicado pela Electronic Arts, tendo como estrela da capa o jogador Kylian Mbappé. O jogo foi anunciado em 19 de junho de 2020, sendo, no mesmo ano, oficialmente publicado no dia 9 de outubro.'
    },
    {
        nome: 'mkombat',
        titulo: 'Mortal Kombat',
        texto: 'Mortal Kombat 11 é um jogo eletrônico de luta desenvolvido pela NetherRealm Studios e publicado pela Warner Bros. Interactive Entertainment. É a décima primeira edição principal da série de jogos eletrônicos de luta, Mortal Kombat, e uma continuação direta de Mortal Kombat X.'
    },
];


const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

function openModal(teste) {
    for(let i = 0; i < imagens.length; i++) {
        if(teste.id === imagens[i].nome) {
            headerModal.innerText = imagens[i].titulo;
            corpoModal.innerHTML = `<p> ${imagens[i].texto} </p>`;
            toggleModal();
        }
    }
}   

for(let i = 0; i < cardteste.length; i++) {
    cardteste[i].addEventListener("click", (ev) => openModal(cardteste[i]));
}
