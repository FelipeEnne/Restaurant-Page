const homeContent = document.querySelector("#content");

homeContent.innerHTML = '';

homeContent.setAttribute("class", "content-home");

const addTitle = (title) => {
    let text = document.createElement("div");
    text.innerHTML = title;

    return text
}

const addParagraph = (p) => {
    let text = document.createElement("p");
    text.innerHTML = p;

    return text
}

const showHome = () => {
    const title = addTitle("Pizza Dream");
    const p = addParagraph("Our Pizza is always warm with lots of flavor that will surprise you. Lectus phasellus tristique cras interdum at dictumst luctus, mollis aptent tincidunt lorem ad ligula curae, morbi purus ut cubilia pellentesque platea. consectetur justo faucibus sociosqu aliquet aenean conubia ultrices hendrerit hac, non lacinia leo felis condimentum");

    homeContent.appendChild(title);
    homeContent.appendChild(p);
}

export default showHome;