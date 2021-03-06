$('.button-collapse').sideNav({
    menuWidth: 240, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  }
);

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('.materialboxed').materialbox({time_constant: 600})
});

$('.carousel.carousel-slider').carousel({full_width: true});

setInterval(function(){
  $('.carousel').carousel('next');
}, 5000);