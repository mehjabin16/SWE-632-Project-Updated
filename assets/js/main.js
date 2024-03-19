
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Mobile nav toggle
   */

  const mobileNavToogleButton = document.querySelector('.mobile-nav-toggle');

  if (mobileNavToogleButton) {
    mobileNavToogleButton.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    });
  }

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToogleButton.classList.toggle('bi-list');
    mobileNavToogleButton.classList.toggle('bi-x');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Hero Slider
   */
  var swiper = new Swiper(".sliderFeaturedPosts", {
    spaceBetween: 0,
    speed: 500,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },
  });

  /**
   * Open and close the search form.
   */
  const searchOpen = document.querySelector('.js-search-open');
  const searchClose = document.querySelector('.js-search-close');
  const searchWrap = document.querySelector(".js-search-form-wrap");

  searchOpen.addEventListener("click", (e) => {
    e.preventDefault();
    searchWrap.classList.add("active");
  });

  searchClose.addEventListener("click", (e) => {
    e.preventDefault();
    searchWrap.classList.remove("active");
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

/**
   * Rating Scale
   */
  window.addEventListener('DOMContentLoaded', function() {
    const ratings = document.getElementById('rating1');
    const stars = ratings.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('mouseover', function() {
            const value = this.getAttribute('data-value');
            highlightStars(value);
        });

        star.addEventListener('mouseout', function() {
            const rating = ratings.getAttribute('data-rating');
            highlightStars(rating);
        });

        star.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            ratings.setAttribute('data-rating', value);
            highlightStars(value);
        });
    });

    function highlightStars(value) {
        stars.forEach(star => {
            const starValue = star.getAttribute('data-value');
            if (starValue <= value) {
                star.classList.add('hover');
            } else {
                star.classList.remove('hover');
            }
        });
    }
});

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});






});

