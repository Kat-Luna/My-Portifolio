// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Basic confirmation it's loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio Ready");
});
