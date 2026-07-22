// ===============================
// YHANZ TOPUP V1
// ===============================

let selectedGame = "";
let selectedNominal = "";

function pilihGame(game) {
    selectedGame = game;
    alert("Game dipilih: " + game);
}

function pilihNominal(nominal) {
    selectedNominal = nominal;
    alert("Nominal dipilih: " + nominal);
}

function beliSekarang() {

    const userId = document.getElementById("userid").value;
    const zoneId = document.getElementById("zoneid").value;

    if(userId==""){
        alert("Masukkan User ID");
        return;
    }

    if(selectedGame==""){
        alert("Pilih Game");
        return;
    }

    if(selectedNominal==""){
        alert("Pilih Nominal");
        return;
    }

    alert(
`========================
YHANZ TOPUP

Game : ${selectedGame}

User ID : ${userId}

Zone ID : ${zoneId}

Nominal : ${selectedNominal}

Terima kasih sudah order.
========================`
);

}
