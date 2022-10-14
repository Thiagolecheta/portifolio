let quant = document.querySelectorAll('.slides .images')
let back = document.getElementById('back')
let next = document.getElementById('next')
let atual = 0
let image = document.getElementById('first_img')



back.addEventListener('click', ()=>{
    atual--
    slide()
})

next.addEventListener('click', ()=>{
    atual++
    slide()
})

function slide(){
    if(atual >= quant.length){
        atual = 0
    } else if (atual < 0){
        atual = quant.length-1
    }

    image.style.marginLeft = -50*atual+'px'
}

setInterval(()=>{
    atual++
    slide()
}, 3000)





//Animações js

window.sr = ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 400
});


//banner

sr.reveal('.tittle' , {
    delay: 500,
    origin: 'left'
});

sr.reveal('.image' , {
    delay: 600,
    origin: 'bottom'
});

sr.reveal('.buttonsArea', {
    delay: 600,
    origin: 'bottom'
})

//area sobre
sr.reveal('.titleAbout', {
    delay: 500,
    origin: 'left'
})

sr.reveal('.meText', {
    delay: 500,
    origin: 'bottom'
})


//area dos projetos
sr.reveal('.titleProjects', {
    delay: 500,
    origin: 'right'
})

sr.reveal('.p1', {
    delay: 500,
    origin: 'bottom'
})

sr.reveal('.p2', {
    delay: 800,
    origin: 'bottom'
})

sr.reveal('.p3', {
    delay: 700,
    origin: 'bottom'
})

sr.reveal('.p4', {
    delay: 1000,
    origin: 'bottom'
})

sr.reveal('.btn_more', {
    delay: 500,
    origin: 'bottom'
})


//form


sr.reveal('.form_title', {
    delay: 500,
    origin: 'left'
})

sr.reveal('.form_p', {
    delay: 600,
    origin: 'right'
})

sr.reveal('.form_contact', {
    delay: 700,
    origin: 'bottom'
})


sr.reveal('.img1', {
    delay: 700,
    origin: 'left'
})

sr.reveal('.t1', {
    delay: 800,
    origin: 'bottom'
})

sr.reveal('.img2', {
    delay: 900,
    origin: 'left'
})

sr.reveal('.t2', {
    delay: 1000,
    origin: 'bottom'
})

sr.reveal('.img3', {
    delay: 1100,
    origin: 'left'
})

sr.reveal('.t3', {
    delay: 1300,
    origin: 'bottom'
})

sr.reveal('.img4', {
    delay: 1400,
    origin: 'left'
})

sr.reveal('.t4', {
    delay: 1700,
    origin: 'bottom'
})

sr.reveal('.img5', {
    delay: 1800,
    origin: 'left'
})

sr.reveal('.t5', {
    delay: 2000,
    origin: 'bottom'
})

sr.reveal('.img6', {
    delay: 2100,
    origin: 'left'
})

sr.reveal('.t6', {
    delay: 2200,
    origin: 'bottom'
})



