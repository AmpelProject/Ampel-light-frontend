color_map = [
    "list-group-item-danger",
    "null",
    "list-group-item-success",
]

function julianIntToDate(n) {
    // convert a Julian number to a Gregorian Date.
    //    S.Boisseau / BubblingApp.com / 2014
    var a = n + 32044;
    var b = Math.floor(((4*a) + 3)/146097);
    var c = a - Math.floor((146097*b)/4);
    var d = Math.floor(((4*c) + 3)/1461);
    var e = c - Math.floor((1461 * d)/4);
    var f = Math.floor(((5*e) + 2)/153);

    var D = e + 1 - Math.floor(((153*f) + 2)/5);
    var M = f + 3 - 12 - Math.round(f/10);
    var Y = (100*b) + d - 4800 + Math.floor(f/10);

    return new Date(Y,M,D);
}

function unixTimestampToDate(unix_timestamp) {
    var ts = new Date(unix_timestamp * 1000);
    var year = ts.getFullYear();
    var month = ts.getMonth() + 1;
    var day = ts.getDate();
    var hour = ts.getHours() < 10 ? '0' + ts.getHours() : ts.getHours();
    var min = ts.getMinutes() < 10 ? '0' + ts.getMinutes() : ts.getMinutes();
    var sec = ts.getSeconds() < 10 ? '0' + ts.getSeconds() : ts.getSeconds();
    var date = day + '.' + month + '.' + year + ' ' + hour + ':' + min + ':' + sec;
    return date;
}

function tierColor(json_obj) {
    return color_map[json_obj.tier];
}