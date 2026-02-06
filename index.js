
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu on link click for mobile
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            // This allows the link to navigate normally but still closes the mobile menu
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Scroll Reveal
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        reveals.forEach(reveal => observer.observe(reveal));
    }

    // Gallery Modal (check if it exists on the page)
    const modal = document.getElementById('imageModal');
    if (modal) {
        const modalImg = modal.querySelector('img');
        const closeModal = document.querySelector('.close-modal');

        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                modalImg.src = item.dataset.modalImg;
                modal.classList.add('active');
            });
        });

        if(closeModal) {
            closeModal.addEventListener('click', () => modal.classList.remove('active'));
        }
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    }

    // Form Submissions (Demo)
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message envoyé ! Merci pour votre intérêt.');
            form.reset();
        });
    });

    // Header Scroll Effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.style.background = window.scrollY > 100 
                ? 'rgba(18,18,18,0.98)' : 'rgba(18,18,18,0.95)';
        });
    }
});