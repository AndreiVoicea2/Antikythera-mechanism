const panels = document.querySelectorAll('.panel')

const bg = document.querySelector('.bg')

let load=0
let int = setInterval(blurring,30)

function blurring(){

     load+=3
     
     if(load>99)
     {
        clearInterval(int)

     } 

     bg.style.filter = `blur(${scale(load , 0 , 100 , 30 , 0)}px)`
} 

const scale = (num , in_min , in_max , out_min , out_max) => {
 
return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;

}

panels.forEach((panel) => {

 panel.addEventListener('click' , () => {

   removeActiveClasses() 
   panel.classList.add('active')


 })


})

function removeActiveClasses()
{
panels.forEach(panel => {

panel.classList.remove('active')

})


}