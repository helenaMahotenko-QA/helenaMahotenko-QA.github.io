jQuery(document).ready(function($) {
        AOS.init({
            offset: 100,
            once: true,
            duration: 800,
            throttleDelay: 50,
            disable: window.innerWidth < 768
        });
});

/*объявление переменной, находим её по тегу */
const logo = document.querySelector('.logo');
/* навешиваем обрабочик, который ждёт клика и тогда запустит логику*/
logo.addEventListener('click', function() {
	alert('Не верь - проверь!')
})