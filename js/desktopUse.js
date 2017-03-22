$(document).ready(function() {
    $(window).keypress(function(e) {
        if(e.keyCode === 32) {
            if(running === false) {
                start();
            }
            else if(running === true) {
                stop();
            }
            else {
                console.log("An error occured");
                location.reload();
            }
        }
    });


    $(".btns").mouseup(function() {
        this.blur();
    })

})