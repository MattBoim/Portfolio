// Write your Javascript code.
var frameNumber = 0; //start video at frame 0
    playbackConst = 100; //lower number = faster playback
    vid = document.getElementById('wiggle'); //get video element

function scrollPlay(){
    var frameNumber = window.pageYOffset/playbackConst;
    vid.currentTime = frameNumber;
    window.requestAnimationFrame(scrollPlay);
}
$(document).ready(function() {
    $(".greeting").animate({'margin-top':'10'},2000);
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'margin-top':'-100'},1500);
                    
            }
            
        });    
    });
    
});

window.requestAnimationFrame(scrollPlay);