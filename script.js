document.addEventListener("DOMContentLoaded", function () {
    const accessibilityBtn = document.getElementById("accessibility-btn");
    const accessibilityOptions = document.getElementById("accessibility-options");

    // Função para mostrar o menu de acessibilidade
    function showMenu() {
        accessibilityOptions.classList.remove("hidden");
        setTimeout(() => accessibilityOptions.classList.add("show"), 10);
    }

    // Função para esconder o menu de acessibilidade
    function hideMenu() {
        accessibilityOptions.classList.remove("show");
        setTimeout(() => accessibilityOptions.classList.add("hidden"), 300);
    }

    // Exibir menu ao clicar ou passar o mouse
    accessibilityBtn.addEventListener("mouseover", showMenu);
    accessibilityBtn.addEventListener("click", showMenu);

    // Esconder menu ao retirar o mouse
    accessibilityOptions.addEventListener("mouseleave", hideMenu);

    // Função para aumentar a fonte
    document.getElementById("increase-font").addEventListener("click", function () {
        document.body.style.fontSize = "larger";
    });

    // Função para diminuir a fonte
    document.getElementById("decrease-font").addEventListener("click", function () {
        document.body.style.fontSize = "smaller";
    });

    // Alternar alto contraste
    document.getElementById("contrast-toggle").addEventListener("click", function () {
        document.body.classList.toggle("high-contrast");
    });

    // Alternar modo para daltônicos
    document.getElementById("colorblind-mode").addEventListener("click", function () {
        document.body.classList.toggle("colorblind-mode");
    });

    // Alternar modo disléxico
    document.getElementById("dyslexia-mode").addEventListener("click", function () {
        document.body.classList.toggle("dyslexia-mode");
    });
});
