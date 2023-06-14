const express = require("express")
const router = express.Router()

const Card = require("../models/Card")

const checkToken = require("../middlewares/checkToken")

router.use(checkToken)
// Rota GET ALL para obter todos os cards
router.get("/", async (req, res) => {
  try {
    const cards = await Card.find({ userId: req.userId })
    res.json(cards)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Rota GET para obter um card específico pelo ID
router.get("/:id", getCard, (req, res) => {
  res.json(res.card)
})

// Rota POST para criar um novo card
router.post("/", async (req, res) => {
  const card = new Card({
    title: req.body.title,
    content: req.body.content,
    column: "TODO",
    userId: req.userId,
  })

  try {
    const newCard = await card.save()
    res.status(201).json(newCard)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Rota PUT para atualizar um card existente
router.put("/:id", getCard, async (req, res) => {
  if (req.body.title != null) {
    res.card.title = req.body.title
  }

  if (req.body.content != null) {
    res.card.content = req.body.content
  }

  if (req.body.column != null) {
    res.card.column = req.body.column
  }

  try {
    const updatedCard = await res.card.save()
    res.json(updatedCard)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Rota DELETE para excluir um card
router.delete("/:id", async (req, res) => {
  try {
    await Card.findByIdAndRemove(req.params.id)
    res.json({ message: "Card deleted" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Middleware para obter um card pelo ID
async function getCard(req, res, next) {
  let card
  try {
    card = await Card.findById(req.params.id)
    if (card == null) {
      return res.status(404).json({ message: "Card not found" })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.card = card
  next()
}

module.exports = router
