$(document).ready(function () {
     
    // Declare variables for total amount of divs, and the current div. 
    var divs = $(".divs > div"), divAmount = divs.length;
    var currentDiv = 0;
    
    // alert( currentDiv );
    
     var pageState = localStorage.getItem("pageState");
     if (typeof pageState != "undefined") {
    currentDiv = pageState;    
    }
    
    // alert( currentDiv );
    
        $(function () {
                currentDiv;
                divs.hide().eq(currentDiv).show();
            
            
            $("#next").click(function (){ 
                
            })
            
            
            $("#next, #prev").click(function () {
                divs.stop().fadeOut().eq((this.id == 'next' ? currentDiv ++ : currentDiv--) %divAmount).fadeIn();
                
                
        /* if (currentDiv > divAmount){
            currentDiv = 0;
            }
        if (currentDiv < 0){
            currentDiv = divAmount;
            } */
        console.log(currentDiv);
        localStorage.setItem("pageState", currentDiv);
                 
        
            }); // close click function
        }); // close secondary function function

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
    }); //close json function
}); // close main document