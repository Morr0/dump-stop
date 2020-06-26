import {updateDump, getDumps} from "./scripts/operations.js";
import reactive from "./utils/reactive.js";

$("#content").trumbowyg().on("tbwchange", contentChanged);

const titleField = document.getElementById("title");

const controlNewDump = document.getElementById("controlNewDump");
const controlSaveDump = document.getElementById("controlSaveDump");
const controlPrintDump = document.getElementById("controlPrintDump");

const contentField = document.getElementById("content");

// Data
let dumps = []

// States
let currentSelected = undefined;
let saved = new reactive(true, false);

// On load
document.addEventListener("load", (event) => {
    dumps = getDumps();
    dumps.forEach(element => {
        $(".files").add("li").addClass("file").value(element.content);
    });

    saved.addSubscriber(() => {
        controlSaveDump.hidden = false;
    });
});





controlSaveDump.addEventListener("click", (event) => {
    updateDump(currentSelected.dump);
    saved.value = true;
});


function contentChanged(event){
    saved.value = false;
}   



