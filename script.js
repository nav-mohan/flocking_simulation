function updateBoids() 
{
    for (let boid of boids) 
    {
        let avgX = 0, avgY = 0, avgVX = 0, avgVY = 0, countNeighbors = 0;
        let sepX = 0, sepY = 0;
        
        for (let other of boids) 
        {
            if(other == boid) continue;

            let dx = other.x - boid.x;
            let dy = other.y - boid.y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < neighborDist) {
                avgX += other.x;
                avgY += other.y;
                avgVX += other.vx;
                avgVY += other.vy;
                countNeighbors++;
            }
            
            if (dist < separationDist && dist > 0) {
                sepX -= dx / dist;
                sepY -= dy / dist;
            }
        }
        
        if (countNeighbors > 0) 
        {
            avgX /= countNeighbors;
            avgY /= countNeighbors;
            avgVX /= countNeighbors;
            avgVY /= countNeighbors;
            
            boid.vx += (avgVX - boid.vx) * alignFactor; 
            boid.vy += (avgVY - boid.vy) * alignFactor;
            
            boid.vx += (avgX - boid.x) * cohesionFactor;
            boid.vy += (avgY - boid.y) * cohesionFactor;
        }
        
        boid.vx += sepX * separationFactor;
        boid.vy += sepY * separationFactor;
        
        let speed = Math.sqrt(boid.vx * boid.vx + boid.vy * boid.vy);
        if (speed > 4) {
            boid.vx = (boid.vx / speed) * 4;
            boid.vy = (boid.vy / speed) * 4;
        }
        
        boid.x += boid.vx;
        boid.y += boid.vy;
        
        if (boid.x < 0) boid.x = canvas.width;
        if (boid.x > canvas.width) boid.x = 0;
        if (boid.y < 0) boid.y = canvas.height;
        if (boid.y > canvas.height) boid.y = 0;
    }
}

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
    updateBoids();
    drawBoids();
    requestAnimationFrame(animate);
}


animate();