// const pictures = document.querySelectorAll("#pictures .picture-gallery img");
// const lightbox = document.querySelector(". lightbox");
// const lightboxImg = document.querySelector(". lightbox img");

// pictures.forEach(picture => {
//   picture.addEventListener("click", function(event) {
//     lightbox.classList.add("active");
//     lightboxImg.src = event.target.src;
//   });
// });

// lightbox.addEventListener("click", function() {
//   lightbox.classList.remove("active");
// });




const toggleMenus = document.querySelectorAll(".toggle-menu");

toggleMenus.forEach(toggleMenu => {
  const toggleButton = toggleMenu.querySelector("h2");
  const toggleContent = toggleMenu.querySelector(".toggle-content");

  toggleButton.addEventListener("click", () => {
    toggleContent.style.display =
      toggleContent.style.display === "none" ? "block" : "none";
  });
});