document.addEventListener('DOMContentLoaded', () => {
    const imageGrid = document.querySelector('.image-grid');
    const galleryContainer = document.querySelector('.gallery-container');
    const galleryTitle = document.querySelector('.gallery-container h1');
    
    if (!imageGrid || !galleryContainer) {
        console.error("Gallery container or image grid not found!");
        return;
    }

    // Clear the loading message
    imageGrid.innerHTML = '';

    // Add a "Back to Home" link
    const backLink = document.createElement('a');
    backLink.href = 'index.html';
    backLink.textContent = '← Back to Home';
    backLink.classList.add('back-link');
    galleryContainer.insertBefore(backLink, galleryContainer.firstChild);

    // Get the topic from URL if present
    const urlParams = new URLSearchParams(window.location.search);
    const topicParam = urlParams.get('topic');

    if (topicParam) {
        // Show specific topic gallery
        loadTopicGallery(topicParam);
    } else {
        // Show topic selector
        loadTopicSelector();
    }

    /**
     * Loads the topic selector view (main gallery page)
     */
    function loadTopicSelector() {
        // Update title
        galleryTitle.textContent = 'Image Gallery: Topics';
        
        // Add class to container for styling
        galleryContainer.classList.add('topic-selector');

        // Get topics directly from the JS-only implementation
        const topics = getTopics();
        
        if (topics.length === 0) {
            imageGrid.innerHTML = '<p>No topics found.</p>';
            return;
        }

        // Sort topics by the last modified date of their cover image (newest first)
        topics.sort((a, b) => b.lastModified - a.lastModified);

        // Display topic cards
        topics.forEach(topic => {
            const topicCard = document.createElement('div');
            topicCard.classList.add('topic-card');

            const link = document.createElement('a');
            link.href = `gallery.html?topic=${encodeURIComponent(topic.folder)}`;
            
            const img = document.createElement('img');
            img.src = topic.coverImage;
            img.alt = `${topic.name} Cover Image`;
            img.loading = 'lazy';
            
            const topicName = document.createElement('h3');
            topicName.textContent = topic.name;
            
            link.appendChild(img);
            topicCard.appendChild(link);
            topicCard.appendChild(topicName);
            imageGrid.appendChild(topicCard);
        });
    }

    /**
     * Loads the gallery for a specific topic
     * @param {string} topicFolder - The folder name for the topic
     */
    function loadTopicGallery(topicFolder) {
        // Add back link to topics
        const topicsBackLink = document.createElement('a');
        topicsBackLink.href = 'gallery.html';
        topicsBackLink.textContent = '← Back to Topics';
        topicsBackLink.classList.add('back-link', 'topics-back-link');
        galleryContainer.insertBefore(topicsBackLink, backLink.nextSibling);
        
        // Get topic info directly using the JS-only implementation
        const topicInfo = getTopicInfo(topicFolder);
        
        if (!topicInfo) {
            imageGrid.innerHTML = '<p>Topic not found.</p>';
            return;
        }

        // Update title with topic name
        galleryTitle.textContent = `Image Gallery: ${topicInfo.name}`;
        
        // If no images
        if (topicInfo.images.length === 0) {
            imageGrid.innerHTML = '<p>No images found in this gallery yet.</p>';
            return;
        }

        // Sort images by last modified date (newest first)
        topicInfo.images.sort((a, b) => b.lastModified - a.lastModified);

        // Populate the grid with images
        topicInfo.images.forEach(image => {
            const link = document.createElement('a');
            link.href = image.url;
            link.setAttribute('data-lightbox', `${topicFolder}-gallery`);
            link.setAttribute('data-title', topicInfo.name);

            const img = document.createElement('img');
            img.src = image.url;
            img.alt = `${topicInfo.name} Image`;
            img.loading = 'lazy';

            link.appendChild(img);
            imageGrid.appendChild(link);
        });
    }

    /**
     * Gets the list of available topics - JavaScript-only implementation
     * @returns {Array} Array of topic objects with name, folder, coverImage
     */
    function getTopics() {
        // Since we can't scan the server directory with JS, we'll hard-code the available topics
        // In a real implementation, this would come from the server or a config file
        
        // Define the known topics
        return [
            {
                name: 'Epic Realism',
                folder: 'epic_realism',
                coverImage: 'images/epic_realism/00119-1798083214.png', // First image as cover
                lastModified: new Date().getTime() // Current time
            }
            // Add more topics as you create them in the images directory
            // {
            //     name: 'Abstract Art',
            //     folder: 'abstract_art',
            //     coverImage: 'images/abstract_art/cover.jpg',
            //     lastModified: new Date().getTime()
            // }
        ];
    }

    /**
     * Gets information about a specific topic - JavaScript-only implementation
     * @param {string} topicFolder - The folder name for the topic
     * @returns {Object|null} Topic object with name and images array, or null if not found
     */
    function getTopicInfo(topicFolder) {
        // Find images for the specified topic
        // In a production environment, this would be fetched from a server or config
        
        if (topicFolder === 'epic_realism') {
            // Define all the images in the epic_realism folder
            const baseTime = new Date().getTime();
            
            return {
                name: 'Epic Realism',
                images: [
                    { url: 'images/epic_realism/00119-1798083214.png', lastModified: baseTime - 0 * 86400000 },
                    { url: 'images/epic_realism/00034-2086455436.png', lastModified: baseTime - 1 * 86400000 },
                    { url: 'images/epic_realism/1.png', lastModified: baseTime - 2 * 86400000 },
                    { url: 'images/epic_realism/00117-3788824977.png', lastModified: baseTime - 3 * 86400000 },
                    { url: 'images/epic_realism/00113-551516609.png', lastModified: baseTime - 4 * 86400000 },
                    { url: 'images/epic_realism/00108-3052645279.png', lastModified: baseTime - 5 * 86400000 },
                    { url: 'images/epic_realism/00106-4099922301.png', lastModified: baseTime - 6 * 86400000 },
                    { url: 'images/epic_realism/00100-2930435936.png', lastModified: baseTime - 7 * 86400000 },
                    { url: 'images/epic_realism/00099-3261639913.png', lastModified: baseTime - 8 * 86400000 },
                    { url: 'images/epic_realism/00097-650876938.png', lastModified: baseTime - 9 * 86400000 },
                    { url: 'images/epic_realism/00094-1036861409.png', lastModified: baseTime - 10 * 86400000 },
                    { url: 'images/epic_realism/00089-1376188453.png', lastModified: baseTime - 11 * 86400000 },
                    { url: 'images/epic_realism/00084-1709010905.png', lastModified: baseTime - 12 * 86400000 },
                    { url: 'images/epic_realism/00083-1873883039.png', lastModified: baseTime - 13 * 86400000 },
                    { url: 'images/epic_realism/00075-499083424.png', lastModified: baseTime - 14 * 86400000 },
                    { url: 'images/epic_realism/00050-2753835061.png', lastModified: baseTime - 15 * 86400000 },
                    { url: 'images/epic_realism/00049-2044937419.png', lastModified: baseTime - 16 * 86400000 },
                    { url: 'images/epic_realism/00048-4073251999.png', lastModified: baseTime - 17 * 86400000 },
                    { url: 'images/epic_realism/00047-3974759145.png', lastModified: baseTime - 18 * 86400000 },
                    { url: 'images/epic_realism/00041-1980095076.png', lastModified: baseTime - 19 * 86400000 }
                ]
            };
        }
        
        // Topic not found
        return null;
    }
});