import '../Cards/cardsStyle.css'
// import { Link } from 'react-router-dom'
function Cards({name, price, synopsis}) {

  return (
    <div className="cards container">
      <div className="card">
        <img
          src="https://m.media-amazon.com/images/P/B00S8JNR50.01._SCLZZZZZZZ_SX500_.jpg"
          alt="Denim Jeans"
        ></img>
        <h1>{name}</h1>
        <p className="price">R${price}</p>
        <p>{synopsis}</p>
        <p>
         <button>Add to cart</button>
        </p>
        
      </div>
        
    </div>
  )
}
export default Cards
