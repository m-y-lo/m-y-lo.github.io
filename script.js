document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.accordion-item');
  
    items.forEach(item => {
      item.querySelector('.accordion-title').addEventListener('click', function() {
        // Toggle the active class to expand/collapse the accordion content
        item.querySelector('.accordion-content').classList.toggle('active');
      });
    });
  });