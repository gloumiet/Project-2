// Bubbles
const container = document.getElementById('bubble-container');
function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const size = Math.random() * 30 + 10;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}vw`;
  bubble.style.animationDuration = `${Math.random() * 2 + 3}s`;

  container.appendChild(bubble);
  bubble.addEventListener('animationend', () => bubble.remove());
}
setInterval(createBubble, 300);







// Flavors
const flavors = [
  {
    name: "Cherry Bomb",
    description: "A refreshing berry blend to energize your day!",
    image: "img/CherryBomb.webp",
    gradient: "linear-gradient(135deg, #9e152e, #f5abb7)"
  },
  {
    name: "Cherry Slush",
    description: "Explosive cherry flavor with a sweet kick!",
    image: "img/CherrySlush.webp",
    gradient: "linear-gradient(135deg, #ff6a6a, #ffb6b9)"
  },
  {
    name: "Cherry Twist",
    description: "A cosmic mix of fruity flavors for ultimate energy!",
    image: "img/CherryTwist.webp",
    gradient: "linear-gradient(135deg, #8e44ad, #3498db)"
  },
  {
    name: "Strawberry Sunrise",
    description: "A cosmic mix of fruity flavors for ultimate energy!",
    image: "img/StrawberrySunrise.webp",
    gradient: "linear-gradient(135deg, #8e44ad, #3498db)"
  },
  {
    name: "Sherbert Swirl",
    description: "A cosmic mix of fruity flavors for ultimate energy!",
    image: "img/SherbertSwirl.webp",
    gradient: "linear-gradient(135deg, #8e44ad, #3498db)"
  },
  {
    name: "Orange Kiss",
    description: "A cosmic mix of fruity flavors for ultimate energy!",
    image: "img/OrangeKiss.webp",
    gradient: "linear-gradient(135deg, #8e44ad, #3498db)"
  },
  {
    name: "Pink Slush",
    description: "A cosmic mix of fruity flavors for ultimate energy!",
    image: "img/PinkSlush.webp",
    gradient: "linear-gradient(135deg, #8e44ad, #3498db)"
  },
  {
    name: "Cotton Candy",
    description: "A cosmic mix of fruity flavors for ultimate energy!",
    image: "img/CottonCandy.webp",
    gradient: "linear-gradient(135deg, #8e44ad, #3498db)"
  },
  {
    name: "Lime Slush",
    description: "A cosmic mix of fruity flavors for ultimate energy!",
    image: "img/LimeSlush.webp",
    gradient: "linear-gradient(135deg, #8e44ad, #3498db)"
  },
  {
    name: "Watermelon Wave",
    description: "Light, dreamy, and refreshing — just float away!",
    image: "img/WatermelonWave.webp",
    gradient: "linear-gradient(135deg, #ffb347, #ffcc33)"
  },
  {
    name: "Juicy Peach",
    description: "A cosmic mix of fruity flavors for ultimate energy!",
    image: "img/JuicyPeach.webp",
    gradient: "linear-gradient(135deg, #8e44ad, #3498db)"
  },
  {
    name: "Blue Slush",
    description: "A cosmic mix of fruity flavors for ultimate energy!",
    image: "img/BlueSlush.webp",
    gradient: "linear-gradient(135deg, #8e44ad, #3498db)"
  },
  {
    name: "Dream Float",
    description: "A cosmic mix of fruity flavors for ultimate energy!",
    image: "img/DreamFloat.webp",
    gradient: "linear-gradient(135deg, #8e44ad, #3498db)"
  },
  {
    name: "Breezeberry",
    description: "A cosmic mix of fruity flavors for ultimate energy!",
    image: "img/Breezeberry.webp",
    gradient: "linear-gradient(135deg, #8e44ad, #3498db)"
  },
  {
    name: "Cosmic Stardust",
    description: "A cosmic mix of fruity flavors for ultimate energy!",
    image: "img/CosmicStardust.webp",
    gradient: "linear-gradient(135deg, #8e44ad, #3498db)"
  },{
    name: "Hawaiian Shaved Ice",
    description: "A cosmic mix of fruity flavors for ultimate energy!",
    image: "img/HawaiianShavedIce.webp",
    gradient: "linear-gradient(135deg, #8e44ad, #3498db)"
  }
];





const heroSection = document.querySelector('.hero');
const flavorName = document.querySelector('.flavor-name');
const flavorDescription = document.querySelector('.flavor-description');
const productImage = document.getElementById('product-image');





let currentFlavor = 0;

function updateFlavor(index) {
  const flavor = flavors[index];

  // Fade out
  productImage.style.opacity = 0;
  flavorName.style.opacity = 0;
  flavorDescription.style.opacity = 0;

  setTimeout(() => {
    productImage.src = flavor.image;
    heroSection.style.background = flavor.gradient;
    flavorName.textContent = flavor.name;
    flavorDescription.textContent = flavor.description;


    // Fade in
    productImage.style.opacity = 1;
    flavorName.style.opacity = 1;
    flavorDescription.style.opacity = 1;
  }, 400);
}

// Arrow buttons
document.getElementById('next-btn').addEventListener('click', () => {
  currentFlavor = (currentFlavor + 1) % flavors.length;
  updateFlavor(currentFlavor);
});

document.getElementById('prev-btn').addEventListener('click', () => {
  currentFlavor = (currentFlavor - 1 + flavors.length) % flavors.length;
  updateFlavor(currentFlavor);
});

// Initialize
updateFlavor(currentFlavor);








