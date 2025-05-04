export function setupModal() {
    const buttons = document.querySelectorAll('.services__btn'); 
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.modal__close-x');
    const modalContent = document.querySelector('.modal__content');

    const contentMap = {
        'dev': `
            <p>At Lúmina, I craft <strong>modern, dynamic, and responsive websites</strong> that combine technical excellence with user-centered design.</p><br>
            <p>Leveraging powerful technologies like <strong>JavaScript</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Sass</strong>, I build web solutions that are fast, scalable, and easy to maintain.</p><br>
            <p>From interactive landing pages to complete multi-page websites, I ensure every project is optimized for <strong>performance</strong>, <strong>accessibility</strong>, and seamless <strong>user experience</strong> across all devices.</p> <br> 
            <p>Whether you're launching a brand, showcasing a portfolio, or growing a business, <strong>I transform your ideas into functional and impactful digital realities.</strong></p>
        `,
        'design': `
            <p>At Lúmina, I create <strong>intuitive, visually striking designs</strong> that bring your digital vision to life.</p><br>
            <p>Using industry-leading tools like <strong>Figma</strong>, I craft <strong>user-centered prototypes</strong> and <strong>high-fidelity designs</strong> that balance aesthetics, functionality, and brand identity.</p><br>
            <p>Every project is tailored to ensure seamless <strong>user experiences</strong>, <strong>clear navigation</strong>, and a <strong>powerful visual impact</strong> — <em>whether it's for a landing page, a multi-page website, or a full digital platform</em>. <br><br>I don't just design websites; <strong>I design experiences</strong> that engage, inspire, and convert.</p>
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
            const key = button.dataset.modal; 
            modalContent.innerHTML = contentMap[key] || '<p>No content available</p>';
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
