var campos = document.querySelectorAll(".form-control");
var bTable = document.querySelector("tbody")


document.querySelector(".form").addEventListener("submit", function(event){
    event.preventDefault();
    trNovaLinha = document.createElement("tr");

    campos.forEach( function (c, i) {
        var tdNovaCelula = document.createElement("td");
        tdNovaCelula.textContent = campos[i].value
        trNovaLinha.appendChild(tdNovaCelula);
    })

    var tdVolume = document.createElement("td");
    tdVolume.textContent = campos[1].value * campos[2].value;
    trNovaLinha.appendChild(tdVolume);

    bTable.appendChild(trNovaLinha)

    campos[0].value = "";
    campos[1].value = 1;
    campos[2].value = 0;
    
    campos[0].focus();

});


