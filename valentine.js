// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Logic to move the NO btn

// 1. Create a function to handle the movement
const moveBtn = (e) => {
    // Optional: Prevent the default tap behavior on mobile
    if(e && e.type === 'touchstart') e.preventDefault();

    // Use smaller movement for mobile so it doesn't fly off-screen
    const isMobile = window.innerWidth <= 768;
    const min = isMobile ? 50 : 200;
    const max = isMobile ? 100 : 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

// 2. Add event listener for Desktop (Hover)
noBtn.addEventListener("mouseover", moveBtn);

// 3. Add event listener for Mobile (Touch)
noBtn.addEventListener("touchstart", moveBtn);



// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yeessss!";

    catImg.src = "cat-dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";

});
