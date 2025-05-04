const simpleProjects = [
    /*{
      title: "Ubuntu",
      description: "**Ubuntu** is a collaborative web platform for organic composting management, connecting communities, households, and recycling centers to transform waste into sustainable resources through environmental education, compost tracking, and local logistics.",
      previewLink: "https://luminaw.co/projects#ubuntu",
      githubLink: "https://github.com/wavival/Ubuntu",
      ariaLabel: "Preview of Ubuntu project"
    },*/
    {
      id: "cryptoNest",
      title: "CryptoNest",
      description: "CryptoNest is a modern landing page that tracks trending cryptocurrencies, providing key stats and insights for anyone interested in the evolving crypto space.",
      previewLink: "https://luminaw.co/projects#cryptoNest",
      githubLink: "https://github.com/wavival/CryptoNest",
      ariaLabel: "Preview of CryptoNest project"
    },
    {
      id: "managAsk",
      title: "ManagAsk",
      description: "ManagAsk is a basic task manager designed to help users keep track of their to-dos, stay organized, and get things done without the extra clutter.",
      previewLink: "https://luminaw.co/projects#managAsk",
      githubLink: "https://github.com/wavival/ManagAsk",
      ariaLabel: "Preview of ManagAsk project"
    },
    {
      id: "googleClon",
      title: "Google Clon",
      description: "Google Clon is a simple clone of Google's homepage, mimicking its clean layout and basic search functionality for practice and learning.",
      previewLink: "https://luminaw.co/projects#googleClon",
      githubLink: "https://github.com/wavival/Google-Clon",
      ariaLabel: "Preview of Google clon project"
    }
  ];
  
export const detailedProjects = [
    {
      id: "ubuntu",
      title: "Ubuntu",
      description: "Ubuntu is a responsive web app built with HTML, CSS, SASS, and JavaScript, focused on organic composting. It promotes environmental awareness and sustainable living, with backend integration in progress to enhance features and user interaction.",
      techStack: [
        { icon: "fab fa-html5", color: "#e34c26" },
        { icon: "fab fa-css3-alt", color: "#264de4" },
        { icon: "fab fa-sass", color: "#d86b7a" },
        { icon: "fab fa-js-square", color: "#f7df1e" }
      ],
      imgLabel: "Ubuntu logo",
      demoLink: "https://github.com/wavival/Ubuntu",
      githubLink: "https://github.com/wavival/Ubuntu",
      status: "building",
    },
    {
      id: "codeCanvas",
    title: "CodeCanvas",
    description: "CodeCanvas is a responsive blog platform built with HTML, CSS, and SASS. It blends technical insight and creative design to empower developers and designers in sharing ideas through an elegant, accessible interface.",
    techStack: [
      { icon: "fab fa-html5", color: "#e34c26" },
      { icon: "fab fa-css3-alt", color: "#264de4" },
      { icon: "fab fa-sass", color: "#d86b7a" },
    ],
    imgLabel: "CodeCanvas logo",
    demoLink: "https://github.com/wavival/CodeCanvas",
    githubLink: "https://github.com/wavival/CodeCanvas",
    status: "building",
  },
  {
    id: "lunariaShop",
  title: "Lunaria Shop",
  description: "Lunaria Shop is a women’s fashion eCommerce platform currently under construction, developed with React, Node.js, and other modern web technologies. It aims to deliver a responsive, stylish shopping experience with dynamic features and scalable backend support.",
  techStack: [
    { icon: "fab fa-html5", color: "#e34c26" },
    { icon: "fab fa-css3-alt", color: "#264de4" },
    { icon: "fab fa-react", color: "#61dafb" },
    { icon: "fab fa-node-js", color: "#68a063" },
  ],
  imgLabel: "Lunaria Shop logo",
  demoLink: "https://github.com/wavival/Lunaria-Shop",
  githubLink: "https://github.com/wavival/Lunaria-Shop",
  status: "building",
},
    {
      id: "cryptoNest",
      title: "CryptoNest",
      description: "CryptoNest is a fully responsive cryptocurrency landing page built with HTML and CSS. It showcases modern design principles, smooth slide transitions, and a clean layout to engage users and highlight trending digital assets effectively across all devices.",
      techStack: [
        { icon: "fab fa-html5", color: "#e34c26" },
        { icon: "fab fa-css3-alt", color: "#264de4" },
      ],
      imgLabel: "CryptoNest logo",
      demoLink: "https://wavival.github.io/CryptoNest/",
      githubLink: "https://github.com/wavival/CryptoNest",
      status: "deployed",
    },
    {
      id: "managAsk",
      title: "ManagAsk",
      description: "ManagAsk is a simple, responsive task manager built with HTML, CSS, and JavaScript. It features a clean interface, intuitive task tracking, and a built-in dark mode for comfortable use at any time.",
      techStack: [
        { icon: "fab fa-html5", color: "#e34c26" },
        { icon: "fab fa-css3-alt", color: "#264de4" },
        { icon: "fab fa-sass", color: "#d86b7a" },
        { icon: "fab fa-js-square", color: "#f7df1e" }
      ],
      imgLabel: "ManagAsk logo",
      demoLink: "https://wavival.github.io/ManagAsk/",
      githubLink: "https://github.com/wavival/ManagAsk",
      status: "deployed",
    },
    {
      id: "googleClon",
      title: "Google clon",
      description: "Google clone is a desktop-only visual replica of the Google search homepage, built with HTML and CSS. It focuses purely on layout and design, with no functionality implemented yet.",
      techStack: [
        { icon: "fab fa-html5", color: "#e34c26" },
        { icon: "fab fa-css3-alt", color: "#264de4" },
      ],
      imgLabel: "GoogleClon logo",
      demoLink: "https://wavival.github.io/Google-Clon/",
      githubLink: "https://github.com/wavival/Google-Clon",
      status: "deployed",
    },
  ];
  
