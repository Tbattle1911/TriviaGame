function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var correct = 0;

if (question1 == "Blue") {
    correct++;
}
if (question2 == "Yellow") {
    correct++;
}
if (question3 == "Orange") {
    correct++;
}
if (question4 == "Green") {
    correct++;
}

var messages = [ "Great Job", "Thats Just Okay", "You need to do better"];

var range;

    if (correct<1) {
        range = 3;
    }

    if (correct > 0 && correct < 4) {
        range = 1;
    }

    if (correct > 3) {
        range = 0;
    }

 document.getElementById("after_submit").style.visibility = "visible";
    
document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

}













       

   
    