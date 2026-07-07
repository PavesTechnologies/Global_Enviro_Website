"use client";
import ProductCard from "./ProductCard";
import MotionWrapper from "@/components/common/MotionWrapper";

export default function ProductCarousel({ products }) {
  return (
    <MotionWrapper
      as="div"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full py-16 flex flex-col items-center gap-12"
    >
      {products.map((item) => (
        <MotionWrapper
          as="div"
          key={item.id}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="w-[85%] max-w-5xl"
        >
          <ProductCard {...item} />
        </MotionWrapper>
      ))}
    </MotionWrapper>
  );
}
