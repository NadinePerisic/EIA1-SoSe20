namespace aufgabe11 {
    declare var Artyom: any;
    
    window.addEventListener("load", function(): void {
        const artyom: any = new Artyom();
        
        artyom.addCommands({
            indexes: ["Erstelle Aufgabe *"],
            smart: true,
            action: function(i: any, wildcard: string): void {
                console.log("Neues ToDo wird erstellt: " + wildcard);
    
                todos.unshift({
                    text: wildcard,
                    ListChecked: false
                });
                drawListToDOM();
            }
        });
        
        function startContinuousArtyom(): void {
            artyom.fatality();
        
            setTimeout(
                function(): void {
                    artyom.initialize({
                        lang: "de-DE",
                        continuous: true,
                        listen: true,
                        interimResults: true,
                        debug: true
                    }).then(function(): void {
                        console.log("Ready!");
                    });
                }, 
                250);
        }
        
        startContinuousArtyom();
        
    });
    
    }