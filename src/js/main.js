// Includes
// @include('_scrollLockIOS.js');

// @include('_modal.js');
// -- //

const isiPhone = (navigator.userAgent.match(/iPhone/i) != null);
const isiPad = (navigator.userAgent.match(/iPad/i) != null);
const isiPod = (navigator.userAgent.match(/iPod/i) != null);
if (isiPhone || isiPad || isiPod) {
	// Smooth scroll to link
	let smoothScroll = () => {
		let linkNav = document.querySelectorAll('[href^="#"]'),
			V = 0.2;
		for (let i = 0; i < linkNav.length; i++) {
			linkNav[i].addEventListener('click', function (e) {
				e.preventDefault();
				let w = window.pageYOffset,
					hash = this.href.replace(/[^#]*(.*)/, '$1');
				t = document.querySelector(hash).getBoundingClientRect().top,
					start = null;
				requestAnimationFrame(step);
				function step(time) {
					if (start === null) start = time;
					let progress = time - start,
						r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
					window.scrollTo(0, r);
					if (r != w + t) {
						requestAnimationFrame(step)
					} else {
						location.hash = hash
					}
				}
			}, false);
		}
	}
	smoothScroll();
	// -- //
}

// Video 
const instruction = document.querySelector('.instruction');
const heroVideoWrapp = document.querySelector('.hero-video');
const heroVideo = document.querySelector('.hero-video__video');
const videoBtn = document.querySelector('.hero-video__button');
const videoOverlay = document.querySelector('.hero-video__media');
const videoBtns = document.querySelector('.instruction__watch');
const videoSpeed = document.querySelector('.hero-video__btn-speed');

const videoPlay = () => {
	heroVideo.play();

	heroVideo.setAttribute('controls', 'controls');
	videoBtn.classList.add('hero-video__button--hidden');
	videoOverlay.classList.add('hero-video__media--hidden');
}
const videoPaused = () => {
	heroVideo.removeAttribute('controls');
	videoSpeed.classList.remove('hero-video__btn-speed--visible')
	videoBtn.classList.remove('hero-video__button--hidden');
	videoOverlay.classList.remove('hero-video__media--hidden');
}
const addClassVideoSpeed = () => {
	videoSpeed.classList.add('hero-video__btn-speed--visible');
}
instruction.addEventListener('click', (e) => {
	if (e.target === videoBtn || e.target === videoBtns) {
		videoPlay();
	} else if (e.target === videoSpeed) {
		if (heroVideo.playbackRate === 1) {
			heroVideo.playbackRate = 2;
			videoSpeed.textContent = 'x1';
		} else {
			heroVideo.playbackRate = 1;
			videoSpeed.textContent = 'x2';
		}
	}
})

heroVideo.addEventListener('play', () => {
	heroVideoWrapp.addEventListener('mouseover', addClassVideoSpeed)
	heroVideoWrapp.addEventListener('mouseleave', () => {
		videoSpeed.classList.remove('hero-video__btn-speed--visible');
	})
})
heroVideo.addEventListener('pause', () => {
	videoPaused();
	heroVideoWrapp.removeEventListener('mouseover', addClassVideoSpeed);
})
heroVideo.addEventListener('ended', () => {
	videoPaused();
})
// -- //