export function getDumps(){
    const data = localStorage.getItem("dumps");
    if (!data) return null;

    let dumps = JSON.parse(data);
    if (!Array.isArray(dumps)){ // This is to fix returning an {} instead of []
        dumps = [dumps];
    }
    return dumps;
}

// export function updateDump(dump){
//     const data = localStorage.getItem("dumps");

//     let dumps = !data? []: JSON.parse(data);

//     // Create the dump's id
//     if (!dump.id) dump.id = uuidv1();

//     // Append and store
//     dumps.push(dump);
//     localStorage.setItem("dumps", JSON.stringify(dumps));
// }

export function updateDumps(dumps){
    const data = JSON.stringify(dumps);
    localStorage.setItem("dumps", data);
}