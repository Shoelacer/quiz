const create = document.getElementById("create");
const content = document.getElementById("content");
const header = document.getElementById("header");
const newq = document.getElementById("newq");
const questions = [];
class Question {
    constructor(question, A, B, C, D) {
        this.question = question;
        this.A = A;
        this.B = B;
        this.C = C;
        this.D = D;
    }
}
document.getElementById("new").onclick = function() { createQuiz() };


function createQuiz() {
    var title = prompt("Choose a title for your quiz: ");
    document.getElementById("title").innerHTML = title;
    create.style.display = "block";
    header.getElementsByTagName("button")[0].style.display = "none";
    header.getElementsByTagName("button")[1].style.display = "none";
}

function newQuestion() {
    var q = prompt("What is the question?");
    var A = prompt("Choice A: ");
    var B = prompt("Choice B: ");
    var C = prompt("Choice C: ");
    var D = prompt("Choice D: ");

    const question = new Question(q, A, B, C, D);
    questions.push(question);
    const displayQ = document.createElement("div");
    displayQ.className = "displayQ";
    displayQ.innerHTML = `
    <p class = "question">${q}</p>

    `;
    content.append(displayQ);
    content.append(document.createElement("br"));
    content.append(document.createElement("br"));
}

newq.onclick = function() { newQuestion(); }
