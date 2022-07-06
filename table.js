//1 api URL
const url = "https://www.breakingbadapi.com/api/characters/";
//*  2 turn fetch in async/await

const getDataAsync = async() => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log("data >>>", data);
        //filterByDate(data)
        //createHtmlTable(data)
        //createDropDown(data)
        // filterByDropDown(data)
        // constfilterradio(data)
        return data;
    } catch (error) {
        console.log("error", error);
    }
};
getDataAsync()

//* 3 function for creating table 
const createHtmlTable = (data) => {
    let table = document.getElementById("table");
    table.innerHTML = "";

    let row = document.createElement("tr");
    table.appendChild(row);

    let th1 = document.createElement("th");
    th1.innerHTML = "NAME";
    row.appendChild(th1);
    let th2 = document.createElement("th");
    th2.innerHTML = "JOB";
    row.appendChild(th2);
    let th3 = document.createElement("th");
    th3.innerHTML = "Birthday";
    row.appendChild(th3);
    let th4 = document.createElement("th");
    th4.innerHTML = "Is alive";
    row.appendChild(th4);
    data.forEach((ele, i) => {
        let row = document.createElement("tr");
        table.appendChild(row);

        let column = document.createElement("td");
        column.innerHTML = ele.name;
        // a = document.createElement("a");
        // //;;;;;;;;;;;;;;;;;;
        // window.addEventListener('click', (event) => {
        //     window.location.href = "http://127.0.0.1:5501/cards.html";
        //     getData();
        // });
        // a.classList.add("btn")
        // column.appendChild(a)
        row.appendChild(column);


        let column2 = document.createElement("td");
        column2.innerHTML = ele.occupation;
        row.appendChild(column2);

        let column3 = document.createElement("td");
        column3.innerHTML = ele.birthday;
        row.appendChild(column3);

        let column4 = document.createElement("td");
        column4.innerHTML = ele.status;
        row.appendChild(column4);

    });
};


//* 4 generate Dropdown options
const createDropDown = (data) => {
    const dropdown = document.getElementById("bad-id");
    const name = data.map((item) => {
        return item.name;
    });
    // console.log("name", name);
    const unique = [...new Set(name)];
    // console.log("unique >>>", unique);
    unique.forEach((name) => {
        let option = document.createElement("option");
        option.innerHTML = name;
        option.value = name;
        dropdown.appendChild(option);
    });
};

//* 5 make controller function
async function controller() {
    const data = await getDataAsync();
    createHtmlTable(data);
    createDropDown(data);
    createEvent(data)
    filterradio(data)
}
controller()

const createEvent = (data) => {
    const contactSelect = document.getElementById("bad-id")
    contactSelect.addEventListener("change", (event) => {
        console.log(event.target.value)
            // filterByDropDown(data)
        filtersCombined(data)
    })
}

// 6 fiter by dropdown
const filterByDropDown = (data) => {
    const dropDownValue = document.querySelector("#bad-id").value;
    console.log("dropDownValue", dropDownValue);
    const filtered = data.filter((item) => {
        return item.name === dropDownValue || dropDownValue === "all";
    });
    console.log("filtered", filtered);
    createHtmlTable(filtered);
};

//7

const filterradio = (data) => {
    const radios = document.querySelectorAll("input[type='radio']");
    // const radioValue = document.querySelectorAll("input[type='radio']").value
    console.log("radios :>> ", radios);
    radios.forEach((radio) => {

        radio.addEventListener("click", (event) => {
            console.log("radio clicked", radio.value);

            // console.log(event.target.value);
            const filtered1 = data.filter((item) => {
                return item.status === event.target.value;
            });
            // console.log("filtered1", filtered1);
            // console.log("data", data);
            event.target.value === "All" ? createHtmlTable(data) : createHtmlTable(filtered1);
            //createHtmlTable(filtered1);
            // console.log("event.target.value =", event.target.value);

        });
    });
}

const filtersCombined = (data) => {

    // get the dropdown/select value
    const dropDownValue = document.querySelector("#bad-id").value;

    //get the clicked radio button value

    //filter all the data  ..and in the return include both conditions

    const filtered = data.filter((item) => {
        return (item.name === dropDownValue || dropDownValue === "all");
    });

    console.log("combined filters result", filtered)
    createHtmlTable(filtered)
}