$(document).on('ready', function() {  
  var progressBar = $('#readingprogress');
  var winHeight = $(window).height();
  var docHeight = $(document).height();

	$( window ).resize(function() {
		var winHeight = $(window).height();
		var docHeight = $(document).height();
	});

  /* Set the max scrollable area */
  progressBar.attr('max', docHeight);

  function updateReadingProgress() {
     var scrollposition = $(window).scrollTop() + winHeight;
     progressBar.attr('value', scrollposition);
  }
  
  // Calculate start position
  updateReadingProgress();

  $(document).on('scroll', function(){
	  updateReadingProgress();
  });
});