class NegociacoesView extends View{
    
    constructor(elemento){
        super(elemento);
    }
    
        _template(negociacoes){
            return `
                    <table class="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>DATA</th>
                                <th>QUANTIDADE</th>
                                <th>VALOR</th>
                                <th>VOLUME</th>
                            </tr>
                        </thead>
                        
                        <tbody >
                                ${negociacoes.negociacoes.map(function (n) {
                                    return `
                                        <tr>
                                            <td>${DateHelper.dataParaTexto(n.data)}</td>
                                            <td>${n.quantidade}</td>
                                            <td>${n.valor}</td>
                                            <td>${n.volume.toFixed(2)}</td>
                                        </tr>
                                    `
                                }).join('')}
                        </tbody>
                        
                        <tfoot>
                                <td colspan="3" id="tfoot"></td>
                                <td>
                                    ${this.volumeTotal(negociacoes.negociacoes).toFixed(2)}
                                </td>
                        </tfoot>
                    </table> `
        }

        

        volumeTotal(negociacoes){
            var volumeT = 0;


            negociacoes.forEach(function (n) {
                volumeT = (volumeT + n.volume);
            });
            return volumeT;
        }

}