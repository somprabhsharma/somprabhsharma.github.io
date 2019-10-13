function initSom() {
	// animate intro title text
	$('h1.animtext').textillate({ in: { effect: 'flipInX',delayScale: 2  } });
	$('h1.animtext').fitText(1.8,{minFontSize:'20px',maxFontSize:'72px'});

	// animate intro subtitle text
	$('h3.animtext').textillate({ in: { effect: 'flipInX',delayScale: 1.8  } });


	$('.intro-init').textillate({ in: { effect: 'flipInX',delayScale: 5  } });
	$('.intro-title').textillate({ initialDelay: 700, in: { effect: 'flipInX',delayScale: 3  } });
	$('.intro-subtitle').textillate({ initialDelay: 1800, in: { effect: 'flipInX',delayScale: 1  } });
	// $('.intro-description').textillate({ in: { effect: 'fadeIn',delayScale: 1.8  } });

	// scroll animation for each section
	$('.animaper').appear();
	$(document.body).on('appear', '#about div.anim', function() {
		$(this).each(function(){ 			
			setTimeout (function (){				
				$('#about div.anim').animate({opacity:'1', top:'0'},{queue:true,duration:1200});
			}, 200 );
		});
	});

	$(document.body).on('appear', '#resume div.anim', function() {
		$(this).each(function(){ 			
			setTimeout (function (){				
				$('#resume div.anim').animate({opacity:'1', top:'0'},{queue:true,duration:1200});
			}, 200 );
		});
	});

	$(document.body).on('appear', '#work div.anim', function() {
		$(this).each(function(){ 			
			setTimeout (function (){				
				$('#work div.anim').animate({opacity:'1', top:'0'},{queue:true,duration:1200});
			}, 200 );
		});
	});

	$(document.body).on('appear', '#contacts div.anim', function() {
		$(this).each(function(){ 			
			setTimeout (function (){				
				$('#contacts div.anim').animate({opacity:'1', top:'0'},{queue:true,duration:1200});
			}, 100 );
		});
	});
	
	// open popup for projects
	$('.popup-with-move-anim').magnificPopup({
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll' ,
		fixedContentPos: false,
		fixedBgPos: true,
		closeBtnInside: false,	
		midClick: true,
		removalDelay: 200,
		mainClass: 'my-mfp-slide-bottom',         
		callbacks: {
			ajaxContentAdded: function() {
				$("#project-slider").owlCarousel({
					navigation : true,
					pagination:true, 
					slideSpeed : 100,
					paginationSpeed : 150,
					singleItem:true
				 });
				 $('.white-popup-block h2').textillate({in:{effect:'flipInX',delayScale: 0.2}});
			}
		}
	});

	// open popup with video
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		removalDelay: 200,
		mainClass: 'my-mfp-slide-bottom', 
	});

	// open popup with image
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		removalDelay: 600,
		mainClass: 'my-mfp-slide-bottom',
		image: {
			verticalFit: true
		}
	});

	// other scripts
	$('#options li').click(function(){
		$('#options li').removeClass('actcat');
		$(this).addClass('actcat');
	});
	
	$('.nav-button').click(function(){
		// $('.link-holder').slideToggle(50, function() {
		// 	if ($(this).is(':visible'))
		// 		$(this).css('display','flex');
		// });
		$('.link-holder').slideToggle(500);
	});

	window.addEventListener('wheel', { passive: false });

	$("a.scroll-link").bind('click', function() {
		$.scrollTo(
			$(this).attr('href'),950,{easing:'swing',offset: 0,'axis':'y'} );	
	});

	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 750,
		scrollOffset: 30,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
	});
	
	var ww = $(window).width();

	if( ww < 959){
	
		$('.link-holder').onePageNav({
			currentClass: 'cur',
			changeHash: false,
			scrollSpeed: 750,
			scrollOffset: 30,
			scrollThreshold: 0.5,
			filter: '',
			easing: 'swing',
		});
		$('.link-holder a').click(function(){
			setTimeout (function (){				
				$('.link-holder').slideUp(500);
			}, 600 );
		});		
	}
	$("a.scroll-link , .link-holder a").on("click touchstart", function () {
		var a = 0;
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
			var b = $(this.hash);
			b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
			if (b.length) {
				$("html,body").animate({
					scrollTop: b.offset().top - a
				}, {
					queue: false,
					duration: 1200,
					easing: "easeInOutExpo"
				});
				return false;
			}
		}
	});

	// mix all projects
	$('#folio_container').mixitup({
		targetSelector: '.box',
		effects: ['fade','rotateX'],
		easing: 'snap',
		transitionSpeed:600,
		layoutMode: 'grid',
    	targetDisplayGrid: 'inline-block',
    	targetDisplayList: 'block',
	});
			
};

$(document).ready(function(){	
	initSom();
});

$(window).resize(function(){
	var ww4 = $(window).width();
	if( ww4 < 959){
		$('.link-holder').css('display','none')
	}
	else if (ww4 > 959){
		$('.link-holder').css('display','flex')
	}
});

var isMobile = {
	 Android: function() {
				return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
				return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
				return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
				return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
};

trueMobile = isMobile.any();

if (trueMobile == null){
	$('.box').hover(function(){
		$(this).find('div.folio-overlay').stop(true,true).animate({opacity:'0.9',left:'10px' , top:'10px'},{queue:true,duration:200,easing:"swing"});
		$(this).find('div.folio-button').addClass('scale-big');
			},function(){
		$(this).find('div.folio-overlay').stop(true,true).animate({opacity:'0',left:'0' , top:'0'},{queue:true,duration:200,easing:"easeInOutBack"});
		$(this).find('div.folio-button').removeClass('scale-big');
	});

	$('.start-holder').hover(function(){
		$('.start-decor').addClass('start-rotade');
			},function(){
		$('.start-decor').removeClass('start-rotade');
	});
}