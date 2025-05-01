export function social() {
    return new Promise((resolve, reject) => {
        fetch("footer-social.html")
            .then(response => response.text())
            .then(html => {
                const footerContainer = document.getElementById("footer-container");
                footerContainer.innerHTML = html;

                const updateFooterClass = () => {
                    if (window.innerWidth >= 768) {
                        footerContainer.classList.add("footer-fixed-desktop");
                        footerContainer.classList.remove("footer-fixed-mobile");
                    } else {
                        footerContainer.classList.add("footer-fixed-mobile");
                        footerContainer.classList.remove("footer-fixed-desktop");
                    }
                };

                updateFooterClass();

                window.addEventListener("resize", updateFooterClass); 

                resolve();
            })
            .catch(error => {
                console.error("Error al cargar el footer:", error);
                reject(error);
            });
    });
}
