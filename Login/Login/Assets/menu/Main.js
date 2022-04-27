$('#mainret').click(function (e) {


    $('#principal').css("transform", "translate(-300px)");
    $("div").removeClass("bg")
});

$('.menu-icon').click(function (e) {

    $("div").addClass("bg")
    $('#principal').css("transform", "translate(300px)");
});

$('#HUser').click(function () {
    $('#principal').css("transform", "translate(-300px)");
    $("div").removeClass("bg");
});

$('#pedidosSefaz').click(function (e) {
    $('#principal').css("transform", "translate(-300px)");
    $("div").removeClass("bg")
});


