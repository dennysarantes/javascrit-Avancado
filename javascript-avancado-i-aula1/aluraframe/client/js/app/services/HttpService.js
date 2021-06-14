class HtppService {

    get(url) {

        return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
        
                xhr.open('get', url);
        
                xhr.onreadystatechange = () =>{
        
                if(xhr.readyState == 4){
        
                    if(xhr.status == 200){
                        console.log("CÓDIGO 200 XXXXXXXXXXXXXXXXXXXXXXXX")
                       return resolve(JSON.parse(xhr.responseText));                     
                    }else {
                        reject(xhr.responseText);
                }
            }
        };
            xhr.send();
        });
    }

}