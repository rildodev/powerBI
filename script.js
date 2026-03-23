// COLE AQUI O LINK DO SEU IFRAME DO POWER BI
const powerBIUrl = "COLE_AQUI_O_LINK_DO_POWER_BI";

// Carrega o iframe automaticamente
document.addEventListener("DOMContentLoaded", () => {
    const iframe = document.getElementById("powerbiFrame");

    if (powerBIUrl && powerBIUrl !== "COLE_AQUI_O_LINK_DO_POWER_BI") {
        iframe.src = powerBIUrl;
    } else {
        iframe.outerHTML = "<p style='text-align:center; padding:20px;'>⚠️ Insira o link do Power BI no arquivo script.js</p>";
    }
});
