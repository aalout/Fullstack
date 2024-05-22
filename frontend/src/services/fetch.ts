import { Category } from '../types/category'
import { Product } from "../types/product"
import { Promo } from "../types/promo"
import { News } from "../types/news"
import { Cart } from '@/types/cart'

const BASE = 'http://178.154.206.159:7676/api'

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE}/Product`);
  if (!res.ok) throw new Error('Error fetching products');
  return res.json();
}

export async function fetchPromos(): Promise<Promo[]> {
    const res = await fetch(`${BASE}/promo`);
    if (!res.ok) throw new Error('Error fetching product');
    return res.json();
  }

  export async function fetchNews(): Promise<News[]> {
    const res = await fetch(`${BASE}/news`);
    if (!res.ok) throw new Error('Error fetching product');
    return res.json();
  }

  export async function fetchCategory(): Promise<Category[]> {
    const res = await fetch(`${BASE}/category`);
    if (!res.ok) throw new Error('Error fetching product');
    return res.json();
  }

  export async function fetchCart(): Promise<Cart[]> {
    const res = await fetch(`${BASE}/cart`);
    if (!res.ok) throw new Error('Error fetching cart');
    return res.json();
  }