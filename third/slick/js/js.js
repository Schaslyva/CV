$('.sl').slick({
dots: true,
  asNavFor: '.sl2'

});

$('.sl2').slick({
  dots: true,
  speed: 3000,
  slidesToShow: 3,
    asNavFor: '.sl',
    focusOnSelect: true
});
