


function animateAndNavigate(event) {

    event.preventDefault(); // 阻止立即跳转

    var contentElement = document.querySelector('.content');
    var image = document.querySelector('.image-container');
     


    // 添加动画类
    const background = document.getElementById('background');
    // // 清除模糊效果
    // background.classList.add('clear-blur');
    const content = document.getElementById('content');
    const fact = document.getElementById('planet-fact');
    const story = document.getElementById('story');

    // 添加收缩效果的类
    image.classList.add('shrunk')
    contentElement.classList.add('shrunk');
    fact.classList.add('fade')
    content.classList.add('fade'); // 文字淡出
    background.classList.add('shrink'); // 添加缩小效果
    story.classList.add('story-out');

    // 首先，处理 `planet-fact` 的隐藏动画
    fact.style.opacity = '0'; // 设置不透明度为 0
    setTimeout(function () {
        fact.style.display = 'none'; // 隐藏元素
    }, 500); // 等待过渡效果结束后再隐藏


    // 等待动画结束后跳转
    setTimeout(function () {
        window.location.href = event.target.href;
    }, 1200);
}


document.addEventListener('DOMContentLoaded', function () {
    var factElement = document.getElementById('planet-fact');
    var isVisible = false; 
    factElement.style.opacity = '0'; 
    factElement.style.display = 'none'; 

    document.getElementById('funFactButton').addEventListener('click', function () {
        if (!isVisible) {
            factElement.style.display = 'block'; 
            setTimeout(function () {
                factElement.style.opacity = '1';
            }, 10); 
            isVisible = true; 
        } else { 
            factElement.style.opacity = '0';
            setTimeout(function () {
                factElement.style.display = 'none'; 
            }, 500); 
            isVisible = false; 
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var funFactImage = document.getElementById('funFactImage');

   
    let isCentered = false;

    
    funFactImage.addEventListener('click', function () {
        isCentered = !isCentered; 

        if (isCentered) {
            funFactImage.classList.add('centered'); 
        } else {
            funFactImage.classList.remove('centered'); // 移除居中样式
        }
    });

    // 点击页面任意地方时退出居中
    document.addEventListener('click', function (event) {
        if (isCentered && event.target !== funFactImage) {
            isCentered = false; // 恢复状态
            funFactImage.classList.remove('centered'); // 移除居中样式
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    // Planetary stories
    const stories = {



        sun: [
            "In many cultures, the Sun has been revered as a powerful deity, often representing life, light, and power.",
            "In Greek mythology, the Sun was personified by Helios, a god who rode his golden chariot across the sky each day, bringing light to the world.",
            "Helios was believed to rise from the ocean at dawn and descend back into it at sunset, maintaining the cycle of day and night.",
            "Scientifically, the Sun is a massive star at the center of our solar system, composed primarily of hydrogen and helium.",
            "In the early 1600s, Galileo Galilei was one of the first to observe sunspots, dark regions on the Sun's surface, challenging the belief in the Sun's perfect, unchanging nature.",
            "Today, we know that the Sun is a source of energy, driving Earth's climate and sustaining life through the process of photosynthesis.",
            "The Sun has existed for about 4.6 billion years and is expected to continue burning for several billion more before evolving into a red giant.",
            "\"Forever at the heart of our celestial family, the Sun breathes life into the cosmos, its radiant warmth guiding all life beneath its eternal gaze.\""
        ],

        mercury: [
            "In Roman mythology, Mercury is associated with the god of commerce, communication, and travelers.",
            "Mercury was known for his speed, acting as the messenger of the gods, wearing winged sandals.",
            "Scientifically, Mercury was first observed by ancient civilizations, but it was Mariner 10 in 1974 that captured detailed images of the planet's surface.",
            "The discovery revealed a heavily cratered surface, similar to Earth's moon.",
            "Later missions, such as NASA's MESSENGER, provided more information about its thin atmosphere and extreme temperature fluctuations.",
            "\"Mercury, a fleeting messenger of the heavens on an endless race around the Sun.\""
        ],
        venus: [
            "In Roman mythology, Venus is associated with the goddess of love and beauty.",
            "Venus was revered for her charm and influence over love and desire.",
            "Scientifically, Venus was extensively studied by early astronomers, but it was the Soviet Union's Venera missions that first landed on the planet in the 1970s.",
            "These missions revealed a hostile environment with scorching surface temperatures and a thick, toxic atmosphere.",
            "\"Venus, an eternal symbol of love and beauty.\""
        ],
        earth: [
            "In Greek mythology, Earth is associated with Gaia, the primordial goddess of the Earth and the mother of all life.",
            "Gaia was seen as the origin of everything, giving birth to the sky, the sea, and all living creatures.",
            "She was revered as the nurturing force of life and the eternal foundation of the world.",
            "Earth was the center of the ancient geocentric model until the heliocentric model proposed by Copernicus in 1543 changed humanity's understanding of the universe.",
            "\"Our home, Earth, cradles life with tender care, a fragile blue gem suspended in the vastness of space, where life dances to the rhythm of the stars.\""
        ],
        mars: [
            "In Roman mythology, Mars is associated with the god of war, symbolizing strength and aggression.",
            "Mars was considered the father of the Roman people, revered for his power and leadership in battle.",
            "Scientifically, Mars has been explored by various missions, starting with Mariner 4 in 1965, which provided the first close-up images of its surface.",
            "NASA's rovers, such as Curiosity and Perseverance, have been instrumental in exploring Mars's surface and searching for signs of past life.",
            "\"Mars, the red wanderer, beckons with the promise of discovery.\""
        ],
        jupiter: [
            "In Greek mythology, Jupiter is associated with Zeus, the king of the gods.",
            "Zeus ruled over the sky and thunder, maintaining order and justice in the universe.",
            "Known for his immense power, he wielded lightning bolts and was the chief deity of Mount Olympus.",
            "Scientifically, Jupiter was first observed in detail by Galileo Galilei in 1610 using a telescope.",
            "Galileo's discovery of Jupiter's four largest moons—Io, Europa, Ganymede, and Callisto—was groundbreaking.",
            "These moons, now called the Galilean moons, provided crucial evidence that not everything orbited Earth.",
            "This discovery challenged the geocentric model of the universe.",
            "\"Jupiter, a titan of storms and swirling clouds, guarding the mysteries of the outer solar system.\""
        ],
        saturn: [
            "In Roman mythology, Saturn is associated with the god of agriculture and time.",
            "Saturn was believed to preside over the sowing and harvesting of crops, ensuring abundance and prosperity.",
            "Scientifically, Saturn was first observed through a telescope by Galileo Galilei in 1610.",
            "He noted its unique ring structure, although it was Huygens in 1655 who correctly identified the rings as separate from the planet.",
            "NASA's Cassini mission, launched in 1997, provided detailed information about the rings, moons, and atmosphere of Saturn.",
            "\"Saturn spins like a cosmic jewel, its timeless elegance a testament to the beauty of the universe.\""
        ],
        uranus: [
            "In Greek mythology, Uranus is associated with the primordial god of the sky, father of the Titans.",
            "Uranus ruled over the heavens, and his overthrow by his son Cronus (Saturn) marked the transition to a new generation of gods.",
            "Scientifically, Uranus was discovered by William Herschel in 1781, making it the first planet found with a telescope.",
            "This discovery expanded the known boundaries of our solar system and introduced a new type of planetary body with a unique, tilted axis of rotation.",
            "\"Uranus, the tilted giant, drifts through the heavens in silent defiance\""
        ],
        neptune: [

            "In Roman mythology, Neptune is associated with the god of the sea, ruling over all bodies of water.",
            "Neptune wielded a trident and was worshiped by sailors and fishermen for his power over the oceans.",
            "Scientifically, Neptune was discovered in 1846 by Johann Galle and Heinrich d'Arrest, based on mathematical predictions by Urbain Le Verrier.",
            "Neptune's discovery was the first to be guided by mathematical calculations, confirming the existence of the planet beyond Uranus.",
            "\"Neptune, ruler of the deep, sings a song of the sea among the stars.\""
        ],
        pluto: [
            "In Roman mythology, Pluto is associated with the god of the underworld, ruling over the realm of the dead.",
            "Pluto was seen as a powerful, but distant figure, controlling the afterlife and the wealth beneath the earth.",
            "Scientifically, Pluto was discovered in 1930 by astronomer Clyde Tombaugh at the Lowell Observatory.",
            "For much of the 20th century, Pluto was considered the ninth planet in the solar system.",
            "However, in 2006, the International Astronomical Union reclassified Pluto as a 'dwarf planet,' due to its size and the discovery of similar celestial bodies in the Kuiper Belt.",
            "\"Pluto, the lonely wanderer at the edge of the solar system.\""
        ]

    };

    // Get the current page's filename (e.g., mercury.html)
    const currentPage = window.location.pathname.split("/").pop().replace(".html", "");

    // Check if there is a story for the current planet
    if (stories[currentPage]) {
        const storyContainer = document.getElementById('story');
        let index = 0;

        // Function to display each sentence one by one with fade-in/out effect
        function showNextSentence() {
            if (index < stories[currentPage].length) {
                const p = document.createElement('p');
                p.textContent = stories[currentPage][index];
                storyContainer.appendChild(p);

                // Add fade-in effect
                setTimeout(() => {
                    p.classList.add('fade-in');
                }, 10);

                // Fade out after 3 seconds and show next sentence
                setTimeout(function () {
                    p.classList.remove('fade-in');
                    p.classList.add('fade-out');

                    // Move to the next sentence after fade-out completes
                    setTimeout(function () {
                        index++;
                        showNextSentence();
                    }, 1000); // Fade-out duration
                }, 4000); // Display duration for each sentence
            }
        }

        // Start showing the sentences
        showNextSentence();
    } else {
        console.error("No story available for this planet.");
    }
});





function generateStars() {
    const container = document.querySelector("body");

    // 删除之前生成的所有星星
    const existingStars = document.querySelectorAll(".stars");
    existingStars.forEach(star => star.remove());

    // 生成新的星星
    for (let i = 0; i < 200; i++) {
        const stars = document.createElement("div");
        stars.className = "stars";
        
        // 随机生成星星尺寸在 0.5px 到 3px 之间
        const size = (Math.random() * 3.5 + 0.5) + "px"; 
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