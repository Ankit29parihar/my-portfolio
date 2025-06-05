var typed = new Typed(".auto-type", {
    strings: ["Frontend Developer", "Backend Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: '|'
  });
  
const menuBtn = document.getElementById('menu-toggle');
const rightNav = document.querySelector('.right-nav');

menuBtn.addEventListener('click', () => {
    rightNav.classList.toggle('open');
    menuBtn.classList.toggle('open');
});


  // Close the file / close icon animation
        function handleCloseClick() {
            const overlay = document.getElementById('green-overlay');
            overlay.style.display = 'block';
            setTimeout(() => {
                overlay.style.transform = 'translateY(0)';
            }, 10);
            setTimeout(() => {
                // Add a flag to sessionStorage to trigger animation on previous page
                sessionStorage.setItem('showGreenEnter', '1');
                window.history.back();
            }, 700); // Adjust timing to match transition
        }

        // Animation for previous page
        window.addEventListener('DOMContentLoaded', () => {
            if (sessionStorage.getItem('showGreenEnter')) {
                sessionStorage.removeItem('showGreenEnter');
                let overlay = document.getElementById('green-overlay');
                if (!overlay) {
                    overlay = document.createElement('div');
                    overlay.id = 'green-overlay';
                    document.body.appendChild(overlay);
                }
                overlay.style.display = 'block';
                overlay.style.transform = 'translateY(0)';
                setTimeout(() => {
                    overlay.style.transform = 'translateY(-100%)';
                }, 10);
                setTimeout(() => {
                    overlay.style.display = 'none';
                }, 700);
            }
        });