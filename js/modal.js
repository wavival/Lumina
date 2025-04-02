export function setupModal() {
    const buttons = document.querySelectorAll('.services__btn'); 
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.modal__close-x');
    const modalContent = document.querySelector('.modal__content');

    const contentMap = {
        'dev': `
            <p>From simple pages to complex applications, we build robust, scalable, and responsive solutions with the latest technologies.</p><br>
                <ul>
                    <li><span>Frontend:</span> React, Vue.js, Angular</li>
                    <li><span>Backend:</span> Node.js, Python, PHP</li>
                    <li>Optimization for speed, SEO & accessibility</li>
                </ul>
        `,
        'design': `
            <p>Crafting intuitive and visually stunning designs using Figma, Sketch, and Adobe XD.</p><br>
                <ul>
                    <li>UX/UI optimized for engagement</li>
                    <li>Custom branding & wireframing</li>
                    <li>Pixel-perfect responsive layouts</li>
                </ul>
        `,
        'cyber': `
            <p>Advanced security solutions to protect your data and prevent vulnerabilities.</p><br>
                <ul>
                    <li>Secure coding & encryption</li>
                    <li>Threat analysis & penetration testing</li>
                    <li>Ongoing security monitoring</li>
                </ul>
        `
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const key = button.dataset.modal; // Obtener el valor de data-modal
            modalContent.innerHTML = contentMap[key] || '<p>No content available</p>'; // Actualizar el contenido
            modal.classList.remove('hidden');
            modal.classList.add('visible');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('visible');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    });
}
