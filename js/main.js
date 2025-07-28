// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#fff';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Simple animation on scroll for service cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards and process steps
    const animatedElements = document.querySelectorAll('.service-card, .step');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Booking button click handler (placeholder)
    const bookingButtons = document.querySelectorAll('a[href="#reservation"], .btn-primary');
    bookingButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // If it's a booking button and doesn't have a real href, show alert
            if (this.getAttribute('href') === '#' || this.getAttribute('href') === '#reservation') {
                e.preventDefault();
                alert('Booking system will be integrated here. Please call (555) 123-4567 to book for now!');
            }
        });
    });

    // Instagram link placeholder
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                alert('Instagram link will be added here!');
            }
        });
    });

    // Before/After Image Slider
    const beforeAfterContainers = document.querySelectorAll('.before-after-container');
    
    beforeAfterContainers.forEach(container => {
        const slider = container.querySelector('.slider-handle');
        const beforeImage = container.querySelector('.before-image');
        const afterImage = container.querySelector('.after-image');
        
        if (slider && beforeImage && afterImage) {
            let isDragging = false;
            
            // Set initial position (50%)
            slider.style.left = '50%';
            afterImage.style.clipPath = 'inset(0 50% 0 0)';
            
            function updateSlider(e) {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
                
                slider.style.left = percentage + '%';
                afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
            }
            
            // Mouse events
            slider.addEventListener('mousedown', (e) => {
                isDragging = true;
                e.preventDefault();
            });
            
            container.addEventListener('mousemove', (e) => {
                if (isDragging) {
                    updateSlider(e);
                }
            });
            
            document.addEventListener('mouseup', () => {
                isDragging = false;
            });
            
            // Touch events for mobile
            slider.addEventListener('touchstart', (e) => {
                isDragging = true;
                e.preventDefault();
            });
            
            container.addEventListener('touchmove', (e) => {
                if (isDragging) {
                    const touch = e.touches[0];
                    updateSlider(touch);
                    e.preventDefault();
                }
            });
            
            document.addEventListener('touchend', () => {
                isDragging = false;
            });
            
            // Click anywhere on container to move slider
            container.addEventListener('click', (e) => {
                if (!isDragging) {
                    updateSlider(e);
                }
            });
        }
    });
});