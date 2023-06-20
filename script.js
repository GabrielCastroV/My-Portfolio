window.addEventListener('DOMContentLoaded', function () {
  // Smooth Scroll
  const navLinks = document.querySelectorAll('nav a');

  for (const link of navLinks) {
    link.addEventListener('click', smoothScroll);
  }

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  }
});
