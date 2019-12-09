//Executar no ambiente de desenvolvimento do node

var n1 = 1545.5
//Mostra 2 casas após a virgula
n1.toFixed(2)

//Mostra 2 casas após a virgula e muda o ponto(.) por virgula(,)
n1.toFixed(2).replace('.',',');
//Transforma a String para o padrão Brasil, seleciona o tipo de string e por ultimo configura o tipo dessa string
n1.toLocaleString('pt-br',{style: 'currency', currency:'BRL'})