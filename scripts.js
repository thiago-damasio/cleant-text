document.addEventListener('DOMContentLoaded', () => {
    // --- Elementos do DOM ---
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const cleanBtn = document.getElementById('cleanBtn');
    const copyBtn = document.getElementById('copyBtn');
    const resetBtn = document.getElementById('resetBtn');
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Contadores
    const inputWordCount = document.getElementById('input-word-count');
    const inputCharCount = document.getElementById('input-char-count');
    const outputWordCount = document.getElementById('output-word-count');
    const outputCharCount = document.getElementById('output-char-count');

    // --- Lógica dos Contadores (Tarefa 5.2) ---
    function updateCounters(textArea, wordCounter, charCounter) {
        const text = textArea.value;
        const charCount = text.length;
        const wordCount = text.trim().split(/[​-‍﻿ 	 ]+/).filter(Boolean).length;

        charCounter.textContent = charCount;
        wordCounter.textContent = (text.trim() === '') ? 0 : wordCount;
    }

    inputText.addEventListener('input', () => {
        updateCounters(inputText, inputWordCount, inputCharCount);
        highlightInvisibleChars(inputText.value);
    });

    // Sincroniza o scroll da camada de destaque com o textarea
    inputText.addEventListener('scroll', () => {
        const highlightLayer = document.getElementById('input-highlight-layer');
        highlightLayer.scrollTop = inputText.scrollTop;
        highlightLayer.scrollLeft = inputText.scrollLeft;
    });

    // --- Lógica de Destaque de Caracteres (Tarefa 5.4) ---
    const highlightLayer = document.getElementById('input-highlight-layer');
    const invisibleCharRegex = /[​-‍﻿ ]/g;

    function highlightInvisibleChars(text) {
        // Limpa o conteúdo anterior de forma segura
        highlightLayer.innerHTML = '';

        // Se o texto for vazio, não há mais nada a fazer
        if (!text) return;

        const fragments = text.split('');
        const fragment = document.createDocumentFragment();

        fragments.forEach(char => {
            if (invisibleCharRegex.test(char)) {
                const span = document.createElement('span');
                span.className = 'highlight';
                span.textContent = char;
                fragment.appendChild(span);
            } else {
                fragment.appendChild(document.createTextNode(char));
            }
        });

        fragment.appendChild(document.createTextNode('\n')); // Garante a altura
        highlightLayer.appendChild(fragment);
    }

    // --- Lógica de Limpeza ---
    cleanBtn.addEventListener('click', () => {
        const text = inputText.value;
        const cleanedText = cleanText(text); // Função de /toolkits/clean-text.js
        outputText.value = cleanedText;
        
        // Atualiza contadores da saída após limpar
        updateCounters(outputText, outputWordCount, outputCharCount);
    });

    // --- Lógica de Cópia ---
    copyBtn.addEventListener('click', () => {
        if (outputText.value) {
            navigator.clipboard.writeText(outputText.value)
                .then(() => {
                    copyBtn.textContent = 'Copiado!';
                    setTimeout(() => {
                        copyBtn.textContent = 'Copiar Resultado';
                    }, 2000);
                })
                .catch(err => {
                    console.error('Erro ao copiar texto: ', err);
                });
        }
    });

    // --- Lógica de Reset (Tarefa 5.3) ---
    resetBtn.addEventListener('click', () => {
        inputText.value = '';
        outputText.value = '';
        updateCounters(inputText, inputWordCount, inputCharCount);
        updateCounters(outputText, outputWordCount, outputCharCount);
        highlightInvisibleChars('');
    });

    // --- Lógica do Dark Mode ---
    const sunIcon = '☀️';
    const moonIcon = '🌙';

    const applyTheme = (theme) => {
        htmlElement.setAttribute('data-theme', theme);
        themeToggle.textContent = theme === 'dark' ? sunIcon : moonIcon;
    };

    themeToggle.addEventListener('click', () => {
        const newTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });

    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);

    // --- Registro do Service Worker ---
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js').catch(err => console.log('Falha no registro do SW: ', err));
        });
    }
});
