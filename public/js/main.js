let carre = document.querySelector('#grand_carre')

document.querySelector('#W').addEventListener('click', () => {
    carre.style.backgroundColor = 'white'
})
document.querySelector('#R').addEventListener('click', () => {
    carre.style.backgroundColor = 'red'
})
document.querySelector('#G').addEventListener('click', () => {
    carre.style.backgroundColor = 'limegreen'
})
document.querySelector('#B').addEventListener('click', () => {
    carre.style.backgroundColor = 'royalblue'
})

document.querySelector('#solid').addEventListener('click', () => {
    carre.style.border = 'solid'
})
document.querySelector('#dashed').addEventListener('click', () => {
    carre.style.border = 'dashed'
})
document.querySelector('#dotted').addEventListener('click', () => {
    carre.style.border = 'dotted'
})

document.querySelector('#top_1').addEventListener('click', () => {
    carre.style.borderTop = 'none'
})
document.querySelector('#top_2').addEventListener('click', () => {
    if (carre.style.borderTop == 'solid') {
        carre.style.borderTop = '5px solid'
    }
    if (carre.style.borderTop == 'dashed') {
        carre.style.borderTop = '5px dashed'
    }
    if (carre.style.borderTop == 'dotted') {
        carre.style.borderTop = '5px dotted'
    }
})
document.querySelector('#top_3').addEventListener('click', () => {

    if (carre.style.borderTop == 'solid') {
        carre.style.borderTop = '10px solid'
    }
    if (carre.style.borderTop == 'dashed') {
        carre.style.borderTop = '10px dashed'
    }
    if (carre.style.borderTop == 'dotted') {
        carre.style.borderTop = '10px dotted'
    }
})