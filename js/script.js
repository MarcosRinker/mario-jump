const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clounds = document.querySelector('.nuvens');





/*para o pulo do mario, quando aperta uma tecla, ele adiciona o jump
e logo apos ele remove o jump para poder ser adicionado de novo*/
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump');
    }, 500);
}
document.addEventListener('keydown', jump);


/*Condição para o final do jogo*/

const loop = setInterval(() =>{

    /*pegando a posição das imagens*/
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloundsPosition = clounds.offsetLeft;

    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        clounds.style.animation = 'none';
        clounds.style.left = `${cloundsPosition}px`;

        mario.src = "./imagens/game-over.png";
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        
        clearInterval(loop);
    }
}, 10);




