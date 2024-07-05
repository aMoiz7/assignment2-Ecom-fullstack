import React from 'react';


type CardProps = {
    img: string;
    name: string;
    amount: string;
    addToCart: () => void; // Define the type of addToCart function
  }; 
const Card = ({ img, name, amount, addToCart }:CardProps) => {
  const handleAddToCart = () => {
    addToCart(); // Call the addToCart function passed as props
  };

  return (
    <div className=' mt-24 w-11/12 flex flex-row  flex-wrap justify-center align-middle'>
    <div className="max-w-xs  bg-white border border-gray-200 rounded-lg shadow ">
      <a href="#">
        <img className="rounded-t-lg" src={img} alt={name} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{amount}</h4>
        <button className="bg-black text-white" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
    </div>
  );
};

export default Card;
