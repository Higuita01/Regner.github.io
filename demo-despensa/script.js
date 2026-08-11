const HORARIOS = {
    0: { abierto: "9:00", cerrado: "13:00" },
    1: { abierto: "8:00", cerrado: "21:00" },
    2: { abierto: "8:00", cerrado: "21:00" },
    3: { abierto: "8:00", cerrado: "21:00" },
    4: { abierto: "8:00", cerrado: "21:00" },
    5: { abierto: "8:00", cerrado: "21:00" },
    6: { abierto: "8:00", cerrado: "21:00" }
};

function enHorario(horario, ahora) {
    if (!horario) return false;
    const [hAbierto, mAbierto] = horario.abierto.split(":").map(Number);
    const [hCerrado, mCerrado] = horario.cerrado.split(":").map(Number);
    const ahoraMin = ahora.getHours() * 60 + ahora.getMinutes();
    return ahoraMin >= hAbierto * 60 + mAbierto && ahoraMin <= hCerrado * 60 + mCerrado;
}

function actualizarStatus() {
    const badge = document.getElementById("status-badge");
    const ahora = new Date();
    const horario = HORARIOS[ahora.getDay()];

    if (enHorario(horario, ahora)) {
        badge.textContent = "Abierto ahora";
        badge.style.background = "#ffb400";
        badge.style.color = "#2d2a26";
    } else {
        badge.textContent = "Cerrado";
        badge.style.background = "#e63946";
        badge.style.color = "#fff";
    }
}

actualizarStatus();
