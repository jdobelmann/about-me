const key = "81511959";
const xhttp = new XMLHttpRequest();
function getMovie() {
    const title = document.getElementById("title").value;
    localStorage.setItem("title", title);

    // Replace spaces with +
    const titleRequest = title.split(' ').join('+');

    // Send request
    xhttp.open("GET", "http://www.omdbapi.com/?apikey=" + key + "&t=" + titleRequest, true);
    xhttp.onreadystatechange = function() {

	let result = xhttp.responseText;
	// Determine if the movie actually exists
	if (result.Response == false) {
    	    document.getElementById("rating").value = "Movie not found";
	} else {
    	    //document.getElementById("rating").value = "Rotten Tomatoes Rating: " + result.Ratings[1].Value;
    	    document.getElementById("rating").value = result;
	}
    }

    xhttp.send();

}
