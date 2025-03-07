$(document).ready(function(){

$('.owl-general .owl-carousel').owlCarousel({

    loop: true,
	dots:true,
	autoplay:true,
	center:true,
    margin: 10,
    nav: true,
	 autoWidth:true,
	 items: 1,
    navText: [
        '<img src="/img/chevron-left.svg">',
        '<img src="/img/chevron-left.svg">'
    ],
    navContainer: '.owl-general .custom-nav',
    /*responsive:{
        0:{
            items: 1
        },
        600:{
            items: 1
        },
        1000:{
            items: 1,
			    stagePadding: 200
        }
    }*/
});


	
	

	

});
