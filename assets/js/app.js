let cartViewButton = document.querySelectorAll('.cartViewButton')
let cartView = document.querySelector('.cartView')
let cartViewOverlay = document.querySelector('.cartViewOverlay')
let closeBtn = document.querySelector('.closeBtn')
let seacrhInput = document.querySelector('#seacrhInput')
let inputGroup = document.querySelector('#inputGroup')
let btnLogin = document.querySelector('.btn.btn-login')
let navbar = document.getElementById('navbar')
let navList = document.querySelector('#navbar .navbar-nav')



/// Event Listener
if (cartViewButton) {
  cartViewButton.forEach(el => {
    el.addEventListener('click', showCart)
  })

}
if (closeBtn) {
  closeBtn.addEventListener('click', closeCart)
}
if (seacrhInput) {
  seacrhInput.addEventListener('focus', overlayFocus)
}

// Top slider Swiper
var swiper = new Swiper(".topSliderSwiper", {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Slider Product
var swiper = new Swiper(".sliderProductSwiper", {
  // loop: true,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      loop: false,
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 40
    },
    993: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 60
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 60
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// Cart View
// cart Show
function showCart() {
  cartView.classList.add('show')
  cartViewOverlay.classList.remove('d-none')

  // close overlay window when click overlay
  window.addEventListener('click', event => {
    if (event.target == cartViewOverlay) {
      closeCart()
      window.removeEventListener('click')
    }
  })
}
// Cart Close
function closeCart() {
  cartView.classList.remove('show')
  cartViewOverlay.classList.add('d-none')
}

// overlay when click input seacrh
function overlayFocus() {
  cartViewOverlay.classList.remove('d-none')
  inputGroup.classList.add('indexTop')
  // close overlay when clicked
  window.addEventListener('click', event => {
    if (event.target == cartViewOverlay) {
      cartViewOverlay.classList.add('d-none')
      inputGroup.classList.remove('indexTop')
      window.removeEventListener('click')
    }
  })
}


//// Map Start
var map = L.map('map').setView([25.196762218368136, 55.27387982316813], 10);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([25.196762218368136, 55.27387982316813]).addTo(map);
var popup = L.popup()
  .setLatLng([25.25, 55.27387982316813])
  .setContent("Database Numbers")
  .openOn(map);