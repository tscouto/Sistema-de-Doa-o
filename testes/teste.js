function addLength(str) {
    //start-here
        let valor = str.split(' ')
            
        let
         ValorTamanho = []
        for (let i = 0 ; i < valor.length ; i+= 1){
                         let tamanhoString = valor[i].length
                ValorTamanho.push (valor[i] + ' ' + tamanhoString)
               
                
        }
     return ValorTamanho
}
console.log(addLength('Valor teste'));
    