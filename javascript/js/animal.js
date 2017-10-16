
const imageContainer = document.querySelector("#animal-result");
function loadAnimals(animalName){
	document.getElementById("animal-result").innerHTML = "";
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		var data = JSON.parse(this.responseText);
    		jsonFlickrApi(data.photos.photo,animalName);
    	}
  	};
  	xhttp.open("GET", "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+apiKey+"&tags="+animalName+"&format=json&page=1&per_page=5&nojsoncallback=?", true);
  	xhttp.send();
}

function jsonFlickrApi(response,animalName){
	response.forEach(function(val){
		var image = document.createElement("img");
		image.setAttribute("src", "https://farm"+val.farm+".staticflickr.com/"+val.server+"/"+val.id+"_"+val.secret+"_q.jpg");
    	image.setAttribute("alt", animalName);
    	var src = document.getElementById("animal-result");
		src.appendChild(image);
	});
}

function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}