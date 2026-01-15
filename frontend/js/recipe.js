// ============================================
// IMPORTS - Modules nécessaires
// ============================================
import { getOneRecipe, deletOneRecipe } from "./api.js"
import { renderSingleRecipe } from "./ui.js"

// ============================================
// CHARGER ET AFFICHER LA RECETTE
// ============================================
const loadRecipe = async (recipeId) => {
	try {
		// Appeler l'API pour récupérer la recette par son ID
		const recipe = await getOneRecipe(recipeId)
		
		const recipeDetail = document.getElementById("recipe-detail")
		// Afficher la recette dans la grid
		recipeDetail.innerHTML = renderSingleRecipe(recipe)
	} catch (error) {
		console.error("Erreur lors du chargement de la recette:", error.message)
		alert(
			"Impossible de charger la recette. Vérifiez que le serveur est démarré."
		)
	}
}

// ============================================
// INITIALISATION DE L'APPLICATION
// ============================================
// Cette fonction est appelée automatiquement au chargement de la page
// Elle charge et affiche toutes les recettes

const setupEventListeners = () => {
	const loader = document.getElementById("loading-spinner")
	const recipeDetail = document.getElementById("recipe-detail")
	const deleteButton = document.getElementById("delete-recipe-btn")
	
	if (loader) {
		loader.classList.add("d-none")
	}
	if (recipeDetail) {
		recipeDetail.classList.remove("d-none")
	}
	if (deleteButton) {
		deleteButton.addEventListener("click", async () => {
			const urlParams = new URLSearchParams(window.location.search)
			const recipeId = urlParams.get("id")
			try {
				await deletOneRecipe(recipeId)
				alert("Recette supprimée avec succès!")
				window.location.href = "index.html"
			} catch (error) {
				alert("Erreur lors de la suppression")
			}
		})
	}
}

document.addEventListener("DOMContentLoaded", () => {
	// receive recipe id from url
	const urlParams = new URLSearchParams(window.location.search)
	const recipeId = urlParams.get("id")
	console.log("API recipeData:", recipeId)
	loadRecipe(recipeId)
	setupEventListeners()
})