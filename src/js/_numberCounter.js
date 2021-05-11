// COUNTER
// Тегу указать атрибут "data-count="число"", также перед скриптом должен быть подключен animateOnScroll!
// counter(елементы где отображать счёт, элемент animateOnScroll, длительность, шаг)
function counter(elements, animatedItem, coutDuration, coutStep) {
	if (coutDuration == 'auto' || coutDuration == null) {
		coutDuration = 2000
	}
	if (coutStep == 'auto' || coutStep == null) {
		coutStep = 1;
	}
	if (animatedItem == 'auto' || animatedItem == null) {
		console.log(`Animated Item не указан! Проверьте подключен ли "animateOnScroll" и указан ли Animated Item! ${animatedItem}`)
	} else {
		function countNumbers(elements) {
			elements.forEach((el) => {
				let n = 0;
				let num = el.getAttribute("data-count");
				let t = (coutDuration / (num / coutStep));
				let interval = setInterval(() => {
					n = n + coutStep;
					if (n >= num) {
						clearInterval(interval);
					}
					el.innerHTML = n;
				}, t);
			});
		}
		window.addEventListener('scroll', function scrolling() {
			if (animatedItem.classList.contains('animated')) {
				this.removeEventListener('scroll', scrolling);
				countNumbers(elements);
			}
		});
	}
}