export default function initTelephoneFormat(inputElement) {
	if (!inputElement) return;

	const formatarValor = (valor) => {
		const digitos = valor.replace(/\D/g, "").slice(0, 11);

		if (digitos.length === 0) return "";
		if (digitos.length <= 2) return `(${digitos}`;
		if (digitos.length <= 6)
			return `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`;
		if (digitos.length <= 10)
			return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 6)}-${digitos.slice(
				6
			)}`;

		return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(
			7
		)}`;
	};

	inputElement.addEventListener("input", (e) => {
		e.target.value = formatarValor(e.target.value);
	});

	inputElement.addEventListener("keydown", (e) => {
		if (
			e.key === "Backspace" &&
			/[\)\s\-]/.test(e.target.value[e.target.selectionStart - 1])
		) {
			e.preventDefault();
			const digitos = e.target.value.replace(/\D/g, "").slice(0, -1);
			e.target.value = formatarValor(digitos);
		}
	});
}
