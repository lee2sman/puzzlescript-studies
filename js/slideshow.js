const tiles = document.querySelectorAll('.tile');
const header = document.getElementsByTagName('header')[0];
const slideshow = document.querySelector('#slideshow');
const slideshow_player = document.querySelector('#slideshow article');
const slideshow_button = document.querySelector('#slideshow-button');
const end_slideshow_button = document.querySelector('#end-slideshow-button');
let pos = 0;
let slideshow_play;

// Start slideshow when "Play' is clicked
slideshow_button.addEventListener('click', e => {
    e.preventDefault();

    // Change "Play" to "Pause"
    e.target.innerText = 'Pause';

    // Show the "End" button
    end_slideshow_button.style.display = 'inline';

    // Boolean to check if slideshow is playing or paused
    if (e.target.dataset.playing == 'false') {
        // Play
        nextSlide(true);
        slideshowPlay();
    } else {
        // Pause
        slideshowPause();
    }
});

// End slideshow when "End" is clicked
end_slideshow_button.addEventListener('click', e => {
    e.preventDefault();

    // Stop slideshow setInterval
    clearInterval(slideshow_play);

    // Reset the page styles and hide and show elements
    slideshow_button.innerText = 'Play';
    slideshow_button.dataset.playing = 'false';
    slideshow.style.display = 'none';
    header.classList.remove('dark');

    end_slideshow_button.style.display = 'none';

    // Remove any HTML from the slideshow player
    slideshow_player.innerHTML = '';

    // Reset the slide position to zero
    post = 0;
})

// Play slideshow
function slideshowPlay() {
    slideshow_button.innerText = 'Pause';
    slideshow_button.dataset.playing = 'true';
    slideshow.style.display = 'flex';
    header.classList.add('dark');

    slideshow_play = setInterval(nextSlide, 2000);
}

// Pause slideshow
function slideshowPause() {
    clearInterval(slideshow_play);

    slideshow_button.innerText = 'Play';
    slideshow_button.dataset.playing = 'false';
}

// Previous slide
function prevSlide() {
    // Decrement the slide position
    if (pos == 0) {
        pos = tiles.length - 1;
    } else {
        pos--;
    }

    // Remove any HTML from the slideshow player
    slideshow_player.innerHTML = '';

    // Clone the tile from the DOM
    let tile_clone = tiles[pos].cloneNode(true);
    // Append the cloned tile to the slideshow
    slideshow_player.appendChild(tile_clone);

    // Reinitialize the image viewer from (image-viewer.js) 
    imageViewer();
}

// Next slide
function nextSlide(on_open) {
    // Increment the slide position
    if (on_open == true) {
        pos = 0;
    } else {
        if (pos == tiles.length - 1) {
            pos = 0;
        } else {
            pos++;
        }
    }

    // Remove any HTML from the slideshow player
    slideshow_player.innerHTML = '';

    // Clone the tile from the DOM
    let tile_clone = tiles[pos].cloneNode(true);
    // Append the cloned tile to the slideshow
    slideshow_player.appendChild(tile_clone);

    // Reinitialize the image viewer from (image-viewer.js) 
    imageViewer();
}



// +++ Keyboard shortcuts +++

// Prevent spacebar from scrolling
window.addEventListener('keydown', (e) => {
    if(e.keyCode == 32 && e.target == document.body) {
      e.preventDefault();
    }
});

// Other key shortcuts
document.body.onkeyup = (e) => {
    if(e.keyCode == 32){
        // Spacebar to play/pause
        e.preventDefault();
        slideshow_button.click();
    }
    if(e.keyCode == 27){
        // Esc to exit slideshow
        end_slideshow_button.click();

        // Also close image viewer (from image-viewer.js)
        closeViewer();
    }

    if(e.keyCode == 37){
        // Left arrow
        slideshowPause();
        prevSlide();
    }
    if(e.keyCode == 39){
        // Right arrow
        slideshowPause();
        nextSlide();
    }
}
