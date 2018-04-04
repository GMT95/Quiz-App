score = {
    value: 0
};



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

var question3 = new Question(
    "Q3: Valid Variable in JavaScript?",
    "$123",
    undefined,
    ["123","1abc","$123"]
);


var question4 = new Question(
    "Q4: JavaScript is designed by?",
    "Brendan Eich",
    undefined,
    ["Linus Torvalds","Dennis Ritche","Brendan Eich"]
);

var question5 = new Question(
    "Q5: Who makes the Web Standards?",
    "The World Wide Web Consortium",
    undefined,
    ["The World Wide Web Consortium","Mozilla Developer Network","Google"]
);

var question6 = new Question(
    "Q6: The Correct HTML for the largest heading?",
    "h1",
    undefined,
    ["h5","h6","h1"]
);

var question7 = new Question(
    "Q7: The Correct tag for referring to external CSS?",
    "link",
    undefined,
    ["style","link","script"]
);


var question8 = new Question(
    "Q8: Correct CSS property for changing color of some text?",
    "color",
    undefined,
    ["color","text-color","background-color"]
);

var question9 = new Question(
    "Q9: How do you create a function in JavaScript?",
    "function myFunction()",
    undefined,
    ["function myFunction()","function: myFunction()","function = myFunction"]
);

var question10 = new Question(
    "Q10: How does a While loop start in JavaScript?",
    "while(i <= 10)",
    undefined,
    ["while i = 1 to 10","while(i <= 10;i++)","while(i <= 10)"]
);






var questionArray = [question1,question2,question3,question4,question5,question6,question7,question8,
                    question9,question10];


document.getElementById('question').innerHTML = questionArray[0].question;
document.getElementById('option1').innerHTML = questionArray[0].answer[0];
document.getElementById('option2').innerHTML = questionArray[0].answer[1];
document.getElementById('option3').innerHTML = questionArray[0].answer[2];

//console.log(document.getElementById('exampleRadios1').checked)
var x = 0;
//var percentage =  (score.value/(questionArray.length * 10) * 100);
//var scoreElement = document.getElementById('scoreh1').innerHTML;

function display() {
    if (x === (questionArray.length - 1)){
        //console.log("else wala"+x);
        
        //window.location.href = "result.html";
        result();
        return false;
    }

    else {
    document.getElementById('question').innerHTML = questionArray[x+1].question;
    document.getElementById('option1').innerHTML = questionArray[x+1].answer[0];
    document.getElementById('option1').setAttribute('checked','false');
    document.getElementById('option2').innerHTML = questionArray[x+1].answer[1];
    document.getElementById('option2').setAttribute('checked','false');
    document.getElementById('option3').innerHTML = questionArray[x+1].answer[2];
    document.getElementById('option3').setAttribute('checked','false');
    x++;
    //console.log(questionArray.length);
    
    //console.log("if wala"+x);
    return false;
    }
    

   
}

function next() {
    
    if(document.getElementById('exampleRadios1').checked === true) {
        questionArray[x].stdAns = document.getElementById('option1').innerHTML;
        console.log(questionArray[x].stdAns);
        console.log(questionArray[x]);
        updateScore();
        
    }
    else if(document.getElementById('exampleRadios2').checked === true) {
        questionArray[x].stdAns = document.getElementById('option2').innerHTML;
        console.log(questionArray[x].stdAns);
        console.log(questionArray[x]);
        updateScore();
        
    }
    else {
        questionArray[x].stdAns = document.getElementById('option3').innerHTML;
        console.log(questionArray[x].stdAns);
        console.log(questionArray[x]);
        updateScore();
        
    }
}

function updateScore() {
    if(questionArray[x].stdAns === questionArray[x].correctAns) {
        score.value += 10;
        console.log(score.value);
        return score.value;
        
        
    }
    else {
        console.log(score.value);
        return score.value;
        
        
    }
}

if (window.location.href === 'result.html') {
    scoreElement += score;
    console.log(score);
    
}

function result() {
    document.getElementById('question').innerHTML = "";
    document.getElementById('form').innerHTML = "";
    document.getElementById('form').className = "";
    document.getElementById('question').className = "";
    var resultDiv = document.createElement('div');
    resultDiv.className = "col-md-4";
    resultDiv.className += " offset-md-4";
    resultDiv.className += " alert";
    resultDiv.className += " alert-primary";
    // resultDiv.setAttribute('class','col-md-4');
    // resultDiv.setAttribute('class','offset-md-4');
    // resultDiv.setAttribute('class','alert');
    // resultDiv.setAttribute('class','alert-primary');
    // resultDiv.setAttribute('role','alert');
    var scoreHeading = document.createElement('h1');
    scoreHeading.innerHTML = "Your Score";
    scoreHeading.innerHTML += (" " + (score.value/(questionArray.length * 10) * 100).toFixed(2) + " %");
    resultDiv.appendChild(scoreHeading);
    var mainDiv = document.getElementById('rowdiv');
    mainDiv.appendChild(resultDiv);


}