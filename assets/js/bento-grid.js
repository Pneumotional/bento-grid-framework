
// Bento Grid Framework - Core JavaScript

class BentoGrid {
    constructor() {
        this.initializeCarousels();
        this.initializeEventListeners();
    }

    // Initialize all carousels on the page
    initializeCarousels() {
        document.querySelectorAll('.bento-item.featured').forEach(featuredItem => {
            this.setupCarousel(featuredItem);
        });
    }

    // Setup individual carousel
    setupCarousel(featuredItem) {
        const container = featuredItem.querySelector('.carousel-container');
        const slides = container.querySelectorAll('.carousel-slide');
        const dotsContainer = container.querySelector('.carousel-dots');
        
        let currentSlide = 0;
        
        // Clear existing dots
        if (dotsContainer) {
            dotsContainer.innerHTML = '';
        }
        
        // Create dots
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot'); // Changed from carousel-dot to dot
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(featuredItem, index));
            dotsContainer.appendChild(dot);
        });
        
        // Auto-advance carousel
        const intervalId = setInterval(() => {
            this.nextSlide(featuredItem);
        }, 5000);
        
        // Store interval ID on the featured item
        featuredItem.dataset.intervalId = intervalId;
        
        // Pause on hover
        featuredItem.addEventListener('mouseenter', () => {
            clearInterval(intervalId);
        });
        
        featuredItem.addEventListener('mouseleave', () => {
            clearInterval(intervalId);
            featuredItem.dataset.intervalId = setInterval(() => {
                this.nextSlide(featuredItem);
            }, 5000);
        });
    }

    // Go to specific slide
    goToSlide(featuredItem, n) {
        const container = featuredItem.querySelector('.carousel-container');
        const slides = container.querySelectorAll('.carousel-slide');
        const dots = container.querySelectorAll('.dot');
        
        // Remove active class from current slide and dot
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to new slide and dot
        slides[n].classList.add('active');
        if (dots[n]) dots[n].classList.add('active');
    }

    // Go to next slide
    nextSlide(featuredItem) {
        const container = featuredItem.querySelector('.carousel-container');
        const slides = container.querySelectorAll('.carousel-slide');
        const currentSlide = container.querySelector('.carousel-slide.active');
        const currentIndex = Array.from(slides).indexOf(currentSlide);
        const nextIndex = (currentIndex + 1) % slides.length;
        
        this.goToSlide(featuredItem, nextIndex);
    }

    // Initialize event listeners for bento items
    initializeEventListeners() {
        document.querySelectorAll('.bento-item').forEach(item => {
            // Click handler
            item.addEventListener('click', (e) => {
                if (!e.target.classList.contains('dot')) {
                    this.handleItemClick(item);
                }
            });
        });
    }

    // Handle item click
    handleItemClick(item) {
        const title = item.querySelector('h3, .carousel-content h2');
        const tag = item.querySelector('.article-tag');
        
        console.log('Bento item clicked:', {
            title: title ? title.textContent : 'Untitled',
            tag: tag ? tag.textContent : 'No tag',
            element: item
        });
        
        // Dispatch custom event
        const event = new CustomEvent('bento-item-click', {
            detail: { item },
            bubbles: true
        });
        item.dispatchEvent(event);
    }

    // Create bento grid dynamically
    createGrid(containerId, options = {}) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        const {
            columns = 'auto-fit',
            minWidth = '300px',
            gap = '20px',
            autoRows = '280px',
            layout = 'default'
        } = options;
        
        container.classList.add('bento-grid');
        container.style.gridTemplateColumns = `repeat(${columns}, minmax(${minWidth}, 1fr))`;
        container.style.gap = gap;
        container.style.gridAutoRows = autoRows;
        
        if (layout !== 'default') {
            container.classList.add(layout);
        }
        
        // Reinitialize
        this.initializeCarousels();
        this.initializeEventListeners();
    }

    // Add item to grid
    addGridItem(containerId, item) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        const bentoItem = document.createElement('div');
        bentoItem.classList.add('bento-item');
        bentoItem.innerHTML = item;
        
        container.appendChild(bentoItem);
        
        // Check if it's a featured item with carousel
        if (bentoItem.classList.contains('featured') && bentoItem.querySelector('.carousel-container')) {
            this.setupCarousel(bentoItem);
        }
        
        this.initializeEventListeners();
    }

    // Apply size modifiers
    setItemSize(item, cols = 1, rows = 1) {
        if (cols > 1) item.classList.add(`span-${cols}`);
        if (rows > 1) item.classList.add(`row-${rows}`);
    }
    
    // Cleanup method
    destroy() {
        document.querySelectorAll('.bento-item.featured').forEach(item => {
            if (item.dataset.intervalId) {
                clearInterval(parseInt(item.dataset.intervalId));
            }
        });
    }
}

// Initialize Bento Grid when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.bentoGrid = new BentoGrid();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BentoGrid;
}