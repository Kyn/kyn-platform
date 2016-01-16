$(function() {
  //Card flip
  $( 'div.icon-flip' ).click(function(e) {
    $(e.target).toggleClass('icon-flip-img').fadeIn('slow');
    $(e.target).parent('.eachgrant').find('.flip-container').toggleClass('flip');
  });
  //Watch button
  $('.js-watch').click(function() {
    $(this).toggleClass( 'watching' );
  });
  //Follow button
  $('.js-follow').click(function() {
    $(this).toggleClass( 'following' );
    $(this).parent('.eachgrant-grantmaker-detail').find('.js-indicator').toggleClass('indicator');
  });
  //Donate button
    // -- Donate button handled by smartergiving.js --
  //Coinvest link
  $( '.js-coinvest-nav-link' ).click(function(e) {
    console.log('clicked');
    e.preventDefault();
    swal({
      title: 'Your generosity is infectious!',
      text: 'Unfortunately, we have a few legal and tax issues to finalize before we can allow the world to donate so simply :)',
      type: 'warning',
      allowOutsideClick: true,
      confirmButtonText: 'Close',
    });
  });
});
