document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll("#hero .slide");
    let current = 0;
  
    // Initialize: show only the first slide
    slides.forEach((slide, i) => {
      slide.style.opacity = i === 0 ? '1' : '0';
    });
  
    setInterval(() => {
      slides[current].style.opacity = '0';
  
      current = (current + 1) % slides.length;
  
      slides[current].style.opacity = '1';
    }, 3000);
  });
  