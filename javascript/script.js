$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');       
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function() {
      const header = $('header');
      const scrollPosition = $(window).scrollTop() - header.outerHeight();

      let activeSectionIndex = 0;

      if (scrollPosition <= 0) {
        header.css('box-shadow', 'none');
      } else {
        header.css('box-shadow','5px 1px 5px rgba(0, 0, 0, 0.1)')
      }

      sections.each(function(i) {
        const section = $(this);
        const sectionTop = section.offset().top - 85;
        const sectionBottom = sectionTop+ section.outerHeight();

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          activeSectionIndex = i;
          return false;
        } 
      })

      navItems.removeClass('active');
      $(navItems[activeSectionIndex]).addClass('active');
    })

    ScrollReveal().reveal('#cta',{
      origin: 'left',
      duration: 3000,
      distance: '20%'
    })

    ScrollReveal().reveal('#menu',{
      origin: 'right',
      duration: 2000,
      distance: '20%'
    })

    ScrollReveal().reveal('#testimonials',{
      origin: 'left',
      duration: 1000,
      distance: '20%'
    })

    ScrollReveal().reveal('#testimonials',{
      origin: 'right',
      duration: 1000,
      distance: '20%'
    })
});

document.querySelectorAll(".btn-card").forEach((btn, index) => {
    const dialog = document.querySelector(`#dialog-${index + 1}`);
    const closeBtn = dialog.querySelector(".btn-close");

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      dialog.showModal();
    });

    closeBtn.addEventListener("click", () => dialog.close());
  });


  new Swiper('.container', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev',
    },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    },
  }
});
