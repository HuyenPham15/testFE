// Khởi tạo Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, // Số lượng thẻ hiển thị mặc định
    spaceBetween: 30, // Khoảng cách giữa các thẻ
    navigation: {
        nextEl: ".chevron-right",
        prevEl: ".chevron-left",
    },
    breakpoints: {
        1224: {
            slidesPerView: 3, // Hiển thị 3 thẻ khi chiều rộng là 1024px
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2, // Hiển thị 2 thẻ khi chiều rộng là 768px
            spaceBetween: 40,
        },
        640: {
            slidesPerView: 1, // Hiển thị 1 thẻ khi chiều rộng là 640px
            spaceBetween: 5,
        },
        567: {
            slidesPerView: 1, // Hiển thị 1 thẻ khi chiều rộng là 640px
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1, // Hiển thị 1 thẻ khi chiều rộng nhỏ hơn hoặc bằng 320px
            spaceBetween: 10,
        },
    },
});

