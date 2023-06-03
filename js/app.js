$(document).ready(function() {
    // Execute the code once the document is ready

    $("form").submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        const userInput = $("input[name='country']").val().toLowerCase(); // Get and convert the user input to lowercase
        
        $.ajax("https://api.citybik.es/v2/networks")
        .then(function(data) {
            let found = false; // Flag to check if a match is found
            let locationInfo; // Stores the location information
            let name; // Stores the name information
            let company; // Stores the company information

            // Loop through the networks data to find a match
            for (let i = 0; i < data.networks.length; i++) {
                const city = data.networks[i].location.city.toLowerCase();
                const country = data.networks[i].location.country.toLowerCase();

                // Check if the city or country matches the user input
                if (city === userInput || country === userInput) {
                    found = true;
                    locationInfo = data.networks[i].location; // Store the location information
                    name = data.networks[i].name; // Store the name information
                    company = data.networks[i].company; // Store the company information
                    break;
                }
            }

            // Remove any previous result
            $(".keyimg .answer").remove();

            if (found) {
                // Render the location, name, and company information in the keyimg div
                let popupContent = "<h2>Location Information</h2>";
                popupContent += "<p><strong>Name:</strong> " + name + "</p>";
                popupContent += "<p><strong>Company:</strong> " + company + "</p>";
                popupContent += "<p><strong>City:</strong> " + locationInfo.city + "</p>";
                popupContent += "<p><strong>Country:</strong> " + locationInfo.country + "</p>";
                popupContent += "<p><strong>Latitude:</strong> " + locationInfo.latitude + "</p>";
                popupContent += "<p><strong>Longitude:</strong> " + locationInfo.longitude + "</p>";
                popupContent += "<button class='directions-button'>🚴Get Directions🚴</button>";
                $(".keyimg").append("<div class='answer'>" + popupContent + "</div>");

                // Add event listener to the directions button
                $(".directions-button").on("click", function() {
                    const latitude = locationInfo.latitude;
                    const longitude = locationInfo.longitude;
                    const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=" + latitude + "," + longitude;
                    window.open(googleMapsUrl, "_blank"); // Open a new tab with the Google Maps URL
                });
            } else {
                // Render the error message in the keyimg div
                const errorMessage = "Sorry, No Rides Found 😔";
                $(".keyimg").append("<div class='answer error'>" + errorMessage + "</div>");
            }
        });
    });
});
