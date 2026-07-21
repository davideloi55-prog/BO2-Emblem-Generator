alert("JavaScript carregado!");

document.addEventListener("DOMContentLoaded", () => {

    const imageInput = document.getElementById("imageInput");
    const preview = document.getElementById("preview");
    const generateButton = document.getElementById("generateButton");
    const result = document.getElementById("result");

    imageInput.addEventListener("change", function(event){

        const file = event.target.files[0];

        if(!file){
            result.innerHTML = "❌ Nenhuma imagem selecionada.";
            return;
        }

        const reader = new FileReader();

        reader.onload = function(e){

            preview.src = e.target.result;
            preview.style.display = "block";

            result.innerHTML = "✅ Imagem carregada!";

        };

        reader.readAsDataURL(file);

    });

    generateButton.addEventListener("click", function(){

        if(preview.src === ""){
            result.innerHTML = "⚠️ Escolhe primeiro uma imagem.";
            return;
        }

        Analyzer.analyze(imageInput.files[0]);

result.innerHTML = "🧠 A analisar imagem...";
    });

});
