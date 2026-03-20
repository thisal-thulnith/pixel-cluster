// Simple interactivity for filter buttons
document.addEventListener('DOMContentLoaded', function() {
    // Filter buttons functionality
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons in the same container
            this.parentElement.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            // Add active class to clicked button
            this.classList.add('active');
        });
    });
    
    // Movie card hover effect enhancement
    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // Category card hover effect
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.btn-primary');
    
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            performSearch();
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            alert(`Searching for: "${searchTerm}"\n\nIn a real application, this would filter the movie list.`);
            // Here you would implement actual search/filter logic
        }
    }
    
    // Simulate loading more movies
    const viewAllButtons = document.querySelectorAll('.view-all');
    viewAllButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionTitle = this.parentElement.querySelector('.section-title').textContent;
            alert(`Loading more movies from: ${sectionTitle}\n\nIn a real application, this would load additional content.`);
        });
    });

    // NEW: Auto-scrolling carousel for New Arrivals
    const featuredMovies = document.querySelector('.featured-movies');
    if (featuredMovies) {
        let scrollSpeed = 0.5; // pixels per frame
        let scrollDirection = -1; // -1 for left, 1 for right
        let isPaused = false;
        let animationId;

        function autoScroll() {
            if (!isPaused) {
                // If scrolled to the end, reset to beginning
                if (featuredMovies.scrollLeft >= featuredMovies.scrollWidth - featuredMovies.clientWidth - 1) {
                    featuredMovies.scrollLeft = 0;
                } else if (featuredMovies.scrollLeft <= 0) {
                    featuredMovies.scrollLeft = featuredMovies.scrollWidth - featuredMovies.clientWidth;
                }
                
                featuredMovies.scrollLeft += scrollSpeed * scrollDirection;
            }
            animationId = requestAnimationFrame(autoScroll);
        }

        // Start auto-scroll
        autoScroll();

        // Pause on hover
        featuredMovies.addEventListener('mouseenter', () => {
            isPaused = true;
        });

        featuredMovies.addEventListener('mouseleave', () => {
            isPaused = false;
        });

        // Pause on touch
        featuredMovies.addEventListener('touchstart', () => {
            isPaused = true;
        });

        featuredMovies.addEventListener('touchend', () => {
            isPaused = false;
        });

        // Clean up on page unload
        window.addEventListener('beforeunload', () => {
            cancelAnimationFrame(animationId);
        });
    }
});