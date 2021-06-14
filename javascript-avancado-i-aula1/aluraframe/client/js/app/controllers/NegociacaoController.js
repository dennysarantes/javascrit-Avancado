class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._listaNegociacoes= new Bind(
            new ListaNegociacoes(),
            this._negociacoesView,
            ['adiciona', 'esvazia']);

        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagem = new Bind(
            new Mensagem(),
            this._mensagemView,
            ['texto']);
    }


    get inputData(){
        return this.inputData;
    }

    get inputQuantidade(){
        return this.inputQuantidade;
    }

    get inputValor(){
        this.inputValor;
    }

    importaNegociacoes(){

        let service = new NegociacaoService();
        let servicePromise = new NegociacaoServicePromise();
        let metodo = 'GET';
//**************************Código INICIAL COM PROMISSE ALL*****************************************

        Promise.all([
                    servicePromise.obterNegociacoesSemana(),
                    servicePromise.obterNegociacoesSemanaAnterior(),
                    servicePromise.obterNegociacoesSemanaRetrasada()
                    ])
                   .then(negociacoes => {
                       console.log(negociacoes);
                       negociacoes.forEach(negociacao => {
                            negociacao.forEach(n => {
                                this._listaNegociacoes.adiciona(n);
                            })    
                        });
                        this._mensagem.texto = 'Negociações da semana anterior importadas com sucesso!' 
                    })
                    .catch(erro => this._mensagem.texto = 'ERRO ao tentar importar negociações!');


//**************************Código INICIAL COM PROMISSE*****************************************
        /* servicePromise.obterNegociacoesSemana()
            .then(negociacoes => {
                negociacoes.forEach(negociacao => {
                    this._listaNegociacoes.adiciona(negociacao);
                });
                this._mensagem.texto = 'Negociações da semana importadas com sucesso!'
            })
            .catch(erro => this._mensagem.texto = 'ERRO ao tentar importar negociações da semana!');

            servicePromise.obterNegociacoesSemanaAnterior()
                .then(negociacoes => {
                    negociacoes.forEach(negociacao => {
                        this._listaNegociacoes.adiciona(negociacao);
                    });
                    this._mensagem.texto = 'Negociações da semana anterior importadas com sucesso!'
                })
                .catch(erro => this._mensagem.texto = 'ERRO ao tentar importar negociações da semana anterior!');
                
            servicePromise.obterNegociacoesSemanaRetrasada()
                .then(negociacoes => {
                    negociacoes.forEach(negociacao => {
                        this._listaNegociacoes.adiciona(negociacao);
                    });
                        this._mensagem.texto = 'Negociações da semana retrasada importadas com sucesso!'
                    })
                .catch(erro => this._mensagem.texto = 'ERRO ao tentar importar negociações da semana retrasada!');
 */
        
//**************************Código INICIAL*****************************************
        /* service.obterNegociacoesSemana((err, negociacoes, metodo) => {
            if(err){
                this._mensagem.texto = err;
                return
            }

            negociacoes.forEach(negociacao => {
                console.log(negociacao);
                this._listaNegociacoes.adiciona(negociacao);
            });
            this._mensagem.texto = 'Negociações importadas com sucesso!';
        });

        service.obterNegociacoesSemanaAnterior((err, negociacoes, metodo) => {
            if(err){
                this._mensagem.texto = err;
                return
            }

            negociacoes.forEach(negociacao => {
                this._listaNegociacoes.adiciona(negociacao);
            });
            this._mensagem.texto = 'Negociações importadas com sucesso!';
        });

        service.obterNegociacoesSemanaRetrasada((err, negociacoes, metodo) => {
            if(err){
                this._mensagem.texto = err;
                return
            }

            negociacoes.forEach(negociacao => {
                this._listaNegociacoes.adiciona(negociacao);
            });
            this._mensagem.texto = 'Negociações importadas com sucesso!';
        }); */

    }

    adiciona(event) {
       event.preventDefault();

       //var dateHelper = new DateHelper(); //Teste de erro ao tentar instanciar essa classe
       //console.log(DateHelper.dataParaTexto(negociacao.data));
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        
        this._limpaFormulario();
        //this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociação adicionada com sucesso!';
    }

    _criaNegociacao(){
       let inputDataToDate = DateHelper.textoParaData(this._inputData.value);
       
       return new Negociacao(
            inputDataToDate,
            this._inputQuantidade.value, 
            this._inputValor.value
        );

        //Exemplo, caso quisesse encapsular um objeto negociação em um proxy
        //Nesse caso apenas as leituras dos atributos seriam interceptados
/* 
        let negociacaoEncapsuladaProxy = new Proxy(new Negociacao(
            inputDataToDate,
            this._inputQuantidade.value, 
            this._inputValor.value
        ), { //Aqui é implementado o que se pretende fazer:

            get: function (target, prop, receiver) {
                console.log(`${prop} intercepatada`);
                return Reflect.get(target, prop, receiver);                
            }
        });

        console.log(negociacaoEncapsuladaProxy.quantidade); // Ao tentar acessar um atributo, será apresentada uma mensagem
 */


    }

    _limpaFormulario(){
        this._inputData.value = ''
        this._inputQuantidade.value = '1'
        this._inputValor.value = '0.1'

        this._inputData.focus();
    }

    _mostrarView(){

        console.log(this._negociacoesView.template());

        this._negociacoesView.template(),referenceNode.nextElementSibling;
    } 

    apagaDadosTabela(){

        this._listaNegociacoes.esvazia();
        this._mensagem.texto = "Dados apagados!"
        //this._negociacoesView.update(this._listaNegociacoes);
    }
}

