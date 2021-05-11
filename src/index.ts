const onDragStart = (event: DragEvent) => {
    event.dataTransfer?.setData("text/plain", (event.target as Element).id);
    (event.currentTarget as HTMLElement).style.backgroundColor = "red";
};
const onDragOver = (event: Event) => {
    event.preventDefault();
};
const onDrop = (event: DragEvent) => {
    const id = event.dataTransfer?.getData("text/plain");
    if (id) {
        const draggableElement = document.getElementById(id);
        if (draggableElement) {
            const dropzone = event.target as HTMLElement;
            dropzone.appendChild(draggableElement);
            event.dataTransfer?.clearData();
        }
    }
};
const dragArea = document.getElementById("drag-demo");
if (dragArea) {
    dragArea.addEventListener("dragstart", onDragStart);
} else {
    throw new Error("dragArea not found");
}
const dropZone = document.getElementById("dropzone");
if (dropZone) {
    dropZone.addEventListener("dragover", onDragOver);
    dropZone.addEventListener("drop", onDrop);
} else {
    throw new Error("Dropzone not found");
}

// function allowDrop(ev) {
//     ev.preventDefault();
// }
//
// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// }
//
// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
// }

const allowDrop = (event : DragEvent) => {
    event.preventDefault();
}

const drag = (event : DragEvent) => {
    event.dataTransfer.setData("text", event.target.id);
}

const drop = (event : DragEvent) => {
    event.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
}