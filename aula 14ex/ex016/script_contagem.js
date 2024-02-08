function contar(){
    var inicio = document.getElementById('start')
    var fim = document.getElementById('end')
    var passo = document.getElementById('passo')
    var res = document.querySelector('div#res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando: <br>'
        var ini = Number(inicio.value)
        var end = Number(fim.value)
        var pass = Number(passo.value)
        if(pass <= 0){
            window.alert('Passo inválido, considere passo 1')
            p = 1
        }
        if(ini < end){
            for(var c = ini; c <= end; c += pass){
                res.innerHTML += ` ${c} -> `
            }
            // res.innerHTML += 'Acabou'
        } else if(ini > end){
            for(var c = ini; c >= end; c -= pass){
                res.innerHTML += ` ${c} ->`
            }
        }
        res.innerHTML += 'Acabou'
    }
}