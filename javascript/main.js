		var httpObject = null;
		//		var base_url="http://localhost/housingnepal.com/";
		var base_url = "https://www.housingnepal.com";

		function getHTTPObject() {
		    if (window.ActiveXObject) {
		        return new ActiveXObject("Microsoft.XMLHTTP");
		    } else if (window.XMLHttpRequest) {
		        return new XMLHttpRequest();
		    } else {
		        alert("Your browser does not support AJAX.");
		        return null;
		    }
		}

		function generalajax(id, url, params) {
		    document.getElementById(id).innerHTML = "<img src='" + base_url + "/images/loading.gif' alt='Loading' />";
		    var httpObjects = null;
		    httpObjects = getHTTPObject();
		    if (httpObjects != null) {
		        httpObjects.open('POST', url, true);
		        httpObjects.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		        httpObjects.setRequestHeader("Content-length", params.length);
		        httpObjects.setRequestHeader("Connection", "close");
		        httpObjects.onreadystatechange = function() {
		            if (httpObjects.readyState == 4) {
		                var str = httpObjects.responseText;
		                //	alert(str);
		                document.getElementById(id).innerHTML = "";
		                document.getElementById(id).innerHTML = str;
		            }
		        }
		        httpObjects.send(params);
		    }
		}

		function validate_username() {
		    var old_username, new_username, confirm_username;
		    old_username = document.getElementById('o_uname').value;
		    new_username = document.getElementById('n_uname').value;
		    confirm_username = document.getElementById('c_uname').value;

		    if (old_username == '' || new_username == '' || confirm_username == '') {
		        alert('Please fill up the required fields');
		        return false;
		    } else if (new_username != confirm_username) {
		        alert('Please enter same new username and confirm username');
		        return false;
		    } else {
		        alert('Congratulations');
		    }

		}

		function validate_password() {
		    var oldpassword, newpassword, confirmpassword;
		    oldpassword = document.getElementById('old_pass').value;
		    newpassword = document.getElementById('new_pass').value;
		    confirmpassword = document.getElementById('confirm_pass').value;

		    if (oldpassword == '' || newpassword == '' || confirmpassword == '') {
		        alert('Please enter requried fields');
		        return false;
		    } else if (newpassword != confirmpassword) {
		        alert('enter valid password');
		        return false;
		    } else {
		        alert('Congratulations');
		        return true;
		    }
		}

		function emailvalidation(id) {
		    var oldemail, newemail, confirmemail;
		    oldemail = document.getElementById(id).value;


		    if (oldemail == "") {
		        alert("Please enter the required fields");
		        document.getElementById(id).focus();
		    } else if (emailCheck(oldemail) == false) {
		        alert('Please Enter Valid Email Address');
		        document.getElementById(id).focus();
		    }
		}

		function validate_createtable() {
		    var create_table, parameter;
		    create_table = document.getElementById('tablename').value;
		    if (create_table == '') {
		        alert('please enter required fields');
		        return false;
		    } else {
		        //		alert('add Table');
		        return true;
		    }
		}

		function validate_addfeilds() {
		    var select_table, field_name, field_type;
		    select_table = document.getElementById('selecttable').value;
		    field_name = document.getElementById('fieldname').value;
		    field_type = document.getElementById('fieldtype').value;
		    if (select_table == '0') {
		        alert('Please Select Table');
		        return false;
		    } else if (field_name == '') {
		        alert('Please Enter the Field Name');
		        return false;
		    } else if (field_type == '0') {
		        alert('Please Select Field Type');
		        return false;
		    } else {
		        //	alert('FIELDS ADDED');
		        return true;
		    }
		}

		function validate_primarykeyonclick() {
		    var select_table, select_field;
		    select_table = document.getElementById('selecttable').value;
		    select_field = document.getElementById('selectfield').value;
		    if (select_table == 'Null' || select_field == 'Null') {
		        alert('Please select the Fields');
		        return false;
		    } else if (select_table == 'Null') {
		        alert('Please select Table');
		        return false;
		    } else if (select_field == 'Null') {
		        alert('Please select Field');
		        return false;
		    } else {
		        return true;
		    }

		}

		function validate_droptable() {
		    var select_table;
		    select_table = document.getElementById('selecttable').value;
		    if (select_table == 'Null') {
		        alert('Please select the Feilds');
		        return false;
		    } else {
		        return true;
		    }
		}

		function checkSpotlight() {
		    if (document.getElementById('Type')) {
		        var type = document.getElementById('Type').value;
		        if (type == "Spotlight") {
		            document.getElementById('Page').disabled = "disabled";
		        } else {
		            document.getElementById('Page').disabled = "";
		        }
		    }
		}

		function display_fields() {
		    var table_name, params;
		    table_name = document.getElementById('selecttable').value;
		    params = "TName=" + table_name;
		    generalajax('downright', base_url + '/database_manager/load_fields', params);

		}

		function display_values() {
		    var tablename, parameter;
		    tablename = document.getElementById('selecttable').value;
		    parameter = "Tname=" + tablename + "&DivID=selectfield";;
		    //		alert(parameter);
		    generalajax('primary_table_fields', base_url + '/database_manager/load_table_fields', parameter);
		    generalajax('downright1', base_url + '/database_manager/display_primary_key', parameter);
		}

		function validate_foreignkeyonclick() {
		    var select_table, select_field, select_sourcetable;
		    select_table = document.getElementById('select_table').value;
		    select_field = document.getElementById('select_field').value;

		    select_sourcetable = document.getElementById('selectsource').value;
		    if (select_table == 'Null' && select_field == 'Null' && select_sourcttable == 'Null') {
		        alert('Please select the required fields');
		        return false;
		    } else if (select_table == 'Null') {
		        alert('Please select the table');
		        return false;
		    } else if (select_field == 'Null') {
		        alert('Please select the field:' + select_field);
		        return false;
		    } else {
		        //	alert('Foreign Key has been added');
		        return true;
		    }

		}






		function display_Fvalues() {
		    var tablename, parameter, source_table, para;
		    tablename = document.getElementById('select_table').value;
		    parameter = "Tname=" + tablename + "&DivID=select_field";
		    para = "uptable=" + tablename;
		    //		alert(parameter);
		    //alert(para);
		    generalajax('table_fields', base_url + '/database_manager/load_table_fields', parameter);
		    generalajax('sourcetable', base_url + '/database_manager/display_source_tables', para);
		    generalajax('downright', base_url + '/database_manager/display_foreign_key', parameter);
		}

		function load_records() {
		    var tablename;
		    tablename = document.getElementById('selecttable').value;
		    if (tablename == "") {

		    } else {
		        parameter = "Tname=" + tablename;
		        generalajax('down2', base_url + '/database_manager/get_records', parameter);
		    }
		}









		var timeout = 500;
		var closetimer = 0;
		var ddmenuitem = 0;

		// open hidden layer
		function mopen(id) {
		    // cancel close timer
		    mcancelclosetime();


		    // close old layer
		    if (ddmenuitem) ddmenuitem.style.visibility = 'hidden';

		    // get new layer and show it
		    ddmenuitem = document.getElementById(id);
		    ddmenuitem.style.visibility = 'visible';


		}
		// close showed layer
		function mclose() {
		    if (ddmenuitem) ddmenuitem.style.visibility = 'hidden';
		}

		// go close timer
		function mclosetime() {
		    closetimer = window.setTimeout(mclose, timeout);
		}

		// cancel close timer
		function mcancelclosetime() {
		    if (closetimer) {
		        window.clearTimeout(closetimer);
		        closetimer = null;
		    }
		}

		// close layer when click-out
		document.onclick = mclose;


		function validate_admin_plot_property() {
		    var property_headlines, price_min, price_max, district, land_min, land_max, linkto, pic, cid, cname, cno;
		    var flag = true;
		    property_headlines = document.getElementById('headline').value;
		    price_min = parseFloat(document.getElementById('price_min').value);
		    price_max = parseFloat(document.getElementById('price_max').value);
		    land_min = parseFloat(document.getElementById('plot_min').value);
		    land_max = parseFloat(document.getElementById('plot_max').value);
		    district = document.getElementById('districts').value;
		    linkto = document.getElementById('link_road').value;
		    var locations = document.getElementById('location').value;
		    pic = document.getElementById('plot_img').value;
		    cid = document.getElementById('contact_id').value;
		    cname = document.getElementById('contact_name').value;
		    cno = document.getElementById('contact_number').value;
		    // road_nature=document.getElementById('').value;
		    if (property_headlines == "" || locations == "" || district == "" || linkto == "" || cid == "" || cname == "" || cno == "") {
		        document.getElementById('MainError').innerHTML = "Enter All the Fields";
		        return false;
		    } else if (isNaN(price_max) || isNaN(price_min) || isNaN(land_min) || isNaN(land_max)) {
		        document.getElementById('MainError').innerHTML = "Enter Valid Numeric Values in Price and Area";
		        return false;
		    } else if ((price_max < price_min) || (land_max < land_min)) {
		        document.getElementById('MainError').innerHTML = "Minimum Value Larger Than Maximum Value";
		        return false;
		    } else {
		        return true;
		    }


		}

		function resettext(id) {
		    document.getElementById(id).value = "";
		}

		function updatefinancialsearch() {
		    var type = document.getElementById('producttype').value;
		    document.getElementById('financialsearchhome').action = base_url + "/financial_services/" + type;
		    if (type == "deposit_products") {
		        params = "";

		        generalajax('productcategory', base_url + "/financial_services/get_deposit_category", params);
		        document.getElementById('interestlist').innerHTML = '<select id="InterestRange" name="InterestRange" class="global-search-option3"><option value="0_0" selected>-- Select All</option><option value="1_3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;2.99%</option><option value="3_6" >3% - 5.99%</option><option value="6_9" >6% - 8.99%</option><option value="9_12" >9% - 11.99%</option><option value="12_16" >12% - 15.99%</option><option value="16_20" >16% - 20%</option></select>';
		    } else if (type == "loan_and_mortgages") {
		        params = "";
		        generalajax('productcategory', base_url + "/financial_services/get_loan_category", params);
		        document.getElementById('interestlist').innerHTML = '<select id="InterestRange" name="InterestRange" class="global-search-option3"><option value="0_0" selected>-- Select All</option><option value="1_5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;4.99%</option><option value="5_8" >3% - 7.99%</option><option value="8_12" >8% - 11.99%</option><option value="12_14" >12% - 13.99%</option><option value="14_20" >14% - 19.99%</option><option value="20_0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20%&gt;</option></select>';
		    }
		}

		function clear_image(id) {
		    document.getElementById(id).className = "";
		};

		function dim_image(id) {
		    document.getElementById(id).className = "dim-image";
		};

		function clear_image_home(id) {
		    document.getElementById(id).className = "dim-image";
		};

		function dim_image_home(id) {
		    document.getElementById(id).className = "";
		};

		function initialize_gis(longtitude, latitude, title, address) {
		    var map = new GMap2(document.getElementById("map_canvas"));
		    var mapControl = new GMapTypeControl();
		    if (longtitude != 0 && latitude != 0) {
		        var center = new GLatLng(longtitude, latitude);
		        map.setCenter(center, 15);
		        map.addControl(mapControl);
		        map.addControl(new GLargeMapControl());
		        map.enableScrollWheelZoom();
		        var summary = "<h2 style=\'margin-bottom:0\'>" + title + "</h2><p style=\'width: 200px;\'>" + address + "</p>";
		        marker = new GMarker(center);
		        map.addOverlay(marker);
		        marker.openInfoWindow(summary);
		    } else {
		        var geoCoder = new GClientGeocoder();
		        geoCoder.getLatLng(address,
		            function(point) {
		                if (!point) {
		                    center = new GLatLng(27.71666141409454, 85.31776428222656);
		                    map.setCenter(center, 10);
		                } else {

		                    map.setCenter(point, 12);
		                    map.addControl(mapControl);
		                    map.addControl(new GLargeMapControl());
		                    map.enableScrollWheelZoom();
		                    marker = new GMarker(point);
		                    var summary = "<h1 style=\'margin-bottom:0\'>" + title + "</h1><p style=\'width: 200px;\'>" + address + "</p>";
		                    map.addOverlay(marker);
		                    marker.openInfoWindow(summary);
		                }
		            }
		        );
		    }
		}