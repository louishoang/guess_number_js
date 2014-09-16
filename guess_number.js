$(document).ready(function() {
  var maxNum = +$("#max_num").text();
  var hiddenNum = Math.floor(Math.random() * maxNum);
  var count = 0;

  var showGuessCount = function(){
    $(".guesses").removeClass("hidden");
    $(".guesses").append(userNum + ', ');
  };

  $("#hidden_num").html(hiddenNum);

  $("#guess").on("submit", function(event){
    event.preventDefault();
    var userNum = +$("#user-input").val();

    if(isNaN(userNum) || userNum > 100 || userNum < 0){
      alert("Please choose a number between 0 and " + maxNum);
    }else {

      count += 1;
      showGuessCount();

      var answer_box = $(this).parent().find("#answer_box");
      if (userNum < hiddenNum){
        answer_box.html(userNum + " is too low, try again...");
      }else if (userNum > hiddenNum){
        answer_box.html(userNum + " is too high, try again");
      }else if (userNum === hiddenNum){
        answer_box.html("You won in " + count + " guesses.");
      }
    }
  });

    $("#guess").on("reset", function(event){
      document.location.reload();
      alert("Starting new game!");
    });

});
