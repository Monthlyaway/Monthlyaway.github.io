document.addEventListener('DOMContentLoaded', () => {
    const imageGrid = document.querySelector('.image-grid');
    const galleryContainer = document.querySelector('.gallery-container');
    const imageDir = 'images/epic_realism/';
    // In a real application, you might fetch this list from a server
    // or use a build step to generate it. For now, we list known images.
    const imageFiles = [
        '00109-2927102890.png',
        'image.png'
        // Add more image filenames here as needed
    ];

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
    backLink.classList.add('back-link'); // Use class for styling
    // Insert the link before the H1 title within the container
    galleryContainer.insertBefore(backLink, galleryContainer.firstChild);


    if (imageFiles.length === 0) {
        imageGrid.innerHTML = '<p>No images found in this gallery yet.</p>';
        return;
    }

    // Populate the grid
    imageFiles.forEach(fileName => {
        const imageUrl = imageDir + fileName;
        const link = document.createElement('a');
        link.href = imageUrl;
        // Use the directory name for the lightbox group
        link.setAttribute('data-lightbox', 'epic-realism-gallery');
        // Optional: Add a title that appears in the lightbox
        link.setAttribute('data-title', fileName); // Use filename as title for now

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `Epic Realism Image: ${fileName}`; // Add descriptive alt text
        img.loading = 'lazy'; // Improve performance by lazy loading images

        link.appendChild(img);
        imageGrid.appendChild(link);
    });

    // Initialize Lightbox if it's loaded
    // Lightbox2 usually initializes itself if the script is included correctly.
    // If using a different library, initialization might be needed here.
    // e.g., if (typeof lightbox !== 'undefined') { lightbox.option({...}); }
});