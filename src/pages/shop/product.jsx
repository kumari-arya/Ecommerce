import React, {useContext} from 'react'
import { ShopContext } from '../../context/shop-context';
import { motion } from 'framer-motion';
export const Product = (props) => {
  const {id, productName, price, productImage} = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartCount = cartItems[id];
  return (
    <div className='product'>
      {/* <img src={productImage}/> */}
      <motion.img
        src={productImage}
        alt={productName}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
      <div className='description'>
       <p>
        <b>{productName}</b>
       </p>
       <p>${price}</p>
      </div>
      {/* <button className='addToCartBttn' onClick={() => addToCart(id)}>Add To Cart {cartCount > 0 && <> ({cartCount})</>}</button> */}
      <motion.button className='addToCartBttn'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => addToCart(id)}
      >
        Add To Cart {cartCount > 0 && <> ({cartCount})</>}
      </motion.button>
    </div>
  )
}

