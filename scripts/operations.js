// import {uuidv1} from "https://cdnjs.cloudflare.com/ajax/libs/uuid/8.1.0/uuidv4.min.js";

export function getDumps(){
    const data = localStorage.getItem("dumps");
    if (!data) return null;

    const dumps = JSON.parse(data);
    return dumps;
}

export function updateDump(dump){
    const data = localStorage.getItem("dumps");

    let dumps = !data? []: JSON.parse(data);

    // Create the dump's id
    if (!dump.id) dump.id = uuidv1();

    // Append and store
    dumps.push(dump);
    localStorage.setItem("dumps", JSON.stringify(dumps));
}

export function updateDumps(dumps){
    const data = JSON.stringify(dumps);
    localStorage.setItem("dumps", data);
}