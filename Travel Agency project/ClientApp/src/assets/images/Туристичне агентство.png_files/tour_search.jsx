window.ittour_module3_property= '{"scheme":"7082","module3_currency_default":"2","module3_hide_pay_form":"1","module3_active_tab":"tour","module3_language":"10","module3_display_tab_tour":"1","module3_display_tab_guided":"1","module3_display_tab_tickets":"1","countryFromId":"6","countryId":"318","cityFromId":"535","currencyId":"2","lang":"uk","enableBuy":"false","theme":"https://www.ittour.com.ua/classes/handlers/ittour_external_modules/ittour_modules/new_v3/fd_mod_v3/css/theme_gray.css","countryGuidedId":"30","notSelectedDefCountry":"false","activeTab":"tour","toursPerPage":"10","countryCharterId":"338","cityCharterId":"3","scrollHotels":"20","guidedTransportId":"0","cityToId":"0","module3_paysystem_client_pay":"0","module3_liqpay_commission":"0","only_standard_price":"1","dynamic_packet":"0","tableView":"0","module3_display_hotel_filter":"0"}';
// Loading js regarding this module
function load_script_fd_mod_v3(filename) {
  var scriptElJsx = document.getElementById('itTourWidgetScriptJsx');

  // Get token // token === ID agency
  var token = document.getElementById('itTourWidgetScriptJsx').src.trim().replace('&ver=3','').split('id=');
  token = token[1];

  // Add token to filename
  if( token != null && token != 'undefined' && typeof(token) != 'undefined' && typeof(token) != 'null') {
    filename += token;
  } else {
    filename += '8119D213217237G2284190O62';
  }

  // Set custom params
  script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = filename;
  script.id = 'itTourWidgetScript';
  if (scriptElJsx.getAttribute('countryFromId')) {
    script.setAttribute('countryFromId', scriptElJsx.getAttribute('countryFromId'));
  }
  if (scriptElJsx.getAttribute('countryId')) {
   script.setAttribute('countryId', scriptElJsx.getAttribute('countryId'));
  }
  if (scriptElJsx.getAttribute('cityFromId')) {
    script.setAttribute('cityFromId', scriptElJsx.getAttribute('cityFromId'));
  }
  if (scriptElJsx.getAttribute('currencyId')) {
    script.setAttribute('currencyId', scriptElJsx.getAttribute('currencyId'));
  }
  if (scriptElJsx.getAttribute('lang')) {
    script.setAttribute('lang', scriptElJsx.getAttribute('lang'));
   }
  if (scriptElJsx.getAttribute('enableBuy')) {
    script.setAttribute('enableBuy', scriptElJsx.getAttribute('enableBuy'));
  }
  if (scriptElJsx.getAttribute('theme')) {
    script.setAttribute('theme', scriptElJsx.getAttribute('theme'));
  }
  if (scriptElJsx.getAttribute('countryGuidedId')) {
    script.setAttribute('countryGuidedId', scriptElJsx.getAttribute('countryGuidedId'));
 }
  if (scriptElJsx.getAttribute('notSelectedDefCountry')) {
    script.setAttribute('notSelectedDefCountry', scriptElJsx.getAttribute('notSelectedDefCountry'));
  }
  if (scriptElJsx.getAttribute('activeTab')) {
    script.setAttribute('activeTab', scriptElJsx.getAttribute('activeTab'));
  }
  if (scriptElJsx.getAttribute('opacity')) {
    script.setAttribute('opacity', scriptElJsx.getAttribute('opacity'));
  }
  if (scriptElJsx.getAttribute('openFilter')) {
    script.setAttribute('openFilter', scriptElJsx.getAttribute('openFilter'));
  }  
  if (scriptElJsx.getAttribute('tourTab')) {
    script.setAttribute('tourTab', scriptElJsx.getAttribute('tourTab'));
  }  
  if (scriptElJsx.getAttribute('euroTab')) {
    script.setAttribute('euroTab', scriptElJsx.getAttribute('euroTab'));
  }    
  if (scriptElJsx.getAttribute('guidedTab')) {
    script.setAttribute('guidedTab', scriptElJsx.getAttribute('guidedTab'));
  }  
  if (scriptElJsx.getAttribute('ticketsTab')) {
    script.setAttribute('ticketsTab', scriptElJsx.getAttribute('ticketsTab'));
  }
  if (scriptElJsx.getAttribute('countryCharterId')) {
    script.setAttribute('countryCharterId', scriptElJsx.getAttribute('countryCharterId'));
  }
  if (scriptElJsx.getAttribute('cityCharterId')) {
    script.setAttribute('cityCharterId', scriptElJsx.getAttribute('cityCharterId'));
  }
  if (scriptElJsx.getAttribute('hotelFilter')) {
    script.setAttribute('hotelFilter', scriptElJsx.getAttribute('hotelFilter'));
  }
  if (scriptElJsx.getAttribute('tableView')) {
    script.setAttribute('tableView', scriptElJsx.getAttribute('tableView'));
  }

  script.setAttribute('charset', 'utf-8');

  // Create element
  document.getElementsByTagName('head')[0].appendChild(script);
}
//load_script_fd_mod_v3('http://localhost/ittour_repo/classes/handlers/ittour_external_modules/ittour_modules/new_v3/fd_mod_v3/js/widget.js?token=');// DEBUG !!!
load_script_fd_mod_v3('https://www.ittour.com.ua/classes/handlers/ittour_external_modules/ittour_modules/new_v3/fd_mod_v3/js/widget.js?token=');// WORK !!!

