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
description: "A bold, candy-style cherry flavor that’s extra sweet with a punch of bright fruitiness.",
image: "img/Cherry Bomb.webp",
gradient: "linear-gradient(135deg, #f4bfdb, #300813)"
},

{
name: "Cherry Slush",
description: "Inspired by the classic cherry ice drink, this flavor delivers bold cherry sweetness balanced with a light tart kick.",
image: "img/Cherry Slush.webp",
gradient: "linear-gradient(135deg, #ffd9d6, #e53123)"
},

{
name: "Cherry Twist",
description: "Sweet cherry flavor with a bright splash of lime for a crisp, fruity finish.",
image: "img/Cherry Twist.webp",
gradient: "linear-gradient(135deg, #eb456a, #e3ec5a)"
},

{
name: "Strawberry Sunrise",
description: "Juicy strawberry flavor layered with hints of citrus for a bright, uplifting taste.",
image: "img/Strawberry Sunrise.webp",
gradient: "linear-gradient(135deg, #ff6b90, #ffdcb3)"
},

{
name: "Sherbert Swirl",
description: "A fruity rainbow sherbet flavor combining orange, lime, and raspberry with a light creamy note.",
image: "img/Sherbert Swirl.webp",
gradient: "linear-gradient(135deg, #ffba41, #3bb1a2)"
},

{
name: "Orange Kiss",
description: "A bold, sweet orange flavor similar to a classic orange soda but with a crisp energy drink finish.",
image: "img/Orange Kiss.webp",
gradient: "linear-gradient(135deg, #ffce2f, #ff5d9f)"
},

{
name: "Pink Slush",
description: "A bright, fruity pink slush flavor with a candy-like sweetness and a smooth, refreshing finish.",
image: "img/Pink Slush.webp",
gradient: "linear-gradient(135deg, #f7e6ee, #ea37a0)"
},

{
name: "Cotton Candy",
description: "A sweet carnival-style cotton candy flavor with soft vanilla and sugary candy notes.",
image: "img/Cotton Candy.webp",
gradient: "linear-gradient(135deg, #f1b0e4, #a3f0e8)"
},

{
name: "Lime Slush",
description: "A crisp lime slush flavor that’s tangy, refreshing, and slightly sweet, giving it a cool citrus punch.",
image: "img/Lime Slush.webp",
gradient: "linear-gradient(135deg, #dfedd4, #7dcc3c)"
},

{
name: "Watermelon Wave",
description: "A refreshing watermelon candy flavor that’s sweet, crisp, and perfect for a summer vibe.",
image: "img/Watermelon Wave.webp",
gradient: "linear-gradient(135deg, #b5ec63, #68eeec)"
},

{
name: "Juicy Peach",
description: "Sweet, ripe peach flavor that tastes like biting into a fresh, perfectly juicy peach.",
image: "img/Juicy Peach.webp",
gradient: "linear-gradient(135deg, #e65f42, #3bb1a2)"
},

{
name: "Blue Slush",
description: "A nostalgic blue raspberry slushie flavor that’s sweet, icy, and slightly tart, just like the classic frozen drink from a convenience store.",
image: "img/Blue Slush.webp",
gradient: "linear-gradient(135deg, #cff6ff, #6be5ff)"
},

{
name: "Dream Float",
description: "A creamy orange creamsicle flavor that blends bright citrus with smooth vanilla sweetness.",
image: "img/Dream Float.webp",
gradient: "linear-gradient(135deg, #f2b687, #2e638f)"
},

{
name: "Breezeberry",
description: "A smooth blend of mixed berries with a light, refreshing sweetness and a subtle tropical twist.",
image: "img/Breezeberry.webp",
gradient: "linear-gradient(135deg, #9eecfc, #1a243e)"
},

{
name: "Cosmic Stardust",
description: "A grape-berry candy flavor with a tangy twist that tastes sweet, bold, and slightly tart.",
image: "img/Cosmic Stardust.webp",
gradient: "linear-gradient(135deg, #ad99d6, #2c0d56)"
},

{
name: "Hawaiian Shaved Ice",
description: "A colorful tropical blend inspired by island shaved ice, mixing sweet fruit flavors with a refreshing chill.",
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