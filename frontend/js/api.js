// ============================================
// API.JS - SERVICE LAYER (DATA ACCESS)
// ============================================
// Ce fichier contient toutes les fonctions qui communiquent avec le backend
//
// IMPORTANT: Ce fichier ne touche JAMAIS au DOM
// Il retourne uniquement des données (ou des erreurs)
//
// Architecture:
// - api.js fait les appels fetch
// - main.js utilise ces fonctions et met à jour le DOM
// - ui.js génère le HTML

// ============================================
// CONFIGURATION DE L'API
// ============================================
const API_BASE_URL = "http://localhost:3000/api/recipes"

// ============================================
// GET ALL RECIPES
// ============================================
// Cette fonction est fournie comme EXEMPLE de référence
// Étudiez-la pour comprendre le pattern fetch avec async/await

/**
 * Récupère toutes les recettes depuis l'API
 * @returns {Promise<Array>} - Tableau de recettes
 */
export const getAllRecipes = async () => {
	try {
		// 1. Faire la requête HTTP GET
		const response = await fetch(API_BASE_URL)

		// 2. Vérifier que la requête a réussi
		if (!response.ok) {
			throw new Error(`Erreur HTTP: ${response.status}`)
		}

		// 3. Extraire les données JSON
		const recipes = await response.json()

		// 4. Retourner les données
		return recipes
	} catch (error) {
		console.error("Erreur lors de la récupération des recettes:", error)
		throw error // Propager l'erreur pour que main.js puisse la gérer
	}
}

// ============================================
// CREATE A NEW RECIPE
// ============================================
// TODO: Compléter cette fonction pour créer une nouvelle recette

/**
 * Crée une nouvelle recette via l'API
 * @param {Object} recipeData - Les données de la recette (name, ingredients, instructions, prepTime)
 * @returns {Promise<Object>} - La recette créée avec son ID
 */
export const createRecipe = async (recipeData) => {
	try {
		// TODO 1: Créer l'objet de configuration pour fetch
		// Il doit contenir:
		// - method: 'POST'
		// - headers: { 'Content-Type': 'application/json' }
		// - body: JSON.stringify(recipeData)

		// TODO: Compléter l'objet options ici
		const options = {}

		// TODO 2: Faire la requête POST avec fetch(API_BASE_URL, options)
		const response = null // TODO: appeler fetch avec l'URL et les options

		// TODO 3: Vérifier que la requête a réussi (response.ok)
		// Si pas ok, throw new Error avec le status

		// TODO 4: Extraire et retourner les données JSON
		const newRecipe = null // TODO: appeler response.json()

		return newRecipe
	} catch (error) {
		console.error("Erreur lors de la création de la recette:", error)
		throw error
	}
}

// ============================================
// NOTES POUR LES ÉTUDIANTS
// ============================================
/*
STRUCTURE D'UN APPEL FETCH:

Format de base:
const response = await fetch(url, options)

Pour un GET (simple):
const response = await fetch('http://localhost:3000/api/recipes')

Pour un POST (avec données):
const response = await fetch('http://localhost:3000/api/recipes', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
})

MÉTHODES HTTP:

GET     → Récupérer des données (lecture)
POST    → Créer une ressource (création)
PUT     → Mettre à jour une ressource (modification complète)
DELETE  → Supprimer une ressource (suppression)

HEADERS:

Content-Type: 'application/json'
→ Indique qu'on envoie du JSON dans le body

BODY:

JSON.stringify(objet)
→ Convertit un objet JavaScript en string JSON
→ Nécessaire car fetch n'accepte que des strings dans body

Exemple:
const data = { name: 'Pizza', prepTime: 30 }
const jsonString = JSON.stringify(data)
// Résultat: '{"name":"Pizza","prepTime":30}'

GESTION DES ERREURS:

response.ok
→ true si le status est 200-299 (succès)
→ false si 400-499 (erreur client) ou 500-599 (erreur serveur)

throw error
→ Lance une erreur qui sera catchée par le try/catch du code appelant
→ Permet à main.js de gérer l'erreur avec un alert()

ASYNC/AWAIT:

await fetch()        → Attend la réponse du serveur
await response.json() → Attend la conversion en JSON

IMPORTANT: await ne peut être utilisé que dans une fonction async!

PATTERN COMPLET D'UNE FONCTION API:

export const maFonction = async (parametre) => {
	try {
		// 1. Préparer les options (si POST/PUT/DELETE)
		const options = { method: 'POST', headers: {...}, body: ... }
		
		// 2. Faire la requête
		const response = await fetch(url, options)
		
		// 3. Vérifier le succès
		if (!response.ok) {
			throw new Error(`Erreur: ${response.status}`)
		}
		
		// 4. Extraire les données
		const data = await response.json()
		
		// 5. Retourner les données
		return data
		
	} catch (error) {
		console.error('Erreur:', error)
		throw error  // Propager pour gestion par main.js
	}
}

CODES DE STATUT HTTP COURANTS:

200 OK           → Succès (GET, PUT, DELETE)
201 Created      → Ressource créée (POST)
400 Bad Request  → Données invalides
404 Not Found    → Ressource non trouvée
500 Server Error → Erreur serveur

DEBUGGING:

Si fetch ne fonctionne pas:
1. Vérifier que le serveur backend est démarré (npm run dev)
2. Vérifier l'URL (http://localhost:3000/api/recipes)
3. Regarder la console (F12) pour les erreurs
4. Vérifier le Network tab pour voir la requête
5. Tester avec Postman pour confirmer que l'API fonctionne

CORS (Cross-Origin Resource Sharing):

Si vous voyez une erreur CORS:
→ Le backend doit avoir le middleware cors configuré
→ Vérifiez que server.js contient: app.use(cors())

DIFFÉRENCE ENTRE response ET data:

response        → L'objet Response complet de fetch
response.ok     → Boolean: la requête a réussi?
response.status → Number: code HTTP (200, 404, etc.)
response.json() → Méthode pour extraire le JSON

data            → Les données extraites du response
                → C'est ce qu'on manipule et retourne
*/
