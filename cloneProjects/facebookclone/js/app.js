let list = document.querySelectorAll(".navBar li");
// console.log(list);
let span = document.querySelectorAll("span.active");
// console.log(span);
let toggleBtn = document.getElementById('togglebtn');
let menuToggle = document.querySelector('.togglelinks');

for (let i = 0; i < list.length; i++) {
  let listHover = list[i];
  listHover.addEventListener("mouseover",() => span[i].classList.add("activehover"));
  listHover.addEventListener("mouseout",() => span[i].classList.remove("activehover"));
}


toggleBtn.addEventListener('click',() =>
{
  if(menuToggle.classList.contains('activeToggle'))
  {
  document.body.style.position = 'static'
   menuToggle.classList.remove('activeToggle')
  }
 else {
   menuToggle.classList.add('activeToggle')
   document.body.style.position = 'fixed'
  }
});
