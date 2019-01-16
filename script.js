current = '';
let even = true;
$('.appletHeader').click(function(){
    current = $(this)
    if(even){
    $(this).animate(
        {left: "25%"}
    , 500)
    $('.courseContent').animate(
        {right:"0"}, 500
    )
    $('video').animate(
        {width: "75%",height: "75%", bottom: "12%", top: "12%"}, 500
    )
    even = false;
    }
    else{
        $(this).animate(
            {left: "0%"}
        , 500)
        $('.courseContent').animate(
            {right:"25%"}, 500
        )
        $('video').animate(
            {width: "100%", height: "100%", bottom: "0%", top: "0%"}, 500
        )
        even = true;   
    }
})