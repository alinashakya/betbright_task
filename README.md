# Betbright Task
“Tasks has been divided into three folder structures.”
1.  html-css: Includes Design Markup
2.  javascript: Includes JS Excercise
3.  php: Includes PHP Exercise

### html-css ######
This includes design of the card using HTML5 and css. It has following features :
*   Back and Front flip of the card
*   Responsive design for screen size below 600px
*   Terms & Conditions scroll bar
*   Card is made page centered.
It has it's html in file casino.html. Css and Image files are stored in separate folders css and images respectively.

### javascript ######
This includes html page with javascript functions to display 5 animals per button click. It has three buttons Cow, Dog and Giraffe. It uses flickr API to display specific animals.
It has following features :
*    Clicking on particular button leads to display 5 images of it's type.
Display of animals using flickr API is done on two ways.
1.  First, using javascript ajax method with html "animal-ajax.html", js "animal-ajax.js". It uses XMLHttpRequest. It uses api key which is stored in config.js file (gitignore it for security purposes), codes can be viewed in config.js.sample file.
1.  Secondly, using javascript script method with html "animal-script.html", js "animal-script.js". It uses createElement.
Both of them uses common css file "animal.css".

### php ######
This includes php functionality in "date.php" file that calculates and returns the next valid Irish lottery draw date. It has function "getUpcomingDates($date)" where $date is user given date, if not given takes the current date.

### Browser compatibility ######
It is tested in mozilla version 55.0.2 (64-bit) and chrome version 57.0.2987.133 (64-bit).
