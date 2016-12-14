$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // Назначаем объект
        $(window).scroll(function() {
            var yPos = -(document.body.scrollTop / $bgobj.data('speed'));
            // Собираем значение координат фона вместе
            var coords = '50% '+ yPos + 20 + 'px';
            // Смещаем фон
            $bgobj.css({ backgroundPosition: coords });
        });
    });
});