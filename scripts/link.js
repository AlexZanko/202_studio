$(document).ready(function() {
 
$('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1200);
        return false; 
});
$('.carousel-control').click(function(e){
    e.stopPropagation();
    var goTo = $(this).data('slide');
    if(goTo=="prev") {
        $('#carousel').carousel('prev'); 
    } else {
        $('#carousel').carousel('next'); 
    }
});    
});