$(document).ready(function() {
    
    function countDown(time) {
        var t = time - secs;

        var secs = Math.floor((t/1000) % 60);

        if(secs === 0) {
            console.log("time finished")
        }
    }

    $("button").click(function() {
        $("#drpdwnTitle").html($(this).text());
        countdown = 0;
        $("#countdown").html(countdown);
    })

    $("#drpdwnTitle").click(function() {
        $(this).html("SET TIME INSPECTION");
    })

    $(".contentBtns:nth-child(1)").click(function() {
        countdown = 3;
        $("#countdown").html(countdown);
    })

    $(".contentBtns:nth-child(2)").click(function() {
        countdown = 5;
        $("#countdown").html(countdown);
    })

    $(".contentBtns:nth-child(3)").click(function() {
        countdown = 10;
        $("#countdown").html(countdown);
    })

    $(".contentBtns:nth-child(4)").click(function() {
        countdown = 15;
        $("#countdown").html(countdown);
    })

    
})