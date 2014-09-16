$(document).ready(function() {

  var maxNum = +$("#max_num").text();
  var userNum = +$("#user-input").val();
  var hiddenNum = Math.floor(Math.random() * maxNum);
  var count = 0;
  $("#hidden_num").html(hiddenNum);

  $("#guess").on("submit", function(event){
    event.preventDefault();
    userNum = +$("#user-input").val();
    count += 1;
    $(".guesses").removeClass("hidden");
    $(".guesses").append(userNum + ', ');
    if (userNum < hiddenNum){
      $(this).parent().find("#answer_box").html(userNum + " is too low, try again...");
    }else if (userNum > hiddenNum){
      $(this).parent().find("#answer_box").html(userNum + " is too high, try again");
    }else if (userNum === hiddenNum){
      $(this).parent().find("#answer_box").html("You won in " + count + " guesses.");
    }
  });

  $("#guess").on("reset", function(event){
    window.location.reload();
    alert("New game started!")
  });

});

