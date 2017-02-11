
// A $( document ).ready() block.

 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 8,
        spaceBetween: 5,
        breakpoints: {
            1024: {
                slidesPerView: 8,
                spaceBetween: 5
            },
            768: {
                slidesPerView: 6,
                spaceBetween: 5
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 5
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 3
            }
        }
    });

