'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getProductById, Product } from '../../../lib/stripe';
import { useCartStore } from '../../../store/useCartStore';
import CartSlideOver from '../../../components/CartSlideOver';

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const prod = await getProductById(id as string);
        setProduct(prod);
      };
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItem(product);
      setIsCartOpen(true);
    }
  };

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-images">
        {product.images.map((img, index) => (
          <img key={index} src={img} alt={product.name} />
        ))}
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p className="price">{product.price} €</p>
        <button onClick={handleAddToCart} className="add-to-cart">
          Ajouter au panier
        </button>
      </div>
      <CartSlideOver isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}