class NegociacaoServicePromise {
  
    constructor (){

        this._http = new HtppService();
    }


    obterNegociacoesSemana(){
        // o resolve recebe o retorno de sucesso da função principal, ou seja da obterNegociacoesSemana.
        //O reject, por sua vez, recebe o erro!
        return new Promise((resolve, reject) => {
            
            this._http
                      .get('negociacoes/semana')
                      .then(negociacoes => { 
                          resolve(negociacoes
                                    .map(objeto => new Negociacao
                                            (DateHelper.textoParaData(objeto.data), objeto.quantidade, objeto.valor)));
                      })
                      .catch(erro => {
                        console.log(erro);
                        reject('Não foi possível obter as negociações da semana');
                    })
        });
    }


    obterNegociacoesSemanaRetrasada(){
        // o resolve recebe o retorno de sucesso da função principal, ou seja da obterNegociacoesSemana.
        //O reject, por sua vez, recebe o erro!
        return new Promise((resolve, reject) => {
            
            this._http
                      .get('negociacoes/anterior')
                      .then(negociacoes => { 
                          resolve(negociacoes
                                    .map(objeto => new Negociacao
                                            (DateHelper.textoParaData(objeto.data), objeto.quantidade, objeto.valor)));
                      })
                      .catch(erro => {
                        console.log(erro);
                        reject('Não foi possível obter as negociações da semana retrasada');
                    })
        });
    }



    obterNegociacoesSemanaAnterior(){
        // o resolve recebe o retorno de sucesso da função principal, ou seja da obterNegociacoesSemana.
        //O reject, por sua vez, recebe o erro!
        return new Promise((resolve, reject) => {
            
            this._http
                      .get('negociacoes/anterior')
                      .then(negociacoes => { 
                          resolve(negociacoes
                                    .map(objeto => new Negociacao
                                            (DateHelper.textoParaData(objeto.data), objeto.quantidade, objeto.valor)));
                      })
                      .catch(erro => {
                        console.log(erro);
                        reject('Não foi possível obter as negociações da semana anterior');
                    })
        });
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
