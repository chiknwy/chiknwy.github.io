function calculateFibonacci() {
    const n = parseInt(document.getElementById("fibonacci-input").value);
    if (!isNaN(n) && n >= 0) {
        const result = fibonacci(n);
        document.getElementById("fibonacci-result").textContent = result;
    } else {
        alert("Masukkan angka positif.");
    }
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function calculateVolume() {
    const selectedShape = document.getElementById("shape-select").value;
    const kubusSide = parseFloat(document.getElementById("kubus-side").value);
    const bolaRadius = parseFloat(document.getElementById("bola-radius").value);

    if (selectedShape === "kubus" && !isNaN(kubusSide) && kubusSide >= 0) {
        const volume = kubusSide ** 3;
        document.getElementById("volume-result").textContent = `Volume Kubus: ${volume.toFixed(2)}`;
    } else if (selectedShape === "bola" && !isNaN(bolaRadius) && bolaRadius >= 0) {
        const volume = (4 / 3) * Math.PI * (bolaRadius ** 3);
        document.getElementById("volume-result").textContent = `Volume Bola: ${volume.toFixed(2)}`;
    } else {
        alert("Masukkan angka positif.");
    }
}

document.getElementById("shape-select").addEventListener("change", function () {
    const selectedShape = this.value;
    if (selectedShape === "kubus") {
        document.getElementById("kubus-form").style.display = "block";
        document.getElementById("bola-form").style.display = "none";
    } else if (selectedShape === "bola") {
        document.getElementById("kubus-form").style.display = "none";
        document.getElementById("bola-form").style.display = "block";
    }
});
