
const lines = document.querySelectorAll(".code-card .line");

const typeLine = async (element, speed = 45) => {
    const originalHTML = element.innerHTML;
    const characters = [...element.innerText];

    element.innerHTML = "";
    element.style.visibility = "visible";

    for (const character of characters) {
        element.appendChild(document.createTextNode(character));
        await new Promise(resolve => setTimeout(resolve, speed));
    }
};

const typeCode = async () => {
    for (const line of lines) {
        await typeLine(line, 45);
        await new Promise(resolve => setTimeout(resolve, 180));
    }
};

typeCode();
