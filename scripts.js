const API_KEY = 'live_d4NlgXXiNIEsZcWRBKntQoosj0kp4WmGX5hjxhO18j2VCyMxLlVny1ofaNa8uCj1';
const API_URL = `https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=beng&api_key=${API_KEY}`;
const catImagesContainer = document.getElementById('catImagesContainer');

// Function to fetch cat images from the API
function fetchCatImages() {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.map((cat) => cat.url))
    .catch((error) => {
      console.error('Error fetching cat images:', error);
      return [];
    });
}

// Function to create and append image tags to the container
function displayCatImages(imageUrls) {
  imageUrls.forEach((imageUrl) => {
    const img = document.createElement('img');
    img.setAttribute('src', imageUrl);
    img.setAttribute('alt', 'Cat Image');
    catImagesContainer.appendChild(img);
  });
}



// Main function to initiate the process
function init() {
  fetchCatImages()
    .then((imageUrls) => {
      if (imageUrls.length > 0) {
        displayCatImages(imageUrls);
      } else {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Failed to fetch cat images. Please try again later.';
        catImagesContainer.appendChild(errorMessage);
      }
    });
}

// Call the main function to start fetching and displaying cat images
init();
