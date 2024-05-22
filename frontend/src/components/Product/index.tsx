'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Product.module.scss';
import ProductCard from '../ProductCard';
import { useProductQuery } from '../../hooks/useProductsQuery';

export default function Product() {
  const { data: products } = useProductQuery();

  if (!products) {
    return <div>Загрузка...</div>;
  } else {
    const displayedProducts = products.slice(0, 6);

    return (
      <div>
        <div className={styles.product_con_title}>
          <h1>Популярные наборы</h1>
        </div>

        <div className={styles.productCon}>
          <div className={styles.product}>
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Link href="/product"><button className={styles.button}>Все праздничные наборы</button></Link>
        </div>
      </div>
    );
  }
}
