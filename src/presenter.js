import saludar from './saludador.js';

const nameInput = document.querySelector('#nombre');
const genderInput = document.querySelector('#genero');
const form = document.querySelector('#Saludador-form');
const div = document.querySelector('#resultado-div');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const genero = genderInput.value;
  const saludo = saludar(name, genero);
  div.innerHTML = '<p>' + saludo + '</p>';
});
