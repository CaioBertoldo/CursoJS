let num = document.getElementById('number')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isnum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function adicionar(){
    if(isnum(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('Valor inválido ou já está na lista!')
    }
    num.value = '' // deixar o espaço vazio ao atualizar
    num.focus() // deixar o cursor piscando
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores')
    }else {
        let tot = valores.length
        res.innerHTML = ''
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let i in valores){
            soma += valores[i]
            if(valores[i] > maior){
                maior = valores[i]
            }
            if(valores[i] < menor){
                menor = valores[i]
            }
        }
        media = soma / tot
        res.innerHTML += `<p>Temos ${tot} valores ao todo.</p>` 
        res.innerHTML += `<p>O maior valor é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor é ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média entre os valores é ${media}.</p>`
    }
}