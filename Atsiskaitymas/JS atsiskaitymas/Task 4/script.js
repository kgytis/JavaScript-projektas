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

const table = document.createElement("table")
const tableHead = document.createElement("thead")
const tableHeadTr = document.createElement("tr")

const tableBrandTH = document.createElement("th")
const tableBrandText = document.createTextNode("Brand")
const tableModelTH = document.createElement("th")
const tableModelText = document.createTextNode("Model")

const tableBody = document.createElement("tbody")

tableBrandTH.append(tableBrandText)
tableModelTH.append(tableModelText)

tableHeadTr.append(tableBrandTH)
tableHeadTr.append(tableModelTH)

tableHead.append(tableHeadTr)
table.append(tableHead)
table.append(tableBody)
output.append(table)

fetch(ENDPOINT)
.then(res => res.json())
.then(data => {
    console.log(data)
    atvaizdavimas(data)
})

atvaizdavimas = (info) => {
    info.forEach(e => {
        let naujasTr = document.createElement("tr");
        let brandTd = document.createElement("td");
        let brandTdText = document.createTextNode(e.brand)
        let modelTd = document.createElement("td");
        let modelTdText = document.createTextNode(modeliai(e.models))

        brandTd.append(brandTdText)
        naujasTr.append(brandTd)
        modelTd.append(modelTdText)
        naujasTr.append(modelTd)
        tableBody.append(naujasTr)
    })
}

modeliai = (info) => {
    let models = []
    info.forEach(e => {
        models.push(e)
    })
    return models.join(' | ')
}