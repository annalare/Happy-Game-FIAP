import initRenderFeatures from "./pages/render-features.js";
import initGetFormData from "./pages/get-form-data.js";
import initFeedback from "./pages/feedback.js";

document.addEventListener("DOMContentLoaded", () => {
	if (document.querySelector("#features-tbody")) initRenderFeatures();
	if (document.querySelector("form")) initGetFormData();
	if (document.querySelector(".feedback-hero")) initFeedback();
});
