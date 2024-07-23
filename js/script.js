// Interactive Trailer
const interactiveVideo = document.getElementById('interactive-video');
const choiceOverlay = document.querySelector('.choice-overlay');
const choiceButtons = document.querySelectorAll('.choice-btn');

interactiveVideo.addEventListener('timeupdate', () => {
    if (interactiveVideo.currentTime > 30 && interactiveVideo.currentTime < 35) {
        choiceOverlay.style.display = 'flex';
    } else {
        choiceOverlay.style.display = 'none';
    }
});

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const choice = button.dataset.choice;
        interactiveVideo.src = `videos/interactive-trailer-${choice}.mp4`;
        interactiveVideo.play();
        choiceOverlay.style.display = 'none';
    });
});

// 3D Movie Poster Showcase
const poster = document.getElementById('3d-poster');
let scene, camera, renderer, cube;

function init3DPoster() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, poster.clientWidth / poster.clientHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(poster.clientWidth, poster.clientHeight);
    poster.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ 
        map: new THREE.TextureLoader().load('images/movie-poster.jpg') 
    });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

init3DPoster();

// AI Recommendations
const aiRecommendationsList = document.getElementById('ai-recommendations-list');
const mockRecommendations = [
    "The Galactic Odyssey - A space adventure you'll love!",
    "Whispers in the Wind - Based on your interest in dramas",
    "Neon Nights - A cyberpunk thriller that matches your taste",
    "Echoes of the Past - Historical drama with a twist"
];

function populateAIRecommendations() {
    mockRecommendations.forEach(recommendation => {
        const li = document.createElement('li');
        li.textContent = recommendation;
        aiRecommendationsList.appendChild(li);
    });
}

populateAIRecommendations();

// Typing effect for AI recommendations
const aiMessage = document.querySelector('.ai-message p');
const originalText = aiMessage.textContent;
aiMessage.textContent = '';

function typeWriter(text, i = 0) {
    if (i < text.length) {
        aiMessage.textContent += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(text, i), 50);
    }
}

typeWriter(originalText);
