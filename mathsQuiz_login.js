Player1=document.getElementById("P1-name").value;
Player2=document.getElementById("P2-name").value;
localStorage.setItem("P1 name", Player1);
localStorage.setItem("P2 name", Player2);
function Next()
{
    window.location.replace("quizPage.html");
}