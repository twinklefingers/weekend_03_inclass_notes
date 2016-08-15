$(document).ready(function() {

    console.log('werkin');
    //event listener
    $('#calcForm').on('submit', function() {
        console.log('calculate');
        var math = {};
        var fields = $(this).serialzeArray();
        fields.forEach(function(field) {
            math[field.name] = field.value;
        });
    });

    console.log('given math obhect: ', math);
    $.ajax({
        type: "POST",
        url: '/calculate/' + math.operation, //add //sub //multiply //divide //this is a dynamically created URL
        data: math,
        success: updateDom

    });

});

function updateDom(response) {
    console.log('server says: ', response);
}
