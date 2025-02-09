function drawBoids() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    for (let boid of boids) 
    {
        ctx.beginPath();
        ctx.arc(boid.x, boid.y, 3, 0, Math.PI * 2);
        ctx.fill();
    }
}

function animate() 
{
    drawBoids();
}


animate();