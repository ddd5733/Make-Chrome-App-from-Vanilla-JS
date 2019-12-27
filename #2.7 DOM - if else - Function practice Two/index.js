const title = document.querySelector("#title");

const CliCKED_CLASS = "clicked";

function handleClick() {
    /*    const hasClass = title.classList.contains(CliCKED_CLASS);
        if (hasClass) {
            title.classList.remove(CliCKED_CLASS);
        } else {
            title.classList.add(CliCKED_CLASS);
        }
    */
    title.classList.toggle(CliCKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}
init();