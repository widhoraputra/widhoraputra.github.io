$('.page-scroll').on('click', function(e) {


    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    });

    e.preventDefault();

});


// parallax
$(window).on('load', function() {
    $('.pkiri').addClass('pmuncul');
    $('.pkanan').addClass('pmuncul');
})

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll/4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll/2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll/1.2 + '%)'
    });

    // portfolio
    if( wScroll > $('.porfolio').offset().top -250 ) {
        $('.porfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.porfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
        
        
    }


});