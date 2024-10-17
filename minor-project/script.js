const videos = [
    { src: 'videos/YT Shorts 1920x1080 Content.mp4', category: 'short-form', title: 'Short Form Video' },
    { src: 'videos/TRIAL SAMPLE .mp4', category: 'long-form', title: 'Long Form Video' },
    { src: 'videos/Gaming Edited YT Video.mp4', category: 'gaming', title: 'Gaming Video' },
    { src: 'videos/Ronaldo vs messi.mp4', category: 'football', title: 'Football Edit' },
    { src: 'videos/3rd Mockup Edit.mp4', category: 'ecommerce', title: 'eCommerce Ad' },
    { src: 'videos/Mohak Mangal Documentry Style.mp4', category: 'documentary', title: 'Documentary Style' },
    { src: 'videos/Color Grading.mp4', category: 'color-grading', title: 'Color Grading' },
    { src: 'videos/Comp 1_1.mp4', category: 'anime', title: 'Anime Video' },
    { src: 'videos/Coca Cola Landing Page AD.mp4', category: 'ads', title: 'Ad Video' },
];

const portfolioContainer = document.getElementById('portfolio');


function loadVideos(category) {
    portfolioContainer.innerHTML = ''; 
    const filteredVideos = category === 'all' ? videos : videos.filter(video => video.category === category);

    filteredVideos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.innerHTML = `
            <div class="video-thumbnail" onclick="openLightbox('${video.src}')">
                <video>
                    <source src="${video.src}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="video-title"><h3>${video.title}</h3></div>
            </div>
        `;
        portfolioContainer.appendChild(videoItem);
    });
}


loadVideos('all');


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const category = event.target.getAttribute('data-category');
        loadVideos(category);
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
    });
});


function openLightbox(videoSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxVideo = document.getElementById('lightboxVideo');
    lightbox.style.display = 'flex';
    lightboxVideo.src = videoSrc;
    lightboxVideo.play();
}


function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxVideo = document.getElementById('lightboxVideo');
    lightbox.style.display = 'none';
    lightboxVideo.pause();
    lightboxVideo.src = '';
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! Thank you for reaching out.');
    this.reset(); 
});


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const category = event.target.getAttribute('data-category');
        loadVideos(category);
        
       
        const targetSection = document.getElementById('portfolio');
        targetSection.scrollIntoView({ behavior: 'smooth' });

     
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        event.target.classList.add('active'); 
    });
});
