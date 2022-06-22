//alert("eeeeeeeeee");
/*fetch ("https://www.breakingbadapi.com/api/")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
})
*/

const api="https://www.breakingbadapi.com/api/characters/";
async function getData(){
    const response = await fetch(api);
    const data=await response.json();
    printData(data)
    } 

function printData(data){
    const header =document.querySelector("#header")
    const content=document.querySelector("#content")

    header.innerHTML +=`
    <select class="form-control">
    <option>Please select an actor</option>
    ${data.map(charachter=>`<option>${charachter.name}</option>`)}
    </select>`
    console.log(header);
}



    getData();

    /*document.querySelector("#content h1").innerHTML=data[0].name;
    document.querySelector("#content h5").innerHTML=data[0].birthday;
    document.querySelector("#content img").src=data[0].img;

    document.querySelector("#actor").innerHTML=`
    <select name="" id="">
    ${
        data.map(actor =>`<option value="">${actor.name}</option>`)
    }
    
            
        </select>
    
    `;
 
}
*/