const slides = document.getElementById('slides');
const totalSlides = slides.children.length;
const indicator = document.getElementById('indicator');
let currentIndex = 0;

function updateIndicator() {
    indicator.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentIndex) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => goToSlide(i));
        indicator.appendChild(dot);
    }
}

function goToSlide(index) {
    currentIndex = index;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicator();
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    goToSlide(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    goToSlide(currentIndex);
});

function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
}

updateIndicator();
setInterval(autoSlide, 3000); // Change slide every 3 seconds