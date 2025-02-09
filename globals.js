const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let neighborDist = 50;
let separationDist = 20;
let alignFactor = 0.05;
let cohesionFactor = 0.01;
let separationFactor = 0.1;

const numBoids = 100;
const boids = Array.from({ length: numBoids }, () => 
{
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 4 - 2,
        vy: Math.random() * 4 - 2
    };
});