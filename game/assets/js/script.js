$(document).ready(function(){
    $("#well").click(function(){
        $("#BGnginx").css("background-image","url('assets/img/bg1.jpg')");
        $("#well").hide();
        $("#Gosd-1").show();
        var audio = document.getElementById("trek1"); audio.play();
    })
});
