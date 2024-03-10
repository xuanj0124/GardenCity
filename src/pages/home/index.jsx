import React from 'react'
import './home.css'

const trending = [
  {
    name: "rose",
    productId: 1,
    farmer: "Farmer A",
    price: 5,
    image: '/flowers/rose.jpg'
  },
  {
    name: "lily",
    productId: 3,
    farmer: "Farmer B",
    price: 5,
    image: '/flowers/lily.jpg'
  },
];

const Home = () => {
  return (
    <div>
      <div>
        <input className='search' type="text" placeholder="Search" />
      </div>
      <div>
        <div className="trending">{
          trending.map((flower) => {
            return <div key={flower.productId}>
              <img src={flower.image} alt={flower.name} height={200} width={200} />
              <h1>{flower.name}</h1>
              <p>{flower.farmer}</p>
              <p>${flower.price}</p>
            </div>
          })}
        </div>
      </div>
    </div>

  )
}

export default Home