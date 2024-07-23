document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Populate movie cards
    const contentSlider = document.querySelector('.content-slider');
    const movies = [
        { title: "Cosmic Collision", genre: "Sci-Fi", duration: "2h 15m", image: "https://via.placeholder.com/300x450?text=Cosmic+Collision" },
        { title: "Echoes of Eternity", genre: "Drama", duration: "1h 58m", image: "https://via.placeholder.com/300x450?text=Echoes+of+Eternity" },
        { title: "Neon Nights", genre: "Thriller", duration: "2h 5m", image: "https://via.placeholder.com/300x450?text=Neon+Nights" },
        { title: "Whispers in the Wind", genre: "Romance", duration: "2h 10m", image: "https://via.placeholder.com/300x450?text=Whispers+in+the+Wind" },
        { title: "The Galactic Odyssey", genre: "Adventure", duration: "2h 30m", image: "https://via.placeholder.com/300x450?text=The+Galactic+Odyssey" }
    ];

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-card-content">
                <h3 class="movie-card-title">${movie.title}</h3>
                <p class="movie-card-info">${movie.genre} | ${movie.duration}</p>
            </div>
        `;
        contentSlider.appendChild(movieCard);
    });

    // Populate genre grid
    const genreGrid = document.querySelector('.genre-grid');
    const genres = ['Action', 'Comedy', 'Drama', 'Sci-Fi', 'Horror', 'Romance', 'Thriller', 'Adventure'];

    genres.forEach(genre => {
        const genreCard = document.createElement('div');
        genreCard.classList.add('genre-card');
        genreCard.innerHTML = `
            <img src="https://via.placeholder.com/150x100?text=${genre}" alt="${genre}">
            <div class="genre-card-content">
                <h3 class="genre-card-title">${genre}</h3>
            </div>
        `;
        genreGrid.appendChild(genreCard);
    });

    // Interactive Trailer
    const interactiveVideo = document.getElementById('interactive-video');
    const choiceOverlay = document.querySelector('.choice-overlay');
    const choiceButtons = document.querySelectorAll('.choice-btn');

    interactiveVideo.addEventListener('timeupdate', () => {
        if (interactiveVideo.currentTime > 5 && interactiveVideo.currentTime < 10) {
            choiceOverlay.style.display = 'flex';
        } else {
            choiceOverlay.style.display = 'none';
        }
    });

    choiceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const choice = button.dataset.choice;
            interactiveVideo.src = `https://assets.mixkit.co/videos/preview/mixkit-${choice === 'A' ? 'man-runs-past-the-camera' : 'police-car-lights'}-32809-large.mp4`;
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
        const texture = new THREE.TextureLoader().load('https://via.placeholder.com/512x512?text=Movie+Poster');
        const material = new THREE.MeshBasicMaterial({ map: texture });
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

    // Mood-based Recommendations
    const moodButtons = document.querySelectorAll('.mood-btn');
    const moodRecommendations = document.querySelector('.mood-recommendations');

    const moodMovies = {
        happy: [
            { title: "Laughter Express", genre: "Comedy" },
            { title: "Sunny Side Up", genre: "Feel-good" },
            { title: "Dancing in the Rain", genre: "Musical" }
        ],
        sad: [
            { title: "Tearful Melodies", genre: "Drama" },
            { title: "Rainy Days", genre: "Melancholic" },
            { title: "Bittersweet Symphony", genre: "Romance" }
        ],
        excited: [
            { title: "Adrenaline Rush", genre: "Action" },
            { title: "Cosmic Adventure", genre: "Sci-Fi" },
            { title: "Treasure Hunt", genre: "Adventure" }
        ],
        relaxed: [
            { title: "Zen Garden", genre: "Documentary" },
            { title: "Whispers of Nature", genre: "Nature" },
            { title: "Cozy Nights", genre: "Slice of Life" }
        ]
    };

    moodButtons.forEach(button => {
        button.addEventListener('click', () => {
            const mood = button.dataset.mood;
            moodRecommendations.innerHTML = '';
            moodMovies[mood].forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');
                movieCard.innerHTML = `
                    <img src="https://via.placeholder.com/200x300?text=${movie.title}" alt="${movie.title}">
                    <div class="movie-card-content">
                        <h3 class="movie-card-title">${movie.title}</h3>
                        <p class="movie-card-info">${movie.genre}</p>
                    </div>
                `;
                moodRecommendations.appendChild(movieCard);
            });
        });
    });

    // Virtual Theater
    const theaterContainer = document.querySelector('.theater-container');
    const seats = document.querySelector('.seats');
    const startTheaterButton = document.getElementById('start-theater');
    const theaterVideo = document.getElementById('theater-video');

    function createSeats() {
        for (let i = 0; i < 30; i++) {
            const seat = document.createElement('div');
            seat.classList.add('seat');
            seat.addEventListener('click', () => {
                seat.classList.toggle('occupied');
            });
            seats.appendChild(seat);
        }
    }

    createSeats();

    startTheaterButton.addEventListener('click', () => {
        theaterVideo.play();
        startTheaterButton.style.display = 'none';
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    const fadeInOptions = {
        threshold: 0.1
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, fadeInOptions);

    sections.forEach(section => fadeInObserver.observe(section));

    // Add slide-in animation to movie cards
    const movieCards = document.querySelectorAll('.movie-card');
    const slideInOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const slideInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
                observer.unobserve(entry.target);
            }
        });
    }, slideInOptions);

    movieCards.forEach(card => slideInObserver.observe(card));

    // Populate coming soon section
    const comingSoonSlider = document.querySelector('.coming-soon-slider');
    const comingSoonMovies = [
        { title: "Future Shock", releaseDate: "Coming next month" },
        { title: "Mystic Realms", releaseDate: "In 2 months" },
        { title: "Quantum Leap", releaseDate: "Coming soon" },
        { title: "Echoes of Time", releaseDate: "Next year" }
    ];

    comingSoonMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="https://via.placeholder.com/200x300?text=${movie.title}" alt="${movie.title}">
            <div class="movie-card-content">
                <h3 class="movie-card-title">${movie.title}</h3>
                <p class="movie-card-info">${movie.releaseDate}</p>
            </div>
        `;
        comingSoonSlider.appendChild(movieCard);
    });
});
