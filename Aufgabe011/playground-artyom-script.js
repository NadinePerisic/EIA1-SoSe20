"use strict";
var aufgabe11;
(function (aufgabe11) {
    window.addEventListener("load", function () {
        const artyom = new Artyom();
        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i, wildcard) {
                console.log("ToDo wird erstellt: " + wildcard);
                todos.unshift({
                    text: wildcard,
                    ListChecked: false
                });
                drawListToDOM();
            }
        });
        function startContinuousArtyom() {
            artyom.fatality();
            setTimeout(function () {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function () {
                    console.log("Bereit");
                });
            }, 250);
        }
        startContinuousArtyom();
    });
})(aufgabe11 || (aufgabe11 = {}));
//# sourceMappingURL=playground-artyom-script.js.map