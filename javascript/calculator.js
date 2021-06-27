




var httpObject = null;
		//		var base_url="https://brses.com.np";




var base_url = "https://www.brses.com.np";


function resourceconverter(destn) {
    var ropani = document.getElementById('ropani').value;
    var anna = document.getElementById('anna').value;
    var paisa = document.getElementById('paisa').value;
    var daam = document.getElementById('daam').value;
    if (ropani == "") {
        ropani = "0";
    }
    if (anna == "") {
        anna = "0";
    }
    if (paisa == "") {
        paisa = "0";
    }
    if (daam == "") {
        daam = "0";
    }
    var source = ropani + "-" + anna + "-" + paisa + "-" + daam;
    params = "area=" + source;
    generalConverterAjax(destn, base_url + "/search/get_Squareft", params);

}

function resourcebackconverter() {
    var sqft, params;
    sqft = document.getElementById('sqvalue').value;
    params = "area=" + sqft;
    if (isNaN(sqft)) {

    } else {
        generalBackConverterAjax('', base_url + "/search/get_Ropani", params);
    }

}

function generalBackConverterAjax(id, url, params) {
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
                //		alert(str);
                var temp = str.split('-');
                document.getElementById('ropani').value = temp[0];
                document.getElementById('anna').value = temp[1];
                document.getElementById('paisa').value = temp[2];
                //							alert(temp[3]);
                document.getElementById('daam').value = temp[3];
            }
        }
        httpObjects.send(params);
    }
}




//from search






function generalConverterAjax(id, url, _14) {
    var _15 = null;
    _15 = getHTTPObject();
    if (_15 != null) {
        _15.open("POST", url, true);
        _15.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        _15.setRequestHeader("Content-length", _14.length);
        _15.setRequestHeader("Connection", "close");
        _15.onreadystatechange = function() {
            if (_15.readyState == 4) {
                var str = _15.responseText;
                if (id == "SqrFt") {
                    document.getElementById(id).innerHTML = " " + str + " Sq. Ft.";
                } else {
                    document.getElementById(id).value = str;
                }
            }
        };
        _15.send(_14);
    }
};




function converter(_16) {
    var _17 = document.getElementById("ropani").value;
    var _18 = document.getElementById("anna").value;
    var _19 = document.getElementById("paisa").value;
    var _1a = document.getElementById("daam").value;
    if (_17 == "") {
        _17 = "0";
    }
    if (_18 == "") {
        _18 = "0";
    }
    if (_19 == "") {
        _19 = "0";
    }
    if (_1a == "") {
        _1a = "0";
    }
    var _1b = _17 + "-" + _18 + "-" + _19 + "-" + _1a;
    params = "area=" + _1b;
    if (_16 == "SqrFt") {} else {
        document.getElementById("mypopup").style.display = "none";
    }
    generalConverterAjax(_16, base_url + "/search/get_Squareft", params);
};




function showdeadcenterdiv(_6, _7, _8) {
    var _9, _a;
    if (self.pageYoffset) {
        _9 = self.pageXoffset;
        _a = self.pageYoffset;
    } else {
        if (document.documentElement && document.documentElement.scrollTop) {
            _9 = document.documentElement.scrollLeft;
            _a = document.documentElement.scrollTop;
        } else {
            if (document.body) {
                _9 = document.body.scrollLeft;
                _a = document.body.scrollTop;
            }
        }
    }
    var _b, _c;
    if (self.innerHeight) {
        _b = self.innerWidth;
        _c = self.innerHeight;
    } else {
        if (document.documentElement && document.documentElement.clientHeight) {
            _b = document.documentElement.clientWidth;
            _c = document.documentElement.clientHeight;
        } else {
            if (document.body) {
                _b = document.body.clientWidth;
                _c = document.body.clientHeight;
            }
        }
    }
    var _d = _9 + (_b - _6) / 2;
    var _e = _a + (_c - _7) / 2;
    var o = document.getElementById(_8);
    var r = o.style;
    r.top = _e + "px";
    r.left = _d + "px";
    r.display = "block";
};







function showdeadcenterdiv(_6, _7, _8) {
    var _9, _a;
    if (self.pageYoffset) {
        _9 = self.pageXoffset;
        _a = self.pageYoffset;
    } else {
        if (document.documentElement && document.documentElement.scrollTop) {
            _9 = document.documentElement.scrollLeft;
            _a = document.documentElement.scrollTop;
        } else {
            if (document.body) {
                _9 = document.body.scrollLeft;
                _a = document.body.scrollTop;
            }
        }
    }
    var _b, _c;
    if (self.innerHeight) {
        _b = self.innerWidth;
        _c = self.innerHeight;
    } else {
        if (document.documentElement && document.documentElement.clientHeight) {
            _b = document.documentElement.clientWidth;
            _c = document.documentElement.clientHeight;
        } else {
            if (document.body) {
                _b = document.body.clientWidth;
                _c = document.body.clientHeight;
            }
        }
    }
    var _d = _9 + (_b - _6) / 2;
    var _e = _a + (_c - _7) / 2;
    var o = document.getElementById(_8);
    var r = o.style;
    r.top = _e + "px";
    r.left = _d + "px";
    r.display = "block";
};

	
	
