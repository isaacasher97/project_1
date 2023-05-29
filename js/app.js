$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        const userInput = $("input[name='country']").val(); // Get the user's input from the text input field

        $.ajax("http://api.citybik.es/v2/networks")
        .then(function(data) {
    
        });
    });
    
    console.dir(document.body);

});
