function fatorial(n){
    var fat = 1
    for(var i = n; i > 1; i--){
        fat *= i
    }
    return fat
}

// Recursiva
function fatorial2(n){
    if(n == 1){
        return 1
    }else {
        return n * fatorial2(n-1)
    }
}
var f = fatorial(5)
console.log(f)

var a = fatorial2(5)
console.log(a)
