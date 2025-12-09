const projects = [
  {
    title: "E-commerce Dashboard",
    category: "frontend",
    description:
      "Painel administrativo completo com gráficos em tempo real e gestão de usuários.",
    technologies: ["Vue.js", "Vite", "Pinia", "Axios", "CSS Scoped"  ],
    image: "./imagens/bluepenfront.png",
    githubLink: "https://github.com/Vencce/BluePen2.0_Front.git",
    previewLink: "https://bluepen.vercel.app/",
    alerts: ["render_latency"],
  },
  {
    title: "API para Gestão de um ERP",
    category: "backend",
    description:
      "Backend robusto com autenticação JWT, documentação Swagger e testes automatizados.",
    technologies: [ "Python", "Django DRF", "PostgreSQL", "Render", "ORM Django"],
    image: "./imagens/backendblue.png",
    githubLink: "https://github.com/Vencce/BluePen-Back.git",
    previewLink: "https://bluepen-back.onrender.com/api/",
    alerts: ["render_latency"],
  },
  {
    title: "Totem Autoatendimento",
    category: "mobile",
    description:
      "Totem de autoatendimento com interface amigável e integração com sistemas de pagamento.",
    technologies: ["Vue.js", "Pinia", "Vue Router", "Vite", "CSS Scoped"],
    image: "./imagens/webmcbk.png",
    githubLink: "https://github.com/Vencce/WebMCBK.git",
    previewLink: "webmcbk.vercel.app",
    alerts: ["responsive_warning"],
  },
];

const certificates = [
  {
    title: "HTML e CSS: praticando HTML/CSS",
    issuer: "Alura",
    date: "2025",
    category: "frontend",
    image: "./imagens/HTMLCSS_PRATICANDO.png",
    link: "certificado/HTMLCSS_PRATICANDO.pdf",
  },
  {
    title: "HTML e CSS: Classes, posicionamento e Flexbox",
    issuer: "Alura",
    date: "2025",
    category: "frontend",
    image: "./imagens/HTMLCSS_CLASSES.png",
    link: "certificado/HTMLCSS_CLASSES.pdf",
  },
  {
    title:
      "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags",
    issuer: "Alura",
    date: "2025",
    category: "frontend",
    image: "./imagens/HTMLCSS_AMBIENTES.png",
    link: "certificado/HTMLCSS_AMBIENTES.pdf",
  },
  {
    title: "HTML e CSS: cabeçalho, footer e variáveis CSS",
    issuer: "Alura",
    date: "2025",
    category: "frontend",
    image: "./imagens/HTMLCSS_FOOTER.png",
    link: "certificado/HTMLCSS_FOOTER.pdf",
  },
  {
    title: "HTML e CSS: responsividade com mobile-first",
    issuer: "Alura",
    date: "2025",
    category: "frontend",
    image: "./imagens/HTMLCSS_RESPONSIVIDADE.png",
    link: "certificado/HTMLCSS_RESPONSIVIDADE.pdf",
  },
  {
    title:
      "HTML e CSS: trabalhando com responsividade e publicação de projetos",
    issuer: "Alura",
    date: "2025",
    category: "frontend",
    image: "./imagens/HTMLCSS_PUBLICANDO.png",
    link: "certificado/HTMLCSS_PUBLICANDO.pdf",
  },
  {
    title: "JavaScript: explorando a linguagem",
    issuer: "Alura",
    date: "2025",
    category: "javascript",
    image: "./imagens/JAVASCRIPT_EXPLORANDO.png",
    link: "certificado/JAVASCRIPT_EXPLORANDO.pdf",
  },
  {
    title: "JavaScript: métodos de array",
    issuer: "Alura",
    date: "2025",
    category: "javascript",
    image: "./imagens/JAVASCRIPT_ARRAY.png",
    link: "certificado/JAVASCRIPT_ARRAY.pdf",
  },
  {
    title: "Lógica de programação: explore funções e listas",
    issuer: "Alura",
    date: "2025",
    category: "logica",
    image: "./imagens/LOGICA_PROGRAMACAO.png",
    link: "certificado/LOGICA_PROGRAMACAO.pdf",
  },
  {
    title: "Lógica de programação: mergulhe em programação com JavaScript",
    issuer: "Alura",
    date: "2025",
    category: "logica",
    image: "./imagens/LOGICA_PROGRAMACAO_JAVASCRIPT.png",
    link: "certificado/LOGICA_PROGRAMACAO_JAVASCRIPT.pdf",
  },
  {
    title: "Lógica de programação: praticando com desafios",
    issuer: "Alura",
    date: "2025",
    category: "logica",
    image: "./imagens/LOGICA_PROGRAMAÇAO_DESAFIOS.png",
    link: "certificado/LOGICA_PROGRAMAÇAO_DESAFIOS.pdf",
  },
  {
    title: "Praticando CSS Flexbox",
    issuer: "Alura",
    date: "2025",
    category: "frontend",
    image: "./imagens/PRATICANDO_CSS_FLEXBOX.png",
    link: "certificado/PRATICANDO_CSS_FLEXBOX.pdf",
  },
  {
    title: "Python: crie a sua primeira aplicação",
    issuer: "Alura",
    date: "2025",
    category: "backend",
    image: "./imagens/PYTHON_PRIMEIRA_APLICACAO.png",
    link: "certificado/PYTHON_PRIMEIRA_APLICACAO.pdf",
  },
  {
    title: "React: comece seu projeto full stack",
    issuer: "Alura",
    date: "2025",
    category: "frontend",
    image: "./imagens/REACT_FULL_STACK.png",
    link: "certificado/REACT_FULL_STACK.pdf",
  },
  {
    title: "WordPress: criando sites do zero com páginas dinâmicas",
    issuer: "Alura",
    date: "2025",
    category: "wordpress",
    image: "./imagens/WORDPRESS_PAGINAS_DINAMICAS.png",
    link: "certificado/WORDPRESS_PAGINAS_DINAMICAS.pdf",
  },
  {
    title: "WordPress: passo a passo para criar seu primeiro blog",
    issuer: "Alura",
    date: "2025",
    category: "wordpress",
    image: "./imagens/WORDPRESS_PRIMEIRO_BLOG.png",
    link: "certificado/WORDPRESS_PRIMEIRO_BLOG.pdf",
  },
];

