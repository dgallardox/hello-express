import express from "express";
const PORT = process.env.PORT || 3000;

const app = express()

app.listen(PORT, () => {
  console.log(`Express server now running on port ${PORT}`)
})

app.get("/", (req, res) => {
  res.send(
    "I am replying to the http request on the root path!!!"
  )
})

app.get("/fruits", (req, res) => {
  res.json(fruits)
})

const fruits = [{
    id: "1",
    name: "lime",
    color: "green",
  },
  {
    id: "2",
    name: "banana",
    color: "yellow"
  },
  {
    id: "3",
    name: "apple",
    color: "red"
  }
]

app.get("/fruits/:id", (req, res) => {
  const id = req.params.id
  const fruit = fruits[id - 1]
  res.json(fruit)
})

const products = [{
    id: "1",
    name: "iPad Mini",
    color: "499",
  },
  {
    id: "2",
    name: "Oculus Rift",
    color: "399"
  },
  {
    id: "3",
    name: "Poster",
    color: "19"
  }
]

app.get("/products", (req, res) => {
  res.json(products)
})

app.get("/products/:id", (req, res) => {
  const id = req.params.id
  const product = products[id - 1]
  res.json(product)
})

const users = ['Sophia', 'Bob', 'Kim', 'John', 'Allan', 'Chloe', 'Jen', 'Ally', 'Ben']

app.get("/users", (req, res) => {
  res.json(users)
})

app.get("/users/:name", (req, res) => {
  const name = req.params.name
  const capitalName = name.charAt(0).toUpperCase() + name.slice(1)

  res.json(users.indexOf(capitalName) !== -1 ? `${capitalName} is a user!` : `Who is ${capitalName}?`)
})

app.get("/years/:year", (req, res) => {
  const year = req.params.year
  const currentYear = 2022
})