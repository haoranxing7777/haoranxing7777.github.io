function generateStars() {
    const container = document.querySelector("body");

    // 删除之前生成的所有星星
    const existingStars = document.querySelectorAll(".stars");
    existingStars.forEach(star => star.remove());

    // 生成新的星星
    for (let i = 0; i < 2000; i++) {
        const stars = document.createElement("div");
        stars.className = "stars";
        
        // 随机生成星星尺寸在 0.5px 到 3px 之间
        const size = (Math.random() * 2.5 + 0.5) + "px"; 
        stars.style.width = size;
        stars.style.height = size;
        stars.style.position = "absolute"; 

        // 随机位置
        stars.style.bottom = Math.random() * 100 + "%";
        stars.style.right = Math.random() * 100 + "%";

        container.append(stars);
    }
}



generateStars();

function getRandomSolarSystemFact() {
    const facts = [
        "The Sun is the only star in the solar system, making up 99.86% of its total mass.",
        "Jupiter is the largest planet in the solar system, with a diameter about 11 times that of Earth.",
        "Saturn is famous for its stunning rings, which are composed mainly of ice and rock particles.",
        "Mercury is the closest planet to the Sun and has the most extreme temperature variations in the solar system.",
        "Venus is the hottest planet, with surface temperatures reaching up to 465 degrees Celsius, even at night.",
        "Earth is the only known planet to support life, with about 71% of its surface covered by water.",
        "Mars is known as the Red Planet because its surface contains iron oxide, giving it a reddish appearance.",
        "Uranus is a gas giant known for its unique blue color and sideways rotation.",
        "Neptune is the farthest planet from the Sun, with winds reaching speeds of up to 2,100 kilometers per hour.",
        "Pluto was once considered the ninth planet in the solar system but is now classified as a dwarf planet."
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}


function displayRandomFact() {
    const factElement = document.getElementById('fact');

    // Fade out the current fact
    factElement.classList.add('fade-out'); // Start fading out

    // Wait for the fade-out effect to complete before changing the text
    setTimeout(() => {
        const fact = getRandomSolarSystemFact(); // Get a new fact
        factElement.textContent = fact; // Update the text content

        // Fade the new fact back in
        factElement.classList.remove('fade-out'); // Remove fade-out class
        factElement.classList.add('fade-in'); // Add fade-in class

        // Wait for the fade-in effect to complete before ready for next fade
        setTimeout(() => {
            factElement.classList.remove('fade-in'); // Clean up after fade-in
        }, 5000); // Wait 5 seconds for the fade-in to finish
    }, 5000); // Match this timeout with the fade-out duration
}

// Automatically display a random fact when the page loads
window.onload = function () {
    displayRandomFact(); // Display an initial fact

    // Change fact every 10 seconds, with fade-in and fade-out effects
    setInterval(displayRandomFact, 10000); // Change fact every 10 seconds
};


