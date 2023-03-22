let score = 0;
incorrect = 0;
skip_times = 0;

allColor = ["blue", "green", "orange", "red", "yellow", "white"];
randomColor = Math.floor(Math.random() * allColor.length);
randomColor1 = randomColor+3;

// q = question, ques = questions
q1 = "Who discovered gravitational force ?";
q2 = "Who discovered \"Theory Of Relativity\" ?";
q3 = "Who is the only woman to win \"Nobel Prize\" twice ?";
q4 = "How many planets in \"Solar System\" ?";
q5 = "Which planet is closest to the \"Sun\" ?";
q6 = "Which planet is furthest to the \"Sun\" ?";
q7 = "Which planet is the smallest one in \"Solar System\" ?";
q8 = "Which planet is the biggest one in \"Solar System\" ?";
q9 = "What is the name of our \"Galaxy\" ?";
q10 = "Which \"Galaxy\" is nearest to \"Milky Way Galaxy\" ?";
ques = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
randomQ = Math.floor(Math.random() * ques.length);


// a = answer, ans = answers
a1 = "isaac newton";
a2 = "albert einstein";
a3 = "marie curie";
a4 = "8";
a5 = "mercury";
a6 = "neptune";
a7 = "mercury";
a8 = "jupiter";
a9 = "milky way galaxy";
a10 = "andromeda galaxy";
ans=[a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];



function capitalize(str) {
  return str.replace(/\b\w/g, function(l) { return l.toUpperCase(); });
}



function showQuestionsAndAnswers() {
  questionList = document.createElement("p");
  questionList.className = "QA";
  answerList = document.createElement("p");
  for (let i = 0; i < ques.length; i++) {
    question = document.createElement("p");
    answer = document.createElement("p");
    question.innerText = "\n"+(i+1)+"."+ques[i]+"\n"+"\""+capitalize(ans[i])+"\""+"\n";
    questionList.appendChild(question);
  }
  document.body.appendChild(questionList);
  document.body.appendChild(answerList);
}



function submit() {
input = document.getElementById("input").value.toLowerCase().trimEnd();
if (input == "eight"){
    input = 8;
}else if(input == ""){
    alert("Answer must not be empty.");
}
if (input == a){
    alert("CORRECT.");
result = "Click \"Generate Another Question\" for another one.";
document.getElementById("input").disabled = true;
document.getElementById("submit").disabled = true;
score += 1;
document.getElementById("result").innerHTML = result;
}else if (input != a && input != ""){
    alert("INCORRECT.");
result="Try again or generate another question.";
incorrect += 1;
document.getElementById("result").innerHTML = result;
}
document.getElementById("input").value="";
}



function genQ(){
document.getElementById("question").style.display = "block";
document.getElementById("input").style.display = "block";
document.getElementById("input").disabled = false;
document.getElementById("submit").style.display = "block";
document.getElementById("submit").disabled = false;
q = ques[randomQ];
a = ans[randomQ];
randomQ += 1;
 if (randomQ == ques.length){
 randomQ = 0;
 }
 skip_times += 1;
 if (skip_times == (ques.length + 1)){
    document.getElementById("result").style.display="block";
    document.getElementById("result").className = "result1";
    document.getElementById("result1").className = "result1";
 document.getElementById("genQ").style.display = "none";
 document.getElementById("question").style.display="none";
 if (incorrect == 0 || incorrect == 1){
 result = "You finished the quiz with "+incorrect+" time incorrectness.";
 }else if ( incorrect > 1){
    result = "You finished the quiz with "+incorrect+" times incorrectness.";
 }
 document.getElementById("result").innerHTML = result;
 document.getElementById("input").style.display = "none";
 document.getElementById("submit").style.display = "none";
 if(score == 0 || score == 1){
 result1 = "You got "+score+" question correct and skipped "+(ques.length-score)+" questions in "+ques.length+" questions.";
 }else if(score == ques.length-1 || score == ques.length){
    result1 = "You got "+score+" questions correct and skipped "+(ques.length-score)+" question in "+ques.length+" questions.";
 }else if(score >= 2 && score <= ques.length-2){
    result1 = "You got "+score+" questions correct and skipped "+(ques.length-score)+" questions in "+ques.length+" questions.";
 }
 document.getElementById("result1").innerHTML= result1;
 document.getElementById("QnA").style.display="block";
 }

document.getElementById("question").innerHTML = q;
document.getElementById("genQ"). innerHTML= "Generate Another Question";
if (skip_times != (ques.length+1)){
document.getElementById("result").innerHTML="";
}
if (skip_times == ques.length){
    document.getElementById("result").style.display="none";
    document.getElementById("genQ").innerHTML = "See Your Result";
 }
 
color = allColor[randomColor];
color1 = allColor[randomColor1];
document.getElementById("question").style.backgroundColor=color;
document.getElementById("genQ").style.backgroundColor=color1;
randomColor += 1;
randomColor1 += 1;
if (randomColor == (allColor.length)){
    randomColor = 0;
}
if (randomColor1 >= (allColor.length)){
    randomColor1 = 0;
}
}

function QnA() {
    showQuestionsAndAnswers();
    document.querySelector("h1").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById("result1").style.display="none";
    document.getElementById("QnA").disabled = true
}