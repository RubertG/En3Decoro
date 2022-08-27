// variables


// eventos
document.addEventListener('click', (lugar) => {

    if (lugar.target.matches('.navbar-icon') || lugar.target.matches('.line1-icon') || lugar.target.matches('.line2-icon') || lugar.target.matches('.line3-icon')) {
        animacionMenu()
        menu()
        cerrarSubmenu()
    }

    if (lugar.target.matches('.nav-list-productos-title') || lugar.target.matches('.nav-list-productos-title svg')) {
        submenu()
    }
})


// funciones
function animacionMenu() {
    document.querySelector('.line1-icon').classList.toggle('line1-icon-animation')
    document.querySelector('.line2-icon').classList.toggle('line2-icon-animation')
    document.querySelector('.line3-icon').classList.toggle('line3-icon-animation')
}

function menu() {
    document.querySelector('.navbar').classList.toggle('navbar-show')
    document.querySelector('.navbar-nav').classList.toggle('navbar-nav-show')
}

function submenu() {
    document.querySelector('.nav-list-productos').classList.toggle('nav-list-productos-show')
    document.querySelector('.nav-list-productos svg').classList.toggle('svg-rotar')
    document.querySelector('.navbar').classList.toggle('navbar-show-submenu')
}

function cerrarSubmenu() {
    document.querySelector('.nav-list-productos').classList.remove('nav-list-productos-show')
    document.querySelector('.nav-list-productos svg').classList.remove('svg-rotar')
    document.querySelector('.navbar').classList.remove('navbar-show-submenu')
}