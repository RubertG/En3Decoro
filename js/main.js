// variables
const lista = document.querySelector('.header-title-sub-list ul')

// eventos
document.addEventListener('click', (lugar) => {
    if (window.innerWidth < 991) {
        if (lugar.target.matches('.navbar-icon') || lugar.target.matches('.line1-icon') || lugar.target.matches('.line2-icon') || lugar.target.matches('.line3-icon')) {
            animacionMenu()
            menu()
            cerrarSubmenu()
        } else if (lugar.target.matches('.nav-list-productos-title') || lugar.target.matches('.nav-list-productos-title svg')) {
            submenu()
        } else {
            cerrarAnimacionMenu()
            cerrarMenu()
            cerrarSubmenu()
        }
    }
    // } else if (lugar.target.matches('.nav-list-productos-title') || lugar.target.matches('.nav-list-productos-title svg')) {
    //     submenu()
    // }


})


// funciones
function animacionMenu() {
    document.querySelector('.line1-icon').classList.toggle('line1-icon-animation')
    document.querySelector('.line2-icon').classList.toggle('line2-icon-animation')
    document.querySelector('.line3-icon').classList.toggle('line3-icon-animation')
}

function cerrarAnimacionMenu() {
    document.querySelector('.line1-icon').classList.remove('line1-icon-animation')
    document.querySelector('.line2-icon').classList.remove('line2-icon-animation')
    document.querySelector('.line3-icon').classList.remove('line3-icon-animation')
}

function menu() {
    document.querySelector('.navbar').classList.toggle('navbar-show')
    document.querySelector('.navbar-nav').classList.toggle('navbar-nav-show')
}

function cerrarMenu() {
    document.querySelector('.navbar').classList.remove('navbar-show')
    document.querySelector('.navbar-nav').classList.remove('navbar-nav-show')
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

function frames() {
    const animacion = lista.animate([
        // keyFrames
        { transform: 'TranslateY(0px)' },
        { transform: 'TranslateY(-1.16em)' }
    ], {
        // options
        easing: 'linear',
        iterations: 1,
        duration: 450 //milisegundos
    })

    return animacion.finished
}

function displace() {
    frames()
        // si la promesa termina satisfactoriamente
        .then(() => {
            lista.appendChild(document.querySelectorAll('.header-title-sub-list ul > li')[0])
        })
}

// para que se repita constantemente
setInterval(() => {
    displace()
}, 2000)