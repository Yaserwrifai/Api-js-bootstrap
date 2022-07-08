// 1- get data from URL(API)
const api = "https://www.breakingbadapi.com/api/characters/";
//const api = api_url;
async function getData() {
    try {
        const response = await fetch(api);
        const data = await response.json();
        // console.log(data)
        printData(data)
            //createCard(data)
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
        //console.log("select value", select)
        // console.log('you clicked a character :>> ', select.value);
        const filterCharacters = data.filter(item => {
            return item.name === select.value || select.value === "all";
        })
        createCard(filterCharacters)
    })
}

//....................................................................................................................
// 3- createCard  and data in it

function createCard(ele) {
    console.log("ele", ele)
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    ele.forEach((ele) => {
        let myCard = document.createElement("div")
        myCard.classList.add("col.6")
        myCard.classList.add("col.sm-4")
        cardContainer.appendChild(myCard)




        let img = document.createElement("img");
        img.setAttribute("src", ele.img);
        img.setAttribute("alt", "Not found");
        img.classList.add("card-img-top");
        myCard.appendChild(img);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let h3 = document.createElement("h3");
        h3.classList.add("card-title");
        h3.innerHTML = ele.name;

        let p = document.createElement("p");
        p.classList.add("card-text");
        if (ele.birthday == "Unknown") { p.innerHTML = "Birth unknown in the data" } else { p.innerHTML = ele.birthday }

        let collapseButton = document.createElement("a");
        collapseButton.classList.add("btn");
        collapseButton.classList.add("btn-primary");

        collapseButton.innerHTML = "See More";
        collapseButton.addEventListener("click", () => {
            if (collapseButton.innerHTML === "See More") {
                collapseButton.innerHTML = "See Less";
            } else {
                collapseButton.innerHTML = "See More"
            }
        })
        collapseButton.setAttribute("data-toggle", "collapse")
        collapseButton.setAttribute("data-target", "#" + ele.nickname)

        let mycollapse = document.createElement("div");
        mycollapse.classList.add("collapse");
        mycollapse.setAttribute("id", ele.nickname)

        let p1 = document.createElement("p");
        p1.innerHTML = "What is the job? : " + ele.occupation[0];
        mycollapse.appendChild(p1);
        p1.classList.add("px-4");

        let p2 = document.createElement("p");
        p2.innerHTML = "Is he alive? : " + ele.status;
        mycollapse.appendChild(p2);
        p2.classList.add("px-4");




        //--------------------------------------------------------
        // cardContainer.appendChild(img);
        cardBody.appendChild(h3);
        cardBody.appendChild(p);
        cardBody.appendChild(collapseButton);

        myCard.appendChild(cardBody);
        cardContainer.appendChild(mycollapse);
        //------------------------------------------------------
    })
}