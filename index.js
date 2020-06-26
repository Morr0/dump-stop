import {updateDump, updateDumps, getDumps} from "./scripts/operations.js";
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

// For debugging
window.system = {
    dumps,
    currentSelected,
};

// On load
$(window).on("load", () => {
    dumps = getDumps();
    refreshDumps();
});

// Unload
$(window).on("beforeunload", () => {
    updateDumps(dumps);
});

// Title change
titleField.on("input", () => {
    this.currentSelected.title = titleField.text();
});

// New dump
controlNewDump.on("click", () => {
    console.log("New lcik");
    let dump = Dump;
    dumps.push(dump);
    setSelected(dump);
    refreshDumps();
});

controlSaveDump.on("on", () => {
    console.log("Save lcik");
});


function contentChanged(){
    console.log("Called");
    setSaved(false);
}  

function setSelected(dump){
    currentSelected = dump;
    $('#content').trumbowyg('html', dump.content);
}

function refreshDumps(){
    files.empty();
    files.append(`
    <li class="file" id="control">
        <button type="button" id="controlNewDump">New</button>
        <button type="button" id="controlSaveDump" disabled>Save</button>
    </li>`);
    dumps.forEach(element => {
        files.append(`<li class="file">${element.title}</li>`);
    });
}



