"use client";
import { Product } from "@/sanity.types";
import { ShoppingBag } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
interface Props {
  product: Product;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
  const isOutOfStock = product?.stock === 0;
  const handleAddToCart = () => {
    window.alert("Added to cart");
  };
  return (
    <div>
      <Button
        onClick={handleAddToCart}
        disabled={isOutOfStock}
        className={cn(
          "w-full bg-shop_dark_green/80 text-shop_light_bg text-lightBg shadow-none border-shop_dark_green/80 font-semibold tracking-wide hover:text-white hover:bg-shop_btn_dark_green hover:border-shop_dark_green hoverEffect",
          className
        )}
      >
        <ShoppingBag /> {isOutOfStock ? "Out of Stock" : "Add to Cart"}
      </Button>
    </div>
  );
};

export default AddToCartButton;
