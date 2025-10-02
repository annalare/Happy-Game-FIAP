# DOCUMENTAÇÃO DO PROJETO HAPPY GAME
**FIAP - Sistemas de Informação - Fase 1**

**Data:** 15 de setembro de 2025

---

## PARTE 1: DADOS DO GRUPO

### Integrantes do Projeto

| Nome Completo | RM |
|---|---|
| Vinícius Cardoso Junqueira | RM566906 |
| Ana Larissa Cristo Mendes | RM567403 |
| João Pedro Thethê Andrade | RM566XXX* |
| John Vitor Silverio Pereira | RM566968 |
| Lyniker Vinicius Santos de Oliveira | RM566989 |

*_Observação: RM do João Pedro pendente de confirmação_

---

## PARTE 2: CONCEPÇÃO E PLANEJAMENTO

### 2.1 Definição do Tema e Escopo

#### Tema Escolhido
**Happy Game** - Primeira rede social dedicada exclusivamente à comunidade gamer, com foco em:
- Conexão entre jogadores com interesses similares
- Preservação da história e cultura dos videogames
- Descoberta de novos jogos através de recomendações da comunidade

#### Slogan do Projeto
> *"Mais que jogar. Aqui você vive a história dos games."*

#### Funcionalidades do Protótipo
O website desenvolvido apresenta as seguintes funcionalidades:

1. **Página Principal (Home)**
   - Apresentação da proposta da plataforma
   - Hero section com call-to-action
   - Seção de comunidades gamers
   - Estatísticas da indústria de jogos
   - Call-to-action para cadastro

2. **História dos Games**
   - Timeline da evolução dos videogames
   - Conteúdo educativo sobre marcos históricos
   - Demonstração do pilar "Acervo e Preservação"

3. **Plataforma**
   - Tabela detalhada de recursos oferecidos
   - Categorização por tipo de funcionalidade
   - Apresentação das features futuras

4. **Formulário de Cadastro**
   - Campos de informações pessoais
   - Seleção de plataformas favoritas
   - Gêneros de jogos preferidos
   - Validação básica HTML

5. **Página de Feedback**
   - Confirmação de cadastro realizado
   - Elementos de FOMO (Fear of Missing Out)
   - Incentivo ao engajamento futuro

### 2.2 Público-Alvo

#### Perfis Principais

**O Nostálgico (35-45 anos)**
- Cresceu com consoles clássicos (Atari, NES, SNES, PS1)
- Busca relembrar experiências e compartilhar memórias
- Valoriza conteúdo histórico e preservação cultural
- Interesse em descobrir como jogos antigos influenciaram os atuais

**O Conector (18-35 anos)**
- Ativo em múltiplas plataformas (PC, Console, Mobile)
- Procura pessoas com gostos similares para jogar
- Valoriza recomendações e descobertas através da comunidade
- Interesse em análises e discussões aprofundadas

#### Necessidades Identificadas
- Espaço dedicado para discussão sobre games (não apenas um fórum genérico)
- Preservação da memória gamer de forma colaborativa
- Descoberta de novos títulos através de pessoas com gostos similares
- Conexão genuína entre gamers além do ato de jogar

### 2.3 Pilares Fundamentais

1. **Comunidade e Interação Social**
   - Posts e comentários contextualizados por jogo
   - Perfis de jogador personalizados
   - Sistema de amizades e grupos

2. **Acervo e Preservação Histórica**
   - Timeline interativa da evolução dos games
   - Banco de dados detalhado de jogos e consoles
   - Arquivo vivo da cultura gamer

3. **Conteúdo e Descoberta**
   - Sistema de recomendações baseado em comunidade
   - Hub de conteúdo editorial e user-generated
   - Marketplace futuro para experiências

### 2.4 Planejamento do Projeto

#### Cronograma de Desenvolvimento (Setembro 2025)

