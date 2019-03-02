function f (x) { return -1 * ( x*x*x*x - 10*x*x*x + 20*x*x + 5*x + 7 ) }

var dx = 0.01
var h = 0

function hillClimbing (f, x) {
  while (true) {
    //console.log('f(%s) = %s', x.toFixed(4), f(x).toFixed(4))
    if (f(x + dx) >= f(x)) {
      x = x + dx
    } else if (f(x - dx) >= f(x)) {
      x = x - dx
    } else {
      break
    }
  }
  //console.log('f(%s) = %s', x.toFixed(4), f(x).toFixed(4))
  return {'a':x.toFixed(4),'b':f(x).toFixed(4)}
}

for (var i=0; i<100; i++){
  New = hillClimbing(f, Math.random()*200-100)
  if (i == 0){
    Old = New.b
    Old2 = New.a
  } 
  if (New.b > Old){
    Old = New.b
    Old2 = New.a
  }
}
console.log('f(%s) = %s', Old2, Old)