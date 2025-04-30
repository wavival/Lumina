export function social() {
    return new Promise((resolve, reject) => {
        fetch("footer-social.html")
            .then(response => response.text())
            .then(html => {
                const footerContainer = document.getElementById("footer-container");
                footerContainer.innerHTML = html;

                // Agrega una clase de control al footer segun el viewport
                const updateFooterClass = () => {
                    if (window.innerWidth >= 768) {
                        footerContainer.classList.add("footer-fixed-desktop");
                        footerContainer.classList.remove("footer-fixed-mobile");
                    } else {
                        footerContainer.classList.add("footer-fixed-mobile");
                        footerContainer.classList.remove("footer-fixed-desktop");
                    }
                };

                updateFooterClass(); // Al cargar

                window.addEventListener("resize", updateFooterClass); // En redimensionar

                resolve();
            })
            .catch(error => {
                console.error("Error al cargar el footer:", error);
                reject(error);
            });
    });
}
