class DateHelper {

    constructor (){
        throw new Error("DateHelper não precisa ser instanciada!")
    }

    static textoParaData(texto){
        if(texto.trim().length > 10){
            texto = texto.substring(0 , 10);
        }
        
        //console.log("STEP 1: " + texto);

        let dataArray = texto.split("-").join(',');
        let data = new Date(dataArray);
       // console.log("STEP 2: " + data );
        return data; 
    }

    static dataParaTexto(data){
        function adicionaZero(numero){
            if (numero <= 9) 
                return "0" + numero;
            else
                return numero; 
        }    

        let dataFormatada =
             (adicionaZero(data.getDate().toString())
             + "/"
             + (adicionaZero(data.getMonth()+1).toString()) 
             + "/" 
             + data.getFullYear());

        return dataFormatada;

    }
}