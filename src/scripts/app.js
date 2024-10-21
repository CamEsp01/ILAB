"use script";

// SWIPER

var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// CLICK SECTION INTERACTION 

document.querySelectorAll('.accordion-title').forEach(title => {
    title.addEventListener('click', () => {
        
        const content = title.nextElementSibling;

        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) { 
                item.style.maxHeight = '0'; 
                item.previousElementSibling.classList.remove('active'); 
            }
        });

        title.classList.toggle('active'); 
        if (title.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px'; 
        } else {
            content.style.maxHeight = '0'; 
        }
    });
});








