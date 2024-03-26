const answers = document.querySelectorAll("p")

function showAnswer(img, answerIndex) {
    if(img.src.endsWith("assets/images/icon-plus.svg")) {
        answers[answerIndex].classList.remove("hidden")
        answers[answerIndex].classList.add("answer");
        img.src = "assets/images/icon-minus.svg"
    }else{
        answers[answerIndex].classList.remove("answer")
        answers[answerIndex].classList.add("hidden")
        img.src = "assets/images/icon-plus.svg"
        
    }
}
