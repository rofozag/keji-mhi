// Romantic Website JavaScript for Morenikeji

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Heart animation
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    document.getElementById('hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Create hearts periodically
setInterval(createHeart, 1000);

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            // If it's a different page, navigate normally
            window.location.href = this.getAttribute('href');
        }
    });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in to sections
document.querySelectorAll('#letter, #thank-you').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Typing effect for hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Apply typing effect to hero text
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-text h2');
    const heroText = document.querySelector('.hero-text p');
    
    if (heroTitle) {
        typeWriter(heroTitle, 'You Are My Everything', 150);
    }
    
    setTimeout(() => {
        if (heroText) {
            typeWriter(heroText, 'Every moment with you is a treasure. I love you more than words can express.', 50);
        }
    }, 2500);
});

// Add sparkle effect on hover
document.querySelectorAll('nav a, .letter-container, .thank-you-container').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.boxShadow = '0 0 20px var(--primary-color)';
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.boxShadow = '';
    });
});

// Parallax effect for background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    document.body.style.backgroundPosition = `0 ${rate}px`;
});
