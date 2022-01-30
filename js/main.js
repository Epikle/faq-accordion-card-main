const openAnswer = document.querySelectorAll(
  '.card__header h3, .card__header img'
);

openAnswer.forEach((el) => {
  ['click', 'focus'].forEach((evt) =>
    el.addEventListener(evt, (event) => {
      event.target.parentElement.parentElement.classList.toggle('active');
    })
  );
});
