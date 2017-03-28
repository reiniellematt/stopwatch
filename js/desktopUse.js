$(document).ready(function() {
    $(window).keypress(function(e) {
        if(e.keyCode === 32) {
            timer = setInterval(function() {
                    countdown--;
                    $("#countdown").html(countdown.toString());
                    if(countdown === 0) {
                        $("#countdown").html(" ");
                        if(running === true) {
                            stop();
                        }
                        else if(running === false) {
                            start();
                        }
                        clearInterval(timer);
                    }
                }, 1000)
         
        }
    });

    $(window).on("keydown", function(event) {
        if(event.which === 82) {
            if(running === false) {
                reset();
            }
            else if(running === true) {
                stop();
                reset();
            }
        }
    })

    $("input").mouseup(function() {
        this.blur();
    })

    $("button").mouseup(function() {
        this.blur();
    })

})