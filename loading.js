document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.querySelector('.preloader').style.display = 'none';
        document.querySelector('.content').style.opacity = '1';
    }, 2000); // Задержка в 2 секунды для демонстрации
});