// api url
const api_url =
	"test.json";

// Defining async function
async function getapi(url) {
	
	console.log('a');
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

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>Age</th>
		</tr>`;
	console.log ('c')
	
	// Loop to access all rows
	for (let r of data.list) {
		tab += `<tr>
	<td>${r.name} </td>
	<td>${r.age}</td>
	</tr>`;
	}
	console.log ('d');
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
	console.log ('e');
}
