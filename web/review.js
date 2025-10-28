// Sample review data (in a real application, this would come from a database)
const reviewsData = [
    {
        id: 1,
        name: "John Smith",
        date: "May 2, 2025",
        rating: 5,
        content: "Absolutely love this product! It exceeded all my expectations and has made a significant difference in my daily routine. The quality is outstanding.",
        product: "Premium Wireless Headphones"
    },
    {
        id: 2,
        name: "Sarah Johnson",
        date: "April 28, 2025",
        rating: 4,
        content: "Great product overall. The design is sleek and modern, and it works as advertised. The only minor issue is battery life could be better.",
        product: "Smart Fitness Tracker"
    },
    {
        id: 3,
        name: "Michael Brown",
        date: "April 25, 2025",
        rating: 5,
        content: "This is exactly what I was looking for! Easy to use, durable, and the customer service was excellent when I had questions.",
        product: "Portable Bluetooth Speaker"
    },
    {
        id: 4,
        name: "Emily Davis",
        date: "April 20, 2025",
        rating: 3,
        content: "Decent product for the price. It does the job but there's room for improvement in terms of durability and features.",
        product: "Kitchen Blender"
    },
    {
        id: 5,
        name: "David Wilson",
        date: "April 15, 2025",
        rating: 5,
        content: "I'm extremely satisfied with my purchase. The product is well-made, shipped quickly, and looks even better in person than in the photos.",
        product: "Ergonomic Office Chair"
    },
    {
        id: 6,
        name: "Jennifer Lee",
        date: "April 10, 2025",
        rating: 2,
        content: "Disappointed with this purchase. The product arrived damaged and doesn't perform as well as advertised. Would not recommend.",
        product: "Robot Vacuum Cleaner"
    },
    {
        id: 7,
        name: "Robert Taylor",
        date: "April 5, 2025",
        rating: 4,
        content: "Very good product that has improved my productivity. The interface is intuitive and it's built to last. Just wish it had more color options.",
        product: "Tablet Stand"
    },
    {
        id: 8,
        name: "Lisa Anderson",
        date: "April 1, 2025",
        rating: 5,
        content: "Perfect in every way! This product has transformed how I work and I can't imagine going back to my old setup. Worth every penny.",
        product: "Mechanical Keyboard"
    },
    {
        id: 9,
        name: "James Martin",
        date: "March 28, 2025",
        rating: 1,
        content: "Terrible experience. The product stopped working after just two days and customer service has been unhelpful in resolving the issue.",
        product: "Wireless Charger"
    },
    {
        id: 10,
        name: "Patricia White",
        date: "March 25, 2025",
        rating: 4,
        content: "I'm quite happy with this purchase. It's well-designed, functional, and looks great in my home. Just a bit pricier than I'd like.",
        product: "Smart Home Hub"
    },
    {
        id: 11,
        name: "Thomas Harris",
        date: "March 20, 2025",
        rating: 3,
        content: "Mixed feelings about this one. Some features are excellent while others feel like they need more development. Overall it's okay.",
        product: "Digital Camera"
    },
    {
        id: 12,
        name: "Jessica Clark",
        date: "March 15, 2025",
        rating: 5,
        content: "Incredible product that has exceeded my expectations in every way. The attention to detail is impressive and it's clear a lot of thought went into the design.",
        product: "Coffee Maker"
    }
];

// Variables for pagination
const reviewsPerPage = 6;
let currentPage = 1;
let filteredReviews = [...reviewsData];

// DOM elements
const reviewsContainer = document.getElementById('reviews-container');
const paginationContainer = document.getElementById('pagination');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayReviews();
    setupFilterListeners();
});

// Display reviews based on current page and filters
function displayReviews() {
    // Clear the container
    reviewsContainer.innerHTML = '';
    
    // Calculate pagination
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    const paginatedReviews = filteredReviews.slice(startIndex, endIndex);
    
    // If no reviews match the filter
    if (paginatedReviews.length === 0) {
        reviewsContainer.innerHTML = `
            <div class="no-reviews">
                <p>No reviews match your filter criteria.</p>
            </div>
        `;
        paginationContainer.innerHTML = '';
        return;
    }
    
    // Create and append review cards
    paginatedReviews.forEach(review => {
        const reviewCard = createReviewCard(review);
        reviewsContainer.appendChild(reviewCard);
    });
    
    // Update pagination
    updatePagination();
}

// Create a review card element
function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';
    
    // Generate stars based on rating
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= review.rating) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }
    
    // Get initials for avatar
    const initials = review.name.split(' ').map(name => name[0]).join('');
    
    card.innerHTML = `
        <div class="review-header">
            <div class="reviewer">
                <div class="reviewer-avatar">${initials}</div>
                <div>
                    <div class="reviewer-name">${review.name}</div>
                    <div class="review-date">${review.date}</div>
                </div>
            </div>
        </div>
        <div class="review-rating">${starsHTML}</div>
        <p class="review-content">${review.content}</p>
        <p class="review-product">Product: ${review.product}</p>
    `;
    
    return card;
}

// Update pagination controls
function updatePagination() {
    const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
    
    // Clear pagination container
    paginationContainer.innerHTML = '';
    
    // Don't show pagination if only one page
    if (totalPages <= 1) return;
    
    // Create pagination buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            displayReviews();
            
            // Update active button
            document.querySelectorAll('.page-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            pageBtn.classList.add('active');
        });
        
        paginationContainer.appendChild(pageBtn);
    }
}

// Set up filter button listeners
function setupFilterListeners() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter reviews
            const rating = button.dataset.rating;
            
            if (rating === 'all') {
                filteredReviews = [...reviewsData];
            } else {
                filteredReviews = reviewsData.filter(review => review.rating === parseInt(rating));
            }
            
            // Reset to first page and display
            currentPage = 1;
            displayReviews();
        });
    });
}