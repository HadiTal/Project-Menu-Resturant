"use strict";

//selecting Element
const articles = document.querySelectorAll(".menu-item");
const photo = document.querySelectorAll(".photo");
const nameFood = document.querySelectorAll(".name-food");
const price = document.querySelectorAll(".price");
const aboutusFood = document.querySelectorAll(".item-text");
const btnAll = document.getElementById("all");
const btnLunch = document.getElementById("lunch");
const btndinner = document.getElementById("dinner");
const btnSnake = document.getElementById("shakes");
const btnBreakfast = document.getElementById("breakfast");

//strting condition

const foods = [{
        typeMenu: "breakfast-menu",
        nameFood: "Buttermilk Pancakes",
        price: "$15.99",
        discription: ` m baby woke mlkshk wolf bitters live - edge blue bottle,
hammock freegan copper mug whatever cold - pressed`,
        src: "images/item-1.jpeg",
    },
    {
        typeMenu: "breakfast-menu",
        nameFood: "Country Delight",
        price: "$20.99",
        discription: ` Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut`,
        src: "images/item-4.jpeg",
    },
    {
        typeMenu: "breakfast-menu",
        nameFood: "Bacon Overflow",
        price: "$8.99",
        discription: ` carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird`,
        src: "images/item-7.jpeg",
    },
    {
        typeMenu: "lunch-menu",
        nameFood: "Diner Double",
        price: "$13.99",
        discription: ` vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
        src: "images/item-2.jpeg",
    },
    {
        typeMenu: "lunch-menu",
        nameFood: "Egg Attack",
        price: "$22.99",
        discription: ` franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`,
        src: "images/item-5.jpeg",
    },
    {
        typeMenu: "lunch-menu",
        nameFood: "American Classic",
        price: "$12.99",
        discription: ` on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`,
        src: "images/item-8.jpeg",
    },
    {
        typeMenu: "shakes-menu",
        nameFood: "Godzilla Milkshake",
        price: "$6.99",
        discription: ` ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
        src: "images/item-3.jpeg",
    },
    {
        typeMenu: "shakes-menu",
        nameFood: "Quarantine Buddy",
        price: "$16.99",
        discription: ` skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        src: "images/item-9.jpeg",
    },
    {
        typeMenu: "shakes-menu",
        nameFood: "Oreo Dream",
        price: "$18.99",
        discription: ` Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
        src: "images/item-6.jpeg",
    },
    {
        typeMenu: "shakes-menu",
        nameFood: "Bison Steak",
        price: "$22.99",
        discription: ` skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        src: "images/item-10.jpeg",
    },
];

//show foood all  load browser

for (let i = 0; i < articles.length; i++) {
    if (articles[i].classList[1] === foods[i].typeMenu) {
        photo[i].src = foods[i].src;
        nameFood[i].textContent = foods[i].nameFood;
        price[i].textContent = foods[i].price;
        aboutusFood[i].textContent = foods[i].discription;
    }
}

//show all food click btn all

btnAll.addEventListener("click", function(e) {
    articles.forEach((element, index) => {
        for (let i = 0; i < articles.length; i++) {
            if (articles[i].classList[1] === foods[i].typeMenu) {
                photo[i].src = foods[i].src;
                nameFood[i].textContent = foods[i].nameFood;
                price[i].textContent = foods[i].price;
                aboutusFood[i].textContent = foods[i].discription;
            }
        }

        if (e.target.id === "all" && element.classList[0] === "menu-item") {
            element.classList.remove("hidden");
        }
    });
});

//filter  food functionality

const funFilterFood = function(e) {
    const valBtn = e.target.textContent.toLowerCase();

    console.log(valBtn);

    articles.forEach((element, index) => {
        if (e.target.id === valBtn && element.classList[1] === `${valBtn}-menu`) {
            element.classList.remove("hidden");
        } else {
            element.classList.add("hidden");
        }
    });
};

btnLunch.addEventListener("click", funFilterFood);

btnBreakfast.addEventListener("click", funFilterFood);

btndinner.addEventListener("click", funFilterFood);

btnSnake.addEventListener("click", funFilterFood);