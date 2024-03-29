$(document).ready(function (){
    $(".menu-links li a").click(function (e){
        $(".menu-links li.active").removeClass("active");
        var $parent = $(this).parent();
        $parent.addClass("active");
    });
    $(".hamburger-icon").click(function(){
        $(".menu-links").toggleClass("left");
    });
    $(".hamburger-icon").click(function (){
        $(this).toggleClass("ham-style");
    });
        const themeSwitch = document.querySelector("#checkbox");
        themeSwitch.addEventListener("change", () => {
            document.body.classList.toggle("dark-theme");
     });
});

function updateCountdown(timerId){
    var timerElement = document.getElementById(timerId);
    var timeLeft = timerElement.innerHTML;
    var timeArray = timeLeft.split(':');
    var hours = parseInt(timeArray[0]); 
    var minutes = parseInt(timeArray[1]);
    var seconds = parseInt(timeArray[2]);

    // Verificar se ainda há tempo
    if (hours == 0 && minutes == 0 && seconds ==0){
        clearInterval(interval);
        timerElement.innerHTML = "Auction Ended!";
        return;
    }

    // Diminuir tempo restante em um segundo
    if (seconds > 0){
        seconds--;
    } else {
        seconds = 59;
        if(minutes > 0) {
            minutes--;
        } else 
            minutes = 59;
            if (hours > 0) {
                hours--;
        }
    }
    


// Formatar e exibir tempo

timerElement.innerHTML = hours.toString().padStart(2, '0') + 'h:' 
+ minutes.toString().padStart(2, '0') + 'm:' 
+ seconds.toString().toString(2, '0') + 's:'
}    

// Atualizar o contador
var interval = setInterval(function()
{updateCountdown('timer');},1000);

var interval1 = setInterval(function()
{updateCountdown('timer1');},1000);

var interval2 = setInterval(function()
{updateCountdown('timer2');},1000);

var interval3 = setInterval(function()
{updateCountdown('timer3');},1000);

