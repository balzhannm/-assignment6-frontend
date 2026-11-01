$(document).ready(function() {
    console.log("jQuery is ready!");

    // Task 1: Selectors and CSS
    $("#changeText").click(function() {
        $("#myId").text("The text was changed with .text()!");
    });

    $("#changeHtml").click(function() {
        $(".myClass").html("<b>This text is bold using .html()!</b>");
    });

    $("#changeStyle").click(function() {
        $("p").css("color", "blue");
    });

    // Task 2: Hide, Show and Toggle
    $("#hideBtn").click(function() {
        $("#hideText").hide();
    });

    $("#showBtn").click(function() {
        $("#hideText").show();
    });

    $("#toggleBtn").click(function() {
        $("#hideText").toggle();
    });

    // Task 3: Fade methods
    $("#fadeImage").hide();
    $("#fadeInBtn").click(function() {
        $("#fadeImage").fadeIn();
    });

    $("#fadeOutBtn").click(function() {
        $("#fadeImage").fadeOut();
    });

    $("#fadeToggleBtn").click(function() {
        $("#fadeImage").fadeToggle();
    });

    // Task 4: Slide methods
    $("#slidePanel").hide();
    $("#slideDownBtn").click(function() {
        $("#slidePanel").slideDown();
    });

    $("#slideUpBtn").click(function() {
        $("#slidePanel").slideUp();
    });

    $("#slideToggleBtn").click(function() {
        $("#slidePanel").slideToggle();
    });

    // Task 5: Add and remove list items
    $("#addItem").click(function() {
        $("#myList").append("<li>New item</li>");
    });

    $("#addFirst").click(function() {
        $("#myList").prepend("<li>New first item</li>");
    });

    $("#removeItem").click(function() {
        $("#myList li:last").remove();
    });

    // Task 6: Change attributes
    $("#changeImageBtn").click(function() {
        $("#changeImage").attr("src", "https://picsum.photos/id/1011/300/180");
    });

    $("#changeLinkBtn").click(function() {
        $("#myLink").attr("href", "https://www.wikipedia.org");
        $("#myLink").text("Open Wikipedia");
    });

    // Task 7: Form interaction
    $("#nameInput").on("input", function() {
        $("#nameOutput").text($(this).val());
    });

    $("#emailInput").on("input", function() {
        $("#emailOutput").text($(this).val());
    });

    // Task 8: Basic animation
    $("#basicAnimation").click(function() {
        $("#basicBox").animate({
            width: "110px",
            height: "110px",
            left: "100px"
        }, 1000);
    });

    // Task 9: Sequential animations
    $("#sequenceAnimation").click(function() {
        $("#sequenceBox").css({left: "0px", top: "0px", width: "60px", height: "60px"});
        $("#sequenceBox").animate({left: "150px"}, 700)
            .animate({top: "70px"}, 700)
            .animate({width: "30px", height: "30px"}, 700)
            .animate({left: "0px", top: "0px", width: "60px", height: "60px"}, 700);
    });

    // Task 10: Combined animation
    $("#combinedAnimation").click(function() {
        $("#combinedBox").css({left: "0px", opacity: 1, width: "60px", height: "60px"});
        $("#combinedBox").animate({
            left: "150px",
            opacity: 0.4,
            width: "100px",
            height: "100px"
        }, 1200);
    });

    // Task 11: Image Gallery
    $(".galleryImage").click(function() {
        var imageAddress = $(this).attr("src");
        $("#bigImage").attr("src", imageAddress);
        $("#bigImageBox").fadeIn();
        $("#bigImage").css({width: "500px", height: "300px", objectFit: "cover"});
    });

    $(".galleryImage").hover(
        function() {
            $(this).fadeTo(200, 0.6);
        },
        function() {
            $(this).fadeTo(200, 1);
        }
    );
});
