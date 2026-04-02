// BUBBLES
const container = document.getElementById("bubble-container");

for(let i = 0; i < 25; i++){

let bubble = document.createElement("div");

bubble.classList.add("bubble");

let size = Math.random()*40 + 10;

bubble.style.width = size + "px";
bubble.style.height = size + "px";

bubble.style.left = Math.random()*100 + "%";

bubble.style.animationDuration = (Math.random()*10 + 10) + "s";

container.appendChild(bubble);

}


// HERO + FLAVORS
const heroSection = document.querySelector('.hero');
const flavorName = document.querySelector('.flavor-name');
const flavorDescription = document.querySelector('.flavor-description');
const productImage = document.getElementById('product-image');


// FLAVORS
const flavors = [

{
name: "Cherry Bomb",
description: "A refreshing berry blend to energize your day!",
image: "img/Cherry Bomb.webp",
gradient: "linear-gradient(135deg, #f4bfdb, #300813)"
},

{
name: "Cherry Slush",
description: "Explosive cherry flavor with a sweet kick!",
image: "img/Cherry Slush.webp",
gradient: "linear-gradient(135deg, #ffd9d6, #e53123)"
},

{
name: "Cherry Twist",
description: "A cosmic mix of fruity flavors for ultimate energy!",
image: "img/Cherry Twist.webp",
gradient: "linear-gradient(135deg, #eb456a, #e3ec5a)"
},

{
name: "Strawberry Sunrise",
description: "A cosmic mix of fruity flavors for ultimate energy!",
image: "img/Strawberry Sunrise.webp",
gradient: "linear-gradient(135deg, #ff6b90, #ffdcb3)"
},

{
name: "Sherbert Swirl",
description: "A cosmic mix of fruity flavors for ultimate energy!",
image: "img/Sherbert Swirl.webp",
gradient: "linear-gradient(135deg, #ffba41, #3bb1a2)"
},

{
name: "Orange Kiss",
description: "A cosmic mix of fruity flavors for ultimate energy!",
image: "img/Orange Kiss.webp",
gradient: "linear-gradient(135deg, #ffce2f, #ff5d9f)"
},

{
name: "Pink Slush",
description: "A cosmic mix of fruity flavors for ultimate energy!",
image: "img/Pink Slush.webp",
gradient: "linear-gradient(135deg, #f7e6ee, #ea37a0)"
},

{
name: "Cotton Candy",
description: "A cosmic mix of fruity flavors for ultimate energy!",
image: "img/Cotton Candy.webp",
gradient: "linear-gradient(135deg, #f1b0e4, #a3f0e8)"
},

{
name: "Lime Slush",
description: "A cosmic mix of fruity flavors for ultimate energy!",
image: "img/Lime Slush.webp",
gradient: "linear-gradient(135deg, #dfedd4, #7dcc3c)"
},

{
name: "Watermelon Wave",
description: "Light, dreamy, and refreshing — just float away!",
image: "img/Watermelon Wave.webp",
gradient: "linear-gradient(135deg, #b5ec63, #68eeec)"
},

{
name: "Juicy Peach",
description: "A cosmic mix of fruity flavors for ultimate energy!",
image: "img/Juicy Peach.webp",
gradient: "linear-gradient(135deg, #e65f42, #3bb1a2)"
},

{
name: "Blue Slush",
description: "A cosmic mix of fruity flavors for ultimate energy!",
image: "img/Blue Slush.webp",
gradient: "linear-gradient(135deg, #cff6ff, #6be5ff)"
},

{
name: "Dream Float",
description: "A cosmic mix of fruity flavors for ultimate energy!",
image: "img/Dream Float.webp",
gradient: "linear-gradient(135deg, #f2b687, #2e638f)"
},

{
name: "Breezeberry",
description: "A cosmic mix of fruity flavors for ultimate energy!",
image: "img/Breezeberry.webp",
gradient: "linear-gradient(135deg, #9eecfc, #1a243e)"
},

{
name: "Cosmic Stardust",
description: "A cosmic mix of fruity flavors for ultimate energy!",
image: "img/Cosmic Stardust.webp",
gradient: "linear-gradient(135deg, #ad99d6, #2c0d56)"
},

{
name: "Hawaiian Shaved Ice",
description: "A cosmic mix of fruity flavors for ultimate energy!",
image: "img/Hawaiian Shaved Ice.webp",
gradient: "linear-gradient(135deg, #ff1756, #6c25bf)"
}

];


// CURRENT FLAVOR
let currentFlavor = 0;


function updateFlavor(index){

const flavor = flavors[index];

// Fade out
productImage.style.opacity = 0;
flavorName.style.opacity = 0;
flavorDescription.style.opacity = 0;

setTimeout(()=>{

productImage.src = flavor.image;
heroSection.style.backgroundImage = flavor.gradient;
flavorName.textContent = flavor.name;
flavorDescription.textContent = flavor.description;

// Fade in
productImage.style.opacity = 1;
flavorName.style.opacity = 1;
flavorDescription.style.opacity = 1;

},400);

}


// ARROWS
document.getElementById('next-btn').addEventListener('click', ()=>{

currentFlavor = (currentFlavor + 1) % flavors.length;
updateFlavor(currentFlavor);

});


document.getElementById('prev-btn').addEventListener('click', ()=>{

currentFlavor = (currentFlavor - 1 + flavors.length) % flavors.length;
updateFlavor(currentFlavor);

});


// START
updateFlavor(currentFlavor);