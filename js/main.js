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
})