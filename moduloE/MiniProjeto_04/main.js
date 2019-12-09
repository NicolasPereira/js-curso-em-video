function calcula(){
    let valor = document.getElementById('txt_valor')
    let res = document.getElementById('seltab')
    if(valor.value.length == 0){
        alert('Por favor, digite um número!')
    }else{
        res.innerHTML = ''
        let num = Number(valor.value)
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value=`tab${c}`
            res.appendChild(item)
        }
    }
}