const Debug = {

    panel: null,

    init() {

        this.panel = document.getElementById("debugPanel");

        this.log("🟢 Debug iniciado");

    },

    const Debug = {

    panel: null,

    init() {

        this.panel = document.getElementById("debugPanel");

        this.log("🟢 Debug iniciado");

    },

    log(message) {

        if (!this.panel) return;

        this.panel.innerHTML += "<br>" + message;

    }

};

document.addEventListener("DOMContentLoaded", () => {

    Debug.init();

});
    }

};

document.addEventListener("DOMContentLoaded", () => {

    Debug.init();

});
