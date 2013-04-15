
$(document).ready(function(){

  $('.entry a').click(function(event){
    href = $(this).attr('href');
    if ( !href.match('javascript:') ) {
      $('#redditpreview').remove();
      $(this).after('<div id="redditpreview"><a href="'+href+'">'+href+'</a><div class="notice">Press escape to close</div><iframe src='+href+' width="500" height="500"></iframe></div>');
      $('#redditpreview').css('left', event.pageX+10);
      $('#redditpreview').css('right', event.pageY+10);
      //$('#redditpreview').css('width', 500);
      //$('#redditpreview').css('height', 500);
      $('#redditpreview').css('display', 'inline');
      $('#redditpreview').css('position', 'absolute');
      return false;
    }
    return false;
  });
  
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $('#redditpreview').remove();
    }   // esc
  });

});
