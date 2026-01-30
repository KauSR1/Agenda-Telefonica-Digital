export let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

export function saveStorage() {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}