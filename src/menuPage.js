import setup from './setup';

const menuContent = document.querySelector("#content");

const pizzaInfo = [
    ["Pepperoni","img/pepperoni.jpg","pepperoni"],
    ["Margherita","img/margherita.jpg","margherita"],
    ["Mozzarella","img/mozzarella.jpg","mozzarella"],
    ["napolitan","img/napolitan.jpg","napolitan"]
];


const addTitle = (title) => {
    let text = document.createElement("h1");
    text.innerHTML = title;

    return text
}

const addPizza = (title,src,alt) => {
    

    let div = document.createElement("div");

    let h2 = document.createElement("h2");
    let image = document.createElement("img");

    h2.innerHTML = title;
    image.setAttribute("src", src);
    image.setAttribute("alt", alt);

    div.appendChild(h2);
    div.appendChild(image);

    return div
}

const showMenu = () => {
    setup(menuContent);
    menuContent.setAttribute("class", "content-menu");

    const title = addTitle("Only the most traditional pizzas");
    menuContent.appendChild(title);


    let div1 = document.createElement("div");
    div1.setAttribute("class", "content-pizza");

    for (let i = 0; i <= pizzaInfo.length-1; i++) {
        let div = addPizza(pizzaInfo[i][0],pizzaInfo[i][1],pizzaInfo[i][2]);
        div1.appendChild(div);
    }

    menuContent.appendChild(div1);
    
}

export default showMenu;