// Lightweight cart store using a custom event bus.
// Designed to be replaced by Shopify Storefront Cart API later.
import { useEffect, useState } from "react";
import type { Product } from "./placeholder-data";

export type CartLine = { product: Product; quantity: number };

const KEY = "dermaexcel.cart";
const EVT = "dermaexcel:cart-change";

const read = (): CartLine[] => {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
};

const write = (lines: CartLine[]) => {
  localStorage.setItem(KEY, JSON.stringify(lines));
  window.dispatchEvent(new CustomEvent(EVT));
};

export const cart = {
  add(product: Product, quantity = 1) {
    const lines = read();
    const existing = lines.find((l) => l.product.id === product.id);
    if (existing) existing.quantity += quantity;
    else lines.push({ product, quantity });
    write(lines);
  },
  remove(productId: string) {
    write(read().filter((l) => l.product.id !== productId));
  },
  update(productId: string, quantity: number) {
    const lines = read()
      .map((l) => (l.product.id === productId ? { ...l, quantity } : l))
      .filter((l) => l.quantity > 0);
    write(lines);
  },
  clear() {
    write([]);
  },
  get() {
    return read();
  },
};

export function useCart() {
  const [lines, setLines] = useState<CartLine[]>([]);
  useEffect(() => {
    setLines(read());
    const onChange = () => setLines(read());
    window.addEventListener(EVT, onChange);
    return () => window.removeEventListener(EVT, onChange);
  }, []);
  const subtotal = lines.reduce((s, l) => s + l.product.price.amount * l.quantity, 0);
  const count = lines.reduce((s, l) => s + l.quantity, 0);
  return { lines, subtotal, count };
}

const DRAWER_EVT = "dermaexcel:cart-open";
export const openCart = () => window.dispatchEvent(new CustomEvent(DRAWER_EVT));
export const onOpenCart = (cb: () => void) => {
  window.addEventListener(DRAWER_EVT, cb);
  return () => window.removeEventListener(DRAWER_EVT, cb);
};
