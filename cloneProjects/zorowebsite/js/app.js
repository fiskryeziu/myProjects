const nav = document.getElementById('nav')
const navMenu = document.querySelector(".navmenu");
const menuOpen = document.querySelector(".menumobile");
const menuClose = document.querySelector(".menutoggle");
const btn = document.querySelector(".btn");
const body = document.body;
const sidebarMenuBg = document.getElementById("sidebar_menu_bg");
const searchMobile = document.querySelector(".searchmobile");
const searchBar = document.querySelector(".searchbar");
console.log(nav);

navMenu.addEventListener("click", (e) => {
  e.preventDefault();
  menuOpen.classList.add("toggleactive");
  sidebarMenuBg.style.display = "block";
  body.classList.add("body-hidden");
});
document.addEventListener("click", (e) => {
  if (
    e.target == sidebarMenuBg ||
    e.target == menuClose ||
    e.target.parentElement == menuClose
  ) {
    menuOpen.classList.remove("toggleactive");
    sidebarMenuBg.style.display = "none";
    body.classList.remove("body-hidden");
  }
  e.stopPropagation();
});
//search bar to display on click
searchMobile.addEventListener("click", () => {
 
  if (searchBar.style.display == "") {
    searchBar.style.display = "flex";
    searchMobile.firstElementChild.style.color = '#cae962'
  } else {
    searchBar.style.display = "";
    searchMobile.firstElementChild.style.color = '#fff'

  }
});
//fetch data
let getData = async () => {
  let response = await fetch(`https://api.jikan.moe/v3/top/anom`);
  let data = await response.json();
  console.log(data);
};
getData();

//swiperjs
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: true,
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const swiperTwo = new Swiper('.swiperTwo', {
  slidesPerView: 6,
  navigation: {
    nextEl: '.btn-nextTwo',
    prevEl: '.btn-prevTwo',
  },
  spaceBetween: 10,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    // when window width is >= 640px
    900: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1300: {
      slidesPerView: 6,
      spaceBetween: 10,
    }
  }
});


window.addEventListener('load',() =>{

  if(scrollY == '0')
{
  nav.style.backgroundColor = '';

}
  else
  {
    nav.style.backgroundColor = 'rgba(42, 44, 49,0.9)';

  }
})
window.addEventListener('scroll',() =>{

  if(scrollY == '0')
{
  nav.style.backgroundColor = '';

}
  else
  {
    nav.style.backgroundColor = 'rgba(42, 44, 49,0.9)';

  }
})