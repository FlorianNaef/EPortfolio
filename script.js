document.addEventListener('DOMContentLoaded', function() {
    

    var elems = document.querySelectorAll('.carousel');
    var options = {
        fullWidth: true,
        indicators: true
    };
    var instances = M.Carousel.init(elems, options);

    let indicatorItems = document.querySelectorAll('.carousel .indicator-item');

    setInterval(() => {
        indicatorItems.forEach(el => {
        if (el.classList.contains("active")) {
            sib = el.nextElementSibling;
            if (sib == null) {
            indicatorItems[0].click();
            } else {
            sib.click()
            }
        }
        });
    }, 6000);
});

