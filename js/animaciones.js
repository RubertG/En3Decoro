const animar = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('mostrar-animacion')
        }
    })
}

const observador = new IntersectionObserver(animar, {
    // elemento de nuestro viewport
    root: null,
    rootMargin: '-50px 0px',
    // cuando queremos que ejecute el codigo
    threshold: .6
})

document.querySelectorAll('.ocultar-derecha').forEach((obj) => {
    observador.observe(obj)
})

document.querySelectorAll('.ocultar-izquierda').forEach((obj) => {
    observador.observe(obj)
})