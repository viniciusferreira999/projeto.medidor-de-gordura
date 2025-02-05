document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const sexo = document.getElementById("sexo");
    const quadril = document.getElementById("quadril");
    const extraMedidas = document.getElementById("extra-medidas");
    const idade = document.getElementById('idade')
    
    // Exibir campo do quadril apenas para mulheres
    sexo.addEventListener("change", function () {
        if (sexo.value === "feminino") {
            extraMedidas.style.display = "block";
        } else {
            extraMedidas.style.display = "none";
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const peso = parseFloat(document.getElementById("peso").value);
        const altura = parseFloat(document.getElementById("altura").value);
        const cintura = parseFloat(document.getElementById("cintura").value);
        const pescoco = parseFloat(document.getElementById("pescoco").value);
        const idade = parseFloat(document.getElementById("idade").value);
        const quadrilValor = sexo.value === "feminino" ? parseFloat(quadril.value) : 0;
        
        let gordura;

        if (sexo.value === "masculino") {
            gordura = 86.010 * Math.log10(cintura - pescoco) - 70.041 * Math.log10(altura) + 36.76;
        } else {
            gordura = 163.205 * Math.log10(cintura + quadrilValor - pescoco) - 97.684 * Math.log10(altura) - 78.387;
        }
        
        
        gordura += (idade * 0.1); 
        
        gordura = gordura.toFixed(2); 
        
        document.getElementById("resultado-texto").innerHTML = `Sua gordura corporal é aproximadamente <strong>${gordura}%</strong>.`;

    // Atualiza a largura da barra com base no percentual
    const barra = document.getElementById("barra-progresso");
    barra.style.width = `${gordura}%`;

    
    if (gordura < 15) {
    barra.style.backgroundColor = "#4caf50"; // Verde (baixo)
    } else if (gordura < 25) {
    barra.style.backgroundColor = "#ff9800"; // Laranja (médio)
    }   else {
    barra.style.backgroundColor = "#f44336"; // Vermelho (alto)
    }

    });
});

