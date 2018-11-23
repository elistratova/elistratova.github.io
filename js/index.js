$(document).ready(function() { 

	(function ($) { 
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		
		$('.tab ul.tabs li a').click(function (g) { 
			var tab = $(this).closest('.tab'), 
				index = $(this).closest('li').index();
			
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			
			g.preventDefault();
		} ); 

});

var tab;
var tabContent;

window.onload = function(){
	tabContent = document.getElementsByClassName('tabContent');
	tab = document.getElementsByClassName('tab');
	hideTabsContent(1);	
}

function hideTabsContent(a){
	for(var i = a; i < tabContent.length; i++){
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');
		tab[i].classList.remove('whiteborder');		
	}	
}

document.getElementById('tabs').onclick = function(event){
	var target = event.target;
	if(target.className == 'tab'){
		for(var i = 0; i < tab.length; i++){
			if(target == tab[i]){
				showTabsContent(i);
				break;
			}
		}
	}
}

function showTabsContent(b){
	if(tabContent[b].classList.contains('hide')){
		hideTabsContent(0);
		tab[b].classList.add('whiteborder');
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
	}
}

/*навигация между слайдами*/
$('.next').click(function() {
		var currentImage = $('.slide.showing');
		var currentImageIndex = $('.slide.showing').index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $('.slide').eq(nextImageIndex);
		currentImage.fadeOut(2000);
		currentImage.removeClass('showing');

		if(nextImageIndex == ($('.slide:last').index()+1)) {
			$('.slide').eq(0).fadeIn(2000);
			$('.slide').eq(0).addClass('showing');
		} else {
			nextImage.fadeIn(2000);
			nextImage.addClass('showing');
		}
	});

	$('.prev').click(function() {
		var currentImage = $('.slide.showing');
		var currentImageIndex = $('.slide.showing').index();
		var prevImageIndex = currentImageIndex - 1;
		var prevImage = $('.slide').eq(prevImageIndex);
		currentImage.fadeOut(200);
		currentImage.removeClass('showing');
		prevImage.fadeIn(200);
		prevImage.addClass('showing');
	});
/*	function changeClass(){
		$(this).prev().toggleClass('active')
	}
		$(function(){
			$('li h5').click(function(){
				$(this).next().slideToggle();
				$(this).toggleClass('active');
			});
		}); */

/*$('#item-project').click(function(){
	$('#menu-link').slideDown('slow');
	$
});*/



/*$("#item-project").click(function(){   
  $(this).next("a").toggle();
});*/
	


//слайд-шоу
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
//вперед и назад

//меню
(function() {
 
  "use strict";
 
  var toggles = document.querySelectorAll(".c-hamburger");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 //open/close item "Проекты"
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }
 
})();


$(document).scroll (function() {
	if ($(document).scrollTop() > $('header').height () + 10)
			$('fixmenu').addClass('active');
	 else 
		$('fixmenu').removeClass('active');
	});



$(document).ready(function(){

    $('.spoiler-link').click(function(){
        var selector = '[data-spoiler-body-id=' + $(this).data('spoiler-id') + ']';
        $(selector).toggle('fast');
        return false;
    });
});

$(document).ready(function(){

    $('.header-form__text').click(function(){
        var selector = '[data-spoiler-body-id=' + $(this).data('spoiler-id') + ']';
        $(selector).toggle('fast');
        return false;
    });
});

$(document).click(function(event) {
 if ($(event.target).closest('#item-project').length) return;
 event.stopPropagation();
});
} )( jQuery )


