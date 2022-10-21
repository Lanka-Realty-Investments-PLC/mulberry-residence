$(window).on('load',function() { 
  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('.dropdownmenu').addClass('nav-visible');
      $('.dropdownmenu').removeClass('nav-invisible');
    } else {
      $('#header').removeClass('header-scrolled');
      $('.dropdownmenu').removeClass('nav-visible');
      $('.dropdownmenu').addClass('nav-invisible');
    }
  });
// Hide the navbar
$(".navbar").hide();
  });


const videosList = [
  {
    src: 'img/grand-sky-v2.mp4?raw=true',
    type: 'video/mp4',
  }
  /*{
    src: 'img/penthouse-360.mp4?raw=true',
    type: 'video/mp4',
  }*/
];
const index = Math.floor(Math.random() * videosList.length);
console.log(index); 

window.onload = () => {
  const videoElement = document.getElementById('myVideo');
  const source = document.createElement('source');

  source.setAttribute('src', videosList[index].src);
  source.setAttribute('type', videosList[index].type);
  videoElement.appendChild(source);
  videoElement.play();
  console.log(source);
};



$(document).ready(function() {
  var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = $('nav').first().height(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function() {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });
  
});