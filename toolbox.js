function julianDateToDate(jd) {
  // Convert to Date via UNIX time in milliseconds
  return new Date((jd - 2440587.5)*86400000);
}

function argMax(array) {
    return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
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
