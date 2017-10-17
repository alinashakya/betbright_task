<?php

function getUpcomingDates($date){
	$currentDay = date('l');
	$compareDate = date('Y-m-d 20:00:00');
	$wednesday = (strtotime($compareDate) > strtotime($date) && $currentDay == 'Wednesday')?$date:date('Y-m-d', strtotime('next tuesday', strtotime($date)));
	$saturday = (strtotime($compareDate) > strtotime($date) && $currentDay == 'Saturday')?$date:date('Y-m-d', strtotime('next saturday', strtotime($date)));
	
	if(strtotime($wednesday) < strtotime($saturday)){
		echo "Given Date: $date <br/>Next valid Irish lottery draw dates are $wednesday (Wednesday) and $saturday (Saturday)";
	}else{
		echo "Given Date : $date <br/>Next valid Irish lottery draw dates are: $saturday (Saturday) and $wednesday (Wednesday)";
	}
	
}

$givenDate = $_GET['givenDate'];
$currentDate = date('Y-m-d H:i:s');
$date = (!empty($givenDate))?$givenDate:$currentDate;
getUpcomingDates($date);