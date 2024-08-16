import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from '../context/shop-context';
import "./navbar.css";

export const Navbar = () => {
    const { getTotalCartCount } = useContext(ShopContext);
    const cartCount = getTotalCartCount();
    console.log("cart Count :", cartCount);
  return (
    <div className='navbar'>
        <div className='links'>
        <Link to="/"> Shop </Link>
        <Link to="/cart"> 
        <ShoppingCart size={32}/>
        <span>{cartCount}</span>
        </Link>
        </div>
    </div>
  )
}

