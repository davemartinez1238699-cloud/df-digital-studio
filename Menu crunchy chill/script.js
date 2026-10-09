const buttons = document.querySelectorAll('.category');
const cards = document.querySelectorAll('.menu-card');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    cards.forEach((card) => {
      card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

const nicaCard = document.querySelector('.nica-card');
const burgerModal = document.querySelector('#burger-modal');
const closeModal = document.querySelector('.burger-modal__close');

function openBurgerModal() {
  burgerModal.classList.add('is-open');
  burgerModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  closeModal.focus();
}

function closeBurgerModal() {
  burgerModal.classList.remove('is-open');
  burgerModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

nicaCard.addEventListener('click', openBurgerModal);
nicaCard.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openBurgerModal();
  }
});
closeModal.addEventListener('click', closeBurgerModal);
burgerModal.addEventListener('click', (event) => {
  if (event.target === burgerModal) closeBurgerModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && burgerModal.classList.contains('is-open')) closeBurgerModal();
});