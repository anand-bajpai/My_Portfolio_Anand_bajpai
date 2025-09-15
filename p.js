    // Year
    document.getElementById('yr').innerText = new Date().getFullYear();

    // Stars
    const starsContainer = document.getElementById("stars");
    for (let i = 0; i < 120; i++) {
      let star = document.createElement("span");
      let size = Math.random() * 3 + 1;
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.top = Math.random() * window.innerHeight + "px";
      star.style.left = Math.random() * window.innerWidth + "px";
      star.style.animationDuration = (Math.random() * 3 + 2) + "s";
      starsContainer.appendChild(star);
    }
