window.addEventListener("load", function () {
    const sliderMain = document.querySelector(".client__evaluate-list");
    const sliderItems = document.querySelectorAll(".client__evaluate-group");
    const dotItems = document.querySelectorAll(".client__evaluate-dot");
    const sliderWidth = sliderItems[0].offsetWidth;
    // const sliderLength = sliderItems.length;
    let positionX = 0;
    let index = 0;

    // Dot Event
    [...dotItems].forEach((item, sliderIndex) =>
        item.addEventListener("click", function () {
            // Xóa class "client__evaluate-dot" khỏi tất cả các dot
            dotItems.forEach((dot) => {
                dot.classList.remove("client__evaluate-dot-active");
            })

            // Thêm class "review__dot--active" cho dot được bấm vào
            item.classList.add("client__evaluate-dot-active");
            // Kiểm tra nếu dot được nhấn khác với slide hiện tại
            if(sliderIndex !== index) {
                // Cập nhật chỉ số và vị trí slide mới
                index = sliderIndex;
                positionX = -index * sliderWidth;
                
                // Di chuyển slider tới slide tương ứng
                sliderMain.style.transform = `translateX(${positionX}px)`;
                console.log(positionX);
            }
        })
    );
});
