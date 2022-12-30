const trailer = document.getElementById("mouse-trailer");

const animateTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2; 
    const y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
        transform : `translate(${x}px, ${y}px) scale(${interacting ? 6 : 1})`
    }

    trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards",
    });
}

const getTrailerClass = type => {
    switch(type) {
        case "html-code":
            //<i class="fa-solid fa-code-fork"></i>
            return "fa-solid fa-code-fork";
        case "more-info":
            //<i class="fa-solid fa-arrows-to-eye"></i>
            return "fa-solid fa-arrows-to-eye";
        default:
            //"fa-solid fa-arrow-up-right-from-square"
            return "fa-solid fa-arrows-to-eye";
    }
}

window.onmousemove = e => {
    const interactable = e.target.closest(".mid-scroll"),
        interacting = interactable !== null;


    const icon = document.getElementById("trailer-icon");

    animateTrailer(e, interacting);

    if (interacting) {
        icon.className = getTrailerClass(interactable.dataset.type);
    }
    else{
        icon.className = "";
    }
}
