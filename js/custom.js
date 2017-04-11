jQuery(document).ready(function($) {
	$(".fusion-modal").each(function(idx, m) {
		$(m).find("[data-layerslider-uid]").each(function(idx, ls) {
			$(m).on("show.bs.modal", function(event) {
				$(ls).layerSlider('data').slideshow.state.paused = false;
				$(ls).layerSlider(1);
				$(ls).layerSlider('start');
			});
			$(m).on("hide.bs.modal", function(event) {
				$(ls).layerSlider('data').slideshow.state.paused = true;
				$(ls).layerSlider('stop');
			});
		});
	});
});



function dayTh(day) {
	var th = "th";
	switch(day.toString().charAt(day.toString().length-1)) {
	case "1":
		th = "st";
		break;
	case "2":
		th = "nd";
		break;
	case "3":
		th = "rd";
		break;
	default:
		th = "th";
		break;
	}
	return day.toString() + "<sup>" + th + "</sup>"

}

// Business Date Management
//

function businessDaysFromDate(date,businessDays) {
	var counter = 0, tmp = new Date(date);
	while( businessDays>=0 ) {
		tmp.setTime( date.getTime() + counter * 86400000 );
		if(isBusinessDay (tmp)) {
			--businessDays;
		}
		++counter;
	}
	return tmp;
}

function isBusinessDay (date) {
	var dayOfWeek = date.getDay();
	if(dayOfWeek === 0 || dayOfWeek === 6) {
		// Weekend
		return false;
	}

	holidays = [
		'12/31+5', // New Year's Day on a saturday celebrated on previous friday
		'1/1',     // New Year's Day
		'1/2+1',   // New Year's Day on a sunday celebrated on next monday
		'1-3/1',   // Birthday of Martin Luther King, third Monday in January
		'2-3/1',   // Washington's Birthday, third Monday in February
		'5~1/1',   // Memorial Day, last Monday in May
		'7/3+5',   // Independence Day
		'7/4',     // Independence Day
		'7/5+1',   // Independence Day
		'9-1/1',   // Labor Day, first Monday in September
		'10-2/1',  // Columbus Day, second Monday in October
		'11/10+5', // Veterans Day
		'11/11',   // Veterans Day
		'11/12+1', // Veterans Day
		'11-4/4',  // Thanksgiving Day, fourth Thursday in November
		'12/24+5', // Christmas Day
		'12/25',   // Christmas Day
		'12/26+1',  // Christmas Day
	];

	var dayOfMonth = date.getDate(),
	month = date.getMonth() + 1,
		monthDay = month + '/' + dayOfMonth;

	if(holidays.indexOf(monthDay)>-1){
		return false;
	}

	var monthDayDay = monthDay + '+' + dayOfWeek;
	if(holidays.indexOf(monthDayDay)>-1){
		return false;
	}

	var weekOfMonth = Math.floor((dayOfMonth - 1) / 7) + 1,
	monthWeekDay = month + '-' + weekOfMonth + '/' + dayOfWeek;
	if(holidays.indexOf(monthWeekDay)>-1){
		return false;
	}

	var lastDayOfMonth = new Date(date);
	lastDayOfMonth.setMonth(lastDayOfMonth.getMonth() + 1);
	lastDayOfMonth.setDate(0);
	var negWeekOfMonth = Math.floor((lastDayOfMonth.getDate() - dayOfMonth - 1) / 7) + 1,
	monthNegWeekDay = month + '~' + negWeekOfMonth + '/' + dayOfWeek;
	if(holidays.indexOf(monthNegWeekDay)>-1){
		return false;
	}

	return true;
}
