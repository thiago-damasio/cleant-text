## Plano de Trabalho — Projeto Toolkit Web

### **Fase 1: MVP — Funcionalidade Essencial de Limpeza de Texto**
*Objetivo: Implementar o fluxo principal de colar, limpar e copiar o texto.*

| Status | Tarefa | Entregável |
| :--- | :--- | :--- |
| **DONE** | **1.1.** Criar a estrutura de arquivos inicial. | Arquivos `index.html`, `styles.css`, `scripts.js`, `README.md` e `CHANGELOG.md` criados no repositório. |
| **DONE** | **1.2.** Desenvolver a estrutura HTML básica. | `index.html` com um cabeçalho, duas áreas de texto (entrada e saída) e dois botões ("Limpar" e "Copiar"). |
| **DONE** | **1.3.** Implementar a lógica de limpeza de texto em JavaScript. | Função em `scripts.js` que remove caracteres invisíveis, espaços múltiplos e quebras de linha excessivas. |
| **DONE** | **1.4.** Adicionar a funcionalidade de "Copiar para a área de transferência". | Código em `scripts.js` que copia o conteúdo da área de texto de saída ao clicar no botão "Copiar". |
| **DONE** | **1.5.** Criar a documentação inicial do projeto. | `README.md` com a descrição do projeto e instruções de uso. `CHANGELOG.md` iniciado com a versão `0.1.0`. |

### **Fase 2: Interface Moderna e Experiência do Usuário (UI/UX)**
*Objetivo: Aplicar um estilo visual moderno e implementar o dark mode.*

| Status | Tarefa | Entregável |
| :--- | :--- | :--- |
| **DONE** | **2.1.** Estilizar a interface com CSS. | `styles.css` com um layout limpo, responsivo para desktop, e com boa tipografia e espaçamento. |
| **DONE** | **2.2.** Implementar o *dark mode*. | Botão de toggle e classes CSS para alternar entre os temas claro e escuro. |
| **DONE** | **2.3.** Refinar a interação do usuário (UI). | Efeitos de *hover* e *focus* para botões e campos de texto, além de feedback visual para ações (ex: "Copiado!"). |

### **Fase 3: Estrutura para Expansão (Multi-Toolkit)**
*Objetivo: Preparar o projeto para receber futuras ferramentas.*

| Status | Tarefa | Entregável |
| :--- | :--- | :--- |
| **DONE** | **3.1.** Criar um layout com menu de navegação. | `index.html` e `styles.css` atualizados para incluir uma barra de navegação ou menu lateral. |
| **DONE** | **3.2.** Modularizar o código da ferramenta de limpeza. | O código da ferramenta de limpeza é movido para um arquivo separado dentro de uma pasta `/toolkits`. |

### **Fase 4: Progressive Web App (PWA) — Opcional**
*Objetivo: Permitir que o site seja "instalado" e funcione offline.*

| Status | Tarefa | Entregável |
| :--- | :--- | :--- |
| **DONE** | **4.1.** Configurar o *Service Worker* para cache de arquivos. | Arquivo `service-worker.js` que armazena os assets principais para uso offline. |
| **DONE** | **4.2.** Adicionar o *Web App Manifest*. | Arquivo `manifest.json` com ícones, nome do app e configurações de tela. |

### **Fase 5: Funcionalidades Avançadas de Texto e UI Refresh**
*Objetivo: Adicionar contadores, destaque de caracteres e um novo botão de reset, além de modernizar a UI.*

| Status | Tarefa | Entregável |
| :--- | :--- | :--- |
| **DONE** | **5.1.** Reestruturar o HTML para a nova UI. | `index.html` atualizado com áreas para contadores e novos botões, inspirado em cleanpaste.org. |
| **DONE** | **5.2.** Implementar contadores de palavras e caracteres. | Lógica em `scripts.js` que atualiza os contadores em tempo real para o texto de entrada e de saída. |
| **DONE** | **5.3.** Implementar o botão "Clean All / Reset". | Novo botão no `index.html` e lógica em `scripts.js` para limpar todas as áreas de texto e contadores. |
| **DONE** | **5.4.** Implementar destaque de caracteres invisíveis. | Lógica em `scripts.js` para analisar o texto de entrada e aplicar um destaque visual (ex: background sutil) nos caracteres ocultos. |
| **DONE** | **5.5.** Reestilizar a aplicação com base na nova UI. | `styles.css` totalmente atualizado para refletir o design inspirado em cleanpaste.org, incluindo os novos elementos. |
