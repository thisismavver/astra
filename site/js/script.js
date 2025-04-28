// Активируем анимацию сразу при загрузке страницы
document.addEventListener("DOMContentLoaded", function() {
  const svgElements = document.querySelectorAll('.svg-rotate-clockwise, .svg-rotate-counterclockwise');
  svgElements.forEach(function(el) {
    el.style.animationPlayState = 'running';  // Запускаем анимацию
  });
});
