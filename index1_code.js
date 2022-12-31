// const trailer = document.getElementById("mouse-trailer");

// const animateTrailer = (e, interacting) => {
//     const x = e.clientX - trailer.offsetWidth / 2; 
//     const y = e.clientY - trailer.offsetHeight / 2;

//     const keyframes = {
//         transform : `translate(${x}px, ${y}px) scale(${interacting ? 6 : 1})`
//     }

//     trailer.animate(keyframes, {
//         duration: 800,
//         fill: "forwards",
//     });
// }

// const getTrailerClass = type => {
//     switch(type) {
//         case "html-code":
//             //<i class="fa-solid fa-code-fork"></i>
//             return "fa-solid fa-code-fork";
//         case "more-info":
//             //<i class="fa-solid fa-arrows-to-eye"></i>
//             return "fa-solid fa-arrows-to-eye";
//         default:
//             //"fa-solid fa-arrow-up-right-from-square"
//             return "fa-solid fa-arrow-up-right-from-square";
//     }
// }

// window.onmousemove = e => {
//     const interactable = e.target.closest(".mid-scroll"), //change to specific choose subelement
//         interacting = interactable !== null;


//     const icon = document.getElementById("trailer-icon");

//     animateTrailer(e, interacting);

//     if (interacting) {
//         icon.className = getTrailerClass(interactable.dataset.type);
//         trailer.style.opacity = 1;
//     }
//     else{
//         icon.className = "";
//         trailer.style.opacity = 0;
//     }
// }


const toggleHTMLPreview = () => {
    document.getElementById("greeter-text").dataset.preview = document.getElementById("greeter-text").dataset.preview === "true" ? "false" : "true";
}

const circleText = document.querySelector(".html-preview p");

circleText.innerHTML = circleText.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 10 - 50}deg)">${char}</span>`
).join("")

// make all elements that match .html-preview rotate each span