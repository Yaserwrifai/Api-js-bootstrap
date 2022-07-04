fetch("https://www.breakingbadapi.com/api/characters/").then(
    res => {
        res.json().then(
            data => {
                console.log(data);

                if (data.length > 0) {
                    var temp = "";

                    //start for loop

                    data.forEach((u) => {
                            temp += "<tr>";
                            temp += "<td>" + u.char_id + "</td>";
                            temp += "<td>" + u.name + "</td>";
                            temp += "<td>" + u.birthday + "</td>";
                        })
                        //close for  loop

                    document.getElementById("tdata").innerHTML = temp;

                }


            }
        )
    }

)

$(document).ready(function() {
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#tdata tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});