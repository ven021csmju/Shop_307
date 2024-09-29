import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';


const products = [
  { id: 1, name: "Basketball", price: 1500, image: './src/picture/badminton.jpg' },
  { id: 2, name: "Football", price: 2000, image: './src/picture/Football.jpg' },
  { id: 3, name: "Tennis Racket", price: 5000, image: '/src/picture/tennis.jpg' },
  { id: 4, name: "Running Shoes", price: 2500, image: '/src/picture/shoes.jpg' },
  { id: 5, name: "Yoga Mat", price: 500, image: '/src/picture/yoga.jpg'},
  { id: 6, name: "Dumbbell Set", price: 15000, image: '/src/picture/dumbel.jpg' },
  { id: 7, name: "Golf Set", price: 14999, image: '/src/picture/golf.jpg' },
  { id: 8, name: "Swimming Goggles", price: 300, image: '/src/picture/swim.jpg' },
  { id: 9, name: "Badminton Set", price: 150, image: '/src/picture/badmintin.jpg' },
  { id: 10, name: "Volleyball", price: 500, image: '/src/picture/volley.jpg'},
];

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [couponCode, setCouponCode] = useState('');

  const Checkout = () => {
    if (cartItems.length > 0) {
      alert("สั่งซื้อสินค้าสำเร็จ!")
      setCartItems([])
    }else{
      alert("ไม่พบสินค้าที่เลือก")
    }
  }

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const applyCoupon = (code) => {
    setCouponCode(code);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">SHOPYAEN</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductList products={products} addToCart={addToCart} />
          <ShoppingCart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            applyCoupon={applyCoupon}
            couponCode={couponCode}
            Checkout={Checkout}
          />
        </div>
      </div>
    </div>
  );
}
