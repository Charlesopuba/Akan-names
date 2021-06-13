//This part you enables the whole magic to happen//
var names = function(a,b,c,d){
    var malenames = ['Kwasi','Kudwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
}
var d = new Date(a, --c, d);
if (g === "Female") {
    return d && maleNames[d.getDay()];
} else {
    return d && femaleNames[d.getDay()];
}


// User interface (or front-end) logic:
$(document).ready(function() {
$("form#form").submit(function(event) {
    event.preventDefault();
    var a = parseInt($("#year").val());
    var b = parseInt($("#month").val());
    var c = parseInt($("#date").val());
    var d = $("input:radio[name=gender]:checked").val();
    var result = akan(a, b, c, d);
    alert("Your akan name is: " + result);
    //refresh page
    document.getElementById("form").reset();
});
});

