let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");
let dropdown = document.querySelector(".dropdown"); // Select the dropdown
let dropdownContent = document.querySelector(".dropdown .dropdown-content");

// Toggle the navbar when the menu button is clicked
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// Functionality for activating the dropdown menu on Services click
dropdown.querySelector('a').onclick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    dropdownContent.classList.toggle('active'); // Toggle the visibility of dropdown content
}

// Optional: Close the dropdown if clicked outside
document.onclick = (e) => {
    if (!dropdown.contains(e.target) && !menu.contains(e.target)) {
        dropdownContent.classList.remove('active'); // Close dropdown when clicking outside
    }
}


// Swiper slider initialization
var swiper = new Swiper(".services-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
});



  // Get the button
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show/Hide Scroll to Top Button based on scroll position
  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  // Scroll to the top when the button is clicked
  scrollToTopBtn.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

//services page
let currentSlide = 0;
const slides = document.querySelectorAll('.slides');  // Fetch all slides
const dots = document.querySelectorAll('.dot');       // Fetch all dots
const slideInterval = 3000;                           // Change slide every 3 seconds

// Function to show a specific slide
function showSlide(index) {
  slides[currentSlide].classList.remove('active');    // Hide current slide
  dots[currentSlide].classList.remove('active');      // Deactivate current dot
  
  currentSlide = index;                               // Set the new current slide
  
  slides[currentSlide].classList.add('active');       // Show the new slide
  dots[currentSlide].classList.add('active');         // Activate the corresponding dot
}

// Function to show the next slide
function nextSlide() {
  let nextIndex = (currentSlide + 1) % slides.length; // Calculate next slide index
  showSlide(nextIndex);
}

// Set interval to automatically change slides
const intervalId = setInterval(nextSlide, slideInterval);

// Allow manual navigation through dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearInterval(intervalId);   // Clear automatic slideshow interval on manual navigation
    showSlide(index);            // Show the clicked slide
  });
});



