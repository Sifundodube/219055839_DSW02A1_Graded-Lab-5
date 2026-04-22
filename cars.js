const carMakes = ["VW", "BMW", "Benz", "Audi", "Ford", "Toyota"];

const cars = [
    {
        name: "Beetle",
        type: "Classic Compact",
        make: "VW",
        image: "images/beetle.jpg"
    },
    {
        name: "3 Series",
        type: "Sports Sedan",
        make: "BMW",
        image: "images/bmw3.jpg"
    },
    {
        name: "E-Class",
        type: "Luxury Sedan",
        make: "Benz",
        image: "images/benz.jpg"
    },
    {
        name: "Quattro",
        type: "Rally Legend",
        make: "Audi",
        image: "images/audi.jpg"
    },
    {
        name: "Mustang",
        type: "Pony Car",
        make: "Ford",
        image: "images/ford.jpg"
    },
    {
        name: "Corolla",
        type: "Compact Sedan",
        make: "Toyota",
        image: "images/toyota.jpg"
    },
    {
        name: "Golf GTI",
        type: "Hot Hatch",
        make: "VW",
        image: "images/beetle.jpg"
    },
    {
        name: "Supra",
        type: "Sports Coupe",
        make: "Toyota",
        image: "images/toyota.jpg"
    }
];

let currentCar = null;
let correctCount = 0;
let totalGuesses = 0;

document.addEventListener("DOMContentLoaded", function() {
    const makeList = document.getElementById("make-list");
    for(let i = 0; i < carMakes.length; i++) {
        let option = document.createElement("option");
        option.value = carMakes[i];
        option.textContent = carMakes[i];
        makeList.appendChild(option);
    }
    
    loadRandomCar();
    
    const guessBtn = document.getElementById("guess-btn");
    guessBtn.addEventListener("click", processGuess);
});

function loadRandomCar() {
    const randomIndex = Math.floor(Math.random() * cars.length);
    currentCar = cars[randomIndex];
    
    document.getElementById("car-name").textContent = currentCar.name;
    document.getElementById("car-type").textContent = currentCar.type;
    
    const carImage = document.getElementById("car-img");
    carImage.src = currentCar.image;
    carImage.alt = currentCar.name;
    carImage.classList.remove("hidden");
    
    const guessBtn = document.getElementById("guess-btn");
    guessBtn.disabled = false;
    guessBtn.classList.remove("disabled");
}

function processGuess() {
    const guessBtn = document.getElementById("guess-btn");
    guessBtn.disabled = true;
    guessBtn.classList.add("disabled");
    
    const makeList = document.getElementById("make-list");
    const selectedMake = makeList.value;
    
    if(selectedMake === currentCar.make) {
        correctCount++;
    }
    
    totalGuesses++;
    
    document.getElementById("correct").textContent = correctCount;
    document.getElementById("total").textContent = totalGuesses;
    
    loadRandomCar();
}