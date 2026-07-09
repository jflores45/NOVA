import { products } from "../data/products";
import { useParams } from "react-router-dom";

function ProductPage() {
    const { id } = useParams();

    const product = products.find((p) => p.id === id);

    if (!product) {
      return <h2>Product not found</h2>;
    }

    return (
        <>
          <div className="Carosols">
            <img className="Main" src={product.images}/>
            <img className="preview"/>
            <img className="preview"/>
            <img className="preview"/>
            <img className="preview"/>
          </div>
          
          <div>
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            
              <div>
                {product.sizes.map((s) => (
                  <button key={s}>{s}</button>
                ))}
              </div>

              <div>
                {product.colors.map((c) => (
                  <button key={c}>{c}</button>
                ))}
              </div>
          </div>

          <button>ADD TO BAG</button>

          <hr/>

          <div>
            <p>{product.description}</p>
          </div>
        </>
    );
   
  }
  
  export default ProductPage;