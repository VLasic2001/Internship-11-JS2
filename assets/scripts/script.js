let sortArray = [
    {type: "Black", count: "1014"},
    {type: "White", count: "1014"},
    {type: "Navy", count: "1014"},
    {type: "Gray", count: "1014"},
    {type: "Green", count: "1014"},
    {type: "Red", count: "1014"},
    {type: "Multi", count: "1014"},
    {type: "Blue", count: "1014"},
    {type: "Pink", count: "1014"},
    {type: "Beige", count: "1014"},
    {type: "Purple", count: "1014"},
    {type: "Yellow", count: "1014"},
];

let productTypeArray = [
    {type: "Black", count: "1014"},
    {type: "White", count: "1014"},
    {type: "Navy", count: "1014"},
    {type: "Gray", count: "1014"},
    {type: "Green", count: "1014"},
    {type: "Red", count: "1014"},
    {type: "Multi", count: "1014"},
    {type: "Blue", count: "1014"},
    {type: "Pink", count: "1014"},
    {type: "Beige", count: "1014"},
    {type: "Purple", count: "1014"},
    {type: "Yellow", count: "1014"},
];

let sortList = document.getElementById("sort");
let productTypeList = document.getElementById("productType");
let sleeveLengthList = document.getElementById("sleeveLength");
let necklineList = document.getElementById("neckline");

sortList.innerHTML = sortArray.map(item => `<li class="dropdown__list__item">${item.type} <span class="list__item__count"> (${item.count})</span></li>`).join('');
productTypeList.innerHTML = productTypeArray.map(item => `<li class="dropdown__list__item">${item.type} <span class="list__item__count"> (${item.count})</span></li>`).join('');
sleeveLengthList.innerHTML = sortArray.map(item => `<li class="dropdown__list__item">${item.type} <span class="list__item__count"> (${item.count})</span></li>`).join('');
necklineList.innerHTML = sortArray.map(item => `<li class="dropdown__list__item">${item.type} <span class="list__item__count"> (${item.count})</span></li>`).join('');

let itemsArray = [
    {src: "assets/images/offer.jpg",
    description: "TALL",
    paragraph: "Wrangler small logo crew neck t-shirt in white",
    price: "£16.63"},

    {src: "assets/images/offer.jpg",
    description: "TALL",
    paragraph: "Wrangler logo chest stripe rugby polo in blue/white",
    price: "£50.63"},

    {src: "assets/images/offer.jpg",
    description: "TALL",
    paragraph: "Wrangler kobel retro large logo ringer t-shirt in white",
    price: "£20.97"},

    {src: "assets/images/offer.jpg",
    description: "TALL",
    paragraph: "Lyle & Scott polo in burgundy",
    price: "£44.12"},

    {src: "assets/images/offer.jpg",
    description: "TALL",
    paragraph: '<span class="item__paragraph__brand">COLLUSION</span> Unisex long sleeve t-shirt with graphic print in neon green',
    price: "£12.29"},

    {src: "assets/images/offer.jpg",
    description: "TALL",
    paragraph: '<span class="item__paragraph__brand">ASOS DESIGN</span> Disney oversized t-shirt with rainbow',
    price: "£22.42"},

    {src: "assets/images/offer.jpg",
    description: "TALL",
    paragraph: '<span class="item__paragraph__brand">COLLUSION</span> Unisex oversized t-shirt with back print',
    price: "£10.12"},

    {src: "assets/images/offer.jpg",
    description: "TALL",
    paragraph: '<span class="item__paragraph__brand">ASOS DESIGN</span> Mickey reloxed t-shirt with retro print',
    price: "£18.08"},
];

let items = document.getElementById("items");

items.innerHTML = itemsArray.map(item =>`
<div class="offers__item" onclick="openItem(this)">
<img class="item__img" src="${item.src}" alt="Offer" />
<img class="item__heart-shape" src="./assets/images/heart-shape.png" alt="Hearth Shape">
<img class="item__heart-full" src="./assets/images/heart-full.png" alt="Hearth Full">
<img class="item__heart-clickable" onclick="colorHeart(this)" src="./assets/images/heart-full.png" alt="Hearth Full">
<p class="item__img-description">${item.description}</p>
<p class="item__paragraph">${item.paragraph}</p>
<span class="item__price">${item.price}</span>
</div>
`).join('');

for (let item of document.getElementsByClassName("offers__item")){
    item.addEventListener("mouseover", function(){
        this.querySelector(".item__heart-full").classList.add("item__heart-hovered")
        this.querySelector(".item__img-description").classList.add("item__description-hovered")
    });
}
for (let item of document.getElementsByClassName("offers__item")){
    item.addEventListener("mouseleave", function(){
        this.querySelector(".item__heart-full").classList.remove("item__heart-hovered")
        this.querySelector(".item__img-description").classList.remove("item__description-hovered")
    });
}

var favourites = 0;

function heartSetup(){
    for(let heart of document.getElementsByClassName("item__heart-clickable")){
        heart.style.opacity = "0";
    }
}
heartSetup();

function colorHeart(element){
    if(element.style.opacity=="0"){
        element.style.opacity="1";
        favourites += 1;
    }
    else{
        element.style.opacity="0";
        favourites -= 1;
    }
    updateFavourites();
}

function updateFavourites(){
    let element = document.querySelector("#favourites");
    if(favourites > 0){
        element.style.opacity = "1";
        element.textContent = `Favourites: ${favourites}`;
    }
    else
    element.style.opacity = "0";
}

function openItem(item){
    var w = window.open();
    w.document.open();
    w.document.write(`
        <h1>${item.children[5].innerHTML}</h1>
        <h2>${item.children[6].innerHTML}</h2>
        <img src="${item.children[0].src}"/>
        <p>${item.children[4].innerHTML}</p>
    `);
    w.document.close();
}