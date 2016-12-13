$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // Назначаем объект
        $(window).scroll(function() {
            var yPos = -(window.scrollTop() / $bgobj.data('speed'));
            // Собираем значение координат фона вместе
            var coords = '50% '+ yPos + 'px';
            // Смещаем фон
            $bgobj.css({ backgroundPosition: coords });
        });
    });
});