
var sdegree = 0;
var pos = 2000;
var ang = 40;
			
var doc = document;

$(document).ready(function () {
  $('#submitBtn').click(function() {
    checked = $("input[type=checkbox]:checked").length;

    if(!checked) {
      alert("You must check at least one checkbox.");
      return false;
    }

  });
});
moveText = function(possition) {
  let delta_y = Math.sin(Math.PI * ang / 180) * possition;
      $('.scroll-text').css({
          'transform': 'rotateX(' + ang + 'deg) translateZ(' + 1800 + 'px) translateY(' + delta_y + 'px)' 
      });
}

		if (doc.addEventListener) {
			// IE9, Chrome, Safari, Opera
			doc.addEventListener("mousewheel", MouseWheelHandler, false);
			// Firefox
			doc.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
		}
		// IE 6/7/8
		else doc.attachEvent("onmousewheel", MouseWheelHandler);
    
    moveText(pos);
    document.getElementById("muteBtn").onclick = function() {
      
      if(!document.getElementsByTagName("audio")[0].paused) {
        this.src = "images/mute.svg";
        document.getElementsByTagName("audio")[0].pause();
      } else {
        this.src = "images/soundOn.svg";
        document.getElementsByTagName("audio")[0].play();
      }
    };
    document.getElementsByClassName("startBtn")[0].onclick = function() {
    this.style.visibility = "hidden";
    document.getElementsByClassName("introLine")[0].style.animationPlayState = "running";
    document.getElementsByClassName("logo")[0].style.visibility = "visible";
    document.getElementsByClassName("logo")[0].style.animationPlayState = "running";
      document.getElementsByTagName("audio")[0].play();

    setTimeout(() => {
      document.getElementsByClassName("scroll-text")[0].style.visibility = "visible";
      var id = setInterval(() => {
        moveText(pos);
        pos = pos-1;
        if (pos <= 450) {
          clearInterval(id);
        }
      }, 8);
      document.getElementById("muteBtn").style.visibility = "visible";
    }, 8500);
  }
		
		function MouseWheelHandler(e) {
			// cross-browser wheel delta
			var e = window.event || e; // old IE support
			var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
			pos += delta*35;
			// pos += delta*320;
			sdegree += 0.5 * delta;

      moveText(pos);
				
			// var o = animateText(sdegree);
			
			// $('.scroll-text').css({
			// 	'top': o.top + 'px', 
			// 	'transform': 'rotateX(' + o.rotateX + 'deg) translateZ(' + o.translateZ + 'px)'
			// });

      
      // let delta_y = Math.sin(Math.PI * ang / 180) * pos;
      // $('.scroll-text').css({
      //     'transform': 'rotateX(' + ang + 'deg) translateZ(' + 1800 + 'px) translateY(' + delta_y + 'px)' 
      // });
			
			return false;
		}

// function animateText(step){
		
//   var limit = {'min': 0, 'max': 100};

//   var top_l = {'min': 0, 'max': -6000};
//   var rotateX_l = {'min': 20, 'max': 21};
//   var translateZ_l = {'min': 0, 'max': -2500};
  
//   //

//   var m_top = (top_l.max - top_l.min) / (limit.max - limit.min);
//   var m_rotateX = (rotateX_l.max - rotateX_l.min) / (limit.max - limit.min);
//   var m_translateZ = (translateZ_l.max - translateZ_l.min) / (limit.max - limit.min);
    
//   var top = m_top * (step) + top_l.min;
//   var rotateX = m_rotateX * (step) + rotateX_l.min; 
//   var translateZ = m_translateZ * (step) + translateZ_l.min;
  
//   var output = {
//     'top': top,
//     'rotateX': rotateX, 
//     'translateZ': translateZ
//   };
  
//   return output;
  
// }





$.fn.textWidth = function(text, font) {
    
  if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
  
  $.fn.textWidth.fakeEl.text(text || this.val() || this.text() || this.attr('placeholder')).css('font', font || this.css('font'));
  
  return $.fn.textWidth.fakeEl.width();
};

$('.starWarsInput').on('input', function() {
  var inputWidth = $(this).textWidth();
  $(this).css({
      width: (inputWidth + 10)
  })
}).trigger('input');


function inputWidth(elem, minW, maxW) {
  elem = $(this);
  console.log(elem)
}

var targetElem = $('.starWarsInput');

inputWidth(targetElem);












var windowHeight = $('#intro').height();
var windowWidth = $('#intro').width();

$('#canvas').attr({ height: windowHeight });
$('#canvas').attr({ width: windowWidth });

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function smallStarCreate(starNumber, starSize) {
    for (var i = 0; i < starNumber; i++) {
        ctx.beginPath();
        var starLeft = Math.floor(Math.random() * windowWidth) + 1;
        var starTop = Math.floor(Math.random() * windowHeight) + 1;
        var colorVal01 = Math.floor(Math.random() * 106) + 150;
        var colorVal02 = Math.floor(Math.random() * 106) + 150;
        var opacityVal = (Math.floor(Math.random() * 11)) / 10;
        ctx.fillStyle = "rgba(" + colorVal01 + ", " + colorVal02 + ", " + 255 + ", " + opacityVal + ")";
        ctx.fillRect(starLeft, starTop, starSize, starSize);
        ctx.fill();
    }
}
smallStarCreate(200, 1);
smallStarCreate(50, 2);
ctx.restore();
ctx.save();

function bigStarCreate(starNumber, starSize) {
    for (var i = 0; i < starNumber; i++) {
        ctx.beginPath();
        var starLeft = Math.floor(Math.random() * windowWidth) + 1;
        var starTop = Math.floor(Math.random() * windowHeight) + 1;
        var colorVal01 = Math.floor(Math.random() * 106) + 150;
        var colorVal02 = Math.floor(Math.random() * 106) + 150;
        var opacityVal = (Math.floor(Math.random() * 11)) / 10;
        var colorVal = Math.floor(Math.random() * 151);
        var radgrad = ctx.createRadialGradient(starLeft, starTop, 0, starLeft, starTop, starSize);
        radgrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        radgrad.addColorStop(1, "rgba(" + colorVal01 + ", " + colorVal02 + ", " + 255 + ", " + opacityVal + ")");
        ctx.fillStyle = radgrad;
        ctx.arc(starLeft, starTop, starSize, 0, Math.PI * 2, true);
        ctx.fill();
    }
}
bigStarCreate(10, 1);
bigStarCreate(5, 2);
var sky = new Image();
sky.src = canvas.toDataURL("image/png");
$('#intro').css("background", "url(" + sky.src + ")");
$('#intro').css("background-color", "black");
ctx.restore();
ctx.save();