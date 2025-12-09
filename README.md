# 👨‍💻 DevFolio | Portfólio Profissional

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

> Um portfólio moderno, responsivo e dinâmico, desenvolvido com tecnologias web fundamentais (Vanilla JS) para apresentar projetos, certificados e habilidades de desenvolvimento Full Stack.

Este projeto não utiliza frameworks pesados; o foco é demonstrar domínio sobre a **manipulação do DOM**, **estilização CSS avançada** e **lógica de programação** pura.

---

## 🎨 Layout & Design

| Home / Hero Section | Seção de Projetos |
|:---:|:---:|
| ![Home](https://via.placeholder.com/400x200?text=Home+Preview) | ![Projetos](https://via.placeholder.com/400x200?text=Projects+Preview) |
| *Apresentação impactante com CTA* | *Cards gerados dinamicamente via JS* |

---

## ✨ Funcionalidades Avançadas

Ao contrário de sites estáticos simples, este portfólio inclui funcionalidades interativas robustas:

* **Renderização Dinâmica (DOM Manipulation):**
    * Os cards de **Projetos** e **Certificados** não estão "hardcoded" no HTML. Eles são gerados automaticamente pelo JavaScript a partir de arrays de objetos (`projects` e `certificates`), facilitando a adição de novos itens.
* **Sistema de Filtragem:**
    * Filtros interativos por categoria (Frontend, Backend, Mobile, Lógica, etc.) que atualizam a visualização em tempo real sem recarregar a página.
* **Formulário de Contato Funcional:**
    * Integração com a API `formsubmit.co` via `fetch` (AJAX) para envio de emails reais diretamente do front-end, com feedback visual de "Enviando..." e alertas de sucesso/erro.
* **Alertas de Latência:**
    * Lógica inteligente que avisa o utilizador se um projeto está hospedado no Render (Cold Start) ou se possui limitações de responsividade.
* **Menu Responsivo Mobile:**
    * Navegação totalmente adaptada para dispositivos móveis com menu "hambúrguer" animado.

---

## 🛠️ Tecnologias Utilizadas

* **Estrutura:** HTML5 Semântico.
* **Estilo:** CSS3 (Flexbox, Grid, Variáveis CSS, Animações `@keyframes`).
* **Lógica:** JavaScript (ES6+), manipulação de Arrays (`filter`, `map`, `forEach`).
* **Ícones:** FontAwesome 6.
* **Fontes:** Google Fonts (Poppins).

---

## 📂 Estrutura do Projeto

A organização dos arquivos prioriza a separação de responsabilidades:

```text
/
├── index.html          # Página Principal (Home)
├── about.html          # Página "Sobre Mim"
├── projects.html       # Galeria Completa de Projetos
├── certificates.html   # Galeria de Certificados
├── script.js           # Lógica central (Renderização, Filtros, Form)
├── styles/             # Estilos modulares
│   ├── global.css      # Variáveis e resets globais
│   ├── home.css        # Estilos específicos da Home
│   ├── projects.css    # Estilos da galeria de projetos
│   └── ...
└── imagens/            # Assets visuais (Prints, Avatar, Certificados)
