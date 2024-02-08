function tabuada(){
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Erro, digite um número')
    } else{
        var n = Number(num.value)
        tab.innerHTML = ''
        for(var i = 1; i <= 10; i++){
            var item = document.createElement('option')
            item.text = `${n} x ${i} = ${n * i}`
            tab.appendChild(item)
        }
    }
}