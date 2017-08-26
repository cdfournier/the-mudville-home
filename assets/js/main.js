// URL updates and the element focus is maintained
// originally found via in Update 3 on http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links

// filter handling for a /dir/ OR /indexordefault.page
function filterPath(string) {
  return string
    .replace(/^\//, '')
    .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
    .replace(/\/$/, '');
}

var locationPath = filterPath(location.pathname);
$('a[href*="#"]').each(function () {
  var thisPath = filterPath(this.pathname) || locationPath;
  var hash = this.hash;
  if ($("#" + hash.replace(/#/, '')).length) {
    if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
      var $target = $(hash), target = this.hash;
      if (target) {
        $(this).click(function (event) {
          event.preventDefault();
          $('html, body').animate({scrollTop: $target.offset().top}, 1000, function () {
            location.hash = target; 
            $target.focus();
            if ($target.is(":focus")){ //checking if the target was focused
              return false;
            }else{
              $target.attr('tabindex','-1'); //Adding tabindex for elements not focusable
              $target.focus(); //Setting focus
            };
          });       
        });
      }
    }
  }
});


//Nav
$("#open-nav").animatedModal({
  modalTarget:'nav-modal',
  animatedIn:'slideInDown',
  animatedOut:'slideOutUp',
  color:'#ffffff'
});

// Open Nav Color
var stickyOffset = $("#btn-open-modal").offset();
var $contentDivs = $(".bg");
$(document).scroll(function() {
  $contentDivs.each(function(k) {
    var _thisOffset = $(this).offset();
    var _actPosition = _thisOffset.top - $(window).scrollTop();
    if (_actPosition < stickyOffset.top && _actPosition + $(this).height() > 0) {
      $("#btn-open-modal").removeClass("light dark").addClass($(this).hasClass("light") ? "light" : "dark");
      return false;
    }
  });
});


// Map
var map;
$(document).ready(function(){
  map = new GMaps({
    el: '#map',
  	lat: 42.199689,
  	lng: -71.429817,
    zoom: 15,
    scrollwheel: false
  });
  map.addMarker({
  	lat: 42.195392,
  	lng: -71.430762,
  	title: 'Marker with InfoWindow',
  	infoWindow: {
  		content: '<div dir="ltr" jstcache="0"><div jstcache="33" class="poi-info-window gm-style"> <div jstcache="2"> <div jstcache="3" class="title full-width" jsan="7.title,7.full-width">The Mudville Home</div> <div class="address"> <div jstcache="4" jsinstance="*1" class="address-line full-width" jsan="7.address-line,7.full-width">Holliston, MA 01746</div> </div> </div> <div jstcache="5" style="display:none"></div> </div></div>'
  	}
  });
  var styles = [
    {
      stylers: [
        { saturation: -100 }
      ]
    }
  ];
  map.addStyle({
    styledMapName:"Styled Map",
    styles: styles,
    mapTypeId: "map_style"  
  });
  map.setStyle("map_style");
});


// Weather
$.simpleWeather({
	zipcode: '',
	woeid: '12758557',
	location: '',
	unit: 'f',
	success: function(weather) {
		html = '<img src="assets/weather/'+weather.code+'.svg">';
		html += '<h1>'+weather.temp+'&deg; '+weather.units.temp+'</h1><p>'+weather.currently+'</p>';
		$("#conditions").html(html);
	},
	error: function(error) {
		$("#conditions").html('<p>'+error+'</p>');
	}
});