function Question(question,correctAns,stdAns,answer) {
    this.question = question;
    this.correctAns = correctAns;
    this.stdAns = stdAns;
    this.answer = answer;
}

var question1 = new Question(
    "Q1: CSS Stands for ?",
    "Cascading Style Sheet",
    undefined,
    ["Cascading Style Sheet","Carousel Style Sheet","Cascading Style Script"]
);

var question2 = new Question(
    "Q2: HTML Stands for ?",
    "Hyper Text Markup Language",
    undefined,
    ["Hyper Text Modeling Language","Hyper Text Markup Language","Hyper Type Manipulation Language"]
);


var questionArray = [question1,question2];


document.getElementById('question').innerHTML = questionArray[0].question;
document.getElementById('option1').innerHTML = questionArray[0].answer[0];
document.getElementById('option2').innerHTML = questionArray[0].answer[1];
document.getElementById('option3').innerHTML = questionArray[0].answer[2];

//console.log(document.getElementById('exampleRadios1').checked)

function next() {
    var i = 0
    if(document.getElementById('exampleRadios1').checked === true) {
        questionArray[i].stdAns = document.getElementById('option1').innerHTML;
        console.log(questionArray[i].stdAns);
        console.log(questionArray[i]);
        
    }
    else if(document.getElementById('exampleRadios2').checked === true) {
        questionArray[i].stdAns = document.getElementById('option2').innerHTML;
        console.log(questionArray[i].stdAns);
        console.log(questionArray[i]);
        
    }
    else {
        questionArray[i].stdAns = document.getElementById('option3').innerHTML;
        console.log(questionArray[i].stdAns);
        console.log(questionArray[i]);
        
    }
}