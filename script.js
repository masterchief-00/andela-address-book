let contact = {};
let existingItem = [];

function toggleAddContact() {
  let newContactModal = document.getElementById("contact-modal");
  if (newContactModal.style.display === "flex") {
    newContactModal.style.display = "none";
  } else {
    newContactModal.style.display = "flex";
  }
}
function addContact(e) {
  e.preventDefault();
  let names = document.getElementById("names").value;
  let address = document.getElementById("address").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  contact = {
    names: names,
    address: address,
    email: email,
    phone: phone,
  };

  saveContact();
  document.getElementById("contact-form").reset();
}
function saveContact() {
  if (localStorage.getItem("allContacts") !== null) {
    existingItem = JSON.parse(localStorage.getItem("allContacts"));

    existingItem.push(contact);
    localStorage.setItem("allContacts", JSON.stringify(existingItem));
  } else {
    existingItem.push(contact);
    localStorage.setItem("allContacts", JSON.stringify(existingItem));
  }
}
function loadContacts() {
  let savedContacts = document.getElementById("savedContacts");
  let temp=document.getElementById('temp')
  
  if (localStorage.getItem("allContacts") !== null) {
    temp.style.display='none'
    const contacts = JSON.parse(localStorage.getItem("allContacts"));
    for (let record of contacts) {
      let htmlContent = `<div class='contact' onclick='showDetails(${contacts.indexOf(record)})' >
                            <label>${record.names}</label>
                         </div>`;
      savedContacts.innerHTML += htmlContent;
    }
  }
}

function showDetails(index){
  const contacts = JSON.parse(localStorage.getItem("allContacts"));
  let detailModal=document.getElementById('details-modal')
  let detailsContainer=document.getElementById('details-content')
  
  detailModal.style.display='flex'

  const selectedContact=contacts[index]
  
  let htmlContent = `   <button onclick='closeDetails()'>Close</button>
                        <div class="detail-group">
                          <label>></label>
                          <label style="font-weight: 900">Names:</label>
                          <label>${selectedContact.names}</label>
                        </div>
                        <div class="detail-group">
                          <label>></label>
                          <label style="font-weight: 900">Address:</label>
                          <label>${selectedContact.address}</label>
                        </div>
                        <div class="detail-group">
                          <label>></label>
                          <label style="font-weight: 900">Phone:</label>
                          <label>${selectedContact.phone}</label>
                        </div>
                        <div class="detail-group">
                          <label>></label>
                          <label style="font-weight: 900">Email:</label>
                          <label>${selectedContact.email}</label>
                        </div>
                        `;
    detailsContainer.innerHTML = htmlContent;
}
function closeDetails(){
  let detailsModal=document.getElementById('details-modal')
  detailsModal.style.display='none'
}
function closeAddNew(){
  let contactModal=document.getElementById('contact-modal')
  
  contactModal.style.display='none'
  location.reload();
}
