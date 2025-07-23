const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
@@ -22,8 +24,10 @@ document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            });

            // Close mobile menu if open
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            if (navLinks) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        }
    });
});
@@ -58,13 +62,16 @@ const observer = new IntersectionObserver((entries) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature, .course-card, .resource-card, .stat');
    const animateElements = document.querySelectorAll(
        '.module-card, .method-card, .timeline-item, .tool-category, .resource-card, .instructor-card, .zone-card, .pricing-card'
    );

    animateElements.forEach(el => {
        el.style.opacity = '0';
@@ -129,68 +136,333 @@ const statsObserver = new IntersectionObserver((entries) => {
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Form Validation (if forms are added later)
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// Utility function for smooth element reveals
const revealElements = (selector, delay = 0) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, delay + (index * 100));
// FAQ Functionality
document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            
            // Close all other FAQ items
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.setAttribute('aria-expanded', 'false');
                    const otherAnswer = otherQuestion.parentElement.querySelector('.faq-answer');
                    otherAnswer.classList.remove('active');
                }
            });
            
            // Toggle current FAQ item
            question.setAttribute('aria-expanded', !isExpanded);
            answer.classList.toggle('active');
        });
    });
};
});

// Initialize animations when page loads
// Practice Zones Interaction
document.addEventListener('DOMContentLoaded', () => {
    // Animate hero content
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroActions = document.querySelector('.hero-actions');
    const zoneCards = document.querySelectorAll('.zone-card');
    
    zoneCards.forEach(card => {
        const actionBtn = card.querySelector('.zone-action');
        const zoneName = card.dataset.zone;

        if (heroTitle) {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        if (actionBtn) {
            actionBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                handleZoneAction(zoneName);
            });
        }

        setTimeout(() => {
            if (heroSubtitle) {
                heroSubtitle.style.opacity = '1';
                heroSubtitle.style.transform = 'translateY(0)';
        // Add hover effect for the entire card
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

// Handle practice zone actions
function handleZoneAction(zoneName) {
    const actions = {
        'design-lab': () => {
            showModal('Design Lab', 'Accediendo al laboratorio de diseño colaborativo...');
            // Simulate loading
            setTimeout(() => {
                window.open('https://figma.com', '_blank');
            }, 1500);
        },
        'usability-testing': () => {
            showModal('Testing Ground', 'Iniciando plataforma de pruebas de usabilidad...');
            setTimeout(() => {
                alert('Funcionalidad de testing disponible próximamente');
            }, 1500);
        },
        'prototype-playground': () => {
            showModal('Prototype Playground', 'Cargando herramientas de prototipado...');
            setTimeout(() => {
                alert('Playground de prototipos en desarrollo');
            }, 1500);
        },
        'portfolio-studio': () => {
            showModal('Portfolio Studio', 'Accediendo al constructor de portfolio...');
            setTimeout(() => {
                alert('Portfolio Studio estará disponible próximamente');
            }, 1500);
        }
    };
    
    if (actions[zoneName]) {
        actions[zoneName]();
    }
}

// Modal functionality for practice zones
function showModal(title, message) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('practice-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'practice-modal';
        modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 id="modal-title">${title}</h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p id="modal-message">${message}</p>
                        <div class="loading-spinner"></div>
                    </div>
                </div>
            </div>
        `;
        
        // Add modal styles
        const modalStyle = document.createElement('style');
        modalStyle.textContent = `
            #practice-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
                display: none;
            }
        }, 200);
            
            .modal-overlay {
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }
            
            .modal-content {
                background: white;
                border-radius: 12px;
                max-width: 400px;
                width: 100%;
                max-height: 90vh;
                overflow: auto;
            }
            
            .modal-header {
                padding: 24px 24px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #e9ecef;
                padding-bottom: 16px;
            }
            
            .modal-header h3 {
                margin: 0;
                font-size: 1.25rem;
                color: #000;
            }
            
            .modal-close {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #6c757d;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .modal-close:hover {
                color: #000;
            }
            
            .modal-body {
                padding: 24px;
                text-align: center;
            }
            
            .loading-spinner {
                width: 40px;
                height: 40px;
                border: 3px solid #f3f3f3;
                border-top: 3px solid #000;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 20px auto;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        
        document.head.appendChild(modalStyle);
        document.body.appendChild(modal);
        
        // Add close functionality
        const closeBtn = modal.querySelector('.modal-close');
        const overlay = modal.querySelector('.modal-overlay');
        
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                modal.style.display = 'none';
            }
        });
    } else {
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-message').textContent = message;
    }
    
    modal.style.display = 'block';
}

