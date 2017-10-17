/**
 * load animals using flickr api
 * @param animalName 
 */
function loadAnimals(animalName){
	document.getElementById("animal-result").innerHTML = "";
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		jsonFlickrApi(JSON.parse(this.responseText).photos.photo,animalName);
    	}
  	};
  	xhttp.open("GET", "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+apiKey+"&tags="+animalName+"&format=json&page=1&per_page=5&nojsoncallback=?", true);
  	xhttp.send();
}

/**
 * gets images and appends to certain div
 * @param response
 * @param animalName 
 */
function jsonFlickrApi(response,animalName){
	response.forEach(function(val){
		var image = document.createElement("img");
		image.setAttribute("src", "https://farm"+val.farm+".staticflickr.com/"+val.server+"/"+val.id+"_"+val.secret+"_q.jpg");
    	image.setAttribute("alt", animalName);
		document.getElementById("animal-result").appendChild(image);
	});
}