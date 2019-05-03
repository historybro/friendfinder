$("#submit").on("click", function(){
    var values = [];
    var name = $("#name").val().trim();
    var photo = $("#photo").val().trim();
    for (var i = 1; i <= 10; i++) {
        if (!isNaN(parseInt($("#q"+i+"option:selected").attr("value"))))
        values.push(parseInt($("#q"+i+"option:selected").attr("value")));
    };
    if (values.length == 10 && name != "" && photo != ""){
        console.log(values, name, photo);
        $("#results").modal("show");
    }else{
        console.log("not all values filled in");
    };
});