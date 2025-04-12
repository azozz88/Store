
import { useState, useEffect } from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">منتجات مميزة</h2>
        <a href="/products" className="text-primary hover:underline">
          عرض الكل
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            featured={product.id === featuredProducts[0].id} 
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
