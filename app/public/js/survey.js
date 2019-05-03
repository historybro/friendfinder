$("#submit").on("click", function(){
    console.log('submit clicked')
    var user = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        values: []
    };

    for (var i = 0; i < 2; i++) {
        var score = $("#q"+i).val();
        user.values.push(parseInt(score));        
    };
    var url = window.location.origin;
    $.post(url +"/api/friends"), user, function(data) {
        var match = {
            txt: "You match with " +data.name,
            img: "<img src=\""+data.photo+"\">"
        };
        modal(match);
        $("#name").val("");
        $("#photo").val("");
    }
    event.preventDefault();
});

function modal(data) {
    $("#match-name").text(data.txt);
    $("#match-img").html(data.img);
    $("#match-results").show(800, function(){
        timeoutID = window.setTimeout(hideDiv, 8000);
        function hideDiv(){
            $("#match-results").hide(800);
        };
    });
};