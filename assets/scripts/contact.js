const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('TextInput').value;
  const email = document.getElementById('InputEmail1').value;
  const message = document.getElementById('InputText').value;
  alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
});

console.log(name,email,message);
