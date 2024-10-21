function nav(){
    var navIcon = document.getElementById('toggle-icon');
    var nav = document.getElementById('header');
    navIcon.addEventListener('click', () => {
        navIcon.classList.toggle('active');
        nav.classList.toggle('active');
    });
}

function navHighlite(){
    var navLinks = document.getElementsByClassName('nav-link');
    var sections = document.querySelectorAll('section');

    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting){ // Checking that the section is in the visible in viewport or not
                // Target the class that match the given class and current observed class.
                var targetNav = document.querySelector('.nav-link.'+entry.target.id);
                // Add active class into targeted class
                targetNav.classList.add('high-light');
            }else{
                // Target the class that match the given class and current observed class.
                var targetNav = document.querySelector('.nav-link.'+entry.target.id);
                // Remove active class into targeted class
                targetNav.classList.remove('high-light');
            }
        });
    },{
        threshold: 0.5 // 50% of the section needs to be visible
    });

    //This part loop through all the selected section on the page and call observer
    sections.forEach(section => {
        observer.observe(section);
    });
}
  

// Calling all function
nav();
navHighlite();