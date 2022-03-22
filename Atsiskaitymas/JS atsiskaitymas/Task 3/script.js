/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke - done
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje) - done
2. Žinutė "Press "Show Users" button to see users" turi išnykti; - done

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const showUsers = document.querySelector("#btn")
const output = document.querySelector("#output")
const message = document.querySelector("#message")
console.dir(message)

showUsers.addEventListener("click", e=>{
    fetch(ENDPOINT)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        atvaizdavimas(data)
    })
})

atvaizdavimas = (info) => {
    //login ir avatar_url
    message.style.display = "none"

    info.forEach(e => {
        let img = document.createElement("img");
        let userName = document.createElement("h4")
        let bendrasDiv = document.createElement("div")
        bendrasDiv.setAttribute("class", "bendrasDiv")
        let userNameText = document.createTextNode(`Login - ${e.login}`)
        img.setAttribute("src", `${e.avatar_url}`)
        img.setAttribute("class", "image")
        userName.append(userNameText)
        bendrasDiv.append(userName);
        bendrasDiv.append(img)
        output.append(bendrasDiv)
        output.style.display = "grid"
        output.style.gridTemplateColumns = "repeat(5, 1fr)"
        output.style.gridTemplateRows = "repeat(6, 1fr)"
        output.style.gridGap = "3px"
        output.style.padding = "5px"
        userName.style.textAlign = "center"
    })
}