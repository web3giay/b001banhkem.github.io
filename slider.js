window.timberSlider=window.timberSlider||{};timberSlider.cacheSelectors=function(){timberSlider.cache={$slider:$('.flexslider')}};timberSlider.init=function(){timberSlider.cacheSelectors();timberSlider.sliders();};timberSlider.sliders=function(){var $slider=timberSlider.cache.$slider,sliderArgs={animation:'slide',animationSpeed:500,pauseOnHover:true,keyboard:false,slideshow:true,slideshowSpeed:3000,controlNav:false,smoothHeight:false};if($slider.length){if($slider.find('li').length===1){sliderArgs.slideshow=false;sliderArgs.slideshowSpeed=0;sliderArgs.controlNav=false;sliderArgs.directionNav=false;}$slider.flexslider(sliderArgs);}};$(window).on('load',function(){timberSlider.init();});$(document).ready(function(){$("#clients-carousel").owlCarousel({autoPlay:3000,items:5,iitemsDesktop:[1199,4],itemsDesktopSmall:[980,3],itemsTablet:[630,2],itemsTabletSmall:false,itemsMobile:[479,1],singleItem:false});});