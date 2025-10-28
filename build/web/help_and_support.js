document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            
            // Animate hamburger to X
            const spans = this.querySelectorAll('span');
            this.classList.toggle('active');
            
            if (this.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu.style.display === 'flex' && window.innerWidth <= 768) {
                    mobileMenuBtn.click();
                }
            }
        });
    });
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // FAQ Category Filtering
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(otherBtn => {
                otherBtn.classList.remove('active');
            });
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            
            // Show/hide FAQ items based on category
            faqItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
   

    
    // Chat Widget
    const chatBtn = document.getElementById('chat-btn');
    const chatLinkBtn = document.getElementById('chat-link-btn');
    const chatWidget = document.getElementById('chat-widget');
    const closeChat = document.getElementById('close-chat');
    const chatInput = document.getElementById('chat-input-field');
    const sendMessage = document.getElementById('send-message');
    const chatMessages = document.getElementById('chat-messages');
    
    // Open chat widget
    if (chatBtn) {
        chatBtn.addEventListener('click', function(e) {
            e.preventDefault();
            chatWidget.style.display = 'flex';
        });
    }
    
    if (chatLinkBtn) {
        chatLinkBtn.addEventListener('click', function() {
            chatWidget.style.display = 'flex';
        });
    }
    
    // Close chat widget
    if (closeChat) {
        closeChat.addEventListener('click', function() {
            chatWidget.style.display = 'none';
        });
    }
    
    // Send message
    function sendChatMessage() {
        const message = chatInput.value.trim();
        
        if (message) {
            // Add user message
            const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            
            const userMessageHTML = `
                <div class="message user">
                    <div class="message-content">
                        <p>${message}</p>
                        <span class="time">${currentTime}</span>
                    </div>
                </div>
            `;
            
            chatMessages.insertAdjacentHTML('beforeend', userMessageHTML);
            
            // Clear input
            chatInput.value = '';
            
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            // Simulate support response after a delay
            setTimeout(() => {
                const supportResponses = [
                    "Thank you for your message. How else can I help you?",
                    "I understand your concern. Let me check that for you.",
                    "Thanks for reaching out. A support agent will be with you shortly.",
                    "I'm looking into this issue for you. Please give me a moment."
                ];
                
                const randomResponse = supportResponses[Math.floor(Math.random() * supportResponses.length)];
                
                const supportMessageHTML = `
                    <div class="message support">
                        <div class="message-content">
                            <p>${randomResponse}</p>
                            <span class="time">Just now</span>
                        </div>
                    </div>
                `;
                
                chatMessages.insertAdjacentHTML('beforeend', supportMessageHTML);
                
                // Scroll to bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
        }
    }
    
    if (sendMessage) {
        sendMessage.addEventListener('click', sendChatMessage);
    }
    
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });
    }
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        if (searchTerm) {
            // Get all FAQ questions
            const faqQuestions = document.querySelectorAll('.faq-question h3');
            let foundMatch = false;
            
            // Reset display
            faqItems.forEach(item => {
                item.style.display = 'none';
                item.classList.remove('active');
            });
            
            // Show all category buttons
            categoryBtns.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-category') === 'all') {
                    btn.classList.add('active');
                }
            });
            
            // Search through questions
            faqQuestions.forEach(question => {
                const faqItem = question.closest('.faq-item');
                
                if (question.textContent.toLowerCase().includes(searchTerm)) {
                    faqItem.style.display = 'block';
                    faqItem.classList.add('active');
                    foundMatch = true;
                    
                    // Scroll to first match
                    if (foundMatch) {
                        window.scrollTo({
                            top: document.querySelector('#faq').offsetTop - 80,
                            behavior: 'smooth'
                        });
                        foundMatch = false; // Only scroll to the first one
                    }
                }
            });
            
            // If no matches found
            if (!foundMatch) {
                alert('No results found. Please try a different search term.');
                
                // Reset display
                faqItems.forEach(item => {
                    item.style.display = 'block';
                });
            }
        }
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});