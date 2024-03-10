import React from "react";
import "./products.css";
import Dropdown from "../../components/Dropdown";


const flowers = [
  {
    name: "rose",
    productId: 1,
    farmer: "Farmer A",
    price: 5,
    image: '/flowers/rose.jpg'
  },
  {
    name: "peony",
    productId: 2,
    farmer: "Farmer B",
    price: 5,
    image: '/flowers/peony.jpg'
  },
];
const Products = () => {
  return (<div>
    <div>
      <input className="search" type="text" placeholder="Search" />
      <Dropdown />
    </div>
    <div className="flowers">{
      flowers.map((flower) => {
        return <div key={flower.productId}>
          <img src={flower.image} alt={flower.name} height={200} width={200} />
          <h1>{flower.name}</h1>
          <p>{flower.farmer}</p>
          <p>${flower.price}</p>
        </div>
      })}
    </div>
  </div>)
}


export default Products;
