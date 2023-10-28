console.log("Hi");

const shareBtn = document.getElementById("shareProfile");
const modal1 = document.getElementById("modal");
const overlay = document.querySelector(".overlay");

function openModal() {
    modal1.classList.add("active");
    overlay.classList.add("overlayactive");
}

function closeModal() {
    modal1.classList.remove("active");
    overlay.classList.remove("overlayactive");
}
shareBtn.addEventListener("click", openModal);
