$(window).on('load',function() { 
var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('#nav');
var lineOne = document.querySelector('#nav .menu-btn .line--1');
var lineTwo = document.querySelector('#nav .menu-btn .line--2');
var lineThree = document.querySelector('#nav .menu-btn .line--3');
var link = document.querySelector('#nav .nav-links');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    /*link.classList.toggle('fade-in');*/
})

if(navigator.userAgent.indexOf('Mac') > 0)
$('body').addClass('mac-os');

  // Header scroll class


  });
// Hide the navbar
$(".navbar").hide();

// Fade in the navbar after scrolling over 400 pixels

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.navbar').fadeIn();
    } else {
        $('.navbar').fadeOut();
    }
});


/*$(".menu-btn").on("click", function(e){
  if($("nav").hasClass('nav-open')){
    $("nav").delay("slow").removeClass('height-nav');   
  }
  else{
    $("nav").delay("slow").addClass('height-nav');
  }
})*/
$('.menu-btn').on('click', function() {
  $('.nav-links ul li a').toggle();
});

$('.span-menu').click(function(){
  $('.hidden').toggleClass('show');
 });

 $('.menu-btn').on('click', function() {
 if ($(".hidden.show")) {
  $(".nav-links ul li a").animate(
      {
          opacity: "1"    
      },
      600,
      function(){
          $(".nav-links ul li a").fadeIn();
      }
  );
}
else {
  $(".nav-links ul li a").fadeOut(600, function(){
      $(".nav-links ul li a").animate(
          {
              opacity: "0"
          },
          600
      );
  });
}
 })

 var expander = $('#expander');
var expanderLeft = expander.attr('right');

function expandMenu() {
  $('#expander').fadeOut('150');
  $('.right-note-box').animate({
    right: 0
  }, 200).addClass('expanded');
}

function unexpandMenu() {
  $('.right-note-box').animate({
    right: -300
  }, 200).removeClass('expanded');
  $('#expander').fadeIn('150');
}

$('#unexpander').on('click', function() {
  unexpandMenu();
});
expander.on('click', function() {
  expandMenu();
});


$(window).on("load", function() {
  // Add timeout and open the .right-note.box 
  setTimeout(expandMenu(), 5000);
})

$(document).ready(function(){
  // Social plus button function
  $('.plus-button').click(function(){
      $(this).toggleClass('open');

      $('.social-button').toggleClass('active');
  });
});