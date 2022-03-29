(() => {
    let bottomNav = document.querySelectorAll("#buttonHolder img"),
    holder = document.querySelector(".imageccholder");

    function changeBGImg(){
        holder.style.backgroundImage = `url(images/promotions_image${this.dataset.bgref}.jpg )`
    }
    bottomNav.forEach (thumb => thumb.addEventListener("click", changeBGImg));

})();