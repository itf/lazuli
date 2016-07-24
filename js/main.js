
var foo = $('.gallery-photo');
foo.poptrox({
    selector:  'a.image', 
    usePopupNav: true,
    baseZIndex:2000,
   windowMargin:5,
});

var thishash = window.location.hash;

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
    var modalID = this.id;
    thishash=thishash.replace(modalID,"");
    history.pushState('', document.title, window.location.pathname+thishash);
});


$(document).ready(function() {
    $('div.modal').each(function(){
	var modal = this;
	var hash = modal.id;
	var windowhash = window.location.hash;
	if(windowhash.indexOf(hash) != -1) {
	    $(this).modal('show');
	}
    });
});

$(window).on('hashchange', function() {
      $('div.modal').each(function(){
	var modal = this;
	var hash = modal.id;
	var windowhash = window.location.hash;
	thishash= windowhash;
	if(windowhash.indexOf(hash) != -1) {
	    $(this).modal('show');
	}
    });
});