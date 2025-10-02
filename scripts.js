document.addEventListener('DOMContentLoaded', () => {
    // --- Elementos do DOM ---
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const cleanBtn = document.getElementById('cleanBtn');
    const copyBtn = document.getElementById('copyBtn');
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // --- Lógica de Limpeza (chama a função do toolkit) ---
    cleanBtn.addEventListener('click', () => {
        const text = inputText.value;
        // A função cleanText está definida em /toolkits/clean-text.js
        outputText.value = cleanText(text);
    });

    // --- Lógica de Cópia ---
    copyBtn.addEventListener('click', () => {
        if (outputText.value) {
            navigator.clipboard.writeText(outputText.value)
                .then(() => {
                    copyBtn.classList.add('copied');
                    setTimeout(() => {
                        copyBtn.classList.remove('copied');
                    }, 2000);
                })
                .catch(err => {
                    console.error('Erro ao copiar texto: ', err);
                });
        }
    });

    // --- Lógica do Dark Mode ---
    const sunIcon = '☀️';
    const moonIcon = '🌙';

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            htmlElement.setAttribute('data-theme', 'dark');
            themeToggle.textContent = sunIcon;
        } else {
            htmlElement.removeAttribute('data-theme');
            themeToggle.textContent = moonIcon;
        }
    };

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });

    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);

    // --- Registro do Service Worker (PWA) ---
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then(registration => {
                    console.log('Service Worker registrado com sucesso: ', registration.scope);
                })
                .catch(error => {
                    console.log('Falha ao registrar o Service Worker: ', error);
                });
        });
    }
});