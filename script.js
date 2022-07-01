// 1- get data from URL(API)
const api = "https://www.breakingbadapi.com/api/characters/";
async function getData() {
    try {
        const response = await fetch(api);
        const data = await response.json();
        console.log(data)
        printData(data)
    } catch (e) {
        console.log("error : >>", e);

    }
}

// 2-print data in header and in content of Page
function printData(data) {
    const select = document.getElementById("select");
    data.forEach((element) => {
            let myOption = document.createElement("option")
            myOption.value = element.name
            myOption.innerHTML = element.name
            select.appendChild(myOption)
                // show data into  cards

            const mycard = document.getElementById("cardid");

            let img = document.createElement("img");
            img.setAttribute("src", element.img);
            img.setAttribute("alt", "Not found");
            img.classList.add("card-img-top");

            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            let h5 = document.createElement("h5");
            cardBody.classList.add("card-title");
            h5.innerHTML = element.name;

            let p = document.createElement("p");
            cardBody.classList.add("card-text");
            p.innerHTML = element.birthday

            //let myButton = document.createElement("a");


            mycard.appendChild(img);
            cardBody.appendChild(h5);
            cardBody.appendChild(p);
            // cardBody.appendChild(myButton);

            mycard.appendChild(cardBody);


        }

    );


}
getData();


//=====================================================================
/*
    select.addEventListener("change", (event) => {
        console.log(event.target.value);
        const charachterName = event.target.value
 fetchCharacter(charachterName)
    })





async function getCh(name) {
    if (name != "Please select an actor") {
        const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${name}`);
        const data = await response.json();
    }
    return data.name
}

*/