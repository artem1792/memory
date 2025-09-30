import { images } from "./data.js";

const container = document.querySelector(".container");
images.forEach((item)=>{
    const card = document.createElement("div");
    card.classList.add("card");
    const img = document.createElement("img");
    img.src = item.url;
    img.alt = "";
    card.append(img);
    container.append(card);
    card.addEventListener("click", () => {
        card.classList.toggle("card-show");
        setTimeout(() => {
            card.classList.toggle("card-show");
        }, 1000);
    })
});

// const cards = document.querySelectorAll(".card");
// for (let card of cards) {
//     card.addEventListener("click", () => {
//         card.classList.toggle("card-show");
//         setTimeout(() => {
//             card.classList.toggle("card-show");
//         }, 1000);
//     })
// }