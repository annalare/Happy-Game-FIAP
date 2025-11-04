# 🎮 Happy Game - Website FIAP

## 📋 Sobre o Projeto

O **Happy Game** é uma plataforma web desenvolvida para conectar gamers e entusiastas de videogames. O projeto apresenta uma comunidade virtual onde jogadores podem se inscrever, explorar a história dos jogos e conhecer os recursos da plataforma.

## 🎯 Propósito

O site foi criado para:

- **Conectar gamers**: Criar uma comunidade vibrante de jogadores
- **Educar sobre história**: Apresentar a evolução dos videogames ao longo das décadas
- **Apresentar recursos**: Mostrar funcionalidades da plataforma para desenvolvedores e usuários
- **Captar leads**: Sistema de inscrição para lista de espera da comunidade

## 🚀 Funcionalidades

### 🏠 Página Inicial (`index.html`)

- **Hero Section**: Apresentação principal com call-to-action
- **Seção de Comunidades**: Cards interativos mostrando benefícios da plataforma
- **Estatísticas**: Dados impactantes sobre a indústria de jogos
- **Call-to-Action**: Convite para inscrição na comunidade

### 📚 História dos Jogos (`pages/story-games.html`)

- **Timeline Interativa**: Evolução dos videogames de 1970 até o presente
- **Períodos Históricos**:
  - 1970-1980: O Início de Tudo (Pong, Space Invaders, Pac-Man)
  - 1980-1990: A Batalha dos Gigantes (Nintendo vs Sega)
  - 1990-2000: Uma Nova Dimensão (Gráficos 3D, jogos online)
  - 2000-2010: A Democratização dos Games (Redes sociais, indie games)
  - 2010-Presente: Games como Serviço e Realidade Virtual

### 🛠️ Plataforma (`pages/platform.html`)

- **Tabela de Recursos**: Funcionalidades organizadas por categoria.
- **Compromisso com a Comunidade** : Codigo de conduta, transparência, ambiente inclusivo.
- **Sustentabilidade Digital** : Comprometidos com práticas de desenvolvimento sustentável.
- **Equipe**: Apresentação dos desenvolvedores do projeto.
- **Recursos Disponíveis**:
  - Catálogo de Jogos
  - Análise de Vendas
  - Sistema de Posts
  - Interação entre Usuários
  - Compromisso com a comunidade
  - Sistema de Conquistas
  - Diversidade & Inclusão

### 📝 Formulário de Inscrição (`pages/forms.html`)

- **Cadastro Completo**: Nome, nickname, email, telefone
- **Preferências**: Plataforma favorita e gêneros de jogos
- **Feedback**: Campo para sugestões e ideias
- **Validação**: Campos obrigatórios e aceite de termos

### ✅ Página de Feedback (`pages/feedback.html`)

- **Confirmação de Cadastro**: Página de sucesso após inscrição
- **FOMO Section**: Benefícios exclusivos para membros
- **Call-to-Action**: Convite para seguir nas redes sociais

## 🛠️ Tecnologias Utilizadas

### Frontend

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com variáveis CSS e animações
- **Bootstrap 5.3.8**: Framework CSS para responsividade e componentes
- **Javascript++**: Interatividade e funcionalidades dinâmicas

### Bibliotecas e Recursos Externos

- **Bootstrap 5.3.8**: Sistema de grid responsivo e componentes UI
- **Font Awesome 6.4.0**: Ícones para interface
- **Google Fonts**:
  - Orbitron (títulos)
  - Roboto (texto geral)

### Design System

- **CSS Custom Properties**: Sistema de tokens de design
- **Componentes Reutilizáveis**: Arquitetura modular
- **Responsive Design**: Mobile-first approach com menu hamburguer

## 🎨 Sistema de Design

### Paleta de Cores

O projeto utiliza um sistema de tokens de cor bem estruturado:

#### Cores Neutras

--black: #0D0D0D;
--grey-dark: #1A1A1A;
--grey-medium: #2D2D2D;
--grey-light: #B0B0B0;
--white: #FFFFFF;

### CORES SECUNDÁRIAS (Acentos Neon)

--green-base: #00FF88;
--green-darker: #00CC6D;
--pink-base: #FF2E63;

## 📁 Estrutura do Projeto

````
Happy-Game-Website---FIAP/

├── src/                          # Código-fonte do projeto
│   ├── assets/
│   │   └── img/                  # Imagens e recursos visuais
│   │       ├── logo/            # Variações do logo
│   │       ├── profile/         # Fotos da equipe
│   │       └── *.png, *.svg     # Imagens do site
│   ├── components/              # Componentes reutilizáveis
│   │   ├── button/             # Componente de botão
│   │   ├── footer/             # Componente de rodapé
│   │   ├── input/              # Componente de input
│   │   └── navbar/             # Componente de navegação
│   ├── css/                    # Estilos do projeto
│   │   ├── feedback.css        # Estilos da página de feedback
│   │   ├── forms.css           # Estilos do formulário
│   │   ├── home.css            # Estilos da página inicial
│   │   ├── konami.css          # Estilos do easter egg
│   │   ├── platform.css        # Estilos da página da plataforma
│   │   ├── story-games.css     # Estilos da página de história
│   │   └── style.css           # Estilos globais e design system
│   ├── js/                     # JavaScript do projeto
│   │   ├── data/              # Dados e configurações
│   │   │   ├── featuresData.json    # Dados das funcionalidades
│   │   │   └── feedbackCards.js     # Cards de feedback
│   │   ├── pages/             # Scripts específicos de páginas
│   │   │   ├── feedback.js        # Lógica da página de feedback
│   │   │   ├── get-form-data.js   # Captura dados do formulário
│   │   │   ├── home.js            # Lógica da página inicial
│   │   │   ├── render-features.js # Renderiza features da plataforma
│   │   │   └── telephone-format.js # Formatação de telefone
│   │   ├── utils/             # Utilitários JavaScript
│   │   │   └── storage.js         # Gerenciamento de armazenamento local
│   │   └── main.js            # Script principal
│   └── pages/                  # Páginas do site
│       ├── feedback.html      # Página de confirmação
│       ├── forms.html         # Formulário de inscrição
│       ├── platform.html      # Página da plataforma
│       └── story-games.html   # Página de história dos jogos
├── index.html                 # Página inicial
├── sitemap.xml               # Mapa do site para SEO
└── README.md                 # Documentação do projeto

## 🚀 Como Executar

1. **Clone o repositório**

   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd Happy-Game-Website---FIAP
````

2. **Abra o projeto**

   - Abra o arquivo `index.html` em um navegador web
   - Ou use um servidor local (Live Server, Python HTTP server, etc.)

3. **Navegue pelas páginas**
   - Página inicial: `index.html`
   - História dos jogos: `pages/story-games.html`
   - Plataforma: `pages/platform.html`
   - Formulário: `pages/forms.html`
   - Feedback: `pages/feedback.html`

## 👥 Equipe de Desenvolvimento

- **Ana Larissa Mendes** - Frontend Developer [Github](https://github.com/annalare/)
- **João Pedro Thethê Andrade** - Frontend Developer [Github](https://github.com/jaoshtt/)
- **John Vitor Silverio Pereira** - Backend/Frontend Developer [Github](https://github.com/johnsilverio/)
- **Lyniker Vinicius Santos de Oliveira** - Criador de conteúdo/Frontend Developer [Github](https://github.com/lynikerrr/)
- **Vinícius Cardoso Junqueira** - Frontend Developer [Github](https://github.com/vinikrdoso/)

---

_Projeto desenvolvido como parte da Graduação da FIAP em Sistemas de Informação_
