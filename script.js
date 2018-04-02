var name = document.getElementById('InputName').value;
var pass = document.getElementById('InputPassword').value;

function validate() {
    var name = document.getElementById('InputName').value;
    var pass = document.getElementById('InputPassword').value;
     if (name !== "" && pass === "oreo") {
          window.location.href = "quiz.html";
          return false;
      }

      else if (name !== "" && pass !== "oreo") {
        alert('Incorrect password');
      }
      return false;
  }

// function quizValidate() {
    
//     console.log(name);
    
//     document.getElementById('welcome').innerHTML += name;

//     console.log('howdy');
    


// }

    
