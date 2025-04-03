ROOT = ".";

    const canvas = document.getElementById("home-banner");
    const ctx = canvas.getContext("2d");

    // Bubble properties
    const numBubbles = 20;
    const bubbles = [];

    // Create bubbles
    for (let i = 0; i < numBubbles; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 20 + 10,
        speedX: (Math.random() - 0.5) * 2, // Random horizontal speed
        speedY: (Math.random() - 0.5) * 2, // Random vertical speed
        color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8)`
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

      for (const bubble of bubbles) {
        // Update bubble position
        bubble.x += bubble.speedX;
        bubble.y += bubble.speedY;

        // Bounce off the edges
        if (bubble.x - bubble.radius < 0 || bubble.x + bubble.radius > canvas.width) {
          bubble.speedX = -bubble.speedX;
        }
        if (bubble.y - bubble.radius < 0 || bubble.y + bubble.radius > canvas.height) {
          bubble.speedY = -bubble.speedY;
        }

        // Draw the bubble
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = bubble.color;
        ctx.fill();
      }

      requestAnimationFrame(animate); // Request next frame
    }

    //animate();
