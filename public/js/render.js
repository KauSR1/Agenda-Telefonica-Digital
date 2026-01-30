import { contacts } from "./localStorage.js";

let addConstactList = document.getElementById("contactsList");

export function renderContacts(filter = "") {
  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(filter.toLowerCase()) ||
  c.phone.includes(filter) ||
  c.email.toLowerCase().includes(filter.toLowerCase())
);

  if(filteredContacts.length === 0){
    addConstactList.innerHTML = `
     <div class="empty-state">
     <div class="empty-state-icon">📭</div>
     <h3 style="color: white; margin-bottom: 10px;">No contacts found</h3>
     <p>${filter ? 'Try a different search term' : 'Add your first contact to get started'}</p>
     </div>
     `;
     return;
  }

   addConstactList.innerHTML = filteredContacts.map(contact => `
    <div class="contact-item">
      <div class="contact-info">
        <div class="contact-name">${contact.name}</div>
        <div class="contact-details">
          <div class="contact-detail">
            <span>📞</span>
            <span>${contact.phone}</span>
          </div>
        ${contact.email ? `
        <div class="contact-detail">
          <span>✉️</span>
          <span>${contact.email}</span>
        </div>
      ` : ''}
    </div>
  </div>
    <div class="contact-actions">
    <button class="icon-btn edit" data-id="${contact.idContact}">✏️</button>
  <button class="icon-btn delete" data-id="${contact.idContact}">🗑️</button>
    </div>
  </div>
`).join('');
}

addConstactList.addEventListener('click', (e) => {
    const btnDelete = e.target.closest('.delete');
    const btnEdit = e.target.closest('.edit');

    if (btnDelete) {
        const id = btnDelete.dataset.id;
        console.log("Deletar ID:", id);
    }

    if (btnEdit) {
        containerNewForm.classList.add('active');
      }
});