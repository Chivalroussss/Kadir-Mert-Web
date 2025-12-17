document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const toggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.navbar');

    if (toggle) {
        toggle.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            if (nav.style.display === 'flex') {
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.background = '#fff';
                nav.style.flexDirection = 'column';
                nav.style.padding = '20px';
                nav.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
            }
        });
    }

    // Sticky Header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Status System
    const statusDot = document.querySelector('.status-dot');
    const statusText = document.querySelector('.status-text');

    if (statusDot && statusText) {
        const now = new Date();
        const day = now.getDay(); // 0 = Sunday
        const hour = now.getHours();

        // 24 Hours Open, Except Sunday
        if (day === 0) {
            statusDot.classList.add('closed');
            statusText.textContent = 'Şu an KAPALI (Pazar günü kapalıyız)';
        } else {
            statusDot.classList.add('open');
            statusText.textContent = 'Şu an AÇIK (7/24 Hizmet)';
        }
    }

    // Search Toggle
    const searchBtn = document.querySelector('.search-btn');
    const searchModal = document.querySelector('.search-modal');
    const searchClose = document.querySelector('.search-close');

    if (searchBtn && searchModal && searchClose) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            searchModal.classList.add('active');
        });

        searchClose.addEventListener('click', () => {
            searchModal.classList.remove('active');
        });

        // Close on clicking outside
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                searchModal.classList.remove('active');
            }
        });
    }

    // Dark Mode Toggle
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Update icon
        if (body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
});
