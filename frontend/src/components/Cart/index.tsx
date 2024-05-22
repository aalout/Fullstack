"use client"

import React, { useState, useEffect } from 'react';
import { useCart } from '@/hooks/useCart';
import Image from 'next/image';
import { deleteFromCart } from '@/hooks/deleteFromCart';
import { updateQuantity } from '@/hooks/updateCart';
import { Cart } from "../../types/cart";
import styles from "./Cart.module.scss"

export default function CartModule() {
  const { data, isLoading, refetch } = useCart();
  const [cartData, setCartData] = useState<Cart[]>(data || []);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalWithDelivery, setTotalWithDelivery] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cartData.length);
  }, [cartData]);

  useEffect(() => {
    let sum = 0;
    for (const cart of cartData) {
      sum += cart.price * cart.quantity;
    }
    setTotalPrice(sum);
    setTotalWithDelivery(sum + 400);
  }, [cartData]);

  useEffect(() => {
    setCartData(data || []);
  }, [data]);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (!data) {
    return <div>Корзина пуста</div>;
  }

  const handleDelete = async (id: number) => {
    await deleteFromCart(id);
    refetch();
  };

  const handleQuantityChange = async (id: number, quantity: number) => {
   if (quantity < 1) return;
   const updatedCartData = cartData.map((cart) => {
     if (cart.id === id) {
       return {...cart, quantity };
     }
     return cart;
   });
   setCartData(updatedCartData);
   await updateQuantity(id, quantity);
 };

  return (
    <div>
      <div className={styles.cart_title}>
        <h1>Ваша корзина</h1>
      </div>
      <div className={styles.cart_main}>
        <div className={styles.table_con}>
          <table>
            <tbody className={styles.table}>
              {cartData.map((cart) => (
                <tr key={`${cart.id}-${cart.quantity}`}>
                  <td>
                    <Image src={`/assets/images/product_card/${cart.image}`} height={80} width={80} alt="product_image" className={styles.tableImg} />
                  </td>
                  <td className={styles.itemTitle}>{cart.title}</td>
                  <td className={styles.quantity}>
                      <button className={styles.quantity_button} onClick={() => handleQuantityChange(cart.id, cart.quantity - 1)}><p>-</p></button>
                      {cart.quantity}
                      <button className={styles.quantity_button} onClick={() => handleQuantityChange(cart.id, cart.quantity + 1)}><p>+</p></button>
                  </td>
                  <td className={styles.tablePrice}>Цена: {cart.price} руб.</td>
                  <td>
                    <button onClick={() =>
                      handleDelete(cart.id)} className={styles.delete}>
                      <p>×</p>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.finalPrice}>
          <h1>Итого</h1>
          <div className={styles.product_price}>
            <p>Стоимость товаров</p>
            <p>{totalPrice} руб</p>
          </div>
          <div className={styles.delivery_price}>
            <p>Стоимость доставки</p>
            <p>400 руб</p>
          </div>
          <div className={styles.final}>
            <p>К оплате</p>
            <p>{totalWithDelivery} руб</p>
          </div>
          <div className={styles.order}>
            <button>
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};