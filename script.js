const api = "https://www.breakingbadapi.com/api/characters/";
async function getData() {
    try {
        const response = await fetch(api);
        const data = await response.json();
        console.log(data)
        printData(data)
    } catch (e) {
        console.log("Error : ", e.message)
    }
}

function printData(data) {
    const header = document.querySelector("#header")
    const content = document.querySelector("#content")
    const characterName = data.map((characther) => {
        return characther.name
    })
    header.innerHTML += `
    <select class="form-control" onchange="getCh(this.value)">
    <option>Please select an actor</option>
    <option> ${charachter}</option> <select> `
    const select = document.createElement("select")
    select.classlist.add("form-control")
    select.addEventListener("change", getCh(this.value))


}
async function getCh(name) {
    if (name != "Please select an actor") {
        const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${name}`);
        const data = await response.json();

        /*  content.innerHTML=` < div class = "alert alert-success" > < h2 > $ { data[0].name }($ { data[0].nickname }) < /h2></div >
        <
        div class = "alert alert-danger" > < h4 > $ { data[0].portrayed } < /h4></div >
        <
        img class = "img-thumbnail"
    src = "${data[0].img }"
    width = "250" >
        `*/

        content.innerHTML = ` < div class = "card alert alert-secondary "
    style = "width:350px" >
        <
        img class = "card-img-top img-thumbnail"
    src = "${data[0].img }"
    alt = "Card image"
    style = "width:100%" / >
        <
        div class = "card-body" >
        <
        h4 class = "card-title alert alert-success" > ${ data[0].name }(${ data[0].nickname }) < /h4> <
    h4 class = "alert-danger" > $ { data[0].portrayed } < /h4> <
    a href = "#"
    class = "btn btn-primary stretched-link" > See Profile < /a> */


    <
    /div> < /
    div >




        `


    }
}
getData();