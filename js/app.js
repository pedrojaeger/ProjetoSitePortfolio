
const filter_btns = document.querySelectorAll(".filtro-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const footer_input = document.querySelector(".footer-input");
const hamburguer_menu = document.querySelector(".hamburguer-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");


footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
});

footer_input.addEventListener("blur", () => {
  if (footer_input.value != "") return;
  footer_input.classList.remove("focus");
});

/* ================ MENU HAMBURGUER ================*/
function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");

}

hamburguer_menu.addEventListener("click", () => {
  if(!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } 
  else {
    closeMenu();
  }
});

links.forEach(link => link.addEventListener("click", () => closeMenu()))

/* ================ FIM MENU HAMBURGUER ================*/







filter_btns.forEach( btn => btn.addEventListener("click", () => {
  filter_btns.forEach(button => button.classList.remove("active"));
  btn.classList.add('active');

  let filterValue = btn.dataset.filter;
  console.log(filterValue);

  $(".grid").isotope({filter: filterValue});
}) )


$('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    transitionDuration: '0.6s',
  }); 

  window.addEventListener("scroll", () => {
    skillsEffect();
    countUp();
  });
  
  function checkScroll(el) { 
    let rect = el.getBoundingClientRect();
    if (window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
  }
  
  function skillsEffect() {
    if (!checkScroll(skills_wrap)) return;
    skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
  }

//====================== SWIPER JS ====================================//

var mySwiper = new Swiper(".swiper-container", {
  speed: 1100,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});