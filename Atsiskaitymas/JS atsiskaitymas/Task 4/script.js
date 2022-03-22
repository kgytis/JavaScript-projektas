/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const output = document.querySelector("#output")

fetch(ENDPOINT)
.then(res => res.json())
.then(data => {
    console.log(data)
    atvaizdavimas(data)
})

atvaizdavimas = (info) => {
    info.forEach(e => {
        let naujasDiv = document.createElement("div");
        let brand = document.createElement("h2");
        let brandText = document.createTextNode(e.brand)

        brand.append(brandText)
        naujasDiv.append(brand)
        naujasDiv.append(modeliai(e.models))
        output.append(naujasDiv)
        output.style.display = "grid"
        output.style.gridTemplateColumns = "repeat(10, 1fr)"
        output.style.gridTemplateRows = "repeat(4, 1fr)"
    })
}

modeliai = (info) => {
    let models = document.createElement("ul")
    info.forEach(e => {
        let listItem = document.createElement("li")
        let listItemText = document.createTextNode(`${e}`)
        //console.log(listItemText)
        listItem.append(listItemText)
        models.append(listItem)
        //console.log(listItem)
    })
    return models
}