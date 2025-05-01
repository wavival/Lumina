export function loader() {
    const loaderHTML = `
        <section class="loader">
            <div class="loader__div"></div>
            <div class="loader__div"></div>
            <div class="loader__div"></div>
        </section>
    `;
    
    document.body.insertAdjacentHTML('afterBegin', loaderHTML);
    
    setTimeout(() => {
        hideLoader();
    }, 1000); 
}

export function hideLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0'; 
        setTimeout(() => {
            loader.remove(); 
        }, 1500); 
    }
}