const projectsContainer = document.querySelector(".projects-container");
const filterButtons = document.querySelectorAll(".filter-btn");

function getAlertMarkup(alerts) {
    let markup = '';
    
    if (alerts.includes('render_latency')) {
        markup += '<p class="alert-text latency">⚠️ Backend hospedado no Render. O servidor pode levar até 1 minuto para ligar.</p>';
    }
    if (alerts.includes('responsive_warning')) {
        markup += '<p class="alert-text responsive">📱 Este projeto pode ter alguns ajustes de responsividade em certos dispositivos.</p>';
    }

    return markup;
}


if (projectsContainer) {
  function renderProjects(filter = "all") {
    projectsContainer.innerHTML = "";
    const filteredProjects =
      filter === "all"
        ? projects
        : projects.filter((project) => project.category === filter);

    const isHomePage = !document.querySelector(".filter-container");
    const projectsToShow = isHomePage
      ? filteredProjects.slice(0, 3)
      : filteredProjects;

    if (!isHomePage) {
        if (projectsToShow.length <= 2 && window.innerWidth > 768) {
            projectsContainer.classList.add('single-row-layout');
        } else {
            projectsContainer.classList.remove('single-row-layout');
        }
    } else {
        projectsContainer.classList.remove('single-row-layout');
    }

    projectsToShow.forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");
      projectCard.style.animation = "fadeIn 0.5s ease forwards";

      const techTags = project.technologies
        .map((tech) => `<span class="tech-tag">${tech}</span>`)
        .join("");
        
      const alerts = getAlertMarkup(project.alerts || []); 

      projectCard.innerHTML = `
                <div class="project-img">
                    <img src="${project.image}" alt="Prévia do Projeto ${project.title}">
                </div>
                <div class="project-info">
                    <h4>${project.title}</h4>
                    <div class="project-tags">${techTags}</div>
                    ${alerts} 
                    <p>${project.description}</p>
                    <div class="project-links">
                        <a href="${project.githubLink}" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="${project.previewLink}" target="_blank"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            `;
      projectsContainer.appendChild(projectCard);
    });
  }

  renderProjects();

  if (filterButtons.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        renderProjects(button.getAttribute("data-filter"));
      });
    });
  }
}

const certificatesContainer = document.querySelector(".certificates-container");
const certificateFilterButtons = document.querySelectorAll(".certificate-filter-btn"); 

function renderCertificates(filter = "all") { 
    if (!certificatesContainer) return;

    certificatesContainer.innerHTML = "";
    
    const filteredCertificates =
      filter === "all"
        ? certificates
        : certificates.filter((cert) => cert.category === filter);

    filteredCertificates.forEach((cert) => {
      const certCard = document.createElement("div");
      certCard.classList.add("certificate-card");

      const isPdf = cert.link.toLowerCase().endsWith(".pdf");
      const btnIcon = isPdf ? "fas fa-file-pdf" : "fas fa-eye";
      const btnText = isPdf ? "Abrir PDF" : "Visualizar";

      certCard.innerHTML = `
            <div class="cert-img-box">
                <img src="${cert.image}" alt="${cert.title}">
                <div class="cert-overlay">
                    <a href="${cert.link}" target="_blank" class="cert-btn"><i class="${btnIcon}"></i> ${btnText}</a>
                </div>
            </div>
            <div class="cert-content">
                <span class="cert-issuer"><i class="fas fa-award"></i> ${cert.issuer}</span>
                <h3>${cert.title}</h3>
                <span class="cert-date">${cert.date}</span>
            </div>
        `;
      certificatesContainer.appendChild(certCard);
    });
}

if (certificatesContainer) {
    renderCertificates(); 
    
    if (certificateFilterButtons.length > 0) { 
        certificateFilterButtons.forEach((button) => {
            button.addEventListener("click", () => {
                certificateFilterButtons.forEach((btn) => btn.classList.remove("active"));
                button.classList.add("active");
                renderCertificates(button.getAttribute("data-filter"));
            });
        });
    }
}

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("fa-times");
    navbar.classList.toggle("active");
    const icon = menuIcon.querySelector("i");
    if (navbar.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });
  window.onscroll = () => {
    navbar.classList.remove("active");
    const icon = menuIcon.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  };
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = contactForm.querySelector("button");
    const originalText = submitBtn.innerText;
    submitBtn.innerText = "Enviando...";
    submitBtn.style.opacity = "0.7";
    submitBtn.disabled = true;

    const formData = new FormData(contactForm);

    fetch("https://formsubmit.co/ajax/vitor.ferreira.sbs@gmail.com", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Mensagem enviada com sucesso! Entrarei em contato em breve.");
        contactForm.reset();
      })
      .catch((error) => {
        alert("Ocorreu um erro ao enviar. Tente novamente ou use o LinkedIn.");
        console.error("Erro:", error);
      })
      .finally(() => {
        submitBtn.innerText = originalText;
        submitBtn.style.opacity = "1";
        submitBtn.disabled = false;
      });
  });
}