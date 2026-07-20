document.addEventListener("DOMContentLoaded", () => {

    const imageButton = document.getElementById("imageButton");
    const imageInput = document.getElementById("imageInput");
    const preview = document.getElementById("preview");

    const generateButton = document.getElementById("generateButton");
    const result = document.getElementById("result");

    // Abrir a galeria quando clicares no botão
    imageButton.addEventListener("click", () => {
        imageInput.click();
    });

    // Mostrar a imagem escolhida
    imageInput.addEventListener("change", (event) => {

        const file = event.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function(e) {

            preview.src = e.target.result;
            preview.style.display = "block";

            result.innerHTML = "✅ Imagem carregada com sucesso!";

        };

        reader.readAsDataURL(file);

    });

    // Botão Gerar (temporário)
    generateButton.addEventListener("click", () => {

        result.innerHTML =
        "🚧 O gerador BO2 será implementado nas próximas versões.";

    });

});
