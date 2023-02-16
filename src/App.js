import { useState } from "react"

import "./App.css"

export default function App() {
  const [dish, setDish] = useState("Yummy")

  const favoriteDish = [
    "Lomo Saltado",
    "Pizza from SF",
    "PHO",
    "Salmon Teryaki",
    "Combination Fried Rice",
    "Chipotle",
    "Crazy Alfredo",
    "Carne Asada",
    "Chicken Tikka Masala",
    "Pierogi",
    "Borsh",
    "Three carne asada tacos",
    "Bongo Burger",
  ]

  const press = () => {
    const foodToday =
      favoriteDish[Math.floor(Math.random() * favoriteDish.length)]
    console.log(foodToday)
    console.log(`Roulette animation started`)
    setDish(foodToday)
    console.log(dish)
  }

  return (
    <div className="App">
      <h1>Pick a dish!</h1>
      <h2>Press Start and we'll select a random delicious entree for you</h2>
      <div className="card">
        <button onClick={press}> START</button>
        <h3>{dish}</h3>

        <p>
          <code>
            Tip: Order the first random choice to make the best of this app!
          </code>
        </p>
      </div>
      <p className="read-the-docs">
        This app was inspired by hard working developers, content creators and
        other professionals who can't decide what to eat
      </p>
    </div>
  )
}
