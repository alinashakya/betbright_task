<?php

/**
 * Function used to get upcoming lottery dates
 * @param date $date 
 * @return array $value array of recent two lottery dates
 */
function getUpcomingDates($date)
{
    $currentDay = date('l');
    $wednesday  = (checkForToday($date, 'Wednesday')) ? $date : nextDay($date, 'wednesday');
    $saturday   = (checkForToday($date, 'Saturday')) ? $date : nextDay($date, 'saturday');
    $value      = array(
        $wednesday,
        $saturday
    );
    asort($value);
    return $value;
}

/**
 * Function used to check if date provided is equals to day provided
 * @param date $date 
 * @param day $day
 * @return boolean 
 */
function checkForToday($date, $currentDay)
{
    $compareDate = date('Y-m-d 20:00:00');
    $today       = date('l');
    return strtotime($compareDate) > strtotime($date) && $currentDay == $today;
}

/**
 * Function used to get date of next occurence of given day
 * @param date $date 
 * @param day $day 
 * @return date
 */
function nextDay($date, $day)
{
    $day = 'next ' . strtolower($day);
    return date('Y-m-d', strtotime($day, strtotime($date)));
}

$givenDate   = isset($_GET['givenDate']) ? $_GET['givenDate'] : '';
$currentDate = date('Y-m-d H:i:s');
$date        = (!empty($givenDate)) ? $givenDate : $currentDate;
$dates       = getUpcomingDates($date);
echo "Next valid Irish lottery draw dates are: <br/>";
foreach ($dates as $key => $val) {
    echo date_format(date_create($val),'Y-m-d, l') . '<br/>';
}