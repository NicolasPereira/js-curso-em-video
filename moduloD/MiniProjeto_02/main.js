function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var fsex = document.getElementsByName('radsex')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var idade = 0
    var genero = '';
    if (fAno.value.length == 0 || fAno.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        idade = ano - Number(fAno.value)
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <10){
                img.setAttribute('src', './img/foto-crianca-m.jpeg')
            }else if (idade <= 21){
           //Jovem
                img.setAttribute('src','./img/foto-jovem-m.jpeg')
            }else if (idade < 50){
            //Adulto
                img.setAttribute('src','./img/foto-adulto-m.jpeg')
            }else{
                //Idoso
                img.setAttribute('src','./img/foto-idoso-m.jpeg')
            }
        }else{
            genero = 'Mulher'
            if (idade >= 0 && idade <10){
                //Criança
                img.setAttribute('src', './img/foto-crianca-f.jpg')
            }else if (idade <= 21){
           //Jovem
                img.setAttribute('src', './img/foto-jovem-f.jpeg')
            }else if (idade < 50){
            //Adulto
                img.setAttribute('src', './img/foto-adulto-f.jpeg')
            }else{
                //Idoso
                img.setAttribute('src', './img/foto-idoso-f.jpeg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img);
    }
}