const image_viewer = document.querySelector('#image-viewer');
const image_viewer_inner = document.querySelector('#image-viewer article');

function imageViewer() {
    // Get all the images
    let images = document.querySelectorAll('.images img');

    // Open Viewer when thumbnail is clicked
    for (image of images) {
        image.addEventListener('click', e => {    
            image_viewer.style.backgroundImage = `url('${e.target.src}')`;
            image_viewer.style.display = 'flex';
        });
    }
}

// Run the image viewer function when the page loads
imageViewer();

// Close viewer
image_viewer.addEventListener('click', () => {
    closeViewer();
});

function closeViewer(){ 
    image_viewer_inner.innerHTML = '';
    image_viewer.style.display = 'none';
}