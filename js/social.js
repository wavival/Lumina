export function social() {
    return new Promise((resolve, reject) => {
        fetch("footer-social.html")
            .then(response => response.text())
            .then(html => {
                document.getElementById("footer-container").innerHTML = html;
                resolve(); 
            })
            .catch(error => {
                console.error("Error al cargar el footer:", error);
                reject(error); 
            });
    });
}
