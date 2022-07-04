// 1- get data from URL(API)
const api = "https://www.breakingbadapi.com/api/characters/";
async function getData() {
    try {
        const response = await fetch(api);
        const data = await response.json();
        console.log(data)
        printData(data)
        fetchCharacter(data)
    } catch (e) {
        console.log("error : >>", e);

    }
}
getData();
//....................................................................................................................
// 2-print data in select tag
function printData(data) {
    const select = document.getElementById("select");
    data.forEach((element) => {
        let myOption = document.createElement("option")
        myOption.value = element.name
        myOption.innerHTML = element.name
        select.appendChild(myOption)
    })

}

//....................................................................................................................
// 2-filter data according Name 
function fetchCharacter(data) {
    select = document.getElementById("select");
    select.addEventListener("change", (event) => {
        console.log('you clicked a character :>> ');
        const filterCharacters = data.filter(item => {
            return item.name === event.target.value;
        })
        createCard(filterCharacters)
    })
}
//....................................................................................................................
// 3- createCard  and data in it

function createCard(ele) {
    const mycard = document.getElementById("cardid");
    mycard.innerHTML = "";

    let img = document.createElement("img");
    img.setAttribute("src", ele[0].img);
    img.setAttribute("alt", "Not found");
    img.classList.add("card-img-top");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let h3 = document.createElement("h3");
    h3.classList.add("card-title");
    h3.innerHTML = ele[0].name;

    let p = document.createElement("p");
    p.classList.add("card-text");
    if (ele[0].birthday == "Unknown") { p.innerHTML = "Birth unknown in the data" } else { p.innerHTML = ele[0].birthday }

    let myButton = document.createElement("a");
    myButton.classList.add("btn");
    myButton.classList.add("btn-primary");

    myButton.innerHTML = "See More";
    myButton.addEventListener("click", () => {
        if (myButton.innerHTML === "See More") {
            myButton.innerHTML = "See Less";
        } else {
            myButton.innerHTML = "See More"
        }
    })
    myButton.setAttribute("data-toggle", "collapse")
    myButton.setAttribute("data-target", "#demo")

    let mycollapse = document.createElement("div");
    mycollapse.classList.add("collapse");
    mycollapse.setAttribute("id", "demo")

    let p1 = document.createElement("p");
    p1.innerHTML = "What is the job? : " + ele[0].occupation[0];
    mycollapse.appendChild(p1);
    p1.classList.add("px-4");

    let p2 = document.createElement("p");
    p2.innerHTML = "Is he alive? : " + ele[0].status;
    mycollapse.appendChild(p2);
    p2.classList.add("px-4");
    //--------------------------------------------------------
    mycard.appendChild(img);
    cardBody.appendChild(h3);
    cardBody.appendChild(p);
    cardBody.appendChild(myButton);

    mycard.appendChild(cardBody);
    mycard.appendChild(mycollapse);
    //------------------------------------------------------

}