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

//deuxieme ranger de boutton
document.querySelector('#btn_1').addEventListener('input', () => {
    // let styleCarr = getComputedStyle(carre).border
    console.log(btn_2.value);
    carre.style.backgroundColor = btn_1.value 
})
document.querySelector('#btn_2').addEventListener('input', () => {
    // let styleCarr = getComputedStyle(carre).border
    console.log(btn_2.value);
    carre.style.borderWidth = `${btn_2.value}px` 
})

document.querySelector('#btn_3').addEventListener('input', () => {
    // let styleCarr = getComputedStyle(carre).border
    carre.style.borderTopWidth = `${btn_3.value}px`  
})
document.querySelector('#btn_4').addEventListener('input', () => {
    // let styleCarr = getComputedStyle(carre).border
    carre.style.borderRightWidth = `${btn_4.value}px`  
})
document.querySelector('#btn_5').addEventListener('input', () => {
    // let styleCarr = getComputedStyle(carre).border
    carre.style.borderBottomWidth = `${btn_5.value}px`  
})
document.querySelector('#btn_6').addEventListener('input', () => {
    // let styleCarr = getComputedStyle(carre).border
    carre.style.borderLeftWidth = `${btn_6.value}px`  
})