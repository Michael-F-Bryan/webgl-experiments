
import './master.css';

import {
    Scene, PerspectiveCamera, WebGLRenderer, SphereGeometry,
    MeshLambertMaterial, Mesh, AmbientLight, PointLight,
} from 'three';

const renderer = new WebGLRenderer({ antialias: true });
renderer.setClearColor("#e5e5e5");

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight);
camera.position.z = 5;

const geometry = new SphereGeometry(1, 10, 10);
const material = new MeshLambertMaterial({ color: 0xffcc00 });
const ball = new Mesh(geometry, material);
scene.add(ball);

const ambient = new AmbientLight(0x404040, 0.5);
scene.add(ambient);

const light = new PointLight(0xffffff, 0.8, 500);
light.position.set(10, 0, 25);
light.lookAt(ball.position);
scene.add(light);

function update() {
    ball.rotation.x += 0.01;
    ball.rotation.y += 0.01;
}

function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

function gameLoop() {
    requestAnimationFrame(gameLoop);
    update();
    renderer.render(scene, camera);
}

function initialize() {
    resize();
    document.body.appendChild(renderer.domElement);
    requestAnimationFrame(gameLoop);
}

addEventListener('load', initialize);
addEventListener('resize', resize);
