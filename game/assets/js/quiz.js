$(document).ready(function(){
    var score = 0;
    
    $(".A").click(function(){
        swal.fire({ title: 'SALAH !',text: 'Room By @Lexavaa_',imageUrl: 'assets/img/over.gif',imageWidth: 400,imageHeight: 400,});
        var audio = document.getElementById("trek"); audio.play();
    })
    $(".B").click(function(){
        swal.fire({ title: 'SALAH !',text: 'Room By @Lexavaa_',imageUrl: 'assets/img/over.gif',imageWidth: 400,imageHeight: 400,});
        var audio = document.getElementById("trek"); audio.play();
    })
    $(".C").click(function(){
        swal.fire({ title: 'SALAH !',text: 'Room By @Lexavaa_',imageUrl: 'assets/img/over.gif',imageWidth: 400,imageHeight: 400,});
        var audio = document.getElementById("trek"); audio.play();
    })
    $(".D").click(function(){
        score ++;
        swal.fire({ title: 'SEP PINTER MASOK SURGA!',text: 'Score Anda sekarang =' + score ,imageUrl: 'assets/img/win.gif',imageWidth: 400,imageHeight: 400,});
        $(".quiz-1").hide();
        $(".quiz-2").show();
    });
    
    // soal2

    $(".A1").click(function(){
        swal.fire({ title: 'SALAH !',text: 'Room By @Lexavaa_',imageUrl: 'assets/img/over.gif',imageWidth: 400,imageHeight: 400,});
        var audio = document.getElementById("trek"); audio.play();
    })
    $(".B1").click(function(){
        score ++;
        swal.fire({ title: 'SEP PINTER MASOK SURGA!',text: 'Score Anda sekarang =' + score ,imageUrl: 'assets/img/win.gif',imageWidth: 400,imageHeight: 400,});
        $(".quiz-1").hide();
        $(".quiz-2").hide();
        $(".quiz-3").show();
    })
    $(".C1").click(function(){
        swal.fire({ title: 'SALAH !',text: 'Room By @Lexavaa_',imageUrl: 'assets/img/over.gif',imageWidth: 400,imageHeight: 400,});
        var audio = document.getElementById("trek"); audio.play();
    })
    $(".D1").click(function(){
        swal.fire({ title: 'SALAH !',text: 'Room By @Lexavaa_',imageUrl: 'assets/img/over.gif',imageWidth: 400,imageHeight: 400,});
        var audio = document.getElementById("trek"); audio.play();
    });

    // soal3

    $(".A2").click(function(){
        swal.fire({ title: 'SALAH !',text: 'Room By @Lexavaa_',imageUrl: 'assets/img/over.gif',imageWidth: 400,imageHeight: 400,});
        var audio = document.getElementById("trek"); audio.play();
    })
    $(".B2").click(function(){
        swal.fire({ title: 'SALAH !',text: 'Room By @Lexavaa_',imageUrl: 'assets/img/over.gif',imageWidth: 400,imageHeight: 400,});
        var audio = document.getElementById("trek"); audio.play();
    })
    $(".C2").click(function(){
        score ++;
        swal.fire({ title: 'SEP PINTER MASOK SURGA!',text: 'Score Anda sekarang =' + score ,imageUrl: 'assets/img/win.gif',imageWidth: 400,imageHeight: 400,});
        $(".quiz-1").hide();
        $(".quiz-2").hide();
        $(".quiz-3").hide();
        $(".quiz-4").show();
    })
    $(".D2").click(function(){
        swal.fire({ title: 'SALAH !',text: 'Room By @Lexavaa_',imageUrl: 'assets/img/over.gif',imageWidth: 400,imageHeight: 400,});
        var audio = document.getElementById("trek"); audio.play();
    });

    // soal4

    $(".A3").click(function(){
        swal.fire({ title: 'SALAH !',text: 'Room By @Lexavaa_',imageUrl: 'assets/img/over.gif',imageWidth: 400,imageHeight: 400,});
        var audio = document.getElementById("trek"); audio.play();
    })
    $(".B3").click(function(){
        score ++;
        swal.fire({ title: 'SEP PINTER MASOK SURGA!',text: 'Score Anda sekarang =' + score ,imageUrl: 'assets/img/win.gif',imageWidth: 400,imageHeight: 400,});
        $(".quiz-1").hide();
        $(".quiz-2").hide();
        $(".quiz-3").hide();
        $(".quiz-4").hide();
        $(".quiz-5").show();
    })
    $(".C3").click(function(){
        swal.fire({ title: 'SALAH !',text: 'Room By @Lexavaa_',imageUrl: 'assets/img/over.gif',imageWidth: 400,imageHeight: 400,});
        var audio = document.getElementById("trek"); audio.play();
    })
    $(".D3").click(function(){
        swal.fire({ title: 'SALAH !',text: 'Room By @Lexavaa_',imageUrl: 'assets/img/over.gif',imageWidth: 400,imageHeight: 400,});
        var audio = document.getElementById("trek"); audio.play();
    });

    // soal5

    $(".A4").click(function(){
        swal.fire({ title: 'SALAH !',text: 'Room By @Lexavaa_',imageUrl: 'assets/img/over.gif',imageWidth: 400,imageHeight: 400,});
        var audio = document.getElementById("trek"); audio.play();
    })
    $(".B4").click(function(){
        score ++;
        swal.fire({ title: 'SEP PINTER MASOK SURGA!',text: 'Score Anda sekarang =' + score ,imageUrl: 'assets/img/win.gif',imageWidth: 400,imageHeight: 400,});
        $(".quiz-1").hide();
        $(".quiz-2").hide();
        $(".quiz-3").hide();
        $(".quiz-4").hide();
        $(".quiz-5").hide();
        $("#scoreboard").show();
        $(".scoree").text(score);
        $(".papan").show();
    })
    $(".C4").click(function(){
        swal.fire({ title: 'SALAH !',text: 'Room By @Lexavaa_',imageUrl: 'assets/img/over.gif',imageWidth: 400,imageHeight: 400,});
        var audio = document.getElementById("trek"); audio.play();
    })
    $(".D4").click(function(){
        swal.fire({ title: 'SALAH !',text: 'Room By @Lexavaa_',imageUrl: 'assets/img/over.gif',imageWidth: 400,imageHeight: 400,});
        var audio = document.getElementById("trek"); audio.play();
    });


    
});
