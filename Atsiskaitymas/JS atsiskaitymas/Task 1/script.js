/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


const forma = document.querySelector("form");
const output = document.querySelector("#output");


forma.addEventListener("submit", e => {
    e.preventDefault();
    output.innerHTML = ``
    let mase = e.target.elements.search.value
    const bendrasDiv = document.createElement("div")
    bendrasDiv.setAttribute("class", "bendrasDiv")

    const kilogramai = document.createElement("h2")
    const kilogramaiText = document.createTextNode(`Masė kilogramais - ${mase} kg`)

    const gramai = document.createElement("h2")
    const gramaiText = document.createTextNode(`Masė gramais - ${mase / 0.0010000} g`)

    const svarai = document.createElement("h2")
    const svaraiText = document.createTextNode(`Masė svarais - ${mase * 2.2046} lb`)

    const uncijos = document.createElement("h2")
    const uncijosText = document.createTextNode(`Masė uncijomis - ${mase * 35.274} oz`)

    kilogramai.append(kilogramaiText)
    gramai.append(gramaiText)
    svarai.append(svaraiText)
    uncijos.append(uncijosText)

    bendrasDiv.append(kilogramai)
    bendrasDiv.append(gramai)
    bendrasDiv.append(svarai)
    bendrasDiv.append(uncijos)

    output.append(bendrasDiv)

    e.target.elements.search.value = null;
})