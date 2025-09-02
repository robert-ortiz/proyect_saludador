import saludar from './saludador.js';

const nameInput = document.querySelector('#nombre');
const genderInput = document.querySelector('#genero');
const ageInput = document.querySelector('#edad');
const langInput = document.querySelector('#idioma');
const form = document.querySelector('#Saludador-form');
const div = document.querySelector('#resultado-div');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const genero = genderInput.value;
  const edad = parseInt(ageInput.value, 10);
  const idioma = langInput.value;

  const saludo = saludar(name, genero, edad, idioma);

  div.innerHTML = '<p>' + saludo + '</p>';
});
