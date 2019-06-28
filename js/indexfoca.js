// // Animate on Scroll

AOS.init();

$(document).ready(function () {
  // Transition effect for navbar
  $(window).scroll(function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("navbar-solid");
      $(".navbar").removeClass("pt-4");
    } else {
      $(".navbar").removeClass("navbar-solid");
      $(".navbar").addClass("pt-4");
    }
  });
});

$(document).ready(function () {
  // Transition effect for navbar
  $(window).scroll(function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 50) {
      $("a").addClass("text-dark");
    } else {
      $("a").removeClass("text-dark");
    }
  });
});

// // OWL CAROUSEL SLIDERS

$("#owl-about-zangoc").owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  },
  navText: ["←", "→"],
  responsiveClass: true,
  autoplay: false,
  slideSpeed: 100,
  paginationSpeed: 100
});

$("#owl-about-eski-foca").owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  },
  navText: ["←", "→"],
  responsiveClass: true,
  autoplay: false,
  slideSpeed: 100,
  paginationSpeed: 100
});

$("#owl-press-slider").owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  },
  navText: ["←", "→"],
  responsiveClass: true,
  autoplay: false,
  slideSpeed: 100,
  paginationSpeed: 100
});

$("#owl-misafir-slider").owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 2
    }
  },
  navText: ["←", "→"],
  responsiveClass: true,
  autoplay: false,
  slideSpeed: 100,
  paginationSpeed: 100
});

$("#owl-konaklama").owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  },
  navText: ["←", "→"],
  responsiveClass: true,
  autoplay: false,
  slideSpeed: 100,
  paginationSpeed: 100
});