class ProxyFactorty {

    static create(objeto, props, acao){
            return  new Proxy(objeto, {

            get(target, prop, receiver) {
                if(props.includes(prop) && ProxyFactorty._ehFuncao(target[prop])){
                    return function () {
                        
                        console.log(`Interceptando ${prop}`);
                        
                        let retorno =  Reflect.apply(target[prop], target, arguments);
                         acao(target);
                         return retorno;
                        //Ação = self._negociacoesView.update(target);
                    }
                }

                return Reflect.get(target, prop, receiver);
            },

            set(target, prop, value, receiver){
               
                if(props.includes(prop)){
                    target[prop] = value;
                    acao(target);
                }
               
                return Reflect.set(target, prop, value, receiver);
            }
        });
        
    }

    static _ehFuncao(func){
        
        return typeof(func) == typeof(Function);
    }


}