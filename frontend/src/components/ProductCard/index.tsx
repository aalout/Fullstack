"use client"

import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.scss';
import { Product } from "../../types/product";
import { addToCart } from '@/hooks/addToCart';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [notification, setNotification] = useState(false);

  if (!product) {
    return <div>Loading...</div>;
  }

const handleAddToCart = async () => {
  await addToCart(product.id, 1, product.price, product.title, product.image);
  setNotification(true);
  setTimeout(() => setNotification(false), 2000);
};

  return (
    <div className={styles.productCard}>
        <Link href={`/products/${product.id}`}> 
          <div className={styles.image_con}>
            <Image
              src={`/assets/images/product_card/${product.image}`}
              alt={product.title}
              height={300}
              width={370}
              className={styles.productImage}
            />
          </div>
        </Link>
        <Link href={`/products/${product.id}`}>
          <div className={styles.textBlock}>
            <h3>{product.title}</h3>
            <p>{product.text}</p>
          </div>
        </Link>
        <div className={styles.priceAndCart}>
          <p className={styles.price}>{product.price} руб</p>
          <button onClick={handleAddToCart} className={styles.cartLink}>
            <Image
              width={24}
              height={24}
              src="/assets/icons/bag.png"
              alt="phone"
              className={styles.cartIcon}
            />
            <p>В корзину</p>
          </button>
        </div>
        <div className={`${styles.popup} ${notification ? styles.show : ''}`}>
            Товар добавлен в корзину!
        </div>
    </div>
  );
}
