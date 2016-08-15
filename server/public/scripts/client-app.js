$(document).ready(function() {

    console.log('werkin');
    //event listener
    $('#calcForm').on('submit', function() {
        event.preventDefault();

        console.log('calculate');
        var math = {};
        var fields = $(this).serializeArray();
        fields.forEach(function(field) {
            math[field.name] = field.value;
        });
    });

    console.log('given math object: ', math);

    if (math.inputX == "" || math.inputY == "") {
        alert("dont leave any blank spaces");
    } else {
        if (math.operation == "div" && math.inputY == 0) {
            alert("No divi by zero");
        } else {
            $.ajax({
                type: "POST", // route needs same type , same url (router.post)
                url: '/calculate/' + math.operation, //add //sub //multiply //divide //this is a dynamically created URL
                data: math,
                success: updateDom
            });
        }
    }


}); // doc ready ending


function updateDom(response) {
    console.log('server says: ', response);
    $("#answer-conatiner").text(response);
}
