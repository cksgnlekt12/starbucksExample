const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener('click',function(){
  // Search 아이콘을 누르면 input 에 focus한다.
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add("focused");
  // setAttribute : HTML 의 어떤 속성을 지정할때 쓴다..
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// blur는 focus 상태가 해제된 상태를 의미한다.
searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute('placeholder', '');
});



const badgeEl = document.querySelector("header .badges");

window.addEventListener('scroll',_.throttle(function(){
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .3, {
      opacity:0,
      display:'none'
    });
  }else{
    gsap.to(badgeEl, .3, {
      opacity:1,
      display:'block'
    });
  }
},300));


const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay:index * 0.7,
    opacity:1
  });
});


new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});