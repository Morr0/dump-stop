import {updateDump, updateDumps, getDumps} from "./scripts/operations.js";
import {Dump} from "./dump.js";

const titleField = $("#title");
const controlNewDump = $("#controlNewDump");

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
// $(window).on("load", () => {
//     console.log("Load");
//     dumps = getDumps();
//     refreshDumps();
// });

// window.addEventListener("load", () => {
//     console.log("Load");
//     dumps = getDumps();
//     refreshDumps();
// });

// Unload
$(window).on("beforeunload", () => {
    updateDumps(dumps);
});

// Title change
titleField.bind("input", () => {
    console.log(titleField.text());
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

function setSelected(dump){
    if (!currentSelected){
        $("#content").trumbowyg().on("tbwchange", contentChanged);
    }

    currentSelected = dump;
    $('#content').trumbowyg('html', dump.content);
}

function refreshDumps(){
    files.empty();
    files.append(`
    <li class="file" id="control">
        <button type="button" id="controlNewDump">New</button>
    </li>`);

    dumps.forEach(element => {
        files.append(`<li class="file">${element.title}</li>`);
    });
}


function contentChanged(){
    currentSelected.content = $('#content').trumbowyg('html');
    console.log("Content changed");
}


