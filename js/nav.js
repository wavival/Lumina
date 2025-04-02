export function createNavBar(menuItems) {
    const navBar = document.createElement("div");
    navBar.classList.add("nav-bar");

    const toggleBtn = document.createElement("button");
    toggleBtn.id = "toggle-menu";
    toggleBtn.classList.add("nav-bar__toggle");
    toggleBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    ul.classList.add("nav-bar__list");

    menuItems.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("nav-bar__item");

        const a = document.createElement("a");
        a.classList.add("nav-bar__link");
        a.href = `#${item.id}`;
        a.innerHTML = `<i class="${item.icon}"></i> ${item.text}`;

        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    navBar.appendChild(toggleBtn); 
    navBar.appendChild(nav);

    toggleBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
    });
    return navBar;
}

export function insertNavBar(menuItems, containerId) {
    const menuContainer = document.getElementById(containerId);

    if (menuContainer) {
        const navBar = createNavBar(menuItems);
        menuContainer.appendChild(navBar);
    } else {
        console.error(`El contenedor con id "${containerId}" no fue encontrado.`);
    }
}
