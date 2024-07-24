document.addEventListener('DOMContentLoaded', function() {
    // Populate movie cards
    const contentSlider = document.querySelector('.content-slider');
    const movies = [
        { title: "Cosmic Collision", genre: "Sci-Fi", image: "https://via.placeholder.com/300x450?text=Cosmic+Collision" },
        { title: "Echoes of Eternity", genre: "Drama", image: "https://via.placeholder.com/300x450?text=Echoes+of+Eternity" },
        { title: "Neon Nights", genre: "Thriller", image: "https://via.placeholder.com/300x450?text=Neon+Nights" },
        { title: "Whispers in the Wind", genre: "Romance", image: "https://via.placeholder.com/300x450?text=Whispers+in+the+Wind" },
        { title: "The Galactic Odyssey", genre: "Adventure", image: "https://via.placeholder.com/300x450?text=The+Galactic+Odyssey" }
    ];

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-card-content">
                <h3 class="movie-card-title">${movie.title}</h3>
                <p class="movie-card-info">${movie.genre}</p>
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
            <img src="https://via.placeholder.com/100x100?text=${genre}" alt="${genre}">
            <p>${genre}</p>
        `;
        genreGrid.appendChild(genreCard);
    });

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
                    <img src="https://via.placeholder.com/150x225?text=${movie.title}" alt="${movie.title}">
                    <div class="movie-card-content">
                        <h3 class="movie-card-title">${movie.title}</h3>
                        <p class="movie-card-info">${movie.genre}</p>
                    </div>
                `;
                moodRecommendations.appendChild(movieCard);
            });
        });
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
            <img src="https://via.placeholder.com/150x225?text=${movie.title}" alt="${movie.title}">
            <div class="movie-card-content">
                <h3 class="movie-card-title">${movie.title}</h3>
                <p class="movie-card-info">${movie.releaseDate}</p>
            </div>
        `;
        comingSoonSlider.appendChild(movieCard);
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
        rootMargin: '0px 0px -50px 0px'
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

    // Mobile menu toggle
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('nav').appendChild(menuToggle);

    const mobileMenu = document.createElement('div');
    mobileMenu.classList.add('mobile-menu');
    mobileMenu.innerHTML = `
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#movies">Movies</a></li>
            <li><a href="#tvshows">TV Shows</a></li>
            <li><a href="#mylist">My List</a></li>
        </ul>
    `;
    document.body.appendChild(mobileMenu);

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove('active');
        }
    });

    // Lazy loading images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const lazyLoadOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px 200px 0px"
    };

    const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    }, lazyLoadOptions);

    lazyImages.forEach(img => lazyLoadObserver.observe(img));
});

