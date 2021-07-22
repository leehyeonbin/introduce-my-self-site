$(function() {
    $("#m_btn").click(function(e) {
        e.preventDefault();


        if($("nav"). is (":visible")) {
            $("nav").hide();
            $("#m_btn").removeClass("on");
        }
        else {
            // display block으로 바꿔주는 것
            $("nav").show();
            $("#m_btn").addClass("on");
        }
    });

    var idx =0;
    setInterval(function(){
        if(idx < 5){
            idx++
        }
        else{
            idx = 0;
        }


        console.log(idx);

        $("#skill img").eq(idx).fadeIn();
        $("#skill img").eq(idx-1).fadeOut();
    },2000);
});