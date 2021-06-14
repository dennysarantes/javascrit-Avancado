class NegociacaoService {
  

    obterNegociacoesSemana(FuncaoCallback){

        let xhr = new XMLHttpRequest();
       

        xhr.open('get', 'negociacoes/semana');
        

        xhr.onreadystatechange = () =>{
    /* Estados possíveis de uma requisição AJAX:
        0 - requisição não iniciada;
        1 - conexão com o servidor estabelecida;
        2 - requisição recebida;
        3 - processando requisição
        4 - requisição concluída e a resposta pronta
    */
        if(xhr.readyState == 4){

            if(xhr.status == 200){
                
                FuncaoCallback(null, JSON.parse(xhr.responseText)
                  .map(function (objeto) {
                      console.log("Data recebida " + objeto.data);
                  return new Negociacao(DateHelper.textoParaData(objeto.data), objeto.quantidade, objeto.valor);
                }));
             
            }else {
                FuncaoCallback('Algo deu errado', null);
            }


        }

    }
    xhr.send();
    }
  


    obterNegociacoesSemanaRetrasada(FuncaoCallback){

    let xhr = new XMLHttpRequest();
   

    xhr.open('get', '/negociacoes/retrasada');
        xhr.onreadystatechange = () =>{

            if(xhr.readyState == 4){

                if(xhr.status == 200){
                    
                    FuncaoCallback(null, JSON.parse(xhr.responseText)
                    .map(function (objeto) {
                    return new Negociacao(DateHelper.textoParaData(objeto.data), objeto.quantidade, objeto.valor);
                    }));
                
                }else {
                    FuncaoCallback('Algo deu errado', null);
                }
            }
        }
            xhr.send();
    }

    obterNegociacoesSemanaAnterior(FuncaoCallback){

        let xhr = new XMLHttpRequest();
    

        xhr.open('get', '/negociacoes/anterior');
            xhr.onreadystatechange = () =>{

                if(xhr.readyState == 4){

                    if(xhr.status == 200){
                        
                        FuncaoCallback(null, JSON.parse(xhr.responseText)
                        .map(function (objeto) {
                        return new Negociacao(DateHelper.textoParaData(objeto.data), objeto.quantidade, objeto.valor);
                        }));
                    
                    }else {
                        FuncaoCallback('Algo deu errado', null);
                    }
                }
            }
                xhr.send();
        }
}


/// Código original para fazer requisição com XMLHttpRequest:

/*
let xhr = new XMLHttpRequest();

console.log(`Metodo: ${method} , url: ${url}`)

xhr.open(method, url);


xhr.onreadystatechange = () =>{
/* Estados possíveis de uma requisição AJAX:
0 - requisição não iniciada;
1 - conexão com o servidor estabelecida;
2 - requisição recebida;
3 - processando requisição
4 - requisição concluída e a resposta pronta

if(xhr.readyState == 4){

    if(xhr.status == 200){
        console.log('Obtendo as negociações do servidor...')
        console.log(JSON.parse(xhr.responseText));

        
       let JsonTransformadoEmNegociacao =   JSON.parse(xhr.responseText).map(function (objeto) {
          return new Negociacao(DateHelper.textoParaData(objeto.data), objeto.quantidade, objeto.valor);
        });

        JsonTransformadoEmNegociacao.forEach(negociacao => {
            this._listaNegociacoes.adiciona(negociacao);
        });
        this._mensagem.texto = 'Negociações importadas com sucesso!'
        console.log(this._listaNegociacoes);
     
    }else {
        console.log(xhr.responseText);
        //this._mensagem.texto = 'Algo não funcionou como esperado. Tente novamente mais tarde.';
    }

}

}
xhr.send();
*/
