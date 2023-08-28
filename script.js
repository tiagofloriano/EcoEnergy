$(document).ready(function () {
    const windmill = document.getElementById("windmill");
    const battery = document.getElementById("battery");
    let rotationAngle = 0;
    let rotations = 0;
    $("#vento").fadeOut(1);
    setInterval(consumo, 3000);
    setInterval(cargaSolar, 1000);

    function rotateWindmill() {
        rotationAngle += 720; // 360 graus para uma rotação completa
        windmill.style.transform = `rotate(${rotationAngle}deg)`;
        rotations++;
        battery.textContent = `${rotations} W`;
    }

    function consumo() {
        if (rotations > 0) {
            rotations = rotations - 1;
            $("#battery").text(rotations + " W");
            $(".house span").show();
            $(".house span").fadeOut(2000);
        }
    }

    function cargaSolar() {
        if ($("#statusSolar").val() == 1) {
            rotations = rotations + 1;
            $("#battery").text(rotations + " W");
        }
    }

    document.addEventListener("click", function () {
        rotateWindmill();
        $("#vento").fadeIn();
        $("#vento").fadeOut(5000);
    });
});

function addSolarPanel() {
    var cargatexto = $("#battery").text();
    var separacarga = cargatexto.split(" W");
    var carga = parseInt(separacarga, 10);
    if (carga < 50) {
        alert("Voce precisa ter 50 W para adicionar placas solares!");
    } else {
        $("#solarpanel").attr("class", "solarpanel");
        $('#btnAddSolar').hide();
        $('#statusSolar').val('1');
    }
}