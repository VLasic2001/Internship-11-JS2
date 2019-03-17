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

let sleeveLengthArray = [
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

let necklineArray = [
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
sleeveLengthList.innerHTML = sleeveLengthArray.map(item => `<li class="dropdown__list__item">${item.type} <span class="list__item__count"> (${item.count})</span></li>`).join('');
necklineList.innerHTML = necklineArray.map(item => `<li class="dropdown__list__item">${item.type} <span class="list__item__count"> (${item.count})</span></li>`).join('');

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
<div class="offers__item">
<img class="item__img" src="${item.src}" alt="Offer" />
<img class="item__heart-shape" src="./assets/images/heart-shape.png" alt="Hearth Shape">
<img class="item__heart-full" src="./assets/images/heart-full.png" alt="Hearth Full">
<p class="item__img-description">${item.description}</p>
<p class="item__paragraph">${item.paragraph}</p>
<span class="item__price">${item.price}</span>
</div>
`);

for (let item of document.getElementsByClassName("offers__item")){
    item.addEventListener("mouseover", function(){
        this.getElementsByClassName("item__heart-full")[0].classList.add("item__heart-hovered")
        this.getElementsByClassName("item__img-description")[0].classList.add("item__description-hovered")
    });
}
for (let item of document.getElementsByClassName("offers__item")){
    item.addEventListener("mouseleave", function(){
        this.getElementsByClassName("item__heart-full")[0].classList.remove("item__heart-hovered")
        this.getElementsByClassName("item__img-description")[0].classList.remove("item__description-hovered")
    });
}