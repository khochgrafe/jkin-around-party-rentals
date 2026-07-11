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
