

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




