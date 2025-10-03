function cleanText(text) {
    // 1. Remove caracteres invisíveis e de controle (exceto nova linha e tab)
    let cleanedText = text.replace(/[​-‍﻿ ]/g, '');

    // 2. Substitui múltiplos espaços por um único espaço
    cleanedText = cleanedText.replace(/ +/g, ' ');

    // 3. Remove espaços no início e fim de cada linha
    cleanedText = cleanedText.split('\n').map(line => line.trim()).join('\n');

    // 4. Substitui 3 ou mais quebras de linha por apenas 2
    cleanedText = cleanedText.replace(/\n{3,}/g, '\n\n');

    // 5. Remove quebras de linha no início e fim do texto
    cleanedText = cleanedText.trim();

    return cleanedText;
}

module.exports = cleanText;