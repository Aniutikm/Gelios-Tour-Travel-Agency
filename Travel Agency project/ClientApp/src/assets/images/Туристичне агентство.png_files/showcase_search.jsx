
var file_version = 20230120145308;
itt_hottour_name = 'showcase_hotprice_v3_';
check_color = 'https://www.ittour.com.ua/classes/handlers/ittour_external_modules/ittour_modules/hottour_v3/css/hottour_themes/yellow.css';
windowHT = window;
    if(document.getElementById('showcase_hotprice_v3_showcase_module') != null && typeof(document.getElementById('showcase_hotprice_v3_showcase_module')) != 'undefined') {
        document.getElementById('showcase_hotprice_v3_showcase_module').style.display = 'none';
     //}

  function showcase_hotprice_v3_showcase_load_stylesheet(filename, id) {
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.type = 'text/css';
    css.href = filename;
    if (id){
      css.id= id;
    }
    document.getElementsByTagName('head')[0].appendChild(css);
  }

  var script;
  var is_showcase_hotprice_v3_showcase_script_load = new Array();
  var itt_hide_cursor_delay = 700;
  var itt_timeout_nicescroll = null;
  function showcase_hotprice_v3_showcase_load_script(filename, after_load, id) {
    if(typeof(is_script_load) != 'undefined' && typeof(is_script_load[filename]) != 'undefined') {
      is_showcase_hotprice_v3_showcase_script_load[filename] = true;
      showcase_hotprice_v3_showcase_load_js(after_load);
    } else {

      is_showcase_hotprice_v3_showcase_script_load[filename] = false;
      script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = filename;
      if (id){
        script.id= id;
      }
      document.getElementsByTagName('head')[0].appendChild(script);

      script.onreadystatechange = function () {
        if (this.readyState == 'loaded' || this.readyState == 'complete') {
          if(is_showcase_hotprice_v3_showcase_script_load[filename] == false) {
            is_showcase_hotprice_v3_showcase_script_load[filename] = true;
            showcase_hotprice_v3_showcase_load_js(after_load);
          }
        }
      }

      script.onload = function() {
        if(is_showcase_hotprice_v3_showcase_script_load[filename] == false) {
          is_showcase_hotprice_v3_showcase_script_load[filename] = true;
          showcase_hotprice_v3_showcase_load_js(after_load);
        }
      }
    }
  }

  function showcase_hotprice_v3_showcase_load_js(type) {
  
  if(type == 'jquery')
    showcase_hotprice_v3_showcase_load_script("https://www.ittour.com.ua/classes/handlers/ittour_external_modules/ittour_modules/hottour_v3/js/showcase_hottour.min.js?i=" + file_version, 'prepare_showcase_form', 'hotprice_v3_script');

           if(type == 'prepare_showcase_form'){

     
      setTimeout(function(){
      jqHT('#showcase_hotprice_v3_showcase_module').data('showcase_hotprice_v3_showcase_options', {
                    'modules_url'          : 'https://www.ittour.com.ua/classes/handlers/ittour_external_modules/ittour_modules/'
                                          , 'modules_action'       : 'https://www.ittour.com.ua/tour_search.php?callback=?&module_type=showcase&id=D3647G5125O89823512693408&ver=&type=110&kind=50'
                                          , 'modules_param_action' : 'https://www.ittour.com.ua/search_param.php?callback=?&module_type=showcase&id=D3647G5125O89823512693408&ver=&type=110&kind=50'
                                          , 'modules_action_full'  : 'https://www.ittour.com.ua/tour_search.php?id=D3647G5125O89823512693408&type=110&num=1'
                                          , 'modules_api_action'   : 'https://api.ittour.com.ua/'
                                          , 'last_params'          : 'id=D3647G5125O89823512693408&type=110&num=1'
                                          , 'modules_id'           : 'D3647G5125O89823512693408'
                                          , 'modules_popup_type'   : 'div'// or 'window'
                                          , 'module_container'     : '#showcase_hotprice_v3_showcase_module'
                                          , 'module_name'          : 'showcase_hotprice_v3_'
                                          , 'add_tour_type'        : 'add'
                                          , 'module_type'          : ''
                                          , 'items_per_page'       : '16'
                                          , 'show_items_per_page'  : '16'
                                          , 'showcase_type'        : '110'
                                          , 'res_type'             : '65'
                                          , 'width_class'          : '55'
                                          , 'module_paysystem'     : 'liqpay'
                                          , 'paysystem_client_pay' : '0'
                                          , 'paysystem_commission' : ''
      });

    
       itt_hottour_prepare_showcase_form();
       document.getElementById('showcase_hotprice_v3_showcase_module').style.display = 'block';
    }, 100);

   
      


      
          
          }
  }
  function showcase_hotprice_v3_showcase_start_js(no_confloct) {
    jQuery = no_confloct;
    showcase_hotprice_v3_showcase_load_js('prepare_showcase_form');
  }
  function showcase_hotprice_v3_showcase_load_css() {
      showcase_hotprice_v3_showcase_load_stylesheet("https://www.ittour.com.ua/classes/handlers/ittour_external_modules/ittour_modules/hottour_v3/css/showcase_hottour_flat.min.css", 'hotprice_v3_styles');
     showcase_hotprice_v3_showcase_load_stylesheet("https://www.ittour.com.ua/classes/handlers/ittour_external_modules/ittour_modules/hottour_v3/css/hottour_themes/yellow.css", 'showcase_hotprice_v3_theme') ;          showcase_hotprice_v3_showcase_load_js('jquery');
      }

  function showcase_hotprice_v3_showcase_addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
      window.onload = func;
    } else {
      window.onload = function() {
        if (oldonload) {
          oldonload();
        }
        func();
      }
    }
  }

  function itt_showcase_hotprice_v3_showcase_is_bot() {
    var agent = navigator.userAgent;
    agent = agent.toLowerCase();

    if(agent.indexOf('google') != -1 || agent.indexOf('googlebot') != -1) {
      return 'google';
    }
    if(agent.indexOf('yandex') != -1) {
      return 'yandex';
    }
    if(agent.indexOf('stackrambler') != -1) {
      return 'rambler';
    }
    if(agent.indexOf('yahoo') != -1) {
      return 'yahoo';
    }
    if(agent.indexOf('msnbot') != -1) {
      return 'msnbot';
    }
    return false;
  }

  if(!itt_showcase_hotprice_v3_showcase_is_bot()) {
    showcase_hotprice_v3_showcase_addLoadEvent(showcase_hotprice_v3_showcase_load_css);
  }
  
