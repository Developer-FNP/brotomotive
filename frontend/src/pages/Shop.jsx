import React from 'react'
import './Shop.css'
import ShopCard from '../components/ShopCard';
import engine from '../assets/engine.png';
import trans from '../assets/transmission.png';
import parts from '../assets/parts.png';

const Shop = () => {
  return (
    <>
        <div id="shop">
            <h1 id='shead'>SHOP BY CATEGORY</h1>
        <div id="cards">
            <ShopCard imageSrc={engine} label="TRUCK ENGINE" />
            <ShopCard imageSrc={trans} label="TRUCK TRANSMISSION" />
            <ShopCard imageSrc={parts} label="TRUCK PARTS" />

        </div>
        </div>
    </>
  )
}

export default Shop
