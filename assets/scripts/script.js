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
