const preview = document.getElementById("preview"),
    body = document.body,
    ranges = document.querySelectorAll(".settings input[type='range']"),
    numbers = document.querySelectorAll(".settings input[type='number']"),
    colors = document.querySelectorAll(".settings input[type='color']");

let rangeInput = document.querySelectorAll(".range-wrapper"),
    numberInput = document.querySelectorAll(".number-wrapper");

ranges.forEach((slider) => {
    slider.addEventListener("input", generateStyles);
});

numbers.forEach((slider) => {
    slider.addEventListener("input", generateStyles);
});

colors.forEach((slider) => {
    slider.addEventListener("input", generateStyles);
});

function generateStyles(){
    if(rangeInput[0].style.display === "none"){
        const xShadow = document.getElementById("x-shadow-number").value;
        const yShadow = document.getElementById("y-shadow-number").value;
        const blurRadius = document.getElementById("blur-radius-number").value;
        const spreadRadius = document.getElementById("spread-radius-number").value;
        const borderRadius = document.getElementById("border-radius-number").value;
        const shadowOpacity = document.getElementById("shadow-opacity-number").value;

        const itemColor = document.getElementById("item-color").value;
        const shadowColor = document.getElementById("shadow-color").value;

        const boxShadow = `${xShadow}px ${yShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor, shadowOpacity)}`;

        preview.style.boxShadow = boxShadow;
        preview.style.backgroundColor = hexToRgba(itemColor, 1);
        body.style.backgroundColor = hexToRgba(itemColor, 1);
        preview.style.borderRadius = `${borderRadius}px`;

    }
    else {
        const xShadow = document.getElementById("x-shadow-range").value;
        const yShadow = document.getElementById("y-shadow-range").value;
        const blurRadius = document.getElementById("blur-radius-range").value;
        const spreadRadius = document.getElementById("spread-radius-range").value;
        const borderRadius = document.getElementById("border-radius-range").value;
        const shadowOpacity = document.getElementById("shadow-opacity-range").value;

        const itemColor = document.getElementById("item-color").value;
        const shadowColor = document.getElementById("shadow-color").value;

        const boxShadow = `${xShadow}px ${yShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor, shadowOpacity)}`;

        preview.style.boxShadow = boxShadow;
        preview.style.backgroundColor = hexToRgba(itemColor, 1);
        body.style.backgroundColor = hexToRgba(itemColor, 1);
        preview.style.borderRadius = `${borderRadius}px`;
    }
}

function hexToRgba(shadowColor, shadowOpacity) {
    const r = parseInt(shadowColor.substr(1, 2), 16);
    const g = parseInt(shadowColor.substr(3, 2), 16);
    const b = parseInt(shadowColor.substr(5, 2), 16);

    return `rgba(${r}, ${g}, ${b}, ${shadowOpacity})`;
}

function toggleInputStyle(){
    if(rangeInput[0].style.display === "none"){
        rangeInput.forEach((slider) => {
            slider.style.display = "flex";
        });
        numberInput.forEach((slider) => {
            slider.style.display = "none";
        });
    }
    else{
        rangeInput.forEach((slider) => {
            slider.style.display = "none";
        });
        numberInput.forEach((slider) => {
            slider.style.display = "flex";
        });
    }
    generateStyles();
}

generateStyles();