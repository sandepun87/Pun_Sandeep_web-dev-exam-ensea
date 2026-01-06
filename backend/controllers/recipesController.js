import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {
	res.json({
		message: "Welcome To EPITA'S Exam !",
	})
})

export default router
