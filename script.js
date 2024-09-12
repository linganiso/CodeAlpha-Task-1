// Generate image paths from "image 1.jpg" to "image 20.jpg"
const images = Array.from({ length: 20 }, (_, i) => `image ${i + 1}.jpg`); 

// Index to keep track of the current image being displayed in the modal
let currentIndex = 0;

// Function to generate the thumbnail grid
function generateThumbnails() {
    const gallery = document.querySelector('.thumbnail-gallery');
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Thumbnail ${index + 1}`;
        img.onclick = () => openModal(index); // Set click handler to open modal with correct index
        gallery.appendChild(img);
    });
}

// Function to open the modal with the selected image
function openModal(index) {
    currentIndex = index; // Update current index
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    modalImage.src = images[currentIndex]; // Set the source of the modal image
    modalImage.alt = `Image ${currentIndex + 1}`;
    modal.style.display = 'flex'; // Show the modal
}

// Function to close the modal
function closeModal() {
    document.getElementById('image-modal').style.display = 'none'; // Hide the modal
}

// Function to go to the previous image in the modal
function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1; // Decrement index or loop to last image
    updateModalImage(); // Update image displayed in the modal
}

// Function to go to the next image in the modal
function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0; // Increment index or loop to first image
    updateModalImage(); // Update image displayed in the modal
}

// Function to update the modal image based on the current index
function updateModalImage() {
    const modalImage = document.getElementById('modal-image');
    modalImage.src = images[currentIndex]; // Update the source of the modal image
    modalImage.alt = `Image ${currentIndex + 1}`;
}

// Initialize the gallery and add event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    generateThumbnails(); // Create the thumbnail grid when DOM is fully loaded
});
