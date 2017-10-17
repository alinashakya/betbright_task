/**
 * gets images and appends to certain div
 * @param json
 */
function jsonFlickrFeed(json){
  Object.keys(json.items.slice(0,5)).forEach(function (key) {
    var image = document.createElement('img');
    image.setAttribute("src", json.items[key].media.m);
    image.setAttribute("alt", "animal");
    image.setAttribute("height", "150");
    image.setAttribute("width", "150");
    var src = document.getElementById("animal-result");
    document.getElementById("animal-result").appendChild(image);
  });
}

/**
 * load animals using flickr api
 * @param animalName 
 */
function loadAnimals(animalName){
  document.getElementById("animal-result").innerHTML = "";
  var script = document.createElement('script');
  script.src = "https://api.flickr.com/services/feeds/photos_public.gne?tags="+animalName+"&format=json";
  document.getElementById("animal-result").appendChild(script);
}