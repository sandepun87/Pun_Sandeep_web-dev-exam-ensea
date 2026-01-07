import express from "express"
import recipesRouter from "./routes/recipes.js"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
	res.json({
		message: "Welcome To EPITA'S Exam !",
	})
})

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use("/api/recipes", recipesRouter)

app.listen(PORT, () => {
	console.log(`Server running on port http://localhost:${PORT}`)
})