| Período | Etapa | Responsáveis | Entregas |
|---------|--------|--------------|----------|
| **Semana 1** | Definição e Pesquisa | Todos | Documento de visão, pesquisa de mercado |
| **Semana 2** | Design e Arquitetura | John, Larissa | Wireframes, paleta de cores, tokens CSS |
| **Semana 3** | Desenvolvimento HTML | Vinícius, João | Estrutura HTML das 5 páginas |
| **Semana 4** | Estilização CSS | Lyniker, John | CSS responsivo e components |
| **Semana 5** | Integração e Testes | Todos | Testes de navegação, validação |
| **Semana 6** | Documentação e Vídeo | Larissa, Vinícius | Documentação final, produção do vídeo |

#### Divisão de Responsabilidades

**John Vitor Silverio Pereira (RM566968)**
- Coordenação técnica do projeto
- Desenvolvimento do sistema de design CSS
- Implementação de componentes reutilizáveis

**Vinícius Cardoso Junqueira (RM566906)**
- Estruturação HTML semântica
- Implementação da página principal
- Coordenação da documentação

**Ana Larissa Cristo Mendes (RM567403)**
- Design visual e UX
- Curadoria de conteúdo
- Produção do material de apresentação

**João Pedro Thethê Andrade**
- Desenvolvimento das páginas internas
- Implementação do formulário
- Testes de funcionalidade

**Lyniker Vinicius Santos de Oliveira (RM566989)**
- Estilização CSS avançada
- Responsividade mobile
- Otimização de performance

---

## PARTE 3: REFLEXÃO SOBRE ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES

### 3.1 Requisitos de Hardware

#### Especificações Mínimas
**Para usuários finais:**
- **Processador:** Intel Core i3 / AMD Ryzen 3 ou equivalente
- **RAM:** 4GB (recomendado 8GB para multitasking)
- **Armazenamento:** 100MB livres para cache do navegador
- **Placa de vídeo:** Integrada (suficiente para aplicação web)

**Justificativa:** Por ser uma aplicação web estática baseada em HTML/CSS, os requisitos são mínimos. O processamento principal ocorre no navegador, exigindo apenas recursos básicos para renderização de DOM e CSS.

#### Especificações para Desenvolvimento
**Para a equipe de desenvolvimento:**
- **Processador:** Intel Core i5/i7 ou AMD Ryzen 5/7
- **RAM:** 16GB (para múltiplas ferramentas e navegadores)
- **Armazenamento:** SSD com 500GB+ para projetos e ferramentas
- **Monitor:** Resolução mínima 1920x1080 para design responsivo

### 3.2 Compatibilidade de Sistemas Operacionais

#### Sistemas Suportados
A aplicação é **multiplataforma** por natureza, funcionando em:

**Desktop:**
- Windows 10/11
- macOS 10.14+ 
- Linux (Ubuntu, Fedora, Arch, etc.)

**Mobile:**
- iOS 12+
- Android 8.0+

**Justificativa:** Aplicações web HTML/CSS/JavaScript são interpretadas pelo navegador, tornando-as independentes do sistema operacional. A única dependência é ter um navegador web moderno.

### 3.3 Requisitos de Navegador

#### Navegadores Suportados
**Principais (testados e otimizados):**
- Google Chrome 90+
- Mozilla Firefox 88+
- Safari 14+
- Microsoft Edge 90+

**Recursos HTML/CSS utilizados que requerem suporte moderno:**
- CSS Grid Layout
- CSS Custom Properties (variáveis CSS)
- CSS Flexbox
- Media Queries para responsividade
- Font-face para fontes customizadas
- Semantic HTML5 tags

#### Funcionalidades Críticas
- **JavaScript:** Não utilizado no protótipo atual
- **Local Storage:** Futuro uso para preferências do usuário
- **Geolocalização:** Não aplicável
- **Notificações:** Planejado para versões futuras

### 3.4 Considerações de Performance

#### Otimizações Implementadas
- **Assets locais:** Todas as imagens são locais para funcionamento offline
- **CSS minificado:** Estrutura organizada para carregamento eficiente
- **Fontes web:** Uso de Google Fonts com fallbacks
- **Imagens otimizadas:** Formatos PNG/SVG para qualidade e tamanho

#### Limitações Identificadas
- **Fonte externa:** Dependência do Google Fonts (pode afetar carregamento offline)
- **Font Awesome:** CDN externo para ícones
- **Tamanho das imagens:** Algumas imagens podem ser otimizadas

---

## PARTE 4: UTILIDADE NOS SISTEMAS DE INFORMAÇÃO

