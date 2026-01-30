import { contacts, saveStorage } from "./localStorage.js";

let contactForm = document.getElementById("contactForm");

contactForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  let newContactForm = {
    idContact: Date.now(),
    name: document.getElementById('nameInput').value,
    phone: document.getElementById('phoneInput').value,
    email: document.getElementById('emailInput').value,
  };
  contacts.push(newContactForm);
  saveStorage();
  contactForm.reset();
});