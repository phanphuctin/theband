const buyBtns = document.querySelectorAll('.js-buy-ticket');
const closeBtns = document.querySelectorAll('.js-closeBuyTicket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


function showBuyTickets() {
  modal.style.display = "flex";
}

function closeBuyTickets() {
  modal.style.display = "none";
}

for(const buyBtn of buyBtns) {
  buyBtn.addEventListener('click', showBuyTickets)
}

for(const closeBtn of closeBtns) {
  closeBtn.addEventListener('click', closeBuyTickets)
}

modal.addEventListener('click', closeBuyTickets);
modalContainer.addEventListener('click', function(event) {
  event.stopPropagation();
})

//Responsive 

const menuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu-list');
const mobileListItem = document.querySelectorAll('.mobile-list-item');

function addMobileMenu() {
  mobileMenu.style.display = "block";
}
function removeMobileMenu() {
  mobileMenu.style.display = "none";
}

var menuClicked = false;

menuIcon.addEventListener('click', function() {
  menuClicked = !menuClicked;
  if(menuClicked) {
addMobileMenu();
  } else {
removeMobileMenu();
  }
})

for (var item of mobileListItem) {
  item.addEventListener('click', removeMobileMenu)
}