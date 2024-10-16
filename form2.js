// Select the file input and thumbnails div
const fileUpload = document.getElementById('fileUpload');
const thumbnails = document.getElementById('thumbnails');
const fileError = document.getElementById('fileError');

// Listen for changes on the file input
fileUpload.addEventListener('change', function(event) {
    fileError.textContent = '';

    // Loop through the selected files
    const files = event.target.files;
    if (files.length > 0) {
        Array.from(files).forEach(file => {
            // Validate the file type
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                
                // When the file is loaded, create an img element and add it to the thumbnails
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.style.maxWidth = '150px';
                    img.style.margin = '10px';
                    thumbnails.appendChild(img);
                };
                
                // Read the file as a Data URL (base64)
                reader.readAsDataURL(file);
            } else {
                fileError.textContent = 'Only image files (JPEG, PNG) are allowed.';
            }
        });
    }
});
