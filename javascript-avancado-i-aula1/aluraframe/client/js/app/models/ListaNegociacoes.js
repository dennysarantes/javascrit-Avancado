class ListaNegociacoes{

    constructor () {
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        //Esse retorno é só para impedir que a lista de negociações seja manipulada em outro lugar
        return [].concat(this._negociacoes);
    }

    esvazia(){
        this._negociacoes = [];
    }

}