var num = [2, 1, 4, 3, 9, 7]
num.push(5)
num.push(8)
num.push(6)
num.sort()
// for(var i = 0; i < num.length; i++){
//     console.log(`${i + 1} = ${num[i]}`)
// }

for(var i in num){
    console.log(num[i])
}

var pos = num.indexOf(10)
if(pos ==  -1){
    console.log('Valor não encontrado')
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}

