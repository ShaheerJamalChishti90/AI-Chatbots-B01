// contact-list.js

const prompt = require("prompt-sync")(); // For command line input

let contacts = []; // Store all contacts (array of objects)

function addContact() {
  const name = prompt("Enter name: ");
  const phone = prompt("Enter phone: ");
  const email = prompt("Enter email: ");

  const contact = { name, phone, email }; // Object
  contacts.push(contact);
  console.log("✅ Contact added!");
}

function listContacts() {
  console.log("\n📒 Contact List:");
  contacts.forEach((c, index) => {
    console.log(`${index + 1}. ${c.name} - ${c.phone} - ${c.email}`);
  });
}

function searchContact() {
  const search = prompt("Enter name to search: ");
  const found = contacts.find(c => c.name.toLowerCase() === search.toLowerCase());

  if (found) {
    console.log(`Found: ${found.name} - ${found.phone} - ${found.email}`);
  } else {
    console.log("❌ Contact not found");
  }
}

// Main menu
while (true) {
  console.log("\n--- Contact List App ---");
  console.log("1. Add Contact");
  console.log("2. List Contacts");
  console.log("3. Search Contact");
  console.log("4. Exit");

  const choice = prompt("Choose an option: ");

  if (choice === "1") {
    addContact();
  } else if (choice === "2") {
    listContacts();
  } else if (choice === "3") {
    searchContact();
  } else if (choice === "4") {
    console.log("👋 Exiting app...");
    break;
  } else {
    console.log("Invalid choice, try again.");
  }
}
