const title = document.querySelector("#title");

function handleResize() {
    console.log();
}
window.addEventListener("resize", handleResize);

function handleClick() {
    title.style.color = "blue";
}
window.addEventListener("click", handleClick);