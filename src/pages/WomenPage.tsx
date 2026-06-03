import ProductGrid from "../components/features/ProductGrid";
import { products } from "../data/products";

function WomenPage() {
  return (
    <>
      <h1>Women</h1>

      <ProductGrid products={products} />
    </>
  );
}

export default WomenPage;