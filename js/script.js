//Isotope filter
$(document).ready(function() {
  var $container = $('.isotope');
  $('.filter-button-group .course__btn').click(function(){
    var $this = $(this);
    if ( !$this.hasClass('is-checked') ) {
      $this.parents('#options').find('.is-checked').removeClass('is-checked');
      $this.addClass('is-checked');
    }
    var selector = $this.attr('data-filter');
    $container.isotope({  itemSelector: '.course__item', filter: selector });
    return false;
  });
  
  var $container2 = $('.isotope2');
  $('.filter-button-group2 .course__btn').click(function(){
    var $this = $(this);
    if ( !$this.hasClass('is-checked') ) {
      $this.parents('#options2').find('.is-checked').removeClass('is-checked');
      $this.addClass('is-checked');
    }
    var selector = $this.attr('data-filter');
    $container2.isotope({  itemSelector: '.course__item', filter: selector });
    return false;
  });
});

//Scroll to menu anchor
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('.menu__item a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('.menu__item').each(function () {
        $(this).removeClass('menu__item--active');
    })
    $(this).parent().addClass('menu__item--active');

    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
        $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.menu__link').each(function () {
    event.preventDefault();
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.menu__item').each(function () {
        $(this).removeClass('menu__item--active');
      })
      currLink.parent().addClass("menu__item--active");
    }
  });
};
