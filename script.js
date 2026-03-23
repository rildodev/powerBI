// COLE AQUI O LINK DO SEU IFRAME DO POWER BI
const powerBIUrl = "Chttps://app.powerbi.com/reportEmbed?reportId=97fb9fcc-1ffc-4f03-bece-22ed5fd0695d&autoAuth=true&ctid=312c3d0e-5d88-41b0-a404-437115eb5a9c";

// Carrega o iframe automaticamente
document.addEventListener("DOMContentLoaded", () => {
    const iframe = document.getElementById("powerbiFrame");

    if (powerBIUrl && powerBIUrl !== "https://app.powerbi.com/reportEmbed?reportId=97fb9fcc-1ffc-4f03-bece-22ed5fd0695d&autoAuth=true&ctid=312c3d0e-5d88-41b0-a404-437115eb5a9c") {
        iframe.src = powerBIUrl;
    } else {
        iframe.outerHTML = "<p style='text-align:center; padding:20px;'>⚠️ Insira o link do Power BI no arquivo script.js</p>";
    }
});
