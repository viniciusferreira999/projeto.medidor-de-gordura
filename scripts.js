document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const sexo = document.getElementById("sexo");
    const quadril = document.getElementById("quadril");
    const extraMedidas = document.getElementById("extra-medidas");

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
        const quadrilValor = sexo.value === "feminino" ? parseFloat(quadril.value) : 0;
        
        let gordura;

        if (sexo.value === "masculino") {
            gordura = 86.010 * Math.log10(cintura - pescoco) - 70.041 * Math.log10(altura) + 36.76;
        } else {
            gordura = 163.205 * Math.log10(cintura + quadrilValor - pescoco) - 97.684 * Math.log10(altura) - 78.387;
        }

        gordura = gordura.toFixed(2); // Arredonda para 2 casas decimais

        document.getElementById("resultado").innerHTML = `Sua gordura corporal é aproximadamente <strong>${gordura}%</strong>.`;
    });
});
