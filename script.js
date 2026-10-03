'use strict';
const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
menu.addEventListener('click', () => {
 const open = menu.getAttribute('aria-expanded') !== 'true';
 menu.setAttribute('aria-expanded', String(open));
 navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
 menu.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open');
}));
document.addEventListener('keydown', event => {
 if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
  menu.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); menu.focus();
 }
});
