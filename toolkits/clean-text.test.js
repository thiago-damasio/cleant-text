const cleanText = require('./clean-text');

describe('cleanText', () => {
    test('deve remover caracteres invisíveis (zero-width space)', () => {
        const text = 'Olá​Mundo';
        expect(cleanText(text)).toBe('OláMundo');
    });

    test('deve substituir múltiplos espaços por um único espaço', () => {
        const text = 'Isso   é   um    teste.';
        expect(cleanText(text)).toBe('Isso é um teste.');
    });

    test('deve remover espaços no início e fim de cada linha', () => {
        const text = '  linha 1  \n  linha 2  ';
        expect(cleanText(text)).toBe('linha 1\nlinha 2');
    });

    test('deve substituir 3 ou mais quebras de linha por apenas 2', () => {
        const text = 'Parágrafo 1\n\n\n\nParágrafo 2';
        expect(cleanText(text)).toBe('Parágrafo 1\n\nParágrafo 2');
    });

    test('deve remover quebras de linha no início e fim do texto', () => {
        const text = '\n\nComeço e Fim\n\n';
        expect(cleanText(text)).toBe('Começo e Fim');
    });

    test('deve lidar com uma combinação de todos os problemas', () => {
        const text = '\n  Olá​   Mundo  \n\n\n\n  Isso é um teste.  \n';
        expect(cleanText(text)).toBe('Olá Mundo\n\nIsso é um teste.');
    });

    test('deve retornar uma string vazia se a entrada for vazia', () => {
        const text = '';
        expect(cleanText(text)).toBe('');
    });

    test('não deve alterar texto que já está limpo', () => {
        const text = 'Este texto está perfeitamente limpo.\nSem problemas aqui.';
        expect(cleanText(text)).toBe('Este texto está perfeitamente limpo.\nSem problemas aqui.');
    });
});
