/*document.addEventListener("DOMContentLoader", function(){
    const lookupButton = document.getElementById("lookup");
    const resultDiv = document.getElementById("result")

    // Add a click event listener to the lookup button
    lookupButton.addEventListener("click", function(){
        // Get the country name from the input field
        const country = document.getElementById("country").value;

        // Create an XMLHttpRequest object
        const xhr = new XMLHttpRequest()

        xhr.onload = function(){
            resultDiv.innerHTML = "Hello";//this.responseText;
        }

        const url = `http://localhost:8888/info2180-lab5/world.php?country=${country}`;

        xhr.open("GET", url, true);
        xhr.send();

    })
})*/

$(document).ready(function() {
    var button = $('#lookup');
    button.on('click', function(element){
        element.preventDefault();
        var country = $('#country').val();
  
        $.ajax('http://localhost:8888/info2180-lab5/world.php', {
            method: 'POST',
            data: {
            country: country
            }
        }).done(function(response) {
            var resp = response;
            console.log(resp);
            $('#result').html(resp);
        }).fail(function() {
            alert('There was a problem with the request.');
        });
    });
});