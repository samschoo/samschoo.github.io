function limerick() {

    // get answers from inputs
    var name = $("#name").val();
    var from = $("#from").val();
    var adj1 = $("#adj1").val();
    var adj2 = $("#adj2").val();
    var choice = $("[name='choice']:checked").val()

    if (name == "" || from == "" || adj1 == "" || adj2 == "") { // answer validation
        alert("Field(s) left empty.");
    } else { // limerick creation
        $("#questions").hide();

        var result = "<h2>Your Limerick:</h2><p>There was someone named " + name +" from " + from + "</p><p>Their friends would often call them " + adj1 + "</p>";
        if (choice == "cricket") {
            result += "<p>" + name + " was the best at cricket</p><p>But no one could see it</p>";
        } else if (choice == "cake"){
            result += "<p>" + name + " ate all the cake</p><p>But there was a lot at stake";
        } else {
            result += "<p>When " + name + " was a child</p><p>They went a bit wild</p>";
        }
        result += "<p>And their friends say they're " + adj2 + "</p>";

        $("#results").html(result);
        $("#results").show();
        $("#doquestions").show();    
        }; 
    }
       

// preparation/cleanup function
function questions() {
    $("#results").hide();
    $("#doquestions").hide();
    $("#name").val("");
    $("#from").val("");
    $("#adj1").val("");
    $("#adj2").val("");
    $("#questions").show();
    $("#name").focus();
}

$(window).on("load", function(){

    console.log("page is fully loaded");

    questions(); // do preparation

    // triggers limerick creation
    const limbutton = document.getElementById("dolimerick");
    limbutton.addEventListener("click", limerick, false);

    // triggers cleanup
    const quesbutton = document.getElementById("doquestions");
    quesbutton.addEventListener("click", questions, false);
});