// JK'in Around Party Rentals
// Website interactions


// Fade in sections as visitors scroll

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(
(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},
{
    threshold: 0.15
});



sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(30px)";

    section.style.transition = "all .8s ease";

    observer.observe(section);

});





// Update year automatically in footer if needed

const year = new Date().getFullYear();

console.log("JK'in Around Party Rentals website loaded - " + year);
