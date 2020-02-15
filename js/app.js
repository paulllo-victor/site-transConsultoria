jQuery(document).ready(function($){
		$(".scroll").click(function(event){
			event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},800);
	});
});

$(document).ready(function(){
	$('.button-mobile').click(function(){
		$('header nav ul').toggle();
	});
});
$(document).ready(function(){
	$('.nossso-clientes .slick-slider').slick({
	  infinite: true,	  
		autoplay:true,
		autoplaySpeed: 3000,
	  slidesToShow: 3,
	  slidesToScroll: 1
	});		
});