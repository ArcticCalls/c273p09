$(document).ready(function () {
    
    $("#idCountry").change(function (){
        var id = $(this).val();
        $.ajax({
            type: "GET",
            url: "http://localhost/C273_L09CloudNine/getCountryDetails.php",
            data: "id=" + id,
            cache: false,
            dataType: "JSON",
            success: function(response){
               var msg = "<body><tr><th>Population</th><th>obese</th></tr><tr><td>" + response.population + "</td><td>" + response.obese + "</td></tr></body>";
               
               $("#obeseTable").html(msg);
            }
        })
    })

});
