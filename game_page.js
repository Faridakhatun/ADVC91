    player1_name = localStorage.getItem("player1_name");
    player2_name = localStorage.getItem("player2_name");

    player1_score = 0;
    player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name;
document.getElementById("player_question").innerHTML = "Answer Turn -" + player2_name;

function send() {
    player_1 = document.getElementById("player_1").value;
    player_2 = document.getElementById("player_2").value;
    actual_answer=parseInt(player_1)*parseInt(player_2);
    console.log(actual_answer);
    
    question_word="<h4 id= 'word_display'> Q"+player_1+"X"+player_2+"</h4>";
    input_box="<input type='text' id='input_check_box'>";
    check_button="<button class = 'btn btn-info' onclick='check()>Check</button>";
    row= question_word + input_box+ check_button;

    document.getElementById("output").innerHTML= row;



    
}