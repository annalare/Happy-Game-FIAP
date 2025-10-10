const featuresData = [
  {
    categoria: 'Jogos',
    icone: 'fas fa-gamepad',
    recurso: 'Catálogo de Jogos',
    descricao: 'Biblioteca completa com jogos de diferentes gêneros e plataformas'
  },
  {
    categoria: 'Análise',
    icone: 'fas fa-chart-line',
    recurso: 'Análise de Vendas',
    descricao: 'Relatórios detalhados sobre performance de vendas e métricas'
  },
  {
    categoria: 'Conteúdo',
    icone: 'fas fa-file-alt',
    recurso: 'Sistema de Posts',
    descricao: 'Criação e compartilhamento de conteúdo sobre jogos'
  },
  {
    categoria: 'Social',
    icone: 'fas fa-users',
    recurso: 'Interação entre Usuários',
    descricao: 'Chat, fóruns e sistema de amigos para conectar gamers'
  },
  {
    categoria: 'Gamificação',
    icone: 'fas fa-trophy',
    recurso: 'Sistema de Conquistas',
    descricao: 'Badges, rankings e desafios para engajar os usuários'
  }
];

const renderFeaturesTable = function () {
  const tbody = document.querySelector('#features-tbody');

  if (!tbody) return;

  const htmlRows = featuresData.map(feature => {
    return `
      <tr>
        <td class="category-cell">
          <i class="${feature.icone}"></i>
          <span>${feature.categoria}</span>
        </td>
        <td class="resource-cell">${feature.recurso}</td>
        <td class="description-cell">${feature.descricao}</td>
      </tr>
    `;
  }).join('');

  tbody.innerHTML = htmlRows;
};

document.addEventListener('DOMContentLoaded', renderFeaturesTable);
