document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Populate hero slider
    const heroSlides = [
        { title: "Cosmic Collision", description: "A sci-fi epic", image: "https://via.placeholder.com/1000x500?text=Cosmic+Collision" },
        { title: "Echoes of Eternity", description: "A timeless romance", image: "https://via.placeholder.com/1000x500?text=Echoes+of+Eternity" },
        { title: "Neon Nights", description: "A thrilling noir adventure", image: "https://via.placeholder.com/1000x500?text=Neon+Nights" },
        { title: "Whispers in the Wind", description: "A touching drama", image: "https://via.placeholder.com/1000x500?text=Whispers+in+the+Wind" },
        { title: "The Galactic Odyssey", description: "An interstellar journey", image: "https://via.placeholder.com/1000x500?text=The+Galactic+Odyssey" },
        { title: "Legends of the Lost", description: "An archaeological adventure", image: "https://via.placeholder.com/1000x500?text=Legends+of+the+Lost" }
    ];

    const swiperWrapper = document.querySelector('.swiper-wrapper');
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