function createSimpleProjectHTML({ id, title, description, previewLink, githubLink, ariaLabel }) {
    return `
      <article class="project"  id=${id}>
        <div class="project__img" role="img" aria-label="${ariaLabel}"></div>
        <div class="project__contain">
          <h3>${title}</h3>
          <p>${description}</p>
        </div>
        <div class="project__btns">
          <a href="${previewLink}" class="btn" target="_blank" rel="noopener noreferrer" aria-label="Preview ${title}">
            <i class="fas fa-eye" aria-hidden="true"></i> Preview
          </a>
          <a href="${githubLink}" class="btn" target="_blank" rel="noopener noreferrer" aria-label="View ${title} on GitHub">
            <i class="fab fa-github" aria-hidden="true"></i> GitHub
          </a>
        </div>
      </article>
    `;
  }
  
function createDetailedProjectHTML({ id, title, description, techStack, imgLabel, demoLink, githubLink, status }) {
    const techList = techStack.map(tech =>
      `<li><i class="${tech.icon}" style="color: ${tech.color};" aria-hidden="true"></i></li>`
    ).join('');
  
    return `
      <article class="project" id="${id}">
        <div class="${status}">
          <p>${status}</p>
        </div>
        <div class="project__info">
          <h2>${title}</h2>
          <p class="project__about">${description}</p><br>
          <h4>Project built with:</h4>
          <ul class="project__tech-stack">${techList}</ul>
        </div>
        <div class="project__img" role="img" aria-label="${imgLabel}"></div>
        <div class="project__links">
          <a href="${demoLink}" target="_blank" rel="noopener noreferrer" aria-label="View the ${title} project demo">
            <i class="fas fa-eye" aria-hidden="true"></i> See project
          </a>
          <a href="${githubLink}" target="_blank" rel="noopener noreferrer" aria-label="View the ${title} project on GitHub">
            <i class="fab fa-github" aria-hidden="true"></i> GitHub
          </a>
        </div>
      </article>
    `;
  }
  
export function renderSimpleProjects(containerSelector = '.projects__grid', projects = simpleProjects) {
    const container = document.querySelector(containerSelector);
    if (!container) {
      console.warn(`No se encontró el contenedor: ${containerSelector}`);
      return;
    }
  
    projects.forEach(project => {
      const html = createSimpleProjectHTML(project);
      container.insertAdjacentHTML('beforeend', html);
    });
  }
  
export function renderDetailedProjects(containerSelector = '.projectss__items', projects = detailedProjects) {
    const container = document.querySelector(containerSelector);
    if (!container) {
      console.warn(`No se encontró el contenedor: ${containerSelector}`);
      return;
    }
  
    projects.forEach(project => {
      const html = createDetailedProjectHTML(project);
      container.insertAdjacentHTML('beforeend', html);
    });
  }
  