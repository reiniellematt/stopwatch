$(document).ready(function() {

    function startAndStop() {
        
    }

    $(window).keypress(function(e) {
        if(e.keyCode === 32) {
            // if(countdown !== 0) {
            //     timer = setInterval(function() {
            //         countdown--;
            //         $("#countdown").html(countdown.toString());
            //         if(countdown === 0) {
            //             $("#countdown").html(" ");
            //             startAndStop();
            //             clearInterval(timer);
            //         }
            //     }, 1000)
            // }
            // else if(countdown === 0) {
            //     startAndStop();
            // }
            if(running === false) {
                start();
            }
            else if(running === true) {
                stop();
            }
            else {
                alert("An error occured!");
                setTimeout(function() {location.reload()}, 3000);
            }
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