// Main JavaScript file for portfolio website
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    console.log('Initializing portfolio app...');
    // Initialize all components
    initMobileMenu();
    initScrollEffects();
    initCountingNumbers();
    initTypingAnimation();
    initMultilingualGreeting();
    initSmoothScrolling();
    initParticleSystem();
    initScrollIndicator();
    initNavbarEffects();
    initCircularProgress();
    initAboutPageAnimations();
    
    // Add some delay for better UX
    setTimeout(() => {
        document.body.classList.add('loaded');
        console.log('Portfolio app fully loaded!');
    }, 500);
}

// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        // Improve clickability with proper event handling
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                // Ensure links are clickable
                if (link.href && link.href !== '#') {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
        
        // Prevent menu from closing when clicking inside it
        navMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
}

// Scroll Effects
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    document.querySelectorAll('.stat-card, .experience-card, .social-link').forEach(el => {
        el.classList.add('fade-in-on-scroll');
        observer.observe(el);
    });
}

// Counting Numbers Animation
function initCountingNumbers() {
    const countElements = document.querySelectorAll('.stat-number');
    
    const animateCount = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const start = 0;
        const increment = target / (duration / 16); // 60fps
        let current = start;
        
        const updateCount = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCount);
            } else {
                element.textContent = target.toLocaleString();
            }
        };
        
        updateCount();
    };
    
    // Intersection Observer for counting animation
    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                countObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    countElements.forEach(el => {
        countObserver.observe(el);
    });
}

// Typing Animation
function initTypingAnimation() {
    const typingElement = document.querySelector('.typing-animation');
    if (!typingElement) return;
    
    const texts = ['Hello, I\'m', 'Welcome to my portfolio', 'Nice to meet you'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before next text
        }
        
        setTimeout(typeText, typeSpeed);
    }
    
    // Start typing animation after page load
    setTimeout(typeText, 1000);
}

// Multilingual Greeting Animation
function initMultilingualGreeting() {
    const greetingElement = document.getElementById('multilingual-greeting');
    if (!greetingElement) {
        console.log('Multilingual greeting element not found');
        return;
    }
    
    console.log('Initializing multilingual greeting animation');
    
    const greetings = [
        'Halo, perkenalkan aku...', // Indonesian
        'Hi, I\'m...', // English
        'Hola, soy...', // Spanish
        'Bonjour, je suis...', // French
        'こんにちは、私は...', // Japanese
        '안녕하세요, 저는...', // Korean
        'Hallo, ik ben...', // Dutch
        'Olá, eu sou...', // Portuguese
        'Привет, я...', // Russian
        '你好，我是...', // Chinese
        'مرحبا، أنا...' // Arabic
    ];
    
    let currentIndex = 0;
    
    function changeGreeting() {
        console.log('Changing greeting to:', greetings[currentIndex]);
        
        // Add fade out class
        greetingElement.classList.add('greeting-fade-out');
        
        setTimeout(() => {
            // Change text
            greetingElement.textContent = greetings[currentIndex];
            
            // Remove fade out and add fade in
            greetingElement.classList.remove('greeting-fade-out');
            greetingElement.classList.add('greeting-fade-in');
            
            setTimeout(() => {
                greetingElement.classList.remove('greeting-fade-in');
            }, 500);
            
            currentIndex = (currentIndex + 1) % greetings.length;
        }, 500);
    }
    
    // Start the multilingual animation after initial load
    setTimeout(() => {
        console.log('Starting multilingual animation');
        // Start with the first greeting change
        changeGreeting();
        // Continue changing greeting every 3 seconds
        setInterval(changeGreeting, 3000);
    }, 2000);
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Particle System
function initParticleSystem() {
    const particleContainer = document.querySelector('.floating-shapes');
    if (!particleContainer) return;
    
    // Create additional particles
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particleContainer.appendChild(particle);
    }
}

// Scroll Indicator
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (!scrollIndicator) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (scrolled > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.transform = `translateX(-50%) translateY(${rate}px)`;
        }
    });
}

// Navbar Effects
function initNavbarEffects() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove background based on scroll position
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar based on scroll direction
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Mouse Parallax Effect
function initMouseParallax() {
    const shapes = document.querySelectorAll('.shape');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 50;
            const y = (mouseY - 0.5) * speed * 50;
            
            shape.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// 3D Tilt Effect for Cards
function init3DTilt() {
    const cards = document.querySelectorAll('.glass-effect');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * -10;
            const rotateY = (x - centerX) / centerX * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
}

// Preloader
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        });
    }
}

// Theme Toggle (if needed)
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Form Validation (for contact form)
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('error');
                    isValid = false;
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Show success message
                showNotification('Message sent successfully!', 'success');
                form.reset();
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Animate out
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Lazy Loading for Images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Performance Monitoring
function initPerformanceMonitoring() {
    // Log performance metrics
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log(`Page load time: ${perfData.loadEventEnd - perfData.loadEventStart}ms`);
    });
}

// Error Handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Initialize additional effects after DOM is ready
setTimeout(() => {
    initMouseParallax();
    init3DTilt();
}, 1000);

// Circular Progress Animation for About Page
function initCircularProgress() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const animateProgress = (bar) => {
        const percentage = parseInt(bar.getAttribute('data-percentage'));
        const circumference = 251.2; // 2 * π * 40 (radius)
        const offset = circumference - (percentage / 100) * circumference;
        
        bar.style.strokeDashoffset = offset;
        
        // Animate the text counter
        const progressText = bar.parentElement.parentElement.querySelector('.progress-text');
        if (progressText) {
            animateCounter(progressText, 0, percentage, 2000, '%');
        }
    };
    
    // Intersection Observer for progress animation
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                if (progressBar) {
                    setTimeout(() => {
                        animateProgress(progressBar);
                    }, 500);
                }
                progressObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.stat-modern-card').forEach(card => {
        progressObserver.observe(card);
    });
}

// About Page Specific Animations
function initAboutPageAnimations() {
    // Animate mini stats in hero section
    const miniStats = document.querySelectorAll('.mini-stat-number');
    
    const animateMiniStats = () => {
        miniStats.forEach((stat, index) => {
            const target = parseInt(stat.getAttribute('data-target'));
            if (target) {
                setTimeout(() => {
                    animateCounter(stat, 0, target, 1500);
                }, index * 200);
            }
        });
    };
    
    // Trigger mini stats animation when hero section is visible
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateMiniStats();
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const aboutHero = document.querySelector('.about-hero');
    if (aboutHero) {
        heroObserver.observe(aboutHero);
    }
    
    // Story cards stagger animation
    const storyCards = document.querySelectorAll('.story-card');
    storyCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + (index * 150));
    });
}

// Counter Animation Helper Function
function animateCounter(element, start, end, duration, suffix = '') {
    const startTime = performance.now();
    const range = end - start;
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + (range * easeOut));
        
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Enhanced 3D Tilt Effect for Profile Card
function initProfileCardTilt() {
    const profileCard = document.querySelector('.profile-main-card');
    
    if (profileCard) {
        profileCard.addEventListener('mousemove', (e) => {
            const rect = profileCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * -5;
            const rotateY = (x - centerX) / centerX * 5;
            
            profileCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        profileCard.addEventListener('mouseleave', () => {
            profileCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    }
}

// Export functions for external use
window.portfolioApp = {
    showNotification,
    initThemeToggle,
    initFormValidation,
    animateCounter,
    initCircularProgress,
    initAboutPageAnimations
};