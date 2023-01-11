console.log("listeners.js geladen");
document.addEventListener("click", (ev) => {
    console.log(ev);
    if (ev.target.classList.contains("discord-mention")){
        console.log("discord-mention");
        window.open(ev.target.getAttribute("link"));
    }
    else if (ev.target.classList.contains("commandblock")){
        console.log("commandblock");
        navigator.clipboard.writeText("."+ev.target.innerHTML);
    }
})
