const create = document.getElementById("create");
const content = document.getElementById("content")

document.getElementById("new").onclick = function() { title() };


function title() {
    var title = prompt("Choose a title for your quiz: ");
    document.getElementById("title").innerHTML = title;
    create.style.display = "block";
    document.getElementById("header").childNodes[1].style.display = "none";
    document.getElementById("header").lastElementChild.style.display = "none";
}