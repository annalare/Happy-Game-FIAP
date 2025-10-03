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
- **Tabela de Recursos**: Funcionalidades organizadas por categoria
- **Equipe**: Apresentação dos desenvolvedores do projeto
- **Recursos Disponíveis**:
  - Catálogo de Jogos
  - Análise de Vendas
  - Sistema de Posts
  - Interação entre Usuários
  - Sistema de Conquistas

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

### Bibliotecas e Recursos Externos
- **Bootstrap 5.3.8**: Sistema de grid responsivo e componentes UI
- **Font Awesome 6.4.0**: Ícones para interface
- **Google Fonts**: 
  - Press Start 2P (títulos)
  - Roboto (texto geral)

### Design System
- **CSS Custom Properties**: Sistema de tokens de design
- **Componentes Reutilizáveis**: Arquitetura modular
- **Responsive Design**: Mobile-first approach com menu hamburguer

## 🎨 Sistema de Design

### Paleta de Cores
O projeto utiliza um sistema de tokens de cor bem estruturado:

#### Cores Neutras
- `--black`: #0D0D0D
- `--grey-1`: #252525
- `--grey-2`: #6E6E6E
- `--grey-3`: #9E9E9E
- `--white`: #FDFDFD

#### Cores Primárias (Verde)
- `--green-darker-2`: #009952
- `--green-darker-1`: #00CC6D
- `--green-base`: #00FF88
- `--green-lighter-1`: #33FFA0
- `--green-lighter-2`: #66FFB8

#### Cores Secundárias (Rosa)
- `--pink-darker-2`: #991C3B
- `--pink-darker-1`: #CC254F
- `--pink-base`: #FF2E63
- `--pink-lighter-1`: #FF5882
- `--pink-lighter-2`: #FF82A1

### Tipografia
- **Títulos**: Press Start 2P 
- **Texto**: Roboto


## 📁 Estrutura do Projeto

```
Happy-Game-Website---FIAP/
├── assets/
│   └── img/                    # Imagens e recursos visuais
│       ├── profile/           # Fotos da equipe
│       └── *.png, *.svg       # Imagens do site
├── components/                # Componentes reutilizáveis
│   ├── button/               # Componente de botão
│   ├── footer/               # Componente de rodapé
│   ├── input/                # Componente de input
│   └── navbar/               # Componente de navegação
├── css/                      # Estilos do projeto
│   ├── style.css             # Estilos globais e design system
│   ├── home.css              # Estilos da página inicial
│   ├── platform.css          # Estilos da página da plataforma
│   ├── story-games.css       # Estilos da página de história
│   ├── forms.css             # Estilos do formulário
│   └── feedback.css          # Estilos da página de feedback
├── pages/                    # Páginas do site
│   ├── platform.html         # Página da plataforma
│   ├── story-games.html      # Página de história dos jogos
│   ├── forms.html            # Formulário de inscrição
│   └── feedback.html         # Página de confirmação
├── index.html                # Página inicial
└── README.md                 # Documentação do projeto
```

## 🚀 Como Executar

1. **Clone o repositório**
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd Happy-Game-Website---FIAP
   ```

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

*Projeto desenvolvido como parte da Graduação da FIAP em Sistemas de Informação*