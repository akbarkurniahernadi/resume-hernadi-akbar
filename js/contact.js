// Contact Form Enhancement - WhatsApp Integration
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('.submit-btn');
    const formInputs = form.querySelectorAll('input, textarea');
    
    // WhatsApp phone number (using the number from contact methods)
    const whatsappNumber = '6282138690989';
    
    // Form validation and WhatsApp submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const subject = form.querySelector('#subject').value.trim();
        const message = form.querySelector('#message').value.trim();
        
        // Simple validation
        let isValid = true;
        formInputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ef4444';
            } else {
                input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }
        });
        
        // Email validation
        const emailInput = form.querySelector('input[type="email"]');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            isValid = false;
            emailInput.style.borderColor = '#ef4444';
        }
        
        if (isValid) {
            // Show loading state
            submitBtn.innerHTML = '<span>Opening WhatsApp...</span><i class="fab fa-whatsapp fa-spin"></i>';
            submitBtn.style.background = 'rgba(37, 211, 102, 0.8)';
            
            // Construct WhatsApp message
            const whatsappMessage = `Hai aku ${name}, emailku ${email}, aku mau ${subject}\n\n${message}`;
            
            // Create WhatsApp URL
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            
            // Small delay for better UX
            setTimeout(() => {
                // Open WhatsApp
                window.open(whatsappURL, '_blank');
                
                // Show success state
                submitBtn.innerHTML = '<span>WhatsApp Opened!</span><i class="fas fa-check"></i>';
                submitBtn.style.background = 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)';
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    form.reset();
                    submitBtn.innerHTML = '<span>Send via WhatsApp</span><i class="fab fa-whatsapp"></i>';
                    submitBtn.style.background = 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)';
                }, 3000);
            }, 800);
        }
    });
    
    // Input focus effects
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#6366f1';
            this.style.background = 'rgba(255, 255, 255, 0.08)';
        });
        
        input.addEventListener('blur', function() {
            if (!this.value.trim()) {
                this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                this.style.background = 'rgba(255, 255, 255, 0.05)';
            }
        });
    });
    
    // Smooth scroll for navigation links
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
    
    // Add subtle animations on scroll
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
    
    // Observe contact methods
    document.querySelectorAll('.contact-method').forEach(method => {
        method.style.opacity = '0';
        method.style.transform = 'translateY(20px)';
        method.style.transition = 'all 0.6s ease';
        observer.observe(method);
    });
    
    // Add WhatsApp functionality to contact methods
    document.querySelectorAll('.contact-method').forEach(method => {
        method.addEventListener('click', function() {
            const icon = this.querySelector('.method-icon i');
            const content = this.querySelector('.method-content p').textContent;
            
            if (icon.classList.contains('fa-envelope')) {
                window.open(`mailto:${content}`);
            } else if (icon.classList.contains('fa-whatsapp')) {
                // Open WhatsApp for WhatsApp number
                const phoneNumber = content.replace(/[^0-9]/g, '');
                window.open(`https://wa.me/${phoneNumber}`, '_blank');
            } else if (icon.classList.contains('fa-linkedin')) {
                window.open('https://www.linkedin.com/in/akhernadi/', '_blank');
            }
        });
    });
});