var P2=localStorage.getItem("P2 name");
var P1=localStorage.getItem("P1 name");
var p2Score=0;
var p1Score=0;
n1=document.getElementById("Numb1").value;
n2=document.getElementById("Numb2").value;
Qanswer=n1 * n2;
function sendQuestion()
{
    Qnumber="<h4>" + n1 + "*" + n2 + "</h4>";
    input="<br>Answer: <input type='text' id='checkBox'>";
    check="<br><br><button class='btn-info' onclick='checkAnswer()'>Check answer</button>";
    combine=Qnumber + input + check;
    document.getElementById("User_Output").innerHTML=combine;
}
Q_turn="P1";
Answer_turn="P2";
function checkAnswer()
{
    answer=document.getElementById("checkBox").value;
    if(answer==Qanswer)
    {
        if(Answer_turn == "P2")
        {
            p2Score=p2Score+1;
            document.getElementById("P2-score").innerHTML=p2Score;
        }
        else
        {
            p1Score=p1Score+1;
            document.getElementById("P1-score").innerHTML=p1Score;
        }
        if(Q_turn =="P1")
        {
            Q_turn="P2";
            document.getElementById("Question").innerHTML="Question turn:" + P2;
        }
        else
        {
            Q_turn="P1"
            document.getElementById("Question").innerHTML="Question turn:" + P1;
        }
    }
}