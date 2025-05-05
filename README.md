# Dynamic Image Gallery

This image gallery system automatically displays images organized by topics. It supports:

- Display of images organized by topics
- Sorting images by predefined order (newest first)
- Responsive design for all screen sizes

## Implementation Details

This gallery has two implementation options:

1. **JavaScript-only implementation (current)** - Uses hardcoded image lists in the gallery.js file
2. **PHP-based implementation** - Can dynamically scan the server's file system to discover topics and images

The current version uses the JavaScript-only implementation, which means:
- New images must be manually added to the `getTopicInfo()` function in gallery.js
- New topics must be manually added to the `getTopics()` function in gallery.js

## How to Add New Images

To add new images to an existing topic:

1. Place the new image file in the appropriate folder (e.g., `images/epic_realism/`)
2. Edit the `js/gallery.js` file and add a new entry to the images array in the `getTopicInfo()` function

Example:
```javascript
// Inside getTopicInfo() function for 'epic_realism'
images: [
    { url: 'images/epic_realism/new-image.png', lastModified: baseTime - 0 * 86400000 },
    // ... existing images
]
```

## How to Add New Topics

To add a new topic:

1. Create a new folder in the `images/` directory (e.g., `images/my_new_topic/`)
2. Add a text file with the topic name (e.g., `images/my_new_topic/My Topic Title.txt`)
3. Add image files to this folder
4. Edit the `js/gallery.js` file and add a new entry to the `getTopics()` function
5. Add a new case in the `getTopicInfo()` function to handle the new topic

Example:
```javascript
// Inside getTopics() function
return [
    {
        name: 'Epic Realism',
        folder: 'epic_realism',
        coverImage: 'images/epic_realism/00119-1798083214.png',
        lastModified: new Date().getTime()
    },
    {
        name: 'My New Topic',
        folder: 'my_new_topic',
        coverImage: 'images/my_new_topic/first-image.jpg',
        lastModified: new Date().getTime() - 86400000 // 1 day older
    }
    // ... more topics
];

// Inside getTopicInfo() function
if (topicFolder === 'my_new_topic') {
    const baseTime = new Date().getTime();
    return {
        name: 'My New Topic',
        images: [
            { url: 'images/my_new_topic/first-image.jpg', lastModified: baseTime },
            { url: 'images/my_new_topic/second-image.jpg', lastModified: baseTime - 86400000 }
        ]
    };
}
```

## PHP Implementation (Alternative)

If you have a PHP-enabled web server, you can switch to the PHP-based implementation for automatic directory scanning. This requires:

1. A web server with PHP support
2. The `api/topics.php` and `api/topic.php` files (already in the repo)
3. Reverting the gallery.js to the PHP-based version

## Usage

Simply navigate to `gallery.html` to view the image gallery. The main page (`index.html`) already includes a link to the gallery. 