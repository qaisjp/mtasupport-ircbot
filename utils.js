util = require('util');

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

String.prototype.allValuesPresent = function(values) {
	for (var i = values.length - 1; i >= 0; i--) {
		if (this.search(values[i]) == -1){
			return false
		}
	};
	return true;
}

Number.prototype.between  = function (a, b, inclusive) {
    var min = Math.min.apply(Math, [a,b]),
        max = Math.max.apply(Math, [a,b]);
    return inclusive ? this >= min && this <= max : this > min && this < max;
};

var ascii = /^[ -~\t\n\r]+$/;
String.prototype.isASCII = function(){
    return ascii.test(this);
};

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};