$(document).ready(function () {
        $("#click").click(function () {
            $("#clickBox").hide();
            //$("#clickBox").toggle(1000);
        });

        $("#hover")
            .mouseenter(function () {
                $("#hoverBox").show();
            })
            .mouseleave(function () {
                $("#hoverBox").hide();
            });

        $(".box").css("background-color", "green");


        var r = 255;
        var g = 0;
        var b = 0;

        var rgb = "rgb(" + r + "," + g + "," + b + ")";
        console.log(rgb);

        $("body").css("background-color", rgb);

        $("#button1").click(function () {
            $("#replace").html("<p>Step 1-Find a picture of Tom Hanks on google.com</p> <img src='hanks.jpeg'");
        });

        $("#button2").click(function () {
            $("#replace").html("<p>Step 2-Get a picture frame from Target</p>");
        });
        //  When writing a compound string use a combination, you can use single and double quotes
        $("#button3").click(function () {
            $("#replace").html("<p>Step 3-Print out the photo of Tom Hanks</p>");
        });

    });
