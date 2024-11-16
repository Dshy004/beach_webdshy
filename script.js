document.addEventListener("DOMContentLoaded", function() {
    const scrollDivs = document.querySelectorAll('.scrollDiv');
    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        scrollDivs.forEach(scrollDiv => {
            const scrollDivTop = scrollDiv.getBoundingClientRect().top;
            
            if (scrollDivTop < triggerBottom) {
                scrollDiv.classList.add('visible');
            } else {
                scrollDiv.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});