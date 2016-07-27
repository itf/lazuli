
var foo = $('.gallery-photo');
foo.poptrox({
    selector:  'a.image', 
    usePopupNav: true,
    baseZIndex:2000,
   windowMargin:5,
});

var previoushash = "";

$('div.modal').on('show.bs.modal', function() {
    var modal = this;
    var modalID = modal.id;
    var windowhash = window.location.hash;
    if (windowhash.indexOf(modalID) == -1){
         window.location.hash = modalID;
    }
    window.onhashchange = function() {
	    var windowhash = window.location.hash;
    }
});

$('div.modal').on('hide.bs.modal', function() {
    var modalID = this.id;
    var windowhash = window.location.hash;
    if(windowhash.indexOf(modalID) != -1) {
        windowhash=windowhash.replace(modalID,"");
        history.pushState('', document.title, window.location.pathname+windowhash);
    }
});

$('div.modal').on('hidden.bs.modal', function() {
    $('div.modal').each(function(){
         if(($(this).data('bs.modal') || {}).isShown){
	    document.body.className += " modal-open";
	 }
     });
});


$(document).ready(function() {
    $('div.modal').each(function(){
	    var modal = this;
	    var modalID = modal.id;
	    var windowhash = window.location.hash;
	    if(windowhash.indexOf(modalID) != -1) {
	        $(this).modal('show');
	    }
    });
});

$(window).on('hashchange', function() {
	var windowhash = window.location.hash;
	$('div.modal').each(function(){
        var modal = this;
	    var modalID = modal.id;
	    if(windowhash.indexOf(modalID) != -1) {
		document.body.className += " modal-open";
	    	if(!($(this).data('bs.modal') || {}).isShown){
	            $(this).modal('show');
	        }
	    }
	    if (windowhash.indexOf(modalID) == -1){
	        $(modal).modal('hide');
	    }
    });
});

sorttable.sort_alpha = function(a,b) { return a[0].localeCompare(b[0]); }

