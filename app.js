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
