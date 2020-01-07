function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("element", e.target.id);
}

function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("element");
    e.target.appendChild(document.getElementById(data));
}
