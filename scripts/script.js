var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://baconipsum.com/api/?type=meat-and-filler&paras=18&format=text', true);

request.onload = function () {
  // Begin accessing JSON data here
    //console.log(this.response)
    
    document.getElementById('welcomemessage').innerHTML = '<h1>The holy text:</h1><h3>' + this.response + '</h3>';
}

// Send request
request.send();