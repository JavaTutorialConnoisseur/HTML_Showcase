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
//             return "";
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

    // HTML preview

const toggleHTMLPreview = () => {
    document.getElementById("greeter-text").dataset.previewHTML = document.getElementById("greeter-text").dataset.previewHTML === "true" ? "false" : "true";
    
    var greeter = document.getElementById('greeter-text'); 

    let midDiv = document.createElement("div");
    midDiv.classList.add('mid-scroll-sub');

    const buttonsGreeter = document.querySelectorAll('#greeter-text button');
    
    for (let i = 0; i < buttonsGreeter.length; ++i) {
        midDiv.appendChild(buttonsGreeter[i]);
    }

    midDiv.style.justifyContent = 'space-between';
    midDiv.style.margin = '1% 0';

    greeter.style.flexDirection = 'column';
    greeter.style.padding = '2% 0';
    greeter.prepend(midDiv);

    anime({
        targets: '',
        easing: 'linear'
    });
}

const circleTextHTML = document.querySelector(".html-preview p");

circleTextHTML.innerHTML = circleTextHTML.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 10 - 50}deg)">${char}</span>`
).join("");

    // Additional text preview

const toggleMoreText = () => {
    document.getElementById("greeter-text").dataset.previewTEXT = document.getElementById("greeter-text").dataset.previewTEXT === "true" ? "false" : "true";
}

const circleTextMORE = document.querySelector(".text-preview p");

circleTextMORE.innerHTML = circleTextMORE.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 10 - 50}deg)">${char}</span>`
).join("");