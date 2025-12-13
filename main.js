/**
 * What to do when an item enters the screen
 * If it is in the screen, isIntersecting will be true.
 * Add a class when it is.
 */
const intersectionCallback = (entries) => {
    for (const entry of entries) { // Loop over all elements that either enter or exit the view.
        if (entry.isIntersecting) { // This is true when the element is in view.
        let animation = entry.target.getAttribute('data-animation');
        let delay = entry.target.getAttribute('data-delay');
        entry.target.classList.add(animation); // Add a class.
        delay && entry.target.classList.add('animate__delay-' + delay + 's'); // Add a class.animate__delay-2s
        }
    }
  }

  /**
  * Create a observer and use the instersectionCallback as
  * the instructions for what to do when an element enters
  * or leaves the view
  */
  const observer = new IntersectionObserver(intersectionCallback);

  /**
  * Get all .item elements and loop over them.
  * Observe each individual item.
  */
  const items = document.querySelectorAll('.animate__animated');
  for (const item of items) {
  observer.observe(item);
  }

  const nav = document.getElementById("navbar");

  window.addEventListener( "scroll", () => {
    let opacity = 10;
    if(window.scrollY < 10){
      opacity = 10;
    } else if(window.scrollY > 80){
      opacity = 80;
    } else {
      opacity = window.scrollY;
    }
    nav.style.backgroundColor = `rgba(0,0,0, ${opacity}% )`
  })


const swiper = new Swiper('.swiper-hacemos', {
    grabCursor: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoint
    breakpoints: {
      320: {
        slidesPerView: 1,
        centeredSlides: true,
      },
      960: {
        slidesPerView: 2,
      },
      1420: {
        slidesPerView: 3,
      },
    },
  });

  var swiper1 = new Swiper(".swiper-casos", {
    grabCursor: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next-caso',
      prevEl: '.swiper-button-prev-caso',
    }
  });