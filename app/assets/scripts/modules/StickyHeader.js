import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor () {
		this.siteHeader = $(".site-header");
		this.darkTrigger = $(".large-hero__text-content");
		this.createHeaderWaypoint();
		this.pageSections = $(".page-section, .page-section__no-b-padding");
		this.headerLink = $(".primary-nav a");
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
	}

	addSmoothScrolling (){
		this.headerLink.smoothScroll();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.darkTrigger[0],
			handler: function(direction){
				if (direction == "down") {
					that.siteHeader.addClass("site-header__dark");
				}else {
					that.siteHeader.removeClass("site-header__dark");
				}
			}
		});
	}

	createPageSectionWaypoints(){
		var that = this;
		this.pageSections.each(function(){
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction){
					if(direction=="down") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLink.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
					
				},
				offset: "50%"
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction){
					if(direction=="up") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLink.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
					
				},
				offset: "-40%"
			});
		});
	}
}

export default StickyHeader;