function julianDateToDate(jd) {
  // Convert to Date via UNIX time in milliseconds
  return new Date((jd - 2440587.5)*86400000);
}

function argMax(array) {
    return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
}
