    heroSlides.forEach(slide => {
        const slideElement = document.createElement('div');
        slideElement.classList.add('swiper-slide');
        slideElement.style.backgroundImage = `url(${slide.image})`;
        slideElement.innerHTML = `
            <div class="slide-content">
                <h2 class="slide-title">${slide.title}</h2>
                <p class="slide-description">${slide.description}</p>
            </div>
        `;
        swiperWrapper.appendChild(slideElement);
    });

    // Populate featured movies
    const featuredGrid = document.querySelector('.featured-grid');
    const featuredMovies = [
        { title: "Stellar Saga", genre: "Sci-Fi", image: "https://via.placeholder.com/300x450?text=Stellar+Saga" },
        { title: "Midnight Mystery", genre: "Thriller", image: "https://via.placeholder.com/300x450?text=Midnight+Mystery" },
        { title: "Love in Paris", genre: "Romance", image: "https://via.placeholder.com/300x450?text=Love+in+Paris" },
        { title: "Jungle Quest", genre: "Adventure", image: "https://via.placeholder.com/300x450?text=Jungle+Quest" },
        { title: "Cyber Rebellion", genre: "Action", image: "https://via.placeholder.com/300x450?text=Cyber+Rebellion" },
        { title: "Haunted Mansion", genre: "Horror", image: "https://via.placeholder.com/300x450?text=Haunted+Mansion" }
    ];

    featuredMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('featured-card');
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="featured-card-content">
                <h3>${movie.title}</h3>
                <p>${movie.genre}</p>
            </div>
        `;
        featuredGrid.appendChild(movieCard);
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

    // Populate actors section
    const actorsGrid = document.querySelector('.actors-grid');
    const actors = [
        { name: "John Doe", image: "https://via.placeholder.com/100x100?text=John+Doe" },
        { name: "Jane Smith", image: "https://via.placeholder.com/100x100?text=Jane+Smith" },
        { name: "Mike Johnson", image: "https://via.placeholder.com/100x100?text=Mike+Johnson" },
        { name: "Emily Brown", image: "https://via.placeholder.com/100x100?text=Emily+Brown" },
        { name: "Chris Lee", image: "https://via.placeholder.com/100x100?text=Chris+Lee" },
        { name: "Sarah Wilson", image: "https://via.placeholder.com/100x100?text=Sarah+Wilson" }
    ];

    actors.forEach(actor => {
        const actorCard = document.createElement('div');
        actorCard.classList.add('actor-card');
        actorCard.innerHTML = `
            <img src="${actor.image}" alt="${actor.name}">
            <p>${actor.name}</p>
        `;
        actorCard.addEventListener('click', () => showActorMovies(actor.name));
        actorsGrid.appendChild(actorCard);
    });

    function showActorMovies(actorName) {
        // This is a placeholder function. In a real app, you would fetch the actor's movies from a database.
        alert(`Showing movies starring ${actorName}`);
        // You could then populate a modal or a new section with the actor's movies.
    }

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

    // Populate coming soon section
    const comingSoonGrid = document.querySelector('.coming-soon-grid');
    const comingSoonMovies = [
        { title: "Future Shock", releaseDate: "Coming next month", image: "https://via.placeholder.com/300x450?text=Future+Shock" },
        { title: "Mystic Realms", releaseDate: "In 2 months", image: "https://via.placeholder.com/300x450?text=Mystic+Realms" },
        { title: "Quantum Leap", releaseDate: "Coming soon", image: "https://via.placeholder.com/300x450?text=Quantum+Leap" },
        { title: "Echoes of Time", releaseDate: "Next year", image: "https://via.placeholder.com/300x450?text=Echoes+of+Time" }
    ];

    comingSoonMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('coming-soon-card');
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="coming-soon-card-content">
                <h3>${movie.title}</h3>
                <p>${movie.releaseDate}</p>
            </div>
        `;
        comingSoonGrid.appendChild(movieCard);
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

    // Populate top 10 trending
    const trendingGrid = document.querySelector('.trending-grid');
    const trendingMovies = [
        "Cosmic Collision", "Echoes of Eternity", "Neon Nights", "Whispers in the Wind",
        "The Galactic Odyssey", "Legends of the Lost", "Temporal Twist", "Quantum Quest",
        "Mystic Melodies", "Cyber Serendipity"
    ];

    trendingMovies.forEach((movie, index) => {
        const trendingCard = document.createElement('div');
        trendingCard.classList.add('trending-card');
        trendingCard.innerHTML = `
            <img src="https://via.placeholder.com/200x300?text=${movie}" alt="${movie}">
            <div class="trending-number">${index + 1}</div>
        `;
        trendingGrid.appendChild(trendingCard);
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
    const movieCards = document.querySelectorAll('.movie-card, .featured-card, .coming-soon-card, .trending-card');
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
