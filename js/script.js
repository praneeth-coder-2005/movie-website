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

    // Cinematic Time Travel
    const eraButtons = document.querySelectorAll('.era-btn');
    eraButtons.forEach(button => {
        button.addEventListener('click', () => {
            const era = button.dataset.era;
            document.body.className = `era-${era}`;
            updateContentForEra(era);
        });
    });

    function updateContentForEra(era) {
        // Update content based on the selected era
        const eraContent = {
            '1920s': {
                movies: ['The Gold Rush', 'Metropolis', 'The General'],
                style: 'sepia-toned silent films'
            },
            '1950s': {
                movies: ['Singin\' in the Rain', 'Rear Window', 'Some Like It Hot'],
                style: 'classic Hollywood golden age'
            },
            '1980s': {
                movies: ['The Breakfast Club', 'Back to the Future', 'E.T.'],
                style: 'neon-colored blockbusters'
            },
            '2000s': {
                movies: ['The Lord of the Rings', 'Avatar', 'The Dark Knight'],
                style: 'CGI-enhanced epics'
            },
            'future': {
                movies: ['Holo-Experience 3000', 'Mind-Meld Adventures', 'Quantum Leap Saga'],
                style: 'immersive holographic experiences'
            }
        };

        const content = eraContent[era];
        const trendingSection = document.querySelector('#trending');
        trendingSection.innerHTML = `
            <h2>Trending in the ${era}</h2>
            <p>Experience the ${content.style} of this era!</p>
            <div class="content-slider">
                ${content.movies.map(movie => `
                    <div class="movie-card">
                        <img src="https://via.placeholder.com/200x300?text=${movie}" alt="${movie}">
                        <div class="movie-card-content">
                            <h3 class="movie-card-title">${movie}</h3>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

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

    // 3D Movie Experience
    let scene, camera, renderer, cube;
    const sceneContainer = document.getElementById('3d-scene');

    function init3DScene() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, sceneContainer.clientWidth / sceneContainer.clientHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
        sceneContainer.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const materials = [
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://via.placeholder.com/512x512?text=Movie+Poster+1') }),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://via.placeholder.com/512x512?text=Movie+Poster+2') }),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://via.placeholder.com/512x512?text=Movie+Poster+3') }),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://via.placeholder.com/512x512?text=Movie+Poster+4') }),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://via.placeholder.com/512x512?text=Movie+Poster+5') }),
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://via.placeholder.com/512x512?text=Movie+Poster+6') })
        ];
        cube = new THREE.Mesh(geometry, materials);
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

    init3DScene();

    // Scene controls
    const prevSceneBtn = document.getElementById('prev-scene');
    const nextSceneBtn = document.getElementById('next-scene');
    let currentScene = 0;
    const totalScenes = 3;

    function updateScene(direction) {
        currentScene = (currentScene + direction + totalScenes) % totalScenes;
        switch(currentScene) {
            case 0:
                cube.rotation.x = 0;
                cube.rotation.y = 0;
                break;
            case 1:
                cube.rotation.x = Math.PI / 2;
                cube.rotation.y = 0;
                break;
            case 2:
                cube.rotation.x = 0;
                cube.rotation.y = Math.PI / 2;
                break;
        }
    }

    prevSceneBtn.addEventListener('click', () => updateScene(-1));
    nextSceneBtn.addEventListener('click', () => updateScene(1));

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

    // Interactive Storyline
    const storyText = document.getElementById('story-text');
    const choiceButtons = document.querySelectorAll('.choice-btn');

    const storyLines = {
        start: {
            text: "You find yourself in a mysterious cinema. Do you want to watch a movie or explore the building?",
            choices: [
                { text: "Watch a movie", next: "movie" },
                { text: "Explore the building", next: "explore" }
            ]
        },
        movie: {
            text: "You sit down to watch a movie. The screen flickers to life, showing a scene of a bustling city. What genre do you hope this movie will be?",
            choices: [
                { text: "Action thriller", next: "action" },
                { text: "Sci-fi adventure", next: "scifi" }
            ]
        },
        explore: {
            text: "As you wander the halls, you discover a hidden door. Do you open it or return to the main area?",
            choices: [
                { text: "Open the door", next: "door" },
                { text: "Return to main area", next: "start" }
            ]
        },
        action: {
            text: "The movie turns into an intense car chase. You feel like you're part of the action! The end.",
            choices: [
                { text: "Restart", next: "start" },
                { text: "Exit story", next: "exit" }
            ]
        },
        scifi: {
            text: "The city transforms into a futuristic metropolis. You're captivated by the advanced technology. The end.",
            choices: [
                { text: "Restart", next: "start" },
                { text: "Exit story", next: "exit" }
            ]
        },
        door: {
            text: "Behind the door, you find a room full of film reels from movies that were never released. The end.",
            choices: [
                { text: "Restart", next: "start" },
                { text: "Exit story", next: "exit" }
            ]
        }
    };

    function updateStory(storyKey) {
        const story = storyLines[storyKey];
        storyText.textContent = story.text;
        choiceButtons.forEach((button, index) => {
            if (index < story.choices.length) {
                button.textContent = story.choices[index].text;
                button.dataset.next = story.choices[index].next;
                button.style.display = 'inline-block';
            } else {
                button.style.display = 'none';
            }
        });
    }

    choiceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const next = button.dataset.next;
            if (next === 'exit') {
                storyText.textContent = "Thanks for playing!";
                choiceButtons.forEach(btn => btn.style.display = 'none');
            } else {
                updateStory(next);
            }
        });
    });

    updateStory('start');

    // User Profile Dropdown
    const userProfile = document.querySelector('.user-profile');
    const profileDropdown = document.querySelector('.profile-dropdown');

    userProfile.addEventListener('click', () => {
        profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (event) => {
        if (!userProfile.contains(event.target)) {
            profileDropdown.style.display = 'none';
        }
    });

    // User Reviews
    const reviewForm = document.querySelector('.review-form');
    const reviewText = document.getElementById('review-text');
    const submitReview = document.getElementById('submit-review');
    const reviewsContainer = document.querySelector('.reviews-container');

    submitReview.addEventListener('click', () => {
        if (reviewText.value.trim() !== '') {
            const review = document.createElement('div');
            review.classList.add('review');
            review.textContent = reviewText.value;
            reviewsContainer.prepend(review);
            reviewText.value = '';
        }
    });

    // Social Sharing
    const shareButtons = document.querySelectorAll('.share-btn');

    shareButtons.forEach(button => {
        button.addEventListener('click', () => {
            const platform = button.dataset.platform;
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent('Check out this awesome movie on Hari-Movies!');
            let shareUrl;

            switch (platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
                    break;
                case 'instagram':
                    alert('Instagram sharing is not directly supported. You can copy the link and share it manually.');
                    return;
            }

            window.open(shareUrl, '_blank');
        });
    });

    // Personalized Recommendations (simplified example)
    function getPersonalizedRecommendations() {
        // In a real app, this would be based on user's viewing history and preferences
        const recommendations = [
            "Based on your love for sci-fi: 'Cosmic Odyssey'",
            "Since you enjoyed romantic comedies: 'Love in the Digital Age'",
            "For fans of historical dramas like you: 'Echoes of Empires'"
        ];

        const aiRecommendationsList = document.getElementById('ai-recommendations-list');
        aiRecommendationsList.innerHTML = '';

        recommendations.forEach(rec => {
            const li = document.createElement('li');
            li.textContent = rec;
            aiRecommendationsList.appendChild(li);
        });
    }

    // Call this function when the page loads or the user logs in
    getPersonalizedRecommendations();

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
