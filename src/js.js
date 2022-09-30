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
        atual = quant.length-2
    }

    image.style.marginLeft = -200*atual+'px'
    document
}

setInterval(()=>{
    atual++
    slide()
}, 4000)
