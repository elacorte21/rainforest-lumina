$(window).scroll(function(){
	// Highlight Nav
	$('.target').each(function() {
        if($(window).scrollTop() >= $(this).position().top) {
            var secid = $(this).attr('id');
            $('.navbar-mob a').removeClass('active');
            $('.btn-'+ secid).addClass('active');
        }
    });
});

// Scroll Animate
$('.scrollpg').click(function(e){
	$('html, body').animate({
		scrollTop:$($.attr(this,'href')).offset().top +1
	},1000);
	e.preventDefault();
});

// Mobile Nav
$('.nav-mob').click(function(e){
	$('.navbar-mob').toggleClass('show');
	$(this).toggleClass('closex');
	//alert('x');
	e.preventDefault();
});
$('.scrollpg').click(function(e){
	$('.navbar-mob').removeClass('show');
	$('.nav-mob').removeClass('closex');
	e.preventDefault();
});

// Announce
$('.closex').click(function(e){
	$(this).parent().hide();
	e.preventDefault();
});

// Preloader
$(window).on('load', function() { // makes sure the whole site is loaded 
	$('#status').fadeOut(); // will first fade out the loading animation 
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
	$('body').delay(350).css({'overflow':'visible'});
});


$(document).ready(function(){
	new WOW().init();
	
	// Sparkles
	$('.spark').sparkleh({
		count: 30, 
		color: ["#f3edc4","#253943","#659e3f"],
		speed: 0.4
    });
	
});

// FB Share window code
$('#fbshare').click(function(e){
	window.open('https://www.facebook.com/sharer.php?u=https://www.rainforestlumina.sg','popUpWindow','height=400,width=500,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
	e.preventDefault();
});


// Parallax / ScrollMagic
var controller = new ScrollMagic.Controller();
var tween = new TimelineMax();
tween.to('#slide', 0.5, {scale: 1.5, ease: Power0.easeNone}).to('.main-left', 0.5, {left: -250, ease: Power0.easeNone}, 0).to('.main-right', 0.5, {right: -250, ease: Power0.easeNone}, 0);
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 500})
.setTween(tween)
//.addIndicators() // add indicators (requires plugin)
.addTo(controller);

// Parallax / ScrollMagic
var controller = new ScrollMagic.Controller();
var tween = new TimelineMax();
tween.to('#slide', 0.5, {scale: 1.5, ease: Power0.easeNone}).to('.main-left', 0.5, {left: -250, ease: Power0.easeNone}, 0).to('.main-right', 0.5, {right: -250, ease: Power0.easeNone}, 0);
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 500})
.setTween(tween)
//.addIndicators() // add indicators (requires plugin)
.addTo(controller);

// Gallery
$('.loop').owlCarousel({
    center: true,
    loop:true,
    margin:150,
	items:1,
	nav:true,
	touchDrag: false,
	mouseDrag: false
});
