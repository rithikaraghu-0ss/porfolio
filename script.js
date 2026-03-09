/**
 * Portfolio Website Logic
 * R.RITHIKA - 2026
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Scroll Reveal
    const revealElements = document.querySelectorAll('.reveal');

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 2. Sticky Navigation Bar
    const nav = document.getElementById('main-nav');
    const hero = document.getElementById('hero');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            nav.style.padding = '12px 0';
            nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
        } else {
            nav.classList.remove('scrolled');
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
            nav.style.padding = '20px 0';
            nav.style.boxShadow = 'none';
        }

        // Active Link Highlighting
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && scrollPosition < (section.offsetTop + section.offsetHeight)) {
                const id = section.getAttribute('id');
                const link = document.querySelector(`.nav-links a[href="#${id}"]`);
                if (link) {
                    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });

    // 3. Smooth Scrolling for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Contact Form Handling (Demonstration)
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Visual feedback for submission
            const originalBtnContent = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!';
                submitBtn.style.backgroundColor = 'var(--clr-accent)';
                submitBtn.style.boxShadow = '0 10px 20px -5px rgba(16, 185, 129, 0.4)';

                // Reset form
                contactForm.reset();

                // Alert user
                setTimeout(() => {
                    submitBtn.innerHTML = originalBtnContent;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.style.boxShadow = '';
                    submitBtn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // 5. Hero Reveal Animation (Sequential)
    const heroTitle = document.querySelector('.hero-title');
    const heroDesc = document.querySelector('.hero-description');
    const heroActions = document.querySelector('.hero-actions');
    const heroCard = document.querySelector('.glass-card');

    const animateHero = () => {
        if (heroTitle) {
            heroTitle.style.opacity = '0';
            heroTitle.style.transform = 'translateY(20px)';
            heroTitle.style.transition = 'all 0.8s var(--ease-out)';

            setTimeout(() => {
                heroTitle.style.opacity = '1';
                heroTitle.style.transform = 'translateY(0)';
            }, 200);
        }

        if (heroDesc) {
            heroDesc.style.opacity = '0';
            heroDesc.style.transform = 'translateY(20px)';
            setTimeout(() => {
                heroDesc.style.transition = 'all 0.8s var(--ease-out)';
                heroDesc.style.opacity = '1';
                heroDesc.style.transform = 'translateY(0)';
            }, 400);
        }

        if (heroActions) {
            heroActions.style.opacity = '0';
            heroActions.style.transform = 'translateY(20px)';
            setTimeout(() => {
                heroActions.style.transition = 'all 0.8s var(--ease-out)';
                heroActions.style.opacity = '1';
                heroActions.style.transform = 'translateY(0)';
            }, 600);
        }

        if (heroCard) {
            heroCard.style.opacity = '0';
            heroCard.style.transform = 'scale(0.9) rotate3d(1, 1, 1, 10deg)';
            setTimeout(() => {
                heroCard.style.transition = 'all 1s var(--ease-out)';
                heroCard.style.opacity = '1';
                heroCard.style.transform = 'scale(1) rotate3d(1, 1, 1, 10deg)';
            }, 300);
        }
    };

    animateHero();
});
