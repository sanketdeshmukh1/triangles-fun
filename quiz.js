const form = document.querySelector(".form-class")
const submit = document.querySelector(".submit-class")
const ans = document.querySelector(".answer")
const answer = ["3", "90"];

submit.addEventListener("click", validatescore);

function validatescore() {
    const newform = new FormData(form);
    var score = 0;
    var index = 0;
    for (let value of newform.values()) {
        if (value == answer[index]) {
            score++;

        } //if

        index++;
    } //for
 ans.innerText="Your score is "+score;

}