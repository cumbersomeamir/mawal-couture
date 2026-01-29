"use client";
import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { setProducts } from "../store/slices/productsSlice";

export default function SeedLoader() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/data/products.json");
        if (!res.ok) return;
        const products = await res.json();
        // Normalize and include all fields
        const items = products.map((p: any) => ({
          id: p.id,
          name: p.title || p.name,
          slug: p.slug,
          price: p.price,
          images: p.images || [],
          description: p.description || "",
          category: p.category,
          collection: p.collection || p.collectionName,
          gender: p.gender,
          tags: p.tags || []
        }));
        dispatch(setProducts(items));
      } catch (err) {
        console.warn("Failed to load seed products", err);
      }
    }
    load();
  }, [dispatch]);

  return null;
}
