const botaomenu = document.querySelector('.menu__opçoes')
const menu = document.querySelector('.menu__lateral')

botaomenu.addEventListener('click', () => {
    menu.classList.toggle('menu__lateral--ativo')
})