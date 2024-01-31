function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO] Dados inválidos, tende novamente !!")
    } else{
        var fsexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                // criança
                img.setAttribute('src', 'menino_criança.jpg')
            }else if(idade < 18){
                // jovem
                img.setAttribute('src', 'menino_jovem.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'homem_adulto.jpg')
            }else{
                // idoso
                img.setAttribute('src','homem_idoso.jpg')
            }

        }else if(fsexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){
                // criança
                img.setAttribute('src','menina_criança.jpg')
            }else if(idade < 18){
                // jovem
                img.setAttribute('src', 'jovem_menina.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'mulher_adulta.jpg')
            }else{
                // idoso
                img.setAttribute('src', 'mulher_idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Temos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}