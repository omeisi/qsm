import	$ from 'jquery';

class Slider {
	constructor(){
	
		this.clickLeftAndRightArrow();
		this.automationSlide();
	}

	clickLeftAndRightArrow () {

			$(".right-arrow, .left-arrow").click(function(){
			var currentSlide = $(".tech__container-active");
			var nextSlide = currentSlide.next();

			currentSlide.fadeOut(300).removeClass("tech__container-active");
			nextSlide.fadeIn(300).addClass("tech__container-active");

			if(nextSlide.length == 0) {
				$(".tech__container").first().fadeIn(300).addClass("tech__container-active");
			}
		});
	}

	automationSlide() {
		$(".test2 > div:gt(0)").hide();

				setInterval(function() { 
				  $('.test2 > div:first')
				    .fadeOut(1000)
				    .next()
				    .fadeIn(1000)
				    .end()
				    .appendTo('.test2');
				},  10000);
	}

}

export default Slider;

