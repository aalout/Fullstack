'use client';

import styles from './AllProduct.module.scss';
import ProductCard from '../ProductCard';
import { useProductQuery } from '../../hooks/useProductsQuery';
import { useCategoryQuery } from '@/hooks/useCategoryQuery';
import CategoryButton from '../CategoryButton';
import { useState } from 'react';
import { Category } from '@/types/category';

export default function AllProduct() {
  const { data: products } = useProductQuery();
  const { data: category } = useCategoryQuery();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  

  if (!products) {
    return <div>Загрузка...</div>;
  }
  if (!category) {
    return <div>Загрузка...</div>;
  }

  const filteredProducts = selectedCategory
  ? products.filter((product) => product.category.id === (selectedCategory as Category).id)
  : products;

  return (
    <div className={styles.allproduct}>
      <div className={styles.product_con_title}>
        <h1>Все наборы</h1>
      </div>

        <div className={styles.category_con}>
      <div className={styles.categoryButtons}>
        {category.map((category) => (
          <CategoryButton key={category.id} category={category} onClick={() => setSelectedCategory(category)} />
        ))}
      </div>
      </div>

      <div className={styles.productCon}>
        <div className={styles.product}>
        {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}