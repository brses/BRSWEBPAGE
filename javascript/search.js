var base_url = "https://www.housingnepal.com";
var national = "";
var international = "";

function setContents(_1, id) {
    document.getElementById("newscontents").innerHTML = "<img src='" + base_url + "/images/loading.gif' alt='Loading' />";
    if (national == "") {
        var _2;
        _2 = null;
        _2 = getHTTPObject();
        var _3;
        _3 = "type=" + _1;
        if (_2 != null) {
            _2.open("POST", base_url + "/news/setContent", true);
            _2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            _2.setRequestHeader("Content-length", _3.length);
            _2.setRequestHeader("Connection", "close");
            _2.onreadystatechange = function() {
                if (_2.readyState == 4) {
                    var _4 = _2.responseText;
                    var _5 = new Array();
                    _5 = _4.split("~");
                    document.getElementById("newscontents").innerHTML = _5[id - 1];
                    national = _5[0];
                    international = _5[1];
                    document.getElementById("tab" + id).className = "tabactive";
                    document.getElementById("tab" + id).style.outline = "none";
                    document.getElementById("tab" + id).blur();
                    var j = 1;
                    while (j < id) {
                        document.getElementById("tab" + j).className = "tabdead";
                        j = j + 1;
                    }
                    j = id + 1;
                    var el;
                    while (el = document.getElementById("tab" + j)) {
                        el.className = "tabdead";
                        j = j + 1;
                    }
                }
            };
            _2.send(_3);
        }
    } else {
        switch (_1) {
            case "National":
                document.getElementById("newscontents").innerHTML = national;
                break;
            case "International":
                document.getElementById("newscontents").innerHTML = international;
                break;
        }
        document.getElementById("tab" + id).className = "tabactive";
        document.getElementById("tab" + id).style.outline = "none";
        document.getElementById("tab" + id).blur();
        var j = 1;
        while (j < id) {
            document.getElementById("tab" + j).className = "tabdead";
            j = j + 1;
        }
        j = id + 1;
        var el;
        while (el = document.getElementById("tab" + j)) {
            el.className = "tabdead";
            j = j + 1;
        }
    }
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

function generalDistrictAjax(id, _f, _10) {
    document.getElementById(id).innerHTML = "<img src='" + base_url + "/images/loading.gif' alt='Loading' />";
    var _11 = null;
    _11 = getHTTPObject();
    if (_11 != null) {
        _11.open("POST", _f, true);
        _11.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        _11.setRequestHeader("Content-length", _10.length);
        _11.setRequestHeader("Connection", "close");
        _11.onreadystatechange = function() {
            if (_11.readyState == 4) {
                var str = _11.responseText;
                document.getElementById(id).innerHTML = str;
            }
        };
        _11.send(_10);
    }
};

function searchByID() {
    window.location = base_url + "/property/detail/" + document.getElementById("property_id").value;
};

function searchProjectByID() {
    window.location = base_url + "/project/detail/" + document.getElementById("project_id").value;
};

function searchStakeholderByID() {
    window.location = base_url + "/stakeholders/detail/" + document.getElementById("stakeholder_id").value;
};

function popupAjax(id, url, _12) {
    document.getElementById(id).innerHTML = "<img src='" + base_url + "/images/loading.gif' alt='Loading' />";
    var _13 = null;
    _13 = getHTTPObject();
    if (_13 != null) {
        _13.open("POST", url, true);
        _13.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        _13.setRequestHeader("Content-length", _12.length);
        _13.setRequestHeader("Connection", "close");
        _13.onreadystatechange = function() {
            if (_13.readyState == 4) {
                var str = _13.responseText;
                if (str == "Invalid") {
                    alert("Property type units is larger than total available units");
                } else {
                    document.getElementById(id).innerHTML = str;
                    if (id == "homepopup") {
                        document.getElementById(id).style.display = "inline";
                    } else {
                        showdeadcenterdiv(250, 300, id);
                    }
                }
            }
        };
        _13.send(_12);
    }
};

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

function loadClassifiedDistricts() {
    var str;
    str = document.getElementById("classified_type").value;
    params = "option=" + str;
    document.getElementById("ClassifiedDistricts").innerHTML = "<img src='" + base_url + "/images/loading.gif' alt='Loading' />";
    document.getElementById("Classifieds").innerHTML = "<select name=\"ClassifiedLocation\" id=\"ClassifiedLocation\" class=\"font-size-10 global-search-option1\">  <option value=\"\">All Locations</option></select>";
    generalDistrictAjax("ClassifiedDistricts", base_url + "/search/loadClassifiedDistrict", params);
};

function loadClassifiedLocations(str) {
    var _1c, _1d;
    if (str == "None") {
        str = document.getElementById("classified_type").value;
    }
    _1d = document.getElementById("ClassifiedDistrict").value;
    _1c = "option=" + str + "&district=" + _1d;
    document.getElementById("Classifieds").innerHTML = "<img src='" + base_url + "/images/loading.gif' alt='Loading' />";
    generalDistrictAjax("Classifieds", base_url + "/search/loadClassifiedLocation", _1c);
};

function panelUpdate(id) {
    var _1e;
    var _1f;
    if (id == "District") {
        _1e = document.getElementById(id + "s").value;
        if (_1e == 0) {
            restore_default('Location');
        } else {
            _1f = "value=" + _1e + "&type=" + document.getElementById("property_type").value;
            document.getElementById("Location").innerHTML = "<img src='" + base_url + "/images/loading.gif' alt='Loading' />";
            generalDistrictAjax("Location", base_url + "/search/loadLocation", _1f);
        }
    } else {
        if (id == "BuyerDistrict") {
            _1e = document.getElementById(id + "s").value;
            if (_1e == 0) {
                restore_default('BuyerLocation');
            } else {
                _1f = "value=" + _1e;
                document.getElementById("BuyerLocation").innerHTML = "<img src='" + base_url + "/images/loading.gif' alt='Loading' />";
                generalDistrictAjax("BuyerLocation", base_url + "/search/loadBuyerLocation", _1f);
            }
        } else {
            if (id == "ProjectDistrict") {
                _1e = document.getElementById(id + "s").value;
                if (_1e == 0) {
                    restore_default('ProLocation');
                } else {
                    _1f = "value=" + _1e;
                    document.getElementById("ProLocation").innerHTML = "<img src='" + base_url + "/images/loading.gif' alt='Loading' />";
                    generalDistrictAjax("ProLocation", base_url + "/search/loadProjectLocation", _1f);
                }
            } else {
                if (id == "DeveloperDistrict") {
                    _1e = document.getElementById(id + "s").value;
                    if (_1e == 0) {
                        restore_default('Location');
                    } else {
                        _1f = "value=" + _1e;
                        document.getElementById("Location").innerHTML = "<img src='" + base_url + "/images/loading.gif' alt='Loading' />";
                        generalDistrictAjax("Location", base_url + "/search/loadDeveloperLocation", _1f);
                    }
                } else {
                    if (id == "AgentDistrict") {
                        _1e = document.getElementById(id + "s").value;
                        if (_1e == 0) {
                            restore_default('Location');
                        } else {
                            _1f = "value=" + _1e;
                            document.getElementById("Location").innerHTML = "<img src='" + base_url + "/images/loading.gif' alt='Loading' />";
                            generalDistrictAjax("Location", base_url + "/search/loadAgentLocation", _1f);
                        }
                    } else {
                        if (id == "ProfessionalDistrict") {
                            _1e = document.getElementById(id + "s").value;
                            if (_1e == 0) {
                                restore_default('Location');
                            } else {
                                _1f = "value=" + _1e;
                                document.getElementById("Location").innerHTML = "<img src='" + base_url + "/images/loading.gif' alt='Loading' />";
                                generalDistrictAjax("Location", base_url + "/search/loadProfessionalLocation", _1f);
                            }
                        } else {
                            if (id == "property_type") {
                                _1e = document.getElementById(id).value;
                                if (_1e == 0) {
                                    document.getElementById("Location").innerHTML = "<img src='" + base_url + "/images/loading.gif' alt='Loading' />";
                                    document.getElementById("District").innerHTML = "<img src='" + base_url + "/images/loading.gif' alt='Loading' />";
                                    restore_default('Location');
                                    generalDistrictAjax("District", base_url + "/search/loadDistricts", "type=0");
                                } else {
                                    _1f = "type=" + _1e;
                                    var _20 = document.forms["propertysearch"];
                                    if (document.getElementById("property_type").value == "Land") {
                                        if (_20.transaction[0].checked) {
                                            transaction = _20.transaction[0].value;
                                        } else {
                                            transaction = _20.transaction[1].value;
                                        }
                                        if (transaction == "buy") {
                                            document.getElementById("price").innerHTML = " Price Per Aana(NRs):";
                                        }
                                    } else {
                                        if (_20.transaction[0].checked) {
                                            transaction = _20.transaction[0].value;
                                        } else {
                                            transaction = _20.transaction[1].value;
                                        }
                                        if (transaction == "buy") {
                                            document.getElementById("price").innerHTML = "Property Price(NRs):";
                                        }
                                    }
                                    generalDistrictAjax("District", base_url + "/search/loadDistricts", _1f);
                                    var _1f;
                                    _1f = "location=Location";
                                    generalDistrictAjax("Location", base_url + "/search/loadDefault", _1f);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

function restore_default(id) {
    var _21;
    _21 = "location=" + id;
    var _22 = "";
    generalDistrictAjax(id, base_url + "/search/loadDefault", _21);
};

function setConverterDisappear() {
    if (document.getElementById("mypopup")) {
        document.getElementById("mypopup").style.display = "none";
    } else {
        document.getElementById("homepopup").style.display = "none";
        var _23 = new Number(RegExp.$1);
        if (_23 >= 8 || _23 >= 7) {} else {
            if (_23 >= 6 || _23 >= 5) {
                var arr = document.getElementsByTagName("select");
                var i = 0;
                while (i < arr.length) {
                    arr[i].style.display = "";
                }
            }
        }
    }
};

function setConverterVisible(pid) {
    var _24;
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        var _25 = new Number(RegExp.$1);
        if (_25 >= 8 || _25 >= 7) {} else {
            if (_25 >= 6 || _25 >= 5) {
                var arr = document.getElementsByTagName("select");
                var i = 0;
                while (i < arr.length) {
                    arr[i].style.display = "none";
                }
            }
        }
    }
    _24 = "target=" + pid;
    popupAjax("mypopup", base_url + "/search/converter_popup", _24);
};

function getConverterVisible() {
    var _26;
    _26 = "target=self";
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        var _27 = new Number(RegExp.$1);
        if (_27 >= 8 || _27 >= 7) {} else {
            if (_27 >= 6 || _27 >= 5) {
                var arr = document.getElementsByTagName("select");
                var i = 0;
                while (i < arr.length) {
                    arr[i].style.display = "none";
                }
            }
        }
    }
    popupAjax("homepopup", base_url + "/search/converter_popup", _26);
};

function getGuidelineVisible() {
    var _28;
    _28 = "target=self";
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        var _29 = new Number(RegExp.$1);
        if (_29 >= 8 || _29 >= 7) {} else {
            if (_29 >= 6 || _29 >= 5) {
                var arr = document.getElementsByTagName("select");
                var i = 0;
                while (i < arr.length) {
                    arr[i].style.display = "none";
                }
            }
        }
    }
    showdeadcenterdiv(350, 300, mypopup);
};

function setDisappear() {
    if (document.getElementById("mypopup")) {
        document.getElementById("mypopup").style.display = "none";
    } else {
        alert("homepopup");
        document.getElementById("homepopup").style.display = "none";
    }
};

function emailCheck(str) {
    var at = "@";
    var dot = ".";
    var lat = str.indexOf(at);
    var _2a = str.length;
    var _2b = str.indexOf(dot);
    if (str.indexOf(at) == -1) {
        return false;
    }
    if (str.indexOf(at) == -1 || str.indexOf(at) == 0 || str.indexOf(at) == _2a) {
        return false;
    }
    if (str.indexOf(dot) == -1 || str.indexOf(dot) == 0 || str.indexOf(dot) == _2a) {
        return false;
    }
    if (str.indexOf(at, (lat + 1)) != -1) {
        return false;
    }
    if (str.substring(lat - 1, lat) == dot || str.substring(lat + 1, lat + 2) == dot) {
        return false;
    }
    if (str.indexOf(dot, (lat + 2)) == -1) {
        return false;
    }
    if (str.indexOf(" ") != -1) {
        return false;
    }
    return true;
};

function validate_email_form(_2c) {
    var _2d, _2e, _2f, msg;
    _2d = document.getElementById("name").value;
    _2e = document.getElementById("sender").value;
    _2f = document.getElementById("receiver").value;
    msg = document.getElementById("message").value;
    if (_2d == "" || _2e == "" || _2f == "") {
        document.getElementById("emsg").innerHTML = "Enter Required Fields";
        alert("Error1");
    } else {
        if (!(emailCheck(_2e) || emailCheck(_2f))) {
            document.getElementById("emsg").innerHTML = "Enter Valid Email Fields";
        } else {
            params = "name=" + _2d + "&sender=" + _2e + "&receiver=" + _2f + "&msg=" + msg + "&links=" + _2c;
            document.getElementById("emailbody").innerHTML = "<img src='" + base_url + "/images/icons/sending.gif' alt='sending' />";
            generalSearchAjax("emailbody", base_url + "/search/sendemail", params);
        }
    }
};

function generalSearchAjax(id, url, _30) {
    var _31 = null;
    _31 = getHTTPObject();
    if (_31 != null) {
        _31.open("POST", url, true);
        _31.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        _31.setRequestHeader("Content-length", _30.length);
        _31.setRequestHeader("Connection", "close");
        _31.onreadystatechange = function() {
            if (_31.readyState == 4 && _31.status == 200) {
                var str = _31.responseText;
                document.getElementById(id).innerHTML = str;
            }
        };
        if (_30 == "") {
            _31.send(null);
        } else {
            _31.send(_30);
        }
    }
};

function generalResultAjax(id, url, _32) {
    document.getElementById(id).innerHTML = "<img src='" + base_url + "/images/loading.gif' alt='Loading' />";
    document.getElementById("pagination1").innerHTML = "";
    document.getElementById("pagination2").innerHTML = "";
    if (id != "newsresult") {
        document.getElementById("result_title").innerHTML = "";
    }
    var _33 = null;
    _33 = getHTTPObject();
    if (_33 != null) {
        _33.open("POST", url, true);
        _33.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        _33.setRequestHeader("Content-length", _32.length);
        _33.setRequestHeader("Connection", "close");
        _33.onreadystatechange = function() {
            if (_33.readyState == 4) {
                var str = _33.responseText;
                var temp = str.split("~");
                document.getElementById(id).innerHTML = temp[0];
                document.getElementById("pagination1").innerHTML = temp[1];
                document.getElementById("pagination2").innerHTML = temp[1];
                if (id != "newsresult") {
                    document.getElementById("result_title").innerHTML = temp[2];
                }
            }
        };
        _33.send(_32);
    }
};

function change_snap(_34, pid) {
    var _35 = "image_path=" + _34 + "&pid=" + pid;
    generalSearchAjax("gallery", base_url + "/search/update_gallery", _35);
};

function change_project_snap(_36, pid) {
    var _37 = document.getElementById("category").value.replace(" ", "-");
    window.location = base_url + "/project/detail/" + pid + "/multimedia/" + _37;
};

function multimedia_option(_38, pid) {
    var _39 = _38.replace(" ", "-");
    _39 = _39.replace("/", "-");
    window.location = base_url + "/project/detail/" + pid + "/multimedia/" + _39;
};

function updateOption(_3a) {
    if (_3a == "buy") {
        generalSearchAjax("ranges", base_url + "/search/search_price", "");
    } else {
        if (_3a == "rent") {
            generalSearchAjax("ranges", base_url + "/search/rent_range", "");
        }
    }
};

function updateBuyerOption(_3b) {
    if (_3b == "buy") {
        generalSearchAjax("ranges", base_url + "/search/search_buyer_price", "");
    } else {
        if (_3b == "rent") {
            generalSearchAjax("ranges", base_url + "/search/buyer_rent_range", "");
        }
    }
};

function set_price_label() {
    var _3c = document.forms["propertysearch"];
    if (document.getElementById("property_type").value == "Land") {
        if (_3c.transaction[0].checked) {
            transaction = _3c.transaction[0].value;
        } else {
            transaction = _3c.transaction[1].value;
        }
        if (transaction == "buy") {
            document.getElementById("price").innerHTML = " Price Per Aana(NRs):";
        }
    } else {
        if (_3c.transaction[0].checked) {
            transaction = _3c.transaction[0].value;
        } else {
            transaction = _3c.transaction[1].value;
        }
        if (transaction == "buy") {
            document.getElementById("price").innerHTML = " Property Price(NRs):";
        }
    }
};

function searchProperty(_3d, _3e) {
    var _3f, _40, _41, _42, _43, _44, _45, _46, _47;
    var _48 = document.getElementById("PageRange").value;
    var _49 = document.getElementById("sort").value;
    var _4a = document.forms["propertysearch"];
    if (_4a.transaction[0].checked) {
        _47 = _4a.transaction[0].value;
    } else {
        _47 = _4a.transaction[1].value;
    }
    _3f = document.getElementById("Districts").value;
    _40 = document.getElementById("plocation").value;
    _41 = document.getElementById("property_type").value;
    _42 = parseFloat(document.getElementById("sqrft_min").value);
    if (isNaN(_42)) {
        _42 = 0;
    };
    _43 = parseFloat(document.getElementById("sqrft_max").value);
    if (isNaN(_43)) {
        _43 = 0;
    };
    _44 = parseFloat(document.getElementById("range1").value);
    _45 = parseFloat(document.getElementById("range2").value);
    var _fg = true;
    if (_42 > _43 && _43 != 0 && _43 != 1) {
        alert("Minimum Area Cannot Exceed Maximum Area Range");
        _fg = false;
    };
    if (_44 > _45 && _45 != 0 && _45 != 1) {
        alert("Minimum Price Cannot Exceed Maximum Price Range");
        _fg = false;
    };
    if (_fg) {
        _46 = "district=" + _3f + "&location=" + _40 + "&type=" + _41 + "&areamin=" + document.getElementById("sqrft_min").value + "&areamax=" + document.getElementById("sqrft_max").value + "&pricemin=" + _44 + "&pricemax=" + _45 + "&page=" + _3d + "&back=" + _3e + "&range=" + _48 + "&sortby=" + _49 + "&transaction=" + _47;
        generalResultAjax("result", base_url + "/search/property_result", _46);
    };
};

function searchPropertyTopForm(_4b, _4c, _4d, _4e, _4f) {
    var _50, _51, _52, _53, _54, _55, _56;
    var _57 = document.getElementById("PageRange").value;
    var _58 = document.getElementById("sort").value;
    var _59 = document.forms["propertysearch"];
    _50 = -100;
    _51 = _4d;
    _52 = "";
    _53 = "";
    _54 = "0";
    _55 = "0";
    _56 = "district=" + _50 + "&location=" + _4f + "&type=" + _51 + "&areamin=" + _52 + "&areamax=" + _53 + "&pricemin=" + _54 + "&pricemax=" + _55 + "&page=" + _4b + "&back=" + _4c + "&range=" + _57 + "&sortby=" + _58 + "&transaction=" + _4e;
    generalResultAjax("result", base_url + "/search/property_result", _56);
};

function searchProjectAlphabet(ch) {
    document.getElementById("alphabet").value = ch;
    document.forms["alphabetproject"].submit();
};

function searchDeveloperAlphabets(ch) {
    document.getElementById("alphabet2").value = ch;
    document.forms["alphabetdeveloper"].submit();
};

function searchBuyer(_5a, _5b) {
    var _5c, _5d, _5e, _5f, _60, _61, _62, _63, _64;
    var _65 = document.getElementById("PageRange").value;
    var _66 = document.getElementById("sort").value;
    var _67 = document.forms["propertysearch"];
    if (_67.transaction[0].checked) {
        _64 = _67.transaction[0].value;
    } else {
        _64 = _67.transaction[1].value;
    }
    _5c = document.getElementById("BuyerDistricts").value;
    _5d = document.getElementById("plocation").value;
    _5e = document.getElementById("property_type").value;
    _5f = document.getElementById("sqrft_min").value;
    _60 = document.getElementById("sqrft_max").value;
    _61 = document.getElementById("range1").value;
    _62 = document.getElementById("range2").value;
    _63 = "district=" + _5c + "&location=" + _5d + "&type=" + _5e + "&areamin=" + _5f + "&areamax=" + _60 + "&pricemin=" + _61 + "&pricemax=" + _62 + "&page=" + _5a + "&back=" + _5b + "&range=" + _65 + "&sortby=" + _66 + "&transaction=" + _64;
    generalResultAjax("result", base_url + "/search/buyer_result", _63);
};

function searchHomeProject(_68, _69) {
    var _6a, _6b, _6c, _6d, _6e, _6f, _70, _71;
    var _72 = document.getElementById("PageRange").value;
    var _73 = document.getElementById("sort").value;
    _6a = document.getElementById("Districts").value;
    _6b = document.getElementById("location").value;
    _6c = document.getElementById("property_type").value;
    sqmin = document.getElementById("minbed").value;
    sqmax = document.getElementById("maxbed").value;
    _6f = document.getElementById("range1").value;
    _70 = document.getElementById("range2").value;
    _71 = "district=" + _6a + "&location=" + _6b + "&type=" + _6c + "&bedmin=" + sqmin + "&bedmax=" + sqmax + "&pricemin=" + _6f + "&pricemax=" + _70 + "&page=" + _68 + "&back=" + _69 + "&range=" + _72 + "&sortby=" + _73;
    generalResultAjax("result", base_url + "/search/project_result", _71);
};

function searchProject(_74, _75) {
    var _76, _77, _78, _79, _7a, _7b, _7c, _7d;
    var _7e = document.getElementById("PageRange").value;
    var _7f = document.getElementById("sort").value;
    _76 = document.getElementById("ProjectDistricts").value;
    _77 = "0";
    _78 = "0";
    sqmin = "";
    sqmax = "";
    _7b = "";
    _7c = "";
    _7d = "district=" + _76 + "&location=" + _77 + "&type=" + _78 + "&bedmin=" + sqmin + "&bedmax=" + sqmax + "&pricemin=" + _7b + "&pricemax=" + _7c + "&page=" + _74 + "&back=" + _75 + "&range=" + _7e + "&sortby=" + _7f;
    generalResultAjax("result", base_url + "/search/project_result", _7d);
};

function searchAdvancedProject(_80, _81) {
    var _82, _83, _84, _85, _86, _87, _88, _89;
    var _8a = document.getElementById("PageRange").value;
    var _8b = document.getElementById("sort").value;
    _82 = document.getElementById("ProjectDistricts").value;
    _83 = document.getElementById("projectlocation").value;
    _84 = document.getElementById("property_type").value;
    sqmin = parseFloat(document.getElementById("minbed").value);
    if (isNaN(sqmin)) {
        sqmin = 0;
    };
    sqmax = parseFloat(document.getElementById("maxbed").value);
    if (isNaN(sqmax)) {
        sqmax = 0;
    };
    var _fg = true;
    _87 = parseFloat(document.getElementById("range1").value);
    if (isNaN(_87)) {
        _87 = 0;
    };
    _88 = parseFloat(document.getElementById("range2").value);
    if (isNaN(_88)) {
        _88 = 0;
    };
    if (_88 != 1 && _88 != 0 && _87 > _88) {
        alert("Minimum Area Cannot Exceed Maximum Area Range");
        _fg = false;
    };
    if (_fg) {
        _89 = "district=" + _82 + "&location=" + _83 + "&type=" + _84 + "&bedmin=" + document.getElementById("minbed").value + "&bedmax=" + document.getElementById("maxbed").value + "&pricemin=" + document.getElementById("range1").value + "&pricemax=" + document.getElementById("range2").value + "&page=" + _80 + "&back=" + _81 + "&range=" + _8a + "&sortby=" + _8b;
        generalResultAjax("result", base_url + "/search/project_result", _89);
    };
};

function searchDeveloper(_8c, _8d) {
    var _8e, _8f;
    var _90 = document.getElementById("PageRange").value;
    _8e = document.getElementById("DeveloperDistricts").value;
    _8f = "type=Developers&district=" + _8e + "&location=0" + "&page=" + _8c + "&back=" + _8d + "&range=" + _90 + "&alphabet=0";
    generalResultAjax("result", base_url + "/search/stakeholder_result", _8f);
};

function searchDeveloperAlphabet(_91, _92, _93) {
    var _94, _95;
    var _96 = document.getElementById("PageRange").value;
    _95 = "type=Developers&district=0&location=0&page=" + _91 + "&back=" + _92 + "&range=" + _96 + "&alphabet=" + _93;
    generalResultAjax("result", base_url + "/search/stakeholder_result", _95);
};

function searchAgent(_97, _98) {
    var _99, _9a, _9b, _9c;
    var _9d = document.getElementById("PageRange").value;
    _99 = document.getElementById("AgentDistricts").value;
    _9c = "type=Agents&district=" + _99 + "&location=0&page=" + _97 + "&back=" + _98 + "&range=" + _9d + "&alphabet=0";
    generalResultAjax("result", base_url + "/search/stakeholder_result", _9c);
};

function searchAgentAlphabet(_9e, _9f, _a0) {
    var _a1, _a2, _a3;
    var _a4 = document.getElementById("PageRange").value;
    _a3 = "type=Agents&district=0&location=0&page=" + _9e + "&back=" + _9f + "&range=" + _a4 + "&alphabet=" + _a0;
    generalResultAjax("result", base_url + "/search/stakeholder_result", _a3);
};

function searchAgentKeys(_a5, _a6, _a7) {
    var _a8, _a9, _aa;
    var _ab = document.getElementById("PageRange").value;
    _aa = "type=Agents&district=-30&location=0&page=" + _a5 + "&back=" + _a6 + "&range2=" + _ab + "&keyword=" + _a7;
    generalResultAjax("result", base_url + "/search/stakeholder_result", _aa);
};

function searchDeveloperKeys(_ac, _ad, _ae) {
    var _af, _b0, _b1;
    var _b2 = document.getElementById("PageRange").value;
    _b1 = "type=Developers&district=-20&location=0&page=" + _ac + "&back=" + _ad + "&range2=" + _b2 + "&keyword=" + _ae;
    generalResultAjax("result", base_url + "/search/stakeholder_result", _b1);
};

function searchProfessional(_b3, _b4) {
    var _b5 = document.getElementById("category").value;
    var _b6, _b7, _b8, _b9;
    var _ba = document.getElementById("PageRange").value;
    _b6 = document.getElementById("ProfessionalDistricts").value;
    _b9 = "type=Professionals&category=" + _b5 + "&district=" + _b6 + "&location=0&page=" + _b3 + "&back=" + _b4 + "&range=" + _ba + "&alphabet=0";
    generalResultAjax("result", base_url + "/search/stakeholder_result", _b9);
};

function searchProfessionalAlphabet(_bb, _bc, _bd) {
    var _be = document.getElementById("category").value;
    var _bf, _c0, _c1;
    var _c2 = document.getElementById("PageRange").value;
    _c1 = "type=Professionals&category=" + _be + "&district=0&location=0&page=" + _bb + "&back=" + _bc + "&range=" + _c2 + "&alphabet=" + _bd;
    generalResultAjax("result", base_url + "/search/stakeholder_result", _c1);
};

function searchProfessionalKeys(_c3, _c4, _c5) {
    var _c6 = document.getElementById("category").value;
    var _c7, _c8, _c9;
    var _ca = document.getElementById("PageRange").value;
    _c9 = "type=Professionals&category=" + _c6 + "&district=-20&location=0&page=" + _c3 + "&back=" + _c4 + "&range3=" + _ca + "&keyword=" + _c5;
    generalResultAjax("result", base_url + "/search/stakeholder_result", _c9);
};

function searchProfessionalKeyword(_cb, _cc) {
    var _cd = document.getElementById("category").value;
    var _ce, _cf, _d0, _d1;
    var _d2 = document.getElementById("PageRange").value;
    var _d3 = document.getElementById("keys").value;
    _ce = document.getElementById("ProfessionalDistricts").value;
    _d1 = "type=Professionals&category=" + _cd + "&district=-20&location=0&page=" + _cb + "&back=" + _cc + "&range=" + _d2 + "&alphabet=" + _d0 + "&keys=" + _d3;
    generalResultAjax("result", base_url + "/search/stakeholder_result", _d1);
};

function setOption() {
    var _d4 = document.forms["propertysearch"];
    _d4.reset();
    if (_d4.transaction[0].checked) {
        generalSearchAjax("ranges", base_url + "/search/search_price", "");
    } else {
        generalSearchAjax("ranges", base_url + "/search/rent_range", "");
    }
};

function setMyOption() {
    var _d5 = document.forms["propertysearch"];
    _d5.property_type.value = "0";
    _d5.transaction[0].checked = true; /*var _h18=document.forms['financialsearchhome'];_h18.producttype.value="loan_and_mortgages";var _d6=document.forms["classifiedSearch"];_d6.ClassifiedDistrict.value="";_d6.classified_type.value="sell-rent";*/
};

function setBuyerOption() {
    var _d7 = document.forms["buyerform"];
    if (_d7.transaction[0].checked) {
        generalSearchAjax("ranges", base_url + "/search/search_buyer_price", "");
    } else {
        generalSearchAjax("ranges", base_url + "/search/buyer_rent_range", "");
    }
};

function setContent(cid, id) {
    document.getElementById("contents").innerHTML = "<img src='" + base_url + "/images/loading.gif' alt='Loading' />";
    var _d8 = "";
    var _d9 = "";
    var _da = "";
    var _db = "";
    var _dc = "";
    if (_d8 == "") {
        var _dd;
        _dd = null;
        _dd = getHTTPObject();
        var _de;
        _de = "id=" + cid;
        if (_dd != null) {
            _dd.open("POST", base_url + "/search/setDetail", true);
            _dd.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            _dd.setRequestHeader("Content-length", _de.length);
            _dd.setRequestHeader("Connection", "close");
            _dd.onreadystatechange = function() {
                if (_dd.readyState == 4) {
                    var str = _dd.responseText;
                    var _df = new Array();
                    _df = str.split("~");
                    document.getElementById("contents").innerHTML = "";
                    document.getElementById("contents").innerHTML = _df[id - 1];
                    _d8 = _df[0];
                    _d9 = _df[1];
                    _da = _df[2];
                    _db = _df[3];
                    _dc = _df[4];
                    document.getElementById("tab" + id).className = "tabactive";
                    document.getElementById("tab" + id).style.outline = "none";
                    document.getElementById("tab" + id).blur();
                    var j = 1;
                    while (j < id) {
                        document.getElementById("tab" + j).className = "tabdead";
                        j = j + 1;
                    }
                    j = id + 1;
                    var el;
                    while (el = document.getElementById("tab" + j)) {
                        el.className = "tabdead";
                        j = j + 1;
                    }
                }
            };
            _dd.send(_de);
        }
    } else {
        switch (id) {
            case 1:
                document.getElementById("contents").innerHTML = "";
                document.getElementById("contents").innerHTML = _d8;
                break;
            case 2:
                document.getElementById("contents").innerHTML = "";
                document.getElementById("contents").innerHTML = _d9;
                break;
            case 3:
                document.getElementById("contents").innerHTML = "";
                document.getElementById("contents").innerHTML = _da;
                break;
            case 4:
                document.getElementById("contents").innerHTML = "";
                document.getElementById("contents").innerHTML = _db;
                break;
            case 5:
                document.getElementById("contents").innerHTML = "";
                document.getElementById("contents").innerHTML = _dc;
                break;
        }
        document.getElementById("tab" + id).className = "tabactive";
        document.getElementById("tab" + id).style.outline = "none";
        document.getElementById("tab" + id).blur();
        var j = 1;
        while (j < id) {
            document.getElementById("tab" + j).className = "tabdead";
            j = j + 1;
        }
        j = id + 1;
        var el;
        while (el = document.getElementById("tab" + j)) {
            el.className = "tabdead";
            j = j + 1;
        }
    }
};

function setDetail(cid, _e0, id) {
    document.getElementById("contents").innerHTML = "<img src='" + base_url + "/images/loading.gif' alt='Loading' />";
    var _e1 = "";
    var _e2 = "";
    var _e3 = "";
    if (_e3 == "") {
        var _e4;
        _e4 = null;
        _e4 = getHTTPObject();
        var _e5;
        _e5 = "id=" + cid + "&type=" + _e0;
        if (_e4 != null) {
            _e4.open("POST", base_url + "/search/setStakeholderDetail", true);
            _e4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            _e4.setRequestHeader("Content-length", _e5.length);
            _e4.setRequestHeader("Connection", "close");
            _e4.onreadystatechange = function() {
                if (_e4.readyState == 4) {
                    var str = _e4.responseText;
                    var _e6 = new Array();
                    _e6 = str.split("~");
                    document.getElementById("contents").innerHTML = "";
                    document.getElementById("contents").innerHTML = _e6[id - 1];
                    _e1 = _e6[0];
                    _e2 = _e6[1];
                    _e3 = _e6[2];
                    document.getElementById("tab" + id).className = "tabactive";
                    document.getElementById("tab" + id).style.outline = "none";
                    document.getElementById("tab" + id).blur();
                    var j = 1;
                    while (j < id) {
                        document.getElementById("tab" + j).className = "tabdead";
                        j = j + 1;
                    }
                    j = id + 1;
                    var el;
                    while (el = document.getElementById("tab" + j)) {
                        el.className = "tabdead";
                        j = j + 1;
                    }
                }
            };
            _e4.send(_e5);
        }
    } else {
        switch (id) {
            case 1:
                document.getElementById("contents").innerHTML = "";
                document.getElementById("contents").innerHTML = _e1;
                break;
            case 2:
                document.getElementById("contents").innerHTML = "";
                document.getElementById("contents").innerHTML = _e2;
                break;
            case 3:
                document.getElementById("contents").innerHTML = "";
                document.getElementById("contents").innerHTML = _e3;
                break;
        }
        document.getElementById("tab" + id).className = "tabactive";
        document.getElementById("tab" + id).style.outline = "none";
        document.getElementById("tab" + id).blur();
        var j = 1;
        while (j < id) {
            document.getElementById("tab" + j).className = "tabdead";
            j = j + 1;
        }
        j = id + 1;
        var el;
        while (el = document.getElementById("tab" + j)) {
            el.className = "tabdead";
            j = j + 1;
        }
    }
};

function setOtherForm(cid, _e7, id) {
    document.getElementById("contents").innerHTML = "<img src='" + base_url + "/images/loading.gif' alt='Loading' />";
    var _e8;
    _e8 = null;
    _e8 = getHTTPObject();
    var _e9;
    _e9 = "eid=" + cid;
    if (_e8 != null) {
        _e8.open("POST", base_url + "/search/stakeholder_inquiry_form", true);
        _e8.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        _e8.setRequestHeader("Content-length", _e9.length);
        _e8.setRequestHeader("Connection", "close");
        _e8.onreadystatechange = function() {
            if (_e8.readyState == 4) {
                var str = _e8.responseText;
                document.getElementById("contents").innerHTML = "";
                document.getElementById("contents").innerHTML = str;
                document.getElementById("tab" + id).className = "tabactive";
                document.getElementById("tab" + id).style.outline = "none";
                document.getElementById("tab" + id).blur();
                var j = 1;
                while (j < id) {
                    document.getElementById("tab" + j).className = "tabdead";
                    j = j + 1;
                }
                j = id + 1;
                var el;
                while (el = document.getElementById("tab" + j)) {
                    el.className = "tabdead";
                    j = j + 1;
                }
            }
        };
        _e8.send(_e9);
    }
};

function setForm(cid, id) {
    document.getElementById("contents").innerHTML = "<img src='" + base_url + "/images/loading.gif' alt='Loading' />";
    var _ea;
    _ea = null;
    _ea = getHTTPObject();
    var _eb;
    _eb = "eid=" + cid;
    if (_ea != null) {
        _ea.open("POST", base_url + "/search/inquiry_form", true);
        _ea.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        _ea.setRequestHeader("Content-length", _eb.length);
        _ea.setRequestHeader("Connection", "close");
        _ea.onreadystatechange = function() {
            if (_ea.readyState == 4) {
                var str = _ea.responseText;
                document.getElementById("contents").innerHTML = "";
                document.getElementById("contents").innerHTML = str;
                document.getElementById("tab" + id).className = "tabactive";
                document.getElementById("tab" + id).style.outline = "none";
                document.getElementById("tab" + id).blur();
                var j = 1;
                while (j < id) {
                    document.getElementById("tab" + j).className = "tabdead";
                    j = j + 1;
                }
                j = id + 1;
                var el;
                while (el = document.getElementById("tab" + j)) {
                    el.className = "tabdead";
                    j = j + 1;
                }
            }
        };
        _ea.send(_eb);
    }
};

function check_Submit() {
    if ((document.getElementById("email").value == "") || (document.getElementById("firstname").value == "") || (document.getElementById("lastname").value == "") || (document.getElementById("address").value == "")) {
        document.getElementById("MainError").innerHTML = "Enter Complete Information";
        return false;
    } else {
        if (!(emailCheck(document.getElementById("email").value))) {
            document.getElementById("MainError").innerHTML = "Enter Valid Email Address";
            return false;
        } else {
            return true;
        }
    }
};

function setHousingSearch(_ec, id) {
    document.getElementById("housingcontents").innerHTML = "<img src='" + base_url + "/images/loading.gif' alt='Loading' />";
    var _ed;
    _ed = null;
    _ed = getHTTPObject();
    var _ee;
    _ee = "type=" + _ec;
    if (_ec == "General") {
        document.getElementById("result_range").innerHTML = "Results per Page" + "<select id=\"PageRange\" name=\"PageRange\" class=\"global-search-option-small\" onchange=\"searchProject(0,0);\">" + " <option value=\"20\">20</option>\t" + "<option value=\"10\">10</option>\t" + " <option value=\"5\" selected>5</option>" + "</select>";
        document.getElementById("result_sort").innerHTML = " Sort By:" + "<select id=\"sort\" name=\"sort\" class=\"global-search-option-small\" onchange=\"searchProject(0,0);\">" + " <option value=\"0\" selected>None</option><option value=\"AreaLH\">Area (Low To High)</option>\t" + "<option value=\"AreaHL\">Area (High To Low)</option>" + "</select>";
    } else {
        if (_ec == "Guided") {
            document.getElementById("result_sort").innerHTML = " Sort By:" + "<select id=\"sort\" name=\"sort\" class=\"global-search-option-small\" onchange=\"searchAdvancedProject(0,0);\">" + "<option value=\"0\" selected>None</option> <option value=\"AreaLH\">Area (Low To High)</option>\t" + " <option value=\"AreaHL\">Area (High To Low)</option>" + "</select>";
            document.getElementById("result_range").innerHTML = "Results per Page" + "<select id=\"PageRange\" name=\"PageRange\" class=\"global-search-option-small\" onchange=\"searchAdvancedProject(0,0);\">" + " <option value=\"20\">20</option>\t" + "<option value=\"10\">10</option>\t" + " <option value=\"5\" selected>5</option>" + "</select>";
        }
    }
    if (_ed != null) {
        _ed.open("POST", base_url + "/search/guidedProjectSearch", true);
        _ed.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        _ed.setRequestHeader("Content-length", _ee.length);
        _ed.setRequestHeader("Connection", "close");
        _ed.onreadystatechange = function() {
            if (_ed.readyState == 4) {
                var str = _ed.responseText;
                document.getElementById("housingcontents").innerHTML = str;
                document.getElementById("tab" + id).className = "tabactive";
                document.getElementById("tab" + id).style.outline = "none";
                document.getElementById("tab" + id).blur();
                var j = 1;
                while (j < id) {
                    document.getElementById("tab" + j).className = "tabdead";
                    j = j + 1;
                }
                j = id + 1;
                var el;
                while (el = document.getElementById("tab" + j)) {
                    el.className = "tabdead";
                    j = j + 1;
                }
            }
        };
        _ed.send(_ee);
    }
};

function searchClassifieds(_ef, _f0, _f1) {
    var _f2, _f3, _f4;
    var _f5;
    var _f6 = document.getElementById("PageRange").value;
    _f2 = document.getElementById("ClassifiedDistrict").value;
    _f3 = document.getElementById("ClassifiedLocation").value;
    _f4 = document.getElementById("PropertyType").value;
    _f5 = "district=" + _f2 + "&location=" + _f3 + "&ptype=" + _f4 + "&option=" + _ef + "&page=" + _f0 + "&back=" + _f1 + "&range=" + _f6;
    document.getElementById("classifiedsresult").innerHTML = "<img src='" + base_url + "/images/loading.gif' alt='Loading' />";
    generalResultAjax("classifiedsresult", base_url + "/search/classified_result", _f5);
};

function listNews(_f7, _f8, _f9) {
    var _fa, _fb, _fc;
    var _fd;
    var _fe = document.getElementById("PageRange").value;
    _fd = "option=" + _f7 + "&page=" + _f8 + "&back=" + _f9 + "&range=" + _fe;
    document.getElementById("newsresult").innerHTML = "<img src='" + base_url + "/images/loading.gif' alt='Loading' />";
    generalResultAjax("newsresult", base_url + "/news/news_result", _fd);
};

function validatePropertySearch() {
    var _11 = parseFloat(document.getElementById('sqrft_min').value);
    if (isNaN(_11)) {
        _11 = 0
    };
    var _12 = parseFloat(document.getElementById('sqrft_max').value);
    if (isNaN(_11)) {
        _12 = 0
    };
    if (_11 > _12 && _12 != 0 && _12 != 1) {
        alert("Minimum Area Cannot Exceed Maximum Area Range");
        return false;
    };
    var _13 = parseFloat(document.getElementById('range1').value);
    var _14 = parseFloat(document.getElementById('range2').value);
    if (_13 > _14 && _14 != 0 && _14 != 1) {
        alert("Minimum Price Cannot Exceed Maximum Price Range");
        return false;
    };
    return true;
};