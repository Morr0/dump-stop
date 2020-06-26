import {updateDump, updateDumps, getDumps} from "./scripts/operations.js";
import {Dump} from "./dump.js";

const titleField = $("#title");
const controlNewDump = $("#controlNewDump");

const files = $(".files");

// Data
let dumps = [] // Here is where data should after being buffered from newDumps
let newDumps = []; // This is a buffer to enter dumps[] so it does not reload the entire thing

// States
let currentSelected = undefined;

// For debugging
window.system = {
    dumps,
    newDumps,
    currentSelected,
};

// On load
$(window).on("load", () => {
    console.log("Load");
    newDumps = getDumps();
    refreshDumps();
});

// Unload
$(window).on("beforeunload", () => {
    updateDumps(dumps);
});

// Title change
titleField.on("input", () => {
    console.log(titleField.text());
    this.currentSelected.title = titleField.text();
});

// New dump
controlNewDump.on("click", () => {
    console.log("New lcik");
    let dump = Dump;
    newDumps.push(dump);
    setSelected(dump);
    refreshDumps();
});

function setSelected(dump){
    if (!currentSelected){
        $("#content").trumbowyg().on("tbwchange", contentChanged);
    }

    currentSelected = dump;
    titleField.text(dump.title);
    $('#content').trumbowyg('html', dump.content);
}

function refreshDumps(){
    // files.empty();
    // files.append(`
    // <li class="file" id="control">
    //             <button type="button" id="controlNewDump">New</button>
    //         </li>`);

    newDumps.forEach(element => {
        files.append(`<li class="file">${element.title}</li>`);
        dumps.push(element);
    });
    newDumps = [];
}


function contentChanged(){
    currentSelected.content = $('#content').trumbowyg('html');
    console.log("Content changed");
}