var showcase_hotprice_v3_showcase_module = '';
showcase_hotprice_v3_showcase_module += '<div id="ittHS">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_name"></div>';
showcase_hotprice_v3_showcase_module += '<div class="ittHS_wrap itt_bg_color">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_header">';
showcase_hotprice_v3_showcase_module += '<div class="itt_head_hsitem itt_hscountry_selected itt_hs_field_hide">';
showcase_hotprice_v3_showcase_module += '<a href="javascript:void(0);" class="hsitem" title="Куди">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_head_icons">';
showcase_hotprice_v3_showcase_module += '<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">';
showcase_hotprice_v3_showcase_module += '<path d="M40,17  c0,13.604-15,31-15,31S10,30.928,10,17c0-8.285,6.715-15,15-15C33.284,2,40,8.715,40,17z" fill="none" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>';
showcase_hotprice_v3_showcase_module += '<circle cx="25" cy="18" fill="none" r="6" stroke-width="2"/>';
showcase_hotprice_v3_showcase_module += '</svg>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_head_text" id="itt_country_header" rel="0">Всі країни</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_head_text_mobile">Куди</div>';
showcase_hotprice_v3_showcase_module += '</a>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs__selected_info_pp">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_select-all"><a href="javascript:void(0);" id="cnt_0" rel="0"  class="active">Всі країни</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_select_wrap itt_hs_custom_scroll">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_item">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_c_stringpop">Популярні</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_list">';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);" id="cnt_318" rel="318"  >Туреччина</a></div>';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);" id="cnt_338" rel="338"  >Єгипет</a></div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_item">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_c_string">Інші напрямки</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_item">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_list">';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);"  id="cnt_23" rel="23"  >Албанія</a></div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_item">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_list">';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);"  id="cnt_39" rel="39"  >Болгарія</a></div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_item">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_list">';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);"  id="cnt_372" rel="372"  >Греція</a></div>';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);"  id="cnt_60" rel="60"  >Грузія</a></div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_item">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_list">';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);"  id="cnt_321" rel="321"  >Домінікана</a></div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_item">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_list">';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);"  id="cnt_75" rel="75"  >Ізраїль</a></div>';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);"  id="cnt_330" rel="330"  >Індонезія</a></div>';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);"  id="cnt_320" rel="320"  >Іспанія</a></div>';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);"  id="cnt_76" rel="76"  >Італія</a></div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_item">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_list">';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);"  id="cnt_376" rel="376"  >Кіпр</a></div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_item">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_list">';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);"  id="cnt_90" rel="90"  >Маврикій</a></div>';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);"  id="cnt_324" rel="324"  >Мальдіви</a></div>';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);"  id="cnt_91" rel="91"  >Мексика</a></div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_item">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_list">';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);"  id="cnt_16" rel="16"  >ОАЕ</a></div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_item">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_list">';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);"  id="cnt_110" rel="110"  >Португалія</a></div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_item">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_list">';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);"  id="cnt_332" rel="332"  >Таїланд</a></div>';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);"  id="cnt_1082" rel="1082"  >Танзанія</a></div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_item">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_list">';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);"  id="cnt_6" rel="6"  >Україна</a></div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_item">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_list">';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);"  id="cnt_442" rel="442"  >Хорватія</a></div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_item">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_list">';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);"  id="cnt_434" rel="434"  >Чорногорія</a></div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_item">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_country_list">';
showcase_hotprice_v3_showcase_module += '<div><a href="javascript:void(0);"  id="cnt_334" rel="334"  >Шрі-Ланка</a></div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_head_hsitem itt_hshotel_wrap itt_hs_field_hide">';
showcase_hotprice_v3_showcase_module += '<a href="javascript:void(0);" class="hsitem">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_head_icons" title="Класс отеля">';
showcase_hotprice_v3_showcase_module += '<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="M20 48h8v-8h-8v8zm32-8h8v-8h-8v8zm16 0h8v-8h-8v8zm16 0h8v-8h-8v8zM52 24h8v-8h-8v8zm16 0h8v-8h-8v8zm16 0h8v-8h-8v8zM52 72h8v-8h-8v8zm16 0h8v-8h-8v8zm16 0h8v-8h-8v8zM52 88h8v-8h-8v8zm32 0h8v-8h-8v8zm-32 16h8v-8h-8v8zm32 0h8v-8h-8v8zm24-8h8v-8h-8v8zm0-24v8h8v-8h-8zm0 40h8v-8h-8v8zM52 56h8v-8h-8v8zm16 0h8v-8h-8v8zm16 0h8v-8h-8v8zm-64 8h8v-8h-8v8zm0 16h8v-8h-8v8zm0 16h8v-8h-8v8zm0 16h8v-8h-8v8zm48-24h8v-8h-8v8z"/><path clip-rule="evenodd" d="M124 120c0 4.422-3.578 8-8 8H12c-4.422 0-8-3.578-8-8V32c0-4.422 3.578-8 8-8h24V8c0-4.422 3.578-8 8-8h56c4.422 0 8 3.578 8 8v48h8c4.422 0 8 3.578 8 8v56zM36 32H12v88h24V32zm64-24H44v112h24V96h8v24h24V8zm16 56h-8v56h8V64z"/>';
showcase_hotprice_v3_showcase_module += '</svg>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_head_text itt_hotel_rating">4 і більше</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_head_text_mobile">Готель</div>';
showcase_hotprice_v3_showcase_module += '</a>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs__selected_info_pp">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_star_mobile_wrap itt_hs_star_selected">';
showcase_hotprice_v3_showcase_module += '<div>';
showcase_hotprice_v3_showcase_module += '<a href="javascript:void(0);"  class="selected" data-stars="1" title="1 і більше" id="hotel_rating_1" rel="1">';
showcase_hotprice_v3_showcase_module += '<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">';
showcase_hotprice_v3_showcase_module += '<path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5T1385 1619q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T365 1569q0-6 2-20l86-500L89 695q-25-27-25-48 0-37 56-46l502-73L847 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"/>';
showcase_hotprice_v3_showcase_module += '</svg>1 і більше                   </a>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div>';
showcase_hotprice_v3_showcase_module += '<a href="javascript:void(0);"   class="selected"  data-stars="2" title="2 і більше"  id="hotel_rating_7" rel="7">';
showcase_hotprice_v3_showcase_module += '<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">';
showcase_hotprice_v3_showcase_module += '<path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5T1385 1619q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T365 1569q0-6 2-20l86-500L89 695q-25-27-25-48 0-37 56-46l502-73L847 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"/>';
showcase_hotprice_v3_showcase_module += '</svg>2 і більше                   </a>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div>';
showcase_hotprice_v3_showcase_module += '<a href="javascript:void(0);"   class="selected"  data-stars="3" title="3 і більше"  id="hotel_rating_3" rel="3">';
showcase_hotprice_v3_showcase_module += '<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">';
showcase_hotprice_v3_showcase_module += '<path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5T1385 1619q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T365 1569q0-6 2-20l86-500L89 695q-25-27-25-48 0-37 56-46l502-73L847 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"/>';
showcase_hotprice_v3_showcase_module += '</svg>3 і більше                   </a>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div>';
showcase_hotprice_v3_showcase_module += '<a href="javascript:void(0);"   class="selected"  data-stars="4" title="4 і більше"  id="hotel_rating_4" rel="4">';
showcase_hotprice_v3_showcase_module += '<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">';
showcase_hotprice_v3_showcase_module += '<path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5T1385 1619q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T365 1569q0-6 2-20l86-500L89 695q-25-27-25-48 0-37 56-46l502-73L847 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"/>';
showcase_hotprice_v3_showcase_module += '</svg>4 і більше                   </a>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div>';
showcase_hotprice_v3_showcase_module += '<a href="javascript:void(0);"   data-stars="5" title="5 зірок"  id="hotel_rating_78" rel="78">';
showcase_hotprice_v3_showcase_module += '<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">';
showcase_hotprice_v3_showcase_module += '<path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5T1385 1619q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T365 1569q0-6 2-20l86-500L89 695q-25-27-25-48 0-37 56-46l502-73L847 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"/>';
showcase_hotprice_v3_showcase_module += '</svg>5 зірок                   </a>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_head_text itt_hs_desctop_star itt_hs_star_selected">';
showcase_hotprice_v3_showcase_module += '<a href="javascript:void(0);" id="itt_star_change" class="selected" rel="4"></a>';
showcase_hotprice_v3_showcase_module += '<a href="javascript:void(0);" rel="78"></a>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_head_hsitem itt_hs_city_selected itt_hs_field_hide">';
showcase_hotprice_v3_showcase_module += '<a href="javascript:void(0);" class="hsitem">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_head_icons" title="Виліт">';
showcase_hotprice_v3_showcase_module += '<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">';
showcase_hotprice_v3_showcase_module += '<path d="M438.8 320.6c-3.6-3.1-147.2-107.2-147.2-107.2l-.5-.5c-5.5-5.6-5.2-10.4-5.6-18.8 0 0-.9-69-2.2-92S270 64 256 64s-25.9 15-27.2 38-2.2 92-2.2 92c-.4 8.4-.1 13.2-5.6 18.8l-.5.5S77 317.4 73.3 320.5s-9.2 7.8-9.2 18.2c0 12.2 3.6 13.7 10.6 11.6 0 0 140.2-39.5 145.4-40.8s7.9.6 8.3 7.5.8 46.4.9 51-.6 4.7-2.9 7.4l-32 40.8c-1.7 2-2.7 4.5-2.7 7.3v12.4s2.8 7.3 8.2 4.9 32.6-17.4 32.6-17.4c.7-.3 4.6-1.9 6.4-1.9 4.2 0 8-.1 8.8 6.2 1.3 11.4 4.9 20.3 8.5 20.3 3.6 0 7.2-8.9 8.5-20.3.7-6.3 4.6-6.2 8.8-6.2 1.8 0 5.7 1.6 6.4 1.9 0 0 27.2 15 32.6 17.4s8.2 1.4 8.2-4.9v-12.4c0-2.8-1-5.4-2.7-7.3l-32-40.8c-2.3-2.7-2.9-2.9-2.9-7.4s.5-44.1.9-51 3.1-8.8 8.3-7.5 145.4 40.8 145.4 40.8c7.1 2.1 10.6.6 10.6-11.6-.3-10.3-5.8-15-9.5-18.1z"/>';
showcase_hotprice_v3_showcase_module += '</svg>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_head_text" id="itt_city_header" rel="0">Всі міста</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_head_text_mobile"> Виліт</div>';
showcase_hotprice_v3_showcase_module += '</a>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs__selected_info_pp" id="itt_ht_city_list" >';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_custom_scroll">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);" class="active" country_id="0" id="cit_0" rel="0">Всі міста</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="535" id="cit_535" rel="535">Барселона</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="73754" id="cit_73754" rel="73754">Берлін</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="102" id="cit_102" rel="102">Будапешт</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="100" id="cit_100" rel="100">Бухарест</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="840" id="cit_840" rel="840">Варшава</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="748" id="cit_748" rel="748">Відень</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="752" id="cit_752" rel="752">Вільнюс</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="2352" id="cit_2352" rel="2352">Вроцлав</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="2394" id="cit_2394" rel="2394">Гданськ</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="23525" id="cit_23525" rel="23525">Жешув</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="784" id="cit_784" rel="784">Житомир</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="3802" id="cit_3802" rel="3802">Катовіце</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="2014" id="cit_2014" rel="2014">Київ</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="143" id="cit_143" rel="143">Кишинів</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="2144" id="cit_2144" rel="2144">Краків</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="1745" id="cit_1745" rel="1745">Львів</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="2320" id="cit_2320" rel="2320">Неаполь</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="449" id="cit_449" rel="449">Одеса</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="1609" id="cit_1609" rel="1609">Прага</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="578" id="cit_578" rel="578">Рига</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="658" id="cit_658" rel="658">Софія</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="1832" id="cit_1832" rel="1832">Стамбул</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="678" id="cit_678" rel="678">Таллінн</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="73758" id="cit_73758" rel="73758">Франкфурт</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="305" id="cit_305" rel="305">Хмельницький</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);"  country_id="1782" id="cit_1782" rel="1782">Чернівці</a></div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_head_hsitem itt_night_selected itt_hs_field_hide">';
showcase_hotprice_v3_showcase_module += '<a href="javascript:void(0);" class="hsitem">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_head_icons" title="Період (ночей)">';
showcase_hotprice_v3_showcase_module += '<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">';
showcase_hotprice_v3_showcase_module += '<path d="M17.734 9.922c-4.655 2.546-7.812 7.476-7.812 13.156 0 8.284 6.716 15 15 15 5.68 0 10.61-3.157 13.156-7.812-2.125 1.154-4.567 1.812-7.156 1.812-8.284 0-15-6.716-15-15 0-2.59.658-5.03 1.812-7.156z"/>';
showcase_hotprice_v3_showcase_module += '</svg>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_head_text" id="itt_duration_header" rel="7+8" ><span>7 - 8</span> ночей</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_head_text_mobile">Ночей</div>';
showcase_hotprice_v3_showcase_module += '</a>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs__selected_info_pp itt_nights">';
showcase_hotprice_v3_showcase_module += '<div class="fd-nights">';
showcase_hotprice_v3_showcase_module += '<div class="fd-text">Ночей до:</div>';
showcase_hotprice_v3_showcase_module += '<div class="fd-nights_b">';
showcase_hotprice_v3_showcase_module += '<div class="fd-nights_item itt_hhs_text_wrap"><a href="javascript:void(0)">1</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="fd-nights_item itt_hhs_text_wrap"><a href="javascript:void(0)">2</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="fd-nights_item itt_hhs_text_wrap"><a href="javascript:void(0)">3</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="fd-nights_item itt_hhs_text_wrap"><a href="javascript:void(0)">4</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="fd-nights_item itt_hhs_text_wrap"><a href="javascript:void(0)">5</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="fd-nights_item itt_hhs_text_wrap"><a href="javascript:void(0)">6</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="fd-nights_item itt_hhs_text_wrap"><a href="javascript:void(0)">7</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="fd-nights_item itt_hhs_text_wrap"><a href="javascript:void(0)">8</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="fd-nights_item itt_hhs_text_wrap"><a href="javascript:void(0)">9</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="fd-nights_item itt_hhs_text_wrap"><a href="javascript:void(0)">10</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="fd-nights_item itt_hhs_text_wrap"><a href="javascript:void(0)">11</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="fd-nights_item itt_hhs_text_wrap"><a href="javascript:void(0)">12</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="fd-nights_item itt_hhs_text_wrap"><a href="javascript:void(0)">13</a></div>';
showcase_hotprice_v3_showcase_module += '<div class="fd-nights_item itt_hhs_text_wrap"><a href="javascript:void(0)">14</a></div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_head_hsitem itt_hsfood_selected itt_hs_field_hide">';
showcase_hotprice_v3_showcase_module += '<a href="javascript:void(0);" class="hsitem">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_head_icons" title="Харчування">';
showcase_hotprice_v3_showcase_module += '<svg viewBox="0 0.009 131.732 131.732" xmlns="http://www.w3.org/2000/svg">';
showcase_hotprice_v3_showcase_module += '<path d="M55.77 82.3H36.078v9.86h1.693v49.582h16.434V92.156h1.566V82.3zm3.804-36.83c0-.047-.005-.085-.005-.133h.004V2.735c0-1.505-1.22-2.726-2.724-2.726-1.503 0-2.724 1.22-2.724 2.725v33.249c-.25 1.243-1.35 2.185-2.672 2.185-1.504 0-2.724-1.22-2.724-2.724V2.734C48.727 1.23 47.494.008 45.974.008s-2.752 1.22-2.752 2.726V35.44c0 1.503-1.22 2.724-2.725 2.724-1.502 0-2.723-1.218-2.723-2.724V2.75h-.01c0-.037.008-.07.008-.108 0-1.456-1.223-2.634-2.73-2.634-1.504 0-2.725 1.178-2.725 2.632 0 .038.004.07.006.11h-.006v42.584h.004c0 .05-.003.09-.003.137 0 10.658 3.54 19.77 8.547 23.52v12.852h10.12V69.02c5.03-3.73 8.59-12.86 8.59-23.55m38.158 55.386V.01C88.282 2.78 81.38 11.523 81.38 21.882l.003.064h-.003v78.91h-2.262v10.904h2.262v29.98h16.352v-29.983h2.125v-10.9h-2.125z"/>';
showcase_hotprice_v3_showcase_module += '</svg>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_head_text"  id="itt_food_header" rel="1956 388 496 498 512 560">Будь-якe</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_head_text_mobile">Харчування</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_head_text_mobile" id="itt_hs_head_text_mobile_ija">Їжа</div>';
showcase_hotprice_v3_showcase_module += '</a>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs__selected_info_pp">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hhs_text_wrap"><a href="javascript:void(0);" data-meal="Будь-який" rel="496 388 498 512 560 1956" class="active" >Будь-який</a></div><div class="itt_hhs_text_wrap"><a href="javascript:void(0);" data-meal="Ультра все включено" rel="560"  >Ультра все включено</a></div><div class="itt_hhs_text_wrap"><a href="javascript:void(0);" data-meal="Все включено" rel="512 560"  >Все включено і краще</a></div><div class="itt_hhs_text_wrap"><a href="javascript:void(0);" data-meal="Повний пансіон" rel="498 512 560"  >Повний пансіон і краще</a></div><div class="itt_hhs_text_wrap"><a href="javascript:void(0);" data-meal="Сніданок і вечеря" rel="496 498 512 560"  >Сніданок і вечеря і краще</a></div><div class="itt_hhs_text_wrap"><a href="javascript:void(0);" data-meal="Сніданок" rel="496 388 498 512 560"  >Сніданок і краще</a></div><div class="itt_hhs_text_wrap"><a href="javascript:void(0);" data-meal="Без харчування" rel="496 388 498 512 1956"  >Без харчування і краще</a></div>          </div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_main_wrap itt_border_color" style="height:545px;" >';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_page_loader" hidden>';
showcase_hotprice_v3_showcase_module += '<div class="preloader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_errors_text"  hidden>';
showcase_hotprice_v3_showcase_module += '<div>На жаль, за даними параметрами турів не знайдено</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_content_wrap_abs">';
showcase_hotprice_v3_showcase_module += '<div class="itt_hs_content_wrap itt_hs_custom_scroll" style="height:545px;" >';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
showcase_hotprice_v3_showcase_module += '</div>';
document.getElementById('showcase_hotprice_v3_showcase_module').innerHTML = showcase_hotprice_v3_showcase_module;
var itt_hottour_popup ;
var itt_hottour_popup_element = document.createElement('div');
 itt_hottour_popup_element.id  = 'ittHSinfo';
 itt_hottour_popup = '<div class="itt_hi_content itt_hs_custom_scroll">';
 itt_hottour_popup += '</div>'; 
 itt_hottour_popup_element.innerHTML = itt_hottour_popup;
document.body.appendChild( itt_hottour_popup_element );
} //if(document.getElementById('showcase_hotprice_v3_showcase_module') != null && typeof(document.getElementById('showcase_hotprice_v3_showcase_module')) != 'undefined') 
 