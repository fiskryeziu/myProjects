let contentSlider = document.querySelector('.container_Slider')
let slides = document.querySelectorAll('.slider');
let prevBtn = document.querySelector('.prev')
let nextBtn = document.querySelector('.next')
// console.log(slides);

nextBtn.addEventListener('click',() =>
{
    let current = document.querySelector('.current')
    current.classList.remove('current')    
    let next =current.nextElementSibling;
    if(next)
    {
      next.classList.add('current')

    }
    else
    {
        slides[0].classList.add('current')

    }
    // current.classList.remove('current')
})
prevBtn.addEventListener('click',() =>
{
    let current = document.querySelector('.current')
    current.classList.remove('current')    
    let prev =current.previousElementSibling;
    if(prev)
    {
        prev.classList.add('current')
    }
    else{

        slides[slides.length-1].classList.add('current')
    }
    // currrent.classList.remove('current')

})