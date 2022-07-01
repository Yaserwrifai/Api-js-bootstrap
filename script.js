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

// 2-print data in header and in content of Page
function printData(data) {
    const select = document.getElementById("select");
    data.forEach((element) => {
        let myOption = document.createElement("option")
        myOption.value = element.name
        myOption.innerHTML = element.name
        select.appendChild(myOption)

    })
}


function fetchCharacter(data) {
    select = document.getElementById("select");
    select.addEventListener("change", (event) => {
        //console.log(data)
        // const charachterName = event.target.value;
        // console.log(event.target.value);
        const filterCharacters = data.filter(item => {
                return event.target.value === item.name;
            })
            // const filterCharacters = (charactersList, selectedCharacter) => {}
        console.log("filterCharacter : >", filterCharacters)

        //printData(filterCharacters)
        createCard(filterCharacters)


    })
}


function createCard(ele) {
    const mycard = document.getElementById("cardid");
    // mycard.Node.removeChild(mycard)
    mycard.innerHTML = "";
    let img = document.createElement("img");
    img.setAttribute("src", ele[0].img);
    img.setAttribute("alt", "Not found");
    img.classList.add("card-img-top");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let h5 = document.createElement("h5");
    cardBody.classList.add("card-title");
    h5.innerHTML = ele[0].name;

    let p = document.createElement("p");
    cardBody.classList.add("card-text");
    p.innerHTML = ele[0].birthday

    //let myButton = document.createElement("a");


    mycard.appendChild(img);
    cardBody.appendChild(h5);
    cardBody.appendChild(p);
    //cardBody.appendChild(myButton);

    mycard.appendChild(cardBody);


}