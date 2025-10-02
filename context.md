# Contexto do Projeto — Toolkit Web (Limpeza de Texto e Outros Utilitários)

## Visão Geral
Este projeto consiste na criação de um site de **toolkits web** hospedado no GitHub Pages, começando com uma ferramenta de limpeza de texto para remover caracteres ocultos, espaços extras e quebras de linha indesejadas, geralmente presentes em saídas de IA. O objetivo é disponibilizar uma interface moderna, prática e expansível, capaz de incorporar novos utilitários no futuro.

## Problema
Textos oriundos de IAs frequentemente contêm caracteres invisíveis (ex.: zero-width, marcadores ocultos) e formatações indesejadas que dificultam a manipulação em outros sistemas ou editores. Atualmente, o processo de limpeza é manual e pouco prático.

## Valor Medido de Sucesso
- Usuário consegue colar texto com caracteres ocultos e obter uma versão limpa em segundos.  
- Interface moderna, responsiva em desktop e intuitiva.  
- Possibilidade de expandir facilmente para novos toolkits.  
- Botão de “copiar resultado” funcionando de forma confiável.  

## Escopo
- Ferramenta inicial para colar texto, limpar caracteres invisíveis, espaços extras e quebras desnecessárias.  
- Interface moderna e estilizada (UI customizada, dark mode opcional).  
- Copiar automaticamente o resultado para a área de transferência.  
- Estrutura de site único, com possibilidade de menu para múltiplos toolkits.  
- Documentação básica (README, changelog).  

## Fora de Escopo
- Suporte mobile (não será prioridade na primeira versão).  
- Integrações externas ou APIs de NLP.  
- Back-end dedicado (será somente front-end).  

## Stakeholders
| **Nome** | **Papel** | **Responsabilidade** |
| --- | --- | --- |
| Autor | Desenvolvedor | Criar, manter e evoluir o projeto |
| Usuário final | Consumidor | Utilizar as ferramentas para limpeza de texto |

## Personas
| **Nome** | **Objetivos** | **Dores** |
| --- | --- | --- |
| Profissional de escritório | Limpar rapidamente textos copiados de IAs para relatórios/emails | Textos sujos com caracteres invisíveis atrapalham edição |
| Autor do projeto | Ter utilitários práticos e organizados em um único site | Repetição de tarefas manuais de limpeza de texto |

## Requisitos

### Funcionais
| **ID** | **Requisito** | **Descrição** |
| --- | --- | --- |
| RF-01 | Colar texto | Usuário deve conseguir colar o texto na interface |
| RF-02 | Limpeza de texto | Sistema deve remover caracteres invisíveis, espaços e quebras extras |
| RF-03 | Exibir texto limpo | Exibir resultado em campo separado |
| RF-04 | Copiar texto limpo | Usuário deve poder copiar facilmente o texto limpo |
| RF-05 | Suporte a múltiplos toolkits | Estrutura deve permitir adicionar novas ferramentas no futuro |

### Não Funcionais
| **ID** | **Requisito** | **Descrição** |
| --- | --- | --- |
| RNF-01 | Hospedagem gratuita | Utilizar GitHub Pages |
| RNF-02 | Interface moderna | UI estilizada e responsiva em desktop |
| RNF-03 | Documentação | README e changelog claros |
| RNF-04 | Segurança básica | Evitar execução de scripts maliciosos no texto colado |
| RNF-05 | PWA opcional | Possibilidade futura de uso offline |

### Exemplos de Aceitação
- Usuário cola texto com caracteres invisíveis → recebe versão limpa em menos de 1 segundo.  
- Ao clicar em “Copiar texto limpo”, o conteúdo é enviado à área de transferência.  
- O site abre em desktop sem problemas de layout.  

## Arquitetura
- **Stack:** HTML, CSS, JavaScript (sem backend).  
- **Hospedagem:** GitHub Pages.  
- **Estilo:** Interface moderna, com possível dark mode.  
- **Componentes:** Campo de texto, botão “Limpar”, campo de saída, botão “Copiar”.  
- **Fluxo Principal:** Colar → Limpar → Copiar.  
- **Decision Log:** PWA considerado “nice to have”, mas não prioritário.  

## Modelagem de Dados
- Não há persistência de dados (processamento 100% client-side).  

## Integrações
- Nenhuma no MVP.  

## Qualidade
- Lint de código (ESLint).  
- Testes manuais no browser.  
- Estrutura para possíveis testes automatizados no futuro.  
- CI/CD opcional com GitHub Actions para build e deploy automático.  

## Segurança e Privacidade
- Processamento local no browser, sem envio de dados.  
- Evitar execuções indesejadas via input sanitizado.  

## Riscos
- Usuário pode não entender que apenas caracteres invisíveis e espaçamentos são limpos.  
- Falta de suporte mobile pode limitar público.  
- Evolução para vários toolkits pode exigir reorganização do site.  

## Suposições
- Uso principal será em desktop.  
- Repositório privado, mas com documentação clara.  
- Expansão futura de ferramentas será incremental.  

## Roadmap
| **Fase** | **Objetivos** | **Entregas** |
| --- | --- | --- |
| Fase 1 | MVP de limpeza de texto | Colar → Limpar → Copiar |
| Fase 2 | Interface moderna | Dark mode, UI refinada |
| Fase 3 | Expansão | Menu para múltiplos toolkits |
| Fase 4 | PWA opcional | Suporte offline |

## Primeiros Passos de Código
- Criar repositório privado no GitHub.  
- Configurar GitHub Pages.  
- Implementar HTML/CSS/JS básicos.  
- Criar função de remoção de caracteres invisíveis.  
- Adicionar botão de copiar para clipboard.  

## Estrutura do Projeto Sugerida
- `/index.html`  
- `/styles.css`  
- `/scripts.js`  
- `/toolkits/` (pasta para futuros utilitários)  
- `README.md`  
- `CHANGELOG.md`  

## Prompts de Uso
- “Cole aqui o texto gerado por IA e limpe os caracteres ocultos.”  
- “Clique em limpar para processar e copie o resultado final.”  

## Critérios de Aceite
- O site deve rodar 100% em client-side.  
- O botão “Limpar” remove caracteres invisíveis e espaços extras.  
- O botão “Copiar” deve funcionar em desktop sem falhas.  
- Documentação inicial deve estar disponível no repositório.  

## Glossário
| **Termo** | **Definição** |
| --- | --- |
| Caracteres invisíveis | Símbolos não visíveis como zero-width space, marcadores de IA |
| Toolkit | Mini-ferramenta web dentro do site |
| PWA | Progressive Web App, permite uso offline e instalação local |
| GitHub Pages | Serviço gratuito de hospedagem estática |

## Repositório e Deploy
- **Repositório GitHub:** [thiagod-gh/cleant-text](https://github.com/thiagod-gh/cleant-text.git)  
- **Visibilidade:** Privado  
- **Branch principal:** `main`  
- **Hospedagem:** GitHub Pages (padrão: branch `main`)  
- **Deploy:** via GitHub Pages, publicação automática dos arquivos estáticos do repositório  
- **CI/CD:** opcional com GitHub Actions (testes + deploy)  
- **Acesso:** Repositório privado, exigir autenticação (token ou SSH key) para acesso remoto  
