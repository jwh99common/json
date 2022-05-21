// api url
const api_url = "test.json";

// Defining async function
async function getapi(url) {
	
	console.log(url);
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log ('b');
	
	console.log(data);
	
	show(data);
	console.log ('c');
	
}

// Calling that async function
console.log (api_url);
getapi(api_url);


// Function to define innerHTML for HTML table
function show(data) {
	
	
	
	console.log ('c')
	
	for(var i = 0; i < data.length; i++) {
    		var obj = data[i];
    		console.log(obj.id);
	}
	console.log ('d');
	
}
