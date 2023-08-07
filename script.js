$(document).ready(function () {
    const windmill = document.getElementById("windmill");
    const battery = document.getElementById("battery");
    let rotationAngle = 0;
    let rotations = 0;

    function rotateWindmill() {
        rotationAngle += 720; // 360 graus para uma rotação completa
        windmill.style.transform = `rotate(${rotationAngle}deg)`;
        rotations++;
        battery.textContent = `${rotations} W`;
    }

    document.addEventListener("click", function () {
        rotateWindmill();
    });
});
