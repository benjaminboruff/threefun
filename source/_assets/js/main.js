import { Container } from 'postcss';
import * as THREE from 'three';

// Set the scene size
const WIDTH = 400;
const HEIGHT = 300;

// Set some camera attributes
const VIEW_ANGLE = 45;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1;
const FAR = 10000;

// Create a WebGL renderer, camera,
// and a scene
const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera(
    VIEW_ANGLE,
    ASPECT,
    NEAR,
    FAR
);

const scene = new THREE.Scene();

// Add the camera to the scene
scene.add(camera);

// Start the renderer
renderer.setSize(WIDTH, HEIGHT);

// Attach to DOM body
document.body.appendChild(renderer.domElement);

// Make a sphere
const RADIUS = 50;
const SEGMENTS = 16;
const RINGS = 16;

// Create the sphere's Material
const sphereMaterial = new THREE.MeshLambertMaterial(
    {
        color: 0xCC0000
    }
);

// Create a new mesh with sphere geometry
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(
        RADIUS,
        SEGMENTS,
        RINGS
    ),
    sphereMaterial
);

// Move sphere back in z so we can see it
sphere.position.z = -300;

scene.add(sphere);

// create a point light
const pointLight =
  new THREE.PointLight(0xFFFFFF);

// set its position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

// add to the scene
scene.add(pointLight);
    
function update() {
    // draw!
    renderer.render( scene, camera );

    // Schedule the next frame.
  requestAnimationFrame(update);
}

// Schedule the first frame.
requestAnimationFrame(update);