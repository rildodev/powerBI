// Simulação de navegação ativa
const itens = document.querySelectorAll(".sidebar li");

itens.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        item.classList.add("active");
    });
});