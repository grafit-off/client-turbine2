let disableScroll=()=>{let e=window.scrollY;document.querySelector("html").style.scrollBehavior="auto",document.body.classList.add("ios-lock"),document.body.dataset.position=e,document.body.style.top=-e+"px"},enableScroll=()=>{let e=parseInt(document.body.dataset.position,10);document.body.style.top="auto",document.body.classList.remove("ios-lock"),window.scroll({top:e,left:0}),document.querySelector("html").removeAttribute("style"),document.body.removeAttribute("data-position")},scrollLock_BtnListener=e=>{e.addEventListener("click",o=>{e.classList.toggle("scroll"),e.classList.contains("scroll")?disableScroll():enableScroll()})};const modalButtons=document.querySelectorAll(".modal-btn"),lockPadding=document.querySelectorAll(".fixed-padding"),modalCloseButtons=document.querySelectorAll(".close-modal"),timeout=800;let currentCloseBtn,bodyWasNotLock,previousActiveElement,unlock=!0;if(0==lockPadding.length&&console.log('@MODALS: "Не забудьте добавить класс "fixed-padding" фиксированным элементам!"'),"function"==typeof disableScroll?console.log(`Тип данных переменных "disableScroll" и "enableScroll": "${typeof disableScroll}"! @scrollLockIOS: ON`):console.log(`Тип данных переменных "disableScroll" и "enableScroll": "${typeof disableScroll} и ${typeof enableScroll}"! Для IOS НЕ будет выполнятся скрипт scrollLockIOS`),modalButtons.length>0)for(let e=0;e<modalButtons.length;e++){const o=modalButtons[e];o.addEventListener("click",(function(e){const t=o.dataset.path,i=document.getElementById(t);null!=i?(console.log("Открыто модальное окно: "+t),modalOpen(i),setTimeout(()=>{modalCloseButtons.forEach(e=>{e.focus()})},100),e.preventDefault()):console.log("Такого модального окна нету! "+i)}))}if(modalCloseButtons.length>0)for(let e=0;e<modalCloseButtons.length;e++){const o=modalCloseButtons[e];currentCloseBtn=o,o.addEventListener("click",(function(e){modalClose(o.closest(".modal")),e.preventDefault()}))}function modalOpen(e){if(e&&unlock){previousActiveElement=document.activeElement;const o=document.querySelector(".modal.open");o?modalClose(o,!1):bodyLock(),e.classList.add("open"),e.addEventListener("mousedown",(function(e){e.target.closest(".modal__content")||modalClose(e.target.closest(".modal"))}))}}function modalClose(e,o=!0){unlock&&(e.classList.remove("open"),o&&bodyUnlock()),setTimeout((function(){previousActiveElement.focus()}),800)}function bodyLock(){const e=window.innerWidth-body.offsetWidth+"px";if(lockPadding.length>0)for(let o=0;o<lockPadding.length;o++){lockPadding[o].style.paddingRight=e}body.style.paddingRight=e,body.classList.contains("lock")?bodyWasNotLock=!1:(bodyWasNotLock=!0,"function"==typeof disableScroll&&(isiPhone||isiPad||isiPod)?disableScroll():body.classList.add("lock")),unlock=!1,setTimeout((function(){unlock=!0}),800)}function bodyUnlock(){setTimeout((function(){if(lockPadding.length>0)for(let e=0;e<lockPadding.length;e++){lockPadding[e].style.paddingRight="0px"}body.style.paddingRight="0px",1==bodyWasNotLock&&("function"==typeof enableScroll&&(isiPhone||isiPad||isiPod)?enableScroll():body.classList.remove("lock"))}),800)}document.addEventListener("keydown",(function(e){if(document.querySelector(".modal.open")&&27===e.which){modalClose(document.querySelector(".modal.open"))}})),Element.prototype.closest||(Element.prototype.closest=function(e){for(var o=this;o;){if(o.matches(e))return o;o=o.parentElement}return null}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);const isiPhone=null!=navigator.userAgent.match(/iPhone/i),isiPad=null!=navigator.userAgent.match(/iPad/i),isiPod=null!=navigator.userAgent.match(/iPod/i);if(isiPhone||isiPad||isiPod){(()=>{let e=document.querySelectorAll('[href^="#"]');for(let o=0;o<e.length;o++)e[o].addEventListener("click",(function(e){e.preventDefault();let o=window.pageYOffset,i=this.href.replace(/[^#]*(.*)/,"$1");t=document.querySelector(i).getBoundingClientRect().top,start=null,requestAnimationFrame((function e(d){null===start&&(start=d);let l=d-start,n=t<0?Math.max(o-l/.2,o+t):Math.min(o+l/.2,o+t);window.scrollTo(0,n),n!=o+t?requestAnimationFrame(e):location.hash=i}))}),!1)})()}const instruction=document.querySelector(".instruction"),heroVideoWrapp=document.querySelector(".hero-video"),heroVideo=document.querySelector(".hero-video__video"),videoBtn=document.querySelector(".hero-video__button"),videoOverlay=document.querySelector(".hero-video__media"),videoBtns=document.querySelector(".instruction__watch"),videoSpeed=document.querySelector(".hero-video__btn-speed"),videoPlay=()=>{heroVideo.play(),heroVideo.setAttribute("controls","controls"),videoBtn.classList.add("hero-video__button--hidden"),videoOverlay.classList.add("hero-video__media--hidden")},videoPaused=()=>{heroVideo.removeAttribute("controls"),videoSpeed.classList.remove("hero-video__btn-speed--visible"),videoBtn.classList.remove("hero-video__button--hidden"),videoOverlay.classList.remove("hero-video__media--hidden")},addClassVideoSpeed=()=>{videoSpeed.classList.add("hero-video__btn-speed--visible")};instruction.addEventListener("click",e=>{e.target===videoBtn||e.target===videoBtns?(heroVideo.play(),heroVideo.setAttribute("controls","controls"),videoBtn.classList.add("hero-video__button--hidden"),videoOverlay.classList.add("hero-video__media--hidden")):e.target===videoSpeed&&(1===heroVideo.playbackRate?(heroVideo.playbackRate=2,videoSpeed.textContent="x1"):(heroVideo.playbackRate=1,videoSpeed.textContent="x2"))}),heroVideo.addEventListener("play",()=>{heroVideoWrapp.addEventListener("mouseover",addClassVideoSpeed),heroVideoWrapp.addEventListener("mouseleave",()=>{videoSpeed.classList.remove("hero-video__btn-speed--visible")})}),heroVideo.addEventListener("pause",()=>{videoPaused(),heroVideoWrapp.removeEventListener("mouseover",addClassVideoSpeed)}),heroVideo.addEventListener("ended",()=>{videoPaused()});const swiper=new Swiper(".swiper",{containerModifierClass:"swiper",wrapperClass:"swiper__wrapper",slideClass:"swiper__slide",centeredSlides:!0,slidesPerView:3,loop:!0,pagination:{el:".swiper__pagination",clickable:!0},navigation:{nextEl:".swiper__button--next",prevEl:".swiper__button--prev"},breakpoints:{400:{},767:{},992:{},1200:{}}}),swiperVideosBtns=document.querySelectorAll(".video-button"),swiperVideos=document.querySelectorAll(".swiper-slide__video");swiperVideosBtns.forEach(e=>{e.addEventListener("click",o=>{let t=o.target.closest(".swiper-slide__video-wrapp").querySelector(".swiper-slide__video");t.play(),t.setAttribute("controls","controls"),e.classList.add("hero-video__button--hidden")})}),swiperVideos.forEach(e=>{e.addEventListener("pause",()=>{e.removeAttribute("controls");e.parentNode.querySelector(".video-button").classList.remove("hero-video__button--hidden")}),e.addEventListener("ended",()=>{e.removeAttribute("controls");e.parentNode.querySelector(".video-button").classList.remove("hero-video__button--hidden")})});const accordionTrigger=document.querySelectorAll(".accordion__trigger"),accordionBody=document.querySelectorAll(".accordion__body"),accordionsToggle=(e,o)=>{e.forEach(e=>{e.addEventListener("click",()=>{e.disabled=!0,setTimeout(()=>{e.disabled=!1},500);const o=e.closest(".accordion__item").querySelector(".accordion__body");e.classList.toggle("accordion__trigger--active"),o.style.height=o.scrollHeight+"px","0px"===o.style.height||"0px"===window.getComputedStyle(o).height?(e.setAttribute("aria-expanded","true"),o.setAttribute("aria-hidden","false")):(o.style.height="0",e.setAttribute("aria-expanded","false"),o.setAttribute("aria-hidden","true"))})}),o.forEach(e=>{e.addEventListener("transitionend",()=>{"0px"!==e.style.height&&(e.style.height="auto")})})};accordionsToggle(accordionTrigger,accordionBody);
//# sourceMappingURL=main.js.map
