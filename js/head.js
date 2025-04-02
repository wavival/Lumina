export function head() {
    fetch("head.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el archivo common-head.html");
            }
            return response.text();
        })
        .then(html => {
            document.head.innerHTML += html;  
        })
        .catch(error => {
            console.error("Hubo un problema con la carga del archivo:", error);
        });
}
