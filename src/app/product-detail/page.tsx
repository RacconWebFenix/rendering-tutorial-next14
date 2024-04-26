import { Suspense } from "react";
import { Product } from "../components/product";
import { Reviews } from "../components/reviews";

export default function ProductDetailPage() {
  return (
    <div>
      <Suspense fallback={<p>Loading product details...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
