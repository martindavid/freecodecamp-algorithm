function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(val) {
    return new Boolean(val).valueOf();
  });
}

exports.FalsyBouncer = bouncer;
