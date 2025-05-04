export function menu() {
    return new Promise((resolve, reject) => {
        fetch("header-menu.html")
            .then(response => response.text())
            .then(html => {
                document.getElementById("menu-container").innerHTML = html;

                const menuBtn = document.querySelector('.menu-btn');
                const burger = document.querySelector('.menu-btn__burger');
                const nav = document.querySelector('.header__nav');
                const menuNav = document.querySelector('.header__nav--list');
                const navItems = document.querySelectorAll('.header__nav--item');

                let showMenu = false;

                const updateMenuForViewport = () => {
                    const isDesktop = window.innerWidth >= 768;
                    if (isDesktop) {
                        nav.classList.add('open');
                        menuNav.classList.add('open');
                        navItems.forEach((item) => item.classList.add('open'));
                        burger?.classList.remove('open');
                        showMenu = true;
                    } else {
                        nav.classList.remove('open');
                        menuNav.classList.remove('open');
                        navItems.forEach((item) => item.classList.remove('open'));
                        burger?.classList.remove('open');
                        showMenu = false;
                    }
                };

                updateMenuForViewport(); // Inicial

                // Listener de redimensionamiento
                window.addEventListener('resize', updateMenuForViewport);

                // Toggle para móviles
                if (menuBtn) {
                    menuBtn.addEventListener('click', () => {
                        if (!showMenu) {
                            burger.classList.add('open');
                            nav.classList.add('open');
                            menuNav.classList.add('open');
                            navItems.forEach((item, index) => {
                                item.classList.add('open');
                                item.style.transitionDelay = `${index * 0.1}s`;
                            });
                            showMenu = true;
                        } else {
                            navItems.forEach((item, index) => {
                                item.classList.remove('open');
                                item.style.transitionDelay = `${(navItems.length - index - 1) * 0.1}s`;
                            });

                            setTimeout(() => {
                                burger.classList.remove('open');
                                nav.classList.remove('open');
                                menuNav.classList.remove('open');
                            }, navItems.length * 100);

                            showMenu = false;
                        }
                    });
                }

                highlightActiveLink(); // Resaltar enlace actual
                resolve();
            })
            .catch(error => {
                console.error("Error al cargar el menú:", error);
                reject(error);
            });
    });
}
function highlightActiveLink() {
    const navLinks = document.querySelectorAll('.header__nav--link');
    let currentPath = window.location.pathname;

    if (currentPath === "/" || currentPath === "/index.html") {
        currentPath = "/index.html"; 
    }

    navLinks.forEach(link => {
        let linkPath = new URL(link.href, window.location.origin).pathname;

        // Comparar exactamente la ruta con la del enlace
        if (currentPath === linkPath) {
            link.classList.add("active");
            link.parentElement.classList.add("active"); // Asegurar que también el <li> tenga la clase activa
        } else {
            link.classList.remove("active");
            link.parentElement.classList.remove("active");
        }
    });
}