import {updateDump, getDumps} from "./scripts/operations.js";

$("#content").trumbowyg();

const titleField = document.getElementById("title");

const controlNewDump = document.getElementById("controlNewDump");
const controlSaveDump = document.getElementById("controlSaveDump");
const controlPrintDump = document.getElementById("controlPrintDump");

// Data
let dumps = []

// States
let currentSelected = undefined;

document.addEventListener("load", (event) => {
    dumps = getDumps();
    dumps.forEach(element => {
        $(".files").add("li").addClass("file").value(element.content);
    });
});

controlSaveDump.addEventListener("click", (event) => {
    updateDump(currentSelected.dump);
});

