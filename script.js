const prev = document.querySelector('.slider__prev');
const next = document.querySelector('.slider__next');

let currentSlide = 0;

const slides = document.querySelectorAll('.slider__image');

prev.addEventListener('click', () => {
    if (currentSlide > 0) {
        slides[currentSlide].classList.remove('active');
        currentSlide--;
        slides[currentSlide].classList.add('active');
    }else{
        slides[currentSlide].classList.remove('active');
        currentSlide = slides.length - 1;
        slides[currentSlide].classList.add('active');
    }
});

next.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        slides[currentSlide].classList.remove('active');
        currentSlide++;
        slides[currentSlide].classList.add('active');
    }else{
        slides[currentSlide].classList.remove('active');
        currentSlide = 0;
        slides[currentSlide].classList.add('active');
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        prev.click();
    } else if (event.key === 'ArrowRight') {
        next.click();
    }
});


// Add navigation dots

const dots = document.querySelectorAll('.slider__switch');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        dots.forEach((dot) => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    });
});


// Automatically switch slides every 5 seconds
// setInterval(() => {
//     if (currentSlide < slides.length - 1) {
//         slides[currentSlide].classList.remove('active');
//         currentSlide++;
//         slides[currentSlide].classList.add('active');
//     } else {
//         slides[currentSlide].classList.remove('active');
//         currentSlide = 0;
//         slides[currentSlide].classList.add('active');
//     }
// }, 5000);


