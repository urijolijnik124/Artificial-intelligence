$('#burger').click(function(){

    $('.header__nav').slideToggle().toggleClass('open');

    $('.header__nav').hasClass('open') ? $(this).html('&#10006;') : $(this).html('&equiv;');

});