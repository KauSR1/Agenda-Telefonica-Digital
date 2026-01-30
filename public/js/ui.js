let bttnNewContact = document.getElementById('addBtn');
let containerNewForm = document.getElementById('formContainer');
let bttnCancel = document.getElementById('cancelBtn');
let searchInput = document.getElementById("searchInput");

bttnNewContact.addEventListener('click', () => {
  containerNewForm.classList.add('active');
});

bttnCancel.addEventListener('click', () => {
  containerNewForm.classList.remove('active');
});

searchInput.addEventListener('input', (e) => {
  const termSearch = e.target.value;
  renderContacts(termSearch);
});