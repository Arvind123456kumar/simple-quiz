const questions=[
    {
        question: "which largest animal in the world",
   answers: [
    {text:"shark",correct:false},
    {text:"blue whal",correct:true},
    {text:"elephant",correct:false},
    {text:"dog",correct:false},
   ]
    },
    {
    question: "which largest desert in the world",
    answers: [
     {text:"kalahari",correct:false},
     {text:"antarctica",correct:true},
     {text:"sahara",correct:false},
     {text:"gobi",correct:false},
    ]
     },
     {
        question: "which popular game in the world",
        answers: [
         {text:"free fire",correct:false},
         {text:"pupg",correct:true},
         {text:"lotus",correct:false},
         {text:"stargame",correct:false},
        ]
         },
     {
     question: "which largest wall in the world",
     answers: [
      {text:"india gate",correct:false},
      {text:"green wall",correct:false},
      {text:"black wall",correct:false},
      {text:"chaina wall",correct:true},
     ]
      }
];
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
let currentquestionindex=0;
let score=0;

function startquiz(){
    currentquestionindex=0;
score=0;
nextButton.innerHTML="Next";
showQuestions();
}
function showQuestions(){
    resetState();
    let currentQuestion=questions[currentquestionindex];
    let questionNo=currentquestionindex +1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
     const button=document.createElement("button");
     button.innerHTML=answer.text;
     button.classList.add("btn");
     answerButton.appendChild(button);
     
     if(answer.correct){
        button.dataset.correct=answer.correct;
     } 
     button.addEventListener("click",selectAnswer);  
    }); 
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}
function selectAnswer(e){
    const selectBtn=e.target;
    const iscorrect=selectBtn.dataset.correct==="true";
    if(iscorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
if(button.dataset.correct==="true"){
    button.classList.add("correct");  
}
button.disabled="true";
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML="Play again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentquestionindex++;
    if(currentquestionindex < questions.length){
        showQuestions();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
 if(  currentquestionindex <questions.length){
    handleNextButton();
 }
 else{
    startquiz();
 }   
});
startquiz(); 
