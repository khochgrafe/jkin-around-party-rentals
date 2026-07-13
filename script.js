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
