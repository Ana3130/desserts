import {AddToCart } from "/Icons"
import './App.css'
import dessertsProducts from "./data.json"

const BASE_URL= "https://res.cloudinary.com/dc2c49xov/desserts"

console.log(dessertsProducts)

function App() {
  return (
  <h1>
    Hello world * <AddToCart/>
    </h1>)
   {dessertsProducts.map((dessert) => {
    return (
      <div key={dessert.name}>
        <img src={`${BASE_URL}/${dessert.images.thumbnail}`} alt="" />
      </div>
    )
  })} }

export default App
