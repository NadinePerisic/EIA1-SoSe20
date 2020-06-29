// Hilfestelungen bei der Aufgabe https://www.youtube.com/watch?v=b8sUhU_eq3g&feature=emb_title
// zudem Video Programmieren in TypeScript von Boris Cherny aus dem O'REILLY Verlag und das Buch Angular von Christoph Höller aus dem Rheinwerk Computing Verlag//
// Text einfügen und zählen der einzelnen ToDos
let taskcounter: number = 0;
window.addEventListener("load", function (): void {
    document.querySelector(".button1").addEventListener("click", AddTaskText);
    document.querySelector(".gesamt").addEventListener("click", AddTaskText);
});

function AddTaskText(): void {
    let newtask: any = document.querySelector(".newTask").value;
    addTaskToList(newtask);
    
    let element: Element = document.querySelector(".rahmen");
    let numberofChildren: number = element.children.length;
    taskcounter = numberofChildren;
    console.log("Die Anzahl der To-Dos lautet:" + numberofChildren);
    document.querySelector(".gesamt").innerHTML = numberofChildren + " in gesamt";
}
function addTaskToList(newTaskValue: any): void {
    let addElement: HTMLDivElement = document.createElement("div");
    addElement.setAttribute("class", "über");
    addElement.setAttribute("id", "TaskId" + taskcounter);
    let myHtmlTemplate: string = "";
    myHtmlTemplate += "<button onclick=\"CheckedButton(this)\" class=\"far fa-circle checkbox\" id=\"circle" + taskcounter + "\"></button>";
    myHtmlTemplate += "<input class=\"firsttask\" id=\"firsttask" + taskcounter + "\" value=\"" + newTaskValue + "\" ></input>";
    myHtmlTemplate += "<button onclick=\"DeleteTaskText(this)\" class=\"far fa-trash-alt trash\" id=\"delete" + taskcounter + "\"></button>";
    addElement.innerHTML = myHtmlTemplate;
    document.querySelector(".rahmen").appendChild(addElement);
}
function DeleteTaskText(clickedTrash: any): void {
    clickedTrash.parentElement.remove();
    taskcounter--;
    let element: Element = document.querySelector(".rahmen");
    let numberofChildren: number = element.children.length;
    document.querySelector(".gesamt").innerHTML = numberofChildren + " in gesamt";
}
function CheckedButton(clickedButton: any): void {
    if (clickedButton.classList.contains("fa-circle")) {
        clickedButton.classList.remove("fa-circle");
        clickedButton.classList.add("fa-check-circle");
    }
    else {
        clickedButton.classList.remove("fa-check-circle");
        clickedButton.classList.add("fa-circle");
    }
}