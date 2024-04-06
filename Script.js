const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const popup = document.getElementById('popup');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
    
    openBtn.addEventListener('click', () => {
      popup.style.display = 'block';
    });
    
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });
    
    // Close the pop-up if user clicks outside the pop-up content
    window.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });