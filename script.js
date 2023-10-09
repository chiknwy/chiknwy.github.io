document.addEventListener('DOMContentLoaded', function () {

    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-8');
                entry.target.classList.add('opacity-100', 'translate-y-0');
            }
        });
    }

    const sectionObserver = new IntersectionObserver(handleIntersection, {
        root: null, 
        rootMargin: '0px', 
        threshold: 0.1, 
    });

    const sections = document.querySelectorAll('.transition-opacity.transform');
    sections.forEach((section) => {
        sectionObserver.observe(section);
    });

    var scrollLinks = document.querySelectorAll('a[href^="#"]');
for (var i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener('click', function (e) {
        e.preventDefault();
        
        for (var j = 0; j < scrollLinks.length; j++) {
            scrollLinks[j].classList.remove('selected');
        }
        
        this.classList.add('selected');
        
        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
}


    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("hidden");
        menuToggle.classList.toggle("rotate-90");

        if (menu.classList.contains("hidden")) {
            menuToggle.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            `;
        } else {
            menuToggle.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            `;
        }
    });
});