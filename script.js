// menu functionality
const menuToggle = document.querySelector('header nav');
const menuItems = document.querySelectorAll('header nav ul li');
const menuButton = document.querySelector('#menu');

menuButton.addEventListener("click", () => {
    // فقط قم بتنفيذ الكود إذا كان عرض الشاشة أقل من أو يساوي 768 بكسل
    if (window.innerWidth <= 768) {
        if (menuToggle.style.transform === 'translate(0px, 0px)' || menuToggle.style.transform === 'translate(0)') {
            closeMenu();
        } else {
            menuToggle.style.transform = `translate(0)`;
        }
    }
    // لن يتم تنفيذ أي شيء إذا كانت الشاشة أكبر من 768 بكسل
});

function closeMenu() {
    // فقط قم بتنفيذ الكود إذا كان عرض الشاشة أقل من أو يساوي 768 بكسل
    if (window.innerWidth <= 768) {
        menuToggle.style.transform = `translate(100%)`;
    }
}

menuItems.forEach((e) => {
    e.addEventListener("click", () => {
        // فقط قم بتنفيذ الكود إذا كان عرض الشاشة أقل من أو يساوي 768 بكسل
        if (window.innerWidth <= 768) {
            closeMenu();
        }
    });
});




// Slider functionality
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');

    let currentSlide = 0;
    const totalSlides = slides.length;

    // Initialize slider
    function initSlider() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
        });
    }

    // Go to specific slide
    function goToSlide(slideIndex) {
        if (slideIndex < 0) {
            slideIndex = totalSlides - 1;
        } else if (slideIndex >= totalSlides) {
            slideIndex = 0;
        }

        currentSlide = slideIndex;

        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;

            // Remove active class from all slides and add to current
            slide.classList.remove('active');
            if (index === currentSlide) {
                slide.classList.add('active');
            }
        });
    }

    // Event listeners for arrow buttons
    prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });

    nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        // Detect swipe direction
        if (touchEndX < touchStartX) {
            // Swipe left - go to next slide
            goToSlide(currentSlide + 1);
        } else if (touchEndX > touchStartX) {
            // Swipe right - go to previous slide
            goToSlide(currentSlide - 1);
        }
    }

    // Initialize the slider
    initSlider();

    // Optional: Auto-slide functionality
    // Uncomment this if you want the slider to automatically change slides
    
    setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 5000); // Change slide every 5 seconds
    
});
