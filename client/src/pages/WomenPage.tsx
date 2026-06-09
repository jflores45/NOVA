import ProductGrid from "../components/features/ProductGrid";
import { products } from "../data/products";

function WomenPage() {
  return (
    <>
      <ProductGrid products={products} />
    </>
  );
}

export default WomenPage;