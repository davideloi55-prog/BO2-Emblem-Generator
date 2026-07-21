const Analyzer = {

    analyze(file){

        Debug.log("🧠 Analyzer iniciado");

        const imageData = {

            name: file.name,

            type: file.type,

            size: file.size,

            width: 0,

            height: 0,

            colors: [],

            objects: [],

            background: null

        };

        Debug.log("📄 Nome: " + imageData.name);

        Debug.log("🗂 Tipo: " + imageData.type);

        Debug.log("💾 Tamanho: " + Math.round(imageData.size / 1024) + " KB");

        return imageData;

    }

};
