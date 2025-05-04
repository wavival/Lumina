const simpleProjects = [
    {
      title: "Website: Ubuntu",
      description: "Platform for managing and sharing blog posts, with user authentication and content moderation tools. Perfect for creators who want to share their ideas.",
      previewLink: "./projects.html",
      githubLink: "https://github.com/wavival/Ubuntu",
      ariaLabel: "Preview of Ubuntu project"
    },
    {
      title: "Website: Solaris",
      description: "Task management app with real-time collaboration and minimalist UI. Built for productivity lovers.",
      previewLink: "./solaris.html",
      githubLink: "https://github.com/wavival/Solaris",
      ariaLabel: "Preview of Solaris project"
    }
  ];
  
  function createSimpleProjectHTML({ title, description, previewLink, githubLink, ariaLabel }) {
    return `
      <article class="project">
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
  
  export function renderProjects(containerSelector = '.projects__grid') {
    const container = document.querySelector(containerSelector);
    if (!container) {
      console.warn(`No se encontró el contenedor: ${containerSelector}`);
      return;
    }
  
    simpleProjects.forEach(project => {
      const html = createSimpleProjectHTML(project);
      container.insertAdjacentHTML('beforeend', html);
    });
  }  
  