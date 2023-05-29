$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        const userInput = $("input[name='country']").val(); // Get the user's input from the text input field

        $.ajax("http://api.citybik.es/v2/networks")
        .then(function(data) {
            let found = false;
            let locationInfo;

            for (let i = 0; i < data.networks.length; i++) {
                if (data.networks[i].location.city === userInput) {
                    found = true;
                    locationInfo = data.networks[i].location;
                    break;// breaks the loop
                }
            }
        });
    });
});
