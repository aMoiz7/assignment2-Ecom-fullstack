import React from 'react';
import { useDispatch } from 'react-redux';
import Card from '../components/card';
import { addToCart } from '../Slice/productSlice';



const Home = () => {
  const dispatch = useDispatch();

  const products = [
    {
    img:"https://images.news18.com/ibnlive/uploads/2023/10/macbook-air-m1-2023-10-c3ced763eda4931bd195f9e7ff255169.jpg?impolicy=website&width=640&height=480",
    name:"macbook m1",
    amount:"90000"
}
,{
    img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-model-unselect-gallery-1-202209_FMT_WHH?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1660745142376",
    name:"Iphone 15 pro",
    amount:"150000"
}
,{
    img:"https://www.apple.com/v/watch/bm/images/meta/watch-gps-lte__f3xmp4zpdka6_og.png",
    name:"I watch 8",
    amount:"75000"
}
]


  const handleAddToCart = (name :string, amount:string) => {
    dispatch(addToCart({ name, amount }));
  };

  return (
    <div>
        
      {products.map((product, index) => (
        <Card
          key={index}
          img={product.img}
          name={product.name}
          amount={product.amount}
          addToCart={() => handleAddToCart(product.name, product.amount)}
        />
      ))}
    </div>
  );
};

export default Home;