// Tool Level Animations
const animateToolLevels = () => {
    const levelBars = document.querySelectorAll('.level-bar');
    
    levelBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';

        setTimeout(() => {
            if (heroActions) {
                heroActions.style.opacity = '1';
                heroActions.style.transform = 'translateY(0)';
            bar.style.width = width;
        }, 300);
    });
};

// Trigger tool level animations when visible
const toolsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateToolLevels();
            toolsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const toolsSection = document.querySelector('.tools-interaction');
if (toolsSection) {
    toolsObserver.observe(toolsSection);
}

// Pricing Card Interactions
document.addEventListener('DOMContentLoaded', () => {
    const pricingCTAs = document.querySelectorAll('.pricing-cta');
    
    pricingCTAs.forEach(cta => {
        cta.addEventListener('click', (e) => {
            const card = e.target.closest('.pricing-card');
            const planName = card.querySelector('h4').textContent;
            
            if (cta.classList.contains('secondary')) {
                // Enterprise plan
                showContactForm();
            } else {
                // Individual or mentorship plan
                showEnrollmentForm(planName);
            }
        }, 400);
    }, 300);
        });
    });
});

function showContactForm() {
    alert('Formulario de contacto empresarial - Funcionalidad próximamente');
}

function showEnrollmentForm(planName) {
    alert(`Inscripción para ${planName} - Formulario de inscripción próximamente`);
}

// Module Card Hover Effects
document.addEventListener('DOMContentLoaded', () => {
    const moduleCards = document.querySelectorAll('.module-card');

    // Set initial styles for hero elements
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-actions');
    heroElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    moduleCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add a subtle glow effect
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            // Remove glow effect
            card.style.boxShadow = '';
        });
    });
});

// Initialize hero animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Animate hero content with staggered timing
    const heroElements = [
        { selector: '.hero-badge', delay: 200 },
        { selector: '.hero-title', delay: 400 },
        { selector: '.hero-subtitle', delay: 600 },
        { selector: '.hero-stats', delay: 800 },
        { selector: '.hero-actions', delay: 1000 }
    ];
    
    heroElements.forEach(({ selector, delay }) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, delay);
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav') && navLinks.classList.contains('active')) {
    if (navLinks && menuToggle && !e.target.closest('.nav') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    }
@@ -207,14 +479,16 @@ const toggleBodyScroll = (disable) => {
};

// Update mobile menu toggle to handle body scroll
menuToggle.addEventListener('click', () => {
    const isActive = navLinks.classList.contains('active');
    toggleBodyScroll(!isActive);
});
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        const isActive = navLinks.classList.contains('active');
        toggleBodyScroll(!isActive);
    });
}

// Close menu and restore scroll on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
    if (window.innerWidth > 768 && navLinks && menuToggle) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        toggleBodyScroll(false);
@@ -241,7 +515,93 @@ const debounce = (func, wait) => {

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Any scroll-heavy operations can go here
    // Scroll-heavy operations can go here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);
window.addEventListener('scroll', debouncedScrollHandler);

// Timeline item entrance animations
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
                entry.target.classList.add('fade-in-up');
            }, index * 200);
        }
    });
}, { threshold: 0.2 });

document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        timelineObserver.observe(item);
    });
});

// Add smooth reveal for sections
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});

// Form validation helper (for future use)
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// Utility function for smooth element reveals
const revealElements = (selector, delay = 0) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, delay + (index * 100));
    });
};

// Certificate animation when visible
const certificateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const certificate = entry.target;
            certificate.style.animation = 'certificateFloat 3s ease-in-out infinite';
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const certificate = document.querySelector('.certificate-mockup');
    if (certificate) {
        // Add certificate animation CSS
        const certificateStyle = document.createElement('style');
        certificateStyle.textContent = `
            @keyframes certificateFloat {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-10px) rotate(1deg); }
            }
        `;
        document.head.appendChild(certificateStyle);
        
        certificateObserver.observe(certificate);
    }
});

console.log('UX/UI Academy - Curso profesional cargado exitosamente ✨');
