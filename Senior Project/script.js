$(function () {
    
    var $divs = $(".divs > div"),
        N = $divs.length,
        C = 0;                   // Current    
    
    $divs.hide().eq(C).show();
    
    $("#next, #prev").click(function () {
        $divs.stop().fadeOut().eq((this.id == 'next' ? ++C : --C) %N).fadeIn();
    });
    
});


var content = jSONtexts.texts;

$(document).ready(function () {
    
    $("#content0").html(content[0].content);
    $("#content1").html(content[1].content);
    $("#content2").html(content[2].content);
    $("#content3").html(content[3].content);
    $("#content4").html(content[4].content);
    $("#content5").html(content[5].content);
    $("#content6").html(content[6].content);
    $("#content7").html(content[7].content);
    $("#content8").html(content[8].content);
    
});


