import saludar from './saludador.js';

const nameInput = document.querySelector('#nombre');
const form = document.querySelector('#Saludador-form');
const div = document.querySelector('#resultado-div');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const saludo = saludar(name);

  div.innerHTML = '<p>' + saludo + '</p>';
});
