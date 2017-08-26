// map
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