
var foo = $('.gallery-photo');
foo.poptrox({
    selector:  'a.image', 
    usePopupNav: true,
    baseZIndex:2000,
   windowMargin:5,
});

$('div.modal').on('show.bs.modal', function() {
    var modal = this;
    var hash = modal.id;
    window.location.hash = hash;
    window.onhashchange = function() {
	if (!location.hash){
	    $(modal).modal('hide');
	}
    }
});

$('div.modal').on('hide.bs.modal', function() {
    var hash = this.id;
    history.pushState('', document.title, window.location.pathname);
});


$(document).ready(function() {
    $('div.modal').each(function(){
	var modal = this;
	var hash = '#'+modal.id;
	var windowhash = window.location.hash;
	if(windowhash== hash) {
	    $(this).modal('show');
	}
    });
});

$(window).on('hashchange', function() {
      $('div.modal').each(function(){
	var modal = this;
	var hash = '#'+modal.id;
	var windowhash = window.location.hash;
	if(windowhash== hash) {
	    $(this).modal('show');
	}
    });
});