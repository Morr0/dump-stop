import {updateDump, getDumps} from "./scripts/operations.js";
import {Dump} from "./dump.js";

$("#content").trumbowyg().on("tbwchange", contentChanged);

const titleField = $("#title");
const controlNewDump = $("#controlNewDump");
const controlSaveDump = $("#controlSaveDump");

const files = $(".files");

// Data
let dumps = []

// States
let currentSelected = undefined;
let saved = true; // Use it in setSaved()

// For debugging
window.system = {
    dumps,
    currentSelected,
    saved,
};

// On load
document.addEventListener("load", (event) => {
    dumps = getDumps();
    refreshDumps();
});

// Title change
titleField.bind("input", () => {
    this.currentSelected.title = titleField.text();
});

// New dump
controlNewDump.bind("click", () => {
    console.log("New lcik");
    let dump = Dump;
    dumps.push(dump);
    setSelected(dump);
    refreshDumps();
});

controlSaveDump.bind("on", () => {
    console.log("Save lcik");
    saveCurrent();
});


function contentChanged(){
    console.log("Called");
    setSaved(false);
}  

function setSelected(dump){
    currentSelected = dump;
    $('#content').trumbowyg('html', dump.content);
}

function saveCurrent(){
    updateDump(currentSelected);
    setSaved(true);
}

function refreshDumps(){
    dumps.forEach(element => {
        // files.append("li").addClass("file").text(element.title);
        files.append(`<li class="file">${element.title}</li>`);
    });
}

// Sets internal state only
function setSaved(_saved){
    saved = _saved;

    if (saved){
        controlSaveDump.attr("disabled", true);
    } else {
        controlSaveDump.attr("disabled", false);
        // controlSaveDump.enab = false;
    }

}



