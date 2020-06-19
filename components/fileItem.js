class FileItem extends HTMLElement {
    constructor (){
        super();
        // this.classList.add("file");
        console.log(this.classList);

        document.rrr = this;
    }
}

window.customElements.define("file-item", FileItem);