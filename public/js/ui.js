let bttnNewContact = document.getElementById('addBtn');
let containerNewForm = document.getElementById('formContainer');
let bttnCancel = document.getElementById('cancelBtn');

bttnNewContact.addEventListener('click', () => {
  containerNewForm.classList.add('active');
});

bttnCancel.addEventListener('click', () => {
  containerNewForm.classList.remove('active');
});