export default function initRenderFeatures() {
	const tbody = document.querySelector("#features-tbody");

	if (!tbody) return;

	const renderTable = async () => {
		try {
			const featuresData = await fetch("../js/data/featuresData.json");

			if (!featuresData.ok) {
				throw new Error(`HTTP error! status: ${featuresData.status}`);
			}

			const htmlRow = await featuresData.json();
			htmlRow.forEach((features) => {
				const featureHtml = `
      <tr>
        <td class="category-cell">
          <i class="${features.icone}"></i>
          <span>${features.categoria}</span>
        </td>
        <td class="resource-cell">${features.recurso}</td>
        <td class="description-cell">${features.descricao}</td>
      </tr>
    `;
				tbody.innerHTML += featureHtml;
			});
			return htmlRow;
		} catch (error) {
			console.error("Erro ao carregar dados das features:", error);
			tbody.innerHTML = '<tr><td colspan="3">Erro ao carregar dados</td></tr>';
			return [];
		}
	};

	renderTable();
}
