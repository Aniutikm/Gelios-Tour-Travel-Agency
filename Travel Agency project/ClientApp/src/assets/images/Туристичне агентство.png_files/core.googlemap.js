function jeremys_pottery_googlemap_init(dom_obj, coords) {
	"use strict";
	if (typeof JEREMYS_POTTERY_STORAGE['googlemap_init_obj'] == 'undefined') jeremys_pottery_googlemap_init_styles();
	JEREMYS_POTTERY_STORAGE['googlemap_init_obj'].geocoder = '';
	try {
		var id = dom_obj.id;
		JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id] = {
			dom: dom_obj,
			markers: coords.markers,
			geocoder_request: false,
			opt: {
				zoom: coords.zoom,
				center: null,
				scrollwheel: false,
				scaleControl: false,
				disableDefaultUI: false,
				panControl: true,
				zoomControl: true, //zoom
				mapTypeControl: false,
				streetViewControl: false,
				overviewMapControl: false,
				styles: JEREMYS_POTTERY_STORAGE['googlemap_styles'][coords.style ? coords.style : 'default'],
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
		};
		
		jeremys_pottery_googlemap_create(id);

	} catch (e) {
		
		dcl(JEREMYS_POTTERY_STORAGE['strings']['googlemap_not_avail']);

	};
}

function jeremys_pottery_googlemap_create(id) {
	"use strict";

	// Create map
	JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].map = new google.maps.Map(JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].dom, JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].opt);

	// Add markers
	for (var i in JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers)
		JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers[i].inited = false;
	jeremys_pottery_googlemap_add_markers(id);
	
	// Add resize listener
	jQuery(window).resize(function() {
		if (JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].map)
			JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].map.setCenter(JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].opt.center);
	});
}

function jeremys_pottery_googlemap_add_markers(id) {
	"use strict";
	for (var i in JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers) {
		
		if (JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers[i].inited) continue;
		
		if (JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers[i].latlng == '') {
			
			if (JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].geocoder_request!==false) continue;
			
			if (JEREMYS_POTTERY_STORAGE['googlemap_init_obj'].geocoder == '') JEREMYS_POTTERY_STORAGE['googlemap_init_obj'].geocoder = new google.maps.Geocoder();
			JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].geocoder_request = i;
			JEREMYS_POTTERY_STORAGE['googlemap_init_obj'].geocoder.geocode({address: JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers[i].address}, function(results, status) {
				"use strict";
				if (status == google.maps.GeocoderStatus.OK) {
					var idx = JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].geocoder_request;
					if (results[0].geometry.location.lat && results[0].geometry.location.lng) {
						JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers[idx].latlng = '' + results[0].geometry.location.lat() + ',' + results[0].geometry.location.lng();
					} else {
						JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers[idx].latlng = results[0].geometry.location.toString().replace(/\(\)/g, '');
					}
					JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].geocoder_request = false;
					setTimeout(function() { 
						jeremys_pottery_googlemap_add_markers(id); 
						}, 200);
				} else
					dcl(JEREMYS_POTTERY_STORAGE['strings']['geocode_error'] + ' ' + status);
			});
		
		} else {
			
			// Prepare marker object
			var latlngStr = JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers[i].latlng.split(',');
			var markerInit = {
				map: JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].map,
				position: new google.maps.LatLng(latlngStr[0], latlngStr[1]),
				clickable: JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers[i].description!=''
			};
			if (JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers[i].point) markerInit.icon = JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers[i].point;
			if (JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers[i].title) markerInit.title = JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers[i].title;
			JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers[i].marker = new google.maps.Marker(markerInit);
			
			// Set Map center
			if (JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].opt.center == null) {
				JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].opt.center = markerInit.position;
				JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].map.setCenter(JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].opt.center);				
			}
			
			// Add description window
			if (JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers[i].description!='') {
				JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers[i].infowindow = new google.maps.InfoWindow({
					content: JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers[i].description
				});
				google.maps.event.addListener(JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers[i].marker, "click", function(e) {
					var latlng = e.latLng.toString().replace("(", '').replace(")", "").replace(" ", "");
					for (var i in JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers) {
						if (latlng == JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers[i].latlng) {
							JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers[i].infowindow.open(
								JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].map,
								JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers[i].marker
							);
							break;
						}
					}
				});
			}
			
			JEREMYS_POTTERY_STORAGE['googlemap_init_obj'][id].markers[i].inited = true;
		}
	}
}

function jeremys_pottery_googlemap_refresh() {
	"use strict";
	for (id in JEREMYS_POTTERY_STORAGE['googlemap_init_obj']) {
		jeremys_pottery_googlemap_create(id);
	}
}

function jeremys_pottery_googlemap_init_styles() {
	// Init Google map
	JEREMYS_POTTERY_STORAGE['googlemap_init_obj'] = {};
	JEREMYS_POTTERY_STORAGE['googlemap_styles'] = {
		'default': []
	};
	if (window.jeremys_pottery_theme_googlemap_styles!==undefined)
		JEREMYS_POTTERY_STORAGE['googlemap_styles'] = jeremys_pottery_theme_googlemap_styles(JEREMYS_POTTERY_STORAGE['googlemap_styles']);
}