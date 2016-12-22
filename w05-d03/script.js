'use strict';
console.log('JS connected');

$(() => {
  const windowHeight = $(window).height();
  const windowWidth = $(window).width()
  console.log(`height=${windowHeight}`);
  console.log(`width =${windowWidth}`);
  $('.land').css('height', windowHeight);

  const projectPhoto = $('.box-shadow');
  const boxShadow = () => {
    projectPhoto.animate({
      'box-shadow': '10px 10px 5px #888888'
      },1000);
   };
   projectPhoto.on('mouseover', boxShadow);















});
