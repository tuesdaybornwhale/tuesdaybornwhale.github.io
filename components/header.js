class Header extends HTMLElement {
constructor() {
    super();
}

    connectedCallback() {
        this.innerHTML = `
        <title>Ashe Vazquez - Personal Website</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
            }
            header {
                background-color: #333;
                color: white;
                text-align: center;
                padding: 1rem;
            }
            nav {
                text-align: center;
                background-color: #444;
                padding: 0.5rem;
            }
            nav a {
                color: white;
                text-decoration: none;
                margin: 0 1rem;
            }
            .container {
                max-width: 960px;
                margin: 2rem auto;
                padding: 0 1rem;
            }
            footer {
                text-align: center;
                padding: 1rem;
                background-color: #333;
                color: white;
            }
        </style>
        </head>
        <link rel="stylesheet" href="styles.css">
        <body>
            <header>
                <h1>Your Name</h1>
                <p>Web Developer | Designer | Creator</p>
            </header>
            <nav>
                <a href="/about.html">About Me</a>
                <a href="/blog.html">Blog</a>
                <a href="/portfolio.html">Portfolio</a>
                <a href="/contact.html">Contact</a>
            </nav>
            `;
        }
    }

customElements.define('header-component', Header);
