'use strict';

// Mobile Menu Toggle Functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Smooth Scrolling for Internal Links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const topOffset = 60; // Adjust based on your fixed header height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Animations on Scroll
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const scrollAnimation = () => {
    const windowHeight = window.innerHeight;

    animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        if (elementPosition < windowHeight) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', scrollAnimation);
window.addEventListener('load', scrollAnimation);
