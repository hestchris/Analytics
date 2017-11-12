

// capturing time spent on page
$(document).ready(function() {
	var start = Date.now();
	var totalScrolled = 0;
	var mouseTime = {}
	var vowel = 0

	// Scroll percentage
	$(window).scroll(function() {
		var currY = $(window).scrollTop();
		var totalHeight = $(document).height();
		var windowHeight = $(window).height();
		var scrollPercentage = Math.round((currY / (totalHeight - windowHeight)) * 100);
			if (totalScrolled < scrollPercentage) {
				totalScrolled = scrollPercentage;
			}
		// console.log(scrollPercentage);
	})


		//mouse hover data
	$('*').on('mouseenter', function(eventInfo) {      //'*' is a wild card and will pull info from ALL elements in document
		// console.log(eventInfo.target.id)
		// if we have a property on mousetime of this id <?> use the total time that already exists. <:> otherwise set to 0
		if (mouseTime[eventInfo.target.id]) {
			mouseTime[eventInfo.target.id] = { totalTime : mouseTime[eventInfo.target.id]['totalTime'] }; 
		}
		else {
			mouseTime[eventInfo.target.id] = {totalTime: 0};
		}
		// mouseTime[eventInfo.target.id] = {totalTime: mouseTime[eventInfo.target.id] ? mouseTime[eventInfo.target.id]['totalTime'] : 0};    //brackets [] are "at" and this passes new info to mouseTime
        mouseTime[eventInfo.target.id]['startTime'] = Date.now();
        console.log(mouseTime)
	})

	$('*').on('mouseleave', function(eventInfo) {
		mouseTime[eventInfo.target.id]['endTime'] = Date.now();
		mouseTime[eventInfo.target.id].totalTime += (mouseTime[eventInfo.target.id].endTime - mouseTime[eventInfo.target.id].startTime) / 1000;
		console.log(mouseTime);
	})




	//Vowels typed
	$(document).keydown(function() {
		if (event.key === 'a' || event.key === 'e' || event.key === 'i' || event.key === 'o' || event.key === 'u' )
			vowel += 1
			vowelsTyped = ("Visitor Typed " + vowel + " vowels");
			console.log(vowel)
	})

	//Which link did they click?
	$('link').click(function(){
		console.log($('link').val());
	});



	$(window).on('unload', function() {
		var end = Date.now();
		for ( el in mouseTime ) {
			console.log(el, mouseTime[el].totalTime)
		}


		console.log('time on page', (end-start)/1000);
		console.log('total scrolled', totalScrolled)
	})
})






