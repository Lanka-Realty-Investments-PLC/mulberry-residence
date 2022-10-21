function getPoints() {
    var new_points = $('.distribution-map .map-point').sort(function() {
        return ( Math.round( Math.random() ) - 0.5 );
    });
    return new_points;
}

$('.distribution-map .map-point').hover(function() {
    points = getPoints();
});

var points = getPoints();
var count = 0;
setInterval(function() {
    points.removeClass('pulsing');

    if (count == points.length - 1) {
        count = 0;
    } else {
        count++;
    }

    points.eq(count).addClass('pulsing');
}, 3500);

if (screen.width > 1600) {
$(window).on('load resize', function(){
    $('.hero').height($(this).height());
    $('.hero').width($(this).width());
  
});
}


//Stand 1
var modal1 = document.getElementById("popupEen");
var btn1 = document.getElementById("standEen");
var span1 = document.getElementsByClassName("close")[0];

/*btn1.onclick = function() {
  modal1.style.display = "block";
};

span1.onclick = function() {
  modal1.style.display = "none";
};
*/
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};

$('.map-point').hover(function(){
  $('.right-note-box').addClass('opClass');
});

$('.map-point').mouseleave(function(){
  $('.right-note-box').removeClass('opClass');
});