### 4.1 Classificação como Sistema de Informação

O Happy Game se enquadra como um **Sistema de Informação Social** com características de:

#### Tipo de SI: Sistema de Suporte à Colaboração
- **Função principal:** Facilitar interação e troca de informações entre gamers
- **Escopo:** Comunidade especializada em games
- **Natureza:** Social/Colaborativa

### 4.2 Recursos dos Sistemas de Informação Implementados

#### Entrada de Dados (Input)
- **Formulários de cadastro:** Coleta de informações dos usuários
- **Preferências de jogos:** Seleção de plataformas e gêneros
- **Dados de perfil:** Nome, nickname, interesses

#### Processamento
- **Validação de dados:** Campos obrigatórios e tipos corretos
- **Organização de informações:** Estruturação dos dados coletados
- **Navegação entre páginas:** Fluxo lógico de informações

#### Saída de Dados (Output)
- **Feedback de cadastro:** Confirmação de ações do usuário
- **Apresentação de conteúdo:** Timeline histórica, recursos da plataforma
- **Interface responsiva:** Adaptação para diferentes dispositivos

#### Armazenamento (Futuro)
- **Banco de dados de usuários:** Perfis e preferências
- **Histórico de interações:** Posts, comentários, curtidas
- **Acervo de jogos:** Base de dados de games e análises

### 4.3 Cadeia de Valor

#### Atividades Primárias

**1. Aquisição de Usuários**
- Marketing digital para comunidade gamer
- Parcerias com influenciadores e streamers
- SEO para descoberta orgânica

**2. Engajamento da Comunidade**
- Moderação de conteúdo
- Eventos e discussões temáticas
- Sistema de recompensas para participação ativa

**3. Criação de Conteúdo**
- Curadoria de conteúdo histórico
- Ferramentas para user-generated content
- Análises e reviews colaborativas

**4. Monetização (Futura)**
- Marketplace de jogos
- Publicidade direcionada
- Assinaturas premium

#### Atividades de Suporte

**1. Infraestrutura Tecnológica**
- Servidores e hospedagem
- CDN para performance global
- Backup e segurança de dados

**2. Desenvolvimento de Produto**
- Updates e novas funcionalidades
- Pesquisa de UX/UI
- Testes A/B para otimização

**3. Atendimento ao Cliente**
- Suporte técnico
- Moderação de conteúdo
- Resolução de conflitos

### 4.4 Uso Estratégico

#### Vantagem Competitiva
**Diferenciação:** Primeira plataforma que combina rede social + preservação histórica de games

**Proposta de valor única:**
- Não é apenas mais um fórum ou rede social genérica
- Foco específico na cultura e história dos videogames
- Comunidade curada e especializada

#### Posicionamento de Mercado
**Oceano Azul:** Criação de novo segmento que não existia anteriormente
- Concorrentes indiretos: Discord, Reddit, Steam Community
- Nenhum concorrente direto com a mesma proposta de valor

#### Estratégia de Crescimento
1. **Fase 1:** Comunidade de early adopters (nostálgicos e conectores)
2. **Fase 2:** Expansão para outros perfis de gamers
3. **Fase 3:** Marketplace e monetização
4. **Fase 4:** Expansão internacional

### 4.5 Análise SWOT do Sistema

#### Forças (Strengths)
- Proposta de valor única no mercado
- Equipe técnica qualificada
- Baixo custo inicial de desenvolvimento
- Escalabilidade da solução web

#### Fraquezas (Weaknesses)
- Projeto acadêmico ainda sem validação de mercado
- Dependência de crescimento orgânico da comunidade
- Limitações técnicas do protótipo atual

#### Oportunidades (Opportunities)
- Mercado de games em crescimento exponencial
- Tendência de communities especializadas
- Potencial de parcerias com desenvolvedoras

#### Ameaças (Threats)
- Entrada de grandes players (Discord, Meta, Google)
- Mudanças nos hábitos de consumo de mídia
- Regulamentações de privacidade de dados

---

## PARTE 5: ANÁLISE TÉCNICA DO DESENVOLVIMENTO

### 5.1 Decisões de Design

#### Identidade Visual

