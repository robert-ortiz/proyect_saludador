
const nameInput = document.querySelector('#nombre');
const form = document.querySelector('#Saludador-form');
const div = document.querySelector('#resultado-div');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value;


  div.innerHTML = '<p>' + 'Hola ' + name + '</p>';
});
