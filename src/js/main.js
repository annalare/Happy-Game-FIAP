import initRenderFeatures from "./pages/render-features.js";
import initGetFormData from "./pages/get-form-data.js";
import initFeedback from "./pages/feedback.js";
import { initializeLogin } from "./pages/login.js";

document.addEventListener("DOMContentLoaded", () => {
	if (document.querySelector("#features-tbody")) {
		return initRenderFeatures();
	}

	if (document.querySelector("form")) {
		return initGetFormData();
	}
	if (document.querySelector(".feedback-hero")) {
		return initFeedback();
	}
	if (document.querySelector("#loginForm")) {
		return initializeLogin();
	}
});
