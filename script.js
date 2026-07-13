document.addEventListener("DOMContentLoaded", function () {


    const sections = document.querySelectorAll(".section");


    const observer = new IntersectionObserver(function(entries) {


        entries.forEach(function(entry) {


            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }


        });


    }, {

        threshold: 0.15

    });



    sections.forEach(function(section) {

        section.classList.add("fade-section");

        observer.observe(section);

    });


});

const rentalButtons = document.querySelectorAll(".rental-btn");

const rentalSelect = document.getElementById("rentalSelect");

rentalButtons.forEach(button => {

button.addEventListener("click", function(){

const rental = this.dataset.rental;

if(rentalSelect){

rentalSelect.value = rental;

}

});

});

const quoteTitle = document.getElementById("quoteTitle");

rentalButtons.forEach(button => {

    button.addEventListener("click", function(){

        const rental = this.dataset.rental;

        if(rentalSelect){
            rentalSelect.value = rental;
        }

       if(quoteTitle){

quoteTitle.textContent = "🎉 Requesting a Quote for: " + rental;

}


const quoteMessage = document.getElementById("quoteMessage");

if(quoteMessage){

quoteMessage.textContent = "Great choice! Complete the form below and we will help build the perfect package for your event.";

}

    });

});

const galleryImages = document.querySelectorAll(".gallery-image");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");

const closeLightbox = document.querySelector(".close-lightbox");

const nextButton = document.querySelector(".next");

const prevButton = document.querySelector(".prev");


let currentImage = 0;


const imageSources = Array.from(galleryImages).map(image => image.src);



galleryImages.forEach((image, index) => {

    image.addEventListener("click", function(){

        currentImage = index;

        lightboxImage.src = imageSources[currentImage];

        lightbox.style.display = "flex";

    });

});



nextButton.addEventListener("click", function(){

    currentImage++;

    if(currentImage >= imageSources.length){

        currentImage = 0;

    }

    lightboxImage.src = imageSources[currentImage];

});



prevButton.addEventListener("click", function(){

    currentImage--;

    if(currentImage < 0){

        currentImage = imageSources.length - 1;

    }

    lightboxImage.src = imageSources[currentImage];

});



closeLightbox.addEventListener("click", function(){

    lightbox.style.display = "none";

});



lightbox.addEventListener("click", function(event){

    if(event.target === lightbox){

        lightbox.style.display = "none";

    }

});
