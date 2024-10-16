const blogpostSection = document.querySelector('.blogpost');
let arr = [];

async function fetchAndDisplayPictures() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const photos = await response.json();
        arr = photos.slice(0, 100);
    } catch (error) {
        console.error('Error fetching and displaying pictures:', error);
    } finally {
        console.log("This will work regardless");
    }
}

fetchAndDisplayPictures();

async function loadPhotos() {
    try {
        await fetchAndDisplayPictures();
        if (arr.length > 0) {
            arr.forEach(item => {
                const postPhoto = document.createElement("div");
                postPhoto.classList.add("post");
                postPhoto.innerHTML = `
                <img src="${item.url}" alt="${item.title}" id="posting" style="width: 200px; margin: 10px;" />
                <div id="thumbText">
                    <img src="${item.thumbnailUrl}" alt="${item.title}" id="thumbnail" />
                    <p id="photoTitle">${item.title}</p>
                </div>`;
                
                blogpostSection.appendChild(postPhoto);
            });
        }
    } catch (error) {
        console.log(`Error loading data: ${error}`);
    }
}

document.addEventListener('DOMContentLoaded', loadPhotos);