**Paleta de Cores Escolhida:**
- **Primária:** Verde neon (#00FF88) - representa energia e tecnologia
- **Secundária:** Rosa vibrante (#FF2E63) - adiciona personalidade e contraste
- **Base:** Preto (#0D0D0D) e Branco (#FDFDFD) - garantem legibilidade

**Justificativa:** As cores neon remetem à estética retrô-futurista dos arcades clássicos, criando conexão emocional com o público nostálgico, enquanto mantém apelo moderno.

**Tipografia:**
- **Títulos:** "Press Start 2P" - fonte pixel art que evoca jogos clássicos
- **Corpo:** "Roboto" - fonte sans-serif moderna e legível

#### Layout e UX

**Estrutura de Navegação:**
- Menu horizontal fixo presente em todas as páginas
- Hierarquia visual clara com seções bem definidas
- Call-to-actions estrategicamente posicionados

**Design System:**
- Componentes reutilizáveis (buttons, inputs, navbar, footer)
- Sistema de tokens CSS para consistência
- Grid system responsivo

### 5.2 Organização do Código HTML

#### Estrutura Semântica
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <!-- Meta tags, CSS, fonts -->
</head>
<body>
    <nav><!-- Navegação --></nav>
    <main>
        <section><!-- Conteúdo principal --></section>
    </main>
    <footer><!-- Rodapé --></footer>
</body>
</html>
```

#### Boas Práticas Implementadas
- **Tags semânticas:** `<nav>`, `<section>`, `<article>`, `<footer>`
- **Acessibilidade:** atributos `alt` em imagens, `aria-label` em ícones
- **SEO:** meta tags apropriadas, estrutura de headings (h1, h2, h3)
- **Performance:** otimização de imagens, CSS externo

#### Estrutura de Arquivos
```
/
├── index.html (página principal)
├── pages/
│   ├── story-games.html
│   ├── platform.html
│   ├── forms.html
│   └── feedback.html
├── css/
│   ├── style.css (global)
│   ├── home.css
│   ├── story-games.css
│   ├── platform.css
│   ├── forms.css
│   └── feedback.css
├── components/
│   ├── navbar/
│   ├── footer/
│   ├── button/
│   └── input/
└── assets/
    └── img/
```

### 5.3 Aplicação dos Estilos CSS

#### Sistema de Design Tokens
```css
:root {
    /* Cores */
    --green-base: #00FF88;
    --pink-base: #FF2E63;
    --black: #0D0D0D;
    --white: #FDFDFD;
    
    /* Tipografia */
    --font-display: 'Press Start 2P', cursive;
    --font-body: 'Roboto', sans-serif;
    
    /* Espaçamentos */
    --spacing-xs: 8px;
    --spacing-sm: 16px;
    --spacing-md: 24px;
    --spacing-lg: 48px;
}
```

#### Metodologia CSS
- **Arquivo base:** `style.css` com reset, variáveis e estilos globais
- **Arquivos específicos:** Um CSS por página para estilos únicos
- **Componentes:** CSS modular para elementos reutilizáveis
- **Nomenclatura:** Classes descritivas seguindo convenção BEM parcial

#### Responsividade
```css
/* Mobile First Approach */
@media (min-width: 768px) {
    /* Tablet styles */
}

@media (min-width: 1024px) {
    /* Desktop styles */
}
```

**Breakpoints utilizados:**
- Mobile: até 767px
- Tablet: 768px - 1023px  
- Desktop: 1024px+

#### Técnicas Avançadas
- **CSS Grid:** Layout de cards na home
- **Flexbox:** Alinhamento e distribuição de elementos
- **CSS Custom Properties:** Variáveis para manutenibilidade
- **Pseudo-elementos:** Efeitos visuais sem HTML adicional

### 5.4 Implementação do Formulário

#### Estrutura HTML
```html
<form class="cadastro-happy" action="feedback.html" method="POST">
    <div class="grupo-campo">
        <label for="nome">Nome Completo</label>
        <input type="text" id="nome" name="nome" required>
    </div>
    <!-- Outros campos -->
    <button type="submit">Cadastrar</button>
</form>
```

#### Validações Implementadas
- **Campos obrigatórios:** atributo `required`
- **Tipos de input:** `text`, `email`, `tel`, `radio`, `checkbox`
- **Validação de email:** type="email" com validação nativa
- **Feedback visual:** CSS para estados de foco e erro

#### Funcionalidade de Redirecionamento
- Action do formulário aponta para `feedback.html`
- Simula processamento bem-sucedido
- Página de feedback com elementos de FOMO

### 5.5 Desafios Enfrentados Durante o Desenvolvimento

#### 1. Harmonização Visual Entre Páginas
**Problema:** Manter consistência visual entre diferentes desenvolvedores
**Solução:** Criação de sistema de design tokens centralizado no `style.css`
**Aprendizado:** Importância de definir padrões antes do desenvolvimento

#### 2. Responsividade Complexa
**Problema:** Diferentes layouts precisavam de abordagens distintas
**Solução:** Combinação de CSS Grid e Flexbox conforme a necessidade
**Desafio específico:** Hero section com imagem e texto em dispositivos móveis

#### 3. Performance de Imagens
**Problema:** Imagens grandes impactando tempo de carregamento
**Solução:** Otimização manual das imagens e uso de formatos apropriados
**Limitação:** Falta de ferramentas automatizadas no projeto acadêmico

#### 4. Acessibilidade
**Problema:** Garantir que o site seja acessível para todos os usuários
**Solução:** Implementação de alt texts, aria-labels e estrutura semântica
**Desafio:** Balancear design visual impactante com acessibilidade

#### 5. Gestão de Versões em Equipe
**Problema:** Coordenação de mudanças entre 5 desenvolvedores
**Solução:** Divisão clara de responsabilidades por arquivo/componente
**Ferramenta:** Git para controle de versão (quando aplicável)

#### 6. Validação Cross-Browser
**Problema:** Garantir funcionamento em diferentes navegadores
**Solução:** Testes manuais em Chrome, Firefox, Safari e Edge
**Descoberta:** Diferenças sutis na renderização de fontes customizadas

### 5.6 Melhorias Futuras Identificadas

#### Técnicas
1. **Build Process:** Implementar minificação e concatenação de CSS
2. **Imagens:** Sistema de otimização automática e lazy loading
3. **JavaScript:** Adicionar interatividade e validações avançadas
4. **PWA:** Transformar em Progressive Web App para experiência mobile

#### Funcionais
1. **Animações:** Micro-interações para melhorar UX
2. **Filtros:** Sistema de busca e filtros na página de plataforma
3. **Personalização:** Temas claro/escuro
4. **Internacionalização:** Suporte a múltiplos idiomas

---

## CONCLUSÃO

O projeto Happy Game representa uma abordagem inovadora para criar uma comunidade gamer especializada, combinando networking social com preservação histórica dos videogames. 

### Resultados Alcançados

**Técnicos:**
- Website responsivo com 5 páginas funcionais
- Sistema de design consistente e escalável
- Código HTML semântico e acessível
- CSS organizado e manutenível

**Conceituais:**
- Proposta de valor única no mercado
- Público-alvo bem definido
- Estratégia de crescimento estruturada
- Análise técnica abrangente

### Aprendizados da Equipe

1. **Colaboração:** Importância de definir padrões antes do desenvolvimento
2. **Design System:** Valor de ter tokens CSS centralizados
3. **Planejamento:** Necessidade de cronograma detalhado em projetos em equipe
4. **Pesquisa:** Importância de entender o mercado antes de desenvolver

### Próximos Passos

Para transformar este protótipo em uma plataforma real, os próximos passos seriam:

1. **Validação:** Testes com usuários reais do público-alvo
2. **Backend:** Desenvolvimento de sistema de banco de dados
3. **Funcionalidades:** Sistema de posts, comentários e interações
4. **Launch:** Lançamento MVP para comunidade beta

O Happy Game demonstra como tecnologias simples (HTML/CSS) podem ser utilizadas para criar protótipos eficazes que comunicam visões complexas de produto, servindo como base sólida para desenvolvimento futuro.

---

**Link do Vídeo de Apresentação:** [A ser adicionado após produção]

**Data de conclusão:** 15 de setembro de 2025

**Equipe Happy Game - FIAP Sistemas de Informação**