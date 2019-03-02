function f (x) { return -1 * (x*x + 4*x - 8) }

var dx = 0.01

function hillClimbing (f, x) {
  while (true) {
    //console.log('f(%s)=%s', x.toFixed(4), f(x).toFixed(4))
    if (f(x + dx) >= f(x)) {
      x = x + dx
    } else if (f(x - dx) >= f(x)) {
      x = x - dx
    } else {
      break
    }
  }
  console.log('f(%s)=%s', x.toFixed(4), f(x).toFixed(4))
}

hillClimbing(f, 0.0)