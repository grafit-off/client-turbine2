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