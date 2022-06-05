$('.clients-carousel').owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  smartSpeed: 450,
  margin: 30,
  responsive: {
      0: {
          items: 1
      },
      768: {
          items: 2
      },
      991: {
          items: 2
      },
      1200: {
          items: 2
      },
      1920: {
          items: 2
      }
  }
});