function load_css_file_mod_v3(filename) {
  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.id = 'cssCustomThemeModV3';
  css.type = 'text/css';
  css.href = filename;

  // Remove old
  var oldCss = document.getElementById('cssCustomThemeModV3');
  if( oldCss != null && oldCss != 'undefined' && typeof(oldCss) != 'undefined' && typeof(oldCss) != 'null') {
    oldCss.parentNode.removeChild(oldCss);
  }

  // Remove css from settings
  var allLinkCss = document.querySelectorAll('link[type="text/css"]');
  for(var i=0; i<allLinkCss.length; i++) {
    if (allLinkCss[i].href.indexOf('fd_mod_v3/css/theme_') + 1) {
      allLinkCss[i].parentNode.removeChild(allLinkCss[i]);
    }
  }

  agencyProperty = JSON.parse(window.ittour_module3_property);
  var opacity = agencyProperty.hasOwnProperty("opacity") ? agencyProperty.opacity : 1;

  // Check user set 'Зеленый' === 'main.css'
  if (css.href.indexOf('fd_mod_v3/css/main.css') + 1) {
    if(opacity != 1) apply_opacity(opacity);
    return;
  }

  // Load new css file, if user click to new theme(04ko)
  document.getElementsByTagName('head')[0].appendChild(css);
  if(opacity != 1) apply_opacity(opacity);
}
 
// Изменение прозрачности при интерактивном изменении темы модуля в кабинете
function apply_opacity(opacity) {
  setTimeout(function() {
    document.querySelector("#module_preview #itTourWidget .fd-b").style.cssText = "";
    var setColor = getComputedStyle(document.querySelector("#module_preview #itTourWidget .fd-b")).background;
      // Tab
      var backgroundTab = setColor.match(/\(\d*,\s\d*,\s\d*/);
      if(backgroundTab == null) return;
      backgroundTab = 'rgba' + backgroundTab[0] + ', ' + opacity + ')';
      var tabs = document.querySelectorAll('#module_preview #itTourWidget .fd-nav_item');
      tabs.forEach(function(item, i){
        item.addEventListener('click', function(){
          event.stopPropagation();
          tabs.forEach(function(tab, j){
            tab.style.cssText = "";
          })
          document.querySelector("#itTourWidget .fd-nav_item.active").style.cssText = 'background-color: ' + backgroundTab + ' !important';
        });
      });
      document.querySelector("#itTourWidget .fd-nav_item.active").style.cssText = 'background-color: ' + backgroundTab + ' !important';
	  //Высоту задаем в стилях, из-за данных строк появляются ошибки при скрытие одной из табов. Так же в превью с настроенной прозрачностью не применяются стили для body модуля
      // document.querySelector("#itTourWidget search-tours .fd-header").style.cssText = 'height: 31px !important';
      // document.querySelector("#itTourWidget guided-search .fd-header").style.cssText = 'height: 31px !important';
      // document.querySelector("#itTourWidget tickets-search .fd-header").style.cssText = 'height: 31px !important';

    //body
    var backgroundB = setColor.match(/\(\d*,\s\d*,\s\d*/);
    if(backgroundB == null) return;
    backgroundB = 'rgba' + backgroundB[0] + ', ' + opacity + ')';
    var bodies = document.querySelectorAll("#module_preview #itTourWidget .fd-b");
    bodies.forEach(function(body, k){
      body.style.cssText = 'background-color: ' + backgroundB + ' !important';
    })
  }, 100);
}

// Html
//// @todo: потом удалить


// Css
//// @todo: потом удалить


// Js
//// @todo: потом удалить