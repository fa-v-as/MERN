document.addEventListener('DOMContentLoaded', () => {
    window.onscroll = () => {
        let header = document.querySelector('.header');
        if (header) {
            header.classList.toggle("sticky", window.scrollY > 100);
        } else {
            console.error('Header element not found');
        }
    };
});
