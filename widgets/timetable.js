$( document ).ready(function() {
	$('.ff-timetable').each(function() {
		var $ff_timetable_heightratio = 1.25; //each minuite should equal this many pixels
		var $ff_timetable_height = $(this).attr('data-ff-timetable-daylength') * $ff_timetable_heightratio;
		
		$('.ff-timetable-blocks').height($ff_timetable_height);
		
		$('.ff-timetable-block').each(function() {	
			$ff_lesson_start = $(this).attr('data-ff-timetable-starttime');
			$ff_lesson_end = $(this).attr('data-ff-timetable-endtime');
			
			$ff_lesson_height = ($ff_lesson_end - $ff_lesson_start) * $ff_timetable_heightratio;
			$ff_lesson_top = $ff_lesson_start * $ff_timetable_heightratio;
			
			$(this).css({
				'height': $ff_lesson_height,
				'top': $ff_lesson_top
			});	
		});
		
	});//each timetable
});