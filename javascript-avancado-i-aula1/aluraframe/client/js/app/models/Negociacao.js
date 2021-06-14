class Negociacao {

    constructor( dt, qtd, v){
        /* this.data = new Date();
        this.quantidade = 1;
        this.valor = 0.0; */
        this._data = new Date(dt.getTime());
        this._quantidade = qtd;
        this._valor = v;

        Object.freeze(this); //Esta linha é utilizada para que a instância 
                                //dessa classe não possa ser modificada.
    };
    get data(){
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
     }

}